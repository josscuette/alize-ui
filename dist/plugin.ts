/**
 * Alize Tailwind CSS Plugin
 * 
 * This plugin adds custom utilities, variants, and base styles for the Alize design system.
 * It extends Tailwind with semantic variants and helper utilities.
 * 
 * @example
 * ```ts
 * // tailwind.config.ts
 * import alizePlugin from "alize/plugin";
 * 
 * export default {
 *   plugins: [alizePlugin],
 * };
 * ```
 */

import type { PluginAPI } from "tailwindcss/types/config";

/**
 * Alize Tailwind Plugin
 * 
 * Adds:
 * - Custom variants (state-*, etc.)
 * - Helper utilities for focus rings
 * - Base styles for Material Symbols
 * - Transition utilities
 */
const alizePlugin = {
  handler(api: PluginAPI) {
    // Add base styles for Material Symbols
    api.addBase({
      ".material-symbols-outlined": {
        fontFamily: "'Material Symbols Outlined'",
        fontWeight: "normal",
        fontStyle: "normal",
        fontSize: "24px",
        lineHeight: "1",
        letterSpacing: "normal",
        textTransform: "none",
        display: "inline-block",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        direction: "ltr",
        fontFeatureSettings: "'liga'",
        WebkitFontFeatureSettings: "'liga'",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility",
        userSelect: "none",
      },
    });

    // Add custom utilities for focus rings
    api.addUtilities({
      ".focus-ring": {
        "&:focus-visible": {
          outline: "2px solid transparent",
          outlineOffset: "2px",
          "box-shadow": "0 0 0 2px var(--ring)",
        },
      },
      ".focus-ring-destructive": {
        "&:focus-visible": {
          outline: "2px solid transparent",
          outlineOffset: "2px",
          "box-shadow": "0 0 0 2px var(--destructive)",
        },
      },
    });

    // Add transition utilities
    api.addUtilities({
      ".transition-all": {
        "transition-property": "all",
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
        "transition-duration": "150ms",
      },
      ".transition-colors": {
        "transition-property": "color, background-color, border-color, text-decoration-color, fill, stroke",
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
        "transition-duration": "150ms",
      },
      ".transition-opacity": {
        "transition-property": "opacity",
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
        "transition-duration": "150ms",
      },
    });

    // Add custom variants if needed
    // Note: Tailwind v4 handles variants differently, but we can add them here for compatibility
    api.addVariant("state-checked", "&:checked");
    api.addVariant("state-disabled", "&:disabled");
    api.addVariant("state-invalid", "&:invalid");
  },
  config: {
    // Plugin configuration if needed
  },
};

export default alizePlugin;

