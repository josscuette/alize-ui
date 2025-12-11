"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "../../lib/utils"
import { states, animation } from "../../foundation"

/**
 * Tabs variant type
 */
export type TabsVariant = "pills" | "underline"

/**
 * Context for sharing variant and fill between TabsList and TabsTrigger
 */
interface TabsContextValue {
  variant: TabsVariant
  fill: boolean
}

const TabsContext = React.createContext<TabsContextValue>({
  variant: "pills",
  fill: false,
})

/**
 * Tabs component props interface
 * Extends Radix UI Tabs primitive props
 */
export interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {}

/**
 * TabsList component props interface
 * Extends Radix UI TabsList primitive props
 */
export interface TabsListProps extends React.ComponentProps<typeof TabsPrimitive.List> {
  /** Visual variant of the tabs */
  variant?: TabsVariant
  /** 
   * When true, the tabs stretch to fill the parent container height.
   * Useful when placing tabs in a header or toolbar.
   * The border will merge with the container's border.
   */
  fill?: boolean
}

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
 * // Pills variant (default)
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 * 
 * // Underline variant
 * <Tabs defaultValue="tab1">
 *   <TabsList variant="underline">
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 * 
 * // Underline variant with fill (in a container)
 * <header className="h-16 border-b">
 *   <Tabs defaultValue="tab1">
 *     <TabsList variant="underline" fill>
 *       <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *       <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *     </TabsList>
 *   </Tabs>
 * </header>
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
 * @param props - TabsList props including variant and fill
 * @returns A TabsList component
 */
function TabsList({
  className,
  variant = "pills",
  fill = false,
  ...props
}: TabsListProps): React.ReactElement {
  return (
    <TabsContext.Provider value={{ variant, fill }}>
      <TabsPrimitive.List
        data-slot="tabs-list"
        data-variant={variant}
        data-fill={fill ? "true" : undefined}
        className={cn(
          // Base styles
          "inline-flex w-fit items-center",
          // Pills variant
          variant === "pills" && [
            "h-9 gap-1 rounded-lg bg-muted p-[3px]",
            "text-muted-foreground",
          ],
          // Underline variant
          variant === "underline" && [
            "gap-4 border-b border-[var(--semantic-stroke-subdued)]",
            "text-muted-foreground",
            // Height: fixed by default, full when fill
            fill ? "h-full -mb-px" : "h-10",
          ],
          className
        )}
        {...props}
      />
    </TabsContext.Provider>
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
  const { variant, fill } = React.useContext(TabsContext)
  
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // Base layout
        "inline-flex items-center justify-center gap-1.5 text-sm font-medium whitespace-nowrap",
        // Focus state
        states.focusRing,
        // Pressed state
        states.pressed,
        // Disabled state
        states.disabled,
        states.disabledCursor,
        // SVG handling
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // Transition
        animation.transitionFormControl,
        // Pills variant styles
        variant === "pills" && [
          "h-[calc(100%-1px)] rounded-md border border-transparent px-2 py-1",
          "text-foreground dark:text-muted-foreground",
          // Active state
          states.tabActive,
          "dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-input/30",
          // Focus
          "focus-visible:border-ring focus-visible:outline-1",
        ],
        // Underline variant styles
        variant === "underline" && [
          "relative",
          "text-muted-foreground",
          // Height handling
          fill ? "h-full" : "h-full pb-2.5",
          // Hover
          "hover:text-foreground",
          // Active state - bottom border indicator (overlaps the border for seamless look)
          "data-[state=active]:text-foreground",
          "after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-px after:z-10",
          "after:bg-transparent data-[state=active]:after:bg-[var(--semantic-stroke-interaction-default)]",
          "after:transition-colors",
          // Focus
          "focus-visible:outline-offset-2",
        ],
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
