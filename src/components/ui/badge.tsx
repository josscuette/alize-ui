import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import { states, animation } from "../../foundation"

/**
 * Available tonal color options for badges
 */
export type BadgeTonal = 
  | "default"
  | "sand"
  | "clay"
  | "lima"
  | "amber"
  | "forest"
  | "watercourse"
  | "atoll"
  | "royal"
  | "magenta"
  | "lavender"
  | "violet"
  | "lilac"
  | "science"

/**
 * Tonal color styles mapping
 * Each tonal has three style variants: default (subdued bg), outline, and reversed (strong bg)
 */
const tonalStyles: Record<BadgeTonal, { default: string; outline: string; reversed: string }> = {
  default: {
    default: "border-transparent bg-secondary text-secondary-foreground",
    outline: "border-[var(--semantic-stroke-default)] bg-transparent text-foreground",
    reversed: "border-transparent bg-[var(--semantic-surface-primary)] text-[var(--semantic-text-reversedpersistent)]",
  },
  sand: {
    default: "border-transparent bg-[var(--semantic-tonal-sand-subdued)] text-[var(--semantic-tonal-sand-strong)]",
    outline: "border-[var(--semantic-tonal-sand-default)] bg-transparent text-[var(--semantic-tonal-sand-strong)]",
    reversed: "border-transparent bg-[var(--semantic-tonal-sand-strong)] text-[var(--semantic-text-reversedpersistent)]",
  },
  clay: {
    default: "border-transparent bg-[var(--semantic-tonal-clay-subdued)] text-[var(--semantic-tonal-clay-strong)]",
    outline: "border-[var(--semantic-tonal-clay-default)] bg-transparent text-[var(--semantic-tonal-clay-strong)]",
    reversed: "border-transparent bg-[var(--semantic-tonal-clay-strong)] text-[var(--semantic-text-reversedpersistent)]",
  },
  lima: {
    default: "border-transparent bg-[var(--semantic-tonal-lima-subdued)] text-[var(--semantic-tonal-lima-strong)]",
    outline: "border-[var(--semantic-tonal-lima-default)] bg-transparent text-[var(--semantic-tonal-lima-strong)]",
    reversed: "border-transparent bg-[var(--semantic-tonal-lima-strong)] text-[var(--semantic-text-reversedpersistent)]",
  },
  amber: {
    default: "border-transparent bg-[var(--semantic-tonal-amber-subdued)] text-[var(--semantic-tonal-amber-strong)]",
    outline: "border-[var(--semantic-tonal-amber-default)] bg-transparent text-[var(--semantic-tonal-amber-strong)]",
    reversed: "border-transparent bg-[var(--semantic-tonal-amber-strong)] text-[var(--semantic-text-reversedpersistent)]",
  },
  forest: {
    default: "border-transparent bg-[var(--semantic-tonal-forest-subdued)] text-[var(--semantic-tonal-forest-strong)]",
    outline: "border-[var(--semantic-tonal-forest-default)] bg-transparent text-[var(--semantic-tonal-forest-strong)]",
    reversed: "border-transparent bg-[var(--semantic-tonal-forest-strong)] text-[var(--semantic-text-reversedpersistent)]",
  },
  watercourse: {
    default: "border-transparent bg-[var(--semantic-tonal-watercourse-subdued)] text-[var(--semantic-tonal-watercourse-strong)]",
    outline: "border-[var(--semantic-tonal-watercourse-default)] bg-transparent text-[var(--semantic-tonal-watercourse-strong)]",
    reversed: "border-transparent bg-[var(--semantic-tonal-watercourse-strong)] text-[var(--semantic-text-reversedpersistent)]",
  },
  atoll: {
    default: "border-transparent bg-[var(--semantic-tonal-atoll-subdued)] text-[var(--semantic-tonal-atoll-strong)]",
    outline: "border-[var(--semantic-tonal-atoll-default)] bg-transparent text-[var(--semantic-tonal-atoll-strong)]",
    reversed: "border-transparent bg-[var(--semantic-tonal-atoll-strong)] text-[var(--semantic-text-reversedpersistent)]",
  },
  royal: {
    default: "border-transparent bg-[var(--semantic-tonal-royal-subdued)] text-[var(--semantic-tonal-royal-strong)]",
    outline: "border-[var(--semantic-tonal-royal-default)] bg-transparent text-[var(--semantic-tonal-royal-strong)]",
    reversed: "border-transparent bg-[var(--semantic-tonal-royal-strong)] text-[var(--semantic-text-reversedpersistent)]",
  },
  magenta: {
    default: "border-transparent bg-[var(--semantic-tonal-magenta-subdued)] text-[var(--semantic-tonal-magenta-strong)]",
    outline: "border-[var(--semantic-tonal-magenta-default)] bg-transparent text-[var(--semantic-tonal-magenta-strong)]",
    reversed: "border-transparent bg-[var(--semantic-tonal-magenta-strong)] text-[var(--semantic-text-reversedpersistent)]",
  },
  lavender: {
    default: "border-transparent bg-[var(--semantic-tonal-lavender-subdued)] text-[var(--semantic-tonal-lavender-strong)]",
    outline: "border-[var(--semantic-tonal-lavender-default)] bg-transparent text-[var(--semantic-tonal-lavender-strong)]",
    reversed: "border-transparent bg-[var(--semantic-tonal-lavender-strong)] text-[var(--semantic-text-reversedpersistent)]",
  },
  violet: {
    default: "border-transparent bg-[var(--semantic-tonal-violet-subdued)] text-[var(--semantic-tonal-violet-strong)]",
    outline: "border-[var(--semantic-tonal-violet-default)] bg-transparent text-[var(--semantic-tonal-violet-strong)]",
    reversed: "border-transparent bg-[var(--semantic-tonal-violet-strong)] text-[var(--semantic-text-reversedpersistent)]",
  },
  lilac: {
    default: "border-transparent bg-[var(--semantic-tonal-lilac-subdued)] text-[var(--semantic-tonal-lilac-strong)]",
    outline: "border-[var(--semantic-tonal-lilac-default)] bg-transparent text-[var(--semantic-tonal-lilac-strong)]",
    reversed: "border-transparent bg-[var(--semantic-tonal-lilac-strong)] text-[var(--semantic-text-reversedpersistent)]",
  },
  science: {
    default: "border-transparent bg-[var(--semantic-tonal-science-subdued)] text-[var(--semantic-tonal-science-strong)]",
    outline: "border-[var(--semantic-tonal-science-default)] bg-transparent text-[var(--semantic-tonal-science-strong)]",
    reversed: "border-transparent bg-[var(--semantic-tonal-science-strong)] text-[var(--semantic-text-reversedpersistent)]",
  },
}

const badgeVariants = cva(
  cn(
    // Layout
    "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden gap-1",
    // SVG handling
    "[&>svg]:size-3 [&>svg]:pointer-events-none [&_.material-symbols-outlined]:!text-[12px] [&_.material-symbols-outlined]:!size-3",
    // Focus state using foundation
    states.focusRing,
    // Invalid state
    states.invalidRing,
    states.invalidBorder,
    // Transition
    animation.transitionFormControl
  ),
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-[var(--semantic-stroke-rag-danger-default)] bg-[var(--semantic-surface-rag-danger-subdued)] text-[var(--semantic-text-rag-danger-default)] [a&]:hover:bg-[var(--semantic-surface-rag-danger-subdued)]/80 focus-visible:ring-[var(--semantic-surface-rag-danger-subdued)]",
        warning:
          "border-[var(--semantic-stroke-rag-warning-default)] bg-[var(--semantic-surface-rag-warning-subdued)] text-[var(--semantic-text-rag-warning-default)] [a&]:hover:bg-[var(--semantic-surface-rag-warning-subdued)]/80 focus-visible:ring-[var(--semantic-surface-rag-warning-subdued)]",
        success:
          "border-[var(--semantic-stroke-rag-success-default)] bg-[var(--semantic-surface-rag-success-subdued)] text-[var(--semantic-text-rag-success-default)] [a&]:hover:bg-[var(--semantic-surface-rag-success-subdued)]/80 focus-visible:ring-[var(--semantic-surface-rag-success-subdued)]",
        outline: cn(
          "text-foreground",
          "[a&]:hover:bg-semantic-surface-overlays-level1 [a&]:hover:text-foreground"
        ),
      },
      numeric: {
        true: "px-1.5 min-w-5 tabular-nums",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      numeric: false,
    },
  }
)

/**
 * Badge component props interface
 * Extends native span element props and adds variant, tonal, style, numeric, and asChild props
 */
export interface BadgeProps extends React.ComponentProps<"span">, VariantProps<typeof badgeVariants> {
  /**
   * Render as a different element using Radix UI Slot
   * @default false
   */
  asChild?: boolean
  /**
   * Tonal color scheme for the badge.
   * When set, this takes precedence over the variant prop for styling.
   * Available colors: default, sand, clay, lima, amber, forest, watercourse, atoll, royal, magenta, lavender, violet, lilac, science
   */
  tonal?: BadgeTonal
  /**
   * Style variant when using tonal colors.
   * - "default": Subdued background with strong text
   * - "outline": Transparent background with colored border
   * - "reversed": Strong background with white text
   * @default "default"
   */
  badgeStyle?: "default" | "outline" | "reversed"
}

/**
 * Badge component - A small status indicator or label
 * 
 * Displays a badge with multiple variants for different states:
 * - `default` / `secondary`: Neutral badge for general use
 * - `destructive`: Red/danger badge for errors or critical states
 * - `warning`: Orange/amber badge for warnings or caution states
 * - `success`: Green badge for success or positive states
 * - `outline`: Outlined badge without background
 * 
 * NEW: Tonal color system with 14 color options and 3 style variants:
 * - Use `tonal` prop for color (sand, clay, lima, amber, forest, etc.)
 * - Use `badgeStyle` prop for appearance (default, outline, reversed)
 * - Use `numeric` prop for number-only badges (optimized padding)
 * 
 * Can be used as a link or other element via the asChild prop.
 * 
 * @param props - Badge props including variant, tonal, badgeStyle, numeric, asChild, and standard HTML span attributes
 * @returns A badge element
 * 
 * @example
 * ```tsx
 * // RAG status badges
 * <Badge variant="success">Complete</Badge>
 * <Badge variant="warning">Pending</Badge>
 * <Badge variant="destructive">Error</Badge>
 * 
 * // Tonal badges
 * <Badge tonal="amber">New</Badge>
 * <Badge tonal="royal" badgeStyle="reversed">Featured</Badge>
 * <Badge tonal="forest" badgeStyle="outline">Eco</Badge>
 * 
 * // Numeric badges
 * <Badge tonal="science" numeric>42</Badge>
 * <Badge tonal="magenta" badgeStyle="reversed" numeric>99+</Badge>
 * 
 * // As a link
 * <Badge asChild>
 *   <a href="/link">Link Badge</a>
 * </Badge>
 * ```
 */
function Badge({
  className,
  variant,
  numeric,
  tonal,
  badgeStyle = "default",
  asChild = false,
  ...props
}: BadgeProps): React.ReactElement {
  const Comp = asChild ? Slot : "span"
  
  // If tonal is specified, use tonal styles instead of variant
  const tonalClassName = tonal ? tonalStyles[tonal][badgeStyle] : undefined

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ variant: tonal ? undefined : variant, numeric }),
        tonalClassName,
        className
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
