---
description: Developer utilities for Figma runtime integration (hooks, images, caching). Not for production.
alwaysApply: false
---

# Dev Figma Tools (Runtime Integration)

- Scope: DEV-ONLY helpers to work with Figma via MCP while developing components
- Provides: `useFigmaNode`, `useFigmaPage`, `useFigmaImage`, LRU caching patterns
- Rule: `figma-runtime-integration-dev.mdc`

## Usage

1. Import only in development code paths
2. Guard imports by `process.env.NODE_ENV !== 'production'`
3. Use hooks to fetch node/page JSON and preview images

```tsx
if (process.env.NODE_ENV !== 'production') {
  const { data } = useFigmaNode('123:456')
}
```
