import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import { states, animation } from "../../foundation"

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
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * Badge component props interface
 * Extends native span element props and adds variant and asChild props
 */
export interface BadgeProps extends React.ComponentProps<"span">, VariantProps<typeof badgeVariants> {
  /**
   * Render as a different element using Radix UI Slot
   * @default false
   */
  asChild?: boolean
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
 * Can be used as a link or other element via the asChild prop.
 * 
 * @param props - Badge props including variant, asChild, and standard HTML span attributes
 * @returns A badge element
 * 
 * @example
 * ```tsx
 * // RAG status badges
 * <Badge variant="success">Complete</Badge>
 * <Badge variant="warning">Pending</Badge>
 * <Badge variant="destructive">Error</Badge>
 * 
 * // Other variants
 * <Badge variant="default">New</Badge>
 * <Badge variant="outline">Draft</Badge>
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
  asChild = false,
  ...props
}: BadgeProps): React.ReactElement {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
