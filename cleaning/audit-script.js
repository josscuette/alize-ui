const fs = require('fs');
const path = require('path');

// Configuration
const SCAN_DIRS = ['./app', './components'];
const EXCLUDE_PATTERNS = [
  'node_modules',
  '.next',
  'component-showcase.tsx', // Exclu du scan Tailwind
  'showcase-wrapper.tsx',   // Exclu du scan Tailwind
];

// Fonctions utilitaires
function shouldExcludeFile(filePath) {
  return EXCLUDE_PATTERNS.some(pattern => filePath.includes(pattern));
}

function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (shouldExcludeFile(fullPath)) continue;
    
    if (entry.isDirectory()) {
      files.push(...findFiles(fullPath, extensions));
    } else if (extensions.some(ext => entry.name.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function extractArbitraryValues(content, filePath) {
  const results = [];
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    // Pattern pour [var(--semantic-...)]
    const arbitraryPattern = /\[var\(--semantic-[^)]+\)\]/g;
    let match;
    
    while ((match = arbitraryPattern.exec(line)) !== null) {
      results.push({
        file: filePath,
        line: index + 1,
        class: match[0],
        fullLine: line.trim(),
      });
    }
  });
  
  return results;
}

function extractTokens(content, filePath) {
  const results = [];
  const lines = content.split('\n');
  const tokenPattern = /--semantic-[a-z0-9-]+/g;
  
  lines.forEach((line, index) => {
    let match;
    while ((match = tokenPattern.exec(line)) !== null) {
      results.push({
        file: filePath,
        line: index + 1,
        token: match[0],
      });
    }
  });
  
  return results;
}

// Scan des fichiers
console.log('🔍 Scanning files...');
const allFiles = [];
SCAN_DIRS.forEach(dir => {
  if (fs.existsSync(dir)) {
    allFiles.push(...findFiles(dir));
  }
});

console.log(`📁 Found ${allFiles.length} files to scan`);

// Extraction des données
const arbitraryValues = [];
const tokensUsed = new Set();
const tokensByFile = {};

allFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf-8');
    
    // Extraire les arbitrary values
    const arbitrary = extractArbitraryValues(content, file);
    arbitraryValues.push(...arbitrary);
    
    // Extraire les tokens
    const tokens = extractTokens(content, file);
    tokens.forEach(({ token }) => tokensUsed.add(token));
    
    if (tokens.length > 0) {
      tokensByFile[file] = tokens.map(t => t.token);
    }
  } catch (error) {
    console.error(`Error reading ${file}:`, error.message);
  }
});

// Lire les tokens définis dans theme.css
const themeCssPath = './app/theme.css';
let tokensDefined = new Set();
if (fs.existsSync(themeCssPath)) {
  const themeContent = fs.readFileSync(themeCssPath, 'utf-8');
  const tokenPattern = /--semantic-[a-z0-9-]+/g;
  let match;
  while ((match = tokenPattern.exec(themeContent)) !== null) {
    tokensDefined.add(match[0]);
  }
}

// Générer le rapport
const report = {
  summary: {
    totalFilesScanned: allFiles.length,
    totalArbitraryValues: arbitraryValues.length,
    uniqueTokensUsed: tokensUsed.size,
    tokensDefined: tokensDefined.size,
    tokensUnused: Array.from(tokensDefined).filter(t => !tokensUsed.has(t)),
  },
  arbitraryValues: arbitraryValues,
  tokensUsed: Array.from(tokensUsed).sort(),
  tokensByFile: tokensByFile,
  tokensUnused: Array.from(tokensDefined).filter(t => !tokensUsed.has(t)).sort(),
};

// Sauvegarder le rapport
const reportPath = './cleaning/audit-report.json';
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`✅ Report saved to ${reportPath}`);

// Générer le rapport markdown
let markdown = `# Audit Tailwind CSS - Phase 1\n\n`;
markdown += `**Date:** ${new Date().toISOString()}\n\n`;
markdown += `## Résumé\n\n`;
markdown += `- **Fichiers scannés:** ${report.summary.totalFilesScanned}\n`;
markdown += `- **Classes arbitraires trouvées:** ${report.summary.totalArbitraryValues}\n`;
markdown += `- **Tokens CSS uniques utilisés:** ${report.summary.uniqueTokensUsed}\n`;
markdown += `- **Tokens définis dans theme.css:** ${report.summary.tokensDefined}\n`;
markdown += `- **Tokens non utilisés:** ${report.summary.tokensUnused.length}\n\n`;

markdown += `## 1. Classes arbitraires trouvées\n\n`;
if (arbitraryValues.length === 0) {
  markdown += `Aucune classe arbitraire trouvée.\n\n`;
} else {
  // Grouper par fichier
  const byFile = {};
  arbitraryValues.forEach(item => {
    if (!byFile[item.file]) byFile[item.file] = [];
    byFile[item.file].push(item);
  });
  
  Object.keys(byFile).sort().forEach(file => {
    markdown += `### ${file}\n\n`;
    byFile[file].forEach(item => {
      markdown += `- **Ligne ${item.line}:** \`${item.class}\`\n`;
      markdown += `  \`\`\`\n  ${item.fullLine}\n  \`\`\`\n\n`;
    });
  });
}

markdown += `## 2. Tokens CSS utilisés dans le code\n\n`;
markdown += `**Total:** ${report.summary.uniqueTokensUsed} tokens uniques\n\n`;
report.tokensUsed.forEach(token => {
  markdown += `- \`${token}\`\n`;
});
markdown += `\n`;

markdown += `## 3. Tokens par fichier\n\n`;
Object.keys(tokensByFile).sort().forEach(file => {
  const tokens = [...new Set(tokensByFile[file])].sort();
  markdown += `### ${file}\n\n`;
  tokens.forEach(token => {
    markdown += `- \`${token}\`\n`;
  });
  markdown += `\n`;
});

markdown += `## 4. Tokens présents dans theme.css mais jamais utilisés\n\n`;
if (report.summary.tokensUnused.length === 0) {
  markdown += `Tous les tokens sont utilisés.\n\n`;
} else {
  markdown += `**Total:** ${report.summary.tokensUnused.length} tokens non utilisés\n\n`;
  report.summary.tokensUnused.forEach(token => {
    markdown += `- \`${token}\`\n`;
  });
}

const markdownPath = './cleaning/AUDIT.md';
fs.writeFileSync(markdownPath, markdown);
console.log(`✅ Markdown report saved to ${markdownPath}`);

console.log('\n📊 Summary:');
console.log(`  - Arbitrary values: ${report.summary.totalArbitraryValues}`);
console.log(`  - Tokens used: ${report.summary.uniqueTokensUsed}`);
console.log(`  - Tokens unused: ${report.summary.tokensUnused.length}`);

