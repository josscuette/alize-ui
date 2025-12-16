#!/usr/bin/env node

/**
 * Build script for Alize
 * 
 * This script orchestrates the complete build process:
 * 1. Components are built with tsup (handled by build:components)
 * 2. CSS is built with Tailwind (handled by build:css)
 * 3. This script copies preset and plugin files to dist
 */

import { copyFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

// Ensure dist directory exists
const distDir = join(rootDir, "dist");
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Copy preset files (only .js, not .ts to avoid type-checking issues)
console.log("Copying preset files...");
copyFileSync(
  join(rootDir, "src/tailwind/preset.js"),
  join(distDir, "tailwind.preset.js")
);

// Copy plugin files (only .js, not .ts to avoid type-checking issues)
console.log("Copying plugin files...");
copyFileSync(
  join(rootDir, "src/tailwind/plugin.js"),
  join(distDir, "plugin.js")
);

// Copy Material Symbols font file from node_modules to dist
console.log("Copying Material Symbols font...");
const fontsDir = join(distDir, "fonts");
if (!existsSync(fontsDir)) {
  mkdirSync(fontsDir, { recursive: true });
}
const fontSource = join(rootDir, "node_modules/material-symbols/material-symbols-outlined.woff2");
const fontDest = join(fontsDir, "material-symbols-outlined.woff2");
if (existsSync(fontSource)) {
  copyFileSync(fontSource, fontDest);
  console.log("Material Symbols font copied successfully to dist");
} else {
  console.warn("Warning: Material Symbols font file not found at", fontSource);
  console.warn("Make sure 'material-symbols' package is installed");
}

console.log("Build copy complete!");

