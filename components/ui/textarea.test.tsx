import * as React from "react"
import { vi } from "vitest"
import { render, screen, fireEvent } from "@/lib/test-utils"
import { Textarea } from "./textarea"
import { axe, toHaveNoViolations } from "jest-axe"
import userEvent from "@testing-library/user-event"

expect.extend(toHaveNoViolations)

describe("Textarea", () => {
  it("renders textarea", () => {
    render(<Textarea aria-label="Enter text" />)
    expect(screen.getByRole("textbox", { name: "Enter text" })).toBeInTheDocument()
  })

  it("renders with placeholder", () => {
    render(<Textarea placeholder="Enter your message" aria-label="Enter text" />)
    expect(screen.getByPlaceholderText("Enter your message")).toBeInTheDocument()
  })

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLTextAreaElement>()
    render(<Textarea ref={ref} aria-label="Enter text" />)
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })

  it("handles user input", async () => {
    const user = userEvent.setup()
    render(<Textarea aria-label="Enter text" />)
    const textarea = screen.getByRole("textbox", { name: "Enter text" })
    
    await user.type(textarea, "Hello, world!")
    expect(textarea).toHaveValue("Hello, world!")
  })

  it("applies disabled state", () => {
    render(<Textarea disabled aria-label="Enter text" />)
    const textarea = screen.getByRole("textbox", { name: "Enter text" })
    expect(textarea).toBeDisabled()
  })

  it("does not accept input when disabled", async () => {
    const user = userEvent.setup()
    render(<Textarea disabled aria-label="Enter text" />)
    const textarea = screen.getByRole("textbox", { name: "Enter text" })
    
    await user.type(textarea, "Test")
    expect(textarea).toHaveValue("")
  })

  it("applies invalid state with aria-invalid", () => {
    render(<Textarea aria-invalid="true" aria-label="Enter text" />)
    const textarea = screen.getByRole("textbox", { name: "Enter text" })
    expect(textarea).toHaveAttribute("aria-invalid", "true")
  })

  it("applies custom className", () => {
    render(<Textarea className="custom-class" aria-label="Enter text" />)
    const textarea = screen.getByRole("textbox", { name: "Enter text" })
    expect(textarea).toHaveClass("custom-class")
  })

  it("respects rows attribute", () => {
    render(<Textarea rows={5} aria-label="Enter text" />)
    const textarea = screen.getByRole("textbox", { name: "Enter text" })
    expect(textarea).toHaveAttribute("rows", "5")
  })

  it("respects cols attribute", () => {
    render(<Textarea cols={50} aria-label="Enter text" />)
    const textarea = screen.getByRole("textbox", { name: "Enter text" })
    expect(textarea).toHaveAttribute("cols", "50")
  })

  it("handles onChange event", () => {
    const handleChange = vi.fn()
    render(<Textarea onChange={handleChange} aria-label="Enter text" />)
    const textarea = screen.getByRole("textbox", { name: "Enter text" })
    
    fireEvent.change(textarea, { target: { value: "Test" } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(<Textarea aria-label="Enter text" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations when disabled", async () => {
      const { container } = render(<Textarea disabled aria-label="Enter text" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations when invalid", async () => {
      const { container } = render(<Textarea aria-invalid="true" aria-label="Enter text" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})

