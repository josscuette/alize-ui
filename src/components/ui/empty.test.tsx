import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Empty } from "./empty"

describe("Empty", () => {
  describe("Rendering", () => {
    it("renders with default title", () => {
      render(<Empty />)

      expect(screen.getByText("No results found")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(<Empty data-testid="empty" />)

      expect(screen.getByTestId("empty")).toHaveAttribute("data-slot", "empty")
    })
  })

  describe("Props", () => {
    it("renders custom title", () => {
      render(<Empty title="Nothing here" />)

      expect(screen.getByText("Nothing here")).toBeInTheDocument()
    })

    it("renders description when provided", () => {
      render(<Empty description="Try adjusting your search" />)

      expect(screen.getByText("Try adjusting your search")).toBeInTheDocument()
    })

    it("renders icon when provided", () => {
      render(
        <Empty
          icon={<div data-testid="icon">🔍</div>}
        />
      )

      expect(screen.getByTestId("icon")).toBeInTheDocument()
    })

    it("renders children when provided", () => {
      render(
        <Empty>
          <button>Refresh</button>
        </Empty>
      )

      expect(screen.getByText("Refresh")).toBeInTheDocument()
    })

    it("accepts custom className", () => {
      render(<Empty className="custom-class" data-testid="empty" />)

      expect(screen.getByTestId("empty")).toHaveClass("custom-class")
    })
  })

  describe("Complete example", () => {
    it("renders all props together", () => {
      render(
        <Empty
          title="No items found"
          description="Try creating a new item"
          icon={<span data-testid="icon">📦</span>}
          data-testid="empty"
        >
          <button>Create Item</button>
        </Empty>
      )

      expect(screen.getByText("No items found")).toBeInTheDocument()
      expect(screen.getByText("Try creating a new item")).toBeInTheDocument()
      expect(screen.getByTestId("icon")).toBeInTheDocument()
      expect(screen.getByText("Create Item")).toBeInTheDocument()
    })
  })

  describe("Layout", () => {
    it("has flex column layout", () => {
      render(<Empty data-testid="empty" />)

      expect(screen.getByTestId("empty")).toHaveClass(
        "flex",
        "flex-col",
        "items-center",
        "justify-center"
      )
    })

    it("has text center alignment", () => {
      render(<Empty data-testid="empty" />)

      expect(screen.getByTestId("empty")).toHaveClass("text-center")
    })
  })
})

