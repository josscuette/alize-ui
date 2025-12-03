import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import { ToggleGroup, ToggleGroupItem } from "./toggle-group"

expect.extend(toHaveNoViolations)

describe("ToggleGroup", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <ToggleGroup type="single" data-testid="toggle-group">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
        </ToggleGroup>
      )
      expect(screen.getByTestId("toggle-group")).toHaveAttribute("data-slot", "toggle-group")
    })

    it("renders children correctly", () => {
      render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
          <ToggleGroupItem value="b">B</ToggleGroupItem>
        </ToggleGroup>
      )
      expect(screen.getByText("A")).toBeInTheDocument()
      expect(screen.getByText("B")).toBeInTheDocument()
    })
  })

  describe("Single selection", () => {
    it("allows single selection", async () => {
      const user = userEvent.setup()
      
      render(
        <ToggleGroup type="single" defaultValue="a">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
          <ToggleGroupItem value="b">B</ToggleGroupItem>
        </ToggleGroup>
      )
      
      const itemA = screen.getByText("A")
      const itemB = screen.getByText("B")
      
      expect(itemA).toHaveAttribute("data-state", "on")
      expect(itemB).toHaveAttribute("data-state", "off")
      
      await user.click(itemB)
      
      expect(itemA).toHaveAttribute("data-state", "off")
      expect(itemB).toHaveAttribute("data-state", "on")
    })

    it("calls onValueChange for single selection", async () => {
      const handleValueChange = vi.fn()
      const user = userEvent.setup()
      
      render(
        <ToggleGroup type="single" onValueChange={handleValueChange}>
          <ToggleGroupItem value="a">A</ToggleGroupItem>
          <ToggleGroupItem value="b">B</ToggleGroupItem>
        </ToggleGroup>
      )
      
      await user.click(screen.getByText("A"))
      expect(handleValueChange).toHaveBeenCalledWith("a")
    })
  })

  describe("Multiple selection", () => {
    it("allows multiple selection", async () => {
      const user = userEvent.setup()
      
      render(
        <ToggleGroup type="multiple" defaultValue={["a"]}>
          <ToggleGroupItem value="a">A</ToggleGroupItem>
          <ToggleGroupItem value="b">B</ToggleGroupItem>
        </ToggleGroup>
      )
      
      const itemA = screen.getByText("A")
      const itemB = screen.getByText("B")
      
      expect(itemA).toHaveAttribute("data-state", "on")
      expect(itemB).toHaveAttribute("data-state", "off")
      
      await user.click(itemB)
      
      expect(itemA).toHaveAttribute("data-state", "on")
      expect(itemB).toHaveAttribute("data-state", "on")
    })
  })

  describe("Variants", () => {
    it("passes variant to items", () => {
      render(
        <ToggleGroup type="single" variant="outline" data-testid="toggle-group">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
        </ToggleGroup>
      )
      expect(screen.getByTestId("toggle-group")).toHaveAttribute("data-variant", "outline")
    })
  })

  describe("Sizes", () => {
    it("passes size to items", () => {
      render(
        <ToggleGroup type="single" size="sm" data-testid="toggle-group">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
        </ToggleGroup>
      )
      expect(screen.getByTestId("toggle-group")).toHaveAttribute("data-size", "sm")
    })
  })

  describe("Styling", () => {
    it("applies custom className", () => {
      render(
        <ToggleGroup type="single" className="custom-class" data-testid="toggle-group">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
        </ToggleGroup>
      )
      expect(screen.getByTestId("toggle-group")).toHaveClass("custom-class")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <ToggleGroup type="single" aria-label="Text formatting">
          <ToggleGroupItem value="bold" aria-label="Bold">B</ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">I</ToggleGroupItem>
        </ToggleGroup>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has correct group role", () => {
      render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
        </ToggleGroup>
      )
      expect(screen.getByRole("group")).toBeInTheDocument()
    })
  })
})

describe("ToggleGroupItem", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="a" data-testid="item">A</ToggleGroupItem>
        </ToggleGroup>
      )
      expect(screen.getByTestId("item")).toHaveAttribute("data-slot", "toggle-group-item")
    })
  })

  describe("Disabled state", () => {
    it("renders disabled state", () => {
      render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="a" disabled>A</ToggleGroupItem>
        </ToggleGroup>
      )
      expect(screen.getByRole("radio")).toBeDisabled()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props", () => {
      render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="a" data-testid="item-test">A</ToggleGroupItem>
        </ToggleGroup>
      )
      expect(screen.getByTestId("item-test")).toBeInTheDocument()
    })
  })
})

