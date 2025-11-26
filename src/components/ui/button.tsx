import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import { surface, text, icon, states, stroke, size, radius, animation } from "../../foundation"

/**
 * Button component props interface
 * 
 * @example
 * ```tsx
 * <Button variant="default" size="md">Click me</Button>
 * <Button variant="outline" size="icon" aria-label="Close">
 *   <MaterialSymbol name="close" />
 * </Button>
 * ```
 */
export interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  /**
   * Render as a different element using Radix UI Slot
   * @default false
   */
  asChild?: boolean
}

const buttonVariants = cva(
  cn(
    // Layout
    "inline-flex items-center justify-center whitespace-nowrap font-normal",
    // SVG handling
    "[&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0",
    // Focus
    "outline-none",
    // States from Foundation Layer
    states.disabled,
    states.focusRing,
    states.invalidRing,
    states.invalidBorder,
    // Animation
    animation.transitionAll
  ),
  {
    variants: {
      variant: {
        default: cn(
          surface.primary,
          text.reversedPersistent,
          states.hoverOpacity90,
          icon.interactionBright
        ),
        destructive: cn(
          surface.destructiveLegacy,
          text.destructiveLegacy,
          states.hoverDestructive,
          states.focusRingDestructive,
          surface.destructiveLegacyDark,
          icon.destructiveLegacy
        ),
        outline: cn(
          "border",
          stroke.default,
          text.subdued,
          states.hoverOverlay1,
          icon.subdued
        ),
        secondary: cn(
          surface.secondary,
          text.subdued,
          states.hoverOpacity80,
          icon.subdued
        ),
        ghost: cn(
          text.subdued,
          states.hoverOverlay1,
          icon.subdued
        ),
        link: cn(
          text.interactionDefault,
          "underline-offset-4",
          states.hoverUnderline,
          "hover:text-semantic-text-interaction-bright",
          icon.interactionDefault,
          icon.interactionBrightHover
        ),
        tertiary: cn(
          text.subdued,
          states.hoverOverlay1,
          icon.subdued
        ),
      },
      size: {
        default: size.md,
        sm: size.sm,
        lg: size.lg,
        xs: size.xs,
        icon: size.iconMd,
        "icon-sm": size.iconSm,
        "icon-lg": size.iconLg,
        "icon-xs": size.iconXs,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Button component - A versatile button with multiple variants and sizes
 * 
 * Supports all standard button variants (default, destructive, outline, secondary, ghost, link, tertiary)
 * and multiple sizes including icon-only variants.
 * 
 * @param props - Button props including variant, size, and standard HTML button attributes
 * @returns A button element with appropriate styling
 * 
 * @example
 * ```tsx
 * // Default button
 * <Button>Click me</Button>
 * 
 * // Destructive button
 * <Button variant="destructive">Delete</Button>
 * 
 * // Icon-only button (requires aria-label for accessibility)
 * <Button size="icon" aria-label="Close dialog">
 *   <MaterialSymbol name="close" />
 * </Button>
 * ```
 */
function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: ButtonProps): React.ReactElement {
  const Comp = asChild ? Slot : "button"
  
  // Check if button has text (not just icons) - simple check
  const hasText = React.Children.toArray(children).some((child) => {
    if (typeof child === 'string') return child.trim().length > 0
    if (typeof child === 'number') return true
    return false
  })
  
  const isIconOnly = size?.toString().includes('icon') || false
  const isPrimaryWithText = variant === 'default' && hasText && !isIconOnly
  const isPrimaryIconOnly = variant === 'default' && isIconOnly

  // Add aria-label for icon-only buttons if not provided
  const iconOnlyProps = isIconOnly && !props['aria-label'] && !props['aria-labelledby']
    ? { 'aria-label': 'Button' } // Fallback, but should be provided by developer
    : {}

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        // Primary icon-only: icon should be reversedPersistent (white) - override default bright color
        isPrimaryIconOnly && icon.reversedPersistent,
        className
      )}
      {...iconOnlyProps}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
