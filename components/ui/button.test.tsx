import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import { Button } from "./button"
import { MaterialSymbol } from "@/components/material-symbol"

expect.extend(toHaveNoViolations)

describe("Button", () => {
  describe("Rendering", () => {
    it("renders with text content", () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()
    })

    it("renders with default variant", () => {
      const { container } = render(<Button>Default</Button>)
      const button = screen.getByRole("button")
      expect(button).toHaveClass("bg-semantic-surface-primary")
    })

    it("renders all variants correctly", () => {
      const variants = ["default", "destructive", "outline", "secondary", "ghost", "link", "tertiary"] as const
      
      variants.forEach((variant) => {
        const { unmount } = render(<Button variant={variant}>{variant}</Button>)
        const button = screen.getByRole("button", { name: variant })
        expect(button).toBeInTheDocument()
        unmount()
      })
    })

    it("renders all sizes correctly", () => {
      const sizes = ["xs", "sm", "default", "lg", "icon", "icon-sm", "icon-lg", "icon-xs"] as const
      
      sizes.forEach((size) => {
        const { unmount } = render(<Button size={size}>Size {size}</Button>)
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
        unmount()
      })
    })

    it("renders as child component when asChild is true", () => {
      render(
        <Button asChild>
          <a href="/test">Link Button</a>
        </Button>
      )
      expect(screen.getByRole("link", { name: /link button/i })).toBeInTheDocument()
    })
  })

  describe("Interactions", () => {
    it("calls onClick handler when clicked", async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      
      render(<Button onClick={handleClick}>Click me</Button>)
      const button = screen.getByRole("button")
      
      await user.click(button)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it("does not call onClick when disabled", async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      
      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      )
      const button = screen.getByRole("button")
      
      await user.click(button)
      expect(handleClick).not.toHaveBeenCalled()
    })

    it("is disabled when disabled prop is true", () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole("button")
      expect(button).toBeDisabled()
    })
  })

  describe("Icon-only buttons", () => {
    it("renders icon-only button", () => {
      render(
        <Button size="icon" aria-label="Close">
          <MaterialSymbol name="close" size={20} />
        </Button>
      )
      const button = screen.getByRole("button", { name: /close/i })
      expect(button).toBeInTheDocument()
    })

    it("requires aria-label for icon-only buttons", () => {
      render(
        <Button size="icon">
          <MaterialSymbol name="close" size={20} />
        </Button>
      )
      const button = screen.getByRole("button")
      // Should have aria-label (fallback or provided)
      expect(button).toHaveAttribute("aria-label")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(<Button>Accessible Button</Button>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for icon-only button", async () => {
      const { container } = render(
        <Button size="icon" aria-label="Close dialog">
          <MaterialSymbol name="close" size={20} />
        </Button>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for disabled button", async () => {
      const { container } = render(<Button disabled>Disabled</Button>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Custom className", () => {
    it("applies custom className", () => {
      render(<Button className="custom-class">Custom</Button>)
      const button = screen.getByRole("button")
      expect(button).toHaveClass("custom-class")
    })
  })
})

