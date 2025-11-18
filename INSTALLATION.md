# Installation Guide

This guide explains how to install and use Alize as a dependency in your project via GitHub.

## Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- React 18+ or 19+
- Tailwind CSS v4
- TypeScript (recommended)

## Installation

### Step 1: Install via GitHub

```bash
npm install git+https://github.com/josscuette/alize-ui.git
# or
yarn add git+https://github.com/josscuette/alize-ui.git
# or
pnpm add git+https://github.com/josscuette/alize-ui.git
```

Or install from a specific branch/tag:

```bash
npm install git+https://github.com/josscuette/alize-ui.git#main
npm install git+https://github.com/josscuette/alize-ui.git#v0.1.1
```

### Updating to Latest Version

When installing from GitHub, npm caches the dependency. To get the latest changes:

**Option 1: Force reinstall** (recommended)
```bash
npm install git+https://github.com/josscuette/alize-ui.git --force
# or
rm -rf node_modules/alize package-lock.json
npm install
```

**Option 2: Clear npm cache**
```bash
npm cache clean --force
npm install git+https://github.com/josscuette/alize-ui.git
```

**Option 3: Use specific commit hash**
```bash
npm install git+https://github.com/josscuette/alize-ui.git#<commit-hash>
```

### Step 2: Install Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom tailwindcss
```

### Step 3: Configure TypeScript Path Aliases

**IMPORTANT**: Alize components use path aliases (`@/`) internally. You need to configure your `tsconfig.json` to resolve these aliases so TypeScript can properly type-check Alize components:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./node_modules/alize/*"]
    }
  }
}
```

**For Next.js projects**, you can extend your existing paths:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "alize/*": ["./node_modules/alize/*"]
    }
  }
}
```

**Note**: Your bundler (Next.js, Vite, etc.) should automatically resolve these imports at build time. If you encounter runtime errors, ensure your bundler configuration supports TypeScript path aliases.

### Step 4: Import CSS Files

Import the required CSS files in your main CSS file or `_app.tsx` / `layout.tsx`:

```css
/* In your globals.css or main CSS file */
@import "alize/app/globals.css";
@import "alize/app/theme.css";
```

Or in your Next.js app:

```tsx
// app/layout.tsx or pages/_app.tsx
import "alize/app/globals.css";
import "alize/app/theme.css";
```

**⚠️ Important: Material Symbols Font**

Some bundlers may not process the Google Fonts `@import` correctly. Add `MaterialSymbolsProvider` to your root layout:

```tsx
// app/layout.tsx (Next.js App Router)
import { MaterialSymbolsProvider } from "alize"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MaterialSymbolsProvider />
        {children}
      </body>
    </html>
  );
}
```

This ensures Material Symbols font loads correctly even if CSS `@import` fails.

### Step 5: Configure Tailwind CSS

**For Tailwind CSS v4**, the CSS variables are already included when you import `alize/app/globals.css` and `alize/app/theme.css`. However, you need to ensure Tailwind scans Alize components for classes:

```js
// tailwind.config.js (if using Tailwind v3)
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/alize/**/*.{js,ts,jsx,tsx}", // Include Alize components
  ],
  // ... rest of your config
}
```

**For Tailwind CSS v4**, add this to your main CSS file:

```css
@import "tailwindcss";
@source "../node_modules/alize/**/*.{js,ts,jsx,tsx}";
```

Or configure it in your `tailwind.config.ts`:

```ts
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/alize/**/*.{js,ts,jsx,tsx}",
  ],
}
```

## Usage

### Import Components

You can import components in two ways:

**Option 1: Import from the main entry point** (recommended)

```tsx
import { Button, Input, Card } from "alize";
```

**Option 2: Import individual components**

```tsx
import { Button } from "alize/components/ui/button";
import { Input } from "alize/components/ui/input";
```

### Import Utilities

```tsx
import { cn } from "alize/lib/utils";
```

### Import Material Symbols Component

```tsx
import { MaterialSymbol } from "alize/components/material-symbol";
```

### Example Usage

```tsx
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from "alize";
import { MaterialSymbol } from "alize/components/material-symbol";

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter your name" />
        <Button>
          <MaterialSymbol name="check" size={16} weight={300} />
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
```

## Troubleshooting

### TypeScript Errors with Path Aliases

If you encounter TypeScript errors related to `@/` imports, make sure:

1. Your `tsconfig.json` includes the path mapping (see Step 3)
2. Your IDE/editor has reloaded the TypeScript server
3. You're using TypeScript 5+ with `moduleResolution: "bundler"` or `"node"`

### CSS Not Loading

If styles aren't applying:

1. Verify CSS files are imported in your entry point
2. Check that Tailwind CSS is properly configured
3. Ensure Material Symbols font is loaded (included in `globals.css`)

### Module Resolution Issues

If you get module resolution errors:

1. Clear your `node_modules` and reinstall: `rm -rf node_modules && npm install`
2. Check that your bundler (Next.js, Vite, etc.) supports TypeScript path aliases
3. For Next.js, ensure `next.config.js` doesn't override module resolution

## Next Steps

- Check out the [Component Documentation](./components/DOCUMENTATION.md) for detailed usage examples
- Review [Conventions](./CONVENTIONS.md) to understand the design system
- Explore the component showcase at `/components` when running the dev server

## Support

For issues or questions, please open an issue on GitHub.

