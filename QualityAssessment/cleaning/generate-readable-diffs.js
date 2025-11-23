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

// Générer les diffs lisibles pour chaque fichier
const readableDiffs = {};

Object.keys(replacementsByFile).sort().forEach(file => {
  const filePath = `./${file}`;
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Fichier non trouvé: ${filePath}`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const contentLines = content.split('\n');
  const replacements = replacementsByFile[file];
  
  // Trier les remplacements par ligne (décroissant) pour éviter les problèmes d'index
  replacements.sort((a, b) => b.line - a.line);
  
  let diff = `# Diff pour ${file}\n\n`;
  diff += `**Total:** ${replacements.length} remplacements\n\n`;
  diff += `---\n\n`;
  
  // Appliquer les remplacements et générer le diff ligne par ligne
  const modifiedLines = [...contentLines];
  
  replacements.forEach(({ line, old, new: newClass }) => {
    const lineIndex = line - 1; // Convertir en index 0-based
    if (lineIndex >= 0 && lineIndex < modifiedLines.length) {
      const originalLine = modifiedLines[lineIndex];
      
      // Remplacer l'ancienne classe par la nouvelle
      // old est [var(--semantic-...)], newClass est text-semantic-... ou bg-semantic-...
      // On doit remplacer [var(--semantic-...)] par la partie après le préfixe (semantic-...)
      if (originalLine.includes(old)) {
        // Extraire la partie après le préfixe (text-, bg-, border-)
        const semanticPart = newClass.replace(/^(text|bg|border)-/, '');
        // Remplacer [var(--semantic-...)] par semantic-...
        const escapedOld = old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const newLine = originalLine.replace(new RegExp(escapedOld, 'g'), semanticPart);
        modifiedLines[lineIndex] = newLine;
        
        // Ajouter au diff
        diff += `## Ligne ${line}\n\n`;
        diff += `**Contexte:** ${replacements.find(r => r.line === line)?.context}\n\n`;
        diff += `**Ancien:**\n\`\`\`\n${originalLine.trim()}\n\`\`\`\n\n`;
        diff += `**Nouveau:**\n\`\`\`\n${newLine.trim()}\n\`\`\`\n\n`;
        diff += `---\n\n`;
      }
    }
  });
  
  readableDiffs[file] = {
    original: content,
    modified: modifiedLines.join('\n'),
    diff: diff,
    replacements: replacements
  };
});

// Sauvegarder les diffs lisibles
Object.keys(readableDiffs).sort().forEach(file => {
  const { diff } = readableDiffs[file];
  const diffPath = `./cleaning/readable-diffs/${file.replace(/\//g, '_')}.md`;
  const diffDir = path.dirname(diffPath);
  
  if (!fs.existsSync(diffDir)) {
    fs.mkdirSync(diffDir, { recursive: true });
  }
  
  fs.writeFileSync(diffPath, diff);
});

// Générer un fichier récapitulatif avec tous les diffs
let summaryDiff = `# Diffs Complets - Migration Phase 3\n\n`;
summaryDiff += `**Date:** ${new Date().toISOString()}\n\n`;
summaryDiff += `## Résumé\n\n`;
summaryDiff += `- **Fichiers à modifier:** ${Object.keys(readableDiffs).length}\n`;
summaryDiff += `- **Remplacements totaux:** ${Object.values(readableDiffs).reduce((sum, d) => sum + d.replacements.length, 0)}\n\n`;
summaryDiff += `---\n\n`;

Object.keys(readableDiffs).sort().forEach(file => {
  const { diff } = readableDiffs[file];
  summaryDiff += diff;
  summaryDiff += `\n\n`;
});

fs.writeFileSync('./cleaning/ALL-DIFFS.md', summaryDiff);
console.log(`✅ Diffs lisibles générés dans ./cleaning/readable-diffs/`);
console.log(`✅ Diff récapitulatif généré: ./cleaning/ALL-DIFFS.md`);

