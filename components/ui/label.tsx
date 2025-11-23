"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "../../lib/utils"

/**
 * Label component props interface
 * Extends Radix UI Label primitive props
 */
export interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {}

/**
 * Label component - A form label
 * 
 * Provides an accessible label for form inputs.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - Label props including htmlFor and standard Radix UI Label attributes
 * @returns A label element
 * 
 * @example
 * ```tsx
 * <Label htmlFor="email">Email</Label>
 * <Input id="email" />
 * ```
 */
function Label({
  className,
  ...props
}: LabelProps): React.ReactElement {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-normal select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
