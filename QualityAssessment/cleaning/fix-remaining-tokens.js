const fs = require('fs');
const path = require('path');

// Charger le mapping des tokens
const tokensMap = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../scripts/tokens-map.json'), 'utf8')
);

// Construire un mapping inversé pour faciliter les remplacements
const replacementMap = {};

// Construire le mapping pour chaque type de contexte
function buildReplacementMap() {
  // Text tokens
  if (tokensMap.semantic?.text) {
    Object.keys(tokensMap.semantic.text).forEach(key => {
      const tokenName = `text-${key}`;
      const className = tokensMap.semantic.text[key].text;
      replacementMap[`text-[var(--semantic-${tokenName})]`] = className;
    });
  }

  // Icon tokens
  if (tokensMap.semantic?.icon) {
    Object.keys(tokensMap.semantic.icon).forEach(key => {
      const tokenName = `icon-${key}`;
      const className = tokensMap.semantic.icon[key].text;
      replacementMap[`text-[var(--semantic-${tokenName})]`] = className;
    });
  }

  // Surface tokens (bg)
  if (tokensMap.semantic?.surface) {
    Object.keys(tokensMap.semantic.surface).forEach(key => {
      const tokenName = `surface-${key}`;
      const className = tokensMap.semantic.surface[key].bg;
      replacementMap[`bg-[var(--semantic-${tokenName})]`] = className;
    });
  }

  // Stroke tokens (border)
  if (tokensMap.semantic?.stroke) {
    Object.keys(tokensMap.semantic.stroke).forEach(key => {
      const tokenName = `stroke-${key}`;
      const className = tokensMap.semantic.stroke[key].border;
      replacementMap[`border-[var(--semantic-${tokenName})]`] = className;
    });
  }

  // Brand tokens
  if (tokensMap.semantic?.brand) {
    if (tokensMap.semantic.brand.text) {
      replacementMap[`text-[var(--semantic-brand-text)]`] = tokensMap.semantic.brand.text.text;
      replacementMap[`bg-[var(--semantic-brand-text)]`] = tokensMap.semantic.brand.text.bg;
    }
    if (tokensMap.semantic.brand.picto) {
      replacementMap[`text-[var(--semantic-brand-picto)]`] = tokensMap.semantic.brand.picto.text;
      replacementMap[`bg-[var(--semantic-brand-picto)]`] = tokensMap.semantic.brand.picto.bg;
    }
  }
}

buildReplacementMap();

// Fonction récursive pour trouver tous les fichiers
function findFiles(dir, extensions, excludeDirs = []) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      // Vérifier si le dossier doit être exclu
      const shouldExclude = excludeDirs.some(exclude => 
        filePath.includes(exclude)
      );
      if (!shouldExclude) {
        results = results.concat(findFiles(filePath, extensions, excludeDirs));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });

  return results;
}

// Fonction pour remplacer les tokens dans une chaîne
function replaceTokens(content) {
  let newContent = content;
  const replacements = [];

  // Remplacer tous les patterns simples d'abord
  Object.keys(replacementMap).forEach(pattern => {
    const regex = new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = newContent.match(regex);
    if (matches) {
      matches.forEach(match => {
        replacements.push({
          old: match,
          new: replacementMap[pattern],
        });
      });
      newContent = newContent.replace(regex, replacementMap[pattern]);
    }
  });

  // Gérer les cas spéciaux avec des modificateurs (comme /50, /20, etc.)
  // Ex: ring-[var(--semantic-surface-interaction-strong)]/50
  const ringPattern = /ring-\[var\(--semantic-surface-([^)]+)\)\](\/\d+)/g;
  newContent = newContent.replace(ringPattern, (match, tokenKey, modifier) => {
    if (tokensMap.semantic?.surface?.[tokenKey]) {
      const bgClass = tokensMap.semantic.surface[tokenKey].bg;
      const ringClass = bgClass.replace('bg-', 'ring-') + modifier;
      replacements.push({ old: match, new: ringClass });
      return ringClass;
    }
    return match;
  });

  // Gérer border avec modificateurs
  const borderPattern = /border-\[var\(--semantic-stroke-([^)]+)\)\](\/\d+)/g;
  newContent = newContent.replace(borderPattern, (match, tokenKey, modifier) => {
    if (tokensMap.semantic?.stroke?.[tokenKey]) {
      const borderClass = tokensMap.semantic.stroke[tokenKey].border + modifier;
      replacements.push({ old: match, new: borderClass });
      return borderClass;
    }
    return match;
  });

  // Gérer bg avec modificateurs
  const bgPattern = /bg-\[var\(--semantic-surface-([^)]+)\)\](\/\d+)/g;
  newContent = newContent.replace(bgPattern, (match, tokenKey, modifier) => {
    if (tokensMap.semantic?.surface?.[tokenKey]) {
      const bgClass = tokensMap.semantic.surface[tokenKey].bg + modifier;
      replacements.push({ old: match, new: bgClass });
      return bgClass;
    }
    return match;
  });

  // Gérer text avec modificateurs (moins courant mais possible)
  const textPattern = /text-\[var\(--semantic-(text|icon)-([^)]+)\)\](\/\d+)/g;
  newContent = newContent.replace(textPattern, (match, type, tokenKey, modifier) => {
    if (type === 'text' && tokensMap.semantic?.text?.[tokenKey]) {
      const textClass = tokensMap.semantic.text[tokenKey].text + modifier;
      replacements.push({ old: match, new: textClass });
      return textClass;
    } else if (type === 'icon' && tokensMap.semantic?.icon?.[tokenKey]) {
      const iconClass = tokensMap.semantic.icon[tokenKey].text + modifier;
      replacements.push({ old: match, new: iconClass });
      return iconClass;
    }
    return match;
  });

  // Gérer les cas spéciaux : border avec surface (erreur de mapping)
  const borderSurfacePattern = /border-\[var\(--semantic-surface-([^)]+)\)\]/g;
  newContent = newContent.replace(borderSurfacePattern, (match, tokenKey) => {
    if (tokensMap.semantic?.surface?.[tokenKey]) {
      // Utiliser bg au lieu de border car c'est une surface utilisée comme border
      const bgClass = tokensMap.semantic.surface[tokenKey].bg;
      const borderClass = bgClass.replace('bg-', 'border-');
      replacements.push({ old: match, new: borderClass });
      return borderClass;
    }
    return match;
  });

  // Gérer bg avec stroke (erreur de mapping)
  const bgStrokePattern = /bg-\[var\(--semantic-stroke-([^)]+)\)\]/g;
  newContent = newContent.replace(bgStrokePattern, (match, tokenKey) => {
    if (tokensMap.semantic?.stroke?.[tokenKey]) {
      // Utiliser border au lieu de bg car c'est un stroke utilisé comme bg
      const borderClass = tokensMap.semantic.stroke[tokenKey].border;
      const bgClass = borderClass.replace('border-', 'bg-');
      replacements.push({ old: match, new: bgClass });
      return bgClass;
    }
    return match;
  });

  // Gérer bg avec icon (erreur de mapping)
  const bgIconPattern = /bg-\[var\(--semantic-icon-([^)]+)\)\]/g;
  newContent = newContent.replace(bgIconPattern, (match, tokenKey) => {
    if (tokensMap.semantic?.icon?.[tokenKey]) {
      // Utiliser text au lieu de bg car c'est une icon utilisée comme bg
      const textClass = tokensMap.semantic.icon[tokenKey].text;
      const bgClass = textClass.replace('text-', 'bg-');
      replacements.push({ old: match, new: bgClass });
      return bgClass;
    }
    return match;
  });

  // Gérer decoration avec text (cas spécial)
  const decorationTextPattern = /decoration-\[var\(--semantic-text-([^)]+)\)\]/g;
  newContent = newContent.replace(decorationTextPattern, (match, tokenKey) => {
    if (tokensMap.semantic?.text?.[tokenKey]) {
      // Utiliser text pour decoration
      const textClass = tokensMap.semantic.text[tokenKey].text;
      const decorationClass = textClass.replace('text-', 'decoration-');
      replacements.push({ old: match, new: decorationClass });
      return decorationClass;
    }
    return match;
  });

  return { newContent, replacements };
}

// Fonction principale
function main() {
  const rootDir = path.join(__dirname, '..');
  const files = findFiles(rootDir, ['.ts', '.tsx'], [
    'node_modules',
    '.next',
    'cleaning',
    'dist',
    'build',
  ]);

  console.log(`📁 Trouvé ${files.length} fichiers à scanner\n`);

  let totalReplacements = 0;
  const modifiedFiles = [];

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');
    const { newContent, replacements } = replaceTokens(content);

    if (replacements.length > 0) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      const relativePath = path.relative(rootDir, filePath);
      modifiedFiles.push({ file: relativePath, replacements });
      totalReplacements += replacements.length;
      console.log(`✅ ${relativePath}: ${replacements.length} remplacement(s)`);
      replacements.forEach(({ old, new: newVal }) => {
        console.log(`   ${old} → ${newVal}`);
      });
    }
  }

  console.log(`\n✨ Total: ${totalReplacements} remplacement(s) dans ${modifiedFiles.length} fichier(s)`);
}

main();
