import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import { Input } from "./input"

expect.extend(toHaveNoViolations)

describe("Input", () => {
  describe("Rendering", () => {
    it("renders input element", () => {
      render(<Input />)
      const input = screen.getByRole("textbox")
      expect(input).toBeInTheDocument()
    })

    it("renders with placeholder", () => {
      render(<Input placeholder="Enter text" />)
      expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument()
    })

    it("renders with different input types", () => {
      const types = ["text", "email", "password", "number", "tel"] as const
      
      types.forEach((type) => {
        const { unmount } = render(<Input type={type} data-testid={`input-${type}`} />)
        const input = screen.getByTestId(`input-${type}`)
        expect(input).toHaveAttribute("type", type)
        unmount()
      })
    })

    it("renders with value", () => {
      render(<Input value="Test value" readOnly />)
      const input = screen.getByRole("textbox")
      expect(input).toHaveValue("Test value")
    })
  })

  describe("Ref forwarding", () => {
    it("forwards ref to input element", () => {
      const ref = vi.fn()
      render(<Input ref={ref} />)
      expect(ref).toHaveBeenCalled()
    })
  })

  describe("Interactions", () => {
    it("allows user input", async () => {
      const user = userEvent.setup()
      render(<Input />)
      const input = screen.getByRole("textbox")
      
      await user.type(input, "Hello World")
      expect(input).toHaveValue("Hello World")
    })

    it("calls onChange handler", async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      
      render(<Input onChange={handleChange} />)
      const input = screen.getByRole("textbox")
      
      await user.type(input, "test")
      expect(handleChange).toHaveBeenCalled()
    })

    it("does not allow input when disabled", async () => {
      const user = userEvent.setup()
      render(<Input disabled />)
      const input = screen.getByRole("textbox")
      
      expect(input).toBeDisabled()
      await user.type(input, "test")
      expect(input).toHaveValue("")
    })
  })

  describe("States", () => {
    it("applies disabled state", () => {
      render(<Input disabled />)
      const input = screen.getByRole("textbox")
      expect(input).toBeDisabled()
      expect(input).toHaveClass("disabled:pointer-events-none")
    })

    it("applies invalid state with aria-invalid", () => {
      render(<Input aria-invalid="true" />)
      const input = screen.getByRole("textbox")
      expect(input).toHaveAttribute("aria-invalid", "true")
    })

    it("applies invalid border when aria-invalid is true", () => {
      render(<Input aria-invalid="true" />)
      const input = screen.getByRole("textbox")
      expect(input).toHaveClass("aria-invalid:border-semantic-stroke-rag-danger-default")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(<Input placeholder="Enter text" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations when disabled with label", async () => {
      const { container } = render(
        <label>
          Disabled input
          <Input disabled aria-label="Disabled input" />
        </label>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations when invalid with label", async () => {
      const { container } = render(
        <div>
          <label htmlFor="email">Email</label>
          <Input 
            id="email"
            type="email"
            aria-invalid="true" 
            aria-describedby="error-message" 
          />
          <span id="error-message">Invalid email</span>
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Custom className", () => {
    it("applies custom className", () => {
      render(<Input className="custom-class" />)
      const input = screen.getByRole("textbox")
      expect(input).toHaveClass("custom-class")
    })
  })
})

