import * as React from "react"
import { Loader2Icon } from "lucide-react"

import { cn } from "../../lib/utils"

/**
 * Spinner component props interface
 * Extends native SVG element props
 */
export interface SpinnerProps extends React.ComponentProps<"svg"> {}

/**
 * Spinner component - A loading spinner
 * 
 * Displays an animated spinner to indicate loading state.
 * 
 * @param props - Spinner props including standard HTML SVG attributes
 * @returns A spinner element
 * 
 * @example
 * ```tsx
 * <Spinner />
 * <Spinner className="size-8" />
 * ```
 */
function Spinner({ className, ...props }: SpinnerProps): React.ReactElement {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
