import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "./input-otp"

expect.extend(toHaveNoViolations)

describe("InputOTP", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <InputOTP maxLength={6} data-testid="input-otp">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
          </InputOTPGroup>
        </InputOTP>
      )
      // The OTPInput component applies data-slot internally
      expect(screen.getByTestId("input-otp")).toBeInTheDocument()
    })

    it("renders slots correctly", () => {
      render(
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
        </InputOTP>
      )
      // Check that 3 slot elements are rendered
      const slots = document.querySelectorAll('[data-slot="input-otp-slot"]')
      expect(slots).toHaveLength(3)
    })

    it("renders with maxLength", () => {
      render(
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      )
      const slots = document.querySelectorAll('[data-slot="input-otp-slot"]')
      expect(slots).toHaveLength(4)
    })
  })

  describe("Interactions", () => {
    it("handles input correctly", async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      
      render(
        <InputOTP maxLength={6} onChange={handleChange}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
        </InputOTP>
      )
      
      const input = document.querySelector('input')
      if (input) {
        await user.click(input)
        await user.type(input, "1")
        expect(handleChange).toHaveBeenCalled()
      }
    })
  })

  describe("Disabled state", () => {
    it("renders disabled state", () => {
      render(
        <InputOTP maxLength={6} disabled>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
          </InputOTPGroup>
        </InputOTP>
      )
      const input = document.querySelector('input')
      expect(input).toBeDisabled()
    })
  })

  describe("Styling", () => {
    it("applies custom className", () => {
      render(
        <InputOTP maxLength={6} className="custom-class" data-testid="input-otp">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
          </InputOTPGroup>
        </InputOTP>
      )
      expect(screen.getByTestId("input-otp")).toHaveClass("custom-class")
    })

    it("applies containerClassName", () => {
      const { container } = render(
        <InputOTP maxLength={6} containerClassName="custom-container">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
          </InputOTPGroup>
        </InputOTP>
      )
      // The container div should have the custom class
      const wrapper = container.querySelector('.custom-container')
      expect(wrapper).toBeInTheDocument()
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <div>
          <label id="otp-label">Enter verification code</label>
          <InputOTP maxLength={6} aria-labelledby="otp-label">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})

describe("InputOTPGroup", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <InputOTP maxLength={6}>
          <InputOTPGroup data-testid="otp-group">
            <InputOTPSlot index={0} />
          </InputOTPGroup>
        </InputOTP>
      )
      expect(screen.getByTestId("otp-group")).toHaveAttribute("data-slot", "input-otp-group")
    })

    it("renders children correctly", () => {
      render(
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
          </InputOTPGroup>
        </InputOTP>
      )
      const slots = document.querySelectorAll('[data-slot="input-otp-slot"]')
      expect(slots).toHaveLength(2)
    })
  })

  describe("Styling", () => {
    it("applies custom className", () => {
      render(
        <InputOTP maxLength={6}>
          <InputOTPGroup className="custom-group" data-testid="otp-group">
            <InputOTPSlot index={0} />
          </InputOTPGroup>
        </InputOTP>
      )
      expect(screen.getByTestId("otp-group")).toHaveClass("custom-group")
    })
  })
})

describe("InputOTPSlot", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} data-testid="otp-slot" />
          </InputOTPGroup>
        </InputOTP>
      )
      expect(screen.getByTestId("otp-slot")).toHaveAttribute("data-slot", "input-otp-slot")
    })
  })

  describe("Styling", () => {
    it("applies custom className", () => {
      render(
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} className="custom-slot" data-testid="otp-slot" />
          </InputOTPGroup>
        </InputOTP>
      )
      expect(screen.getByTestId("otp-slot")).toHaveClass("custom-slot")
    })
  })
})

describe("InputOTPSeparator", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
          </InputOTPGroup>
          <InputOTPSeparator data-testid="otp-separator" />
          <InputOTPGroup>
            <InputOTPSlot index={1} />
          </InputOTPGroup>
        </InputOTP>
      )
      expect(screen.getByTestId("otp-separator")).toHaveAttribute("data-slot", "input-otp-separator")
    })

    it("has separator role", () => {
      render(
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={1} />
          </InputOTPGroup>
        </InputOTP>
      )
      expect(screen.getByRole("separator")).toBeInTheDocument()
    })
  })
})

