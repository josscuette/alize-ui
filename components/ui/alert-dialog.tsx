"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "../../lib/utils"
import { buttonVariants } from "./button"

/**
 * AlertDialog component props interface
 * Extends Radix UI AlertDialog primitive props
 */
export interface AlertDialogProps extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {}

/**
 * AlertDialogTrigger component props interface
 * Extends Radix UI AlertDialogTrigger primitive props
 */
export interface AlertDialogTriggerProps extends React.ComponentProps<typeof AlertDialogPrimitive.Trigger> {}

/**
 * AlertDialogPortal component props interface
 * Extends Radix UI AlertDialogPortal primitive props
 */
export interface AlertDialogPortalProps extends React.ComponentProps<typeof AlertDialogPrimitive.Portal> {}

/**
 * AlertDialogOverlay component props interface
 * Extends Radix UI AlertDialogOverlay primitive props
 */
export interface AlertDialogOverlayProps extends React.ComponentProps<typeof AlertDialogPrimitive.Overlay> {}

/**
 * AlertDialogContent component props interface
 * Extends Radix UI AlertDialogContent primitive props
 */
export interface AlertDialogContentProps extends React.ComponentProps<typeof AlertDialogPrimitive.Content> {}

/**
 * AlertDialogHeader component props interface
 * Extends native div element props
 */
export interface AlertDialogHeaderProps extends React.ComponentProps<"div"> {}

/**
 * AlertDialogFooter component props interface
 * Extends native div element props
 */
export interface AlertDialogFooterProps extends React.ComponentProps<"div"> {}

/**
 * AlertDialogTitle component props interface
 * Extends Radix UI AlertDialogTitle primitive props
 */
export interface AlertDialogTitleProps extends React.ComponentProps<typeof AlertDialogPrimitive.Title> {}

/**
 * AlertDialogDescription component props interface
 * Extends Radix UI AlertDialogDescription primitive props
 */
export interface AlertDialogDescriptionProps extends React.ComponentProps<typeof AlertDialogPrimitive.Description> {}

/**
 * AlertDialogAction component props interface
 * Extends Radix UI AlertDialogAction primitive props
 */
export interface AlertDialogActionProps extends React.ComponentProps<typeof AlertDialogPrimitive.Action> {}

/**
 * AlertDialogCancel component props interface
 * Extends Radix UI AlertDialogCancel primitive props
 */
export interface AlertDialogCancelProps extends React.ComponentProps<typeof AlertDialogPrimitive.Cancel> {}

/**
 * AlertDialog component - A modal dialog for important confirmations
 * 
 * Provides an accessible alert dialog for critical confirmations and actions.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - AlertDialog props including open, onOpenChange, and standard Radix UI AlertDialog attributes
 * @returns An AlertDialog component
 * 
 * @example
 * ```tsx
 * <AlertDialog>
 *   <AlertDialogTrigger>Open</AlertDialogTrigger>
 *   <AlertDialogContent>
 *     <AlertDialogHeader>
 *       <AlertDialogTitle>Are you sure?</AlertDialogTitle>
 *       <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
 *     </AlertDialogHeader>
 *     <AlertDialogFooter>
 *       <AlertDialogCancel>Cancel</AlertDialogCancel>
 *       <AlertDialogAction>Continue</AlertDialogAction>
 *     </AlertDialogFooter>
 *   </AlertDialogContent>
 * </AlertDialog>
 * ```
 */
function AlertDialog({
  ...props
}: AlertDialogProps): React.ReactElement {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

/**
 * AlertDialogTrigger component - The element that opens the alert dialog
 * @param props - AlertDialogTrigger props
 * @returns An AlertDialogTrigger component
 */
function AlertDialogTrigger({
  ...props
}: AlertDialogTriggerProps): React.ReactElement {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

/**
 * AlertDialogPortal component - Portals the alert dialog content
 * @param props - AlertDialogPortal props
 * @returns An AlertDialogPortal component
 */
function AlertDialogPortal({
  ...props
}: AlertDialogPortalProps): React.ReactElement {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

/**
 * AlertDialogOverlay component - The backdrop overlay for the alert dialog
 * @param props - AlertDialogOverlay props
 * @returns An AlertDialogOverlay component
 */
function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogOverlayProps): React.ReactElement {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/**
 * AlertDialogContent component - The main content container of the alert dialog
 * @param props - AlertDialogContent props
 * @returns An AlertDialogContent component
 */
function AlertDialogContent({
  className,
  ...props
}: AlertDialogContentProps): React.ReactElement {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

/**
 * AlertDialogHeader component - The header section of the alert dialog
 * @param props - AlertDialogHeader props
 * @returns An AlertDialogHeader component
 */
function AlertDialogHeader({
  className,
  ...props
}: AlertDialogHeaderProps): React.ReactElement {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

/**
 * AlertDialogFooter component - The footer section of the alert dialog
 * @param props - AlertDialogFooter props
 * @returns An AlertDialogFooter component
 */
function AlertDialogFooter({
  className,
  ...props
}: AlertDialogFooterProps): React.ReactElement {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * AlertDialogTitle component - The title of the alert dialog
 * @param props - AlertDialogTitle props
 * @returns An AlertDialogTitle component
 */
function AlertDialogTitle({
  className,
  ...props
}: AlertDialogTitleProps): React.ReactElement {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-normal", className)}
      {...props}
    />
  )
}

/**
 * AlertDialogDescription component - The description text of the alert dialog
 * @param props - AlertDialogDescription props
 * @returns An AlertDialogDescription component
 */
function AlertDialogDescription({
  className,
  ...props
}: AlertDialogDescriptionProps): React.ReactElement {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * AlertDialogAction component - The action button in the alert dialog
 * @param props - AlertDialogAction props
 * @returns An AlertDialogAction component
 */
function AlertDialogAction({
  className,
  ...props
}: AlertDialogActionProps): React.ReactElement {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}

/**
 * AlertDialogCancel component - The cancel button in the alert dialog
 * @param props - AlertDialogCancel props
 * @returns An AlertDialogCancel component
 */
function AlertDialogCancel({
  className,
  ...props
}: AlertDialogCancelProps): React.ReactElement {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
