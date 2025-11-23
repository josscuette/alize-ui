#!/usr/bin/env node

/**
 * Script pour ajouter les return types aux fonctions restantes
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
    const lines = content.split('\n');
    const newLines = [];
    let modified = false;
    let addedInFile = 0;
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Pattern pour fonction simple: function Component({ ... }: Props) {
      const simpleMatch = line.match(/^(\s*)function\s+([A-Z][a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*:\s*([A-Z][a-zA-Z0-9_<>[\]|&,.\s]*Props)\s*\{/);
      
      if (simpleMatch && !hasReturnType(line)) {
        const indent = simpleMatch[1];
        const funcName = simpleMatch[2];
        const params = simpleMatch[3];
        const propsType = simpleMatch[4];
        
        if (returnsJSX(lines, i)) {
          newLines.push(`${indent}function ${funcName}(${params}): ${propsType}: React.ReactElement {`);
          modified = true;
          addedInFile++;
          totalAdded++;
          i++;
          continue;
        }
      }
      
      // Pattern pour fonction multi-lignes: function Component({
      const multiStart = line.match(/^(\s*)function\s+([A-Z][a-zA-Z0-9_]*)\s*\(\s*$/);
      
      if (multiStart && !hasReturnType(line)) {
        const indent = multiStart[1];
        const funcName = multiStart[2];
        let signatureLines = [line];
        let j = i + 1;
        let foundProps = false;
        let propsType = '';
        
        // Collecter jusqu'à }: Props) {
        while (j < Math.min(i + 10, lines.length)) {
          const nextLine = lines[j];
          signatureLines.push(nextLine);
          
          const propsMatch = nextLine.match(/\)\s*:\s*([A-Z][a-zA-Z0-9_<>[\]|&,.\s]*Props)\s*\{/);
          if (propsMatch) {
            propsType = propsMatch[1];
            foundProps = true;
            j++;
            break;
          }
          
          j++;
        }
        
        if (foundProps && !hasReturnType(signatureLines.join('\n'))) {
          if (returnsJSX(lines, j)) {
            // Modifier la dernière ligne de la signature
            const lastLine = signatureLines[signatureLines.length - 1];
            const newLastLine = lastLine.replace(
              /\)\s*:\s*([A-Z][a-zA-Z0-9_<>[\]|&,.\s]*Props)\s*\{/,
              '): $1: React.ReactElement {'
            );
            signatureLines[signatureLines.length - 1] = newLastLine;
            
            newLines.push(...signatureLines);
            modified = true;
            addedInFile++;
            totalAdded++;
            i = j;
            continue;
          }
        }
      }
      
      newLines.push(line);
      i++;
    }
    
    if (modified && addedInFile > 0) {
      fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
      totalFiles++;
      console.log(`✅ ${path.basename(filePath)}: Ajouté ${addedInFile} return type(s)`);
    }
  } catch (error) {
    console.error(`❌ ${path.basename(filePath)}: ${error.message}`);
  }
});

console.log(`\n📊 Résumé:`);
console.log(`   Fichiers modifiés: ${totalFiles}`);
console.log(`   Return types ajoutés: ${totalAdded}`);

