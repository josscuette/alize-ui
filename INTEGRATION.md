# Alize Integration Guide

Complete guide for integrating Alize into your project with zero configuration.

## Quick Start

### 1. Install Alize

```bash
npm install alize-ui
```

### 2. Install Peer Dependencies

```bash
npm install react react-dom tailwindcss react-hook-form
```

**Note**: `react-hook-form` is required if you use the `Form` component from Alize.

### 3. Configure Tailwind

Create or update `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";
import alizePreset from "alize-ui/preset";
import alizePlugin from "alize-ui/plugin";

export default {
  presets: [alizePreset],
  plugins: [alizePlugin],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config;
```

### 4. Import CSS

In your main layout or CSS file:

```tsx
// app/layout.tsx (Next.js App Router)
import "alize-ui/dist/alize.css";
import { MaterialSymbolsProvider } from "alize-ui";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <MaterialSymbolsProvider />
        {children}
      </body>
    </html>
  );
}
```

### 5. Use Components

```tsx
import { Button, Input, Card } from "alize-ui";

export function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
      <Input placeholder="Enter text..." />
    </Card>
  );
}
```

## Framework-Specific Guides

### Next.js 15 (App Router)

See `examples/next-boilerplate` for a complete example.

**Key files:**

1. `tailwind.config.ts` - Uses preset and plugin
2. `app/layout.tsx` - Imports CSS and MaterialSymbolsProvider
3. `postcss.config.mjs` - PostCSS configuration

### Next.js 14 (Pages Router)

Similar setup, but import CSS in `pages/_app.tsx`:

```tsx
// pages/_app.tsx
import "alize-ui/dist/alize.css";
import { MaterialSymbolsProvider } from "alize-ui";

export default function App({ Component, pageProps }) {
  return (
    <MaterialSymbolsProvider>
      <Component {...pageProps} />
    </MaterialSymbolsProvider>
  );
}
```

### Vite + React

1. Install dependencies
2. Configure Tailwind with preset and plugin
3. Import CSS in `main.tsx`:

```tsx
// main.tsx
import "alize-ui/dist/alize.css";
import { MaterialSymbolsProvider } from "alize-ui";
```

### Remix

1. Install dependencies
2. Configure Tailwind
3. Import CSS in `app/root.tsx`:

```tsx
// app/root.tsx
import "alize/dist/alize.css";
```

## What You Get

### Semantic Tokens

All semantic design tokens are available:

- **Surfaces**: `bg-semantic-surface-primary`, `bg-semantic-surface-secondary`, etc.
- **Text**: `text-semantic-text-default`, `text-semantic-text-subdued`, etc.
- **Icons**: `text-semantic-icon-default`, `text-semantic-icon-subdued`, etc.
- **Strokes**: `border-semantic-stroke-default`, `border-semantic-stroke-strong`, etc.

### Components

All Alize components are available:

```tsx
import {
  Button,
  Input,
  Card,
  Checkbox,
  Select,
  Dialog,
  // ... and many more
} from "alize-ui";
```

### Utilities

The plugin adds custom utilities:

- `.focus-ring` - Focus ring utility
- `.focus-ring-destructive` - Destructive focus ring
- `.transition-all`, `.transition-colors`, `.transition-opacity` - Transition utilities

### Variants

Custom variants are available:

- `state-checked:` - For checked states
- `state-disabled:` - For disabled states
- `state-invalid:` - For invalid states

## Troubleshooting

### Styles Not Appearing

1. **Check CSS import**: Ensure `alize/dist/alize.css` is imported
2. **Check Tailwind config**: Verify preset and plugin are added
3. **Check content paths**: Ensure your component paths are in `content` array
4. **Restart dev server**: Sometimes needed after config changes

### Tokens Not Available

1. **Import CSS**: The CSS file defines all tokens via `@theme`
2. **Check preset**: The preset exposes tokens in `theme.extend.colors`
3. **Verify Tailwind v4**: Alize requires Tailwind CSS v4

### Build Errors

1. **Check peer dependencies**: Ensure React 18+ and Tailwind v4 are installed
2. **Check TypeScript**: Ensure types are properly configured
3. **Check exports**: Verify package.json exports are correct

### Material Symbols Not Loading

1. **Add MaterialSymbolsProvider**: Required in your root layout
2. **Check network**: Fonts load from Google Fonts
3. **Check CSS import**: Material Symbols styles are in the CSS file

## Advanced Configuration

### Extending the Theme

You can extend Alize's theme in your Tailwind config:

```ts
export default {
  presets: [alizePreset],
  plugins: [alizePlugin],
  theme: {
    extend: {
      // Your custom extensions
      colors: {
        'custom-color': '#ff0000',
      },
    },
  },
};
```

### Using Only CSS (No Preset)

If you prefer to use only the CSS file:

```tsx
// Just import CSS
import "alize/dist/alize.css";
```

Then use arbitrary values:

```tsx
<div className="bg-[var(--semantic-surface-primary)]">
  Content
</div>
```

However, using the preset is recommended for better DX and autocomplete.

## Examples

See `examples/next-boilerplate` for a complete working example.

## Support

For issues or questions, please open an issue on the Alize repository.

