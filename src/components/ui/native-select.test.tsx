import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from "./native-select"

expect.extend(toHaveNoViolations)

describe("NativeSelect", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <NativeSelect data-testid="select">
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
        </NativeSelect>
      )
      expect(screen.getByTestId("select")).toHaveAttribute("data-slot", "native-select")
    })

    it("renders as select element", () => {
      render(
        <NativeSelect>
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
        </NativeSelect>
      )
      expect(screen.getByRole("combobox")).toBeInTheDocument()
    })

    it("renders children correctly", () => {
      render(
        <NativeSelect>
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
          <NativeSelectOption value="2">Option 2</NativeSelectOption>
        </NativeSelect>
      )
      expect(screen.getByRole("option", { name: /option 1/i })).toBeInTheDocument()
      expect(screen.getByRole("option", { name: /option 2/i })).toBeInTheDocument()
    })

    it("renders with wrapper element", () => {
      const { container } = render(
        <NativeSelect>
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
        </NativeSelect>
      )
      expect(container.querySelector('[data-slot="native-select-wrapper"]')).toBeInTheDocument()
    })

    it("renders chevron icon", () => {
      const { container } = render(
        <NativeSelect>
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
        </NativeSelect>
      )
      expect(container.querySelector('[data-slot="native-select-icon"]')).toBeInTheDocument()
    })
  })

  describe("Selection", () => {
    it("selects first option by default", () => {
      render(
        <NativeSelect>
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
          <NativeSelectOption value="2">Option 2</NativeSelectOption>
        </NativeSelect>
      )
      expect(screen.getByRole("combobox")).toHaveValue("1")
    })

    it("selects specified default value", () => {
      render(
        <NativeSelect defaultValue="2">
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
          <NativeSelectOption value="2">Option 2</NativeSelectOption>
        </NativeSelect>
      )
      expect(screen.getByRole("combobox")).toHaveValue("2")
    })

    it("changes value on selection", async () => {
      const user = userEvent.setup()
      
      render(
        <NativeSelect>
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
          <NativeSelectOption value="2">Option 2</NativeSelectOption>
        </NativeSelect>
      )
      
      await user.selectOptions(screen.getByRole("combobox"), "2")
      expect(screen.getByRole("combobox")).toHaveValue("2")
    })

    it("calls onChange when selection changes", async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      
      render(
        <NativeSelect onChange={handleChange}>
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
          <NativeSelectOption value="2">Option 2</NativeSelectOption>
        </NativeSelect>
      )
      
      await user.selectOptions(screen.getByRole("combobox"), "2")
      expect(handleChange).toHaveBeenCalled()
    })
  })

  describe("Disabled state", () => {
    it("renders disabled state", () => {
      render(
        <NativeSelect disabled>
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
        </NativeSelect>
      )
      expect(screen.getByRole("combobox")).toBeDisabled()
    })

    it("cannot change value when disabled", async () => {
      const user = userEvent.setup()
      
      render(
        <NativeSelect disabled defaultValue="1">
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
          <NativeSelectOption value="2">Option 2</NativeSelectOption>
        </NativeSelect>
      )
      
      // Disabled select cannot be interacted with
      expect(screen.getByRole("combobox")).toBeDisabled()
    })
  })

  describe("Styling", () => {
    it("applies custom className", () => {
      render(
        <NativeSelect className="custom-class" data-testid="select">
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
        </NativeSelect>
      )
      expect(screen.getByTestId("select")).toHaveClass("custom-class")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <div>
          <label htmlFor="select">Choose option</label>
          <NativeSelect id="select">
            <NativeSelectOption value="1">Option 1</NativeSelectOption>
            <NativeSelectOption value="2">Option 2</NativeSelectOption>
          </NativeSelect>
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props", () => {
      render(
        <NativeSelect data-testid="select-test">
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
        </NativeSelect>
      )
      expect(screen.getByTestId("select-test")).toBeInTheDocument()
    })

    it("forwards name prop", () => {
      render(
        <NativeSelect name="country" data-testid="select">
          <NativeSelectOption value="us">United States</NativeSelectOption>
        </NativeSelect>
      )
      expect(screen.getByTestId("select")).toHaveAttribute("name", "country")
    })
  })
})

describe("NativeSelectOption", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <NativeSelect>
          <NativeSelectOption value="1" data-testid="option">Option 1</NativeSelectOption>
        </NativeSelect>
      )
      expect(screen.getByTestId("option")).toHaveAttribute("data-slot", "native-select-option")
    })

    it("renders with correct value", () => {
      render(
        <NativeSelect>
          <NativeSelectOption value="test-value">Test</NativeSelectOption>
        </NativeSelect>
      )
      expect(screen.getByRole("option", { name: /test/i })).toHaveValue("test-value")
    })
  })

  describe("Disabled state", () => {
    it("renders disabled option", () => {
      render(
        <NativeSelect>
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
          <NativeSelectOption value="2" disabled>Option 2</NativeSelectOption>
        </NativeSelect>
      )
      expect(screen.getByRole("option", { name: /option 2/i })).toBeDisabled()
    })
  })
})

describe("NativeSelectOptGroup", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <NativeSelect>
          <NativeSelectOptGroup label="Group" data-testid="optgroup">
            <NativeSelectOption value="1">Option 1</NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      )
      expect(screen.getByTestId("optgroup")).toHaveAttribute("data-slot", "native-select-optgroup")
    })

    it("renders with label", () => {
      render(
        <NativeSelect>
          <NativeSelectOptGroup label="Fruits">
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      )
      expect(screen.getByRole("group", { name: /fruits/i })).toBeInTheDocument()
    })

    it("renders children correctly", () => {
      render(
        <NativeSelect>
          <NativeSelectOptGroup label="Fruits">
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      )
      expect(screen.getByRole("option", { name: /apple/i })).toBeInTheDocument()
      expect(screen.getByRole("option", { name: /banana/i })).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies custom className", () => {
      render(
        <NativeSelect>
          <NativeSelectOptGroup label="Group" className="custom-class" data-testid="optgroup">
            <NativeSelectOption value="1">Option 1</NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      )
      expect(screen.getByTestId("optgroup")).toHaveClass("custom-class")
    })
  })
})

