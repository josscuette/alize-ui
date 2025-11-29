#!/usr/bin/env node

/**
 * Alize UI - Interactive Installation Script
 * 
 * All options are ON by default (opt-out approach).
 * Press Enter to install everything, or deselect what you don't need.
 */

import { execSync, spawn } from "child_process";
import * as readline from "readline";

// ANSI color codes
const c = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
  red: "\x1b[31m",
};

// Dependency groups - ALL selected by default
const groups = [
  {
    name: "Core UI",
    desc: "Radix UI primitives (dialogs, menus, tooltips...)",
    selected: true,
    packages: [
      "@radix-ui/react-accordion", "@radix-ui/react-alert-dialog", "@radix-ui/react-aspect-ratio",
      "@radix-ui/react-avatar", "@radix-ui/react-checkbox", "@radix-ui/react-collapsible",
      "@radix-ui/react-context-menu", "@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-hover-card", "@radix-ui/react-label", "@radix-ui/react-menubar",
      "@radix-ui/react-navigation-menu", "@radix-ui/react-popover", "@radix-ui/react-progress",
      "@radix-ui/react-radio-group", "@radix-ui/react-scroll-area", "@radix-ui/react-select",
      "@radix-ui/react-separator", "@radix-ui/react-slider", "@radix-ui/react-slot",
      "@radix-ui/react-switch", "@radix-ui/react-tabs", "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group", "@radix-ui/react-tooltip",
    ],
  },
  {
    name: "Forms",
    desc: "Form handling with validation (react-hook-form, zod)",
    selected: true,
    packages: ["react-hook-form", "@hookform/resolvers", "zod"],
  },
  {
    name: "Charts",
    desc: "Data visualization (Highcharts)",
    selected: true,
    packages: ["highcharts", "highcharts-react-official"],
  },
  {
    name: "Calendar",
    desc: "Date picker components",
    selected: true,
    packages: ["date-fns", "react-day-picker"],
  },
  {
    name: "Icons",
    desc: "Lucide icons",
    selected: true,
    packages: ["lucide-react"],
  },
  {
    name: "Advanced UI",
    desc: "Carousel, drawers, toasts, command palette",
    selected: true,
    packages: ["embla-carousel-react", "react-resizable-panels", "vaul", "sonner", "cmdk", "input-otp"],
  },
  {
    name: "Theming",
    desc: "Dark/light mode (next-themes)",
    selected: true,
    packages: ["next-themes"],
  },
];

const basePackages = ["github:josscuette/alize-ui", "react", "react-dom", "tailwindcss"];

function printHeader() {
  console.log();
  console.log(`${c.cyan}${c.bright}  ╭──────────────────────────────────────╮${c.reset}`);
  console.log(`${c.cyan}${c.bright}  │${c.reset}       ${c.magenta}${c.bright}Alize UI${c.reset} - Installation      ${c.cyan}${c.bright}│${c.reset}`);
  console.log(`${c.cyan}${c.bright}  ╰──────────────────────────────────────╯${c.reset}`);
  console.log();
}

function printMenu(cursor) {
  // Clear previous menu
  process.stdout.write(`\x1b[${groups.length + 3}A`); // Move up
  process.stdout.write("\x1b[0J"); // Clear to end
  
  groups.forEach((g, i) => {
    const arrow = i === cursor ? `${c.cyan}❯${c.reset}` : " ";
    const check = g.selected ? `${c.green}◉${c.reset}` : `${c.dim}○${c.reset}`;
    const name = i === cursor ? `${c.bright}${g.name}${c.reset}` : g.name;
    console.log(`  ${arrow} ${check} ${name} ${c.dim}— ${g.desc}${c.reset}`);
  });
  console.log();
  console.log(`  ${c.dim}↑↓${c.reset} Navigate  ${c.dim}Space${c.reset} Toggle  ${c.dim}a${c.reset} All  ${c.dim}Enter${c.reset} Install`);
}

function detectPM() {
  try { execSync("pnpm --version", { stdio: "ignore" }); return "pnpm"; } catch {}
  try { execSync("yarn --version", { stdio: "ignore" }); return "yarn"; } catch {}
  return "npm";
}

import fs from "fs";
import path from "path";

function ensurePackageJson() {
  const pkgPath = path.join(process.cwd(), "package.json");
  
  if (!fs.existsSync(pkgPath)) {
    console.log(`${c.yellow}⚠ No package.json found. Creating one...${c.reset}`);
    execSync("npm init -y", { stdio: "ignore" });
    console.log(`${c.green}✓${c.reset} Created package.json`);
    console.log();
  }
}

function install(packages) {
  const pm = detectPM();
  const cmd = pm === "npm" ? "install" : "add";
  
  console.log();
  console.log(`${c.cyan}Installing with ${pm}...${c.reset}`);
  console.log();
  
  return new Promise((resolve) => {
    const child = spawn(pm, [cmd, ...packages], { 
      stdio: "inherit",
      shell: true 
    });
    child.on("close", (code) => resolve(code === 0));
  });
}

function printSuccess() {
  console.log();
  console.log(`${c.green}${c.bright}  ✓ Installation complete!${c.reset}`);
  console.log();
  console.log(`  ${c.dim}Next steps:${c.reset}`);
  console.log(`  1. ${c.cyan}import "alize-ui/dist/alize.css"${c.reset}`);
  console.log(`  2. ${c.cyan}import { Button } from "alize-ui"${c.reset}`);
  console.log();
}

async function main() {
  printHeader();
  
  console.log(`  ${c.dim}All options selected. Press Enter to install everything.${c.reset}`);
  console.log(`  ${c.dim}Or use arrows + space to customize.${c.reset}`);
  console.log();
  
  // Print initial menu
  groups.forEach((g, i) => {
    const check = `${c.green}◉${c.reset}`;
    const arrow = i === 0 ? `${c.cyan}❯${c.reset}` : " ";
    const name = i === 0 ? `${c.bright}${g.name}${c.reset}` : g.name;
    console.log(`  ${arrow} ${check} ${name} ${c.dim}— ${g.desc}${c.reset}`);
  });
  console.log();
  console.log(`  ${c.dim}↑↓${c.reset} Navigate  ${c.dim}Space${c.reset} Toggle  ${c.dim}a${c.reset} All  ${c.dim}Enter${c.reset} Install`);
  
  let cursor = 0;
  
  // Setup readline
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }
  
  process.stdin.resume();
  
  return new Promise((resolve) => {
    process.stdin.on("keypress", async (str, key) => {
      if (!key) return;
      
      // Ctrl+C
      if (key.ctrl && key.name === "c") {
        console.log();
        process.exit(0);
      }
      
      // Navigation
      if (key.name === "up") {
        cursor = cursor > 0 ? cursor - 1 : groups.length - 1;
        printMenu(cursor);
      } else if (key.name === "down") {
        cursor = cursor < groups.length - 1 ? cursor + 1 : 0;
        printMenu(cursor);
      } else if (key.name === "space") {
        groups[cursor].selected = !groups[cursor].selected;
        printMenu(cursor);
      } else if (key.name === "a") {
        const allSelected = groups.every(g => g.selected);
        groups.forEach(g => g.selected = !allSelected);
        printMenu(cursor);
      } else if (key.name === "return") {
        // Cleanup
        process.stdin.setRawMode(false);
        process.stdin.removeAllListeners("keypress");
        process.stdin.pause();
        
        // Clear menu
        process.stdout.write(`\x1b[${groups.length + 3}A\x1b[0J`);
        
        // Build package list
        const packages = [...basePackages];
        const selected = groups.filter(g => g.selected);
        selected.forEach(g => packages.push(...g.packages));
        
        // Show summary
        console.log(`${c.bright}Installing:${c.reset}`);
        if (selected.length === groups.length) {
          console.log(`  ${c.green}✓${c.reset} Full installation (all dependencies)`);
        } else {
          selected.forEach(g => console.log(`  ${c.green}✓${c.reset} ${g.name}`));
          groups.filter(g => !g.selected).forEach(g => {
            console.log(`  ${c.dim}○ ${g.name} (skipped)${c.reset}`);
          });
        }
        
        // Ensure package.json exists
        ensurePackageJson();
        
        const success = await install(packages);
        if (success) printSuccess();
        
        resolve();
      }
    });
  });
}

main().then(() => process.exit(0)).catch(() => process.exit(1));
