"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "../../lib/utils"
import { states, animation } from "../../foundation"

/**
 * Tabs component props interface
 * Extends Radix UI Tabs primitive props
 */
export interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {}

/**
 * TabsList component props interface
 * Extends Radix UI TabsList primitive props
 */
export interface TabsListProps extends React.ComponentProps<typeof TabsPrimitive.List> {}

/**
 * TabsTrigger component props interface
 * Extends Radix UI TabsTrigger primitive props
 */
export interface TabsTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger> {}

/**
 * TabsContent component props interface
 * Extends Radix UI TabsContent primitive props
 */
export interface TabsContentProps extends React.ComponentProps<typeof TabsPrimitive.Content> {}

/**
 * Tabs component - A tabbed interface
 * 
 * Provides a tabbed interface for organizing content into multiple panels.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - Tabs props including value, onValueChange, and standard Radix UI Tabs attributes
 * @returns A tabs container element
 * 
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 * ```
 */
function Tabs({
  className,
  ...props
}: TabsProps): React.ReactElement {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

/**
 * TabsList component - The container for tab triggers
 * @param props - TabsList props
 * @returns A TabsList component
 */
function TabsList({
  className,
  ...props
}: TabsListProps): React.ReactElement {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * TabsTrigger component - An individual tab trigger button
 * @param props - TabsTrigger props
 * @returns A TabsTrigger component
 */
function TabsTrigger({
  className,
  ...props
}: TabsTriggerProps): React.ReactElement {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // Layout
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap",
        // Colors
        "text-foreground dark:text-muted-foreground",
        // Active state using foundation
        states.tabActive,
        "dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-input/30",
        // Focus state
        states.focusRing,
        "focus-visible:border-ring focus-visible:outline-1",
        // Pressed state
        states.pressed,
        // Disabled state
        states.disabled,
        states.disabledCursor,
        // SVG handling
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // Transition
        animation.transitionFormControl,
        className
      )}
      {...props}
    />
  )
}

/**
 * TabsContent component - The content panel for a tab
 * @param props - TabsContent props
 * @returns A TabsContent component
 */
function TabsContent({
  className,
  ...props
}: TabsContentProps): React.ReactElement {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
