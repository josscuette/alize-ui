"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "../../lib/utils"
import { states, animation } from "../../foundation"

/**
 * Slider component props interface
 * Extends Radix UI Slider primitive props
 */
export interface SliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {}

/**
 * Slider component - A range input slider
 * 
 * Provides a draggable slider for selecting values within a range.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - Slider props including value, defaultValue, min, max, and standard Radix UI Slider attributes
 * @returns A slider element
 * 
 * @example
 * ```tsx
 * <Slider defaultValue={[50]} min={0} max={100} />
 * <Slider value={value} onValueChange={setValue} />
 * ```
 */
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderProps): React.ReactElement {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-semantic-surface-interaction-strong absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className={cn(
            // Layout
            "block size-4 shrink-0 rounded-full border bg-white shadow-sm",
            // Border
            "border-semantic-surface-interaction-strong",
            // Hover state
            "ring-ring/50 hover:ring-4",
            // Focus state
            "focus-visible:ring-4 focus-visible:outline-hidden",
            // Pressed state
            states.pressed,
            // Disabled state
            states.disabled,
            states.disabledCursor,
            // Transition
            animation.transitionFormControl
          )}
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
