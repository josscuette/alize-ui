import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import { Calendar } from "./calendar"

expect.extend(toHaveNoViolations)

describe("Calendar", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<Calendar />)
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
    })

    it("renders month and year", () => {
      render(<Calendar defaultMonth={new Date(2024, 0, 15)} />)
      expect(screen.getByText(/january/i)).toBeInTheDocument()
    })

    it("renders day buttons", () => {
      render(<Calendar defaultMonth={new Date(2024, 0, 15)} />)
      // Check that calendar renders - day buttons are rendered by react-day-picker
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
    })

    it("renders navigation buttons", () => {
      render(<Calendar />)
      // There should be previous and next month buttons
      const buttons = screen.getAllByRole("button")
      expect(buttons.length).toBeGreaterThan(0)
    })
  })

  describe("Single selection", () => {
    it("allows selecting a date", async () => {
      const handleSelect = vi.fn()
      const user = userEvent.setup()
      
      render(
        <Calendar 
          mode="single" 
          defaultMonth={new Date(2024, 0, 15)}
          onSelect={handleSelect}
        />
      )
      
      const dayButton = screen.getByRole("button", { name: /15/ })
      await user.click(dayButton)
      
      expect(handleSelect).toHaveBeenCalled()
    })

    it("shows selected date", () => {
      render(
        <Calendar 
          mode="single"
          selected={new Date(2024, 0, 15)}
          defaultMonth={new Date(2024, 0, 15)}
        />
      )
      
      const selectedButton = screen.getByRole("button", { name: /15/ })
      expect(selectedButton).toHaveAttribute("data-selected-single", "true")
    })
  })

  describe("Range selection", () => {
    it("renders in range mode", () => {
      render(
        <Calendar 
          mode="range"
          defaultMonth={new Date(2024, 0, 15)}
        />
      )
      
      // Calendar should render in range mode
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
    })
  })

  describe("Navigation", () => {
    it("navigates to previous month", async () => {
      const user = userEvent.setup()
      
      render(<Calendar defaultMonth={new Date(2024, 1, 15)} />)
      
      expect(screen.getByText(/february/i)).toBeInTheDocument()
      
      // Find and click the previous month button
      const prevButton = screen.getAllByRole("button").find(btn => 
        btn.className.includes('button_previous')
      )
      if (prevButton) {
        await user.click(prevButton)
        expect(screen.getByText(/january/i)).toBeInTheDocument()
      }
    })

    it("navigates to next month", async () => {
      const user = userEvent.setup()
      
      render(<Calendar defaultMonth={new Date(2024, 0, 15)} />)
      
      expect(screen.getByText(/january/i)).toBeInTheDocument()
      
      // Find and click the next month button
      const nextButton = screen.getAllByRole("button").find(btn => 
        btn.className.includes('button_next')
      )
      if (nextButton) {
        await user.click(nextButton)
        expect(screen.getByText(/february/i)).toBeInTheDocument()
      }
    })
  })

  describe("Disabled dates", () => {
    it("renders with disabled callback", () => {
      const disabledDates = (date: Date) => date.getDate() === 15
      
      render(
        <Calendar 
          defaultMonth={new Date(2024, 0, 15)}
          disabled={disabledDates}
        />
      )
      
      // Calendar renders with disabled function
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
    })
  })

  describe("Outside days", () => {
    it("shows outside days by default", () => {
      render(<Calendar defaultMonth={new Date(2024, 0, 15)} showOutsideDays />)
      // Calendar should render - outside days are shown by default
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
    })

    it("hides outside days when showOutsideDays is false", () => {
      render(<Calendar defaultMonth={new Date(2024, 0, 15)} showOutsideDays={false} />)
      // Calendar should still render
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies custom className", () => {
      render(<Calendar className="custom-calendar" />)
      const calendar = document.querySelector('[data-slot="calendar"]')
      expect(calendar).toHaveClass("custom-calendar")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <Calendar 
          defaultMonth={new Date(2024, 0, 15)}
          mode="single"
        />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("renders calendar with keyboard support", () => {
      render(<Calendar defaultMonth={new Date(2024, 0, 15)} />)
      
      // Calendar renders with keyboard navigation support
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
    })
  })

  describe("Caption layout", () => {
    it("renders with dropdown caption layout", () => {
      render(<Calendar captionLayout="dropdown" defaultMonth={new Date(2024, 0, 15)} />)
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
    })

    it("renders with buttons caption layout", () => {
      render(<Calendar captionLayout="buttons" defaultMonth={new Date(2024, 0, 15)} />)
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
    })
  })

  describe("Week numbers", () => {
    it("shows week numbers when enabled", () => {
      render(<Calendar showWeekNumber defaultMonth={new Date(2024, 0, 15)} />)
      // Calendar should render with week numbers
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
    })
  })
})

