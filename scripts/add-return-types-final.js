#!/usr/bin/env node

/**
 * Script final pour ajouter les return types explicites aux composants React
 * Gère les signatures mono et multi-lignes
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const componentsDir = path.join(__dirname, '..', 'components', 'ui');
const files = execSync(`find "${componentsDir}" -name "*.tsx" -type f ! -name "*.test.tsx"`, { encoding: 'utf-8' })
  .trim()
  .split('\n')
  .filter(Boolean);

let totalAdded = 0;
let totalFiles = 0;

function hasReturnType(text) {
  return text.includes(': React.ReactElement') || 
         text.includes(': JSX.Element') ||
         text.includes(': ReactElement');
}

function returnsJSX(lines, startIndex) {
  for (let i = startIndex; i < Math.min(startIndex + 30, lines.length); i++) {
    const line = lines[i];
    if (line.includes('return') && line.includes('<')) return true;
    if (line.includes('return')) {
      for (let j = i + 1; j < Math.min(i + 6, lines.length); j++) {
        if (lines[j].includes('<')) return true;
        if (lines[j].trim() === '}') break;
      }
    }
  }
  return false;
}

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Pattern pour fonction avec signature complète sur une ligne
    // function Component({ ... }: Props) {
    let newContent = content.replace(
      /^(\s*)function\s+([A-Z][a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*:\s*([A-Z][a-zA-Z0-9_<>[\]|&,.\s]*Props)\s*\{/gm,
      (match, indent, name, params, propsType, offset, string) => {
        if (hasReturnType(match)) return match;
        
        const lines = string.split('\n');
        const lineIndex = string.substring(0, offset).split('\n').length - 1;
        
        if (returnsJSX(lines, lineIndex)) {
          totalAdded++;
          return `${indent}function ${name}(${params}): ${propsType}: React.ReactElement {`;
        }
        return match;
      }
    );
    
    // Pattern pour fonction multi-lignes: function Component({ ... }: Props) {
    // où }: Props) peut être sur une ligne différente
    newContent = newContent.replace(
      /^(\s*)function\s+([A-Z][a-zA-Z0-9_]*)\s*\([^)]*\)\s*:\s*([A-Z][a-zA-Z0-9_<>[\]|&,.\s]*Props)\s*\{/gm,
      (match, indent, name, propsType, offset, string) => {
        if (hasReturnType(match)) return match;
        
        const lines = string.split('\n');
        const lineIndex = string.substring(0, offset).split('\n').length - 1;
        
        if (returnsJSX(lines, lineIndex)) {
          totalAdded++;
          // Extraire les paramètres complets (peuvent être multi-lignes)
          const funcMatch = match.match(/^(\s*)function\s+([A-Z][a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*:\s*([A-Z][a-zA-Z0-9_<>[\]|&,.\s]*Props)\s*\{/);
          if (funcMatch) {
            return `${funcMatch[1]}function ${funcMatch[2]}(${funcMatch[3]}): ${funcMatch[4]}: React.ReactElement {`;
          }
        }
        return match;
      }
    );
    
    // Pattern spécial pour fonctions avec }: Props) sur ligne séparée
    // function Component({
    //   ...props
    // }: Props) {
    newContent = newContent.replace(
      /^(\s*)function\s+([A-Z][a-zA-Z0-9_]*)\s*\([^)]*\)\s*:\s*([A-Z][a-zA-Z0-9_<>[\]|&,.\s]*Props)\s*\)\s*\{/gm,
      (match, indent, name, propsType, offset, string) => {
        if (hasReturnType(match)) return match;
        
        const lines = string.split('\n');
        const lineIndex = string.substring(0, offset).split('\n').length - 1;
        
        if (returnsJSX(lines, lineIndex)) {
          totalAdded++;
          const funcMatch = match.match(/^(\s*)function\s+([A-Z][a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*:\s*([A-Z][a-zA-Z0-9_<>[\]|&,.\s]*Props)\s*\)\s*\{/);
          if (funcMatch) {
            return `${funcMatch[1]}function ${funcMatch[2]}(${funcMatch[3]}): ${funcMatch[4]}: React.ReactElement) {`;
          }
        }
        return match;
      }
    );
    
    // Pattern le plus simple: }: Props) { -> }: Props): React.ReactElement {
    newContent = newContent.replace(
      /(\}\s*:\s*([A-Z][a-zA-Z0-9_<>[\]|&,.\s]*Props)\s*\)\s*\{)/g,
      (match, full, propsType, offset, string) => {
        if (hasReturnType(match)) return match;
        
        // Vérifier que c'est bien dans une fonction de composant
        const beforeMatch = string.substring(Math.max(0, offset - 200), offset);
        if (!beforeMatch.includes('function ') || !beforeMatch.match(/function\s+[A-Z]/)) {
          return match;
        }
        
        const lines = string.split('\n');
        const lineIndex = string.substring(0, offset).split('\n').length - 1;
        
        if (returnsJSX(lines, lineIndex)) {
          totalAdded++;
          return `}: ${propsType}: React.ReactElement) {`;
        }
        return match;
      }
    );
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      totalFiles++;
      const added = (newContent.match(/: React\.ReactElement/g) || []).length - 
                    (content.match(/: React\.ReactElement/g) || []).length;
      console.log(`✅ ${path.basename(filePath)}: Ajouté ${added} return type(s)`);
    }
  } catch (error) {
    console.error(`❌ ${path.basename(filePath)}: ${error.message}`);
  }
});

console.log(`\n📊 Résumé:`);
console.log(`   Fichiers modifiés: ${totalFiles}`);
console.log(`   Return types ajoutés: ${totalAdded}`);

