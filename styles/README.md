# Foundation Layer - Design System Styles

This directory contains the canonical source of truth for all semantic Tailwind classes used across the Alize design system.

## Structure

```
styles/
├── index.ts          # Main export file
├── surfaces.ts       # Background colors
├── text.ts           # Text colors
├── icon.ts           # Icon colors (Material Symbols)
├── stroke.ts         # Border colors
├── states.ts         # Interaction states
├── size.ts           # Size presets
├── radius.ts         # Border radius presets
└── animation.ts      # Animation presets
```

## Usage

Import the style presets you need:

```tsx
import { surface, text, icon, states, size, radius } from '@/styles'

// Use in components
className={cn(
  surface.primary,
  text.reversedPersistent,
  icon.interactionBright,
  states.hoverOverlay1,
  size.md,
  radius.md
)}
```

## Modules

### `surfaces.ts`
Background color semantic classes:
- `primary`, `secondary`, `default`, `subdued`, `strong`
- `overlay1`, `overlay2`, `overlay3`, `whisper`
- `interactionStrong`, `interactionSubdued`, `interactionBright`
- `destructive`, `success`, `warning` (with bright/subdued variants)

### `text.ts`
Text color semantic classes:
- `default`, `subdued`
- `interactionBright`, `interactionDefault`
- `reversed`, `reversedPersistent`
- `destructive`, `success`, `warning`, `info`

### `icon.ts`
Icon color semantic classes using Material Symbols selectors:
- `default`, `subdued`
- `interactionBright`, `interactionDefault`
- `reversed`, `reversedPersistent`
- `destructive`, `success`, `warning`
- SVG variants: `svgDefault`, `svgSubdued`, etc.

### `stroke.ts`
Border color semantic classes:
- `default`, `subdued`, `strong`
- `interaction`, `focus`
- `destructive`, `success`, `warning` (with bright/strong variants)

### `states.ts`
Interaction state classes:
- Hover: `hoverOverlay1`, `hoverPrimary`, `hoverDestructive`, etc.
- Focus: `focusRing`, `focusRingDestructive`
- Disabled: `disabled`, `disabledCursor`
- Pressed: `pressed`, `pressedOpacity`
- Invalid: `invalidRing`, `invalidBorder`
- Checked: `checked`, `unchecked`

### `size.ts`
Standardized size presets with height, padding, font-size, and icon-size:
- `xs`, `sm`, `md`, `lg`
- `iconXs`, `iconSm`, `iconMd`, `iconLg`

### `radius.ts`
Border radius presets:
- `sm`, `md`, `lg`, `xl`
- `full`, `3xl`, `none`

### `animation.ts`
Animation presets:
- Fade: `fade`, `fadeIn`, `fadeOut`
- Scale: `scale`, `scaleIn`, `scaleOut`, `scalePress`
- Slide: `slideUp`, `slideDown`, `slideLeft`, `slideRight`
- Pulse: `pulse`
- Transitions: `transitionAll`, `transitionColors`, etc.

## Principles

1. **Semantic First**: All classes use semantic tokens (`semantic-*`)
2. **Single Source of Truth**: This directory is the only place where semantic classes are defined
3. **Type Safety**: All exports are `as const` for TypeScript inference
4. **Composability**: Classes can be combined using `cn()` utility
5. **Consistency**: Standardized naming and structure across all modules

## Migration Notes

- Legacy shadcn classes (like `bg-destructive`) are marked with `Legacy` suffix
- TODO comments indicate areas that need migration to semantic tokens
- All existing semantic tokens from `theme.css` are mapped here

## Next Steps

After verifying this foundation layer, components can be migrated to use these presets instead of inline Tailwind classes.

