import * as React from "react"

import { cn } from "../../lib/utils"
import { states, radius, stroke } from "../../foundation"

/**
 * Input component props interface
 * Extends native HTML input element props
 * 
 * @example
 * ```tsx
 * <Input type="text" placeholder="Enter your name" />
 * <Input type="email" aria-invalid={hasError} />
 * ```
 */
export interface InputProps extends React.ComponentProps<"input"> {}

/**
 * Input component - A styled input field with validation states
 * 
 * Supports all standard HTML input types and includes built-in support for:
 * - Disabled states
 * - Invalid/error states (via aria-invalid)
 * - Focus states
 * - File input styling
 * 
 * @param props - Input props including type and standard HTML input attributes
 * @returns An input element with appropriate styling
 * 
 * @example
 * ```tsx
 * // Basic input
 * <Input type="text" placeholder="Enter text" />
 * 
 * // Input with error state
 * <Input 
 *   type="email" 
 *   aria-invalid={hasError}
 *   aria-describedby={hasError ? "email-error" : undefined}
 * />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref): React.ReactElement => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
        // Layout & Structure
        "h-9 w-full min-w-0 px-3 py-1",
        // Background & Surface
        "bg-transparent dark:bg-input/30",
        // Border & Stroke
        "border border-input",
        // Radius
        radius.md,
        // Typography
        "text-base md:text-sm",
        // Legacy shadcn text colors
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        // Visual Effects
        "shadow-xs outline-none",
        // Animation
        "transition-[color,box-shadow]",
        // File input specific
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        // Disabled states from Foundation Layer
        states.disabled,
        states.disabledCursor,
        // Focus states (legacy shadcn - keep inline)
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        // Invalid states from Foundation Layer
        states.invalidRing,
        // Invalid border - using stroke.destructive with aria-invalid prefix
        "aria-invalid:border-semantic-stroke-rag-danger-default",
        className
      )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }
