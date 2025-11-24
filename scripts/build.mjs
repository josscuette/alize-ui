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

// Copy preset files
console.log("Copying preset files...");
copyFileSync(
  join(rootDir, "src/tailwind/preset.js"),
  join(distDir, "tailwind.preset.js")
);
copyFileSync(
  join(rootDir, "src/tailwind/preset.ts"),
  join(distDir, "tailwind.preset.ts")
);

// Copy plugin files
console.log("Copying plugin files...");
copyFileSync(
  join(rootDir, "src/tailwind/plugin.js"),
  join(distDir, "plugin.js")
);
copyFileSync(
  join(rootDir, "src/tailwind/plugin.ts"),
  join(distDir, "plugin.ts")
);

console.log("Build copy complete!");

