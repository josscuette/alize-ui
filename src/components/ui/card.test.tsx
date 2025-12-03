import { describe, it, expect } from "vitest"
import { render, screen } from "@/lib/test-utils"
import { axe, toHaveNoViolations } from "jest-axe"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "./card"

expect.extend(toHaveNoViolations)

describe("Card", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId("card")
      expect(card).toHaveAttribute("data-slot", "card")
    })

    it("renders children correctly", () => {
      render(<Card>Card content</Card>)
      expect(screen.getByText("Card content")).toBeInTheDocument()
    })

    it("renders complete card structure", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      )
      
      expect(screen.getByText("Title")).toBeInTheDocument()
      expect(screen.getByText("Description")).toBeInTheDocument()
      expect(screen.getByText("Content")).toBeInTheDocument()
      expect(screen.getByText("Footer")).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies base classes to Card", () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId("card")
      expect(card).toHaveClass("bg-card", "rounded-xl", "border", "shadow-sm")
    })

    it("applies custom className to Card", () => {
      render(<Card className="custom-card" data-testid="card">Content</Card>)
      expect(screen.getByTestId("card")).toHaveClass("custom-card")
    })

    it("merges custom className with base classes", () => {
      render(<Card className="mt-4" data-testid="card">Content</Card>)
      const card = screen.getByTestId("card")
      expect(card).toHaveClass("bg-card", "rounded-xl")
      expect(card).toHaveClass("mt-4")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description text</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card content goes here</p>
          </CardContent>
          <CardFooter>
            <button>Action</button>
          </CardFooter>
        </Card>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for simple card", async () => {
      const { container } = render(<Card>Simple card content</Card>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to Card", () => {
      render(<Card data-testid="card-test">Content</Card>)
      expect(screen.getByTestId("card-test")).toBeInTheDocument()
    })

    it("forwards id prop", () => {
      render(<Card id="my-card" data-testid="card">Content</Card>)
      expect(screen.getByTestId("card")).toHaveAttribute("id", "my-card")
    })
  })
})

describe("CardHeader", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <Card>
          <CardHeader data-testid="header">
            <CardTitle>Title</CardTitle>
          </CardHeader>
        </Card>
      )
      expect(screen.getByTestId("header")).toHaveAttribute("data-slot", "card-header")
    })

    it("renders children correctly", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Header Title</CardTitle>
            <CardDescription>Header Description</CardDescription>
          </CardHeader>
        </Card>
      )
      expect(screen.getByText("Header Title")).toBeInTheDocument()
      expect(screen.getByText("Header Description")).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(
        <Card>
          <CardHeader data-testid="header">
            <CardTitle>Title</CardTitle>
          </CardHeader>
        </Card>
      )
      const header = screen.getByTestId("header")
      expect(header).toHaveClass("grid", "px-6")
    })

    it("applies custom className", () => {
      render(
        <Card>
          <CardHeader className="custom-header" data-testid="header">
            <CardTitle>Title</CardTitle>
          </CardHeader>
        </Card>
      )
      expect(screen.getByTestId("header")).toHaveClass("custom-header")
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props", () => {
      render(
        <Card>
          <CardHeader data-testid="header-test">
            <CardTitle>Title</CardTitle>
          </CardHeader>
        </Card>
      )
      expect(screen.getByTestId("header-test")).toBeInTheDocument()
    })
  })
})

describe("CardTitle", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle data-testid="title">Title</CardTitle>
          </CardHeader>
        </Card>
      )
      expect(screen.getByTestId("title")).toHaveAttribute("data-slot", "card-title")
    })

    it("renders children correctly", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>My Card Title</CardTitle>
          </CardHeader>
        </Card>
      )
      expect(screen.getByText("My Card Title")).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle data-testid="title">Title</CardTitle>
          </CardHeader>
        </Card>
      )
      expect(screen.getByTestId("title")).toHaveClass("font-semibold")
    })

    it("applies custom className", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle className="custom-title" data-testid="title">Title</CardTitle>
          </CardHeader>
        </Card>
      )
      expect(screen.getByTestId("title")).toHaveClass("custom-title")
    })
  })
})

describe("CardDescription", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <Card>
          <CardHeader>
            <CardDescription data-testid="description">Description</CardDescription>
          </CardHeader>
        </Card>
      )
      expect(screen.getByTestId("description")).toHaveAttribute("data-slot", "card-description")
    })

    it("renders children correctly", () => {
      render(
        <Card>
          <CardHeader>
            <CardDescription>My description text</CardDescription>
          </CardHeader>
        </Card>
      )
      expect(screen.getByText("My description text")).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(
        <Card>
          <CardHeader>
            <CardDescription data-testid="description">Description</CardDescription>
          </CardHeader>
        </Card>
      )
      expect(screen.getByTestId("description")).toHaveClass("text-muted-foreground", "text-sm")
    })

    it("applies custom className", () => {
      render(
        <Card>
          <CardHeader>
            <CardDescription className="custom-description" data-testid="description">Description</CardDescription>
          </CardHeader>
        </Card>
      )
      expect(screen.getByTestId("description")).toHaveClass("custom-description")
    })
  })
})

describe("CardAction", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardAction data-testid="action">
              <button>Action</button>
            </CardAction>
          </CardHeader>
        </Card>
      )
      expect(screen.getByTestId("action")).toHaveAttribute("data-slot", "card-action")
    })

    it("renders children correctly", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardAction>
              <button>Click me</button>
            </CardAction>
          </CardHeader>
        </Card>
      )
      expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies custom className", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardAction className="custom-action" data-testid="action">
              <button>Action</button>
            </CardAction>
          </CardHeader>
        </Card>
      )
      expect(screen.getByTestId("action")).toHaveClass("custom-action")
    })
  })
})

describe("CardContent", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <Card>
          <CardContent data-testid="content">Content</CardContent>
        </Card>
      )
      expect(screen.getByTestId("content")).toHaveAttribute("data-slot", "card-content")
    })

    it("renders children correctly", () => {
      render(
        <Card>
          <CardContent>
            <p>Some content</p>
          </CardContent>
        </Card>
      )
      expect(screen.getByText("Some content")).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(
        <Card>
          <CardContent data-testid="content">Content</CardContent>
        </Card>
      )
      expect(screen.getByTestId("content")).toHaveClass("px-6")
    })

    it("applies custom className", () => {
      render(
        <Card>
          <CardContent className="custom-content" data-testid="content">Content</CardContent>
        </Card>
      )
      expect(screen.getByTestId("content")).toHaveClass("custom-content")
    })
  })
})

describe("CardFooter", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <Card>
          <CardFooter data-testid="footer">Footer</CardFooter>
        </Card>
      )
      expect(screen.getByTestId("footer")).toHaveAttribute("data-slot", "card-footer")
    })

    it("renders children correctly", () => {
      render(
        <Card>
          <CardFooter>
            <button>Submit</button>
          </CardFooter>
        </Card>
      )
      expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies base classes", () => {
      render(
        <Card>
          <CardFooter data-testid="footer">Footer</CardFooter>
        </Card>
      )
      const footer = screen.getByTestId("footer")
      expect(footer).toHaveClass("flex", "items-center", "px-6")
    })

    it("applies custom className", () => {
      render(
        <Card>
          <CardFooter className="custom-footer" data-testid="footer">Footer</CardFooter>
        </Card>
      )
      expect(screen.getByTestId("footer")).toHaveClass("custom-footer")
    })
  })
})

