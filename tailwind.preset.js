/**
 * Alize Tailwind CSS Preset
 * 
 * This preset ensures that when consumers use Alize, they can extend their
 * Tailwind configuration without conflicts, and only one instance of Tailwind
 * runs in the consumer application.
 * 
 * Usage in consumer app tailwind.config.js:
 * import alizePreset from 'alize/tailwind.preset'
 * export default { presets: [alizePreset], content: [...] }
 */

/** @type {import('tailwindcss').Config} */
const alizePreset = {
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

