#!/usr/bin/env node

/**
 * Validation script for Alize build
 * 
 * Checks that all required files and exports are present
 */

import { existsSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

const requiredFiles = [
  "src/index.ts",
  "src/tailwind/preset.ts",
  "src/tailwind/preset.js",
  "src/tailwind/plugin.ts",
  "src/tailwind/plugin.js",
  "src/styles/alize.css",
  "tsup.config.ts",
  "scripts/build.mjs",
  "examples/next-boilerplate/package.json",
  "examples/next-boilerplate/tailwind.config.ts",
  "examples/next-boilerplate/app/layout.tsx",
  "examples/next-boilerplate/app/page.tsx",
];

const requiredDirs = [
  "src/components",
  "src/foundation",
  "src/lib",
  "src/tailwind",
  "src/styles",
  "dist",
  "examples/next-boilerplate",
];

console.log("Validating Alize build structure...\n");

let errors = 0;

// Check directories
console.log("Checking directories...");
for (const dir of requiredDirs) {
  const path = join(rootDir, dir);
  if (existsSync(path)) {
    console.log(`  ✓ ${dir}`);
  } else {
    console.log(`  ✗ ${dir} (missing)`);
    errors++;
  }
}

// Check files
console.log("\nChecking files...");
for (const file of requiredFiles) {
  const path = join(rootDir, file);
  if (existsSync(path)) {
    console.log(`  ✓ ${file}`);
  } else {
    console.log(`  ✗ ${file} (missing)`);
    errors++;
  }
}

// Check package.json exports
console.log("\nChecking package.json exports...");
try {
  const packageJson = JSON.parse(readFileSync(join(rootDir, "package.json"), "utf-8"));
  const exports = packageJson.exports || {};
  
  const requiredExports = [
    ".",
    "./dist/alize.css",
    "./preset",
    "./plugin",
  ];
  
  for (const exp of requiredExports) {
    if (exports[exp]) {
      console.log(`  ✓ ${exp}`);
    } else {
      console.log(`  ✗ ${exp} (missing)`);
      errors++;
    }
  }
} catch (e) {
  console.log(`  ✗ Error reading package.json: ${e.message}`);
  errors++;
}

// Summary
console.log("\n" + "=".repeat(50));
if (errors === 0) {
  console.log("✓ All checks passed! Build structure is valid.");
  process.exit(0);
} else {
  console.log(`✗ Found ${errors} error(s). Please fix them before building.`);
  process.exit(1);
}

