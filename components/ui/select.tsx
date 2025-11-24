"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronUpIcon } from "lucide-react"
import { MaterialSymbol } from "../material-symbol"

import { cn } from "../../lib/utils"
import { states, radius, animation, shadow } from "../../styles"

/**
 * Select component props interface
 * Extends Radix UI Select primitive props
 */
export interface SelectProps extends React.ComponentProps<typeof SelectPrimitive.Root> {}

/**
 * SelectTrigger component props interface
 * Extends Radix UI SelectTrigger primitive props and adds size prop
 */
export interface SelectTriggerProps extends React.ComponentProps<typeof SelectPrimitive.Trigger> {
  size?: "sm" | "default"
}

/**
 * SelectContent component props interface
 * Extends Radix UI SelectContent primitive props
 */
export interface SelectContentProps extends React.ComponentProps<typeof SelectPrimitive.Content> {}

/**
 * SelectItem component props interface
 * Extends Radix UI SelectItem primitive props
 */
export interface SelectItemProps extends React.ComponentProps<typeof SelectPrimitive.Item> {}

/**
 * SelectLabel component props interface
 * Extends Radix UI SelectLabel primitive props
 */
export interface SelectLabelProps extends React.ComponentProps<typeof SelectPrimitive.Label> {}

/**
 * SelectSeparator component props interface
 * Extends Radix UI SelectSeparator primitive props
 */
export interface SelectSeparatorProps extends React.ComponentProps<typeof SelectPrimitive.Separator> {}

/**
 * SelectScrollUpButton component props interface
 * Extends Radix UI SelectScrollUpButton primitive props
 */
export interface SelectScrollUpButtonProps extends React.ComponentProps<typeof SelectPrimitive.ScrollUpButton> {}

/**
 * SelectScrollDownButton component props interface
 * Extends Radix UI SelectScrollDownButton primitive props
 */
export interface SelectScrollDownButtonProps extends React.ComponentProps<typeof SelectPrimitive.ScrollDownButton> {}

/**
 * Select component - A custom select input built on Radix UI
 * 
 * Provides an accessible and customizable dropdown for selecting options.
 * 
 * @param props - Select props
 * @returns A Select component
 * 
 * @example
 * ```tsx
 * <Select>
 *   <SelectTrigger>
 *     <SelectValue placeholder="Select a fruit" />
 *   </SelectTrigger>
 *   <SelectContent>
 *     <SelectGroup>
 *       <SelectLabel>Fruits</SelectLabel>
 *       <SelectItem value="apple">Apple</SelectItem>
 *       <SelectItem value="banana">Banana</SelectItem>
 *     </SelectGroup>
 *   </SelectContent>
 * </Select>
 * ```
 */
const Select = React.memo(function Select({
  ...props
}: SelectProps): React.ReactElement {
  return <SelectPrimitive.Root data-slot="select" {...props} />
})

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>): React.ReactElement {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>): React.ReactElement {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}): React.ReactElement {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        // Layout & Structure
        "h-9 w-full min-w-0 px-3 py-1",
        // Background & Surface
        "bg-transparent dark:bg-input/30",
        // Border & Stroke
        "border border-input",
        // Radius (Foundation Layer)
        radius.md,
        // Typography
        "text-base md:text-sm",
        // Legacy shadcn text colors
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "data-[placeholder]:text-muted-foreground",
        // Visual Effects (Foundation Layer)
        shadow.xs,
        states.outlineNone,
        // Animation (Foundation Layer)
        animation.transitionFormControl,
        // Layout and spacing
        "flex items-center justify-between gap-2 whitespace-nowrap",
        // Sizes
        "data-[size=default]:h-9 data-[size=sm]:h-8 data-[size=sm]:text-sm",
        // Content styles
        "*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
        // Disabled states (Foundation Layer)
        states.disabled,
        states.disabledCursor,
        // Focus states (legacy shadcn - keep inline)
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        // Invalid states (Foundation Layer)
        states.invalidRing,
        // Invalid border - using stroke.destructive with aria-invalid prefix
        "aria-invalid:border-semantic-stroke-rag-danger-default",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <MaterialSymbol 
          name="expand_more" 
          size={16} 
          weight={300}
          className="text-semantic-icon-subdued shrink-0 pointer-events-none"
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

/**
 * SelectContent component - The popover content containing select items
 * @param props - SelectContent props
 * @returns A SelectContent component
 */
function SelectContent({
  className,
  children,
  position = "popper",
  align = "center",
  ...props
}: SelectContentProps): React.ReactElement {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          // Background & Surface (legacy shadcn)
          "bg-popover text-popover-foreground",
          // Border & Stroke
          "border",
          // Radius (Foundation Layer)
          radius.md,
          // Visual Effects (Foundation Layer)
          shadow.md,
          "relative z-50",
          // Layout & Structure
          "max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto",
          // Animations (Radix UI specific - keep inline)
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>): React.ReactElement {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  )
}

/**
 * SelectItem component - An individual selectable item within the select content
 * @param props - SelectItem props
 * @returns A SelectItem component
 */
function SelectItem({
  className,
  children,
  ...props
}: SelectItemProps): React.ReactElement {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

/**
 * SelectSeparator component - A visual separator between select groups or items
 * @param props - SelectSeparator props
 * @returns A SelectSeparator component
 */
function SelectSeparator({
  className,
  ...props
}: SelectSeparatorProps): React.ReactElement {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

/**
 * SelectScrollUpButton component - Button to scroll up in the select content
 * @param props - SelectScrollUpButton props
 * @returns A SelectScrollUpButton component
 */
function SelectScrollUpButton({
  className,
  ...props
}: SelectScrollUpButtonProps): React.ReactElement {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

/**
 * SelectScrollDownButton component - Button to scroll down in the select content
 * @param props - SelectScrollDownButton props
 * @returns A SelectScrollDownButton component
 */
function SelectScrollDownButton({
  className,
  ...props
}: SelectScrollDownButtonProps): React.ReactElement {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <MaterialSymbol 
        name="expand_more" 
        size={16} 
        weight={300}
        className="text-semantic-icon-subdued"
      />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
