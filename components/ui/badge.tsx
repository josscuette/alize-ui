import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none [&_.material-symbols-outlined]:!text-[12px] [&_.material-symbols-outlined]:!size-3 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-[var(--destructive-foreground)] [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
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
 * Displays a badge with multiple variants (default, secondary, destructive, outline).
 * Can be used as a link or other element via the asChild prop.
 * 
 * @param props - Badge props including variant, asChild, and standard HTML span attributes
 * @returns A badge element
 * 
 * @example
 * ```tsx
 * <Badge variant="default">New</Badge>
 * <Badge variant="destructive">Error</Badge>
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
