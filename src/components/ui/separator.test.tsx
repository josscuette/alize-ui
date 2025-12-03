import { describe, it, expect } from "vitest"
import { render, screen } from "@/lib/test-utils"
import { axe, toHaveNoViolations } from "jest-axe"
import { Separator } from "./separator"

expect.extend(toHaveNoViolations)

describe("Separator", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<Separator data-testid="separator" />)
      const separator = screen.getByTestId("separator")
      expect(separator).toHaveAttribute("data-slot", "separator")
    })

    it("renders with correct orientation", () => {
      render(<Separator data-testid="separator" />)
      const separator = screen.getByTestId("separator")
      expect(separator).toHaveAttribute("data-orientation", "horizontal")
    })
  })

  describe("Orientation", () => {
    it("renders horizontal by default", () => {
      render(<Separator data-testid="separator" />)
      const separator = screen.getByTestId("separator")
      expect(separator).toHaveAttribute("data-orientation", "horizontal")
    })

    it("renders horizontal when specified", () => {
      render(<Separator orientation="horizontal" data-testid="separator" />)
      const separator = screen.getByTestId("separator")
      expect(separator).toHaveAttribute("data-orientation", "horizontal")
    })

    it("renders vertical when specified", () => {
      render(<Separator orientation="vertical" data-testid="separator" />)
      const separator = screen.getByTestId("separator")
      expect(separator).toHaveAttribute("data-orientation", "vertical")
    })
  })

  describe("Decorative", () => {
    it("is decorative by default", () => {
      render(<Separator data-testid="separator" />)
      const separator = screen.getByTestId("separator")
      // Decorative separators have role="none" and no aria-orientation
      expect(separator).toBeInTheDocument()
    })

    it("renders as non-decorative when specified", () => {
      render(<Separator decorative={false} data-testid="separator" />)
      const separator = screen.getByTestId("separator")
      expect(separator).toBeInTheDocument()
      // Non-decorative separators expose the separator role
      expect(separator).toHaveAttribute("role", "separator")
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(<Separator data-testid="separator" />)
      const separator = screen.getByTestId("separator")
      expect(separator).toHaveClass("bg-border", "shrink-0")
    })

    it("applies custom className", () => {
      render(<Separator className="my-4" data-testid="separator" />)
      const separator = screen.getByTestId("separator")
      expect(separator).toHaveClass("my-4")
    })

    it("merges custom className with base classes", () => {
      render(<Separator className="bg-red-500" data-testid="separator" />)
      const separator = screen.getByTestId("separator")
      expect(separator).toHaveClass("shrink-0")
      expect(separator).toHaveClass("bg-red-500")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations for horizontal separator", async () => {
      const { container } = render(<Separator orientation="horizontal" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for vertical separator", async () => {
      const { container } = render(<Separator orientation="vertical" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for decorative separator", async () => {
      const { container } = render(<Separator decorative />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for non-decorative separator", async () => {
      const { container } = render(<Separator decorative={false} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to the root element", () => {
      render(<Separator data-testid="separator-test" />)
      expect(screen.getByTestId("separator-test")).toBeInTheDocument()
    })

    it("forwards id prop", () => {
      render(<Separator id="my-separator" data-testid="separator" />)
      const separator = screen.getByTestId("separator")
      expect(separator).toHaveAttribute("id", "my-separator")
    })
  })
})

