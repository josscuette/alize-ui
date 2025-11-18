"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
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
        "group relative flex gap-2 items-start px-4 py-3 rounded-[8px] border transition-all cursor-pointer",
        // Inactive state
        "border-[var(--semantic-stroke-subdued)] bg-transparent",
        // Active state (when checkbox is checked)
        "has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
        className
      )}
    >
      <CheckboxPrimitive.Root
        data-slot="checkbox-card"
        id={itemId}
        className={cn(
          "mt-0.5 shrink-0 cursor-pointer",
          "border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
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

export { Checkbox, CheckboxCard }
