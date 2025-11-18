"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

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
        rounded: "rounded-full",
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
    xs: "rounded-sm",
    sm: "rounded-md",
    md: "rounded-md",
    lg: "rounded-md",
  },
  rounded: {
    xs: "rounded-full",
    sm: "rounded-full",
    md: "rounded-full",
    lg: "rounded-full",
  },
}

function Avatar({
  className,
  size,
  shape,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>) {
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

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  size = "md",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback> & {
  size?: "xs" | "sm" | "md" | "lg"
}) {
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
        "bg-[var(--semantic-surface-subdued)] flex size-full items-center justify-center text-[var(--semantic-text-subdued)]",
        textSizeMap[size],
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants }
