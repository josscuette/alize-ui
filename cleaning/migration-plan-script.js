const fs = require('fs');
const path = require('path');

// Lire les fichiers
const auditReport = JSON.parse(fs.readFileSync('./cleaning/audit-report.json', 'utf-8'));
const tokensMap = JSON.parse(fs.readFileSync('./scripts/tokens-map.json', 'utf-8'));

// Fonction pour extraire le token d'une classe arbitraire
function extractToken(arbitraryClass) {
  const match = arbitraryClass.match(/var\(--semantic-([^)]+)\)/);
  return match ? `--semantic-${match[1]}` : null;
}

// Fonction pour déterminer le contexte (text, bg, border, etc.)
function determineContext(arbitraryClass, fullLine) {
  // Trouver la position de la classe arbitraire dans la ligne
  const classIndex = fullLine.indexOf(arbitraryClass);
  if (classIndex === -1) return null;
  
  // Extraire la partie avant la classe arbitraire (sur la même ligne de classe)
  const beforeClass = fullLine.substring(0, classIndex);
  
  // Chercher le dernier préfixe avant [var(...)]
  // Patterns pour détecter le contexte juste avant la classe arbitraire
  const patterns = [
    { pattern: /bg-\[var\(/i, context: 'bg' },
    { pattern: /text-\[var\(/i, context: 'text' },
    { pattern: /border-\[var\(/i, context: 'border' },
    { pattern: /ring-\[var\(/i, context: 'ring' },
    { pattern: /decoration-\[var\(/i, context: 'decoration' },
  ];
  
  // Chercher dans la partie avant la classe
  for (const { pattern, context } of patterns) {
    if (pattern.test(beforeClass + arbitraryClass)) {
      return context;
    }
  }
  
  // Si pas trouvé, chercher dans toute la ligne (fallback)
  const lineLower = fullLine.toLowerCase();
  if (lineLower.includes('bg-[') || lineLower.includes('bg[')) {
    return 'bg';
  }
  if (lineLower.includes('text-[') || lineLower.includes('text[')) {
    return 'text';
  }
  if (lineLower.includes('border-[') || lineLower.includes('border[')) {
    return 'border';
  }
  if (lineLower.includes('ring-[') || lineLower.includes('ring[')) {
    return 'ring';
  }
  
  return null;
}

// Fonction pour trouver la classe Tailwind dans le mapping
function findTailwindClass(token, context, arbitraryClass, fullLine) {
  if (!token) return null;
  
  // Extraire les parties du token: --semantic-{category}-{name}
  const parts = token.replace('--semantic-', '').split('-');
  if (parts.length < 2) return null;
  
  const category = parts[0]; // text, icon, surface, stroke
  const name = parts.slice(1).join('-'); // interaction-default, subdued, etc.
  
  // Vérifier si la catégorie existe dans le mapping
  if (!tokensMap.semantic[category]) return null;
  
  // Vérifier si le nom existe dans la catégorie
  if (!tokensMap.semantic[category][name]) return null;
  
  const tokenConfig = tokensMap.semantic[category][name];
  
  // Si un contexte est fourni, chercher la propriété correspondante
  if (context && tokenConfig[context]) {
    return tokenConfig[context];
  }
  
  // Si le contexte n'est pas bon, essayer de deviner depuis la catégorie et le contexte de la ligne
  // Chercher directement autour de la classe arbitraire
  const classIndex = fullLine.indexOf(arbitraryClass);
  if (classIndex !== -1) {
    const beforeClass = fullLine.substring(Math.max(0, classIndex - 20), classIndex);
    const afterClass = fullLine.substring(classIndex + arbitraryClass.length, Math.min(fullLine.length, classIndex + arbitraryClass.length + 20));
    const contextArea = (beforeClass + afterClass).toLowerCase();
    
    // Chercher les patterns dans la zone autour de la classe
    if (contextArea.includes('text-[') || contextArea.includes('text[') || beforeClass.trim().endsWith('text-')) {
      if (tokenConfig.text) return tokenConfig.text;
    }
    if (contextArea.includes('bg-[') || contextArea.includes('bg[') || beforeClass.trim().endsWith('bg-')) {
      if (tokenConfig.bg) return tokenConfig.bg;
    }
    if (contextArea.includes('border-[') || contextArea.includes('border[') || beforeClass.trim().endsWith('border-')) {
      if (tokenConfig.border) return tokenConfig.border;
    }
    if (contextArea.includes('ring-[') || contextArea.includes('ring[')) {
      if (tokenConfig.ring) return tokenConfig.ring;
    }
  }
  
  // Par défaut, retourner la première propriété disponible selon la catégorie
  // Les catégories ont généralement un contexte par défaut
  const defaultContexts = {
    'text': 'text',
    'icon': 'text',
    'surface': 'bg',
    'stroke': 'border',
  };
  
  const defaultContext = defaultContexts[category];
  if (defaultContext && tokenConfig[defaultContext]) {
    return tokenConfig[defaultContext];
  }
  
  // Dernier recours : première propriété disponible
  const keys = Object.keys(tokenConfig);
  if (keys.length > 0) {
    return tokenConfig[keys[0]];
  }
  
  return null;
}

// Grouper les occurrences par fichier
const byFile = {};
auditReport.arbitraryValues.forEach(item => {
  if (!byFile[item.file]) {
    byFile[item.file] = [];
  }
  byFile[item.file].push(item);
});

// Générer le plan
let plan = `# Plan de Migration - Phase 2\n\n`;
plan += `**Date:** ${new Date().toISOString()}\n\n`;
plan += `## Résumé\n\n`;
plan += `- **Fichiers à migrer:** ${Object.keys(byFile).length}\n`;
plan += `- **Occurrences totales:** ${auditReport.arbitraryValues.length}\n\n`;

// Statistiques
let directReplacements = 0;
let ambiguities = 0;
let missingTokens = 0;
const missingTokensList = new Set();
const ambiguitiesList = [];

// Traiter chaque fichier
Object.keys(byFile).sort().forEach(file => {
  plan += `## Fichier: \`${file}\`\n\n`;
  
  byFile[file].forEach(item => {
    const token = extractToken(item.class);
    const context = determineContext(item.class, item.fullLine);
    const tailwindClass = token ? findTailwindClass(token, context, item.class, item.fullLine) : null;
    
    plan += `### Ligne ${item.line}\n\n`;
    plan += `**Classe arbitraire:** \`${item.class}\`\n\n`;
    plan += `**Contexte détecté:** ${context || 'Non détecté'}\n\n`;
    plan += `**Token extrait:** ${token || 'Non trouvé'}\n\n`;
    
    if (!token) {
      plan += `⚠️ **ERREUR:** Impossible d'extraire le token de la classe arbitraire\n\n`;
      ambiguities++;
    } else if (!tailwindClass) {
      plan += `❌ **TOKEN MANQUANT:** Le token \`${token}\` n'existe pas dans \`tokens-map.json\`\n\n`;
      missingTokens++;
      missingTokensList.add(token);
    } else {
      // Construire la classe de remplacement complète
      let replacement = tailwindClass;
      
      // Si le contexte n'a pas été détecté mais qu'on a une classe, essayer de préserver le préfixe
      if (!context && item.class.includes('text-')) {
        // Le mapping retourne déjà text-semantic-..., donc c'est bon
      } else if (!context && item.class.includes('bg-')) {
        // Le mapping retourne déjà bg-semantic-..., donc c'est bon
      } else if (!context && item.class.includes('border-')) {
        // Le mapping retourne déjà border-semantic-..., donc c'est bon
      }
      
      plan += `✅ **REMPLACEMENT DIRECT:**\n`;
      plan += `- **Ancien:** \`${item.class}\`\n`;
      plan += `- **Nouveau:** \`${replacement}\`\n\n`;
      directReplacements++;
    }
    
    plan += `**Ligne complète:**\n\`\`\`\n${item.fullLine}\n\`\`\`\n\n`;
    plan += `---\n\n`;
  });
});

// Section des problèmes
plan += `## Problèmes identifiés\n\n`;

plan += `### Tokens manquants dans tokens-map.json\n\n`;
if (missingTokensList.size === 0) {
  plan += `Aucun token manquant.\n\n`;
} else {
  plan += `**Total:** ${missingTokensList.size} tokens manquants\n\n`;
  Array.from(missingTokensList).sort().forEach(token => {
    plan += `- \`${token}\`\n`;
    
    // Suggestions basées sur le token manquant
    if (token === '--semantic-surface-interaction-default') {
      plan += `  \n  **⚠️ RECOMMANDATION:** Ce token n'existe pas dans le mapping. Options disponibles dans \`tokens-map.json\`:\n`;
      plan += `  - \`--semantic-surface-interaction-strong\` → \`bg-semantic-surface-interaction-strong\`\n`;
      plan += `  - \`--semantic-surface-interaction-bright\` → \`bg-semantic-surface-interaction-bright\`\n`;
      plan += `  - \`--semantic-surface-interaction-subdued\` → \`bg-semantic-surface-interaction-subdued\`\n`;
      plan += `  \n  **Action requise:** Déterminer quel token utiliser ou ajouter \`interaction-default\` au mapping.\n\n`;
    }
  });
  plan += `\n`;
}

plan += `### Statistiques\n\n`;
plan += `- ✅ **Remplacements directs:** ${directReplacements}\n`;
plan += `- ❌ **Tokens manquants:** ${missingTokens}\n`;
plan += `- ⚠️ **Ambiguïtés:** ${ambiguities}\n\n`;

// Sauvegarder
const planPath = './cleaning/MIGRATION-PLAN.md';
fs.writeFileSync(planPath, plan);
console.log(`✅ Plan de migration généré: ${planPath}`);

console.log('\n📊 Résumé:');
console.log(`  - Fichiers: ${Object.keys(byFile).length}`);
console.log(`  - Remplacements directs: ${directReplacements}`);
console.log(`  - Tokens manquants: ${missingTokens}`);
console.log(`  - Ambiguïtés: ${ambiguities}`);

