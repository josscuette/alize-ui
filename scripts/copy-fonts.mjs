#!/usr/bin/env node

/**
 * Copy Material Symbols font from node_modules to public/fonts
 * This script is run postinstall to ensure the font is available for Next.js
 */

import { copyFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

// Copy Material Symbols font file from node_modules to public/fonts
const publicFontsDir = join(rootDir, "public/fonts");
if (!existsSync(publicFontsDir)) {
  mkdirSync(publicFontsDir, { recursive: true });
}

const fontSource = join(rootDir, "node_modules/material-symbols/material-symbols-outlined.woff2");
const fontDest = join(publicFontsDir, "material-symbols-outlined.woff2");

if (existsSync(fontSource)) {
  copyFileSync(fontSource, fontDest);
  console.log("✓ Material Symbols font copied to public/fonts/");
} else {
  console.warn("⚠ Warning: Material Symbols font file not found at", fontSource);
  console.warn("  Make sure 'material-symbols' package is installed");
}

