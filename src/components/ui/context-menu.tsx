"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "../../lib/utils"

/**
 * ContextMenu component props interface
 * Extends Radix UI ContextMenu primitive props
 */
export interface ContextMenuProps extends React.ComponentProps<typeof ContextMenuPrimitive.Root> {}

/**
 * ContextMenuTrigger component props interface
 * Extends Radix UI ContextMenuTrigger primitive props
 */
export interface ContextMenuTriggerProps extends React.ComponentProps<typeof ContextMenuPrimitive.Trigger> {}

/**
 * ContextMenuContent component props interface
 * Extends Radix UI ContextMenuContent primitive props
 */
export interface ContextMenuContentProps extends React.ComponentProps<typeof ContextMenuPrimitive.Content> {}

/**
 * ContextMenuItem component props interface
 * Extends Radix UI ContextMenuItem primitive props and adds inset and variant props
 */
export interface ContextMenuItemProps extends React.ComponentProps<typeof ContextMenuPrimitive.Item> {
  inset?: boolean
  variant?: "default" | "destructive"
}

/**
 * ContextMenuCheckboxItem component props interface
 * Extends Radix UI ContextMenuCheckboxItem primitive props
 */
export interface ContextMenuCheckboxItemProps extends React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem> {}

/**
 * ContextMenuRadioItem component props interface
 * Extends Radix UI ContextMenuRadioItem primitive props
 */
export interface ContextMenuRadioItemProps extends React.ComponentProps<typeof ContextMenuPrimitive.RadioItem> {}

/**
 * ContextMenuLabel component props interface
 * Extends Radix UI ContextMenuLabel primitive props and adds inset prop
 */
export interface ContextMenuLabelProps extends React.ComponentProps<typeof ContextMenuPrimitive.Label> {
  inset?: boolean
}

/**
 * ContextMenuSeparator component props interface
 * Extends Radix UI ContextMenuSeparator primitive props
 */
export interface ContextMenuSeparatorProps extends React.ComponentProps<typeof ContextMenuPrimitive.Separator> {}

/**
 * ContextMenuShortcut component props interface
 * Extends native span element props
 */
export interface ContextMenuShortcutProps extends React.ComponentProps<"span"> {}

/**
 * ContextMenuGroup component props interface
 * Extends Radix UI ContextMenuGroup primitive props
 */
export interface ContextMenuGroupProps extends React.ComponentProps<typeof ContextMenuPrimitive.Group> {}

/**
 * ContextMenuPortal component props interface
 * Extends Radix UI ContextMenuPortal primitive props
 */
export interface ContextMenuPortalProps extends React.ComponentProps<typeof ContextMenuPrimitive.Portal> {}

/**
 * ContextMenuSub component props interface
 * Extends Radix UI ContextMenuSub primitive props
 */
export interface ContextMenuSubProps extends React.ComponentProps<typeof ContextMenuPrimitive.Sub> {}

/**
 * ContextMenuSubTrigger component props interface
 * Extends Radix UI ContextMenuSubTrigger primitive props and adds inset prop
 */
export interface ContextMenuSubTriggerProps extends React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> {
  inset?: boolean
}

/**
 * ContextMenuSubContent component props interface
 * Extends Radix UI ContextMenuSubContent primitive props
 */
export interface ContextMenuSubContentProps extends React.ComponentProps<typeof ContextMenuPrimitive.SubContent> {}

/**
 * ContextMenuRadioGroup component props interface
 * Extends Radix UI ContextMenuRadioGroup primitive props
 */
export interface ContextMenuRadioGroupProps extends React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup> {}

/**
 * ContextMenu component - A context menu (right-click menu)
 * 
 * Provides an accessible context menu that appears on right-click.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - ContextMenu props including open, onOpenChange, and standard Radix UI ContextMenu attributes
 * @returns A ContextMenu component
 * 
 * @example
 * ```tsx
 * <ContextMenu>
 *   <ContextMenuTrigger>Right-click me</ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuItem>Item 1</ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenu>
 * ```
 */
const ContextMenu = React.memo(function ContextMenu({
  ...props
}: ContextMenuProps): React.ReactElement {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
})

/**
 * ContextMenuTrigger component - The element that triggers the context menu
 * @param props - ContextMenuTrigger props
 * @returns A ContextMenuTrigger component
 */
function ContextMenuTrigger({
  ...props
}: ContextMenuTriggerProps): React.ReactElement {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
}

/**
 * ContextMenuGroup component - A group of related context menu items
 * @param props - ContextMenuGroup props
 * @returns A ContextMenuGroup component
 */
function ContextMenuGroup({
  ...props
}: ContextMenuGroupProps): React.ReactElement {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

/**
 * ContextMenuPortal component - Portals the context menu content
 * @param props - ContextMenuPortal props
 * @returns A ContextMenuPortal component
 */
function ContextMenuPortal({
  ...props
}: ContextMenuPortalProps): React.ReactElement {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

/**
 * ContextMenuSub component - A submenu container
 * @param props - ContextMenuSub props
 * @returns A ContextMenuSub component
 */
function ContextMenuSub({
  ...props
}: ContextMenuSubProps): React.ReactElement {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

/**
 * ContextMenuRadioGroup component - A radio group within the context menu
 * @param props - ContextMenuRadioGroup props
 * @returns A ContextMenuRadioGroup component
 */
function ContextMenuRadioGroup({
  ...props
}: ContextMenuRadioGroupProps): React.ReactElement {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

/**
 * ContextMenuSubTrigger component - The trigger for a submenu
 * @param props - ContextMenuSubTrigger props including inset
 * @returns A ContextMenuSubTrigger component
 */
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: ContextMenuSubTriggerProps): React.ReactElement {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

/**
 * ContextMenuSubContent component - The content container of a submenu
 * @param props - ContextMenuSubContent props
 * @returns A ContextMenuSubContent component
 */
function ContextMenuSubContent({
  className,
  ...props
}: ContextMenuSubContentProps): React.ReactElement {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

/**
 * ContextMenuContent component - The content container of the context menu
 * @param props - ContextMenuContent props
 * @returns A ContextMenuContent component
 */
function ContextMenuContent({
  className,
  ...props
}: ContextMenuContentProps): React.ReactElement {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

/**
 * ContextMenuItem component - An individual selectable item in the context menu
 * @param props - ContextMenuItem props including inset and variant
 * @returns A ContextMenuItem component
 */
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: ContextMenuItemProps): React.ReactElement {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-[var(--destructive-foreground)] data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-[var(--destructive-foreground)] data-[variant=destructive]:*:[svg]:!text-[var(--destructive-foreground)] [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * ContextMenuCheckboxItem component - A checkbox item in the context menu
 * @param props - ContextMenuCheckboxItem props
 * @returns A ContextMenuCheckboxItem component
 */
function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: ContextMenuCheckboxItemProps): React.ReactElement {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

/**
 * ContextMenuRadioItem component - A radio item in the context menu
 * @param props - ContextMenuRadioItem props
 * @returns A ContextMenuRadioItem component
 */
function ContextMenuRadioItem({
  className,
  children,
  ...props
}: ContextMenuRadioItemProps): React.ReactElement {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

/**
 * ContextMenuLabel component - A non-interactive label in the context menu
 * @param props - ContextMenuLabel props including inset
 * @returns A ContextMenuLabel component
 */
function ContextMenuLabel({
  className,
  inset,
  ...props
}: ContextMenuLabelProps): React.ReactElement {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

/**
 * ContextMenuSeparator component - A visual separator in the context menu
 * @param props - ContextMenuSeparator props
 * @returns A ContextMenuSeparator component
 */
function ContextMenuSeparator({
  className,
  ...props
}: ContextMenuSeparatorProps): React.ReactElement {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

/**
 * ContextMenuShortcut component - A keyboard shortcut indicator
 * @param props - ContextMenuShortcut props
 * @returns A ContextMenuShortcut component
 */
function ContextMenuShortcut({
  className,
  ...props
}: ContextMenuShortcutProps): React.ReactElement {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
