import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import {
  buttonBase,
  defaultStyles,
  destructiveStyles,
  outlineStyles,
  secondaryStyles,
  ghostStyles,
  linkStyles,
  tertiaryStyles,
  defaultSize,
  smSize,
  lgSize,
  xsSize,
  iconSize,
  iconSmSize,
  iconLgSize,
  iconXsSize,
} from "./button.styles"

const buttonVariants = cva(buttonBase, {
  variants: {
    variant: {
      default: defaultStyles,
      destructive: destructiveStyles,
      outline: outlineStyles,
      secondary: secondaryStyles,
      ghost: ghostStyles,
      link: linkStyles,
      tertiary: tertiaryStyles,
    },
    size: {
      default: defaultSize,
      sm: smSize,
      lg: lgSize,
      xs: xsSize,
      icon: iconSize,
      "icon-sm": iconSmSize,
      "icon-lg": iconLgSize,
      "icon-xs": iconXsSize,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

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
        isPrimaryIconOnly && '[&_.material-symbols-outlined]:!text-semantic-text-reversedpersistent',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
