import { describe, it, expect } from "vitest"
import { render, screen } from "@/lib/test-utils"
import { axe, toHaveNoViolations } from "jest-axe"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
} from "./field"
import { Input } from "./input"

expect.extend(toHaveNoViolations)

describe("Field", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<Field data-testid="field">Content</Field>)
      const field = screen.getByTestId("field")
      expect(field).toHaveAttribute("data-slot", "field")
    })

    it("renders with role group", () => {
      render(<Field>Content</Field>)
      expect(screen.getByRole("group")).toBeInTheDocument()
    })

    it("renders children correctly", () => {
      render(
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input />
        </Field>
      )
      expect(screen.getByText("Email")).toBeInTheDocument()
    })
  })

  describe("Orientation", () => {
    it("renders vertical orientation by default", () => {
      render(<Field data-testid="field">Content</Field>)
      const field = screen.getByTestId("field")
      expect(field).toHaveAttribute("data-orientation", "vertical")
    })

    it("renders horizontal orientation", () => {
      render(<Field orientation="horizontal" data-testid="field">Content</Field>)
      const field = screen.getByTestId("field")
      expect(field).toHaveAttribute("data-orientation", "horizontal")
    })

    it("renders responsive orientation", () => {
      render(<Field orientation="responsive" data-testid="field">Content</Field>)
      const field = screen.getByTestId("field")
      expect(field).toHaveAttribute("data-orientation", "responsive")
    })
  })

  describe("Styling", () => {
    it("applies custom className", () => {
      render(<Field className="custom-field" data-testid="field">Content</Field>)
      expect(screen.getByTestId("field")).toHaveClass("custom-field")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <FieldContent>
            <Input id="email" type="email" />
          </FieldContent>
          <FieldDescription>Enter your email address</FieldDescription>
        </Field>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})

describe("FieldSet", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<FieldSet data-testid="fieldset">Content</FieldSet>)
      expect(screen.getByTestId("fieldset")).toHaveAttribute("data-slot", "field-set")
    })

    it("renders as fieldset element", () => {
      render(<FieldSet>Content</FieldSet>)
      expect(screen.getByRole("group")).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies custom className", () => {
      render(<FieldSet className="custom-fieldset" data-testid="fieldset">Content</FieldSet>)
      expect(screen.getByTestId("fieldset")).toHaveClass("custom-fieldset")
    })
  })
})

describe("FieldLegend", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <FieldSet>
          <FieldLegend data-testid="legend">Legend</FieldLegend>
        </FieldSet>
      )
      expect(screen.getByTestId("legend")).toHaveAttribute("data-slot", "field-legend")
    })

    it("renders children correctly", () => {
      render(
        <FieldSet>
          <FieldLegend>Personal Information</FieldLegend>
        </FieldSet>
      )
      expect(screen.getByText("Personal Information")).toBeInTheDocument()
    })
  })

  describe("Variants", () => {
    it("renders legend variant by default", () => {
      render(
        <FieldSet>
          <FieldLegend data-testid="legend">Legend</FieldLegend>
        </FieldSet>
      )
      expect(screen.getByTestId("legend")).toHaveAttribute("data-variant", "legend")
    })

    it("renders label variant", () => {
      render(
        <FieldSet>
          <FieldLegend variant="label" data-testid="legend">Legend</FieldLegend>
        </FieldSet>
      )
      expect(screen.getByTestId("legend")).toHaveAttribute("data-variant", "label")
    })
  })
})

describe("FieldGroup", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<FieldGroup data-testid="group">Content</FieldGroup>)
      expect(screen.getByTestId("group")).toHaveAttribute("data-slot", "field-group")
    })

    it("renders children correctly", () => {
      render(
        <FieldGroup>
          <Field>Field 1</Field>
          <Field>Field 2</Field>
        </FieldGroup>
      )
      expect(screen.getByText("Field 1")).toBeInTheDocument()
      expect(screen.getByText("Field 2")).toBeInTheDocument()
    })
  })
})

describe("FieldContent", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <Field>
          <FieldContent data-testid="content">Content</FieldContent>
        </Field>
      )
      expect(screen.getByTestId("content")).toHaveAttribute("data-slot", "field-content")
    })
  })
})

describe("FieldLabel", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <Field>
          <FieldLabel data-testid="label">Label</FieldLabel>
        </Field>
      )
      expect(screen.getByTestId("label")).toHaveAttribute("data-slot", "field-label")
    })

    it("renders children correctly", () => {
      render(
        <Field>
          <FieldLabel>Email Address</FieldLabel>
        </Field>
      )
      expect(screen.getByText("Email Address")).toBeInTheDocument()
    })
  })
})

describe("FieldTitle", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <Field>
          <FieldTitle data-testid="title">Title</FieldTitle>
        </Field>
      )
      expect(screen.getByTestId("title")).toHaveAttribute("data-slot", "field-label")
    })
  })
})

describe("FieldDescription", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <Field>
          <FieldDescription data-testid="description">Description</FieldDescription>
        </Field>
      )
      expect(screen.getByTestId("description")).toHaveAttribute("data-slot", "field-description")
    })

    it("renders children correctly", () => {
      render(
        <Field>
          <FieldDescription>Enter your email address</FieldDescription>
        </Field>
      )
      expect(screen.getByText("Enter your email address")).toBeInTheDocument()
    })
  })
})

describe("FieldSeparator", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<FieldSeparator data-testid="separator" />)
      expect(screen.getByTestId("separator")).toHaveAttribute("data-slot", "field-separator")
    })

    it("renders with children", () => {
      render(<FieldSeparator>OR</FieldSeparator>)
      expect(screen.getByText("OR")).toBeInTheDocument()
    })
  })
})

describe("FieldError", () => {
  describe("Rendering", () => {
    it("returns null when no errors or children", () => {
      const { container } = render(<FieldError />)
      expect(container.firstChild).toBeNull()
    })

    it("renders with data-slot attribute when has errors", () => {
      render(<FieldError errors={[{ message: "Error" }]} data-testid="error" />)
      expect(screen.getByTestId("error")).toHaveAttribute("data-slot", "field-error")
    })

    it("renders single error message", () => {
      render(<FieldError errors={[{ message: "Email is required" }]} />)
      expect(screen.getByText("Email is required")).toBeInTheDocument()
    })

    it("renders multiple error messages as list", () => {
      render(
        <FieldError 
          errors={[
            { message: "Email is required" },
            { message: "Email is invalid" },
          ]} 
        />
      )
      expect(screen.getByText("Email is required")).toBeInTheDocument()
      expect(screen.getByText("Email is invalid")).toBeInTheDocument()
    })

    it("renders children when provided", () => {
      render(<FieldError>Custom error message</FieldError>)
      expect(screen.getByText("Custom error message")).toBeInTheDocument()
    })

    it("has role alert", () => {
      render(<FieldError errors={[{ message: "Error" }]} />)
      expect(screen.getByRole("alert")).toBeInTheDocument()
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <FieldError errors={[{ message: "Email is required" }]} />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})

