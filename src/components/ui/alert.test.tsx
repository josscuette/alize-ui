import { describe, it, expect } from "vitest"
import { render, screen } from "@/lib/test-utils"
import { axe, toHaveNoViolations } from "jest-axe"
import { Alert, AlertTitle, AlertDescription } from "./alert"

expect.extend(toHaveNoViolations)

describe("Alert", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<Alert>Alert content</Alert>)
      const alert = screen.getByRole("alert")
      expect(alert).toHaveAttribute("data-slot", "alert")
    })

    it("renders with role alert", () => {
      render(<Alert>Alert content</Alert>)
      expect(screen.getByRole("alert")).toBeInTheDocument()
    })

    it("renders children correctly", () => {
      render(<Alert>Alert message</Alert>)
      expect(screen.getByText("Alert message")).toBeInTheDocument()
    })

    it("renders with AlertTitle and AlertDescription", () => {
      render(
        <Alert>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description text</AlertDescription>
        </Alert>
      )
      expect(screen.getByText("Title")).toBeInTheDocument()
      expect(screen.getByText("Description text")).toBeInTheDocument()
    })
  })

  describe("Variants", () => {
    it("renders default variant", () => {
      render(<Alert variant="default">Default Alert</Alert>)
      const alert = screen.getByRole("alert")
      expect(alert).toHaveClass("bg-card", "text-card-foreground")
    })

    it("renders destructive variant", () => {
      render(<Alert variant="destructive">Destructive Alert</Alert>)
      const alert = screen.getByRole("alert")
      expect(alert).toHaveClass("bg-destructive")
    })

    it("uses default variant when no variant specified", () => {
      render(<Alert>No Variant</Alert>)
      const alert = screen.getByRole("alert")
      expect(alert).toHaveClass("bg-card")
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(<Alert>Base</Alert>)
      const alert = screen.getByRole("alert")
      expect(alert).toHaveClass("relative", "w-full", "rounded-lg", "border")
    })

    it("applies custom className", () => {
      render(<Alert className="my-custom-class">Custom</Alert>)
      const alert = screen.getByRole("alert")
      expect(alert).toHaveClass("my-custom-class")
    })

    it("merges custom className with variant classes", () => {
      render(<Alert variant="destructive" className="extra-class">Merged</Alert>)
      const alert = screen.getByRole("alert")
      expect(alert).toHaveClass("extra-class")
      expect(alert).toHaveClass("bg-destructive")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations for default alert", async () => {
      const { container } = render(
        <Alert>
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>This is an informational message.</AlertDescription>
        </Alert>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for destructive alert", async () => {
      const { container } = render(
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong.</AlertDescription>
        </Alert>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for simple alert", async () => {
      const { container } = render(<Alert>Simple alert message</Alert>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to the root element", () => {
      render(<Alert data-testid="alert-test">Test</Alert>)
      expect(screen.getByTestId("alert-test")).toBeInTheDocument()
    })

    it("forwards id prop", () => {
      render(<Alert id="my-alert">ID Alert</Alert>)
      const alert = screen.getByRole("alert")
      expect(alert).toHaveAttribute("id", "my-alert")
    })
  })
})

describe("AlertTitle", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <Alert>
          <AlertTitle>Title</AlertTitle>
        </Alert>
      )
      const title = screen.getByText("Title")
      expect(title).toHaveAttribute("data-slot", "alert-title")
    })

    it("renders children correctly", () => {
      render(
        <Alert>
          <AlertTitle>Alert Title Text</AlertTitle>
        </Alert>
      )
      expect(screen.getByText("Alert Title Text")).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(
        <Alert>
          <AlertTitle>Title</AlertTitle>
        </Alert>
      )
      const title = screen.getByText("Title")
      expect(title).toHaveClass("font-medium", "tracking-tight")
    })

    it("applies custom className", () => {
      render(
        <Alert>
          <AlertTitle className="custom-title">Title</AlertTitle>
        </Alert>
      )
      const title = screen.getByText("Title")
      expect(title).toHaveClass("custom-title")
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props", () => {
      render(
        <Alert>
          <AlertTitle data-testid="title-test">Title</AlertTitle>
        </Alert>
      )
      expect(screen.getByTestId("title-test")).toBeInTheDocument()
    })
  })
})

describe("AlertDescription", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <Alert>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      )
      const description = screen.getByText("Description")
      expect(description).toHaveAttribute("data-slot", "alert-description")
    })

    it("renders children correctly", () => {
      render(
        <Alert>
          <AlertDescription>Alert description text</AlertDescription>
        </Alert>
      )
      expect(screen.getByText("Alert description text")).toBeInTheDocument()
    })

    it("renders with paragraph children", () => {
      render(
        <Alert>
          <AlertDescription>
            <p>First paragraph</p>
            <p>Second paragraph</p>
          </AlertDescription>
        </Alert>
      )
      expect(screen.getByText("First paragraph")).toBeInTheDocument()
      expect(screen.getByText("Second paragraph")).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(
        <Alert>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      )
      const description = screen.getByText("Description")
      expect(description).toHaveClass("text-muted-foreground", "text-sm")
    })

    it("applies custom className", () => {
      render(
        <Alert>
          <AlertDescription className="custom-description">Description</AlertDescription>
        </Alert>
      )
      const description = screen.getByText("Description")
      expect(description).toHaveClass("custom-description")
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props", () => {
      render(
        <Alert>
          <AlertDescription data-testid="description-test">Description</AlertDescription>
        </Alert>
      )
      expect(screen.getByTestId("description-test")).toBeInTheDocument()
    })
  })
})

