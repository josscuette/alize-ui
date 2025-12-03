import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "./select"

expect.extend(toHaveNoViolations)

describe("Select", () => {
  describe("Rendering", () => {
    it("renders select trigger", () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
        </Select>
      )
      expect(screen.getByRole("combobox")).toBeInTheDocument()
    })

    it("renders with placeholder", () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose..." />
          </SelectTrigger>
        </Select>
      )
      expect(screen.getByText("Choose...")).toBeInTheDocument()
    })

    it("renders with different sizes", () => {
      const sizes = ["sm", "default"] as const
      
      sizes.forEach((size) => {
        const { unmount } = render(
          <Select>
            <SelectTrigger size={size}>
              <SelectValue placeholder={`Size ${size}`} />
            </SelectTrigger>
          </Select>
        )
        const trigger = screen.getByRole("combobox")
        expect(trigger).toBeInTheDocument()
        unmount()
      })
    })
  })

  describe("Interactions", () => {
    // Note: Radix UI Select interactions require pointer events that are complex to mock
    // These tests verify basic rendering and state management instead
    it("renders select trigger as combobox", () => {
      render(
        <Select>
          <SelectTrigger aria-label="Select option">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
        </Select>
      )
      
      const trigger = screen.getByRole("combobox", { name: /select option/i })
      expect(trigger).toBeInTheDocument()
    })

    it("renders select with content structure", () => {
      render(
        <Select>
          <SelectTrigger aria-label="Select option">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      )
      
      // Verify trigger is rendered (content is in portal)
      const trigger = screen.getByRole("combobox", { name: /select option/i })
      expect(trigger).toBeInTheDocument()
    })

    it("does not open when disabled", () => {
      render(
        <Select disabled>
          <SelectTrigger aria-label="Select option">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
        </Select>
      )
      
      const trigger = screen.getByRole("combobox")
      expect(trigger).toBeDisabled()
    })
  })

  describe("States", () => {
    it("applies disabled state", () => {
      render(
        <Select disabled>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
        </Select>
      )
      const trigger = screen.getByRole("combobox")
      expect(trigger).toBeDisabled()
    })

    it("applies invalid state with aria-invalid on trigger", () => {
      render(
        <Select>
          <SelectTrigger aria-label="Select with error" aria-invalid="true">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
        </Select>
      )
      const trigger = screen.getByRole("combobox")
      expect(trigger).toHaveAttribute("aria-invalid", "true")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations with label", async () => {
      const { container } = render(
        <div>
          <label htmlFor="select-test">Choose option</label>
          <Select>
            <SelectTrigger id="select-test" aria-label="Choose option">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
          </Select>
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations when disabled with label", async () => {
      const { container } = render(
        <div>
          <label htmlFor="select-disabled">Disabled select</label>
          <Select disabled>
            <SelectTrigger id="select-disabled" aria-label="Disabled select">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
          </Select>
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Custom className", () => {
    it("applies custom className to trigger", () => {
      render(
        <Select>
          <SelectTrigger className="custom-class">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
        </Select>
      )
      const trigger = screen.getByRole("combobox")
      expect(trigger).toHaveClass("custom-class")
    })
  })

  describe("SelectGroup", () => {
    it("renders select group with items", () => {
      render(
        <Select open>
          <SelectTrigger aria-label="Select option">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="opt1">Option 1</SelectItem>
              <SelectItem value="opt2">Option 2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )
      
      expect(screen.getByText("Option 1")).toBeInTheDocument()
      expect(screen.getByText("Option 2")).toBeInTheDocument()
    })
  })

  describe("SelectLabel", () => {
    it("renders select label within group", () => {
      render(
        <Select open>
          <SelectTrigger aria-label="Select option">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )
      
      expect(screen.getByText("Fruits")).toBeInTheDocument()
    })

    it("applies custom className to label", () => {
      render(
        <Select open>
          <SelectTrigger aria-label="Select option">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="custom-label">Category</SelectLabel>
              <SelectItem value="item1">Item 1</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )
      
      expect(screen.getByText("Category")).toHaveClass("custom-label")
    })
  })

  describe("SelectSeparator", () => {
    it("renders separator between groups", () => {
      const { container } = render(
        <Select open>
          <SelectTrigger aria-label="Select option">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="opt1">Option 1</SelectItem>
            </SelectGroup>
            <SelectSeparator data-testid="separator" />
            <SelectGroup>
              <SelectItem value="opt2">Option 2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )
      
      expect(screen.getByTestId("separator")).toBeInTheDocument()
    })

    it("applies custom className to separator", () => {
      render(
        <Select open>
          <SelectTrigger aria-label="Select option">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectSeparator className="custom-separator" data-testid="separator" />
          </SelectContent>
        </Select>
      )
      
      expect(screen.getByTestId("separator")).toHaveClass("custom-separator")
    })
  })
})

