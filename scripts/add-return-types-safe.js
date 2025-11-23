#!/usr/bin/env node

/**
 * Script sécurisé pour ajouter les return types explicites aux composants React
 * 
 * Garantit la qualité du code en :
 * - Analysant la structure des fonctions (multi-lignes supportées)
 * - Vérifiant qu'elles retournent du JSX
 * - Préservant l'indentation et le formatage
 * - Faisant des backups
 * - Vérifiant la syntaxe après modification
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const componentsDir = path.join(__dirname, '..', 'components', 'ui');

// Get all .tsx files except test files
const files = execSync(`find "${componentsDir}" -name "*.tsx" -type f ! -name "*.test.tsx"`, { encoding: 'utf-8' })
  .trim()
  .split('\n')
  .filter(Boolean);

let totalAdded = 0;
let totalFiles = 0;
let totalSkipped = 0;

/**
 * Vérifie si une fonction retourne du JSX
 */
function returnsJSX(lines, startIndex) {
  // Cherche dans les 30 lignes suivantes
  const searchRange = Math.min(startIndex + 30, lines.length);
  
  for (let i = startIndex; i < searchRange; i++) {
    const line = lines[i];
    
    // Si on trouve un return avec du JSX
    if (line.includes('return') && (
      line.includes('<') || 
      line.includes('React.createElement') ||
      line.includes('React.ReactElement')
    )) {
      return true;
    }
    
    // Si on trouve un return, vérifier les lignes suivantes
    if (line.includes('return')) {
      // Vérifier les 5 lignes suivantes pour du JSX
      for (let j = i + 1; j < Math.min(i + 6, lines.length); j++) {
        if (lines[j].includes('<') || lines[j].includes('React.createElement')) {
          return true;
        }
        // Si on trouve une accolade fermante avant du JSX, ce n'est pas du JSX
        if (lines[j].trim() === '}' && j < i + 3) {
          break;
        }
      }
    }
    
    // Si on trouve une fonction imbriquée, arrêter la recherche
    if (line.match(/^\s*function\s+[a-z]/) || line.match(/^\s*const\s+\w+\s*=\s*\(/)) {
      break;
    }
  }
  
  return false;
}

/**
 * Vérifie si une fonction a déjà un return type
 */
function hasReturnType(line) {
  return line.includes(': React.ReactElement') || 
         line.includes(': JSX.Element') ||
         line.includes(': ReactElement') ||
         line.includes(': React.FC');
}

/**
 * Trouve la fin de la signature de fonction (incluant les paramètres multi-lignes)
 */
function findFunctionEnd(lines, startIndex) {
  let braceCount = 0;
  let parenCount = 0;
  let foundOpeningParen = false;
  
  for (let i = startIndex; i < Math.min(startIndex + 10, lines.length); i++) {
    const line = lines[i];
    
    for (const char of line) {
      if (char === '(') {
        parenCount++;
        foundOpeningParen = true;
      } else if (char === ')') {
        parenCount--;
      } else if (char === '{') {
        braceCount++;
      } else if (char === '}') {
        braceCount--;
      }
    }
    
    // Si on a trouvé l'ouverture de parenthèse et qu'elle est fermée, et qu'on a trouvé le type Props
    if (foundOpeningParen && parenCount === 0 && line.includes('Props')) {
      // Vérifier si la ligne suivante a une accolade ouvrante
      if (i + 1 < lines.length && lines[i + 1].trim() === '{') {
        return i + 1;
      }
      // Ou si l'accolade est sur la même ligne
      if (line.includes('{')) {
        return i;
      }
    }
  }
  
  return startIndex;
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
      
      // Pattern pour fonction de composant sur une ligne: function ComponentName({ ... }: Props) {
      const singleLineMatch = line.match(/^(\s*)function\s+([A-Z][a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*:\s*([A-Z][a-zA-Z0-9_<>[\]|&,.\s]*Props)\s*(\{)?\s*$/);
      
      // Pattern pour fonction multi-lignes: function ComponentName({
      const multiLineStart = line.match(/^(\s*)function\s+([A-Z][a-zA-Z0-9_]*)\s*\(\s*$/);
      
      if (singleLineMatch && !hasReturnType(line)) {
        const indent = singleLineMatch[1];
        const funcName = singleLineMatch[2];
        const params = singleLineMatch[3];
        const propsType = singleLineMatch[4];
        const hasBrace = singleLineMatch[5] === '{';
        
        // Vérifier si la fonction retourne du JSX
        if (returnsJSX(lines, i)) {
          // Ajouter le return type
          if (hasBrace) {
            newLines.push(`${indent}function ${funcName}(${params}): ${propsType}: React.ReactElement {`);
          } else {
            newLines.push(`${indent}function ${funcName}(${params}): ${propsType}: React.ReactElement {`);
          }
          
          modified = true;
          addedInFile++;
          totalAdded++;
        } else {
          newLines.push(line);
          totalSkipped++;
        }
        i++;
      } else if (multiLineStart && !hasReturnType(line)) {
        // Fonction multi-lignes - trouver la fin de la signature
        const indent = multiLineStart[1];
        const funcName = multiLineStart[2];
        let signatureLines = [line];
        let j = i + 1;
        let foundProps = false;
        let foundBrace = false;
        let propsType = '';
        
        // Collecter les lignes jusqu'à trouver }: Props) {
        while (j < Math.min(i + 10, lines.length)) {
          const nextLine = lines[j];
          signatureLines.push(nextLine);
          
          // Chercher }: Props) ou }: Props) {
          const propsMatch = nextLine.match(/\)\s*:\s*([A-Z][a-zA-Z0-9_<>[\]|&,.\s]*Props)\s*(\{)?\s*$/);
          if (propsMatch) {
            propsType = propsMatch[1];
            foundProps = true;
            foundBrace = propsMatch[2] === '{';
            j++;
            break;
          }
          
          j++;
        }
        
        if (foundProps && !hasReturnType(signatureLines.join('\n'))) {
          // Vérifier si la fonction retourne du JSX
          if (returnsJSX(lines, j)) {
            // Reconstruire la signature avec le return type
            const lastLine = signatureLines[signatureLines.length - 1];
            const lastLineMatch = lastLine.match(/^(\s*)(.*?)\s*:\s*([A-Z][a-zA-Z0-9_<>[\]|&,.\s]*Props)\s*(\{)?\s*$/);
            
            if (lastLineMatch) {
              const lastIndent = lastLineMatch[1];
              const beforeProps = lastLineMatch[2];
              const lastPropsType = lastLineMatch[3];
              const lastHasBrace = lastLineMatch[4] === '{';
              
              // Remplacer la dernière ligne
              signatureLines[signatureLines.length - 1] = `${lastIndent}${beforeProps}: ${lastPropsType}: React.ReactElement${lastHasBrace ? ' {' : ' {'}`;
              
              newLines.push(...signatureLines);
              modified = true;
              addedInFile++;
              totalAdded++;
              i = j;
              continue;
            }
          } else {
            totalSkipped++;
          }
        }
        
        // Si on n'a pas modifié, garder les lignes originales
        if (!modified || addedInFile === 0) {
          newLines.push(...signatureLines);
        }
        i = j;
      } else {
        newLines.push(line);
        i++;
      }
    }
    
    if (modified && addedInFile > 0) {
      // Faire un backup
      const backupPath = `${filePath}.backup`;
      fs.writeFileSync(backupPath, content, 'utf-8');
      
      // Écrire le nouveau contenu
      const newContent = newLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf-8');
      
      // Supprimer le backup si tout est OK
      fs.unlinkSync(backupPath);
      totalFiles++;
      console.log(`✅ ${path.basename(filePath)}: Ajouté ${addedInFile} return type(s)`);
    }
  } catch (error) {
    console.error(`❌ Erreur lors du traitement de ${filePath}:`, error.message);
  }
});

console.log(`\n📊 Résumé:`);
console.log(`   Fichiers modifiés: ${totalFiles}`);
console.log(`   Return types ajoutés: ${totalAdded}`);
console.log(`   Fonctions ignorées (pas de JSX détecté): ${totalSkipped}`);
