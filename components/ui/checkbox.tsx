"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { stroke, states, radius, text, animation, surface } from "../../styles"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // Layout & Structure
        "peer size-4 shrink-0",
        // Border & Stroke (Foundation Layer)
        "border",
        stroke.default,
        // Background & Surface
        "data-[state=unchecked]:bg-transparent",
        // Checked state - using surface.interactionStrong (Foundation Layer value)
        "data-[state=checked]:bg-semantic-surface-interaction-strong",
        "data-[state=checked]:border-semantic-surface-interaction-strong",
        // Text color for check icon
        "data-[state=checked]:text-white",
        // Focus states (Foundation Layer)
        "focus-visible:border-semantic-surface-interaction-strong",
        states.focusRing,
        // Invalid states (Foundation Layer)
        states.invalidRing,
        states.invalidBorder,
        // Radius (Foundation Layer)
        radius.sm,
        // Disabled states (Foundation Layer)
        states.disabled,
        states.disabledCursor,
        // Animation (Foundation Layer)
        animation.transitionAll,
        // Visual Effects
        "outline-none",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

interface CheckboxCardProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  label: string
  description?: string
}

function CheckboxCard({
  className,
  label,
  description,
  id,
  ...props
}: CheckboxCardProps) {
  const itemId = id || `checkbox-card-${Math.random().toString(36).substr(2, 9)}`
  
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
        // Radius (specific to CheckboxCard - not in Foundation Layer)
        "rounded-[8px]",
        // Animation (Foundation Layer)
        animation.transitionAll,
        className
      )}
    >
      <CheckboxPrimitive.Root
        data-slot="checkbox-card"
        id={itemId}
        className={cn(
          // Layout & Structure
          "mt-0.5 shrink-0 cursor-pointer",
          // Border & Stroke (Foundation Layer)
          "border",
          stroke.default,
          // Background & Surface
          "data-[state=unchecked]:bg-transparent",
          // Checked state - using surface.interactionStrong (Foundation Layer value)
          "data-[state=checked]:bg-semantic-surface-interaction-strong",
          "data-[state=checked]:border-semantic-surface-interaction-strong",
          // Text color for check icon
          "data-[state=checked]:text-white",
          // Focus states (Foundation Layer)
          "focus-visible:border-semantic-surface-interaction-strong",
          states.focusRing,
          // Invalid states (Foundation Layer)
          states.invalidRing,
          states.invalidBorder,
          // Size & Layout
          "size-4 shrink-0",
          // Radius (Foundation Layer)
          radius.sm,
          // Disabled states (Foundation Layer)
          states.disabled,
          states.disabledCursor,
          // Animation (Foundation Layer)
          animation.transitionAll,
          // Visual Effects
          "outline-none",
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="grid place-content-center text-current transition-none pointer-events-none"
        >
          <CheckIcon className="size-3.5" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
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

export { Checkbox, CheckboxCard }
