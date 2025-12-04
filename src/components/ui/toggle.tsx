"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import { states, animation } from "../../foundation"

/**
 * Toggle component props interface
 * Extends Radix UI Toggle primitive props and adds variant and size props
 */
export interface ToggleProps extends React.ComponentProps<typeof TogglePrimitive.Root>, VariantProps<typeof toggleVariants> {}

const toggleVariants = cva(
  cn(
    // Layout
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap",
    // SVG handling
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    // Focus & outline
    states.outlineNone,
    states.focusRing,
    // Disabled states
    states.disabled,
    states.disabledCursor,
    // Hover state
    states.hoverOverlay1,
    // On/Pressed state
    states.dataStateOn,
    states.pressed,
    // Invalid states
    states.invalidRing,
    states.invalidBorder,
    // Transition
    animation.transitionFormControl
  ),
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: cn(
          "border border-input bg-transparent shadow-xs",
          states.hoverOverlay1
        ),
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
