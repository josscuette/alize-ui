#!/usr/bin/env node

/**
 * Alize UI - Interactive Installation Script
 * 
 * All options are ON by default (opt-out approach).
 * Press Enter to install everything, or deselect what you don't need.
 */

import { execSync } from "child_process";
import * as readline from "readline";

// ANSI color codes
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
};

// Dependency groups - ALL selected by default
const dependencyGroups = [
  {
    name: "Core UI",
    description: "Radix UI primitives (dialogs, menus, tooltips...)",
    selected: true,
    packages: [
      "@radix-ui/react-accordion",
      "@radix-ui/react-alert-dialog",
      "@radix-ui/react-aspect-ratio",
      "@radix-ui/react-avatar",
      "@radix-ui/react-checkbox",
      "@radix-ui/react-collapsible",
      "@radix-ui/react-context-menu",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-hover-card",
      "@radix-ui/react-label",
      "@radix-ui/react-menubar",
      "@radix-ui/react-navigation-menu",
      "@radix-ui/react-popover",
      "@radix-ui/react-progress",
      "@radix-ui/react-radio-group",
      "@radix-ui/react-scroll-area",
      "@radix-ui/react-select",
      "@radix-ui/react-separator",
      "@radix-ui/react-slider",
      "@radix-ui/react-slot",
      "@radix-ui/react-switch",
      "@radix-ui/react-tabs",
      "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group",
      "@radix-ui/react-tooltip",
    ],
  },
  {
    name: "Forms",
    description: "Form handling with validation (react-hook-form, zod)",
    selected: true,
    packages: ["react-hook-form", "@hookform/resolvers", "zod"],
  },
  {
    name: "Data Visualization",
    description: "Charts and graphs (Highcharts)",
    selected: true,
    packages: ["highcharts", "highcharts-react-official"],
  },
  {
    name: "Date & Calendar",
    description: "Date picker and calendar components",
    selected: true,
    packages: ["date-fns", "react-day-picker"],
  },
  {
    name: "Icons",
    description: "Lucide icons (used in some components)",
    selected: true,
    packages: ["lucide-react"],
  },
  {
    name: "Advanced UI",
    description: "Carousel, resizable panels, drawers, toasts",
    selected: true,
    packages: [
      "embla-carousel-react",
      "react-resizable-panels",
      "vaul",
      "sonner",
      "cmdk",
      "input-otp",
    ],
  },
  {
    name: "Theming",
    description: "Dark/light mode support",
    selected: true,
    packages: ["next-themes"],
  },
];

// Base packages (always installed)
// Install alize-ui from GitHub
const basePackages = ["github:josscuette/alize-ui", "react", "react-dom", "tailwindcss"];

function clearLine() {
  process.stdout.write("\x1b[2K\x1b[0G");
}

function moveCursor(lines) {
  if (lines > 0) {
    process.stdout.write(`\x1b[${lines}B`);
  } else if (lines < 0) {
    process.stdout.write(`\x1b[${Math.abs(lines)}A`);
  }
}

function hideCursor() {
  process.stdout.write("\x1b[?25l");
}

function showCursor() {
  process.stdout.write("\x1b[?25h");
}

function printHeader() {
  console.log();
  console.log(`${colors.cyan}${colors.bright}  ╭─────────────────────────────────────────╮${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}  │${colors.reset}         ${colors.magenta}${colors.bright}Alize UI${colors.reset} - Installation        ${colors.cyan}${colors.bright}│${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}  ╰─────────────────────────────────────────╯${colors.reset}`);
  console.log();
  console.log(`${colors.dim}  All options are selected by default.${colors.reset}`);
  console.log(`${colors.dim}  Press ${colors.yellow}Enter${colors.dim} to install everything,${colors.reset}`);
  console.log(`${colors.dim}  or ${colors.yellow}Space${colors.dim} to toggle options you don't need.${colors.reset}`);
  console.log();
}

function printOptions(groups, selectedIndex) {
  groups.forEach((group, index) => {
    const isSelected = index === selectedIndex;
    const checkbox = group.selected 
      ? `${colors.green}◉${colors.reset}` 
      : `${colors.dim}○${colors.reset}`;
    const cursor = isSelected ? `${colors.cyan}❯${colors.reset}` : " ";
    const name = isSelected 
      ? `${colors.bright}${group.name}${colors.reset}` 
      : group.name;
    const desc = `${colors.dim}${group.description}${colors.reset}`;
    
    console.log(`  ${cursor} ${checkbox} ${name}`);
    console.log(`      ${desc}`);
  });
  
  console.log();
  console.log(`${colors.dim}  ↑/↓: Navigate  Space: Toggle  a: Toggle all  Enter: Install${colors.reset}`);
}

function getSelectedPackages(groups) {
  const packages = [...basePackages];
  groups.forEach((group) => {
    if (group.selected) {
      packages.push(...group.packages);
    }
  });
  return packages;
}

function detectPackageManager() {
  try {
    execSync("pnpm --version", { stdio: "ignore" });
    return "pnpm";
  } catch {
    try {
      execSync("yarn --version", { stdio: "ignore" });
      return "yarn";
    } catch {
      return "npm";
    }
  }
}

function installPackages(packages) {
  const pm = detectPackageManager();
  const installCmd = pm === "npm" ? "npm install" : pm === "yarn" ? "yarn add" : "pnpm add";
  
  console.log();
  console.log(`${colors.cyan}${colors.bright}Installing with ${pm}...${colors.reset}`);
  console.log();
  
  const cmd = `${installCmd} ${packages.join(" ")}`;
  console.log(`${colors.dim}$ ${cmd}${colors.reset}`);
  console.log();
  
  try {
    execSync(cmd, { stdio: "inherit" });
    return true;
  } catch (error) {
    return false;
  }
}

function printSuccess() {
  console.log();
  console.log(`${colors.green}${colors.bright}  ✓ Installation complete!${colors.reset}`);
  console.log();
  console.log(`${colors.dim}  Next steps:${colors.reset}`);
  console.log();
  console.log(`  1. Import the CSS in your layout:`);
  console.log(`     ${colors.cyan}import "alize-ui/dist/alize.css"${colors.reset}`);
  console.log();
  console.log(`  2. Import components:`);
  console.log(`     ${colors.cyan}import { Button, Card } from "alize-ui"${colors.reset}`);
  console.log();
  console.log(`  3. Set up theming (optional):`);
  console.log(`     ${colors.cyan}import { ThemeProvider } from "next-themes"${colors.reset}`);
  console.log();
  console.log(`${colors.dim}  Docs: ${colors.cyan}https://github.com/josscuette/alize-ui${colors.reset}`);
  console.log();
}

async function run() {
  printHeader();
  
  const groups = [...dependencyGroups];
  let selectedIndex = 0;
  
  // Set up raw mode for keyboard input
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }
  
  hideCursor();
  
  // Initial render
  printOptions(groups, selectedIndex);
  
  return new Promise((resolve) => {
    const totalLines = groups.length * 2 + 2; // 2 lines per group + 2 for footer
    
    process.stdin.on("keypress", (str, key) => {
      if (key.ctrl && key.name === "c") {
        showCursor();
        console.log();
        process.exit(0);
      }
      
      // Move cursor back to start of options
      moveCursor(-totalLines);
      
      if (key.name === "up") {
        selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : groups.length - 1;
      } else if (key.name === "down") {
        selectedIndex = selectedIndex < groups.length - 1 ? selectedIndex + 1 : 0;
      } else if (key.name === "space") {
        groups[selectedIndex].selected = !groups[selectedIndex].selected;
      } else if (key.name === "a") {
        // Toggle all
        const allSelected = groups.every((g) => g.selected);
        groups.forEach((g) => (g.selected = !allSelected));
      } else if (key.name === "return") {
        // Clear the options display
        for (let i = 0; i < totalLines; i++) {
          clearLine();
          moveCursor(1);
        }
        moveCursor(-totalLines);
        
        showCursor();
        process.stdin.setRawMode(false);
        process.stdin.removeAllListeners("keypress");
        
        const packages = getSelectedPackages(groups);
        
        console.log(`${colors.bright}Selected packages:${colors.reset}`);
        console.log();
        
        const selectedGroups = groups.filter((g) => g.selected);
        if (selectedGroups.length === groups.length) {
          console.log(`  ${colors.green}✓${colors.reset} All dependencies (full installation)`);
        } else {
          console.log(`  ${colors.green}✓${colors.reset} Base packages (react, react-dom, tailwindcss)`);
          selectedGroups.forEach((g) => {
            console.log(`  ${colors.green}✓${colors.reset} ${g.name}`);
          });
          
          const skipped = groups.filter((g) => !g.selected);
          if (skipped.length > 0) {
            console.log();
            skipped.forEach((g) => {
              console.log(`  ${colors.dim}○ ${g.name} (skipped)${colors.reset}`);
            });
          }
        }
        
        const success = installPackages(packages);
        
        if (success) {
          printSuccess();
        } else {
          console.log();
          console.log(`${colors.yellow}  ⚠ Some packages may have failed to install.${colors.reset}`);
          console.log(`${colors.dim}  Try running the install command manually.${colors.reset}`);
          console.log();
        }
        
        resolve();
        return;
      }
      
      // Clear and redraw
      for (let i = 0; i < totalLines; i++) {
        clearLine();
        moveCursor(1);
      }
      moveCursor(-totalLines);
      
      printOptions(groups, selectedIndex);
    });
  });
}

// Run the CLI
run().then(() => {
  process.exit(0);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});

