import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import { Toggle } from "./toggle"

expect.extend(toHaveNoViolations)

describe("Toggle", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<Toggle>Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      expect(toggle).toHaveAttribute("data-slot", "toggle")
    })

    it("renders as button element", () => {
      render(<Toggle>Toggle</Toggle>)
      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    it("renders children correctly", () => {
      render(<Toggle>Bold</Toggle>)
      expect(screen.getByText("Bold")).toBeInTheDocument()
    })
  })

  describe("Pressed state", () => {
    it("renders unpressed by default", () => {
      render(<Toggle>Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      expect(toggle).toHaveAttribute("data-state", "off")
    })

    it("renders pressed when pressed prop is true", () => {
      render(<Toggle pressed>Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      expect(toggle).toHaveAttribute("data-state", "on")
    })

    it("renders pressed when defaultPressed is true", () => {
      render(<Toggle defaultPressed>Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      expect(toggle).toHaveAttribute("data-state", "on")
    })
  })

  describe("Interactions", () => {
    it("toggles state on click", async () => {
      const user = userEvent.setup()
      
      render(<Toggle>Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      
      expect(toggle).toHaveAttribute("data-state", "off")
      await user.click(toggle)
      expect(toggle).toHaveAttribute("data-state", "on")
    })

    it("calls onPressedChange when toggled", async () => {
      const handlePressedChange = vi.fn()
      const user = userEvent.setup()
      
      render(<Toggle onPressedChange={handlePressedChange}>Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      
      await user.click(toggle)
      expect(handlePressedChange).toHaveBeenCalledWith(true)
    })
  })

  describe("Variants", () => {
    it("renders default variant", () => {
      render(<Toggle variant="default">Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      expect(toggle).toHaveClass("bg-transparent")
    })

    it("renders outline variant", () => {
      render(<Toggle variant="outline">Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      expect(toggle).toHaveClass("border")
    })
  })

  describe("Sizes", () => {
    it("renders default size", () => {
      render(<Toggle size="default">Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      expect(toggle).toHaveClass("h-9")
    })

    it("renders small size", () => {
      render(<Toggle size="sm">Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      expect(toggle).toHaveClass("h-8")
    })

    it("renders large size", () => {
      render(<Toggle size="lg">Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      expect(toggle).toHaveClass("h-10")
    })
  })

  describe("Disabled state", () => {
    it("renders disabled state", () => {
      render(<Toggle disabled>Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      expect(toggle).toBeDisabled()
    })

    it("does not toggle when disabled", async () => {
      const handlePressedChange = vi.fn()
      const user = userEvent.setup()
      
      render(<Toggle disabled onPressedChange={handlePressedChange}>Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      
      await user.click(toggle)
      expect(handlePressedChange).not.toHaveBeenCalled()
    })
  })

  describe("Styling", () => {
    it("applies custom className", () => {
      render(<Toggle className="custom-class">Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      expect(toggle).toHaveClass("custom-class")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(<Toggle aria-label="Bold">B</Toggle>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations when pressed", async () => {
      const { container } = render(<Toggle pressed aria-label="Bold">B</Toggle>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has correct aria-pressed attribute", () => {
      render(<Toggle pressed>Toggle</Toggle>)
      const toggle = screen.getByRole("button")
      expect(toggle).toHaveAttribute("aria-pressed", "true")
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props", () => {
      render(<Toggle data-testid="toggle-test">Toggle</Toggle>)
      expect(screen.getByTestId("toggle-test")).toBeInTheDocument()
    })
  })
})

