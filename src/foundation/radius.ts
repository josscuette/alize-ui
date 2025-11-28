/**
 * Radius semantic presets
 * Canonical source for standardized border radius values
 */

export const radius = {
  // Small radius - utilise le token --radius-reduced
  sm: "rounded-[var(--radius-reduced)]",
  
  // Medium radius (default) - utilise le token --radius
  md: "rounded-[var(--radius)]",
  
  // Large radius
  lg: "rounded-lg",
  
  // Extra large radius
  xl: "rounded-xl",
  
  // Full circle/rounded
  full: "rounded-full",
  
  // 3xl (used in some components like radio-group)
  "3xl": "rounded-3xl",
  
  // None (sharp corners)
  none: "rounded-none",
} as const

