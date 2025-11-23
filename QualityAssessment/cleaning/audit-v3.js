#!/usr/bin/env node

/**
 * Audit v3 - Post-Migration Foundation Layer Analysis
 * 
 * This audit evaluates:
 * - Foundation Layer usage across components
 * - Remaining arbitrary classes
 * - Migration success rate
 * - Token usage patterns
 * - Opportunities for improvement
 */

const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '../components/ui');
const APP_DIR = path.join(__dirname, '../app');
const HOOKS_DIR = path.join(__dirname, '../hooks');
const STYLES_DIR = path.join(__dirname, '../styles');

// Foundation Layer imports patterns
const FOUNDATION_LAYER_IMPORTS = {
  surface: /import.*\{[^}]*\bsurface\b[^}]*\}.*from.*['"]\.\.\/\.\.\/styles['"]/,
  text: /import.*\{[^}]*\btext\b[^}]*\}.*from.*['"]\.\.\/\.\.\/styles['"]/,
  icon: /import.*\{[^}]*\bicon\b[^}]*\}.*from.*['"]\.\.\/\.\.\/styles['"]/,
  stroke: /import.*\{[^}]*\bstroke\b[^}]*\}.*from.*['"]\.\.\/\.\.\/styles['"]/,
  states: /import.*\{[^}]*\bstates\b[^}]*\}.*from.*['"]\.\.\/\.\.\/styles['"]/,
  radius: /import.*\{[^}]*\bradius\b[^}]*\}.*from.*['"]\.\.\/\.\.\/styles['"]/,
  animation: /import.*\{[^}]*\banimation\b[^}]*\}.*from.*['"]\.\.\/\.\.\/styles['"]/,
  shadow: /import.*\{[^}]*\bshadow\b[^}]*\}.*from.*['"]\.\.\/\.\.\/styles['"]/,
  size: /import.*\{[^}]*\bsize\b[^}]*\}.*from.*['"]\.\.\/\.\.\/styles['"]/,
};

// Also check for imports from ../styles (for components outside ui/)
const FOUNDATION_LAYER_IMPORTS_ALT = {
  surface: /import.*\{[^}]*\bsurface\b[^}]*\}.*from.*['"]\.\.\/styles['"]/,
  text: /import.*\{[^}]*\btext\b[^}]*\}.*from.*['"]\.\.\/styles['"]/,
  icon: /import.*\{[^}]*\bicon\b[^}]*\}.*from.*['"]\.\.\/styles['"]/,
  stroke: /import.*\{[^}]*\bstroke\b[^}]*\}.*from.*['"]\.\.\/styles['"]/,
  states: /import.*\{[^}]*\bstates\b[^}]*\}.*from.*['"]\.\.\/styles['"]/,
  radius: /import.*\{[^}]*\bradius\b[^}]*\}.*from.*['"]\.\.\/styles['"]/,
  animation: /import.*\{[^}]*\banimation\b[^}]*\}.*from.*['"]\.\.\/styles['"]/,
  shadow: /import.*\{[^}]*\bshadow\b[^}]*\}.*from.*['"]\.\.\/styles['"]/,
  size: /import.*\{[^}]*\bsize\b[^}]*\}.*from.*['"]\.\.\/styles['"]/,
};

// Foundation Layer usage patterns
const FOUNDATION_LAYER_USAGE = {
  surface: /\b(surface\.\w+)/g,
  text: /\b(text\.\w+)/g,
  icon: /\b(icon\.\w+)/g,
  stroke: /\b(stroke\.\w+)/g,
  states: /\b(states\.\w+)/g,
  radius: /\b(radius\.\w+)/g,
  animation: /\b(animation\.\w+)/g,
  shadow: /\b(shadow\.\w+)/g,
  size: /\b(size\.\w+)/g,
};

// Arbitrary classes patterns
const ARBITRARY_PATTERNS = {
  text: /text-\[var\(--semantic-[^)]+\)\]/g,
  bg: /bg-\[var\(--semantic-[^)]+\)\]/g,
  border: /border-\[var\(--semantic-[^)]+\)\]/g,
  ring: /ring-\[var\(--semantic-[^)]+\)\]/g,
  decoration: /decoration-\[var\(--semantic-[^)]+\)\]/g,
};

// Semantic classes patterns
const SEMANTIC_CLASSES = {
  text: /text-semantic-\w+(-\w+)*/g,
  bg: /bg-semantic-\w+(-\w+)*/g,
  border: /border-semantic-\w+(-\w+)*/g,
  stroke: /border-semantic-stroke-\w+(-\w+)*/g,
  surface: /bg-semantic-surface-\w+(-\w+)*/g,
  icon: /text-semantic-icon-\w+(-\w+)*/g,
};

function getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, extensions));
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);
  
  const analysis = {
    file: relativePath,
    foundationLayerImports: {},
    foundationLayerUsage: {},
    arbitraryClasses: {},
    semanticClasses: {},
    totalClasses: 0,
    foundationLayerClasses: 0,
    arbitraryClassesCount: 0,
    semanticClassesCount: 0,
  };
  
  // Check Foundation Layer imports
  Object.keys(FOUNDATION_LAYER_IMPORTS).forEach(key => {
    const hasImport = FOUNDATION_LAYER_IMPORTS[key].test(content) || 
                      FOUNDATION_LAYER_IMPORTS_ALT[key].test(content);
    analysis.foundationLayerImports[key] = hasImport;
  });
  
  // Count Foundation Layer usage
  Object.keys(FOUNDATION_LAYER_USAGE).forEach(key => {
    const matches = content.match(FOUNDATION_LAYER_USAGE[key]);
    if (matches) {
      analysis.foundationLayerUsage[key] = matches.length;
      analysis.foundationLayerClasses += matches.length;
    } else {
      analysis.foundationLayerUsage[key] = 0;
    }
  });
  
  // Count arbitrary classes
  Object.keys(ARBITRARY_PATTERNS).forEach(key => {
    const matches = content.match(ARBITRARY_PATTERNS[key]);
    if (matches) {
      analysis.arbitraryClasses[key] = matches.length;
      analysis.arbitraryClassesCount += matches.length;
    } else {
      analysis.arbitraryClasses[key] = 0;
    }
  });
  
  // Count semantic classes
  Object.keys(SEMANTIC_CLASSES).forEach(key => {
    const matches = content.match(SEMANTIC_CLASSES[key]);
    if (matches) {
      analysis.semanticClasses[key] = matches.length;
      analysis.semanticClassesCount += matches.length;
    } else {
      analysis.semanticClasses[key] = 0;
    }
  });
  
  // Estimate total classes (rough count)
  const classNameMatches = content.match(/className[=:]\s*["'`]([^"'`]+)["'`]/g);
  if (classNameMatches) {
    analysis.totalClasses = classNameMatches.reduce((acc, match) => {
      const classes = match.match(/["'`]([^"'`]+)["'`]/)?.[1] || '';
      return acc + classes.split(/\s+/).filter(c => c.trim()).length;
    }, 0);
  }
  
  return analysis;
}

function generateReport(analyses) {
  const report = {
    summary: {
      totalFiles: analyses.length,
      filesWithFoundationLayer: 0,
      totalFoundationLayerImports: {},
      totalFoundationLayerUsage: {},
      totalArbitraryClasses: {},
      totalSemanticClasses: {},
      totalClasses: 0,
      totalFoundationLayerClasses: 0,
      totalArbitraryClassesCount: 0,
      totalSemanticClassesCount: 0,
    },
    files: analyses,
    foundationLayerCoverage: {},
    migrationStatus: {},
  };
  
  // Calculate summary
  analyses.forEach(analysis => {
    const hasFoundationLayer = Object.values(analysis.foundationLayerImports).some(v => v);
    if (hasFoundationLayer) {
      report.summary.filesWithFoundationLayer++;
    }
    
    report.summary.totalClasses += analysis.totalClasses;
    report.summary.totalFoundationLayerClasses += analysis.foundationLayerClasses;
    report.summary.totalArbitraryClassesCount += analysis.arbitraryClassesCount;
    report.summary.totalSemanticClassesCount += analysis.semanticClassesCount;
    
    // Aggregate imports
    Object.keys(analysis.foundationLayerImports).forEach(key => {
      if (!report.summary.totalFoundationLayerImports[key]) {
        report.summary.totalFoundationLayerImports[key] = 0;
      }
      if (analysis.foundationLayerImports[key]) {
        report.summary.totalFoundationLayerImports[key]++;
      }
    });
    
    // Aggregate usage
    Object.keys(analysis.foundationLayerUsage).forEach(key => {
      if (!report.summary.totalFoundationLayerUsage[key]) {
        report.summary.totalFoundationLayerUsage[key] = 0;
      }
      report.summary.totalFoundationLayerUsage[key] += analysis.foundationLayerUsage[key] || 0;
    });
    
    // Aggregate arbitrary
    Object.keys(analysis.arbitraryClasses).forEach(key => {
      if (!report.summary.totalArbitraryClasses[key]) {
        report.summary.totalArbitraryClasses[key] = 0;
      }
      report.summary.totalArbitraryClasses[key] += analysis.arbitraryClasses[key] || 0;
    });
    
    // Aggregate semantic
    Object.keys(analysis.semanticClasses).forEach(key => {
      if (!report.summary.totalSemanticClasses[key]) {
        report.summary.totalSemanticClasses[key] = 0;
      }
      report.summary.totalSemanticClasses[key] += analysis.semanticClasses[key] || 0;
    });
  });
  
  // Calculate coverage
  const totalRelevantClasses = report.summary.totalFoundationLayerClasses + report.summary.totalSemanticClassesCount;
  if (totalRelevantClasses > 0) {
    report.foundationLayerCoverage = {
      percentage: ((report.summary.totalFoundationLayerClasses / totalRelevantClasses) * 100).toFixed(2),
      foundationLayerClasses: report.summary.totalFoundationLayerClasses,
      semanticClasses: report.summary.totalSemanticClassesCount,
      total: totalRelevantClasses,
    };
  }
  
  // Migration status
  report.migrationStatus = {
    filesMigrated: report.summary.filesWithFoundationLayer,
    filesTotal: report.summary.totalFiles,
    migrationRate: ((report.summary.filesWithFoundationLayer / report.summary.totalFiles) * 100).toFixed(2),
    arbitraryClassesRemaining: report.summary.totalArbitraryClassesCount,
    semanticClassesDirect: report.summary.totalSemanticClassesCount,
  };
  
  return report;
}

function generateMarkdownReport(report) {
  let md = `# 🔍 AUDIT V3 - Post-Migration Foundation Layer Analysis\n\n`;
  md += `**Date :** ${new Date().toISOString().split('T')[0]}\n`;
  md += `**Phase :** Post-Migration Analysis\n`;
  md += `**Statut :** ✅ Audit terminé\n\n`;
  md += `---\n\n`;
  
  md += `## 📊 Résumé Exécutif\n\n`;
  md += `### Statistiques Globales :\n\n`;
  md += `- **Fichiers analysés :** ${report.summary.totalFiles}\n`;
  md += `- **Fichiers avec Foundation Layer :** ${report.summary.filesWithFoundationLayer} (${report.migrationStatus.migrationRate}%)\n`;
  md += `- **Classes Foundation Layer utilisées :** ${report.summary.totalFoundationLayerClasses}\n`;
  md += `- **Classes sémantiques directes :** ${report.summary.totalSemanticClassesCount}\n`;
  md += `- **Classes arbitraires restantes :** ${report.summary.totalArbitraryClassesCount}\n`;
  md += `- **Couverture Foundation Layer :** ${report.foundationLayerCoverage.percentage}%\n\n`;
  
  md += `---\n\n`;
  
  md += `## 📦 Foundation Layer - Imports\n\n`;
  md += `| Module | Fichiers utilisant | Usage total |\n`;
  md += `|--------|-------------------|-------------|\n`;
  Object.keys(report.summary.totalFoundationLayerImports).forEach(key => {
    const imports = report.summary.totalFoundationLayerImports[key] || 0;
    const usage = report.summary.totalFoundationLayerUsage[key] || 0;
    md += `| \`${key}\` | ${imports} | ${usage} |\n`;
  });
  md += `\n`;
  
  md += `---\n\n`;
  
  md += `## 🎨 Classes Arbitraires Restantes\n\n`;
  md += `| Type | Nombre |\n`;
  md += `|------|--------|\n`;
  Object.keys(report.summary.totalArbitraryClasses).forEach(key => {
    const count = report.summary.totalArbitraryClasses[key] || 0;
    if (count > 0) {
      md += `| \`${key}\` | ${count} |\n`;
    }
  });
  if (report.summary.totalArbitraryClassesCount === 0) {
    md += `| *Aucune* | ✅ |\n`;
  }
  md += `\n`;
  
  md += `---\n\n`;
  
  md += `## ✅ Classes Sémantiques Directes\n\n`;
  md += `| Type | Nombre |\n`;
  md += `|------|--------|\n`;
  Object.keys(report.summary.totalSemanticClasses).forEach(key => {
    const count = report.summary.totalSemanticClasses[key] || 0;
    if (count > 0) {
      md += `| \`${key}\` | ${count} |\n`;
    }
  });
  md += `\n`;
  
  md += `---\n\n`;
  
  md += `## 📈 Statut de Migration\n\n`;
  md += `- **Fichiers migrés :** ${report.migrationStatus.filesMigrated} / ${report.migrationStatus.filesTotal}\n`;
  md += `- **Taux de migration :** ${report.migrationStatus.migrationRate}%\n`;
  md += `- **Classes arbitraires restantes :** ${report.migrationStatus.arbitraryClassesRemaining}\n`;
  md += `- **Classes sémantiques directes :** ${report.migrationStatus.semanticClassesDirect}\n`;
  md += `- **Couverture Foundation Layer :** ${report.foundationLayerCoverage.percentage}%\n\n`;
  
  md += `---\n\n`;
  
  md += `## 📋 Détails par Fichier\n\n`;
  md += `### Fichiers avec Foundation Layer\n\n`;
  
  const migratedFiles = report.files.filter(f => 
    Object.values(f.foundationLayerImports).some(v => v)
  );
  
  migratedFiles.forEach(file => {
    md += `#### \`${file.file}\`\n\n`;
    md += `- **Foundation Layer imports :** ${Object.keys(file.foundationLayerImports).filter(k => file.foundationLayerImports[k]).join(', ')}\n`;
    md += `- **Foundation Layer usage :** ${file.foundationLayerClasses} classes\n`;
    md += `- **Classes arbitraires :** ${file.arbitraryClassesCount}\n`;
    md += `- **Classes sémantiques :** ${file.semanticClassesCount}\n`;
    md += `- **Total classes :** ~${file.totalClasses}\n`;
    
    if (file.foundationLayerClasses > 0) {
      const usageDetails = Object.keys(file.foundationLayerUsage)
        .filter(k => file.foundationLayerUsage[k] > 0)
        .map(k => `\`${k}\`: ${file.foundationLayerUsage[k]}`)
        .join(', ');
      md += `- **Détails usage :** ${usageDetails}\n`;
    }
    md += `\n`;
  });
  
  md += `### Fichiers sans Foundation Layer\n\n`;
  const nonMigratedFiles = report.files.filter(f => 
    !Object.values(f.foundationLayerImports).some(v => v)
  );
  
  if (nonMigratedFiles.length === 0) {
    md += `✅ Tous les fichiers utilisent la Foundation Layer !\n\n`;
  } else {
    nonMigratedFiles.forEach(file => {
      md += `- \`${file.file}\`\n`;
    });
    md += `\n`;
  }
  
  md += `---\n\n`;
  
  md += `## 🎯 Recommandations\n\n`;
  
  if (report.summary.totalArbitraryClassesCount > 0) {
    md += `### ⚠️ Classes Arbitraires à Migrer\n\n`;
    md += `Il reste ${report.summary.totalArbitraryClassesCount} classes arbitraires à migrer vers la Foundation Layer.\n\n`;
  } else {
    md += `### ✅ Aucune Classe Arbitraire\n\n`;
    md += `Excellent ! Toutes les classes arbitraires ont été migrées.\n\n`;
  }
  
  if (report.migrationStatus.migrationRate < 100) {
    md += `### 📝 Fichiers à Migrer\n\n`;
    md += `${report.migrationStatus.filesTotal - report.migrationStatus.filesMigrated} fichier(s) n'utilisent pas encore la Foundation Layer.\n\n`;
  } else {
    md += `### ✅ Migration Complète\n\n`;
    md += `Tous les fichiers utilisent la Foundation Layer !\n\n`;
  }
  
  md += `---\n\n`;
  md += `**✅ Audit terminé**\n`;
  
  return md;
}

// Main execution
const componentFiles = getAllFiles(COMPONENTS_DIR);
const appFiles = getAllFiles(APP_DIR);
const hookFiles = getAllFiles(HOOKS_DIR);

const allFiles = [...componentFiles, ...appFiles, ...hookFiles];

console.log(`Analyzing ${allFiles.length} files...`);

const analyses = allFiles.map(analyzeFile);
const report = generateReport(analyses);

// Generate reports
const markdownReport = generateMarkdownReport(report);
const jsonReport = JSON.stringify(report, null, 2);

// Write reports
fs.writeFileSync(path.join(__dirname, 'AUDIT-V3.md'), markdownReport);
fs.writeFileSync(path.join(__dirname, 'audit-v3-report.json'), jsonReport);

console.log('\n✅ Audit v3 completed!');
console.log(`📄 Markdown report: cleaning/AUDIT-V3.md`);
console.log(`📊 JSON report: cleaning/audit-v3-report.json`);
console.log(`\n📈 Summary:`);
console.log(`   - Files analyzed: ${report.summary.totalFiles}`);
console.log(`   - Files with Foundation Layer: ${report.summary.filesWithFoundationLayer}`);
console.log(`   - Foundation Layer coverage: ${report.foundationLayerCoverage.percentage}%`);
console.log(`   - Arbitrary classes remaining: ${report.summary.totalArbitraryClassesCount}`);

