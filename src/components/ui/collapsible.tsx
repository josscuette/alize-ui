"use client"

import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

/**
 * Collapsible component props interface
 * Extends Radix UI Collapsible primitive props
 */
export interface CollapsibleProps extends React.ComponentProps<typeof CollapsiblePrimitive.Root> {}

/**
 * CollapsibleTrigger component props interface
 * Extends Radix UI CollapsibleTrigger primitive props
 */
export interface CollapsibleTriggerProps extends React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger> {}

/**
 * CollapsibleContent component props interface
 * Extends Radix UI CollapsibleContent primitive props
 */
export interface CollapsibleContentProps extends React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent> {}

/**
 * Collapsible component - A collapsible content section
 * 
 * Provides an accessible collapsible section that can be toggled open/closed.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - Collapsible props including open, onOpenChange, and standard Radix UI Collapsible attributes
 * @returns A Collapsible component
 * 
 * @example
 * ```tsx
 * <Collapsible>
 *   <CollapsibleTrigger>Toggle</CollapsibleTrigger>
 *   <CollapsibleContent>Content</CollapsibleContent>
 * </Collapsible>
 * ```
 */
function Collapsible({
  ...props
}: CollapsibleProps): React.ReactElement {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

/**
 * CollapsibleTrigger component - The element that toggles the collapsible
 * @param props - CollapsibleTrigger props
 * @returns A CollapsibleTrigger component
 */
function CollapsibleTrigger({
  ...props
}: CollapsibleTriggerProps): React.ReactElement {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

/**
 * CollapsibleContent component - The collapsible content
 * @param props - CollapsibleContent props
 * @returns A CollapsibleContent component
 */
function CollapsibleContent({
  ...props
}: CollapsibleContentProps): React.ReactElement {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
