# Alize Architecture

## Overview

Alize is designed as a zero-configuration component library that can be consumed by any project with minimal setup. The architecture ensures:

- **Single Tailwind instance**: Only one instance of Tailwind runs in consumer apps
- **Zero configuration**: Consumers only need to import CSS, add preset, and use plugin
- **Full token system**: All semantic tokens are available out of the box
- **Type safety**: Full TypeScript support with proper exports

## Project Structure

```
/src
  /components          # React components (Button, Input, Card, etc.)
  /foundation          # Foundation Layer - semantic style presets
  /lib                 # Utilities (cn, validation, sanitization, etc.)
  /tailwind            # Tailwind preset and plugin
  /styles              # CSS source file for compilation
  /hooks               # React hooks
  index.ts             # Main entry point

/dist                  # Build output
  index.js             # CJS bundle
  index.mjs             # ESM bundle
  index.d.ts            # TypeScript definitions
  alize.css             # Compiled CSS with all tokens
  tailwind.preset.js    # Tailwind preset
  plugin.js             # Tailwind plugin

/examples
  /next-boilerplate     # Complete Next.js 15 example
```

## Build System

### Components Build (tsup)

Components are built using `tsup` which:
- Generates both ESM (`index.mjs`) and CJS (`index.js`) bundles
- Creates TypeScript definitions (`index.d.ts`)
- Externalizes React and Radix UI dependencies
- Outputs to `dist/`

### CSS Build (Tailwind CLI)

The CSS is built using Tailwind CLI:
- Processes `src/styles/alize.css`
- Includes all `@theme` blocks for Tailwind v4
- Minifies output
- Generates `dist/alize.css`

### Build Script

The `scripts/build.mjs` orchestrates:
1. Component build with tsup
2. CSS build with Tailwind
3. Copy preset and plugin files to dist

## Package Exports

```json
{
  ".": "./dist/index.mjs",           // Main entry (ESM)
  "./dist/alize.css": "./dist/alize.css",  // CSS file
  "./preset": "./dist/tailwind.preset.js", // Tailwind preset
  "./plugin": "./dist/plugin.js"           // Tailwind plugin
}
```

## Consumer Integration

### 1. Install

```bash
npm install alize
npm install react react-dom tailwindcss
```

### 2. Configure Tailwind

```ts
// tailwind.config.ts
import alizePreset from "alize/preset";
import alizePlugin from "alize/plugin";

export default {
  presets: [alizePreset],
  plugins: [alizePlugin],
  content: ["./app/**/*.{ts,tsx}"],
};
```

### 3. Import CSS

```tsx
// app/layout.tsx
import "alize/dist/alize.css";
```

### 4. Use Components

```tsx
import { Button, Input, Card } from "alize";
```

## How It Works

### Preset

The preset (`tailwind.preset.js`) provides:
- Content scanning paths for Alize components
- Theme extensions with all semantic tokens
- Border radius, font family, and other design tokens

### Plugin

The plugin (`plugin.js`) adds:
- Base styles for Material Symbols
- Custom utilities (focus-ring, transitions)
- Custom variants (state-checked, state-disabled, etc.)

### CSS

The CSS file (`alize.css`) includes:
- All CSS variables (`--semantic-*`)
- `@theme` blocks for Tailwind v4 token system
- Base layer styles (Material Symbols, resets, etc.)
- Dark mode support

## Foundation Layer

The Foundation Layer (`/src/foundation`) provides semantic style presets:
- `surfaces.ts` - Background colors
- `text.ts` - Text colors
- `icon.ts` - Icon colors
- `stroke.ts` - Border colors
- `states.ts` - Interaction states
- `size.ts` - Size presets
- `radius.ts` - Border radius presets
- `animation.ts` - Animation presets

These are used internally by components and exported for consumer use.

## Development

### Build

```bash
npm run build
```

This runs:
1. `build:components` - Builds React components with tsup
2. `build:css` - Builds CSS with Tailwind
3. `build:copy` - Copies preset and plugin to dist

### Validate

```bash
node scripts/validate-build.mjs
```

Validates that all required files and exports are present.

## Example

See `examples/next-boilerplate` for a complete working example of Alize integration.

