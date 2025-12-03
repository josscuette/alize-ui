/**
 * Integration tests for DatePicker component
 * Tests calendar navigation, date selection, and form integration
 */
import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { DatePicker } from "@/components/ui/date-picker"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"

// Test component: Basic DatePicker
function BasicDatePicker({
  onSelect,
}: {
  onSelect: (date: Date | undefined) => void
}) {
  const [date, setDate] = React.useState<Date>()

  return (
    <div>
      <DatePicker
        date={date}
        onDateChange={(newDate) => {
          setDate(newDate)
          onSelect(newDate)
        }}
        placeholder="Pick a date"
      />
      <div data-testid="selected-date">
        Selected: {date ? date.toDateString() : "none"}
      </div>
    </div>
  )
}

// Test component: DatePicker in Form
const formSchema = z.object({
  birthDate: z.date({
    required_error: "Please select a birth date",
  }),
})

function DatePickerForm({
  onSubmit,
}: {
  onSubmit: (data: { birthDate: Date }) => void
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Birth Date</FormLabel>
              <FormControl>
                <DatePicker
                  date={field.value}
                  onDateChange={field.onChange}
                  placeholder="Select your birth date"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

describe("DatePicker Integration", () => {
  describe("Basic DatePicker", () => {
    it("renders with placeholder", () => {
      const onSelect = vi.fn()
      render(<BasicDatePicker onSelect={onSelect} />)

      expect(screen.getByRole("button")).toBeInTheDocument()
      expect(screen.getByText("Pick a date")).toBeInTheDocument()
    })

    it("opens calendar popover on click", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicDatePicker onSelect={onSelect} />)

      await user.click(screen.getByRole("button"))

      await waitFor(() => {
        // Calendar should be visible - look for the calendar container
        expect(screen.getByRole("grid")).toBeInTheDocument()
      })
    })

    it("shows calendar month and navigation buttons", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicDatePicker onSelect={onSelect} />)

      await user.click(screen.getByRole("button"))

      await waitFor(() => {
        expect(screen.getByRole("grid")).toBeInTheDocument()
        // Should have navigation buttons
        expect(screen.getByRole("button", { name: /previous month/i })).toBeInTheDocument()
        expect(screen.getByRole("button", { name: /next month/i })).toBeInTheDocument()
      })
    })

    it("navigates to next month", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicDatePicker onSelect={onSelect} />)

      await user.click(screen.getByRole("button"))

      await waitFor(() => {
        expect(screen.getByRole("grid")).toBeInTheDocument()
      })

      // Click next month button
      const nextButton = screen.getByRole("button", { name: /next month/i })
      await user.click(nextButton)

      // Calendar should still be visible
      await waitFor(() => {
        expect(screen.getByRole("grid")).toBeInTheDocument()
      })
    })

    it("navigates to previous month", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicDatePicker onSelect={onSelect} />)

      await user.click(screen.getByRole("button"))

      await waitFor(() => {
        expect(screen.getByRole("grid")).toBeInTheDocument()
      })

      // Click previous month button
      const prevButton = screen.getByRole("button", { name: /previous month/i })
      await user.click(prevButton)

      await waitFor(() => {
        expect(screen.getByRole("grid")).toBeInTheDocument()
      })
    })

    it("renders calendar grid with days", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicDatePicker onSelect={onSelect} />)

      await user.click(screen.getByRole("button"))

      await waitFor(() => {
        const grid = screen.getByRole("grid")
        expect(grid).toBeInTheDocument()
        // Grid should have rows for weeks
        const rows = grid.querySelectorAll("tr, [role='row']")
        expect(rows.length).toBeGreaterThan(0)
      })
    })
  })

  describe("DatePicker in Form", () => {
    it("validates required date", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<DatePickerForm onSubmit={onSubmit} />)

      await user.click(screen.getByRole("button", { name: /submit/i }))

      await waitFor(() => {
        // Form should show error state on label
        const label = screen.getByText("Birth Date")
        expect(label).toHaveAttribute("data-error", "true")
      })

      expect(onSubmit).not.toHaveBeenCalled()
    })

    it("shows form label", () => {
      const onSubmit = vi.fn()
      render(<DatePickerForm onSubmit={onSubmit} />)

      expect(screen.getByText("Birth Date")).toBeInTheDocument()
    })

    it("shows date picker with placeholder", () => {
      const onSubmit = vi.fn()
      render(<DatePickerForm onSubmit={onSubmit} />)

      expect(screen.getByText("Select your birth date")).toBeInTheDocument()
    })

    it("opens calendar from form", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<DatePickerForm onSubmit={onSubmit} />)

      // Open calendar
      await user.click(screen.getByText("Select your birth date"))

      await waitFor(() => {
        expect(screen.getByRole("grid")).toBeInTheDocument()
      })
    })
  })

  describe("DatePicker accessibility", () => {
    it("calendar has proper ARIA role", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicDatePicker onSelect={onSelect} />)

      await user.click(screen.getByRole("button"))

      await waitFor(() => {
        expect(screen.getByRole("grid")).toBeInTheDocument()
      })
    })

    it("trigger button has proper attributes", () => {
      const onSelect = vi.fn()
      render(<BasicDatePicker onSelect={onSelect} />)

      const trigger = screen.getByRole("button")
      // Should be expandable
      expect(trigger).toHaveAttribute("aria-expanded", "false")
    })

    it("trigger updates aria-expanded when opened", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicDatePicker onSelect={onSelect} />)

      const trigger = screen.getByRole("button")
      await user.click(trigger)

      await waitFor(() => {
        expect(trigger).toHaveAttribute("aria-expanded", "true")
      })
    })
  })
})
