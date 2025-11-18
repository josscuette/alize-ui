# Alize - Component Library

A comprehensive React component library based on [shadcn/ui](https://ui.shadcn.com) with custom design tokens and Material Symbols icons.

## Features

- 🎨 **Custom Design Tokens** - Semantic color system with light/dark mode support
- 🎯 **Material Symbols** - Consistent icon system using Material Symbols font
- 📚 **Comprehensive Documentation** - Interactive component showcase with usage examples
- 🎭 **Fully Customizable** - Built on Radix UI primitives for maximum flexibility
- ⚡ **TypeScript** - Full type safety out of the box
- 🎨 **Tailwind CSS v4** - Modern styling with CSS variables

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

## Documentation

- [Installation Guide](./INSTALLATION.md) - How to install and use Alize as a dependency
- [Usage Examples](./USAGE_EXAMPLE.md) - Practical code examples
- [Component Documentation](./components/DOCUMENTATION.md) - Documentation principles and guidelines
- [Conventions](./CONVENTIONS.md) - Code conventions and best practices
- [Setup Guide](./SETUP.md) - Development setup instructions

## Components

All components are located in `components/ui/` and follow the shadcn/ui pattern. Each component includes:

- Full TypeScript support
- Custom design tokens integration
- Material Symbols icon support
- Comprehensive documentation in the showcase

## License

Private project - All rights reserved
