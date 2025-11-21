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

// Appliquer les remplacements
Object.keys(replacementsByFile).sort().forEach(file => {
  const filePath = `./${file}`;
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Fichier non trouvé: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  const contentLines = content.split('\n');
  const replacements = replacementsByFile[file];
  
  // Trier les remplacements par ligne (décroissant) pour éviter les problèmes d'index
  replacements.sort((a, b) => b.line - a.line);
  
  // Appliquer les remplacements
  replacements.forEach(({ line, old, new: newClass }) => {
    const lineIndex = line - 1; // Convertir en index 0-based
    if (lineIndex >= 0 && lineIndex < contentLines.length) {
      const originalLine = contentLines[lineIndex];
      
      // Extraire la partie après le préfixe (text-, bg-, border-)
      const semanticPart = newClass.replace(/^(text|bg|border)-/, '');
      // Remplacer [var(--semantic-...)] par semantic-...
      const escapedOld = old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      if (originalLine.includes(old)) {
        contentLines[lineIndex] = originalLine.replace(new RegExp(escapedOld, 'g'), semanticPart);
        console.log(`✅ ${file}:${line} - Remplacé ${old} par ${semanticPart}`);
      }
    }
  });
  
  // Sauvegarder le fichier modifié
  const newContent = contentLines.join('\n');
  fs.writeFileSync(filePath, newContent);
  console.log(`✅ Fichier modifié: ${file} (${replacements.length} remplacements)`);
});

console.log('\n✅ Migration terminée !');

