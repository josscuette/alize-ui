const fs = require('fs');
const path = require('path');

// Lire theme.css
const themePath = path.join(__dirname, '../app/theme.css');
const themeContent = fs.readFileSync(themePath, 'utf8');

// Extraire tous les tokens --semantic-*
const semanticTokens = new Set();
const tokenRegex = /--semantic-([^:;]+):/g;
let match;

while ((match = tokenRegex.exec(themeContent)) !== null) {
  const tokenName = match[1].trim();
  semanticTokens.add(tokenName);
}

// Créer les déclarations pour @theme
const themeDeclarations = [];

// Grouper par type
const tokensByType = {
  text: [],
  icon: [],
  surface: [],
  stroke: [],
  brand: [],
};

semanticTokens.forEach(token => {
  if (token.startsWith('text-')) {
    tokensByType.text.push(token);
  } else if (token.startsWith('icon-')) {
    tokensByType.icon.push(token);
  } else if (token.startsWith('surface-')) {
    tokensByType.surface.push(token);
  } else if (token.startsWith('stroke-')) {
    tokensByType.stroke.push(token);
  } else if (token.startsWith('brand-')) {
    tokensByType.brand.push(token);
  }
});

// Générer les déclarations pour chaque type
// Text tokens -> --color-semantic-text-*
tokensByType.text.forEach(token => {
  const colorName = token.replace('text-', '');
  themeDeclarations.push(`  --color-semantic-text-${colorName}: var(--semantic-${token});`);
});

// Icon tokens -> --color-semantic-icon-*
tokensByType.icon.forEach(token => {
  const colorName = token.replace('icon-', '');
  themeDeclarations.push(`  --color-semantic-icon-${colorName}: var(--semantic-${token});`);
});

// Surface tokens -> --color-semantic-surface-*
tokensByType.surface.forEach(token => {
  const colorName = token.replace('surface-', '');
  themeDeclarations.push(`  --color-semantic-surface-${colorName}: var(--semantic-${token});`);
});

// Stroke tokens -> --color-semantic-stroke-*
tokensByType.stroke.forEach(token => {
  const colorName = token.replace('stroke-', '');
  themeDeclarations.push(`  --color-semantic-stroke-${colorName}: var(--semantic-${token});`);
});

// Brand tokens
tokensByType.brand.forEach(token => {
  const colorName = token.replace('brand-', '');
  themeDeclarations.push(`  --color-semantic-brand-${colorName}: var(--semantic-${token});`);
});

// Trier par ordre alphabétique
themeDeclarations.sort();

console.log('📝 Déclarations @theme à ajouter dans globals.css:\n');
console.log(themeDeclarations.join('\n'));
console.log(`\n✨ Total: ${themeDeclarations.length} déclarations`);

// Générer le fichier theme-tailwind.css
const themeTailwindPath = path.join(__dirname, '../app/theme-tailwind.css');
const themeTailwindContent = `/* Generated automatically from theme.css - DO NOT EDIT MANUALLY */
/* Run: node cleaning/generate-theme-config.js to regenerate */

@theme {
  /* Semantic design tokens */
${themeDeclarations.map(decl => `  ${decl}`).join('\n')}
}
`;

fs.writeFileSync(themeTailwindPath, themeTailwindContent, 'utf8');
console.log(`\n💾 Généré: app/theme-tailwind.css`);

// Sauvegarder aussi dans un fichier pour référence
const outputPath = path.join(__dirname, 'theme-declarations.txt');
fs.writeFileSync(outputPath, themeDeclarations.join('\n'), 'utf8');
console.log(`💾 Référence: cleaning/theme-declarations.txt`);

