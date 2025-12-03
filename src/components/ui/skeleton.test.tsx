import { describe, it, expect } from "vitest"
import { render, screen } from "@/lib/test-utils"
import { axe, toHaveNoViolations } from "jest-axe"
import { Skeleton } from "./skeleton"

expect.extend(toHaveNoViolations)

describe("Skeleton", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<Skeleton data-testid="skeleton" />)
      const skeleton = screen.getByTestId("skeleton")
      expect(skeleton).toHaveAttribute("data-slot", "skeleton")
    })

    it("renders as a div element", () => {
      render(<Skeleton data-testid="skeleton" />)
      const skeleton = screen.getByTestId("skeleton")
      expect(skeleton.tagName).toBe("DIV")
    })

    it("renders children if provided", () => {
      render(
        <Skeleton data-testid="skeleton">
          <span>Loading content</span>
        </Skeleton>
      )
      expect(screen.getByText("Loading content")).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(<Skeleton data-testid="skeleton" />)
      const skeleton = screen.getByTestId("skeleton")
      expect(skeleton).toHaveClass("bg-accent", "animate-pulse", "rounded-md")
    })

    it("applies custom className", () => {
      render(<Skeleton className="h-4 w-32" data-testid="skeleton" />)
      const skeleton = screen.getByTestId("skeleton")
      expect(skeleton).toHaveClass("h-4", "w-32")
    })

    it("merges custom className with base classes", () => {
      render(<Skeleton className="h-8 w-full" data-testid="skeleton" />)
      const skeleton = screen.getByTestId("skeleton")
      expect(skeleton).toHaveClass("bg-accent", "animate-pulse", "rounded-md")
      expect(skeleton).toHaveClass("h-8", "w-full")
    })

    it("allows overriding base classes", () => {
      render(<Skeleton className="rounded-full" data-testid="skeleton" />)
      const skeleton = screen.getByTestId("skeleton")
      expect(skeleton).toHaveClass("rounded-full")
    })
  })

  describe("Common use cases", () => {
    it("renders text skeleton", () => {
      render(<Skeleton className="h-4 w-[200px]" data-testid="text-skeleton" />)
      const skeleton = screen.getByTestId("text-skeleton")
      expect(skeleton).toBeInTheDocument()
    })

    it("renders avatar skeleton", () => {
      render(<Skeleton className="h-12 w-12 rounded-full" data-testid="avatar-skeleton" />)
      const skeleton = screen.getByTestId("avatar-skeleton")
      expect(skeleton).toHaveClass("rounded-full")
    })

    it("renders card skeleton", () => {
      render(
        <div data-testid="card-skeleton">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      )
      const cardSkeleton = screen.getByTestId("card-skeleton")
      expect(cardSkeleton).toBeInTheDocument()
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(<Skeleton className="h-4 w-32" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations with aria-label", async () => {
      const { container } = render(
        <Skeleton className="h-4 w-32" role="status" aria-label="Loading content" />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for multiple skeletons", async () => {
      const { container } = render(
        <div>
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to the root element", () => {
      render(<Skeleton data-testid="skeleton-test" />)
      expect(screen.getByTestId("skeleton-test")).toBeInTheDocument()
    })

    it("forwards id prop", () => {
      render(<Skeleton id="my-skeleton" data-testid="skeleton" />)
      const skeleton = screen.getByTestId("skeleton")
      expect(skeleton).toHaveAttribute("id", "my-skeleton")
    })

    it("forwards aria attributes", () => {
      render(<Skeleton aria-busy="true" aria-label="Loading" data-testid="skeleton" />)
      const skeleton = screen.getByTestId("skeleton")
      expect(skeleton).toHaveAttribute("aria-busy", "true")
      expect(skeleton).toHaveAttribute("aria-label", "Loading")
    })
  })
})

