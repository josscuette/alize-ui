"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import { toggleVariants } from "./toggle"

/**
 * ToggleGroup component props interface
 * Extends Radix UI ToggleGroup primitive props and adds variant, size, and spacing props
 */
export type ToggleGroupProps = React.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants> & {
  spacing?: number
  children?: React.ReactNode
}

/**
 * ToggleGroupItem component props interface
 * Extends Radix UI ToggleGroupItem primitive props and adds variant and size props
 */
export interface ToggleGroupItemProps extends React.ComponentProps<typeof ToggleGroupPrimitive.Item>, VariantProps<typeof toggleVariants> {}

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
  }
>({
  size: "default",
  variant: "default",
  spacing: 0,
})

/**
 * ToggleGroup component - A group of toggle buttons
 * 
 * Provides a group of toggle buttons that can be used together.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - ToggleGroup props including variant, size, spacing, value, onValueChange, and standard Radix UI ToggleGroup attributes
 * @returns A ToggleGroup component
 * 
 * @example
 * ```tsx
 * <ToggleGroup variant="default" size="default" spacing={2}>
 *   <ToggleGroupItem value="a">A</ToggleGroupItem>
 *   <ToggleGroupItem value="b">B</ToggleGroupItem>
 * </ToggleGroup>
 * ```
 */
function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  children,
  ...props
}: ToggleGroupProps): React.ReactElement {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      style={{ "--gap": spacing } as React.CSSProperties}
      className={cn(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md border border-input",
        "data-[spacing=default]:data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

/**
 * ToggleGroupItem component - An individual toggle button in a ToggleGroup
 * @param props - ToggleGroupItem props including variant, size, and value
 * @returns A ToggleGroupItem component
 */
function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: ToggleGroupItemProps): React.ReactElement {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        // Remove all borders and shadows from items when in a group (group handles the border)
        "border-0 shadow-none",
        // Handle spacing=0 case
        "data-[spacing=0]:rounded-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }
