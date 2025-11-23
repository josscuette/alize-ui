import * as React from "react"
import { cn } from "../../lib/utils"

/**
 * InputGroup component props interface
 * Extends native div element props
 */
export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * InputGroup component - A container for grouping input elements
 * 
 * Provides a container for grouping input elements together.
 * 
 * @param props - InputGroup props including standard HTML div attributes
 * @returns An InputGroup component
 * 
 * @example
 * ```tsx
 * <InputGroup>
 *   <Input placeholder="Search..." />
 *   <Button>Search</Button>
 * </InputGroup>
 * ```
 */
function InputGroup({
  className,
  ...props
}: InputGroupProps): React.ReactElement {
  return (
    <div
      data-slot="input-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

export { InputGroup }

