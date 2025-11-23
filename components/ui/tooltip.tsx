"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "../../lib/utils"

/**
 * TooltipProvider component props interface
 * Extends Radix UI TooltipProvider primitive props
 */
export interface TooltipProviderProps extends React.ComponentProps<typeof TooltipPrimitive.Provider> {}

/**
 * Tooltip component props interface
 * Extends Radix UI Tooltip primitive props
 */
export interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive.Root> {}

/**
 * TooltipTrigger component props interface
 * Extends Radix UI TooltipTrigger primitive props
 */
export interface TooltipTriggerProps extends React.ComponentProps<typeof TooltipPrimitive.Trigger> {}

/**
 * TooltipContent component props interface
 * Extends Radix UI TooltipContent primitive props
 */
export interface TooltipContentProps extends React.ComponentProps<typeof TooltipPrimitive.Content> {
  sideOffset?: number
}

/**
 * TooltipProvider component - Provides context for tooltips
 * 
 * Wraps the application or a section to provide tooltip context.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - TooltipProvider props including delayDuration
 * @returns A TooltipProvider component
 * 
 * @example
 * ```tsx
 * <TooltipProvider>
 *   <Tooltip>
 *     <TooltipTrigger>Hover me</TooltipTrigger>
 *     <TooltipContent>Tooltip text</TooltipContent>
 *   </Tooltip>
 * </TooltipProvider>
 * ```
 */
function TooltipProvider({
  delayDuration = 0,
  ...props
}: TooltipProviderProps): React.ReactElement {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

/**
 * Tooltip component - A tooltip wrapper that includes TooltipProvider
 * 
 * @param props - Tooltip props
 * @returns A Tooltip component
 */
function Tooltip({
  ...props
}: TooltipProps): React.ReactElement {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

/**
 * TooltipTrigger component - The element that triggers the tooltip
 * @param props - TooltipTrigger props
 * @returns A TooltipTrigger component
 */
function TooltipTrigger({
  ...props
}: TooltipTriggerProps): React.ReactElement {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

/**
 * TooltipContent component - The content displayed in the tooltip
 * @param props - TooltipContent props including sideOffset
 * @returns A TooltipContent component
 */
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: TooltipContentProps): React.ReactElement {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
