import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import { DatePicker } from "./date-picker"

expect.extend(toHaveNoViolations)

describe("DatePicker", () => {
  describe("Rendering", () => {
    it("renders with default placeholder", () => {
      render(<DatePicker />)
      expect(screen.getByText("Pick a date")).toBeInTheDocument()
    })

    it("renders with custom placeholder", () => {
      render(<DatePicker placeholder="Select date" />)
      expect(screen.getByText("Select date")).toBeInTheDocument()
    })

    it("renders selected date", () => {
      render(<DatePicker date={new Date(2024, 0, 15)} />)
      expect(screen.getByText(/jan 15/i)).toBeInTheDocument()
    })

    it("renders as button by default", () => {
      render(<DatePicker />)
      expect(screen.getByRole("button")).toBeInTheDocument()
    })
  })

  describe("Button variant", () => {
    it("renders button trigger", () => {
      render(<DatePicker variant="button" />)
      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    it("opens calendar on click", async () => {
      const user = userEvent.setup()
      
      render(<DatePicker />)
      
      await user.click(screen.getByRole("button"))
      
      await waitFor(() => {
        expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
      })
    })
  })

  describe("Input variant", () => {
    it("renders input trigger", () => {
      render(<DatePicker variant="input" />)
      expect(screen.getByRole("textbox")).toBeInTheDocument()
    })

    it("renders input as readonly", () => {
      render(<DatePicker variant="input" />)
      expect(screen.getByRole("textbox")).toHaveAttribute("readonly")
    })

    it("shows calendar icon button", () => {
      render(<DatePicker variant="input" />)
      expect(screen.getByRole("button", { name: /open calendar/i })).toBeInTheDocument()
    })

    it("displays formatted date in input", () => {
      render(<DatePicker variant="input" date={new Date(2024, 0, 15)} />)
      expect(screen.getByRole("textbox")).toHaveValue("01/15/2024")
    })
  })

  describe("Interactions", () => {
    it("calls onDateChange when date is selected", async () => {
      const handleDateChange = vi.fn()
      const user = userEvent.setup()
      
      render(<DatePicker onDateChange={handleDateChange} />)
      
      await user.click(screen.getByRole("button"))
      
      await waitFor(() => {
        expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
      })
      
      // Click on a day - we'll look for day 15
      const dayButton = screen.getByRole("button", { name: /15/ })
      await user.click(dayButton)
      
      expect(handleDateChange).toHaveBeenCalled()
    })

    it("closes popover after selection", async () => {
      const user = userEvent.setup()
      
      render(<DatePicker />)
      
      await user.click(screen.getByRole("button"))
      
      await waitFor(() => {
        expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
      })
      
      const dayButton = screen.getByRole("button", { name: /15/ })
      await user.click(dayButton)
      
      await waitFor(() => {
        expect(document.querySelector('[data-slot="calendar"]')).not.toBeInTheDocument()
      })
    })
  })

  describe("Date formatting", () => {
    it("formats date with default format for button variant", () => {
      render(<DatePicker date={new Date(2024, 0, 15)} variant="button" />)
      // Default button format: "EEE, MMM d, yyyy"
      expect(screen.getByText(/mon, jan 15, 2024/i)).toBeInTheDocument()
    })

    it("formats date with default format for input variant", () => {
      render(<DatePicker date={new Date(2024, 0, 15)} variant="input" />)
      // Default input format: "MM/dd/yyyy"
      expect(screen.getByRole("textbox")).toHaveValue("01/15/2024")
    })

    it("uses custom format string", () => {
      render(<DatePicker date={new Date(2024, 0, 15)} formatString="yyyy-MM-dd" />)
      expect(screen.getByText("2024-01-15")).toBeInTheDocument()
    })
  })

  describe("Disabled state", () => {
    it("renders disabled button", () => {
      render(<DatePicker disabled />)
      expect(screen.getByRole("button")).toBeDisabled()
    })

    it("renders disabled input", () => {
      render(<DatePicker variant="input" disabled />)
      expect(screen.getByRole("textbox")).toBeDisabled()
    })

    it("cannot open calendar when disabled", async () => {
      const user = userEvent.setup()
      
      render(<DatePicker disabled />)
      
      await user.click(screen.getByRole("button"))
      
      expect(document.querySelector('[data-slot="calendar"]')).not.toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies custom className to button variant", () => {
      render(<DatePicker className="custom-class" />)
      expect(screen.getByRole("button")).toHaveClass("custom-class")
    })

    it("applies custom className to input variant container", () => {
      const { container } = render(<DatePicker variant="input" className="custom-class" />)
      expect(container.querySelector('.custom-class')).toBeInTheDocument()
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations for button variant", async () => {
      const { container } = render(
        <div>
          <label id="date-label">Date</label>
          <DatePicker aria-labelledby="date-label" />
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for input variant", async () => {
      const { container } = render(
        <div>
          <label htmlFor="date-input">Date</label>
          <DatePicker variant="input" />
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Empty state", () => {
    it("shows placeholder when no date selected (button variant)", () => {
      render(<DatePicker placeholder="Select a date" />)
      expect(screen.getByText("Select a date")).toBeInTheDocument()
    })

    it("shows empty input when no date selected (input variant)", () => {
      render(<DatePicker variant="input" placeholder="MM/DD/YYYY" />)
      expect(screen.getByRole("textbox")).toHaveValue("")
    })
  })
})

