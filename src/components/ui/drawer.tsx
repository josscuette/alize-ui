"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "../../lib/utils"

/**
 * Drawer component props interface
 * Extends vaul Drawer Root props
 */
export type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root>

/**
 * DrawerTrigger component props interface
 * Extends vaul Drawer Trigger props
 */
export interface DrawerTriggerProps extends React.ComponentProps<typeof DrawerPrimitive.Trigger> {}

/**
 * DrawerPortal component props interface
 * Extends vaul Drawer Portal props
 */
export interface DrawerPortalProps extends React.ComponentProps<typeof DrawerPrimitive.Portal> {}

/**
 * DrawerClose component props interface
 * Extends vaul Drawer Close props
 */
export interface DrawerCloseProps extends React.ComponentProps<typeof DrawerPrimitive.Close> {}

/**
 * DrawerOverlay component props interface
 * Extends vaul Drawer Overlay props
 */
export interface DrawerOverlayProps extends React.ComponentProps<typeof DrawerPrimitive.Overlay> {}

/**
 * DrawerContent component props interface
 * Extends vaul Drawer Content props
 */
export interface DrawerContentProps extends React.ComponentProps<typeof DrawerPrimitive.Content> {}

/**
 * DrawerHeader component props interface
 * Extends native div element props
 */
export interface DrawerHeaderProps extends React.ComponentProps<"div"> {}

/**
 * DrawerFooter component props interface
 * Extends native div element props
 */
export interface DrawerFooterProps extends React.ComponentProps<"div"> {}

/**
 * DrawerTitle component props interface
 * Extends vaul Drawer Title props
 */
export interface DrawerTitleProps extends React.ComponentProps<typeof DrawerPrimitive.Title> {}

/**
 * DrawerDescription component props interface
 * Extends vaul Drawer Description props
 */
export interface DrawerDescriptionProps extends React.ComponentProps<typeof DrawerPrimitive.Description> {}

/**
 * Drawer component - A drawer/sheet component
 * 
 * Provides a drawer component that slides in from the edges of the screen.
 * Built on vaul library for smooth animations.
 * 
 * @param props - Drawer props including open, onOpenChange, and standard vaul Drawer attributes
 * @returns A Drawer component
 * 
 * @example
 * ```tsx
 * <Drawer>
 *   <DrawerTrigger>Open</DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Title</DrawerTitle>
 *       <DrawerDescription>Description</DrawerDescription>
 *     </DrawerHeader>
 *   </DrawerContent>
 * </Drawer>
 * ```
 */
function Drawer({
  ...props
}: DrawerProps): React.ReactElement {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

/**
 * DrawerTrigger component - A trigger button for the drawer
 * @param props - DrawerTrigger props
 * @returns A DrawerTrigger component
 */
function DrawerTrigger({
  ...props
}: DrawerTriggerProps): React.ReactElement {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

/**
 * DrawerPortal component - A portal for drawer content
 * @param props - DrawerPortal props
 * @returns A DrawerPortal component
 */
function DrawerPortal({
  ...props
}: DrawerPortalProps): React.ReactElement {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

/**
 * DrawerClose component - A close button for the drawer
 * @param props - DrawerClose props
 * @returns A DrawerClose component
 */
function DrawerClose({
  ...props
}: DrawerCloseProps): React.ReactElement {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

/**
 * DrawerOverlay component - An overlay backdrop for the drawer
 * @param props - DrawerOverlay props
 * @returns A DrawerOverlay component
 */
function DrawerOverlay({
  className,
  ...props
}: DrawerOverlayProps): React.ReactElement {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/**
 * DrawerContent component - The main content area of the drawer
 * @param props - DrawerContent props
 * @returns A DrawerContent component
 */
function DrawerContent({
  className,
  children,
  ...props
}: DrawerContentProps): React.ReactElement {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

/**
 * DrawerHeader component - A header section for the drawer
 * @param props - DrawerHeader props
 * @returns A DrawerHeader component
 */
function DrawerHeader({ className, ...props }: DrawerHeaderProps): React.ReactElement {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      )}
      {...props}
    />
  )
}

/**
 * DrawerFooter component - A footer section for the drawer
 * @param props - DrawerFooter props
 * @returns A DrawerFooter component
 */
function DrawerFooter({ className, ...props }: DrawerFooterProps): React.ReactElement {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

/**
 * DrawerTitle component - A title for the drawer
 * @param props - DrawerTitle props
 * @returns A DrawerTitle component
 */
function DrawerTitle({
  className,
  ...props
}: DrawerTitleProps): React.ReactElement {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

/**
 * DrawerDescription component - A description for the drawer
 * @param props - DrawerDescription props
 * @returns A DrawerDescription component
 */
function DrawerDescription({
  className,
  ...props
}: DrawerDescriptionProps): React.ReactElement {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
