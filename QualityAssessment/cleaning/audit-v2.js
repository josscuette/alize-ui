const fs = require('fs');
const path = require('path');

// Configuration
const ROOT_DIR = path.join(__dirname, '..');
const SCAN_DIRS = ['components', 'app', 'hooks'];
const EXCLUDE_DIRS = ['node_modules', '.next', 'cleaning', 'dist', 'build'];
const INCLUDE_UI_COMPONENTS = true; // Scan all UI components

// Charger theme.css pour extraire tous les tokens disponibles
const themePath = path.join(ROOT_DIR, 'app/theme.css');
const themeContent = fs.readFileSync(themePath, 'utf8');

// Extraire tous les tokens --semantic-* de theme.css
const availableTokens = new Set();
const tokenRegex = /--semantic-([^:;]+):/g;
let match;
while ((match = tokenRegex.exec(themeContent)) !== null) {
  const tokenName = match[1].trim();
  availableTokens.add(tokenName);
}

// Catégoriser les tokens
const tokensByCategory = {
  text: [],
  icon: [],
  surface: [],
  stroke: [],
  brand: [],
  other: [],
};

availableTokens.forEach(token => {
  if (token.startsWith('text-')) {
    tokensByCategory.text.push(token);
  } else if (token.startsWith('icon-')) {
    tokensByCategory.icon.push(token);
  } else if (token.startsWith('surface-')) {
    tokensByCategory.surface.push(token);
  } else if (token.startsWith('stroke-')) {
    tokensByCategory.stroke.push(token);
  } else if (token.startsWith('brand-')) {
    tokensByCategory.brand.push(token);
  } else {
    tokensByCategory.other.push(token);
  }
});

// Fonction récursive pour trouver tous les fichiers
function findFiles(dir, extensions, excludeDirs = []) {
  let results = [];
  
  if (!fs.existsSync(dir)) {
    return results;
  }
  
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
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

// Analyser un fichier
function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(ROOT_DIR, filePath);
  
  const results = {
    file: relativePath,
    arbitraryClasses: [],
    semanticClasses: [],
    tokensUsed: new Set(),
    tokensInArbitrary: new Set(),
    tokensInSemantic: new Set(),
  };

  // Pattern 1: Classes arbitraires [var(--semantic-*)]
  const arbitraryPattern = /(\w+)-\[var\(--semantic-([^)]+)\)\]/g;
  let arbMatch;
  while ((arbMatch = arbitraryPattern.exec(content)) !== null) {
    const prefix = arbMatch[1]; // bg, text, border, etc.
    const tokenName = arbMatch[2];
    const fullClass = arbMatch[0];
    
    results.arbitraryClasses.push({
      class: fullClass,
      prefix,
      token: tokenName,
      line: content.substring(0, arbMatch.index).split('\n').length,
    });
    
    results.tokensUsed.add(tokenName);
    results.tokensInArbitrary.add(tokenName);
  }

  // Pattern 2: Classes sémantiques générées (text-semantic-text-*, bg-semantic-surface-*, etc.)
  const semanticPattern = /(\w+)-semantic-(text|icon|surface|stroke|brand)-([\w-]+)/g;
  let semMatch;
  while ((semMatch = semanticPattern.exec(content)) !== null) {
    const prefix = semMatch[1]; // bg, text, border, etc.
    const category = semMatch[2];
    const variant = semMatch[3];
    const fullClass = semMatch[0];
    
    // Reconstruire le nom du token
    const tokenName = `${category}-${variant}`;
    
    results.semanticClasses.push({
      class: fullClass,
      prefix,
      category,
      variant,
      token: tokenName,
      line: content.substring(0, semMatch.index).split('\n').length,
    });
    
    results.tokensUsed.add(tokenName);
    results.tokensInSemantic.add(tokenName);
  }

  return results;
}

// Fonction principale
function main() {
  console.log('🔍 Audit v2 : Analyse des tokens et classes (TOUS les composants UI inclus)\n');
  
  // Trouver tous les fichiers
  const files = [];
  SCAN_DIRS.forEach(dir => {
    const dirPath = path.join(ROOT_DIR, dir);
    if (fs.existsSync(dirPath)) {
      files.push(...findFiles(dirPath, ['.ts', '.tsx', '.js', '.jsx'], EXCLUDE_DIRS));
    }
  });

  // Vérifier que tous les composants UI sont inclus
  const uiComponentsPath = path.join(ROOT_DIR, 'components/ui');
  if (fs.existsSync(uiComponentsPath)) {
    const uiFiles = findFiles(uiComponentsPath, ['.ts', '.tsx', '.js', '.jsx'], []);
    const existingUiFiles = files.filter(f => f.includes('components/ui/'));
    const missingUiFiles = uiFiles.filter(f => !existingUiFiles.includes(f));
    
    if (missingUiFiles.length > 0) {
      console.log(`⚠️  ${missingUiFiles.length} composants UI supplémentaires trouvés, ajoutés à l'audit\n`);
      files.push(...missingUiFiles);
    }
  }

  console.log(`📁 ${files.length} fichiers trouvés\n`);

  // Analyser chaque fichier
  const allResults = [];
  const uiComponentsResults = [];
  let totalArbitrary = 0;
  let totalSemantic = 0;
  const allTokensUsed = new Set();
  const allTokensInArbitrary = new Set();
  const allTokensInSemantic = new Set();

  files.forEach(filePath => {
    const result = analyzeFile(filePath);
    const isUIComponent = filePath.includes('components/ui/');
    
    // Toujours inclure les composants UI, même s'ils n'ont pas de tokens
    if (isUIComponent) {
      uiComponentsResults.push(result);
    }
    
    // Inclure tous les fichiers avec tokens dans allResults
    if (result.arbitraryClasses.length > 0 || result.semanticClasses.length > 0) {
      allResults.push(result);
      totalArbitrary += result.arbitraryClasses.length;
      totalSemantic += result.semanticClasses.length;
      
      result.tokensUsed.forEach(t => allTokensUsed.add(t));
      result.tokensInArbitrary.forEach(t => allTokensInArbitrary.add(t));
      result.tokensInSemantic.forEach(t => allTokensInSemantic.add(t));
    }
  });
  
  // Ajouter tous les composants UI au rapport, même sans tokens
  uiComponentsResults.forEach(result => {
    if (!allResults.find(r => r.file === result.file)) {
      allResults.push(result);
    }
  });

  // Générer le rapport
  const report = {
    summary: {
      totalFiles: files.length,
      filesWithTokens: allResults.length,
      totalArbitraryClasses: totalArbitrary,
      totalSemanticClasses: totalSemantic,
      totalTokensUsed: allTokensUsed.size,
      tokensInArbitrary: allTokensInArbitrary.size,
      tokensInSemantic: allTokensInSemantic.size,
    },
    tokens: {
      available: Array.from(availableTokens).sort(),
      used: Array.from(allTokensUsed).sort(),
      unused: Array.from(availableTokens).filter(t => !allTokensUsed.has(t)).sort(),
      onlyInArbitrary: Array.from(allTokensInArbitrary).filter(t => !allTokensInSemantic.has(t)).sort(),
      onlyInSemantic: Array.from(allTokensInSemantic).filter(t => !allTokensInArbitrary.has(t)).sort(),
      inBoth: Array.from(allTokensInArbitrary).filter(t => allTokensInSemantic.has(t)).sort(),
    },
    tokensByCategory,
    files: allResults.map(r => ({
      file: r.file,
      arbitraryCount: r.arbitraryClasses.length,
      semanticCount: r.semanticClasses.length,
      tokens: Array.from(r.tokensUsed).sort(),
    })),
    detailedFiles: allResults,
  };

  // Sauvegarder le rapport JSON
  const jsonPath = path.join(__dirname, 'audit-v2-report.json');
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2), 'utf8');
  console.log(`💾 Rapport JSON sauvegardé : ${jsonPath}\n`);

  // Générer le rapport Markdown
  let md = `# Audit v2 : Tokens et Classes dans le Codebase\n\n`;
  md += `**Date :** ${new Date().toISOString().split('T')[0]}\n\n`;
  
  md += `## 📊 Résumé\n\n`;
  md += `- **Fichiers scannés :** ${files.length}\n`;
  md += `- **Fichiers avec tokens :** ${allResults.length}\n`;
  md += `- **Classes arbitraires :** ${totalArbitrary}\n`;
  md += `- **Classes sémantiques :** ${totalSemantic}\n`;
  md += `- **Tokens utilisés :** ${allTokensUsed.size} / ${availableTokens.size}\n`;
  md += `- **Tokens uniquement en arbitraire :** ${report.tokens.onlyInArbitrary.length}\n`;
  md += `- **Tokens uniquement en sémantique :** ${report.tokens.onlyInSemantic.length}\n`;
  md += `- **Tokens dans les deux :** ${report.tokens.inBoth.length}\n\n`;

  md += `## 🎯 Tokens par Catégorie\n\n`;
  Object.keys(tokensByCategory).forEach(category => {
    const tokens = tokensByCategory[category];
    if (tokens.length > 0) {
      md += `### ${category.toUpperCase()} (${tokens.length} tokens)\n\n`;
      md += tokens.map(t => `- \`${t}\``).join('\n') + '\n\n';
    }
  });

  md += `## ✅ Tokens Utilisés (${allTokensUsed.size})\n\n`;
  md += report.tokens.used.map(t => `- \`${t}\``).join('\n') + '\n\n';

  md += `## ❌ Tokens Non Utilisés (${report.tokens.unused.length})\n\n`;
  if (report.tokens.unused.length > 0) {
    md += report.tokens.unused.map(t => `- \`${t}\``).join('\n') + '\n\n';
  } else {
    md += `Aucun token non utilisé ! 🎉\n\n`;
  }

  md += `## 🔄 Répartition des Tokens\n\n`;
  md += `### Tokens uniquement en classes arbitraires (${report.tokens.onlyInArbitrary.length})\n\n`;
  if (report.tokens.onlyInArbitrary.length > 0) {
    md += report.tokens.onlyInArbitrary.map(t => `- \`${t}\``).join('\n') + '\n\n';
  } else {
    md += `Aucun\n\n`;
  }

  md += `### Tokens uniquement en classes sémantiques (${report.tokens.onlyInSemantic.length})\n\n`;
  if (report.tokens.onlyInSemantic.length > 0) {
    md += report.tokens.onlyInSemantic.map(t => `- \`${t}\``).join('\n') + '\n\n';
  } else {
    md += `Aucun\n\n`;
  }

  md += `### Tokens dans les deux formats (${report.tokens.inBoth.length})\n\n`;
  if (report.tokens.inBoth.length > 0) {
    md += report.tokens.inBoth.map(t => `- \`${t}\``).join('\n') + '\n\n';
  } else {
    md += `Aucun\n\n`;
  }

  md += `## 📁 Fichiers par Type d'Utilisation\n\n`;
  
  const filesWithArbitraryOnly = allResults.filter(r => r.arbitraryClasses.length > 0 && r.semanticClasses.length === 0);
  const filesWithSemanticOnly = allResults.filter(r => r.semanticClasses.length > 0 && r.arbitraryClasses.length === 0);
  const filesWithBoth = allResults.filter(r => r.arbitraryClasses.length > 0 && r.semanticClasses.length > 0);
  const filesWithoutTokens = allResults.filter(r => r.arbitraryClasses.length === 0 && r.semanticClasses.length === 0);
  const uiComponentsWithoutTokens = filesWithoutTokens.filter(r => r.file.includes('components/ui/'));

  md += `### Fichiers avec uniquement classes arbitraires (${filesWithArbitraryOnly.length})\n\n`;
  filesWithArbitraryOnly.forEach(f => {
    md += `- \`${f.file}\` (${f.arbitraryClasses.length} classes)\n`;
  });
  md += '\n';

  md += `### Fichiers avec uniquement classes sémantiques (${filesWithSemanticOnly.length})\n\n`;
  filesWithSemanticOnly.forEach(f => {
    md += `- \`${f.file}\` (${f.semanticClasses.length} classes)\n`;
  });
  md += '\n';

  md += `### Fichiers avec les deux formats (${filesWithBoth.length})\n\n`;
  filesWithBoth.forEach(f => {
    md += `- \`${f.file}\` (${f.arbitraryClasses.length} arbitraires, ${f.semanticClasses.length} sémantiques)\n`;
  });
  md += '\n';

  md += `### Composants UI sans tokens sémantiques (${uiComponentsWithoutTokens.length})\n\n`;
  if (uiComponentsWithoutTokens.length > 0) {
    md += `Ces composants UI n'utilisent pas encore de classes sémantiques et peuvent être migrés :\n\n`;
    uiComponentsWithoutTokens.forEach(f => {
      md += `- \`${f.file}\`\n`;
    });
    md += '\n';
  } else {
    md += `Tous les composants UI utilisent des tokens sémantiques ! 🎉\n\n`;
  }

  md += `## 📋 Détails par Fichier\n\n`;
  
  // Séparer les fichiers avec tokens et sans tokens
  const filesWithTokens = allResults.filter(r => r.arbitraryClasses.length > 0 || r.semanticClasses.length > 0);
  const filesWithoutTokensList = allResults.filter(r => r.arbitraryClasses.length === 0 && r.semanticClasses.length === 0);
  
  md += `### Fichiers avec tokens sémantiques (${filesWithTokens.length})\n\n`;
  filesWithTokens.forEach(result => {
    md += `#### \`${result.file}\`\n\n`;
    md += `- **Classes arbitraires :** ${result.arbitraryClasses.length}\n`;
    md += `- **Classes sémantiques :** ${result.semanticClasses.length}\n`;
    md += `- **Tokens utilisés :** ${Array.from(result.tokensUsed).join(', ') || 'Aucun'}\n\n`;
    
    if (result.arbitraryClasses.length > 0) {
      md += `**Classes arbitraires :**\n`;
      result.arbitraryClasses.forEach(c => {
        md += `- Ligne ${c.line}: \`${c.class}\` (token: \`${c.token}\`)\n`;
      });
      md += '\n';
    }
    
    if (result.semanticClasses.length > 0) {
      md += `**Classes sémantiques :**\n`;
      result.semanticClasses.forEach(c => {
        md += `- Ligne ${c.line}: \`${c.class}\` (token: \`${c.token}\`)\n`;
      });
      md += '\n';
    }
  });
  
  if (filesWithoutTokensList.length > 0) {
    md += `### Fichiers sans tokens sémantiques (${filesWithoutTokensList.length})\n\n`;
    md += `Ces fichiers n'utilisent pas encore de classes sémantiques :\n\n`;
    filesWithoutTokensList.forEach(result => {
      const isUI = result.file.includes('components/ui/');
      md += `- \`${result.file}\`${isUI ? ' (composant UI)' : ''}\n`;
    });
    md += '\n';
  }

  md += `## 💡 Recommandations\n\n`;
  
  if (totalArbitrary > 0 && totalSemantic > 0) {
    md += `⚠️ **Mélange détecté** : Le codebase utilise à la fois des classes arbitraires et sémantiques.\n\n`;
    md += `**Actions recommandées :**\n`;
    md += `1. Standardiser sur un seul format (recommandé : classes sémantiques)\n`;
    md += `2. Migrer les classes arbitraires vers les classes sémantiques\n`;
    md += `3. Vérifier que tous les tokens utilisés sont bien déclarés dans \`theme-tailwind.css\`\n\n`;
  } else if (totalArbitrary > 0) {
    md += `✅ Le codebase utilise uniquement des classes arbitraires.\n\n`;
    md += `**Note :** Si vous souhaitez migrer vers des classes sémantiques, exécutez le script de migration.\n\n`;
  } else if (totalSemantic > 0) {
    md += `✅ Le codebase utilise uniquement des classes sémantiques.\n\n`;
    md += `**Vérifications :**\n`;
    md += `- Tous les tokens utilisés sont déclarés dans \`theme-tailwind.css\`\n`;
    md += `- Le fichier \`theme-tailwind.css\` est à jour (exécuter \`node cleaning/generate-theme-config.js\` si nécessaire)\n\n`;
  }

  if (report.tokens.unused.length > 0) {
    md += `## 🗑️ Tokens Non Utilisés\n\n`;
    md += `${report.tokens.unused.length} tokens sont définis dans \`theme.css\` mais jamais utilisés dans le code.\n\n`;
    md += `**Options :**\n`;
    md += `- Les garder pour usage futur\n`;
    md += `- Les supprimer si vraiment inutiles\n`;
    md += `- Documenter leur usage prévu\n\n`;
  }

  // Sauvegarder le rapport Markdown
  const mdPath = path.join(__dirname, 'AUDIT-V2.md');
  fs.writeFileSync(mdPath, md, 'utf8');
  console.log(`💾 Rapport Markdown sauvegardé : ${mdPath}\n`);

  // Afficher un résumé dans la console
  console.log('📊 RÉSUMÉ DE L\'AUDIT\n');
  console.log(`Fichiers analysés : ${files.length}`);
  console.log(`Fichiers avec tokens : ${allResults.length}`);
  console.log(`Classes arbitraires : ${totalArbitrary}`);
  console.log(`Classes sémantiques : ${totalSemantic}`);
  console.log(`Tokens disponibles : ${availableTokens.size}`);
  console.log(`Tokens utilisés : ${allTokensUsed.size}`);
  console.log(`Tokens non utilisés : ${report.tokens.unused.length}`);
  console.log(`\n✅ Audit terminé !`);
}

main();

