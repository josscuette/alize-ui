/**
 * Icon semantic classes
 * Canonical source for all icon color semantic tokens
 * Uses Material Symbols selectors: [&_.material-symbols-outlined]
 */

export const icon = {
  // Default icon colors
  default: "[&_.material-symbols-outlined]:text-semantic-icon-default",
  subdued: "[&_.material-symbols-outlined]:text-semantic-icon-subdued",
  
  // Interaction icon colors
  interactionBright: "[&_.material-symbols-outlined]:text-semantic-icon-interaction-bright",
  interactionDefault: "[&_.material-symbols-outlined]:text-semantic-icon-interaction-default",
  interactionBrightHover: "[&_.material-symbols-outlined]:hover:text-semantic-icon-interaction-bright",
  
  // Reversed icons (for dark backgrounds)
  reversed: "[&_.material-symbols-outlined]:text-semantic-icon-reversed",
  reversedPersistent: "[&_.material-symbols-outlined]:text-semantic-text-reversedpersistent",
  
  // RAG (Red/Amber/Green) icon colors
  destructive: "[&_.material-symbols-outlined]:text-semantic-icon-rag-danger-default",
  success: "[&_.material-symbols-outlined]:text-semantic-icon-rag-success-default",
  warning: "[&_.material-symbols-outlined]:text-semantic-icon-rag-warning-default",
  
  // AI and special variants
  ai: "[&_.material-symbols-outlined]:text-semantic-icon-ai-default",
  tonalScience: "[&_.material-symbols-outlined]:text-semantic-icon-tonal-science-default",
  
  // Legacy shadcn colors (TODO: migrate to semantic?)
  destructiveLegacy: "[&_.material-symbols-outlined]:!text-[var(--destructive-foreground)]",
  
  // SVG icon support (for non-Material Symbols)
  svgDefault: "[&_svg]:text-semantic-icon-default",
  svgSubdued: "[&_svg]:text-semantic-icon-subdued",
  svgInteractionBright: "[&_svg]:text-semantic-icon-interaction-bright",
} as const

