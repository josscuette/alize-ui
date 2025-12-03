#!/usr/bin/env node

/**
 * Script to generate API documentation for each component
 * 
 * This script:
 * 1. Runs TypeDoc to generate markdown documentation
 * 2. Reads the generated markdown files
 * 3. Creates a JSON file mapping component names to their API docs
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Configuration
const DOCS_API_DIR = join(rootDir, 'docs', 'api');
const OUTPUT_FILE = join(rootDir, 'app', 'docs', 'data', 'api-docs.json');

/**
 * Run TypeDoc to generate markdown documentation
 */
function runTypeDoc() {
  console.log('🔍 Running TypeDoc...');
  try {
    execSync('npx typedoc', { cwd: rootDir, stdio: 'inherit' });
    console.log('✅ TypeDoc completed');
  } catch (error) {
    console.error('❌ TypeDoc failed:', error.message);
    process.exit(1);
  }
}

/**
 * Convert file name to component slug (kebab-case)
 * e.g., "button.md" -> "button", "date-picker.md" -> "date-picker"
 */
function fileToSlug(filename) {
  return filename.replace('.md', '');
}

/**
 * Convert file name to component name (PascalCase)
 * e.g., "button.md" -> "Button", "date-picker.md" -> "DatePicker"
 */
function fileToComponentName(filename) {
  return filename
    .replace('.md', '')
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

/**
 * Clean up the markdown content for display
 * Removes GitHub source links and "Defined in" lines
 */
function cleanupMarkdown(content) {
  return content
    // Remove the title (first line starting with #)
    .replace(/^# .*\n\n?/, '')
    // Remove "Defined in:" lines with GitHub links
    .replace(/Defined in: \[.*?\]\(https:\/\/github\.com\/.*?\)\n\n?/g, '')
    // Remove inline "Defined in" column from tables
    .replace(/\| Defined in \|/g, '|')
    .replace(/\| \[src\/.*?\]\(https:\/\/github\.com\/.*?\) \|/g, '|')
    // Remove standalone source links
    .replace(/\[src\/.*?\]\(https:\/\/github\.com\/.*?\)/g, '')
    // Remove anchor links in tables
    .replace(/<a id="[^"]*"><\/a> /g, '')
    // Clean up excessive newlines
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * Main function
 */
async function main() {
  console.log('📚 Generating API Documentation...\n');

  // Step 1: Run TypeDoc
  runTypeDoc();

  // Step 2: Read generated markdown files
  console.log('\n📖 Reading markdown files...');
  
  const apiDocs = {};
  
  if (!existsSync(DOCS_API_DIR)) {
    console.error('❌ docs/api directory does not exist');
    process.exit(1);
  }

  const files = readdirSync(DOCS_API_DIR);
  
  for (const file of files) {
    if (!file.endsWith('.md') || file === 'README.md') continue;
    
    const slug = fileToSlug(file);
    const componentName = fileToComponentName(file);
    const filePath = join(DOCS_API_DIR, file);
    
    try {
      const content = readFileSync(filePath, 'utf-8');
      const cleanedContent = cleanupMarkdown(content);
      
      if (cleanedContent.trim()) {
        apiDocs[slug] = {
          component: componentName,
          slug: slug,
          content: cleanedContent,
          generatedAt: new Date().toISOString(),
        };
        console.log(`  ✅ ${componentName}`);
      }
    } catch (error) {
      console.error(`  ❌ Error reading ${file}:`, error.message);
    }
  }

  // Step 3: Write output file
  console.log('\n💾 Writing API docs...');
  
  // Ensure output directory exists
  const outputDir = dirname(OUTPUT_FILE);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(OUTPUT_FILE, JSON.stringify(apiDocs, null, 2));
  console.log(`✅ Written to ${OUTPUT_FILE}`);

  // Summary
  const componentCount = Object.keys(apiDocs).length;
  console.log(`\n🎉 Generated API docs for ${componentCount} components`);
}

main().catch(console.error);

