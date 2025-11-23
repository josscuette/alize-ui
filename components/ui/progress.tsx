"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "../../lib/utils"
import { surface, radius, animation } from "../../styles"

/**
 * Progress component props interface
 * Extends Radix UI Progress primitive props
 */
export interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {}

/**
 * Progress component - A progress bar indicator
 * 
 * Displays a visual progress indicator with customizable value.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - Progress props including value and standard Radix UI Progress attributes
 * @returns A progress bar element
 * 
 * @example
 * ```tsx
 * <Progress value={50} />
 * <Progress value={75} className="h-4" />
 * ```
 */
function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>): React.ReactElement {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        // Background & Surface (Foundation Layer value with opacity - keep inline)
        "bg-semantic-surface-interaction-strong/20",
        // Layout & Structure
        "relative h-2 w-full overflow-hidden",
        // Radius (Foundation Layer)
        radius.full,
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          // Background & Surface (Foundation Layer)
          surface.interactionStrong,
          // Layout & Structure
          "h-full w-full flex-1",
          // Animation (Foundation Layer)
          animation.transitionAll
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
