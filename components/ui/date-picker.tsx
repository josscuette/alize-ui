"use client"

import * as React from "react"
import { Calendar } from "./calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Button } from "./button"
import { Input } from "./input"
import { MaterialSymbol } from "../material-symbol"
import { cn } from "../../lib/utils"
import { format } from "date-fns"

export interface DatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  formatString?: string
  variant?: "button" | "input"
  className?: string
  disabled?: boolean
}

export function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  formatString,
  variant = "button",
  className,
  disabled,
}: DatePickerProps): React.ReactElement {
  const [open, setOpen] = React.useState(false)

  const defaultFormat = variant === "input" 
    ? "MM/dd/yyyy"
    : "EEE, MMM d, yyyy"

  const displayFormat = formatString || defaultFormat

  const formatDate = (date: Date | Date[] | { from?: Date; to?: Date } | undefined) => {
    if (!date) return variant === "input" ? "" : placeholder
    if (date instanceof Date) {
      return format(date, displayFormat)
    }
    if (Array.isArray(date)) {
      return date.length > 0 ? format(date[0], displayFormat) : (variant === "input" ? "" : placeholder)
    }
    if (typeof date === "object" && "from" in date && date.from) {
      return format(date.from, displayFormat)
    }
    return variant === "input" ? "" : placeholder
  }

  if (variant === "input") {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <div className={cn("relative", className)}>
          <Input
            placeholder={placeholder}
            value={formatDate(date)}
            readOnly
            disabled={disabled}
            className="pr-10"
          />
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={() => setOpen(!open)}
              disabled={disabled}
            >
              <MaterialSymbol name="calendar_today" size={14} weight={300} />
            </Button>
          </PopoverTrigger>
        </div>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              if (selectedDate instanceof Date || selectedDate === undefined) {
                onDateChange?.(selectedDate)
                setOpen(false)
              }
            }}
            {...(disabled && { disabled: () => disabled })}
          />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-full justify-start", className)}
          disabled={disabled}
        >
          <MaterialSymbol name="calendar_today" size={14} weight={300} className="mr-2" />
          {formatDate(date)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            if (selectedDate instanceof Date || selectedDate === undefined) {
              onDateChange?.(selectedDate)
              setOpen(false)
            }
          }}
          {...(disabled && { disabled: () => disabled })}
        />
      </PopoverContent>
    </Popover>
  )
}

