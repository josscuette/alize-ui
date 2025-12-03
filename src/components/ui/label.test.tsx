import { describe, it, expect } from "vitest"
import { render, screen } from "@/lib/test-utils"
import { axe, toHaveNoViolations } from "jest-axe"
import { Label } from "./label"

expect.extend(toHaveNoViolations)

describe("Label", () => {
  describe("Rendering", () => {
    it("renders with text content", () => {
      render(<Label>Email</Label>)
      expect(screen.getByText("Email")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(<Label>Email</Label>)
      const label = screen.getByText("Email")
      expect(label).toHaveAttribute("data-slot", "label")
    })

    it("renders with htmlFor attribute", () => {
      render(<Label htmlFor="email-input">Email</Label>)
      const label = screen.getByText("Email")
      expect(label).toHaveAttribute("for", "email-input")
    })

    it("renders children correctly", () => {
      render(
        <Label>
          <span>Required</span> Field
        </Label>
      )
      expect(screen.getByText("Required")).toBeInTheDocument()
      expect(screen.getByText(/Field/)).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies default classes", () => {
      render(<Label>Email</Label>)
      const label = screen.getByText("Email")
      expect(label).toHaveClass("flex", "items-center", "gap-2", "text-sm")
    })

    it("applies custom className", () => {
      render(<Label className="custom-class">Email</Label>)
      const label = screen.getByText("Email")
      expect(label).toHaveClass("custom-class")
    })

    it("merges custom className with defaults", () => {
      render(<Label className="font-bold">Email</Label>)
      const label = screen.getByText("Email")
      expect(label).toHaveClass("text-sm")
      expect(label).toHaveClass("font-bold")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <div>
          <Label htmlFor="test-input">Test Label</Label>
          <input id="test-input" type="text" />
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations without htmlFor", async () => {
      const { container } = render(<Label>Standalone Label</Label>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to the root element", () => {
      render(<Label data-testid="label-test">Email</Label>)
      expect(screen.getByTestId("label-test")).toBeInTheDocument()
    })

    it("forwards id prop", () => {
      render(<Label id="my-label">Email</Label>)
      const label = screen.getByText("Email")
      expect(label).toHaveAttribute("id", "my-label")
    })
  })
})

