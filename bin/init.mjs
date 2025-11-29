#!/usr/bin/env node

/**
 * Alize UI - Interactive Installation Script
 * All options ON by default (opt-out approach).
 */

import { execSync, spawn } from "child_process";
import fs from "fs";
import path from "path";
import { createInterface } from "readline";

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

function detectPM() {
  try { execSync("pnpm --version", { stdio: "ignore" }); return "pnpm"; } catch {}
  try { execSync("yarn --version", { stdio: "ignore" }); return "yarn"; } catch {}
  return "npm";
}

function ensurePackageJson() {
  const pkgPath = path.join(process.cwd(), "package.json");
  if (!fs.existsSync(pkgPath)) {
    console.log(`${c.yellow}⚠ No package.json found. Creating one...${c.reset}`);
    execSync("npm init -y", { stdio: "ignore" });
    console.log(`${c.green}✓${c.reset} Created package.json\n`);
  }
}

async function install(packages) {
  const pm = detectPM();
  const cmd = pm === "npm" ? "install" : "add";
  console.log(`${c.cyan}Installing with ${pm}...${c.reset}\n`);
  
  return new Promise((resolve) => {
    const child = spawn(pm, [cmd, ...packages], { stdio: "inherit", shell: true });
    child.on("close", (code) => resolve(code === 0));
  });
}

async function prompt() {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  
  console.log(`\n${c.cyan}${c.bold}  ╭──────────────────────────────────────╮${c.reset}`);
  console.log(`${c.cyan}${c.bold}  │${c.reset}       ${c.magenta}${c.bold}Alize UI${c.reset} - Installation      ${c.cyan}${c.bold}│${c.reset}`);
  console.log(`${c.cyan}${c.bold}  ╰──────────────────────────────────────╯${c.reset}\n`);
  
  console.log(`  ${c.dim}Dependencies to install:${c.reset}\n`);
  
  groups.forEach((g, i) => {
    console.log(`  ${c.green}${i + 1}.${c.reset} ${c.bold}${g.name}${c.reset} ${c.dim}— ${g.desc}${c.reset}`);
  });
  
  console.log(`\n  ${c.dim}Press Enter to install all, or type numbers to exclude (e.g., "3,5")${c.reset}`);
  
  return new Promise((resolve) => {
    rl.question(`\n  ${c.cyan}Exclude:${c.reset} `, (answer) => {
      rl.close();
      
      if (answer.trim()) {
        const exclude = answer.split(",").map(n => parseInt(n.trim()) - 1).filter(n => !isNaN(n));
        exclude.forEach(i => {
          if (groups[i]) groups[i].selected = false;
        });
      }
      
      resolve();
    });
  });
}

async function main() {
  await prompt();
  
  const packages = [...basePackages];
  const selected = groups.filter(g => g.selected);
  selected.forEach(g => packages.push(...g.packages));
  
  console.log(`\n${c.bold}Installing:${c.reset}`);
  if (selected.length === groups.length) {
    console.log(`  ${c.green}✓${c.reset} Full installation\n`);
  } else {
    selected.forEach(g => console.log(`  ${c.green}✓${c.reset} ${g.name}`));
    groups.filter(g => !g.selected).forEach(g => console.log(`  ${c.dim}○ ${g.name} (skipped)${c.reset}`));
    console.log();
  }
  
  ensurePackageJson();
  const success = await install(packages);
  
  if (success) {
    console.log(`\n${c.green}${c.bold}✓ Done!${c.reset}\n`);
    console.log(`${c.dim}Next steps:${c.reset}`);
    console.log(`  ${c.cyan}import "alize-ui/dist/alize.css"${c.reset}`);
    console.log(`  ${c.cyan}import { Button } from "alize-ui"${c.reset}\n`);
  }
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
