# Alize Next.js Boilerplate

This is a complete example of integrating Alize into a Next.js 15 application with Tailwind CSS v4.

## Features

- ✅ Next.js 15 with App Router
- ✅ Tailwind CSS v4
- ✅ Alize preset and plugin integration
- ✅ Complete semantic token system
- ✅ All Alize components working
- ✅ Material Symbols icons
- ✅ Dark mode support

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Integration Details

### Tailwind Configuration

The `tailwind.config.ts` uses Alize preset and plugin:

```ts
import alizePreset from "alize-ui/preset";
import alizePlugin from "alize-ui/plugin";

export default {
  presets: [alizePreset],
  plugins: [alizePlugin],
  content: ["./app/**/*.{ts,tsx}"],
};
```

### CSS Import

The `app/layout.tsx` imports Alize CSS:

```tsx
import "alize-ui/dist/alize.css";
```

### Components

All Alize components are available:

```tsx
import { Button, Input, Card } from "alize-ui";
```

## What's Demonstrated

- All button variants and sizes
- Form elements (Input, Checkbox)
- Semantic color tokens (surfaces, text, strokes)
- Typography with semantic tokens
- Border radius values
- Interactive states (hover, focus, disabled)
- Material Symbols icons

