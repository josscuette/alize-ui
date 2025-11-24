import { vi } from "vitest"
import { render, screen, fireEvent } from "@/lib/test-utils"
import { RadioGroup, RadioGroupItem } from "./radio-group"
import { axe, toHaveNoViolations } from "jest-axe"

expect.extend(toHaveNoViolations)

describe("RadioGroup", () => {
  it("renders radio group", () => {
    render(
      <RadioGroup aria-label="Choose option">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    )
    expect(screen.getByRole("radiogroup", { name: "Choose option" })).toBeInTheDocument()
  })

  it("renders radio items", () => {
    render(
      <RadioGroup aria-label="Choose option">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    )
    expect(screen.getByRole("radio", { name: "Option 1" })).toBeInTheDocument()
  })

  it("selects radio item when clicked", () => {
    render(
      <RadioGroup aria-label="Choose option">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    )
    const radio1 = screen.getByRole("radio", { name: "Option 1" })
    
    expect(radio1).not.toBeChecked()
    fireEvent.click(radio1)
    expect(radio1).toBeChecked()
  })

  it("only one radio can be selected at a time", () => {
    render(
      <RadioGroup aria-label="Choose option">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    )
    const radio1 = screen.getByRole("radio", { name: "Option 1" })
    const radio2 = screen.getByRole("radio", { name: "Option 2" })
    
    fireEvent.click(radio1)
    expect(radio1).toBeChecked()
    expect(radio2).not.toBeChecked()
    
    fireEvent.click(radio2)
    expect(radio1).not.toBeChecked()
    expect(radio2).toBeChecked()
  })

  it("uses defaultValue when provided", () => {
    render(
      <RadioGroup defaultValue="option2" aria-label="Choose option">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    )
    const radio1 = screen.getByRole("radio", { name: "Option 1" })
    const radio2 = screen.getByRole("radio", { name: "Option 2" })
    expect(radio1).not.toBeChecked()
    expect(radio2).toBeChecked()
  })

  it("applies disabled state to group", () => {
    render(
      <RadioGroup disabled aria-label="Choose option">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    )
    const radio1 = screen.getByRole("radio", { name: "Option 1" })
    const radio2 = screen.getByRole("radio", { name: "Option 2" })
    expect(radio1).toBeDisabled()
    expect(radio2).toBeDisabled()
  })

  it("applies disabled state to individual item", () => {
    render(
      <RadioGroup aria-label="Choose option">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" disabled />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    )
    const radio1 = screen.getByRole("radio", { name: "Option 1" })
    const radio2 = screen.getByRole("radio", { name: "Option 2" })
    expect(radio1).toBeDisabled()
    expect(radio2).not.toBeDisabled()
  })

  it("does not select disabled radio item", () => {
    render(
      <RadioGroup aria-label="Choose option">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" disabled />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    )
    const radio1 = screen.getByRole("radio", { name: "Option 1" })
    
    fireEvent.click(radio1)
    expect(radio1).not.toBeChecked()
  })

  it("calls onValueChange when value changes", () => {
    const handleChange = vi.fn()
    render(
      <RadioGroup onValueChange={handleChange} aria-label="Choose option">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    )
    const radio1 = screen.getByRole("radio", { name: "Option 1" })
    
    fireEvent.click(radio1)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith("option1")
  })

  it("applies custom className to group", () => {
    render(
      <RadioGroup className="custom-group" aria-label="Choose option">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
      </RadioGroup>
    )
    const group = screen.getByRole("radiogroup", { name: "Choose option" })
    expect(group).toHaveClass("custom-group")
  })

  it("applies custom className to item", () => {
    render(
      <RadioGroup aria-label="Choose option">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" className="custom-item" />
          <label htmlFor="option1">Option 1</label>
        </div>
      </RadioGroup>
    )
    const radio = screen.getByRole("radio", { name: "Option 1" })
    expect(radio).toHaveClass("custom-item")
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <RadioGroup aria-label="Choose option">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations when disabled", async () => {
      const { container } = render(
        <RadioGroup disabled aria-label="Choose option">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations with default value", async () => {
      const { container } = render(
        <RadioGroup defaultValue="option1" aria-label="Choose option">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})

