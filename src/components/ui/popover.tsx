"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "../../lib/utils"

/**
 * Popover component props interface
 * Extends Radix UI Popover primitive props
 */
export interface PopoverProps extends React.ComponentProps<typeof PopoverPrimitive.Root> {}

/**
 * PopoverTrigger component props interface
 * Extends Radix UI PopoverTrigger primitive props
 */
export interface PopoverTriggerProps extends React.ComponentProps<typeof PopoverPrimitive.Trigger> {}

/**
 * PopoverContent component props interface
 * Extends Radix UI PopoverContent primitive props
 */
export interface PopoverContentProps extends React.ComponentProps<typeof PopoverPrimitive.Content> {
  align?: "start" | "center" | "end"
  sideOffset?: number
}

/**
 * PopoverAnchor component props interface
 * Extends Radix UI PopoverAnchor primitive props
 */
export interface PopoverAnchorProps extends React.ComponentProps<typeof PopoverPrimitive.Anchor> {}

/**
 * Popover component - A popover for displaying content
 * 
 * Provides an accessible popover for displaying additional content.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - Popover props including open, onOpenChange, and standard Radix UI Popover attributes
 * @returns A Popover component
 * 
 * @example
 * ```tsx
 * <Popover>
 *   <PopoverTrigger>Open</PopoverTrigger>
 *   <PopoverContent>Content</PopoverContent>
 * </Popover>
 * ```
 */
function Popover({
  ...props
}: PopoverProps): React.ReactElement {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

/**
 * PopoverTrigger component - The element that opens the popover
 * @param props - PopoverTrigger props
 * @returns A PopoverTrigger component
 */
function PopoverTrigger({
  ...props
}: PopoverTriggerProps): React.ReactElement {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

/**
 * PopoverContent component - The content container of the popover
 * @param props - PopoverContent props including align and sideOffset
 * @returns A PopoverContent component
 */
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: PopoverContentProps): React.ReactElement {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

/**
 * PopoverAnchor component - The anchor element for the popover
 * @param props - PopoverAnchor props
 * @returns A PopoverAnchor component
 */
function PopoverAnchor({
  ...props
}: PopoverAnchorProps): React.ReactElement {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
