import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import { Checkbox, CheckboxCard } from "./checkbox"

expect.extend(toHaveNoViolations)

describe("Checkbox", () => {
  describe("Rendering", () => {
    it("renders checkbox element", () => {
      render(<Checkbox />)
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).toBeInTheDocument()
    })

    it("renders unchecked by default", () => {
      render(<Checkbox />)
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).not.toBeChecked()
    })

    it("renders checked when checked prop is true", () => {
      render(<Checkbox checked />)
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).toBeChecked()
    })
  })

  describe("Interactions", () => {
    it("toggles checked state on click", async () => {
      const user = userEvent.setup()
      render(<Checkbox />)
      const checkbox = screen.getByRole("checkbox")
      
      expect(checkbox).not.toBeChecked()
      await user.click(checkbox)
      expect(checkbox).toBeChecked()
    })

    it("calls onCheckedChange handler", async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      
      render(<Checkbox onCheckedChange={handleChange} />)
      const checkbox = screen.getByRole("checkbox")
      
      await user.click(checkbox)
      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it("does not toggle when disabled", async () => {
      const user = userEvent.setup()
      render(<Checkbox disabled />)
      const checkbox = screen.getByRole("checkbox")
      
      expect(checkbox).toBeDisabled()
      await user.click(checkbox)
      expect(checkbox).not.toBeChecked()
    })
  })

  describe("States", () => {
    it("applies disabled state", () => {
      render(<Checkbox disabled />)
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).toBeDisabled()
    })

    it("applies invalid state with aria-invalid", () => {
      render(<Checkbox aria-invalid="true" />)
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).toHaveAttribute("aria-invalid", "true")
    })
  })

  describe("CheckboxCard", () => {
    it("renders CheckboxCard with label", () => {
      render(<CheckboxCard label="Accept terms" />)
      expect(screen.getByText("Accept terms")).toBeInTheDocument()
      expect(screen.getByRole("checkbox")).toBeInTheDocument()
    })

    it("renders CheckboxCard with description", () => {
      render(
        <CheckboxCard 
          label="Subscribe" 
          description="Receive weekly newsletter"
        />
      )
      expect(screen.getByText("Subscribe")).toBeInTheDocument()
      expect(screen.getByText("Receive weekly newsletter")).toBeInTheDocument()
    })

    it("toggles checkbox when label is clicked", async () => {
      const user = userEvent.setup()
      render(<CheckboxCard label="Click me" />)
      const checkbox = screen.getByRole("checkbox")
      const label = screen.getByText("Click me")
      
      expect(checkbox).not.toBeChecked()
      await user.click(label)
      expect(checkbox).toBeChecked()
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations when used with label", async () => {
      const { container } = render(
        <label>
          <Checkbox aria-label="Accept terms" />
          Accept terms
        </label>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations when checked with label", async () => {
      const { container } = render(
        <label>
          <Checkbox checked aria-label="Subscribe" />
          Subscribe
        </label>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations when disabled with label", async () => {
      const { container } = render(
        <label>
          <Checkbox disabled aria-label="Disabled option" />
          Disabled option
        </label>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for CheckboxCard", async () => {
      const { container } = render(
        <CheckboxCard label="Test" description="Description" />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Custom className", () => {
    it("applies custom className", () => {
      render(<Checkbox className="custom-class" />)
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).toHaveClass("custom-class")
    })
  })
})

