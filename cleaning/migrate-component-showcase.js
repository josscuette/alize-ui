const fs = require('fs');

// Lire le fichier component-showcase.tsx
const filePath = './components/component-showcase.tsx';
let content = fs.readFileSync(filePath, 'utf-8');
const originalContent = content;

// Mapping des tokens selon tokens-map.json
const tokenMappings = {
  // Icon tokens
  '--semantic-icon-subdued': 'semantic-icon-subdued',
  '--semantic-icon-interaction-default': 'semantic-icon-interaction-default',
  '--semantic-icon-interaction-bright': 'semantic-icon-interaction-bright',
  '--semantic-icon-rag-success-default': 'semantic-icon-rag-success-default',
  
  // Text tokens
  '--semantic-text-rag-danger-default': 'semantic-text-rag-danger-default',
  '--semantic-text-interaction-bright': 'semantic-text-interaction-bright',
  '--semantic-text-reversedpersistent': 'semantic-text-reversedpersistent',
  
  // Surface tokens
  '--semantic-surface-interaction-strong': 'semantic-surface-interaction-strong',
  '--semantic-surface-rag-warning-bright': 'semantic-surface-rag-warning-bright',
  '--semantic-surface-rag-success-bright': 'semantic-surface-rag-success-bright',
  '--semantic-surface-rag-success-default': 'semantic-surface-rag-success-default',
  '--semantic-surface-rag-danger-bright': 'semantic-surface-rag-danger-bright',
  
  // Stroke tokens
  '--semantic-stroke-rag-danger-default': 'semantic-stroke-rag-danger-default',
  '--semantic-stroke-subdued': 'semantic-stroke-subdued',
  '--semantic-stroke-rag-success-default': 'semantic-stroke-rag-success-default',
};

// Fonction pour remplacer les classes arbitraires
function replaceArbitraryClasses(content) {
  let modified = content;
  let replacements = [];
  
  // Patterns à remplacer : text-[var(--semantic-XXX)], bg-[var(--semantic-XXX)], border-[var(--semantic-XXX)], decoration-[var(--semantic-XXX)]
  const patterns = [
    { prefix: 'text-', context: 'text' },
    { prefix: 'bg-', context: 'bg' },
    { prefix: 'border-', context: 'border' },
    { prefix: 'decoration-', context: 'decoration' },
  ];
  
  Object.keys(tokenMappings).forEach(token => {
    const semanticClass = tokenMappings[token];
    const tokenPattern = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    patterns.forEach(({ prefix, context }) => {
      // Pattern: prefix[var(--semantic-XXX)]
      const regex = new RegExp(`${prefix}\\[var\\(${tokenPattern}\\)\\]`, 'g');
      const replacement = context === 'decoration' 
        ? `decoration-${semanticClass}` 
        : `${prefix}${semanticClass}`;
      
      if (modified.match(regex)) {
        const matches = modified.match(regex);
        matches.forEach(() => {
          replacements.push({
            token,
            old: `${prefix}[var(${token})]`,
            new: replacement,
            context
          });
        });
        modified = modified.replace(regex, replacement);
      }
    });
  });
  
  return { modified, replacements };
}

// Appliquer les remplacements
const { modified, replacements } = replaceArbitraryClasses(content);

// Sauvegarder le fichier
fs.writeFileSync(filePath, modified);

console.log(`✅ Migration de component-showcase.tsx terminée !`);
console.log(`📊 Total: ${replacements.length} remplacements effectués\n`);

// Afficher un résumé par token
const summary = {};
replacements.forEach(r => {
  if (!summary[r.token]) {
    summary[r.token] = { count: 0, contexts: new Set() };
  }
  summary[r.token].count++;
  summary[r.token].contexts.add(r.context);
});

console.log('Résumé par token:');
Object.keys(summary).sort().forEach(token => {
  const { count, contexts } = summary[token];
  console.log(`  ${token}: ${count} remplacements (${Array.from(contexts).join(', ')})`);
});

