"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import { surface, text, radius } from "../../foundation"

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden",
  {
    variants: {
      size: {
        xs: "size-5",
        sm: "h-7 w-7",
        md: "h-9 w-9",
        lg: "h-11 w-11",
      },
      shape: {
        square: "",
        rounded: radius.full,
      },
    },
    defaultVariants: {
      size: "md",
      shape: "rounded",
    },
  }
)

const avatarShapeRadius = {
  square: {
    xs: "rounded-sm", // Keep inline - radius.sm is 4px, rounded-sm is 2px
    sm: radius.md,
    md: radius.md,
    lg: radius.md,
  },
  rounded: {
    xs: radius.full,
    sm: radius.full,
    md: radius.full,
    lg: radius.full,
  },
}

/**
 * Avatar component props interface
 * Extends Radix UI Avatar primitive props and adds size/shape variants
 */
export interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root>, VariantProps<typeof avatarVariants> {}

/**
 * AvatarImage component props interface
 * Extends Radix UI AvatarImage primitive props
 */
export interface AvatarImageProps extends React.ComponentProps<typeof AvatarPrimitive.Image> {}

/**
 * AvatarFallback component props interface
 * Extends Radix UI AvatarFallback primitive props and adds size prop
 */
export interface AvatarFallbackProps extends React.ComponentProps<typeof AvatarPrimitive.Fallback> {
  size?: "xs" | "sm" | "md" | "lg"
}

/**
 * Avatar component - A user avatar with image and fallback
 * 
 * Displays a user's avatar image with a fallback when the image fails to load.
 * Supports multiple sizes and shapes (square/rounded).
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - Avatar props including size, shape, and standard Radix UI Avatar attributes
 * @returns An avatar element
 * 
 * @example
 * ```tsx
 * <Avatar size="md" shape="rounded">
 *   <AvatarImage src="/user.jpg" alt="User" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 * ```
 */
function Avatar({
  className,
  size,
  shape,
  ...props
}: AvatarProps): React.ReactElement {
  const finalSize = size || "md"
  const finalShape = shape || "rounded"
  
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        avatarVariants({ size: finalSize, shape: finalShape }),
        avatarShapeRadius[finalShape][finalSize],
        className
      )}
      {...props}
    />
  )
}

/**
 * AvatarImage component - The image displayed in an Avatar
 * 
 * @param props - AvatarImage props including src, alt, and standard Radix UI AvatarImage attributes
 * @returns An avatar image element
 */
function AvatarImage({
  className,
  ...props
}: AvatarImageProps): React.ReactElement {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  )
}

/**
 * AvatarFallback component - The fallback content displayed when AvatarImage fails to load
 * 
 * @param props - AvatarFallback props including size and standard Radix UI AvatarFallback attributes
 * @returns An avatar fallback element
 */
function AvatarFallback({
  className,
  size = "md",
  ...props
}: AvatarFallbackProps): React.ReactElement {
  const textSizeMap = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-base",
  }
  
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        // Background & Surface (Foundation Layer)
        surface.subdued,
        // Layout & Structure
        "flex size-full items-center justify-center",
        // Text color (Foundation Layer)
        text.subdued,
        // Typography (specific to component - keep inline)
        textSizeMap[size],
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants }
