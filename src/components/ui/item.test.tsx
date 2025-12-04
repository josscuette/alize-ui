import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Item } from "./item"

describe("Item", () => {
  describe("Rendering", () => {
    it("renders as div element", () => {
      render(<Item data-testid="item">Item content</Item>)

      expect(screen.getByTestId("item").tagName).toBe("DIV")
    })

    it("renders with data-slot attribute", () => {
      render(<Item data-testid="item">Item content</Item>)

      expect(screen.getByTestId("item")).toHaveAttribute("data-slot", "item")
    })

    it("renders content", () => {
      render(<Item>Click me</Item>)

      expect(screen.getByText("Click me")).toBeInTheDocument()
    })

    it("renders children", () => {
      render(
        <Item>
          <span data-testid="child">Child content</span>
        </Item>
      )

      expect(screen.getByTestId("child")).toBeInTheDocument()
    })
  })

  describe("Selected state", () => {
    it("is not selected by default", () => {
      render(<Item data-testid="item">Item</Item>)

      // Default state should not have selected styling
      expect(screen.getByTestId("item")).not.toHaveClass("bg-semantic-surface-overlays-level1")
    })

    it("applies selected styling when selected", () => {
      render(<Item selected data-testid="item">Selected Item</Item>)

      expect(screen.getByTestId("item")).toHaveClass(
        "bg-semantic-surface-overlays-level1",
        "text-foreground"
      )
    })

    it("respects selected=false", () => {
      render(<Item selected={false} data-testid="item">Item</Item>)

      // Explicitly not selected
      expect(screen.getByTestId("item")).not.toHaveClass("bg-semantic-surface-overlays-level1")
    })
  })

  describe("Props", () => {
    it("accepts custom className", () => {
      render(<Item className="custom-class" data-testid="item">Item</Item>)

      expect(screen.getByTestId("item")).toHaveClass("custom-class")
    })

    it("forwards additional props", () => {
      render(
        <Item data-testid="item" role="listitem" aria-label="Menu item">
          Item
        </Item>
      )

      expect(screen.getByTestId("item")).toHaveAttribute("role", "listitem")
      expect(screen.getByTestId("item")).toHaveAttribute("aria-label", "Menu item")
    })
  })

  describe("Styling", () => {
    it("has flex layout", () => {
      render(<Item data-testid="item">Item</Item>)

      expect(screen.getByTestId("item")).toHaveClass("flex", "items-center")
    })

    it("has gap between items", () => {
      render(<Item data-testid="item">Item</Item>)

      expect(screen.getByTestId("item")).toHaveClass("gap-2")
    })

    it("has padding", () => {
      render(<Item data-testid="item">Item</Item>)

      expect(screen.getByTestId("item")).toHaveClass("px-3", "py-2")
    })

    it("has rounded corners", () => {
      render(<Item data-testid="item">Item</Item>)

      expect(screen.getByTestId("item")).toHaveClass("rounded-md")
    })

    it("has hover styles", () => {
      render(<Item data-testid="item">Item</Item>)

      expect(screen.getByTestId("item")).toHaveClass(
        "hover:bg-semantic-surface-overlays-level1",
        "hover:text-foreground"
      )
    })

    it("has transition", () => {
      render(<Item data-testid="item">Item</Item>)

      expect(screen.getByTestId("item")).toHaveClass("transition-colors")
    })
  })

  describe("Multiple items", () => {
    it("can render a list of items", () => {
      render(
        <div>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item selected>Item 3</Item>
        </div>
      )

      expect(screen.getByText("Item 1")).toBeInTheDocument()
      expect(screen.getByText("Item 2")).toBeInTheDocument()
      expect(screen.getByText("Item 3")).toBeInTheDocument()
    })

    it("only one item can be selected visually", () => {
      render(
        <div>
          <Item data-testid="item-1">Item 1</Item>
          <Item selected data-testid="item-2">Item 2</Item>
          <Item data-testid="item-3">Item 3</Item>
        </div>
      )

      expect(screen.getByTestId("item-1")).not.toHaveClass("bg-semantic-surface-overlays-level1")
      expect(screen.getByTestId("item-2")).toHaveClass("bg-semantic-surface-overlays-level1")
      expect(screen.getByTestId("item-3")).not.toHaveClass("bg-semantic-surface-overlays-level1")
    })
  })
})

