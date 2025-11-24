import * as React from "react"
import { cn } from "../../lib/utils"

/**
 * Skeleton component props interface
 * Extends native div element props
 */
export interface SkeletonProps extends React.ComponentProps<"div"> {}

/**
 * Skeleton component - A loading placeholder
 * 
 * Displays an animated placeholder while content is loading.
 * 
 * @param props - Skeleton props including standard HTML div attributes
 * @returns A skeleton element
 * 
 * @example
 * ```tsx
 * <Skeleton className="h-4 w-32" />
 * <Skeleton className="h-8 w-full" />
 * ```
 */
function Skeleton({ className, ...props }: SkeletonProps): React.ReactElement {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
