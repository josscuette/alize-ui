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
npm install git+https://github.com/Josselin-Cuette_JLLT/alize-ui.git
# or
yarn add git+https://github.com/Josselin-Cuette_JLLT/alize-ui.git
# or
pnpm add git+https://github.com/Josselin-Cuette_JLLT/alize-ui.git
```

Or install from a specific branch/tag:

```bash
npm install git+https://github.com/Josselin-Cuette_JLLT/alize-ui.git#main
npm install git+https://github.com/Josselin-Cuette_JLLT/alize-ui.git#v0.1.1
```

### Updating to Latest Version

When installing from GitHub, npm caches the dependency. To get the latest changes:

**Option 1: Force reinstall** (recommended)
```bash
npm install git+https://github.com/Josselin-Cuette_JLLT/alize-ui.git --force
# or
rm -rf node_modules/alize package-lock.json
npm install
```

**Option 2: Clear npm cache**
```bash
npm cache clean --force
npm install git+https://github.com/Josselin-Cuette_JLLT/alize-ui.git
```

**Option 3: Use specific commit hash**
```bash
npm install git+https://github.com/Josselin-Cuette_JLLT/alize-ui.git#<commit-hash>
```

### Step 2: Install Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom tailwindcss react-hook-form
```

**Note**: `react-hook-form` is required if you plan to use the `Form` component from Alize.

**Optional**: If you plan to use validation utilities, you may also need:

```bash
npm install zod @hookform/resolvers
```

Note: These are already included as dependencies in Alize, but you may need them in your project if you're using validation schemas.

### Step 3: Configure TypeScript (Optional)

TypeScript configuration is optional but recommended. Alize components are fully typed and work out of the box. If you want to extend TypeScript paths for your own convenience, you can add:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**Note**: This is optional. Alize components work without any TypeScript path configuration.

### Step 4: Configure Tailwind CSS

**Use Alize Tailwind Preset and Plugin** (zero configuration required)

Alize provides a Tailwind preset and plugin that automatically configure everything you need. This ensures that only one instance of Tailwind runs in your application and prevents conflicts.

**For Tailwind CSS v4**, configure your `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";
import alizePreset from "alize/preset";
import alizePlugin from "alize/plugin";

export default {
  presets: [alizePreset],
  plugins: [alizePlugin],
  content: [
    // Your app content
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // The preset already includes Alize components, so you don't need to add them here
  ],
} satisfies Config;
```

**For Tailwind CSS v3**, use the preset and plugin similarly:

```js
import alizePreset from "alize/preset";
import alizePlugin from "alize/plugin";

export default {
  presets: [alizePreset],
  plugins: [alizePlugin],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
```

### Step 5: Import CSS

Import the Alize CSS file in your main layout or CSS file:

```tsx
// app/layout.tsx (Next.js App Router)
import "alize-ui/dist/alize.css";
import { MaterialSymbolsProvider } from "alize-ui";

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

Or in your main CSS file:

```css
/* In your globals.css or main CSS file */
@import "alize-ui/dist/alize.css";
```

**Important**: The CSS file includes all design tokens, theme configuration, and base styles. The preset handles content scanning, and the plugin adds custom utilities and variants.

## Usage

### Import Components

You can import components in two ways:

**Option 1: Import from the main entry point** (recommended)

```tsx
import { Button, Input, Card } from "alize-ui";
```

**Option 2: Import individual components** (not recommended, use main entry point)

All components are available from the main entry point. Individual imports are not necessary.

### Example Usage

```tsx
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from "alize-ui";
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

## Additional Utilities

Alize provides additional utilities for security, validation, and error handling:

### Validation Schemas

Use Zod validation schemas for form validation:

```tsx
import { emailSchema, passwordSchema } from "alize/lib/validation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

const form = useForm({
  resolver: zodResolver(formSchema),
});
```

See [VALIDATION.md](./docs/VALIDATION.md) for complete validation guide.

### Sanitization Utilities

Sanitize user input to prevent XSS attacks:

```tsx
import { sanitizeHtml, sanitizeUrl } from "alize/lib/sanitization";

const safeHtml = sanitizeHtml(userContent);
const safeUrl = sanitizeUrl(userUrl);
```

See [SECURITY.md](./docs/SECURITY.md) for security best practices.

### Error Handling

Use error handling utilities for async operations:

```tsx
import { ErrorBoundary, handleAsyncError, safeAsync } from "alize-ui";

// Wrap components with ErrorBoundary
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>

// Handle async errors
const result = await safeAsync(asyncOperation);
if (!result.success) {
  console.error(result.error);
}
```

See [ERROR_HANDLING.md](./docs/ERROR_HANDLING.md) for complete error handling guide.

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

## Quick Integration Summary

After installation, you only need **three things**:

1. **Tailwind config** with preset and plugin:
```ts
import alizePreset from "alize/preset";
import alizePlugin from "alize/plugin";
export default { presets: [alizePreset], plugins: [alizePlugin], content: [...] };
```

2. **CSS import** in your layout:
```tsx
import "alize/dist/alize.css";
```

3. **Use components**:
```tsx
import { Button, Input, Card } from "alize-ui";
```

That's it! All tokens, styles, and components work out of the box.

## Next Steps

- See [INTEGRATION.md](./INTEGRATION.md) for detailed integration guide and framework-specific examples
- Check out the [Component Documentation](./components/DOCUMENTATION.md) for detailed usage examples
- Review [Conventions](./CONVENTIONS.md) to understand the design system
- Explore the component showcase at `/components` when running the dev server
- Read the [Security Guide](./docs/SECURITY.md) for security best practices
- Learn about [Form Validation](./docs/VALIDATION.md) with Zod schemas
- Understand [Error Handling](./docs/ERROR_HANDLING.md) patterns

## Support

For issues or questions, please open an issue on GitHub.

