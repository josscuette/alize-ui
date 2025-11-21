/**
 * Stroke (border) semantic classes
 * Canonical source for all border-related semantic tokens
 */

export const stroke = {
  // Default stroke colors
  default: "border-semantic-stroke-default",
  subdued: "border-semantic-stroke-subdued",
  strong: "border-semantic-stroke-strong",
  
  // Interaction stroke
  interaction: "border-semantic-stroke-interaction-default",
  
  // Focus stroke (using interaction default)
  focus: "border-semantic-stroke-interaction-default",
  
  // RAG (Red/Amber/Green) stroke colors
  destructive: "border-semantic-stroke-rag-danger-default",
  destructiveBright: "border-semantic-stroke-rag-danger-bright",
  destructiveStrong: "border-semantic-stroke-rag-danger-strong",
  
  success: "border-semantic-stroke-rag-success-default",
  successBright: "border-semantic-stroke-rag-success-bright",
  successStrong: "border-semantic-stroke-rag-success-strong",
  
  warning: "border-semantic-stroke-rag-warning-default",
  warningBright: "border-semantic-stroke-rag-warning-bright",
  warningStrong: "border-semantic-stroke-rag-warning-strong",
  
  // Special variants
  ai: "border-semantic-stroke-ai-default",
  tonalScience: "border-semantic-stroke-tonal-science-default",
  
  // Surface-based borders (used for aria-invalid states)
  surfaceDestructive: "border-semantic-surface-rag-danger-strong",
} as const

