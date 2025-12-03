import { describe, it, expect } from "vitest"
import { render, screen } from "@/lib/test-utils"
import { axe, toHaveNoViolations } from "jest-axe"
import { Progress } from "./progress"

expect.extend(toHaveNoViolations)

describe("Progress", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<Progress value={50} data-testid="progress" />)
      const progress = screen.getByTestId("progress")
      expect(progress).toHaveAttribute("data-slot", "progress")
    })

    it("renders as progressbar role", () => {
      render(<Progress value={50} />)
      expect(screen.getByRole("progressbar")).toBeInTheDocument()
    })

    it("renders the indicator element", () => {
      render(<Progress value={50} data-testid="progress" />)
      const progress = screen.getByTestId("progress")
      const indicator = progress.querySelector('[data-slot="progress-indicator"]')
      expect(indicator).toBeInTheDocument()
    })
  })

  describe("Value", () => {
    it("displays correct value", () => {
      render(<Progress value={75} data-testid="progress" />)
      const progress = screen.getByTestId("progress")
      // Progress value is reflected in the indicator transform
      const indicator = progress.querySelector('[data-slot="progress-indicator"]')
      expect(indicator).toHaveStyle({ transform: "translateX(-25%)" })
    })

    it("handles 0% value", () => {
      render(<Progress value={0} data-testid="progress" />)
      const progress = screen.getByTestId("progress")
      const indicator = progress.querySelector('[data-slot="progress-indicator"]')
      expect(indicator).toHaveStyle({ transform: "translateX(-100%)" })
    })

    it("handles 100% value", () => {
      render(<Progress value={100} data-testid="progress" />)
      const progress = screen.getByTestId("progress")
      const indicator = progress.querySelector('[data-slot="progress-indicator"]')
      expect(indicator).toHaveStyle({ transform: "translateX(-0%)" })
    })

    it("handles undefined value", () => {
      render(<Progress data-testid="progress" />)
      const progress = screen.getByTestId("progress")
      expect(progress).toBeInTheDocument()
    })

    it("applies transform style to indicator based on value", () => {
      render(<Progress value={50} data-testid="progress" />)
      const progress = screen.getByTestId("progress")
      const indicator = progress.querySelector('[data-slot="progress-indicator"]')
      expect(indicator).toHaveStyle({ transform: "translateX(-50%)" })
    })

    it("applies correct transform for 0%", () => {
      render(<Progress value={0} data-testid="progress" />)
      const progress = screen.getByTestId("progress")
      const indicator = progress.querySelector('[data-slot="progress-indicator"]')
      expect(indicator).toHaveStyle({ transform: "translateX(-100%)" })
    })

    it("applies correct transform for 100%", () => {
      render(<Progress value={100} data-testid="progress" />)
      const progress = screen.getByTestId("progress")
      const indicator = progress.querySelector('[data-slot="progress-indicator"]')
      expect(indicator).toHaveStyle({ transform: "translateX(-0%)" })
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(<Progress value={50} data-testid="progress" />)
      const progress = screen.getByTestId("progress")
      expect(progress).toHaveClass("relative", "h-2", "w-full", "overflow-hidden")
    })

    it("applies custom className", () => {
      render(<Progress value={50} className="h-4" data-testid="progress" />)
      const progress = screen.getByTestId("progress")
      expect(progress).toHaveClass("h-4")
    })

    it("merges custom className with base classes", () => {
      render(<Progress value={50} className="mt-4" data-testid="progress" />)
      const progress = screen.getByTestId("progress")
      expect(progress).toHaveClass("relative", "w-full")
      expect(progress).toHaveClass("mt-4")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <div>
          <label id="progress-label">Loading progress</label>
          <Progress value={50} aria-labelledby="progress-label" />
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations at 0%", async () => {
      const { container } = render(
        <div>
          <label id="progress-label">Loading progress</label>
          <Progress value={0} aria-labelledby="progress-label" />
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations at 100%", async () => {
      const { container } = render(
        <div>
          <label id="progress-label">Loading progress</label>
          <Progress value={100} aria-labelledby="progress-label" />
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has progressbar role", () => {
      render(<Progress value={50} />)
      const progress = screen.getByRole("progressbar")
      expect(progress).toBeInTheDocument()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to the root element", () => {
      render(<Progress value={50} data-testid="progress-test" />)
      expect(screen.getByTestId("progress-test")).toBeInTheDocument()
    })

    it("forwards id prop", () => {
      render(<Progress value={50} id="my-progress" data-testid="progress" />)
      const progress = screen.getByTestId("progress")
      expect(progress).toHaveAttribute("id", "my-progress")
    })

    it("forwards aria-label", () => {
      render(<Progress value={50} aria-label="File upload progress" />)
      const progress = screen.getByRole("progressbar")
      expect(progress).toHaveAttribute("aria-label", "File upload progress")
    })
  })
})

