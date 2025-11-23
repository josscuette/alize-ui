const fs = require('fs');
const path = require('path');

// Lire le plan de migration
const planContent = fs.readFileSync('./cleaning/MIGRATION-PLAN.md', 'utf-8');

// Parser le plan pour extraire les remplacements directs
const replacementsByFile = {};
const lines = planContent.split('\n');

let currentFile = null;
let currentLine = null;
let currentContext = null;
let currentOld = null;
let currentNew = null;
let inReplacementDirect = false;
let skipThisEntry = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Détecter un nouveau fichier
  if (line.startsWith('## Fichier: `')) {
    const match = line.match(/## Fichier: `(.+)`/);
    if (match) {
      currentFile = match[1];
      if (!replacementsByFile[currentFile]) {
        replacementsByFile[currentFile] = [];
      }
    }
    continue;
  }
  
  // Détecter une nouvelle ligne
  if (line.startsWith('### Ligne ')) {
    const match = line.match(/### Ligne (\d+)/);
    if (match) {
      currentLine = parseInt(match[1]);
      skipThisEntry = false;
      inReplacementDirect = false;
      currentContext = null;
      currentOld = null;
      currentNew = null;
    }
    continue;
  }
  
  // Détecter "DÉCISION" - on skip cette entrée
  if (line.includes('✅ **DÉCISION:**')) {
    skipThisEntry = true;
    continue;
  }
  
  // Détecter le contexte
  if (line.includes('**Contexte détecté:**')) {
    const match = line.match(/\*\*Contexte détecté:\*\* (.+)/);
    if (match) {
      currentContext = match[1].trim();
      // Skip si contexte = ring
      if (currentContext === 'ring') {
        skipThisEntry = true;
      }
    }
    continue;
  }
  
  // Détecter "REMPLACEMENT DIRECT"
  if (line.includes('✅ **REMPLACEMENT DIRECT:**')) {
    if (!skipThisEntry && currentContext && ['text', 'bg', 'border'].includes(currentContext)) {
      inReplacementDirect = true;
    } else {
      skipThisEntry = true;
    }
    continue;
  }
  
  // Extraire "Ancien:"
  if (inReplacementDirect && line.includes('- **Ancien:**')) {
    const match = line.match(/- \*\*Ancien:\*\* `(.+)`/);
    if (match) {
      currentOld = match[1];
    }
    continue;
  }
  
  // Extraire "Nouveau:"
  if (inReplacementDirect && line.includes('- **Nouveau:**')) {
    const match = line.match(/- \*\*Nouveau:\*\* `(.+)`/);
    if (match) {
      currentNew = match[1];
      
      // Enregistrer le remplacement
      if (currentFile && currentLine && currentOld && currentNew && !skipThisEntry) {
        replacementsByFile[currentFile].push({
          line: currentLine,
          old: currentOld,
          new: currentNew,
          context: currentContext
        });
      }
      
      // Reset pour le prochain remplacement
      currentOld = null;
      currentNew = null;
      inReplacementDirect = false;
    }
    continue;
  }
}

// Afficher le résumé
console.log('📋 Résumé des remplacements à appliquer:\n');
Object.keys(replacementsByFile).sort().forEach(file => {
  const replacements = replacementsByFile[file];
  console.log(`  ${file}: ${replacements.length} remplacements`);
});

// Générer les diffs pour chaque fichier
const diffs = {};

Object.keys(replacementsByFile).sort().forEach(file => {
  const filePath = `./${file}`;
  
  if (!fs.existsSync(filePath)) {
    console.log(`\n⚠️  Fichier non trouvé: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  const contentLines = content.split('\n');
  const replacements = replacementsByFile[file];
  
  // Trier les remplacements par ligne (décroissant) pour éviter les problèmes d'index
  replacements.sort((a, b) => b.line - a.line);
  
  // Appliquer les remplacements (en mémoire seulement pour générer le diff)
  replacements.forEach(({ line, old, new: newClass }) => {
    const lineIndex = line - 1; // Convertir en index 0-based
    if (lineIndex >= 0 && lineIndex < contentLines.length) {
      const originalLine = contentLines[lineIndex];
      
      // Remplacer l'ancienne classe par la nouvelle
      // Attention: il faut remplacer exactement [var(--semantic-...)] par la nouvelle classe
      const oldPattern = old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Échapper les caractères spéciaux
      const regex = new RegExp(oldPattern, 'g');
      
      if (originalLine.includes(old)) {
        contentLines[lineIndex] = originalLine.replace(regex, newClass);
      }
    }
  });
  
  const newContent = contentLines.join('\n');
  
  // Générer le diff
  const originalLines = content.split('\n');
  const newLines = newContent.split('\n');
  
  let diff = `diff --git a/${file} b/${file}\n`;
  diff += `index 0000000..1111111 100644\n`;
  diff += `--- a/${file}\n`;
  diff += `+++ b/${file}\n`;
  diff += `@@ -1,${originalLines.length} +1,${newLines.length} @@\n`;
  
  // Générer le diff ligne par ligne
  for (let i = 0; i < Math.max(originalLines.length, newLines.length); i++) {
    const oldLine = originalLines[i] || '';
    const newLine = newLines[i] || '';
    
    if (oldLine !== newLine) {
      if (oldLine) {
        diff += `-${oldLine}\n`;
      }
      if (newLine) {
        diff += `+${newLine}\n`;
      }
    } else {
      diff += ` ${oldLine}\n`;
    }
  }
  
  diffs[file] = {
    original: content,
    modified: newContent,
    diff: diff,
    replacements: replacements
  };
});

// Sauvegarder le résumé
let summary = `# Plan d'Application - Migration Phase 3\n\n`;
summary += `**Date:** ${new Date().toISOString()}\n\n`;
summary += `## Résumé\n\n`;

Object.keys(replacementsByFile).sort().forEach(file => {
  const replacements = replacementsByFile[file];
  summary += `- **${file}**: ${replacements.length} remplacements\n`;
});

summary += `\n## Détails par fichier\n\n`;

Object.keys(replacementsByFile).sort().forEach(file => {
  const replacements = replacementsByFile[file];
  summary += `### ${file}\n\n`;
  summary += `**Total:** ${replacements.length} remplacements\n\n`;
  
  replacements.forEach(({ line, old, new: newClass, context }) => {
    summary += `- **Ligne ${line}** (${context}): \`${old}\` → \`${newClass}\`\n`;
  });
  
  summary += `\n`;
});

// Sauvegarder les diffs
Object.keys(diffs).sort().forEach(file => {
  const { diff, replacements } = diffs[file];
  const diffPath = `./cleaning/diffs/${file.replace(/\//g, '_')}.diff`;
  const diffDir = path.dirname(diffPath);
  
  if (!fs.existsSync(diffDir)) {
    fs.mkdirSync(diffDir, { recursive: true });
  }
  
  fs.writeFileSync(diffPath, diff);
  console.log(`\n✅ Diff généré: ${diffPath} (${replacements.length} remplacements)`);
});

fs.writeFileSync('./cleaning/APPLICATION-PLAN.md', summary);
console.log(`\n✅ Plan d'application généré: ./cleaning/APPLICATION-PLAN.md`);

console.log('\n📊 Résumé final:');
console.log(`  - Fichiers à modifier: ${Object.keys(diffs).length}`);
console.log(`  - Remplacements totaux: ${Object.values(diffs).reduce((sum, d) => sum + d.replacements.length, 0)}`);

