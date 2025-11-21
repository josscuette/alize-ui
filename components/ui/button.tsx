import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import { surface, text, icon, states, stroke, size, radius, animation } from "../../styles"

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
          text.primary,
          "underline-offset-4",
          states.hoverUnderline,
          "hover:text-semantic-text-interaction-bright",
          icon.subdued,
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

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
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

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        // Primary icon-only: icon should be reversedPersistent (white) - override default bright color
        isPrimaryIconOnly && icon.reversedPersistent,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
