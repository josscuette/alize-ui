"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "../../lib/utils"

/**
 * HoverCard component props interface
 * Extends Radix UI HoverCard primitive props
 */
export interface HoverCardProps extends React.ComponentProps<typeof HoverCardPrimitive.Root> {}

/**
 * HoverCardTrigger component props interface
 * Extends Radix UI HoverCardTrigger primitive props
 */
export interface HoverCardTriggerProps extends React.ComponentProps<typeof HoverCardPrimitive.Trigger> {}

/**
 * HoverCardContent component props interface
 * Extends Radix UI HoverCardContent primitive props
 */
export interface HoverCardContentProps extends React.ComponentProps<typeof HoverCardPrimitive.Content> {
  align?: "start" | "center" | "end"
  sideOffset?: number
}

/**
 * HoverCard component - A hover card for displaying additional content
 * 
 * Provides an accessible hover card that appears when hovering over a trigger element.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - HoverCard props including openDelay, closeDelay, and standard Radix UI HoverCard attributes
 * @returns A HoverCard component
 * 
 * @example
 * ```tsx
 * <HoverCard>
 *   <HoverCardTrigger>Hover me</HoverCardTrigger>
 *   <HoverCardContent>Additional information</HoverCardContent>
 * </HoverCard>
 * ```
 */
function HoverCard({
  ...props
}: HoverCardProps): React.ReactElement {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

/**
 * HoverCardTrigger component - The element that triggers the hover card
 * @param props - HoverCardTrigger props
 * @returns A HoverCardTrigger component
 */
function HoverCardTrigger({
  ...props
}: HoverCardTriggerProps): React.ReactElement {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

/**
 * HoverCardContent component - The content container of the hover card
 * @param props - HoverCardContent props including align and sideOffset
 * @returns A HoverCardContent component
 */
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: HoverCardContentProps): React.ReactElement {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
