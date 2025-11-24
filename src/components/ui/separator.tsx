"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "../../lib/utils"

/**
 * Separator component props interface
 * Extends Radix UI Separator primitive props
 */
export interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {}

/**
 * Separator component - A visual separator line
 * 
 * Displays a horizontal or vertical line to separate content.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - Separator props including orientation, decorative, and standard Radix UI Separator attributes
 * @returns A separator element
 * 
 * @example
 * ```tsx
 * <Separator orientation="horizontal" />
 * <Separator orientation="vertical" decorative={false} />
 * ```
 */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps): React.ReactElement {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
