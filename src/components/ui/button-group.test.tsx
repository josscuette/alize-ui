import { describe, it, expect } from "vitest"
import { render, screen } from "@/lib/test-utils"
import { axe, toHaveNoViolations } from "jest-axe"
import { ButtonGroup, ButtonGroupText, ButtonGroupSeparator } from "./button-group"
import { Button } from "./button"

expect.extend(toHaveNoViolations)

describe("ButtonGroup", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<ButtonGroup data-testid="button-group">Content</ButtonGroup>)
      expect(screen.getByTestId("button-group")).toHaveAttribute("data-slot", "button-group")
    })

    it("renders with role group", () => {
      render(<ButtonGroup>Content</ButtonGroup>)
      expect(screen.getByRole("group")).toBeInTheDocument()
    })

    it("renders children correctly", () => {
      render(
        <ButtonGroup>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      )
      expect(screen.getByText("Button 1")).toBeInTheDocument()
      expect(screen.getByText("Button 2")).toBeInTheDocument()
    })
  })

  describe("Orientation", () => {
    it("renders horizontal orientation by default", () => {
      render(<ButtonGroup orientation="horizontal" data-testid="button-group">Content</ButtonGroup>)
      const group = screen.getByTestId("button-group")
      expect(group).toHaveAttribute("data-orientation", "horizontal")
    })

    it("renders vertical orientation", () => {
      render(<ButtonGroup orientation="vertical" data-testid="button-group">Content</ButtonGroup>)
      const group = screen.getByTestId("button-group")
      expect(group).toHaveAttribute("data-orientation", "vertical")
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(<ButtonGroup data-testid="button-group">Content</ButtonGroup>)
      const group = screen.getByTestId("button-group")
      expect(group).toHaveClass("flex", "w-fit", "items-stretch")
    })

    it("applies custom className", () => {
      render(<ButtonGroup className="custom-class" data-testid="button-group">Content</ButtonGroup>)
      expect(screen.getByTestId("button-group")).toHaveClass("custom-class")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <ButtonGroup>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props", () => {
      render(<ButtonGroup data-testid="button-group-test">Content</ButtonGroup>)
      expect(screen.getByTestId("button-group-test")).toBeInTheDocument()
    })
  })
})

describe("ButtonGroupText", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(<ButtonGroupText>Label</ButtonGroupText>)
      expect(screen.getByText("Label")).toBeInTheDocument()
    })

    it("renders as div by default", () => {
      render(<ButtonGroupText data-testid="text">Label</ButtonGroupText>)
      expect(screen.getByTestId("text").tagName).toBe("DIV")
    })

    it("renders as child element when asChild is true", () => {
      render(
        <ButtonGroupText asChild>
          <span>Label</span>
        </ButtonGroupText>
      )
      expect(screen.getByText("Label").tagName).toBe("SPAN")
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(<ButtonGroupText data-testid="text">Label</ButtonGroupText>)
      expect(screen.getByTestId("text")).toHaveClass("flex", "items-center", "rounded-md", "border")
    })

    it("applies custom className", () => {
      render(<ButtonGroupText className="custom-class" data-testid="text">Label</ButtonGroupText>)
      expect(screen.getByTestId("text")).toHaveClass("custom-class")
    })
  })
})

describe("ButtonGroupSeparator", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<ButtonGroupSeparator data-testid="separator" />)
      expect(screen.getByTestId("separator")).toHaveAttribute("data-slot", "button-group-separator")
    })
  })

  describe("Orientation", () => {
    it("renders vertical by default", () => {
      render(<ButtonGroupSeparator data-testid="separator" />)
      const separator = screen.getByTestId("separator")
      expect(separator).toHaveAttribute("data-orientation", "vertical")
    })

    it("renders horizontal orientation", () => {
      render(<ButtonGroupSeparator orientation="horizontal" data-testid="separator" />)
      const separator = screen.getByTestId("separator")
      expect(separator).toHaveAttribute("data-orientation", "horizontal")
    })
  })

  describe("Styling", () => {
    it("applies custom className", () => {
      render(<ButtonGroupSeparator className="custom-class" data-testid="separator" />)
      expect(screen.getByTestId("separator")).toHaveClass("custom-class")
    })
  })
})

