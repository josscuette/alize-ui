import { describe, it, expect } from "vitest"
import { render, screen } from "@/lib/test-utils"
import { axe, toHaveNoViolations } from "jest-axe"
import { InputGroup } from "./input-group"
import { Input } from "./input"
import { Button } from "./button"

expect.extend(toHaveNoViolations)

describe("InputGroup", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<InputGroup data-testid="input-group">Content</InputGroup>)
      expect(screen.getByTestId("input-group")).toHaveAttribute("data-slot", "input-group")
    })

    it("renders children correctly", () => {
      render(
        <InputGroup>
          <Input placeholder="Search..." />
          <Button>Search</Button>
        </InputGroup>
      )
      expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument()
      expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument()
    })

    it("renders multiple children", () => {
      render(
        <InputGroup>
          <span>Prefix</span>
          <Input placeholder="Input" />
          <span>Suffix</span>
        </InputGroup>
      )
      expect(screen.getByText("Prefix")).toBeInTheDocument()
      expect(screen.getByText("Suffix")).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(<InputGroup data-testid="input-group">Content</InputGroup>)
      const group = screen.getByTestId("input-group")
      expect(group).toHaveClass("flex", "items-center")
    })

    it("applies custom className", () => {
      render(<InputGroup className="custom-class" data-testid="input-group">Content</InputGroup>)
      expect(screen.getByTestId("input-group")).toHaveClass("custom-class")
    })

    it("merges custom className with base classes", () => {
      render(<InputGroup className="gap-2" data-testid="input-group">Content</InputGroup>)
      const group = screen.getByTestId("input-group")
      expect(group).toHaveClass("flex", "items-center", "gap-2")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <InputGroup>
          <label htmlFor="search">Search</label>
          <Input id="search" placeholder="Search..." />
          <Button>Search</Button>
        </InputGroup>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props", () => {
      render(<InputGroup data-testid="input-group-test">Content</InputGroup>)
      expect(screen.getByTestId("input-group-test")).toBeInTheDocument()
    })

    it("forwards id prop", () => {
      render(<InputGroup id="my-input-group" data-testid="input-group">Content</InputGroup>)
      expect(screen.getByTestId("input-group")).toHaveAttribute("id", "my-input-group")
    })
  })
})

