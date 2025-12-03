import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Kbd, KbdGroup } from "./kbd"

describe("Kbd", () => {
  describe("Rendering", () => {
    it("renders as kbd element", () => {
      render(<Kbd data-testid="kbd">Ctrl</Kbd>)

      expect(screen.getByTestId("kbd").tagName).toBe("KBD")
    })

    it("renders with data-slot attribute", () => {
      render(<Kbd data-testid="kbd">Ctrl</Kbd>)

      expect(screen.getByTestId("kbd")).toHaveAttribute("data-slot", "kbd")
    })

    it("renders content", () => {
      render(<Kbd>Ctrl</Kbd>)

      expect(screen.getByText("Ctrl")).toBeInTheDocument()
    })
  })

  describe("Props", () => {
    it("accepts custom className", () => {
      render(<Kbd className="custom-class" data-testid="kbd">K</Kbd>)

      expect(screen.getByTestId("kbd")).toHaveClass("custom-class")
    })

    it("forwards additional props", () => {
      render(<Kbd data-testid="kbd" aria-label="Control key">Ctrl</Kbd>)

      expect(screen.getByTestId("kbd")).toHaveAttribute(
        "aria-label",
        "Control key"
      )
    })
  })

  describe("Styling", () => {
    it("has base styling classes", () => {
      render(<Kbd data-testid="kbd">K</Kbd>)

      expect(screen.getByTestId("kbd")).toHaveClass(
        "inline-flex",
        "items-center",
        "justify-center"
      )
    })
  })

  describe("Common keyboard keys", () => {
    it("renders single character keys", () => {
      render(<Kbd>K</Kbd>)
      expect(screen.getByText("K")).toBeInTheDocument()
    })

    it("renders modifier keys", () => {
      render(<Kbd>Ctrl</Kbd>)
      expect(screen.getByText("Ctrl")).toBeInTheDocument()
    })

    it("renders special character keys", () => {
      render(<Kbd>⌘</Kbd>)
      expect(screen.getByText("⌘")).toBeInTheDocument()
    })

    it("renders arrow keys", () => {
      render(<Kbd>↑</Kbd>)
      expect(screen.getByText("↑")).toBeInTheDocument()
    })
  })
})

describe("KbdGroup", () => {
  describe("Rendering", () => {
    it("renders as kbd element", () => {
      render(
        <KbdGroup data-testid="kbd-group">
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      )

      expect(screen.getByTestId("kbd-group").tagName).toBe("KBD")
    })

    it("renders with data-slot attribute", () => {
      render(
        <KbdGroup data-testid="kbd-group">
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      )

      expect(screen.getByTestId("kbd-group")).toHaveAttribute(
        "data-slot",
        "kbd-group"
      )
    })

    it("renders children", () => {
      render(
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      )

      expect(screen.getByText("Ctrl")).toBeInTheDocument()
      expect(screen.getByText("K")).toBeInTheDocument()
    })
  })

  describe("Props", () => {
    it("accepts custom className", () => {
      render(
        <KbdGroup className="custom-class" data-testid="kbd-group">
          <Kbd>K</Kbd>
        </KbdGroup>
      )

      expect(screen.getByTestId("kbd-group")).toHaveClass("custom-class")
    })
  })

  describe("Styling", () => {
    it("has inline-flex layout", () => {
      render(
        <KbdGroup data-testid="kbd-group">
          <Kbd>K</Kbd>
        </KbdGroup>
      )

      expect(screen.getByTestId("kbd-group")).toHaveClass("inline-flex")
    })

    it("has gap between items", () => {
      render(
        <KbdGroup data-testid="kbd-group">
          <Kbd>K</Kbd>
        </KbdGroup>
      )

      expect(screen.getByTestId("kbd-group")).toHaveClass("gap-1")
    })
  })
})

describe("Keyboard shortcut combinations", () => {
  it("renders Ctrl+K shortcut", () => {
    render(
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    )

    expect(screen.getByText("Ctrl")).toBeInTheDocument()
    expect(screen.getByText("K")).toBeInTheDocument()
  })

  it("renders Cmd+Shift+P shortcut", () => {
    render(
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    )

    expect(screen.getByText("⌘")).toBeInTheDocument()
    expect(screen.getByText("⇧")).toBeInTheDocument()
    expect(screen.getByText("P")).toBeInTheDocument()
  })
})

