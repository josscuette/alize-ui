# Alize - Component Library

A comprehensive React component library based on [shadcn/ui](https://ui.shadcn.com) with custom design tokens and Material Symbols icons.

## Features

- 🎨 **Custom Design Tokens** - Semantic color system with light/dark mode support
- 🎯 **Material Symbols** - Consistent icon system using Material Symbols font
- 📚 **Comprehensive Documentation** - Interactive component showcase with usage examples
- 🎭 **Fully Customizable** - Built on Radix UI primitives for maximum flexibility
- ⚡ **TypeScript** - Full type safety out of the box
- 🎨 **Tailwind CSS v4** - Modern styling with CSS variables
- 🔒 **Security & Validation** - Zod validation schemas and sanitization utilities
- 🛡️ **Error Handling** - Comprehensive error handling patterns and utilities
- ♿ **Accessibility** - Full WCAG 2.1 compliance with keyboard navigation support
- ⚡ **Performance** - Optimized with React.memo and code splitting patterns

## Getting Started

### As a Dependency (GitHub)

To use Alize in your project, install it via GitHub:

```bash
npm install git+https://github.com/josscuette/alize-ui.git
```

**Quick Start**: See [QUICKSTART.md](./QUICKSTART.md) for a 5-minute setup guide.

**Full Guide**: See [INSTALLATION.md](./INSTALLATION.md) for detailed setup instructions and troubleshooting.

### Development (Local)

To run the component showcase locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the component showcase.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
alize/
├── app/
│   ├── components/     # Component showcase page
│   ├── globals.css    # Global styles and theme variables
│   └── theme.css      # Design tokens
├── components/
│   ├── ui/            # UI components (shadcn/ui based)
│   ├── component-showcase.tsx  # Component documentation
│   └── material-symbol.tsx     # Material Symbols wrapper
└── lib/
    ├── components-config.ts    # Component registry
    └── utils.ts                # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run check` - Run all checks (lint + format + types)
- `npm test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI interface
- `npm run test:coverage` - Run tests with coverage report
- `npm run security:audit` - Run security audit (npm audit)

## Documentation

### Getting Started
- [Installation Guide](./INSTALLATION.md) - How to install and use Alize as a dependency
- [Quick Start Guide](./QUICKSTART.md) - 5-minute setup guide
- [Usage Examples](./USAGE_EXAMPLE.md) - Practical code examples
- [Setup Guide](./SETUP.md) - Development setup instructions

### Guides & Best Practices
- [Security Guide](./docs/SECURITY.md) - Security best practices and sanitization
- [Validation Guide](./docs/VALIDATION.md) - Form validation with Zod schemas
- [Error Handling Guide](./docs/ERROR_HANDLING.md) - Error handling patterns and utilities
- [Keyboard Navigation](./docs/KEYBOARD_NAVIGATION.md) - Accessibility and keyboard navigation
- [Performance Guide](./PERFORMANCE.md) - Performance optimization patterns

### Reference
- [Component Documentation](./components/DOCUMENTATION.md) - Documentation principles and guidelines
- [Conventions](./CONVENTIONS.md) - Code conventions and best practices

## Components

All components are located in `src/components/ui/` and follow the shadcn/ui pattern. Each component includes:

- Full TypeScript support
- Custom design tokens integration
- Material Symbols icon support
- Comprehensive documentation in the showcase

## Additional Utilities

Alize provides additional utilities for common development needs:

- **Validation**: Zod schemas for email, password, URLs, files, and common form patterns (`lib/validation.ts`)
- **Sanitization**: HTML, URL, text, and file name sanitization utilities (`lib/sanitization.ts`)
- **Error Handling**: ErrorLogger, async error handling patterns, and custom error classes (`lib/error-handling.ts`)

See the [documentation guides](#documentation) for detailed usage examples.

## License

Private project - All rights reserved
