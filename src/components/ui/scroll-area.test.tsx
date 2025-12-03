import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { ScrollArea, ScrollBar } from "./scroll-area"

describe("ScrollArea", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(
        <ScrollArea>
          <div data-testid="child">Content</div>
        </ScrollArea>
      )

      expect(screen.getByTestId("child")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(
        <ScrollArea data-testid="scroll-area">
          <div>Content</div>
        </ScrollArea>
      )

      expect(screen.getByTestId("scroll-area")).toHaveAttribute(
        "data-slot",
        "scroll-area"
      )
    })

    it("applies relative positioning class", () => {
      render(
        <ScrollArea data-testid="scroll-area">
          <div>Content</div>
        </ScrollArea>
      )

      expect(screen.getByTestId("scroll-area")).toHaveClass("relative")
    })
  })

  describe("Props", () => {
    it("accepts custom className", () => {
      render(
        <ScrollArea className="h-72 w-48" data-testid="scroll-area">
          <div>Content</div>
        </ScrollArea>
      )

      expect(screen.getByTestId("scroll-area")).toHaveClass("h-72", "w-48")
    })

    it("forwards additional props", () => {
      render(
        <ScrollArea data-testid="scroll-area" aria-label="Scrollable content">
          <div>Content</div>
        </ScrollArea>
      )

      expect(screen.getByTestId("scroll-area")).toHaveAttribute(
        "aria-label",
        "Scrollable content"
      )
    })
  })

  describe("Content", () => {
    it("renders long content", () => {
      const longContent = Array(100)
        .fill(null)
        .map((_, i) => <div key={i}>Item {i}</div>)

      render(<ScrollArea className="h-72">{longContent}</ScrollArea>)

      expect(screen.getByText("Item 0")).toBeInTheDocument()
      expect(screen.getByText("Item 99")).toBeInTheDocument()
    })
  })
})

describe("ScrollBar", () => {
  // Note: Radix ScrollArea only renders scrollbars when there's actual overflow,
  // which doesn't happen in jsdom. We test component exports and props.

  describe("Component export", () => {
    it("ScrollBar is exported and can be imported", () => {
      expect(ScrollBar).toBeDefined()
      expect(typeof ScrollBar).toBe("function")
    })

    it("ScrollArea is exported and can be imported", () => {
      expect(ScrollArea).toBeDefined()
      expect(typeof ScrollArea).toBe("function")
    })
  })

  describe("ScrollArea integration", () => {
    it("renders scroll area with viewport", () => {
      const { container } = render(
        <ScrollArea data-testid="scroll-area">
          <div>Content</div>
        </ScrollArea>
      )

      // Check viewport is rendered
      const viewport = container.querySelector('[data-slot="scroll-area-viewport"]')
      expect(viewport).toBeInTheDocument()
    })
  })
})

