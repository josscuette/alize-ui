import * as React from "react"
import { cn } from "../../lib/utils"

/**
 * Kbd component props interface
 * Extends native kbd element props
 */
export interface KbdProps extends React.ComponentProps<"kbd"> {}

/**
 * KbdGroup component props interface
 * Extends native div element props
 */
export interface KbdGroupProps extends React.ComponentProps<"div"> {}

/**
 * Kbd component - A keyboard key indicator
 * 
 * Displays a keyboard key or key combination for documentation or UI hints.
 * 
 * @param props - Kbd props including standard HTML kbd attributes
 * @returns A kbd element
 * 
 * @example
 * ```tsx
 * <Kbd>Ctrl</Kbd>
 * <KbdGroup>
 *   <Kbd>Ctrl</Kbd>
 *   <Kbd>K</Kbd>
 * </KbdGroup>
 * ```
 */
function Kbd({ className, ...props }: KbdProps): React.ReactElement {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className
      )}
      {...props}
    />
  )
}

/**
 * KbdGroup component - A group of keyboard keys
 * @param props - KbdGroup props
 * @returns A KbdGroup component
 */
function KbdGroup({ className, ...props }: KbdGroupProps): React.ReactElement {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
