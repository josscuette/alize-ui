import { describe, it, expect } from "vitest"
import { render, screen } from "@/lib/test-utils"
import { axe, toHaveNoViolations } from "jest-axe"
import { Badge } from "./badge"

expect.extend(toHaveNoViolations)

describe("Badge", () => {
  describe("Rendering", () => {
    it("renders with text content", () => {
      render(<Badge>New</Badge>)
      expect(screen.getByText("New")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(<Badge>New</Badge>)
      const badge = screen.getByText("New")
      expect(badge).toHaveAttribute("data-slot", "badge")
    })

    it("renders as span by default", () => {
      render(<Badge>Status</Badge>)
      const badge = screen.getByText("Status")
      expect(badge.tagName).toBe("SPAN")
    })

    it("renders children correctly", () => {
      render(
        <Badge>
          <span>Icon</span> Status
        </Badge>
      )
      expect(screen.getByText("Icon")).toBeInTheDocument()
      expect(screen.getByText(/Status/)).toBeInTheDocument()
    })
  })

  describe("Variants", () => {
    it("renders default variant", () => {
      render(<Badge variant="default">Default</Badge>)
      const badge = screen.getByText("Default")
      expect(badge).toHaveClass("bg-secondary")
    })

    it("renders secondary variant", () => {
      render(<Badge variant="secondary">Secondary</Badge>)
      const badge = screen.getByText("Secondary")
      expect(badge).toHaveClass("bg-secondary")
    })

    it("renders destructive variant", () => {
      render(<Badge variant="destructive">Error</Badge>)
      const badge = screen.getByText("Error")
      expect(badge).toHaveClass("border-[var(--semantic-stroke-rag-danger-default)]")
    })

    it("renders warning variant", () => {
      render(<Badge variant="warning">Warning</Badge>)
      const badge = screen.getByText("Warning")
      expect(badge).toHaveClass("border-[var(--semantic-stroke-rag-warning-default)]")
    })

    it("renders success variant", () => {
      render(<Badge variant="success">Success</Badge>)
      const badge = screen.getByText("Success")
      expect(badge).toHaveClass("border-[var(--semantic-stroke-rag-success-default)]")
    })

    it("renders outline variant", () => {
      render(<Badge variant="outline">Outline</Badge>)
      const badge = screen.getByText("Outline")
      expect(badge).toHaveClass("text-foreground")
    })

    it("uses default variant when no variant specified", () => {
      render(<Badge>No Variant</Badge>)
      const badge = screen.getByText("No Variant")
      expect(badge).toHaveClass("bg-secondary")
    })
  })

  describe("asChild", () => {
    it("renders as child element when asChild is true", () => {
      render(
        <Badge asChild>
          <a href="/link">Link Badge</a>
        </Badge>
      )
      const link = screen.getByRole("link", { name: /link badge/i })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute("href", "/link")
    })

    it("applies badge styles to child element", () => {
      render(
        <Badge asChild variant="success">
          <a href="/success">Success Link</a>
        </Badge>
      )
      const link = screen.getByRole("link")
      expect(link).toHaveClass("border-[var(--semantic-stroke-rag-success-default)]")
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(<Badge>Base</Badge>)
      const badge = screen.getByText("Base")
      expect(badge).toHaveClass("inline-flex", "items-center", "rounded-full")
    })

    it("applies custom className", () => {
      render(<Badge className="custom-class">Custom</Badge>)
      const badge = screen.getByText("Custom")
      expect(badge).toHaveClass("custom-class")
    })

    it("merges custom className with variant classes", () => {
      render(<Badge variant="success" className="extra-padding">Merged</Badge>)
      const badge = screen.getByText("Merged")
      expect(badge).toHaveClass("extra-padding")
      expect(badge).toHaveClass("border-[var(--semantic-stroke-rag-success-default)]")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations for default badge", async () => {
      const { container } = render(<Badge>Accessible</Badge>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for all variants", async () => {
      const { container } = render(
        <div>
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations when used as link", async () => {
      const { container } = render(
        <Badge asChild>
          <a href="/link">Link Badge</a>
        </Badge>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to the root element", () => {
      render(<Badge data-testid="badge-test">Test</Badge>)
      expect(screen.getByTestId("badge-test")).toBeInTheDocument()
    })

    it("forwards id prop", () => {
      render(<Badge id="my-badge">ID Badge</Badge>)
      const badge = screen.getByText("ID Badge")
      expect(badge).toHaveAttribute("id", "my-badge")
    })
  })
})

