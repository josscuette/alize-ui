"use client"

import * as React from "react"
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

/**
 * AspectRatio component props interface
 * Extends Radix UI AspectRatio primitive props
 */
export interface AspectRatioProps extends React.ComponentProps<typeof AspectRatioPrimitive.Root> {}

/**
 * AspectRatio component - Maintains a specific aspect ratio for its content
 * 
 * Provides a container that maintains a specific aspect ratio for its content.
 * Built on Radix UI primitives.
 * 
 * @param props - AspectRatio props including ratio and standard Radix UI AspectRatio attributes
 * @returns An AspectRatio component
 * 
 * @example
 * ```tsx
 * <AspectRatio ratio={16 / 9}>
 *   <img src="/image.jpg" alt="Image" />
 * </AspectRatio>
 * ```
 */
function AspectRatio({
  ...props
}: AspectRatioProps): React.ReactElement {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }
