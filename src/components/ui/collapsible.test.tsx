import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./collapsible"

describe("Collapsible", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(
        <Collapsible data-testid="collapsible">
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      )

      expect(screen.getByTestId("collapsible")).toBeInTheDocument()
      expect(screen.getByText("Toggle")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(
        <Collapsible data-testid="collapsible">
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      )

      expect(screen.getByTestId("collapsible")).toHaveAttribute(
        "data-slot",
        "collapsible"
      )
    })
  })

  describe("Interaction", () => {
    it("toggles content visibility on trigger click", async () => {
      const user = userEvent.setup()
      
      render(
        <Collapsible>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent data-testid="content">
            Hidden Content
          </CollapsibleContent>
        </Collapsible>
      )

      // Content should be hidden initially (may not be in DOM)
      expect(screen.queryByText("Hidden Content")).not.toBeInTheDocument()

      // Click to open
      await user.click(screen.getByText("Toggle"))
      
      // Content should be visible
      expect(screen.getByText("Hidden Content")).toBeVisible()

      // Click to close - content is removed from DOM
      await user.click(screen.getByText("Toggle"))
      
      // Content should be removed from DOM
      expect(screen.queryByText("Hidden Content")).not.toBeInTheDocument()
    })
  })

  describe("Controlled state", () => {
    it("respects open prop", () => {
      render(
        <Collapsible open={true}>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Visible Content</CollapsibleContent>
        </Collapsible>
      )

      expect(screen.getByText("Visible Content")).toBeVisible()
    })

    it("respects defaultOpen prop", () => {
      render(
        <Collapsible defaultOpen>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Default Open Content</CollapsibleContent>
        </Collapsible>
      )

      expect(screen.getByText("Default Open Content")).toBeVisible()
    })
  })

  describe("Props", () => {
    it("accepts disabled prop", () => {
      render(
        <Collapsible disabled data-testid="collapsible">
          <CollapsibleTrigger data-testid="trigger">Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      )

      expect(screen.getByTestId("collapsible")).toHaveAttribute(
        "data-disabled",
        ""
      )
    })

    it("accepts custom className", () => {
      render(
        <Collapsible className="custom-class" data-testid="collapsible">
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      )

      expect(screen.getByTestId("collapsible")).toHaveClass("custom-class")
    })
  })
})

describe("CollapsibleTrigger", () => {
  it("renders as button by default", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger data-testid="trigger">Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    )

    expect(screen.getByTestId("trigger").tagName).toBe("BUTTON")
  })

  it("has data-slot attribute", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger data-testid="trigger">Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    )

    expect(screen.getByTestId("trigger")).toHaveAttribute(
      "data-slot",
      "collapsible-trigger"
    )
  })

  it("accepts custom className", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger className="custom-class" data-testid="trigger">
          Toggle
        </CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    )

    expect(screen.getByTestId("trigger")).toHaveClass("custom-class")
  })
})

describe("CollapsibleContent", () => {
  it("has data-slot attribute", () => {
    render(
      <Collapsible open>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent data-testid="content">Content</CollapsibleContent>
      </Collapsible>
    )

    expect(screen.getByTestId("content")).toHaveAttribute(
      "data-slot",
      "collapsible-content"
    )
  })

  it("accepts custom className", () => {
    render(
      <Collapsible open>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent className="custom-class" data-testid="content">
          Content
        </CollapsibleContent>
      </Collapsible>
    )

    expect(screen.getByTestId("content")).toHaveClass("custom-class")
  })

  it("renders children when open", () => {
    render(
      <Collapsible open>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>
          <div data-testid="nested">Nested Content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    expect(screen.getByTestId("nested")).toBeInTheDocument()
  })
})

