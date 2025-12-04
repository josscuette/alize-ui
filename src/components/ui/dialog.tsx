"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { states } from "../../foundation"

/**
 * Dialog component props interface
 * Extends Radix UI Dialog primitive props
 */
export interface DialogProps extends React.ComponentProps<typeof DialogPrimitive.Root> {}

/**
 * DialogTrigger component props interface
 * Extends Radix UI DialogTrigger primitive props
 */
export interface DialogTriggerProps extends React.ComponentProps<typeof DialogPrimitive.Trigger> {}

/**
 * DialogPortal component props interface
 * Extends Radix UI DialogPortal primitive props
 */
export interface DialogPortalProps extends React.ComponentProps<typeof DialogPrimitive.Portal> {}

/**
 * DialogClose component props interface
 * Extends Radix UI DialogClose primitive props
 */
export interface DialogCloseProps extends React.ComponentProps<typeof DialogPrimitive.Close> {}

/**
 * DialogOverlay component props interface
 * Extends Radix UI DialogOverlay primitive props
 */
export interface DialogOverlayProps extends React.ComponentProps<typeof DialogPrimitive.Overlay> {}

/**
 * DialogContent component props interface
 * Extends Radix UI DialogContent primitive props and adds showCloseButton prop
 */
export interface DialogContentProps extends React.ComponentProps<typeof DialogPrimitive.Content> {
  showCloseButton?: boolean
}

/**
 * DialogHeader component props interface
 * Extends native div element props
 */
export interface DialogHeaderProps extends React.ComponentProps<"div"> {}

/**
 * DialogFooter component props interface
 * Extends native div element props
 */
export interface DialogFooterProps extends React.ComponentProps<"div"> {}

/**
 * DialogTitle component props interface
 * Extends Radix UI DialogTitle primitive props
 */
export interface DialogTitleProps extends React.ComponentProps<typeof DialogPrimitive.Title> {}

/**
 * DialogDescription component props interface
 * Extends Radix UI DialogDescription primitive props
 */
export interface DialogDescriptionProps extends React.ComponentProps<typeof DialogPrimitive.Description> {}

/**
 * Dialog component - A modal dialog
 * 
 * Provides an accessible modal dialog for displaying content.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - Dialog props including open, onOpenChange, and standard Radix UI Dialog attributes
 * @returns A Dialog component
 * 
 * @example
 * ```tsx
 * <Dialog>
 *   <DialogTrigger>Open Dialog</DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Title</DialogTitle>
 *       <DialogDescription>Description</DialogDescription>
 *     </DialogHeader>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
const Dialog = React.memo(function Dialog({
  ...props
}: DialogProps): React.ReactElement {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
})

/**
 * DialogTrigger component - The element that opens the dialog
 * @param props - DialogTrigger props
 * @returns A DialogTrigger component
 */
function DialogTrigger({
  ...props
}: DialogTriggerProps): React.ReactElement {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

/**
 * DialogPortal component - Portals the dialog content
 * @param props - DialogPortal props
 * @returns A DialogPortal component
 */
function DialogPortal({
  ...props
}: DialogPortalProps): React.ReactElement {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

/**
 * DialogClose component - The element that closes the dialog
 * @param props - DialogClose props
 * @returns A DialogClose component
 */
function DialogClose({
  ...props
}: DialogCloseProps): React.ReactElement {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

/**
 * DialogOverlay component - The backdrop overlay for the dialog
 * @param props - DialogOverlay props
 * @returns A DialogOverlay component
 */
function DialogOverlay({
  className,
  ...props
}: DialogOverlayProps): React.ReactElement {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/**
 * DialogContent component - The main content container of the dialog
 * @param props - DialogContent props including showCloseButton
 * @returns A DialogContent component
 */
const DialogContent = React.memo(function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps): React.ReactElement {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className={cn(
              // Layout
              "absolute top-4 right-4 rounded-xs opacity-70 transition-opacity",
              // Hover state
              "hover:opacity-100",
              // Focus state
              "ring-offset-background focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-hidden",
              // Open state
              states.dataStateOpen,
              // Pressed state
              states.pressed,
              // Disabled state
              states.disabled,
              states.disabledCursor,
              // SVG handling
              "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            )}
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
})

function DialogHeader({ className, ...props }: React.ComponentProps<"div">): React.ReactElement {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

/**
 * DialogFooter component - The footer section of the dialog
 * @param props - DialogFooter props
 * @returns A DialogFooter component
 */
function DialogFooter({ className, ...props }: DialogFooterProps): React.ReactElement {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * DialogTitle component - The title of the dialog
 * @param props - DialogTitle props
 * @returns A DialogTitle component
 */
function DialogTitle({
  className,
  ...props
}: DialogTitleProps): React.ReactElement {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-normal", className)}
      {...props}
    />
  )
}

/**
 * DialogDescription component - The description text of the dialog
 * @param props - DialogDescription props
 * @returns A DialogDescription component
 */
function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps): React.ReactElement {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
