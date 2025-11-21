/**
 * State semantic classes
 * Canonical source for all interaction state classes
 */

export const states = {
  // Hover states
  hoverOverlay1: "hover:bg-semantic-surface-overlays-level1",
  hoverOverlay2: "hover:bg-semantic-surface-overlays-level2",
  hoverPrimary: "hover:bg-semantic-surface-primary",
  hoverSecondary: "hover:bg-semantic-surface-secondary",
  hoverDestructive: "hover:bg-destructive/90",
  hoverOpacity90: "hover:opacity-90",
  hoverOpacity80: "hover:opacity-80",
  hoverUnderline: "hover:underline",
  
  // Focus states
  focusRing: "focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]",
  focusRingDestructive: "focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
  focusOutline: "focus-visible:outline-none",
  
  // Visual utilities
  outlineNone: "outline-none",
  outlineHidden: "outline-hidden",
  
  // Disabled states
  disabled: "disabled:pointer-events-none disabled:opacity-50",
  disabledCursor: "disabled:cursor-not-allowed",
  
  // Pressed/Active states
  pressed: "active:scale-[0.98]",
  pressedOpacity: "active:opacity-80",
  
  // Invalid/Error states
  invalidRing: "aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40",
  invalidBorder: "aria-invalid:border-semantic-surface-rag-danger-strong",
  
  // Checked/Selected states
  checked: "data-[state=checked]:bg-semantic-surface-interaction-strong",
  unchecked: "data-[state=unchecked]:bg-transparent",
} as const

