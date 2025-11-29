#!/usr/bin/env node

/**
 * Alize UI - Interactive Installation Script
 * All options ON by default (opt-out approach).
 */

import { execSync, spawn } from "child_process";
import * as readline from "readline";
import fs from "fs";
import path from "path";

// Colors
const c = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
};

// Dependency groups
const groups = [
  {
    name: "Core UI",
    desc: "Radix UI primitives",
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
      "@radix-ui/react-toggle-group", "@radix-ui/react-tooltip", "lucide-react",
    ],
  },
  { name: "Forms", desc: "react-hook-form, zod", selected: true, packages: ["react-hook-form", "@hookform/resolvers", "zod"] },
  { name: "Charts", desc: "Highcharts", selected: true, packages: ["highcharts", "highcharts-react-official"] },
  { name: "Calendar", desc: "Date picker", selected: true, packages: ["date-fns", "react-day-picker"] },
  { name: "Advanced UI", desc: "Carousel, drawers, toasts", selected: true, packages: ["embla-carousel-react", "react-resizable-panels", "vaul", "sonner", "cmdk", "input-otp"] },
  { name: "Theming", desc: "Dark/light mode", selected: true, packages: ["next-themes"] },
];

const basePackages = ["github:josscuette/alize-ui", "react", "react-dom", "tailwindcss"];

function write(text) {
  process.stdout.write(text);
}

function drawMenu(cursor) {
  // Save cursor, move to top of menu area, clear and redraw
  write("\x1b[s"); // Save cursor position
  write(`\x1b[${groups.length + 2}A`); // Move up to start of menu
  
  for (let i = 0; i < groups.length; i++) {
    const g = groups[i];
    const arrow = i === cursor ? `${c.cyan}❯${c.reset}` : " ";
    const check = g.selected ? `${c.green}◉${c.reset}` : `${c.dim}○${c.reset}`;
    const name = i === cursor ? `${c.bold}${g.name}${c.reset}` : g.name;
    write(`\x1b[2K  ${arrow} ${check} ${name} ${c.dim}— ${g.desc}${c.reset}\n`);
  }
  
  write(`\x1b[2K\n`); // Blank line
  write(`\x1b[2K  ${c.dim}↑↓${c.reset} Navigate  ${c.dim}Space${c.reset} Toggle  ${c.dim}a${c.reset} All  ${c.dim}Enter${c.reset} Install`);
  write("\x1b[u"); // Restore cursor position
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
    console.log(`${c.green}✓${c.reset} Created package.json`);
  }
}

async function install(packages) {
  const pm = detectPM();
  const cmd = pm === "npm" ? "install" : "add";
  console.log(`\n${c.cyan}Installing with ${pm}...${c.reset}\n`);
  
  return new Promise((resolve) => {
    const child = spawn(pm, [cmd, ...packages], { stdio: "inherit", shell: true });
    child.on("close", (code) => resolve(code === 0));
  });
}

async function main() {
  // Header
  console.log(`\n${c.cyan}${c.bold}  ╭──────────────────────────────────────╮${c.reset}`);
  console.log(`${c.cyan}${c.bold}  │${c.reset}       ${c.magenta}${c.bold}Alize UI${c.reset} - Installation      ${c.cyan}${c.bold}│${c.reset}`);
  console.log(`${c.cyan}${c.bold}  ╰──────────────────────────────────────╯${c.reset}\n`);
  console.log(`  ${c.dim}All selected. Press Enter to install everything.${c.reset}\n`);
  
  // Initial menu
  for (let i = 0; i < groups.length; i++) {
    const g = groups[i];
    const arrow = i === 0 ? `${c.cyan}❯${c.reset}` : " ";
    const check = `${c.green}◉${c.reset}`;
    const name = i === 0 ? `${c.bold}${g.name}${c.reset}` : g.name;
    console.log(`  ${arrow} ${check} ${name} ${c.dim}— ${g.desc}${c.reset}`);
  }
  console.log();
  console.log(`  ${c.dim}↑↓${c.reset} Navigate  ${c.dim}Space${c.reset} Toggle  ${c.dim}a${c.reset} All  ${c.dim}Enter${c.reset} Install`);
  
  let cursor = 0;
  
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) process.stdin.setRawMode(true);
  process.stdin.resume();
  write("\x1b[?25l"); // Hide cursor
  
  return new Promise((resolve) => {
    const handleKey = async (str, key) => {
      if (!key) return;
      
      if (key.ctrl && key.name === "c") {
        write("\x1b[?25h\n"); // Show cursor
        process.exit(0);
      }
      
      let needsRedraw = false;
      
      if (key.name === "up") {
        cursor = cursor > 0 ? cursor - 1 : groups.length - 1;
        needsRedraw = true;
      } else if (key.name === "down") {
        cursor = cursor < groups.length - 1 ? cursor + 1 : 0;
        needsRedraw = true;
      } else if (key.name === "space") {
        groups[cursor].selected = !groups[cursor].selected;
        needsRedraw = true;
      } else if (key.name === "a") {
        const allSelected = groups.every(g => g.selected);
        groups.forEach(g => g.selected = !allSelected);
        needsRedraw = true;
      } else if (key.name === "return") {
        write("\x1b[?25h"); // Show cursor
        process.stdin.setRawMode(false);
        process.stdin.removeAllListeners("keypress");
        process.stdin.pause();
        
        console.log("\n");
        
        const packages = [...basePackages];
        const selected = groups.filter(g => g.selected);
        selected.forEach(g => packages.push(...g.packages));
        
        console.log(`${c.bold}Installing:${c.reset}`);
        if (selected.length === groups.length) {
          console.log(`  ${c.green}✓${c.reset} Full installation`);
        } else {
          selected.forEach(g => console.log(`  ${c.green}✓${c.reset} ${g.name}`));
          groups.filter(g => !g.selected).forEach(g => console.log(`  ${c.dim}○ ${g.name} (skipped)${c.reset}`));
        }
        
        ensurePackageJson();
        const success = await install(packages);
        
        if (success) {
          console.log(`\n${c.green}${c.bold}✓ Done!${c.reset}`);
          console.log(`\n${c.dim}Next:${c.reset}`);
          console.log(`  ${c.cyan}import "alize-ui/dist/alize.css"${c.reset}`);
          console.log(`  ${c.cyan}import { Button } from "alize-ui"${c.reset}\n`);
        }
        
        resolve();
        return;
      }
      
      if (needsRedraw) drawMenu(cursor);
    };
    
    process.stdin.on("keypress", handleKey);
  });
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
