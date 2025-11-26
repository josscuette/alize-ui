"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "../../lib/utils"
import { surface, stroke, text, states, radius, animation } from "../../foundation"

/**
 * Switch component props interface
 * Extends Radix UI Switch primitive props
 */
export interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {}

/**
 * SwitchCard component props interface
 * Extends Radix UI Switch primitive props and adds label/description
 */
export interface SwitchCardProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  label: string
  description?: string
}

/**
 * Switch component - A toggle switch control
 * 
 * Provides a binary on/off control with smooth animations.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - Switch props including checked, onCheckedChange, and standard Radix UI Switch attributes
 * @returns A switch element
 * 
 * @example
 * ```tsx
 * <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
 * <Switch disabled aria-label="Toggle feature" />
 * ```
 */
function Switch({
  className,
  ...props
}: SwitchProps): React.ReactElement {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // Layout & Structure
        "peer relative inline-flex h-4 w-8 shrink-0 items-center",
        // Animation (Foundation Layer)
        animation.transitionAll,
        // Visual Effects (Foundation Layer)
        states.outlineNone,
        // Disabled states (Foundation Layer)
        states.disabledCursor,
        "disabled:opacity-50", // Keep inline - states.disabled includes pointer-events-none which we don't want
        // Active state: teal background, fully rounded (Foundation Layer values - keep inline with data-[state] prefix)
        "data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:rounded-full data-[state=checked]:border-0",
        // Inactive state: secondary background with border, rounded-3xl (Foundation Layer values - keep inline with data-[state] prefix)
        "data-[state=unchecked]:bg-semantic-surface-secondary data-[state=unchecked]:border data-[state=unchecked]:border-semantic-stroke-default data-[state=unchecked]:rounded-3xl",
        // Focus states (Foundation Layer)
        states.focusRing,
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 size-3 rounded-full ring-0 transition-transform",
          // Active state: white thumb, positioned right (2px from right edge)
          "data-[state=checked]:bg-white data-[state=checked]:right-[2px]",
          // Inactive state: glacier-400 thumb, positioned left (1px from left edge)
          "data-[state=unchecked]:bg-[var(--color-solstice-glacier-400)] data-[state=unchecked]:left-[1px]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

/**
 * SwitchCard component - A switch styled as a card with a label and optional description
 * 
 * Provides an enhanced visual and interactive experience for switches,
 * suitable for settings lists.
 * 
 * @param props - SwitchCard props including label, description, and standard Radix UI Switch attributes
 * @returns A label element containing a switch and its associated text
 * 
 * @example
 * ```tsx
 * <SwitchCard label="Enable notifications" description="Receive alerts for new messages." />
 * ```
 */
function SwitchCard({
  className,
  label,
  description,
  id,
  ...props
}: SwitchCardProps): React.ReactElement {
  const itemId = id || `switch-card-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <label
      htmlFor={itemId}
      className={cn(
        // Layout & Structure
        "group relative flex gap-6 items-start px-4 py-3 cursor-pointer",
        // Border & Stroke (Foundation Layer values - keep inline with has-[[data-state]] prefix)
        "border border-semantic-stroke-subdued",
        // Background & Surface
        "bg-transparent",
        // Active state (when switch is checked) - Foundation Layer values (keep inline with has-[[data-state]] prefix)
        "has-[[data-state=checked]]:bg-semantic-surface-whisper has-[[data-state=checked]]:border-semantic-stroke-default",
        // Radius (specific to card - keep inline)
        "rounded-[8px]",
        // Animation (Foundation Layer)
        animation.transitionAll,
        className
      )}
    >
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <span
          className={cn(
            // Typography
            "text-sm leading-5",
            // Text color (Foundation Layer)
            text.default,
            // Font weight (specific to component - keep inline)
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
      <div className="flex items-center pt-0.5 shrink-0">
        <SwitchPrimitive.Root
          data-slot="switch-card"
          id={itemId}
          className={cn(
            // Layout & Structure
            "peer relative inline-flex h-4 w-8 shrink-0 items-center",
            // Cursor (specific to component - keep inline)
            "cursor-pointer",
            // Animation (Foundation Layer)
            animation.transitionAll,
            // Visual Effects (Foundation Layer)
            states.outlineNone,
            // Disabled states (Foundation Layer)
            states.disabledCursor,
            "disabled:opacity-50", // Keep inline - states.disabled includes pointer-events-none which we don't want
            // Active state: teal background, fully rounded (Foundation Layer values - keep inline with data-[state] prefix)
            "data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:rounded-full data-[state=checked]:border-0",
            // Inactive state: secondary background with border, rounded-3xl (Foundation Layer values - keep inline with data-[state] prefix)
            "data-[state=unchecked]:bg-semantic-surface-secondary data-[state=unchecked]:border data-[state=unchecked]:border-semantic-stroke-default data-[state=unchecked]:rounded-3xl",
            // Focus states (Foundation Layer)
            states.focusRing,
          )}
          {...props}
        >
          <SwitchPrimitive.Thumb
            data-slot="switch-thumb"
            className={cn(
              "pointer-events-none absolute top-1/2 -translate-y-1/2 size-3 rounded-full ring-0 transition-transform",
              // Active state: white thumb, positioned right (2px from right edge)
              "data-[state=checked]:bg-white data-[state=checked]:right-[2px]",
              // Inactive state: glacier-400 thumb, positioned left (1px from left edge)
              "data-[state=unchecked]:bg-[var(--color-solstice-glacier-400)] data-[state=unchecked]:left-[1px]"
            )}
          />
        </SwitchPrimitive.Root>
      </div>
    </label>
  )
}

export { Switch, SwitchCard }
