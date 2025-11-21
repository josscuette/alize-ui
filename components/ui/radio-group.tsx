"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "../../lib/utils"
import { stroke, states, radius, text, animation, surface } from "../../styles"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        // Layout & Structure
        "aspect-square size-4 shrink-0",
        // Border & Stroke (Foundation Layer)
        "border",
        stroke.default,
        // Background & Surface
        "data-[state=unchecked]:bg-transparent",
        // Active state - using surface.interactionStrong and radius.full (Foundation Layer values)
        "data-[state=checked]:bg-semantic-surface-interaction-strong",
        "data-[state=checked]:rounded-full",
        "data-[state=checked]:border-0",
        // Radius (Foundation Layer)
        radius["3xl"],
        // Focus states (Foundation Layer)
        states.focusRing,
        // Invalid states (Foundation Layer)
        states.invalidRing,
        states.invalidBorder,
        // Disabled states (Foundation Layer)
        states.disabled,
        states.disabledCursor,
        // Animation (specific transition - keep inline)
        "transition-[background-color,border-color,box-shadow]",
        // Visual Effects
        "outline-none",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        {/* White circle indicator (8px) when checked */}
        <div className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

interface RadioGroupCardItemProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  label: string
  description?: string
}

function RadioGroupCardItem({
  className,
  label,
  description,
  id,
  ...props
}: RadioGroupCardItemProps) {
  const itemId = id || `radio-card-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <label
      htmlFor={itemId}
      className={cn(
        // Layout & Structure
        "group relative flex gap-2 items-start px-4 py-3 cursor-pointer",
        // Border & Stroke (Foundation Layer)
        "border",
        stroke.subdued,
        // Background & Surface
        "bg-transparent",
        // Active state - using surface.whisper and stroke.default (Foundation Layer values)
        "has-[[data-state=checked]]:bg-semantic-surface-whisper",
        "has-[[data-state=checked]]:border-semantic-stroke-default",
        // Radius (specific to RadioGroupCardItem - not in Foundation Layer)
        "rounded-[8px]",
        // Animation (Foundation Layer)
        animation.transitionAll,
        className
      )}
    >
      <RadioGroupPrimitive.Item
        data-slot="radio-group-card-item"
        id={itemId}
        className={cn(
          // Layout & Structure
          "mt-0.5 shrink-0 cursor-pointer",
          // Size & Layout
          "aspect-square size-4 shrink-0",
          // Border & Stroke (Foundation Layer)
          "border",
          stroke.default,
          // Background & Surface
          "data-[state=unchecked]:bg-transparent",
          // Active state - using surface.interactionStrong and radius.full (Foundation Layer values)
          "data-[state=checked]:bg-semantic-surface-interaction-strong",
          "data-[state=checked]:rounded-full",
          "data-[state=checked]:border-0",
          // Radius (Foundation Layer)
          radius["3xl"],
          // Focus states (Foundation Layer)
          states.focusRing,
          // Invalid states (Foundation Layer)
          states.invalidRing,
          states.invalidBorder,
          // Disabled states (Foundation Layer)
          states.disabled,
          states.disabledCursor,
          // Animation (specific transition - keep inline)
          "transition-[background-color,border-color,box-shadow]",
          // Visual Effects
          "outline-none",
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator
          data-slot="radio-group-indicator"
          className="relative flex items-center justify-center pointer-events-none"
        >
          {/* White circle indicator (8px) when checked */}
          <div className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white pointer-events-none" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <span
          className={cn(
            // Typography
            "text-sm leading-5",
            // Text color (Foundation Layer)
            text.default,
            // Font weight (specific to component)
            "group-has-[[data-state=checked]]:font-normal"
          )}
        >
          {label}
        </span>
        {description && (
          <span className={cn(
            // Typography
            "text-sm leading-5",
            // Text color (Foundation Layer)
            text.subdued
          )}>
            {description}
          </span>
        )}
      </div>
    </label>
  )
}

export { RadioGroup, RadioGroupItem, RadioGroupCardItem }
