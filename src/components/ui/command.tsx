"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog"

/**
 * Command component props interface
 * Extends cmdk Command primitive props
 */
export interface CommandProps extends React.ComponentProps<typeof CommandPrimitive> {}

/**
 * CommandDialog component props interface
 * Extends Dialog props and adds title, description, and showCloseButton props
 */
export interface CommandDialogProps extends React.ComponentProps<typeof Dialog> {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}

/**
 * CommandInput component props interface
 * Extends cmdk CommandInput primitive props
 */
export interface CommandInputProps extends React.ComponentProps<typeof CommandPrimitive.Input> {}

/**
 * CommandList component props interface
 * Extends cmdk CommandList primitive props
 */
export interface CommandListProps extends React.ComponentProps<typeof CommandPrimitive.List> {}

/**
 * CommandEmpty component props interface
 * Extends cmdk CommandEmpty primitive props
 */
export interface CommandEmptyProps extends React.ComponentProps<typeof CommandPrimitive.Empty> {}

/**
 * CommandGroup component props interface
 * Extends cmdk CommandGroup primitive props
 */
export interface CommandGroupProps extends React.ComponentProps<typeof CommandPrimitive.Group> {}

/**
 * CommandSeparator component props interface
 * Extends cmdk CommandSeparator primitive props
 */
export interface CommandSeparatorProps extends React.ComponentProps<typeof CommandPrimitive.Separator> {}

/**
 * CommandItem component props interface
 * Extends cmdk CommandItem primitive props
 */
export interface CommandItemProps extends React.ComponentProps<typeof CommandPrimitive.Item> {}

/**
 * CommandShortcut component props interface
 * Extends native span element props
 */
export interface CommandShortcutProps extends React.ComponentProps<"span"> {}

/**
 * Command component - A command palette interface
 * 
 * Provides a command palette for searching and executing commands.
 * Built on cmdk for command handling.
 * 
 * @param props - Command props including standard cmdk Command attributes
 * @returns A Command component
 * 
 * @example
 * ```tsx
 * <Command>
 *   <CommandInput placeholder="Search..." />
 *   <CommandList>
 *     <CommandGroup heading="Suggestions">
 *       <CommandItem>Item 1</CommandItem>
 *     </CommandGroup>
 *   </CommandList>
 * </Command>
 * ```
 */
function Command({
  className,
  ...props
}: CommandProps): React.ReactElement {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )}
      {...props}
    />
  )
}

/**
 * CommandDialog component - A dialog wrapper for Command
 * @param props - CommandDialog props including title, description, and showCloseButton
 * @returns A CommandDialog component
 */
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: CommandDialogProps): React.ReactElement {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("overflow-hidden p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

/**
 * CommandInput component - The search input for the command palette
 * @param props - CommandInput props
 * @returns A CommandInput component
 */
function CommandInput({
  className,
  ...props
}: CommandInputProps): React.ReactElement {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

/**
 * CommandList component - The scrollable list container for command items
 * @param props - CommandList props
 * @returns A CommandList component
 */
function CommandList({
  className,
  ...props
}: CommandListProps): React.ReactElement {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

/**
 * CommandEmpty component - The empty state when no commands match
 * @param props - CommandEmpty props
 * @returns A CommandEmpty component
 */
function CommandEmpty({
  ...props
}: CommandEmptyProps): React.ReactElement {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  )
}

/**
 * CommandGroup component - A group of related command items
 * @param props - CommandGroup props
 * @returns A CommandGroup component
 */
function CommandGroup({
  className,
  ...props
}: CommandGroupProps): React.ReactElement {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      )}
      {...props}
    />
  )
}

/**
 * CommandSeparator component - A visual separator between command groups
 * @param props - CommandSeparator props
 * @returns A CommandSeparator component
 */
function CommandSeparator({
  className,
  ...props
}: CommandSeparatorProps): React.ReactElement {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props}
    />
  )
}

/**
 * CommandItem component - An individual selectable command item
 * @param props - CommandItem props
 * @returns A CommandItem component
 */
function CommandItem({
  className,
  ...props
}: CommandItemProps): React.ReactElement {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * CommandShortcut component - A keyboard shortcut indicator
 * @param props - CommandShortcut props
 * @returns A CommandShortcut component
 */
function CommandShortcut({
  className,
  ...props
}: CommandShortcutProps): React.ReactElement {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
