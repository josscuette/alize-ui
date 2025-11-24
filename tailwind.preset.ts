/**
 * Alize Tailwind CSS Preset (TypeScript version)
 * 
 * This preset ensures that when consumers use Alize, they can extend their
 * Tailwind configuration without conflicts, and only one instance of Tailwind
 * runs in the consumer application.
 * 
 * @example
 * ```ts
 * // tailwind.config.ts (consumer app)
 * import type { Config } from "tailwindcss";
 * import alizePreset from "alize/tailwind.preset";
 * 
 * export default {
 *   presets: [alizePreset],
 *   content: [
 *     "./app/**/*.{js,ts,jsx,tsx}",
 *     "./components/**/*.{js,ts,jsx,tsx}",
 *   ],
 * } satisfies Config;
 * ```
 */

import type { Config } from "tailwindcss";

const alizePreset: Config = {
  content: [
    // Alize components - these paths will be resolved relative to node_modules/alize
    "./node_modules/alize/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/alize/lib/**/*.{js,ts,jsx,tsx}",
    "./node_modules/alize/hooks/**/*.{js,ts,jsx,tsx}",
  ],
  // Note: Theme configuration is handled via CSS in globals.css and theme.css
  // The consumer should import these CSS files to get the full theme
  // This preset only handles content scanning to ensure Tailwind finds Alize classes
};

export default alizePreset;

