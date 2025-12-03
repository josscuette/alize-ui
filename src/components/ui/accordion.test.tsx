import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion"

describe("Accordion", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(
        <Accordion type="single" data-testid="accordion">
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      expect(screen.getByTestId("accordion")).toBeInTheDocument()
      expect(screen.getByText("Section 1")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(
        <Accordion type="single" data-testid="accordion">
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      expect(screen.getByTestId("accordion")).toHaveAttribute(
        "data-slot",
        "accordion"
      )
    })
  })

  describe("Single type accordion", () => {
    it("expands only one item at a time", async () => {
      const user = userEvent.setup()
      
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      // Open first item
      await user.click(screen.getByText("Section 1"))
      expect(screen.getByText("Content 1")).toBeVisible()

      // Open second item (first should close - content may be removed from DOM)
      await user.click(screen.getByText("Section 2"))
      expect(screen.getByText("Content 2")).toBeVisible()
      // Content 1 is removed from DOM when collapsed
      expect(screen.queryByText("Content 1")).not.toBeInTheDocument()
    })

    it("allows collapsing when collapsible is true", async () => {
      const user = userEvent.setup()
      
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      // Open item
      await user.click(screen.getByText("Section 1"))
      expect(screen.getByText("Content 1")).toBeVisible()

      // Close item - content is removed from DOM
      await user.click(screen.getByText("Section 1"))
      expect(screen.queryByText("Content 1")).not.toBeInTheDocument()
    })
  })

  describe("Multiple type accordion", () => {
    it("allows multiple items to be open", async () => {
      const user = userEvent.setup()
      
      render(
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      // Open first item
      await user.click(screen.getByText("Section 1"))
      expect(screen.getByText("Content 1")).toBeVisible()

      // Open second item (first should remain open)
      await user.click(screen.getByText("Section 2"))
      expect(screen.getByText("Content 1")).toBeVisible()
      expect(screen.getByText("Content 2")).toBeVisible()
    })
  })

  describe("Controlled state", () => {
    it("respects defaultValue prop", () => {
      render(
        <Accordion type="single" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      expect(screen.getByText("Content 1")).toBeVisible()
    })
  })

  describe("Props", () => {
    it("accepts custom className", () => {
      render(
        <Accordion type="single" className="custom-class" data-testid="accordion">
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

      expect(screen.getByTestId("accordion")).toHaveClass("custom-class")
    })
  })
})

describe("AccordionItem", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1" data-testid="item">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByTestId("item")).toHaveAttribute(
      "data-slot",
      "accordion-item"
    )
  })

  it("has border styling", () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1" data-testid="item">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByTestId("item")).toHaveClass("border-b")
  })

  it("accepts custom className", () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1" className="custom-class" data-testid="item">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByTestId("item")).toHaveClass("custom-class")
  })
})

describe("AccordionTrigger", () => {
  it("renders as button", () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger data-testid="trigger">Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByTestId("trigger").tagName).toBe("BUTTON")
  })

  it("has data-slot attribute", () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger data-testid="trigger">Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByTestId("trigger")).toHaveAttribute(
      "data-slot",
      "accordion-trigger"
    )
  })

  it("accepts custom className", () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger className="custom-class" data-testid="trigger">
            Section 1
          </AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByTestId("trigger")).toHaveClass("custom-class")
  })

  it("is keyboard accessible", async () => {
    const user = userEvent.setup()
    
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    // Focus and press Enter
    await user.tab()
    await user.keyboard("{Enter}")
    expect(screen.getByText("Content 1")).toBeVisible()

    // Press Enter again to close - content is removed from DOM
    await user.keyboard("{Enter}")
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument()
  })
})

describe("AccordionContent", () => {
  it("has data-slot attribute when visible", () => {
    render(
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent data-testid="content">Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByTestId("content")).toHaveAttribute(
      "data-slot",
      "accordion-content"
    )
  })

  it("accepts custom className", () => {
    render(
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent className="custom-class" data-testid="content">
            Content 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    // The className is applied to the inner div, not the outer Content wrapper
    const contentWrapper = screen.getByTestId("content")
    expect(contentWrapper).toBeInTheDocument()
    // Check the inner content div has the class
    expect(contentWrapper.querySelector(".custom-class")).toBeInTheDocument()
  })

  it("renders nested content", () => {
    render(
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>
            <div data-testid="nested">
              <p>Paragraph 1</p>
              <p>Paragraph 2</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByTestId("nested")).toBeInTheDocument()
    expect(screen.getByText("Paragraph 1")).toBeInTheDocument()
    expect(screen.getByText("Paragraph 2")).toBeInTheDocument()
  })
})

