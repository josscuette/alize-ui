import * as React from "react"

import { cn } from "../../lib/utils"
import { states, radius, shadow, animation } from "../../styles"

/**
 * Textarea component props interface
 * Extends native HTML textarea element props
 */
export interface TextareaProps extends React.ComponentProps<"textarea"> {}

/**
 * Textarea component - A styled textarea field with validation states
 * 
 * Supports all standard HTML textarea attributes and includes built-in support for:
 * - Disabled states
 * - Invalid/error states (via aria-invalid)
 * - Focus states
 * - Auto-sizing with field-sizing-content
 * 
 * @param props - Textarea props including rows, cols, and standard HTML textarea attributes
 * @returns A textarea element with appropriate styling
 * 
 * @example
 * ```tsx
 * <Textarea placeholder="Enter your message" rows={5} />
 * <Textarea aria-invalid={hasError} aria-describedby={hasError ? "error-id" : undefined} />
 * ```
 */
function Textarea({ className, ...props }: TextareaProps): React.ReactElement {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Layout & Structure
        "flex field-sizing-content min-h-16 w-full px-3 py-2",
        // Background & Surface
        "bg-transparent dark:bg-input/30",
        // Border & Stroke
        "border border-input",
        // Radius (Foundation Layer)
        radius.md,
        // Typography
        "text-base md:text-sm",
        // Legacy shadcn text colors
        "placeholder:text-muted-foreground",
        // Visual Effects (Foundation Layer)
        shadow.xs,
        states.outlineNone,
        // Animation (Foundation Layer)
        animation.transitionFormControl,
        // Disabled states (Foundation Layer)
        states.disabled,
        states.disabledCursor,
        // Focus states (legacy shadcn - keep inline)
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        // Invalid states (Foundation Layer)
        states.invalidRing,
        // Invalid border (legacy shadcn - keep inline)
        "aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
