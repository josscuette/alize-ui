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

console.log("Build copy complete!");

