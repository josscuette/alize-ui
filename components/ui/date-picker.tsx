"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MaterialSymbol } from "@/components/material-symbol"
import { cn } from "@/lib/utils"
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
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  const defaultFormat = variant === "input" 
    ? "MM/dd/yyyy"
    : "EEE, MMM d, yyyy"

  const displayFormat = formatString || defaultFormat

  const formatDate = (date: Date | undefined) => {
    if (!date) return variant === "input" ? "" : placeholder
    return format(date, displayFormat)
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
              onDateChange?.(selectedDate)
              setOpen(false)
            }}
            disabled={disabled}
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
            onDateChange?.(selectedDate)
            setOpen(false)
          }}
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  )
}

