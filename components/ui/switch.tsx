"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "../../lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer relative inline-flex h-4 w-8 shrink-0 items-center transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
        // Active state: teal background, fully rounded
        "data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:rounded-full data-[state=checked]:border-0",
        // Inactive state: secondary background with border, rounded-3xl
        "data-[state=unchecked]:bg-semantic-surface-secondary data-[state=unchecked]:border data-[state=unchecked]:border-semantic-stroke-default data-[state=unchecked]:rounded-3xl",
        // Focus states
        "focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px] focus-visible:outline-none",
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
          // Inactive state: glacier-400 thumb, positioned left (2px from left edge)
          "data-[state=unchecked]:bg-[var(--color-solstice-glacier-400)] data-[state=unchecked]:left-[2px]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

interface SwitchCardProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  label: string
  description?: string
}

function SwitchCard({
  className,
  label,
  description,
  id,
  ...props
}: SwitchCardProps) {
  const itemId = id || `switch-card-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <label
      htmlFor={itemId}
      className={cn(
        "group relative flex gap-6 items-start px-4 py-3 rounded-[8px] border transition-all cursor-pointer",
        // Inactive state
        "border-semantic-stroke-subdued bg-transparent",
        // Active state (when switch is checked)
        "has-[[data-state=checked]]:bg-semantic-surface-whisper has-[[data-state=checked]]:border-semantic-stroke-default",
        className
      )}
    >
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <span
          className={cn(
            "text-sm leading-5",
            "text-semantic-text-default",
            "group-has-[[data-state=checked]]:font-normal"
          )}
        >
          {label}
        </span>
        {description && (
          <span className="text-sm leading-5 text-semantic-text-subdued">
            {description}
          </span>
        )}
      </div>
      <div className="flex items-center pt-0.5 shrink-0">
        <SwitchPrimitive.Root
          data-slot="switch-card"
          id={itemId}
          className={cn(
            "cursor-pointer",
            "peer relative inline-flex h-4 w-8 shrink-0 items-center transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
            // Active state: teal background, fully rounded
            "data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:rounded-full data-[state=checked]:border-0",
            // Inactive state: secondary background with border, rounded-3xl
            "data-[state=unchecked]:bg-semantic-surface-secondary data-[state=unchecked]:border data-[state=unchecked]:border-semantic-stroke-default data-[state=unchecked]:rounded-3xl",
            // Focus states
            "focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px] focus-visible:outline-none",
          )}
          {...props}
        >
          <SwitchPrimitive.Thumb
            data-slot="switch-thumb"
            className={cn(
              "pointer-events-none absolute top-1/2 -translate-y-1/2 size-3 rounded-full ring-0 transition-transform",
              // Active state: white thumb, positioned right (2px from right edge)
              "data-[state=checked]:bg-white data-[state=checked]:right-[2px]",
              // Inactive state: glacier-400 thumb, positioned left (2px from left edge)
              "data-[state=unchecked]:bg-[var(--color-solstice-glacier-400)] data-[state=unchecked]:left-[2px]"
            )}
          />
        </SwitchPrimitive.Root>
      </div>
    </label>
  )
}

export { Switch, SwitchCard }
