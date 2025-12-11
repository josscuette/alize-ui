# Quick Start Guide

Get Alize up and running in your project in 5 minutes.

## Prerequisites

- Node.js 18+
- React 18+ or 19+
- Tailwind CSS v4
- TypeScript

## Installation Steps

### 1. Install Alize

```bash
npm install git+https://github.com/Josselin-Cuette_JLLT/alize-ui.git
```

### 2. Install Peer Dependencies

```bash
npm install react react-dom tailwindcss
```

### 3. Configure TypeScript

Add to your `tsconfig.json`:

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

### 4. Import CSS

In your main CSS file or `app/layout.tsx`:

```tsx
import "alize/app/globals.css";
import "alize/app/theme.css";
```

### 5. Add Material Symbols Provider

```tsx
// app/layout.tsx
import { MaterialSymbolsProvider } from "alize";

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

### 6. Use Components

```tsx
import { Button, Input, Card } from "alize";

export function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
      <Input placeholder="Enter text..." />
    </Card>
  );
}
```

## That's it! 🎉

For detailed information, see [INSTALLATION.md](./INSTALLATION.md).

### Additional Features Available

Alize also provides:
- **Validation**: Zod schemas for form validation - see [VALIDATION.md](./docs/VALIDATION.md)
- **Security**: Sanitization utilities - see [SECURITY.md](./docs/SECURITY.md)
- **Error Handling**: Error handling patterns - see [ERROR_HANDLING.md](./docs/ERROR_HANDLING.md)

