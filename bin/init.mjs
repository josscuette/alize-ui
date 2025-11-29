#!/usr/bin/env node

/**
 * Alize UI - Interactive Installation Script
 * 
 * All options are ON by default (opt-out approach).
 * Press Enter to install everything, or deselect what you don't need.
 */

import { execSync, spawn } from "child_process";
import * as readline from "readline";
import fs from "fs";
import path from "path";

// ANSI codes
const c = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
};

// Move cursor
const up = (n) => `\x1b[${n}A`;
const clearLine = "\x1b[2K\r";

// Dependency groups - ALL selected by default
const groups = [
  {
    name: "Core UI",
    desc: "Radix UI primitives + internal icons",
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
      "lucide-react", // Used internally by some components
    ],
  },
  {
    name: "Forms",
    desc: "react-hook-form, zod",
    selected: true,
    packages: ["react-hook-form", "@hookform/resolvers", "zod"],
  },
  {
    name: "Charts",
    desc: "Highcharts data visualization",
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
    name: "Advanced UI",
    desc: "Carousel, drawers, toasts, cmdk",
    selected: true,
    packages: ["embla-carousel-react", "react-resizable-panels", "vaul", "sonner", "cmdk", "input-otp"],
  },
  {
    name: "Theming",
    desc: "Dark/light mode support",
    selected: true,
    packages: ["next-themes"],
  },
];

const basePackages = ["github:josscuette/alize-ui", "react", "react-dom", "tailwindcss"];
const MENU_LINES = groups.length + 2; // groups + blank + help line

function renderLine(g, i, cursor) {
  const arrow = i === cursor ? `${c.cyan}❯${c.reset}` : " ";
  const check = g.selected ? `${c.green}◉${c.reset}` : `${c.dim}○${c.reset}`;
  const name = i === cursor ? `${c.bright}${g.name}${c.reset}` : g.name;
  return `  ${arrow} ${check} ${name} ${c.dim}— ${g.desc}${c.reset}`;
}

function printMenu(cursor) {
  // Move to start of menu area
  process.stdout.write(up(MENU_LINES));
  
  // Redraw each line
  groups.forEach((g, i) => {
    process.stdout.write(clearLine + renderLine(g, i, cursor) + "\n");
  });
  
  // Blank line + help
  process.stdout.write(clearLine + "\n");
  process.stdout.write(clearLine + `  ${c.dim}↑↓${c.reset} Navigate  ${c.dim}Space${c.reset} Toggle  ${c.dim}a${c.reset} All  ${c.dim}Enter${c.reset} Install`);
}

function detectPM() {
  try { execSync("pnpm --version", { stdio: "ignore" }); return "pnpm"; } catch {}
  try { execSync("yarn --version", { stdio: "ignore" }); return "yarn"; } catch {}
  return "npm";
}

function ensurePackageJson() {
  const pkgPath = path.join(process.cwd(), "package.json");
  if (!fs.existsSync(pkgPath)) {
    console.log(`\n${c.yellow}⚠ No package.json found. Creating one...${c.reset}`);
    execSync("npm init -y", { stdio: "ignore" });
    console.log(`${c.green}✓${c.reset} Created package.json\n`);
  }
}

function install(packages) {
  const pm = detectPM();
  const cmd = pm === "npm" ? "install" : "add";
  
  console.log(`\n${c.cyan}Installing with ${pm}...${c.reset}\n`);
  
  return new Promise((resolve) => {
    const child = spawn(pm, [cmd, ...packages], { stdio: "inherit", shell: true });
    child.on("close", (code) => resolve(code === 0));
  });
}

function printSuccess() {
  console.log(`\n${c.green}${c.bright}✓ Installation complete!${c.reset}\n`);
  console.log(`${c.dim}Next steps:${c.reset}`);
  console.log(`  1. ${c.cyan}import "alize-ui/dist/alize.css"${c.reset}`);
  console.log(`  2. ${c.cyan}import { Button } from "alize-ui"${c.reset}\n`);
}

async function main() {
  // Header
  console.log(`\n${c.cyan}${c.bright}  ╭──────────────────────────────────────╮${c.reset}`);
  console.log(`${c.cyan}${c.bright}  │${c.reset}       ${c.magenta}${c.bright}Alize UI${c.reset} - Installation      ${c.cyan}${c.bright}│${c.reset}`);
  console.log(`${c.cyan}${c.bright}  ╰──────────────────────────────────────╯${c.reset}\n`);
  console.log(`  ${c.dim}All selected by default. Enter = install all.${c.reset}\n`);
  
  // Initial menu render
  groups.forEach((g, i) => console.log(renderLine(g, i, 0)));
  console.log();
  console.log(`  ${c.dim}↑↓${c.reset} Navigate  ${c.dim}Space${c.reset} Toggle  ${c.dim}a${c.reset} All  ${c.dim}Enter${c.reset} Install`);
  
  let cursor = 0;
  
  // Setup input
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) process.stdin.setRawMode(true);
  process.stdin.resume();
  
  return new Promise((resolve) => {
    process.stdin.on("keypress", async (str, key) => {
      if (!key) return;
      
      if (key.ctrl && key.name === "c") {
        process.stdout.write("\n");
        process.exit(0);
      }
      
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
        process.stdin.setRawMode(false);
        process.stdin.removeAllListeners("keypress");
        process.stdin.pause();
        
        // Move past menu and clear it
        process.stdout.write("\n\n");
        
        // Build package list
        const packages = [...basePackages];
        const selected = groups.filter(g => g.selected);
        selected.forEach(g => packages.push(...g.packages));
        
        // Summary
        console.log(`${c.bright}Installing:${c.reset}`);
        if (selected.length === groups.length) {
          console.log(`  ${c.green}✓${c.reset} Full installation (all dependencies)`);
        } else {
          selected.forEach(g => console.log(`  ${c.green}✓${c.reset} ${g.name}`));
          groups.filter(g => !g.selected).forEach(g => {
            console.log(`  ${c.dim}○ ${g.name} (skipped)${c.reset}`);
          });
        }
        
        ensurePackageJson();
        const success = await install(packages);
        if (success) printSuccess();
        
        resolve();
      }
    });
  });
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
