/**
 * Foundation documentation data
 * Contains all foundation topics with their tokens and examples
 */

import type { ColorFoundation, ColorToken, TokenGroup, AnyFoundation } from '../types';

// ============================================================================
// COLOR FOUNDATION
// ============================================================================

const surfaceTokens: TokenGroup<ColorToken> = {
  name: 'Surfaces',
  description: 'Background colors for containers, cards, and UI elements.',
  tokens: [
    {
      name: 'surface.primary',
      cssVariable: 'var(--semantic-surface-primary)',
      colorCategory: 'surface',
      subcategory: 'primary',
      description: 'Primary surface color, used for main UI backgrounds and primary buttons',
      themeAware: true,
    },
    {
      name: 'surface.secondary',
      cssVariable: 'var(--semantic-surface-secondary)',
      colorCategory: 'surface',
      subcategory: 'secondary',
      description: 'Secondary surface with subtle transparency',
      themeAware: true,
    },
    {
      name: 'surface.default',
      cssVariable: 'var(--semantic-surface-default)',
      colorCategory: 'surface',
      subcategory: 'default',
      description: 'Default background for the application',
      themeAware: true,
    },
    {
      name: 'surface.subdued',
      cssVariable: 'var(--semantic-surface-subdued)',
      colorCategory: 'surface',
      subcategory: 'subdued',
      description: 'Subtle background for muted areas',
      themeAware: true,
    },
    {
      name: 'surface.strong',
      cssVariable: 'var(--semantic-surface-strong)',
      colorCategory: 'surface',
      subcategory: 'strong',
      description: 'High contrast surface color',
      themeAware: true,
    },
    {
      name: 'surface.contrast',
      cssVariable: 'var(--semantic-surface-contrast)',
      colorCategory: 'surface',
      subcategory: 'contrast',
      description: 'Maximum contrast surface',
      themeAware: true,
    },
  ],
};

const overlayTokens: TokenGroup<ColorToken> = {
  name: 'Overlays',
  description: 'Semi-transparent surfaces for layering and hover states.',
  tokens: [
    {
      name: 'surface.overlay1',
      cssVariable: 'var(--semantic-surface-overlays-level1)',
      colorCategory: 'surface',
      subcategory: 'overlays',
      description: 'Light overlay, used for subtle hover states',
      themeAware: true,
    },
    {
      name: 'surface.overlay2',
      cssVariable: 'var(--semantic-surface-overlays-level2)',
      colorCategory: 'surface',
      subcategory: 'overlays',
      description: 'Medium overlay, used for selected/active states',
      themeAware: true,
    },
    {
      name: 'surface.overlay3',
      cssVariable: 'var(--semantic-surface-overlays-level3)',
      colorCategory: 'surface',
      subcategory: 'overlays',
      description: 'Strong overlay, used for input backgrounds',
      themeAware: true,
    },
    {
      name: 'surface.whisper',
      cssVariable: 'var(--semantic-surface-whisper)',
      colorCategory: 'surface',
      subcategory: 'overlays',
      description: 'Very subtle overlay for backgrounds',
      themeAware: true,
    },
  ],
};

const interactionSurfaceTokens: TokenGroup<ColorToken> = {
  name: 'Interaction Surfaces',
  description: 'Surface colors for interactive elements like buttons and links.',
  tokens: [
    {
      name: 'surface.interactionStrong',
      cssVariable: 'var(--semantic-surface-interaction-strong)',
      colorCategory: 'surface',
      subcategory: 'interaction',
      description: 'Primary action color, used for primary buttons and focus rings',
      themeAware: true,
    },
    {
      name: 'surface.interactionBright',
      cssVariable: 'var(--semantic-surface-interaction-bright)',
      colorCategory: 'surface',
      subcategory: 'interaction',
      description: 'Bright accent for highlights',
      themeAware: true,
    },
    {
      name: 'surface.interactionSubdued',
      cssVariable: 'var(--semantic-surface-interaction-subdued)',
      colorCategory: 'surface',
      subcategory: 'interaction',
      description: 'Subtle interaction background',
      themeAware: true,
    },
  ],
};

const textTokens: TokenGroup<ColorToken> = {
  name: 'Text Colors',
  description: 'Colors for typography and text content.',
  tokens: [
    {
      name: 'text.default',
      cssVariable: 'var(--semantic-text-default)',
      colorCategory: 'text',
      subcategory: 'default',
      description: 'Primary text color',
      themeAware: true,
    },
    {
      name: 'text.subdued',
      cssVariable: 'var(--semantic-text-subdued)',
      colorCategory: 'text',
      subcategory: 'subdued',
      description: 'Secondary/muted text',
      themeAware: true,
    },
    {
      name: 'text.interactionDefault',
      cssVariable: 'var(--semantic-text-interaction-default)',
      colorCategory: 'text',
      subcategory: 'interaction',
      description: 'Link and interactive text color',
      themeAware: true,
    },
    {
      name: 'text.interactionBright',
      cssVariable: 'var(--semantic-text-interaction-bright)',
      colorCategory: 'text',
      subcategory: 'interaction',
      description: 'Bright accent text',
      themeAware: true,
    },
    {
      name: 'text.reversed',
      cssVariable: 'var(--semantic-text-reversed)',
      colorCategory: 'text',
      subcategory: 'reversed',
      description: 'Text on dark backgrounds (theme-aware)',
      themeAware: true,
    },
    {
      name: 'text.reversedPersistent',
      cssVariable: 'var(--semantic-text-reversedpersistent)',
      colorCategory: 'text',
      subcategory: 'reversed',
      description: 'Always white text, regardless of theme',
      themeAware: false,
    },
  ],
};

const strokeTokens: TokenGroup<ColorToken> = {
  name: 'Stroke Colors',
  description: 'Border and divider colors.',
  tokens: [
    {
      name: 'stroke.default',
      cssVariable: 'var(--semantic-stroke-default)',
      colorCategory: 'stroke',
      subcategory: 'default',
      description: 'Default border color',
      themeAware: true,
    },
    {
      name: 'stroke.subdued',
      cssVariable: 'var(--semantic-stroke-subdued)',
      colorCategory: 'stroke',
      subcategory: 'subdued',
      description: 'Subtle dividers and separators',
      themeAware: true,
    },
    {
      name: 'stroke.strong',
      cssVariable: 'var(--semantic-stroke-strong)',
      colorCategory: 'stroke',
      subcategory: 'strong',
      description: 'High contrast borders',
      themeAware: true,
    },
    {
      name: 'stroke.interaction',
      cssVariable: 'var(--semantic-stroke-interaction-default)',
      colorCategory: 'stroke',
      subcategory: 'interaction',
      description: 'Interactive element borders, focus states',
      themeAware: true,
    },
  ],
};

const iconTokens: TokenGroup<ColorToken> = {
  name: 'Icon Colors',
  description: 'Colors for icons and symbols.',
  tokens: [
    {
      name: 'icon.default',
      cssVariable: 'var(--semantic-icon-default)',
      colorCategory: 'icon',
      subcategory: 'default',
      description: 'Default icon color',
      themeAware: true,
    },
    {
      name: 'icon.subdued',
      cssVariable: 'var(--semantic-icon-subdued)',
      colorCategory: 'icon',
      subcategory: 'subdued',
      description: 'Muted/secondary icons',
      themeAware: true,
    },
    {
      name: 'icon.interactionDefault',
      cssVariable: 'var(--semantic-icon-interaction-default)',
      colorCategory: 'icon',
      subcategory: 'interaction',
      description: 'Interactive icon color',
      themeAware: true,
    },
    {
      name: 'icon.interactionBright',
      cssVariable: 'var(--semantic-icon-interaction-bright)',
      colorCategory: 'icon',
      subcategory: 'interaction',
      description: 'Bright accent icons',
      themeAware: true,
    },
    {
      name: 'icon.reversed',
      cssVariable: 'var(--semantic-icon-reversed)',
      colorCategory: 'icon',
      subcategory: 'reversed',
      description: 'Icons on dark backgrounds',
      themeAware: true,
    },
    {
      name: 'icon.reversedPersistent',
      cssVariable: 'var(--semantic-icon-reversedpersistent)',
      colorCategory: 'icon',
      subcategory: 'reversed',
      description: 'Always white icons',
      themeAware: false,
    },
  ],
};

const ragTokens: TokenGroup<ColorToken> = {
  name: 'RAG Colors (Status)',
  description: 'Red/Amber/Green colors for status indicators, alerts, and feedback.',
  tokens: [
    // Danger/Error
    {
      name: 'rag.dangerStrong',
      cssVariable: 'var(--semantic-surface-rag-danger-strong)',
      colorCategory: 'rag',
      subcategory: 'danger',
      description: 'Error/danger strong background',
      themeAware: true,
    },
    {
      name: 'rag.dangerBright',
      cssVariable: 'var(--semantic-surface-rag-danger-bright)',
      colorCategory: 'rag',
      subcategory: 'danger',
      description: 'Error/danger bright variant',
      themeAware: true,
    },
    {
      name: 'rag.dangerSubdued',
      cssVariable: 'var(--semantic-surface-rag-danger-subdued)',
      colorCategory: 'rag',
      subcategory: 'danger',
      description: 'Error/danger subtle background',
      themeAware: true,
    },
    {
      name: 'rag.dangerText',
      cssVariable: 'var(--semantic-text-rag-danger-default)',
      colorCategory: 'rag',
      subcategory: 'danger',
      description: 'Error/danger text color',
      themeAware: true,
    },
    // Success
    {
      name: 'rag.successStrong',
      cssVariable: 'var(--semantic-surface-rag-success-strong)',
      colorCategory: 'rag',
      subcategory: 'success',
      description: 'Success strong background',
      themeAware: true,
    },
    {
      name: 'rag.successBright',
      cssVariable: 'var(--semantic-surface-rag-success-bright)',
      colorCategory: 'rag',
      subcategory: 'success',
      description: 'Success bright variant',
      themeAware: true,
    },
    {
      name: 'rag.successSubdued',
      cssVariable: 'var(--semantic-surface-rag-success-subdued)',
      colorCategory: 'rag',
      subcategory: 'success',
      description: 'Success subtle background',
      themeAware: true,
    },
    {
      name: 'rag.successText',
      cssVariable: 'var(--semantic-text-rag-success-default)',
      colorCategory: 'rag',
      subcategory: 'success',
      description: 'Success text color',
      themeAware: true,
    },
    // Warning
    {
      name: 'rag.warningStrong',
      cssVariable: 'var(--semantic-surface-rag-warning-strong)',
      colorCategory: 'rag',
      subcategory: 'warning',
      description: 'Warning strong background',
      themeAware: true,
    },
    {
      name: 'rag.warningBright',
      cssVariable: 'var(--semantic-surface-rag-warning-bright)',
      colorCategory: 'rag',
      subcategory: 'warning',
      description: 'Warning bright variant',
      themeAware: true,
    },
    {
      name: 'rag.warningSubdued',
      cssVariable: 'var(--semantic-surface-rag-warning-subdued)',
      colorCategory: 'rag',
      subcategory: 'warning',
      description: 'Warning subtle background',
      themeAware: true,
    },
    {
      name: 'rag.warningText',
      cssVariable: 'var(--semantic-text-rag-warning-default)',
      colorCategory: 'rag',
      subcategory: 'warning',
      description: 'Warning text color',
      themeAware: true,
    },
  ],
};

const tonalTokens: TokenGroup<ColorToken> = {
  name: 'Tonal Palette',
  description: 'Extended color palette for data visualization, tags, and decorative elements.',
  tokens: [
    // Amber
    {
      name: 'tonal.amber',
      cssVariable: 'var(--semantic-tonal-amber-default)',
      colorCategory: 'tonal',
      subcategory: 'amber',
      description: 'Amber default',
      themeAware: true,
    },
    {
      name: 'tonal.amberStrong',
      cssVariable: 'var(--semantic-tonal-amber-strong)',
      colorCategory: 'tonal',
      subcategory: 'amber',
      description: 'Amber strong',
      themeAware: true,
    },
    {
      name: 'tonal.amberSubdued',
      cssVariable: 'var(--semantic-tonal-amber-subdued)',
      colorCategory: 'tonal',
      subcategory: 'amber',
      description: 'Amber subdued',
      themeAware: true,
    },
    // Royal (Blue)
    {
      name: 'tonal.royal',
      cssVariable: 'var(--semantic-tonal-royal-default)',
      colorCategory: 'tonal',
      subcategory: 'royal',
      description: 'Royal blue default',
      themeAware: true,
    },
    {
      name: 'tonal.royalStrong',
      cssVariable: 'var(--semantic-tonal-royal-strong)',
      colorCategory: 'tonal',
      subcategory: 'royal',
      description: 'Royal blue strong',
      themeAware: true,
    },
    {
      name: 'tonal.royalSubdued',
      cssVariable: 'var(--semantic-tonal-royal-subdued)',
      colorCategory: 'tonal',
      subcategory: 'royal',
      description: 'Royal blue subdued',
      themeAware: true,
    },
    // Violet
    {
      name: 'tonal.violet',
      cssVariable: 'var(--semantic-tonal-violet-default)',
      colorCategory: 'tonal',
      subcategory: 'violet',
      description: 'Violet default',
      themeAware: true,
    },
    {
      name: 'tonal.violetStrong',
      cssVariable: 'var(--semantic-tonal-violet-strong)',
      colorCategory: 'tonal',
      subcategory: 'violet',
      description: 'Violet strong',
      themeAware: true,
    },
    {
      name: 'tonal.violetSubdued',
      cssVariable: 'var(--semantic-tonal-violet-subdued)',
      colorCategory: 'tonal',
      subcategory: 'violet',
      description: 'Violet subdued',
      themeAware: true,
    },
    // Magenta
    {
      name: 'tonal.magenta',
      cssVariable: 'var(--semantic-tonal-magenta-default)',
      colorCategory: 'tonal',
      subcategory: 'magenta',
      description: 'Magenta default',
      themeAware: true,
    },
    {
      name: 'tonal.magentaStrong',
      cssVariable: 'var(--semantic-tonal-magenta-strong)',
      colorCategory: 'tonal',
      subcategory: 'magenta',
      description: 'Magenta strong',
      themeAware: true,
    },
    {
      name: 'tonal.magentaSubdued',
      cssVariable: 'var(--semantic-tonal-magenta-subdued)',
      colorCategory: 'tonal',
      subcategory: 'magenta',
      description: 'Magenta subdued',
      themeAware: true,
    },
    // Forest (Green)
    {
      name: 'tonal.forest',
      cssVariable: 'var(--semantic-tonal-forest-default)',
      colorCategory: 'tonal',
      subcategory: 'forest',
      description: 'Forest green default',
      themeAware: true,
    },
    {
      name: 'tonal.forestStrong',
      cssVariable: 'var(--semantic-tonal-forest-strong)',
      colorCategory: 'tonal',
      subcategory: 'forest',
      description: 'Forest green strong',
      themeAware: true,
    },
    {
      name: 'tonal.forestSubdued',
      cssVariable: 'var(--semantic-tonal-forest-subdued)',
      colorCategory: 'tonal',
      subcategory: 'forest',
      description: 'Forest green subdued',
      themeAware: true,
    },
    // Science (Blue)
    {
      name: 'tonal.science',
      cssVariable: 'var(--semantic-tonal-science-default)',
      colorCategory: 'tonal',
      subcategory: 'science',
      description: 'Science blue default',
      themeAware: true,
    },
    {
      name: 'tonal.scienceStrong',
      cssVariable: 'var(--semantic-tonal-science-strong)',
      colorCategory: 'tonal',
      subcategory: 'science',
      description: 'Science blue strong',
      themeAware: true,
    },
    {
      name: 'tonal.scienceSubdued',
      cssVariable: 'var(--semantic-tonal-science-subdued)',
      colorCategory: 'tonal',
      subcategory: 'science',
      description: 'Science blue subdued',
      themeAware: true,
    },
  ],
};

const brandTokens: TokenGroup<ColorToken> = {
  name: 'Brand Colors',
  description: 'Brand identity colors for logos and brand elements.',
  tokens: [
    {
      name: 'brand.picto',
      cssVariable: 'var(--semantic-brand-picto)',
      colorCategory: 'brand',
      subcategory: 'brand',
      description: 'Brand pictogram/logo color (JLL Red)',
      themeAware: false,
    },
    {
      name: 'brand.text',
      cssVariable: 'var(--semantic-brand-text)',
      colorCategory: 'brand',
      subcategory: 'brand',
      description: 'Brand text color',
      themeAware: true,
    },
  ],
};

export const colorFoundation: ColorFoundation = {
  slug: 'color',
  title: 'Color',
  description: 'Semantic color tokens for surfaces, text, strokes, and icons.',
  longDescription: 'The Alize color system uses semantic tokens that automatically adapt to light and dark themes. Colors are organized by their purpose (surface, text, stroke, icon) rather than their appearance, making it easier to build consistent, accessible interfaces.',
  category: 'visual',
  icon: 'palette',
  foundationExports: ['surface', 'text', 'stroke', 'icon'],
  tokenGroups: [
    surfaceTokens,
    overlayTokens,
    interactionSurfaceTokens,
    textTokens,
    strokeTokens,
    iconTokens,
    ragTokens,
    tonalTokens,
    brandTokens,
  ],
  examples: [
    {
      title: 'Using Foundation Layer',
      description: 'Import and use semantic classes from the foundation layer',
      code: `import { surface, text, stroke } from '@/foundation';
import { cn } from '@/lib/utils';

// Card with semantic colors
<div className={cn(
  surface.default,
  stroke.default,
  "border rounded-lg p-4"
)}>
  <h2 className={text.default}>Title</h2>
  <p className={text.subdued}>Description</p>
</div>`,
    },
    {
      title: 'Using CSS Variables',
      description: 'Apply colors directly via CSS variables in Tailwind',
      code: `// Using CSS variables with Tailwind's arbitrary value syntax
<div className="bg-[var(--semantic-surface-default)]">
  <p className="text-[var(--semantic-text-subdued)]">
    Subdued text
  </p>
</div>`,
    },
    {
      title: 'Status Colors (RAG)',
      description: 'Use RAG colors for alerts and feedback',
      code: `import { surface, text } from '@/foundation';

// Success message
<div className={cn(surface.successSubdued, "p-4 rounded-lg")}>
  <p className={text.success}>Operation successful!</p>
</div>

// Error message  
<div className={cn(surface.destructiveSubdued, "p-4 rounded-lg")}>
  <p className={text.destructive}>Something went wrong</p>
</div>`,
    },
  ],
  guidelines: [
    { type: 'do', text: 'Use semantic tokens (surface.primary) instead of raw color values' },
    { type: 'do', text: 'Let the theme system handle light/dark mode automatically' },
    { type: 'do', text: 'Use RAG colors consistently for status feedback' },
    { type: 'do', text: 'Test your UI in both light and dark themes' },
    { type: 'dont', text: 'Hardcode hex values like #ffffff or #000000' },
    { type: 'dont', text: 'Mix semantic tokens with raw Tailwind colors' },
    { type: 'dont', text: 'Use tonal colors for status indicators (use RAG instead)' },
    { type: 'dont', text: 'Override theme colors with !important' },
  ],
};

// ============================================================================
// ALL FOUNDATIONS
// ============================================================================

/**
 * All foundation topics
 * Add new foundations here as they are created
 */
export const foundations: AnyFoundation[] = [
  colorFoundation,
  // typographyFoundation, // Coming soon
  // spacingFoundation,    // Coming soon
  // radiusFoundation,     // Coming soon
  // shadowFoundation,     // Coming soon
  // animationFoundation,  // Coming soon
  // statesFoundation,     // Coming soon
];

/**
 * Get a foundation by slug
 */
export function getFoundationBySlug(slug: string): AnyFoundation | undefined {
  return foundations.find(f => f.slug === slug);
}

/**
 * Get foundations by category
 */
export function getFoundationsByCategory(category: string): AnyFoundation[] {
  return foundations.filter(f => f.category === category);
}

