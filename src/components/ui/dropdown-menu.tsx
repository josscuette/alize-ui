"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { states } from "../../foundation"

/**
 * DropdownMenu component props interface
 * Extends Radix UI DropdownMenu primitive props
 */
export interface DropdownMenuProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Root> {}

/**
 * DropdownMenuPortal component props interface
 * Extends Radix UI DropdownMenuPortal primitive props
 */
export interface DropdownMenuPortalProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Portal> {}

/**
 * DropdownMenuTrigger component props interface
 * Extends Radix UI DropdownMenuTrigger primitive props
 */
export interface DropdownMenuTriggerProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Trigger> {}

/**
 * DropdownMenuContent component props interface
 * Extends Radix UI DropdownMenuContent primitive props
 */
export interface DropdownMenuContentProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Content> {
  sideOffset?: number
}

/**
 * DropdownMenuGroup component props interface
 * Extends Radix UI DropdownMenuGroup primitive props
 */
export interface DropdownMenuGroupProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Group> {}

/**
 * DropdownMenuItem component props interface
 * Extends Radix UI DropdownMenuItem primitive props and adds inset and variant props
 */
export interface DropdownMenuItemProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Item> {
  inset?: boolean
  variant?: "default" | "destructive"
}

/**
 * DropdownMenuCheckboxItem component props interface
 * Extends Radix UI DropdownMenuCheckboxItem primitive props
 */
export interface DropdownMenuCheckboxItemProps extends React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> {}

/**
 * DropdownMenuRadioGroup component props interface
 * Extends Radix UI DropdownMenuRadioGroup primitive props
 */
export interface DropdownMenuRadioGroupProps extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup> {}

/**
 * DropdownMenuRadioItem component props interface
 * Extends Radix UI DropdownMenuRadioItem primitive props
 */
export interface DropdownMenuRadioItemProps extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> {}

/**
 * DropdownMenuLabel component props interface
 * Extends Radix UI DropdownMenuLabel primitive props and adds inset prop
 */
export interface DropdownMenuLabelProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Label> {
  inset?: boolean
}

/**
 * DropdownMenuSeparator component props interface
 * Extends Radix UI DropdownMenuSeparator primitive props
 */
export interface DropdownMenuSeparatorProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Separator> {}

/**
 * DropdownMenuShortcut component props interface
 * Extends native span element props
 */
export interface DropdownMenuShortcutProps extends React.ComponentProps<"span"> {}

/**
 * DropdownMenuSub component props interface
 * Extends Radix UI DropdownMenuSub primitive props
 */
export interface DropdownMenuSubProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Sub> {}

/**
 * DropdownMenuSubTrigger component props interface
 * Extends Radix UI DropdownMenuSubTrigger primitive props and adds inset prop
 */
export interface DropdownMenuSubTriggerProps extends React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {
  inset?: boolean
}

/**
 * DropdownMenuSubContent component props interface
 * Extends Radix UI DropdownMenuSubContent primitive props
 */
export interface DropdownMenuSubContentProps extends React.ComponentProps<typeof DropdownMenuPrimitive.SubContent> {}

/**
 * DropdownMenu component - A dropdown menu
 * 
 * Provides an accessible dropdown menu for displaying actions and options.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - DropdownMenu props including open, onOpenChange, and standard Radix UI DropdownMenu attributes
 * @returns A DropdownMenu component
 * 
 * @example
 * ```tsx
 * <DropdownMenu>
 *   <DropdownMenuTrigger>Open</DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuItem>Item 1</DropdownMenuItem>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */
const DropdownMenu = React.memo(function DropdownMenu({
  ...props
}: DropdownMenuProps): React.ReactElement {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
})

/**
 * DropdownMenuPortal component - Portals the dropdown menu content
 * @param props - DropdownMenuPortal props
 * @returns A DropdownMenuPortal component
 */
function DropdownMenuPortal({
  ...props
}: DropdownMenuPortalProps): React.ReactElement {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

/**
 * DropdownMenuTrigger component - The element that opens the dropdown menu
 * @param props - DropdownMenuTrigger props
 * @returns A DropdownMenuTrigger component
 */
function DropdownMenuTrigger({
  ...props
}: DropdownMenuTriggerProps): React.ReactElement {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

/**
 * DropdownMenuContent component - The content container of the dropdown menu
 * @param props - DropdownMenuContent props including sideOffset
 * @returns A DropdownMenuContent component
 */
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps): React.ReactElement {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

/**
 * DropdownMenuGroup component - A group of related dropdown menu items
 * @param props - DropdownMenuGroup props
 * @returns A DropdownMenuGroup component
 */
function DropdownMenuGroup({
  ...props
}: DropdownMenuGroupProps): React.ReactElement {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

/**
 * DropdownMenuItem component - An individual selectable item in the dropdown menu
 * @param props - DropdownMenuItem props including inset and variant
 * @returns A DropdownMenuItem component
 */
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: DropdownMenuItemProps): React.ReactElement {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        // Layout
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm select-none",
        // Focus state using foundation
        states.focusAccent,
        states.pressed,
        states.outlineHidden,
        // Destructive variant
        "data-[variant=destructive]:text-[var(--destructive-foreground)] data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-[var(--destructive-foreground)] data-[variant=destructive]:*:[svg]:!text-[var(--destructive-foreground)]",
        // SVG handling
        "[&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // Disabled state
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
        // Inset
        "data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

/**
 * DropdownMenuCheckboxItem component - A checkbox item in the dropdown menu
 * @param props - DropdownMenuCheckboxItem props
 * @returns A DropdownMenuCheckboxItem component
 */
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps): React.ReactElement {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        // Layout
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm select-none",
        // Focus state using foundation
        states.focusAccent,
        states.pressed,
        states.outlineHidden,
        // SVG handling
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // Disabled state
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

/**
 * DropdownMenuRadioGroup component - A radio group within the dropdown menu
 * @param props - DropdownMenuRadioGroup props
 * @returns A DropdownMenuRadioGroup component
 */
function DropdownMenuRadioGroup({
  ...props
}: DropdownMenuRadioGroupProps): React.ReactElement {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

/**
 * DropdownMenuRadioItem component - A radio item in the dropdown menu
 * @param props - DropdownMenuRadioItem props
 * @returns A DropdownMenuRadioItem component
 */
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps): React.ReactElement {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        // Layout
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm select-none",
        // Focus state using foundation
        states.focusAccent,
        states.pressed,
        states.outlineHidden,
        // SVG handling
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // Disabled state
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

/**
 * DropdownMenuLabel component - A non-interactive label in the dropdown menu
 * @param props - DropdownMenuLabel props including inset
 * @returns A DropdownMenuLabel component
 */
function DropdownMenuLabel({
  className,
  inset,
  ...props
}: DropdownMenuLabelProps): React.ReactElement {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

/**
 * DropdownMenuSeparator component - A visual separator in the dropdown menu
 * @param props - DropdownMenuSeparator props
 * @returns A DropdownMenuSeparator component
 */
function DropdownMenuSeparator({
  className,
  ...props
}: DropdownMenuSeparatorProps): React.ReactElement {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

/**
 * DropdownMenuShortcut component - A keyboard shortcut indicator
 * @param props - DropdownMenuShortcut props
 * @returns A DropdownMenuShortcut component
 */
function DropdownMenuShortcut({
  className,
  ...props
}: DropdownMenuShortcutProps): React.ReactElement {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

/**
 * DropdownMenuSub component - A submenu container
 * @param props - DropdownMenuSub props
 * @returns A DropdownMenuSub component
 */
function DropdownMenuSub({
  ...props
}: DropdownMenuSubProps): React.ReactElement {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

/**
 * DropdownMenuSubTrigger component - The trigger for a submenu
 * @param props - DropdownMenuSubTrigger props including inset
 * @returns A DropdownMenuSubTrigger component
 */
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: DropdownMenuSubTriggerProps): React.ReactElement {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        // Layout
        "flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm select-none",
        // Focus & open state using foundation
        states.focusAccent,
        states.dataStateOpen,
        states.pressed,
        states.outlineHidden,
        // SVG handling
        "[&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // Inset
        "data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

/**
 * DropdownMenuSubContent component - The content container of a submenu
 * @param props - DropdownMenuSubContent props
 * @returns A DropdownMenuSubContent component
 */
function DropdownMenuSubContent({
  className,
  ...props
}: DropdownMenuSubContentProps): React.ReactElement {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
