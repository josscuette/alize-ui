/**
 * Text semantic classes
 * Canonical source for all text color semantic tokens
 */

export const text = {
  // Default text colors
  default: "text-semantic-text-default",
  subdued: "text-semantic-text-subdued",
  
  // Interaction text colors
  interactionBright: "text-semantic-text-interaction-bright",
  interactionDefault: "text-semantic-text-interaction-default",
  
  // Reversed text (for dark backgrounds)
  reversed: "text-semantic-text-reversed",
  reversedPersistent: "text-semantic-text-reversedpersistent",
  
  // RAG (Red/Amber/Green) text colors
  destructive: "text-semantic-text-rag-danger-default",
  success: "text-semantic-text-rag-success-default",
  warning: "text-semantic-text-rag-warning-default",
  
  // Info text (using interaction bright as info)
  info: "text-semantic-text-interaction-bright",
  
  // Legacy shadcn colors (TODO: migrate to semantic?)
  primary: "text-primary",
  destructiveLegacy: "text-[var(--destructive-foreground)]",
} as const

