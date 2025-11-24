"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { MaterialSymbol } from "../material-symbol"

import { cn } from "../../lib/utils"

/**
 * Sheet component props interface
 * Extends Radix UI Dialog (Sheet) primitive props
 */
export interface SheetProps extends React.ComponentProps<typeof SheetPrimitive.Root> {}

/**
 * SheetTrigger component props interface
 * Extends Radix UI DialogTrigger primitive props
 */
export interface SheetTriggerProps extends React.ComponentProps<typeof SheetPrimitive.Trigger> {}

/**
 * SheetClose component props interface
 * Extends Radix UI DialogClose primitive props
 */
export interface SheetCloseProps extends React.ComponentProps<typeof SheetPrimitive.Close> {}

/**
 * SheetPortal component props interface
 * Extends Radix UI DialogPortal primitive props
 */
export interface SheetPortalProps extends React.ComponentProps<typeof SheetPrimitive.Portal> {}

/**
 * SheetOverlay component props interface
 * Extends Radix UI DialogOverlay primitive props
 */
export interface SheetOverlayProps extends React.ComponentProps<typeof SheetPrimitive.Overlay> {}

/**
 * SheetContent component props interface
 * Extends Radix UI DialogContent primitive props and adds side prop
 */
export interface SheetContentProps extends React.ComponentProps<typeof SheetPrimitive.Content> {
  side?: "top" | "right" | "bottom" | "left"
}

/**
 * SheetHeader component props interface
 * Extends native div element props
 */
export interface SheetHeaderProps extends React.ComponentProps<"div"> {}

/**
 * SheetFooter component props interface
 * Extends native div element props
 */
export interface SheetFooterProps extends React.ComponentProps<"div"> {}

/**
 * SheetTitle component props interface
 * Extends Radix UI DialogTitle primitive props
 */
export interface SheetTitleProps extends React.ComponentProps<typeof SheetPrimitive.Title> {}

/**
 * SheetDescription component props interface
 * Extends Radix UI DialogDescription primitive props
 */
export interface SheetDescriptionProps extends React.ComponentProps<typeof SheetPrimitive.Description> {}

/**
 * Sheet component - A slide-over panel
 * 
 * Provides an accessible slide-over panel that appears from the side of the screen.
 * Built on Radix UI Dialog primitives for accessibility.
 * 
 * @param props - Sheet props including open, onOpenChange, and standard Radix UI Dialog attributes
 * @returns A Sheet component
 * 
 * @example
 * ```tsx
 * <Sheet>
 *   <SheetTrigger>Open</SheetTrigger>
 *   <SheetContent side="right">
 *     <SheetHeader>
 *       <SheetTitle>Title</SheetTitle>
 *       <SheetDescription>Description</SheetDescription>
 *     </SheetHeader>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
function Sheet({ ...props }: SheetProps): React.ReactElement {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

/**
 * SheetTrigger component - The element that opens the sheet
 * @param props - SheetTrigger props
 * @returns A SheetTrigger component
 */
function SheetTrigger({
  ...props
}: SheetTriggerProps): React.ReactElement {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

/**
 * SheetClose component - The element that closes the sheet
 * @param props - SheetClose props
 * @returns A SheetClose component
 */
function SheetClose({
  ...props
}: SheetCloseProps): React.ReactElement {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

/**
 * SheetPortal component - Portals the sheet content
 * @param props - SheetPortal props
 * @returns A SheetPortal component
 */
function SheetPortal({
  ...props
}: SheetPortalProps): React.ReactElement {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

/**
 * SheetOverlay component - The backdrop overlay for the sheet
 * @param props - SheetOverlay props
 * @returns A SheetOverlay component
 */
function SheetOverlay({
  className,
  ...props
}: SheetOverlayProps): React.ReactElement {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[55] bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/**
 * SheetContent component - The main content container of the sheet
 * @param props - SheetContent props including side
 * @returns A SheetContent component
 */
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: SheetContentProps): React.ReactElement {
  return (
    <SheetPortal>
      <SheetOverlay />
        <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-[60] flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        <SheetPrimitive.Title className="sr-only">
          Sheet
        </SheetPrimitive.Title>
        {children}
        <SheetPrimitive.Close className="absolute top-4 right-4 z-50 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none flex items-center justify-center size-8">
          <MaterialSymbol name="close" size={20} weight={300} className="text-muted-foreground" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

/**
 * SheetHeader component - The header section of the sheet
 * @param props - SheetHeader props
 * @returns A SheetHeader component
 */
function SheetHeader({ className, ...props }: SheetHeaderProps): React.ReactElement {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

/**
 * SheetFooter component - The footer section of the sheet
 * @param props - SheetFooter props
 * @returns A SheetFooter component
 */
function SheetFooter({ className, ...props }: SheetFooterProps): React.ReactElement {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

/**
 * SheetTitle component - The title of the sheet
 * @param props - SheetTitle props
 * @returns A SheetTitle component
 */
function SheetTitle({
  className,
  ...props
}: SheetTitleProps): React.ReactElement {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

/**
 * SheetDescription component - The description text of the sheet
 * @param props - SheetDescription props
 * @returns A SheetDescription component
 */
function SheetDescription({
  className,
  ...props
}: SheetDescriptionProps): React.ReactElement {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
