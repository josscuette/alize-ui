"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "../../lib/utils"

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
        // Base styles
        "aspect-square size-4 shrink-0 transition-[background-color,border-color,box-shadow] outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Inactive state: border only, rounded-3xl
        "border border-[var(--semantic-stroke-default)] rounded-3xl",
        "data-[state=unchecked]:bg-transparent",
        // Active state: teal background, fully rounded
        "data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
        // Focus states
        "focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px]",
        // Error states
        "aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
        "aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20",
        "dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40",
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
        "group relative flex gap-2 items-start px-4 py-3 rounded-[8px] border transition-all cursor-pointer",
        // Inactive state
        "border-[var(--semantic-stroke-subdued)] bg-transparent",
        // Active state (when child radio is checked)
        "has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
        className
      )}
    >
      <RadioGroupPrimitive.Item
        data-slot="radio-group-card-item"
        id={itemId}
        className={cn(
          "mt-0.5 shrink-0 cursor-pointer",
          // Base styles
          "aspect-square size-4 shrink-0 transition-[background-color,border-color,box-shadow] outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Inactive state: border only, rounded-3xl
          "border border-[var(--semantic-stroke-default)] rounded-3xl",
          "data-[state=unchecked]:bg-transparent",
          // Active state: teal background, fully rounded
          "data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
          // Focus states
          "focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px]",
          // Error states
          "aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
          "aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20",
          "dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40",
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
            "text-sm leading-5",
            "text-[var(--semantic-text-default)]",
            "group-has-[[data-state=checked]]:font-normal"
          )}
        >
          {label}
        </span>
        {description && (
          <span className="text-sm leading-5 text-[var(--semantic-text-subdued)]">
            {description}
          </span>
        )}
      </div>
    </label>
  )
}

export { RadioGroup, RadioGroupItem, RadioGroupCardItem }
