"use client"

/**
 * MaterialSymbolsProvider - No longer needed
 * 
 * Material Symbols font is now loaded locally via @font-face in globals.css.
 * This component is kept for backwards compatibility but does nothing.
 * 
 * @deprecated Material Symbols font is loaded via CSS @font-face, no provider needed
 * 
 * @example
 * ```tsx
 * // app/layout.tsx
 * // No need to import MaterialSymbolsProvider anymore
 * // Font is automatically loaded via globals.css
 * ```
 */
export function MaterialSymbolsProvider() {
  // Font is loaded via @font-face in globals.css
  // No action needed
  return null
}

