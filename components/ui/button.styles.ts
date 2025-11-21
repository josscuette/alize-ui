import { cn } from "../../lib/utils"

// Base styles applied to all buttons
export const buttonBase = cn(
  "inline-flex items-center justify-center whitespace-nowrap font-normal transition-all",
  "disabled:pointer-events-none disabled:opacity-50",
  "[&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0",
  "outline-none",
  "focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]",
  "aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40",
  "aria-invalid:border-semantic-surface-rag-danger-strong"
)

// Surface colors
export const buttonSurfaces = {
  primary: "bg-semantic-surface-primary",
  secondary: "bg-semantic-surface-secondary",
  overlays: "bg-semantic-surface-overlays-level1",
  destructive: "bg-destructive",
  destructiveDark: "dark:bg-destructive/60",
}

// Text colors
export const buttonText = {
  reversedPersistent: "text-semantic-text-reversedpersistent",
  subdued: "text-semantic-text-subdued",
  interactionBright: "text-semantic-text-interaction-bright",
  primary: "text-primary",
  destructive: "text-[var(--destructive-foreground)]",
}

// Icon colors
export const buttonIcons = {
  interactionBright: "text-semantic-icon-interaction-bright",
  subdued: "text-semantic-icon-subdued",
  interactionBrightHover: "hover:text-semantic-icon-interaction-bright",
  reversedPersistent: "text-semantic-text-reversedpersistent",
  destructive: "text-[var(--destructive-foreground)]",
}

// State modifiers
export const buttonStates = {
  hoverOpacity90: "hover:opacity-90",
  hoverOpacity80: "hover:opacity-80",
  hoverUnderline: "hover:underline",
  hoverBgOverlays: "hover:bg-semantic-surface-overlays-level1",
  hoverBgDestructive: "hover:bg-destructive/90",
  focusRingDestructive: "focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
}

// Variant styles
export const defaultStyles = cn(
  buttonSurfaces.primary,
  buttonText.reversedPersistent,
  buttonStates.hoverOpacity90,
  "[&_.material-symbols-outlined]:text-semantic-icon-interaction-bright"
)

export const destructiveStyles = cn(
  buttonSurfaces.destructive,
  buttonText.destructive,
  buttonStates.hoverBgDestructive,
  buttonStates.focusRingDestructive,
  buttonSurfaces.destructiveDark,
  "[&_.material-symbols-outlined]:!text-[var(--destructive-foreground)]"
)

export const outlineStyles = cn(
  "border border-semantic-stroke-default",
  buttonText.subdued,
  buttonStates.hoverBgOverlays,
  "[&_.material-symbols-outlined]:!text-semantic-icon-subdued"
)

export const secondaryStyles = cn(
  buttonSurfaces.secondary,
  buttonText.subdued,
  buttonStates.hoverOpacity80,
  "[&_.material-symbols-outlined]:!text-semantic-icon-subdued"
)

export const ghostStyles = cn(
  buttonText.subdued,
  buttonStates.hoverBgOverlays,
  "[&_.material-symbols-outlined]:!text-semantic-icon-subdued"
)

export const linkStyles = cn(
  buttonText.primary,
  "underline-offset-4",
  buttonStates.hoverUnderline,
  "hover:text-semantic-text-interaction-bright",
  "[&_.material-symbols-outlined]:!text-semantic-icon-subdued",
  "hover:[&_.material-symbols-outlined]:!text-semantic-icon-interaction-bright"
)

export const tertiaryStyles = cn(
  buttonText.subdued,
  buttonStates.hoverBgOverlays,
  "[&_.material-symbols-outlined]:!text-semantic-icon-subdued"
)

// Size styles
export const defaultSize = cn(
  "h-9 px-3 gap-2 rounded-md text-sm leading-5",
  "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]"
)

export const smSize = cn(
  "h-7 px-2 gap-2 rounded-md text-sm leading-5",
  "[&_svg]:size-4 [&_.material-symbols-outlined]:!text-[16px]"
)

export const lgSize = cn(
  "h-11 px-4 gap-2 rounded-md text-base leading-6",
  "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]"
)

export const xsSize = cn(
  "h-5 px-1 gap-1 rounded-[4px] text-xs leading-4",
  "[&_svg]:size-3 [&_.material-symbols-outlined]:!text-[12px]"
)

export const iconSize = cn(
  "size-9 rounded-md",
  "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]"
)

export const iconSmSize = cn(
  "size-7 rounded-md",
  "[&_svg]:size-4 [&_.material-symbols-outlined]:!text-[16px]"
)

export const iconLgSize = cn(
  "size-11 rounded-md",
  "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]"
)

export const iconXsSize = cn(
  "size-5 rounded-[4px]",
  "[&_svg]:size-3 [&_.material-symbols-outlined]:!text-[12px]"
)

