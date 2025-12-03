import { describe, it, expect } from "vitest"
import { render, screen } from "@/lib/test-utils"
import { axe, toHaveNoViolations } from "jest-axe"
import { Spinner } from "./spinner"

expect.extend(toHaveNoViolations)

describe("Spinner", () => {
  describe("Rendering", () => {
    it("renders with role status", () => {
      render(<Spinner />)
      expect(screen.getByRole("status")).toBeInTheDocument()
    })

    it("renders with aria-label Loading", () => {
      render(<Spinner />)
      const spinner = screen.getByRole("status")
      expect(spinner).toHaveAttribute("aria-label", "Loading")
    })

    it("renders as an SVG element", () => {
      render(<Spinner data-testid="spinner" />)
      const spinner = screen.getByTestId("spinner")
      expect(spinner.tagName.toLowerCase()).toBe("svg")
    })
  })

  describe("Styling", () => {
    it("applies default classes", () => {
      render(<Spinner data-testid="spinner" />)
      const spinner = screen.getByTestId("spinner")
      expect(spinner).toHaveClass("size-4", "animate-spin")
    })

    it("applies custom className", () => {
      render(<Spinner className="size-8" data-testid="spinner" />)
      const spinner = screen.getByTestId("spinner")
      expect(spinner).toHaveClass("size-8")
    })

    it("merges custom className with default classes", () => {
      render(<Spinner className="text-primary" data-testid="spinner" />)
      const spinner = screen.getByTestId("spinner")
      expect(spinner).toHaveClass("animate-spin")
      expect(spinner).toHaveClass("text-primary")
    })

    it("allows overriding size classes", () => {
      render(<Spinner className="size-12" data-testid="spinner" />)
      const spinner = screen.getByTestId("spinner")
      expect(spinner).toHaveClass("size-12")
    })
  })

  describe("Common use cases", () => {
    it("can be used in a button", () => {
      render(
        <button disabled>
          <Spinner data-testid="button-spinner" />
          Loading...
        </button>
      )
      expect(screen.getByTestId("button-spinner")).toBeInTheDocument()
      expect(screen.getByText("Loading...")).toBeInTheDocument()
    })

    it("can be centered in a container", () => {
      render(
        <div className="flex items-center justify-center" data-testid="container">
          <Spinner />
        </div>
      )
      const container = screen.getByTestId("container")
      expect(container).toContainElement(screen.getByRole("status"))
    })

    it("renders different sizes", () => {
      render(
        <div>
          <Spinner className="size-4" data-testid="small" />
          <Spinner className="size-6" data-testid="medium" />
          <Spinner className="size-8" data-testid="large" />
        </div>
      )
      expect(screen.getByTestId("small")).toHaveClass("size-4")
      expect(screen.getByTestId("medium")).toHaveClass("size-6")
      expect(screen.getByTestId("large")).toHaveClass("size-8")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(<Spinner />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations with custom aria-label", async () => {
      const { container } = render(<Spinner aria-label="Processing request" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations in a button context", async () => {
      const { container } = render(
        <button disabled aria-busy="true">
          <Spinner />
          <span>Loading...</span>
        </button>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has correct role for screen readers", () => {
      render(<Spinner />)
      const spinner = screen.getByRole("status")
      expect(spinner).toBeInTheDocument()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to the root element", () => {
      render(<Spinner data-testid="spinner-test" />)
      expect(screen.getByTestId("spinner-test")).toBeInTheDocument()
    })

    it("forwards id prop", () => {
      render(<Spinner id="my-spinner" data-testid="spinner" />)
      const spinner = screen.getByTestId("spinner")
      expect(spinner).toHaveAttribute("id", "my-spinner")
    })

    it("allows custom aria-label override", () => {
      render(<Spinner aria-label="Custom loading message" />)
      const spinner = screen.getByRole("status")
      expect(spinner).toHaveAttribute("aria-label", "Custom loading message")
    })
  })
})

