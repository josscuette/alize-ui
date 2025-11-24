/**
 * Surface (background) semantic classes
 * Canonical source for all background-related semantic tokens
 */

export const surface = {
  // Primary surfaces
  primary: "bg-semantic-surface-primary",
  secondary: "bg-semantic-surface-secondary",
  default: "bg-semantic-surface-default",
  subdued: "bg-semantic-surface-subdued",
  strong: "bg-semantic-surface-strong",
  contrast: "bg-semantic-surface-contrast",

  // Overlay surfaces
  overlay1: "bg-semantic-surface-overlays-level1",
  overlay2: "bg-semantic-surface-overlays-level2",
  overlay3: "bg-semantic-surface-overlays-level3",
  whisper: "bg-semantic-surface-whisper",

  // Interaction surfaces
  interactionStrong: "bg-semantic-surface-interaction-strong",
  interactionSubdued: "bg-semantic-surface-interaction-subdued",
  interactionBright: "bg-semantic-surface-interaction-bright",

  // RAG (Red/Amber/Green) surfaces
  destructive: "bg-semantic-surface-rag-danger-strong",
  destructiveBright: "bg-semantic-surface-rag-danger-bright",
  destructiveSubdued: "bg-semantic-surface-rag-danger-subdued",
  
  success: "bg-semantic-surface-rag-success-strong",
  successBright: "bg-semantic-surface-rag-success-bright",
  successSubdued: "bg-semantic-surface-rag-success-subdued",
  
  warning: "bg-semantic-surface-rag-warning-strong",
  warningBright: "bg-semantic-surface-rag-warning-bright",
  warningSubdued: "bg-semantic-surface-rag-warning-subdued",

  // Legacy shadcn destructive (TODO: migrate to semantic?)
  destructiveLegacy: "bg-destructive",
  destructiveLegacyDark: "dark:bg-destructive/60",
} as const

