"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

/**
 * Toggle component props interface
 * Extends Radix UI Toggle primitive props and adds variant and size props
 */
export interface ToggleProps extends React.ComponentProps<typeof TogglePrimitive.Root>, VariantProps<typeof toggleVariants> {}

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Toggle component - A toggle button
 * 
 * Provides a toggle button that can be pressed on or off.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - Toggle props including variant, size, pressed, onPressedChange, and standard Radix UI Toggle attributes
 * @returns A toggle button element
 * 
 * @example
 * ```tsx
 * <Toggle variant="default" size="default" />
 * <Toggle variant="outline" pressed={isPressed} onPressedChange={setIsPressed} />
 * ```
 */
function Toggle({
  className,
  variant,
  size,
  ...props
}: ToggleProps): React.ReactElement {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
