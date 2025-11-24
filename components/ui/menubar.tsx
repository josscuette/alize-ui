"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "../../lib/utils"

/**
 * Menubar component props interface
 * Extends Radix UI Menubar Root props
 */
export interface MenubarProps extends React.ComponentProps<typeof MenubarPrimitive.Root> {}

/**
 * MenubarMenu component props interface
 * Extends Radix UI Menubar Menu props
 */
export interface MenubarMenuProps extends React.ComponentProps<typeof MenubarPrimitive.Menu> {}

/**
 * MenubarGroup component props interface
 * Extends Radix UI Menubar Group props
 */
export interface MenubarGroupProps extends React.ComponentProps<typeof MenubarPrimitive.Group> {}

/**
 * MenubarPortal component props interface
 * Extends Radix UI Menubar Portal props
 */
export interface MenubarPortalProps extends React.ComponentProps<typeof MenubarPrimitive.Portal> {}

/**
 * MenubarRadioGroup component props interface
 * Extends Radix UI Menubar RadioGroup props
 */
export interface MenubarRadioGroupProps extends React.ComponentProps<typeof MenubarPrimitive.RadioGroup> {}

/**
 * MenubarTrigger component props interface
 * Extends Radix UI Menubar Trigger props
 */
export interface MenubarTriggerProps extends React.ComponentProps<typeof MenubarPrimitive.Trigger> {}

/**
 * MenubarContent component props interface
 * Extends Radix UI Menubar Content props
 */
export interface MenubarContentProps extends React.ComponentProps<typeof MenubarPrimitive.Content> {}

/**
 * MenubarItem component props interface
 * Extends Radix UI Menubar Item props and adds inset and variant props
 */
export interface MenubarItemProps extends React.ComponentProps<typeof MenubarPrimitive.Item> {
  inset?: boolean
  variant?: "default" | "destructive"
}

/**
 * MenubarCheckboxItem component props interface
 * Extends Radix UI Menubar CheckboxItem props
 */
export interface MenubarCheckboxItemProps extends React.ComponentProps<typeof MenubarPrimitive.CheckboxItem> {}

/**
 * MenubarRadioItem component props interface
 * Extends Radix UI Menubar RadioItem props
 */
export interface MenubarRadioItemProps extends React.ComponentProps<typeof MenubarPrimitive.RadioItem> {}

/**
 * MenubarLabel component props interface
 * Extends Radix UI Menubar Label props and adds inset prop
 */
export interface MenubarLabelProps extends React.ComponentProps<typeof MenubarPrimitive.Label> {
  inset?: boolean
}

/**
 * MenubarSeparator component props interface
 * Extends Radix UI Menubar Separator props
 */
export interface MenubarSeparatorProps extends React.ComponentProps<typeof MenubarPrimitive.Separator> {}

/**
 * MenubarShortcut component props interface
 * Extends native span element props
 */
export interface MenubarShortcutProps extends React.ComponentProps<"span"> {}

/**
 * MenubarSub component props interface
 * Extends Radix UI Menubar Sub props
 */
export interface MenubarSubProps extends React.ComponentProps<typeof MenubarPrimitive.Sub> {}

/**
 * MenubarSubTrigger component props interface
 * Extends Radix UI Menubar SubTrigger props and adds inset prop
 */
export interface MenubarSubTriggerProps extends React.ComponentProps<typeof MenubarPrimitive.SubTrigger> {
  inset?: boolean
}

/**
 * MenubarSubContent component props interface
 * Extends Radix UI Menubar SubContent props
 */
export interface MenubarSubContentProps extends React.ComponentProps<typeof MenubarPrimitive.SubContent> {}

/**
 * Menubar component - A menubar component
 * 
 * Provides an accessible menubar with menu items, submenus, and keyboard navigation.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - Menubar props including standard Radix UI Menubar attributes
 * @returns A Menubar component
 * 
 * @example
 * ```tsx
 * <Menubar>
 *   <MenubarMenu>
 *     <MenubarTrigger>File</MenubarTrigger>
 *     <MenubarContent>
 *       <MenubarItem>New</MenubarItem>
 *     </MenubarContent>
 *   </MenubarMenu>
 * </Menubar>
 * ```
 */
const Menubar = React.memo(function Menubar({
  className,
  ...props
}: MenubarProps): React.ReactElement {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className
      )}
      {...props}
    />
  )
})

/**
 * MenubarMenu component - A menu within the menubar
 * @param props - MenubarMenu props
 * @returns A MenubarMenu component
 */
function MenubarMenu({
  ...props
}: MenubarMenuProps): React.ReactElement {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

/**
 * MenubarGroup component - A group of menubar items
 * @param props - MenubarGroup props
 * @returns A MenubarGroup component
 */
function MenubarGroup({
  ...props
}: MenubarGroupProps): React.ReactElement {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

/**
 * MenubarPortal component - A portal for menubar content
 * @param props - MenubarPortal props
 * @returns A MenubarPortal component
 */
function MenubarPortal({
  ...props
}: MenubarPortalProps): React.ReactElement {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

/**
 * MenubarRadioGroup component - A radio group within the menubar
 * @param props - MenubarRadioGroup props
 * @returns A MenubarRadioGroup component
 */
function MenubarRadioGroup({
  ...props
}: MenubarRadioGroupProps): React.ReactElement {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

/**
 * MenubarTrigger component - A trigger button for menubar menus
 * @param props - MenubarTrigger props
 * @returns A MenubarTrigger component
 */
function MenubarTrigger({
  className,
  ...props
}: MenubarTriggerProps): React.ReactElement {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        className
      )}
      {...props}
    />
  )
}

/**
 * MenubarContent component - Content displayed in menubar dropdowns
 * @param props - MenubarContent props including align, alignOffset, sideOffset
 * @returns A MenubarContent component
 */
function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: MenubarContentProps): React.ReactElement {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

/**
 * MenubarItem component - An individual item in the menubar
 * @param props - MenubarItem props including inset and variant
 * @returns A MenubarItem component
 */
function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: MenubarItemProps): React.ReactElement {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * MenubarCheckboxItem component - A checkbox item in the menubar
 * @param props - MenubarCheckboxItem props including checked
 * @returns A MenubarCheckboxItem component
 */
function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: MenubarCheckboxItemProps): React.ReactElement {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

/**
 * MenubarRadioItem component - A radio item in the menubar
 * @param props - MenubarRadioItem props
 * @returns A MenubarRadioItem component
 */
function MenubarRadioItem({
  className,
  children,
  ...props
}: MenubarRadioItemProps): React.ReactElement {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

/**
 * MenubarLabel component - A label in the menubar
 * @param props - MenubarLabel props including inset
 * @returns A MenubarLabel component
 */
function MenubarLabel({
  className,
  inset,
  ...props
}: MenubarLabelProps): React.ReactElement {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
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
 * MenubarSeparator component - A separator in the menubar
 * @param props - MenubarSeparator props
 * @returns A MenubarSeparator component
 */
function MenubarSeparator({
  className,
  ...props
}: MenubarSeparatorProps): React.ReactElement {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

/**
 * MenubarShortcut component - A keyboard shortcut indicator
 * @param props - MenubarShortcut props
 * @returns A MenubarShortcut component
 */
function MenubarShortcut({
  className,
  ...props
}: MenubarShortcutProps): React.ReactElement {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

/**
 * MenubarSub component - A submenu container
 * @param props - MenubarSub props
 * @returns A MenubarSub component
 */
function MenubarSub({
  ...props
}: MenubarSubProps): React.ReactElement {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

/**
 * MenubarSubTrigger component - A trigger for submenus
 * @param props - MenubarSubTrigger props including inset
 * @returns A MenubarSubTrigger component
 */
function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenubarSubTriggerProps): React.ReactElement {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

/**
 * MenubarSubContent component - Content for submenus
 * @param props - MenubarSubContent props
 * @returns A MenubarSubContent component
 */
function MenubarSubContent({
  className,
  ...props
}: MenubarSubContentProps): React.ReactElement {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
