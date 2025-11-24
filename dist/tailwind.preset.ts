/**
 * Alize Tailwind CSS Preset
 * 
 * This preset exposes all Alize design tokens and configuration for Tailwind CSS.
 * It ensures that when consumers use Alize, they get access to all semantic tokens,
 * spacing, radii, and other design system values.
 * 
 * @example
 * ```ts
 * // tailwind.config.ts
 * import type { Config } from "tailwindcss";
 * import alizePreset from "alize/preset";
 * 
 * export default {
 *   presets: [alizePreset],
 *   content: ["./app/**/*.{ts,tsx}"],
 * } satisfies Config;
 * ```
 */

import type { Config } from "tailwindcss";

/**
 * Alize Tailwind Preset Configuration
 * 
 * Note: With Tailwind v4, most tokens are defined in CSS via @theme blocks.
 * This preset primarily handles content scanning and provides theme extensions
 * for compatibility. The actual token values come from the CSS file.
 */
const alizePreset: Config = {
  // Content scanning - ensures Tailwind finds Alize component classes
  content: [
    // Alize components in node_modules (for consumers)
    "./node_modules/alize/dist/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/alize/dist/**/*.{js,ts,jsx,tsx}",
  ],

  // Theme extensions for compatibility
  // Note: Actual token values are defined in CSS @theme blocks
  theme: {
    extend: {
      // Colors - semantic tokens are available via CSS variables
      // These are defined in the CSS file, but we list them here for reference
      colors: {
        // Semantic surface colors (available as bg-semantic-surface-*)
        'semantic-surface-primary': 'var(--semantic-surface-primary)',
        'semantic-surface-secondary': 'var(--semantic-surface-secondary)',
        'semantic-surface-default': 'var(--semantic-surface-default)',
        'semantic-surface-subdued': 'var(--semantic-surface-subdued)',
        'semantic-surface-strong': 'var(--semantic-surface-strong)',
        'semantic-surface-contrast': 'var(--semantic-surface-contrast)',
        'semantic-surface-overlays-level1': 'var(--semantic-surface-overlays-level1)',
        'semantic-surface-overlays-level2': 'var(--semantic-surface-overlays-level2)',
        'semantic-surface-overlays-level3': 'var(--semantic-surface-overlays-level3)',
        'semantic-surface-whisper': 'var(--semantic-surface-whisper)',
        'semantic-surface-interaction-strong': 'var(--semantic-surface-interaction-strong)',
        'semantic-surface-interaction-subdued': 'var(--semantic-surface-interaction-subdued)',
        'semantic-surface-interaction-bright': 'var(--semantic-surface-interaction-bright)',
        'semantic-surface-rag-danger-strong': 'var(--semantic-surface-rag-danger-strong)',
        'semantic-surface-rag-danger-bright': 'var(--semantic-surface-rag-danger-bright)',
        'semantic-surface-rag-danger-subdued': 'var(--semantic-surface-rag-danger-subdued)',
        'semantic-surface-rag-success-strong': 'var(--semantic-surface-rag-success-strong)',
        'semantic-surface-rag-success-bright': 'var(--semantic-surface-rag-success-bright)',
        'semantic-surface-rag-success-subdued': 'var(--semantic-surface-rag-success-subdued)',
        'semantic-surface-rag-warning-strong': 'var(--semantic-surface-rag-warning-strong)',
        'semantic-surface-rag-warning-bright': 'var(--semantic-surface-rag-warning-bright)',
        'semantic-surface-rag-warning-subdued': 'var(--semantic-surface-rag-warning-subdued)',
        'semantic-surface-ai-strong': 'var(--semantic-surface-ai-strong)',
        'semantic-surface-ai-subdued': 'var(--semantic-surface-ai-subdued)',
        'semantic-surface-tonal-science-strong': 'var(--semantic-surface-tonal-science-strong)',
        'semantic-surface-tonal-science-subdued': 'var(--semantic-surface-tonal-science-subdued)',

        // Semantic text colors (available as text-semantic-text-*)
        'semantic-text-default': 'var(--semantic-text-default)',
        'semantic-text-subdued': 'var(--semantic-text-subdued)',
        'semantic-text-reversed': 'var(--semantic-text-reversed)',
        'semantic-text-reversedpersistent': 'var(--semantic-text-reversedpersistent)',
        'semantic-text-interaction-default': 'var(--semantic-text-interaction-default)',
        'semantic-text-interaction-bright': 'var(--semantic-text-interaction-bright)',
        'semantic-text-rag-danger-default': 'var(--semantic-text-rag-danger-default)',
        'semantic-text-rag-success-default': 'var(--semantic-text-rag-success-default)',
        'semantic-text-rag-warning-default': 'var(--semantic-text-rag-warning-default)',
        'semantic-text-ai-default': 'var(--semantic-text-ai-default)',
        'semantic-text-tonal-science-default': 'var(--semantic-text-tonal-science-default)',
        'semantic-brand-text': 'var(--semantic-brand-text)',

        // Semantic icon colors (available as text-semantic-icon-*)
        'semantic-icon-default': 'var(--semantic-icon-default)',
        'semantic-icon-subdued': 'var(--semantic-icon-subdued)',
        'semantic-icon-reversed': 'var(--semantic-icon-reversed)',
        'semantic-icon-reversedpersistent': 'var(--semantic-icon-reversedpersistent)',
        'semantic-icon-interaction-default': 'var(--semantic-icon-interaction-default)',
        'semantic-icon-interaction-bright': 'var(--semantic-icon-interaction-bright)',
        'semantic-icon-rag-danger-default': 'var(--semantic-icon-rag-danger-default)',
        'semantic-icon-rag-success-default': 'var(--semantic-icon-rag-success-default)',
        'semantic-icon-rag-warning-default': 'var(--semantic-icon-rag-warning-default)',
        'semantic-icon-ai-default': 'var(--semantic-icon-ai-default)',
        'semantic-icon-tonal-science-default': 'var(--semantic-icon-tonal-science-default)',
        'semantic-brand-picto': 'var(--semantic-brand-picto)',

        // Semantic stroke colors (available as border-semantic-stroke-*)
        'semantic-stroke-default': 'var(--semantic-stroke-default)',
        'semantic-stroke-subdued': 'var(--semantic-stroke-subdued)',
        'semantic-stroke-strong': 'var(--semantic-stroke-strong)',
        'semantic-stroke-interaction-default': 'var(--semantic-stroke-interaction-default)',
        'semantic-stroke-rag-danger-default': 'var(--semantic-stroke-rag-danger-default)',
        'semantic-stroke-rag-danger-bright': 'var(--semantic-stroke-rag-danger-bright)',
        'semantic-stroke-rag-danger-strong': 'var(--semantic-stroke-rag-danger-strong)',
        'semantic-stroke-rag-success-default': 'var(--semantic-stroke-rag-success-default)',
        'semantic-stroke-rag-success-bright': 'var(--semantic-stroke-rag-success-bright)',
        'semantic-stroke-rag-success-strong': 'var(--semantic-stroke-rag-success-strong)',
        'semantic-stroke-rag-warning-default': 'var(--semantic-stroke-rag-warning-default)',
        'semantic-stroke-rag-warning-bright': 'var(--semantic-stroke-rag-warning-bright)',
        'semantic-stroke-rag-warning-strong': 'var(--semantic-stroke-rag-warning-strong)',
        'semantic-stroke-ai-default': 'var(--semantic-stroke-ai-default)',
        'semantic-stroke-tonal-science-default': 'var(--semantic-stroke-tonal-science-default)',

        // Legacy shadcn colors (for backward compatibility)
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
      },

      // Border radius - using CSS variables
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'var(--radius)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
        DEFAULT: 'var(--radius)',
      },

      // Font family
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
};

export default alizePreset;

