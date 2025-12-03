import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "./breadcrumb"

describe("Breadcrumb", () => {
  describe("Rendering", () => {
    it("renders as nav element", () => {
      render(
        <Breadcrumb data-testid="breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )

      expect(screen.getByTestId("breadcrumb").tagName).toBe("NAV")
    })

    it("has aria-label for accessibility", () => {
      render(
        <Breadcrumb data-testid="breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )

      expect(screen.getByTestId("breadcrumb")).toHaveAttribute(
        "aria-label",
        "breadcrumb"
      )
    })

    it("renders with data-slot attribute", () => {
      render(
        <Breadcrumb data-testid="breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )

      expect(screen.getByTestId("breadcrumb")).toHaveAttribute(
        "data-slot",
        "breadcrumb"
      )
    })
  })

  describe("Full breadcrumb trail", () => {
    it("renders complete breadcrumb navigation", () => {
      render(
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )

      expect(screen.getByText("Home")).toBeInTheDocument()
      expect(screen.getByText("Products")).toBeInTheDocument()
      expect(screen.getByText("Current Page")).toBeInTheDocument()
    })
  })
})

describe("BreadcrumbList", () => {
  it("renders as ordered list", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList data-testid="list">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("list").tagName).toBe("OL")
  })

  it("has data-slot attribute", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList data-testid="list">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("list")).toHaveAttribute(
      "data-slot",
      "breadcrumb-list"
    )
  })

  it("accepts custom className", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList className="custom-class" data-testid="list">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("list")).toHaveClass("custom-class")
  })
})

describe("BreadcrumbItem", () => {
  it("renders as list item", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem data-testid="item">
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("item").tagName).toBe("LI")
  })

  it("has data-slot attribute", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem data-testid="item">
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("item")).toHaveAttribute(
      "data-slot",
      "breadcrumb-item"
    )
  })

  it("accepts custom className", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="custom-class" data-testid="item">
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("item")).toHaveClass("custom-class")
  })
})

describe("BreadcrumbLink", () => {
  it("renders as anchor by default", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" data-testid="link">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("link").tagName).toBe("A")
    expect(screen.getByTestId("link")).toHaveAttribute("href", "/")
  })

  it("has data-slot attribute", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" data-testid="link">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("link")).toHaveAttribute(
      "data-slot",
      "breadcrumb-link"
    )
  })

  it("accepts custom className", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="custom-class" data-testid="link">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("link")).toHaveClass("custom-class")
  })
})

describe("BreadcrumbPage", () => {
  it("renders as span", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage data-testid="page">Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("page").tagName).toBe("SPAN")
  })

  it("has aria-current=page attribute", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage data-testid="page">Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("page")).toHaveAttribute("aria-current", "page")
  })

  it("has aria-disabled=true attribute", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage data-testid="page">Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("page")).toHaveAttribute("aria-disabled", "true")
  })

  it("has data-slot attribute", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage data-testid="page">Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("page")).toHaveAttribute(
      "data-slot",
      "breadcrumb-page"
    )
  })
})

describe("BreadcrumbSeparator", () => {
  it("renders as list item", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator data-testid="separator" />
          <BreadcrumbItem>
            <BreadcrumbPage>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("separator").tagName).toBe("LI")
  })

  it("has aria-hidden=true attribute", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbSeparator data-testid="separator" />
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("separator")).toHaveAttribute("aria-hidden", "true")
  })

  it("has role=presentation attribute", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbSeparator data-testid="separator" />
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("separator")).toHaveAttribute("role", "presentation")
  })

  it("renders custom separator", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbSeparator data-testid="separator">
            <span>/</span>
          </BreadcrumbSeparator>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByText("/")).toBeInTheDocument()
  })
})

describe("BreadcrumbEllipsis", () => {
  it("renders as span", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbEllipsis data-testid="ellipsis" />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("ellipsis").tagName).toBe("SPAN")
  })

  it("has aria-hidden=true attribute", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbEllipsis data-testid="ellipsis" />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("ellipsis")).toHaveAttribute("aria-hidden", "true")
  })

  it("has role=presentation attribute", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbEllipsis data-testid="ellipsis" />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByTestId("ellipsis")).toHaveAttribute("role", "presentation")
  })

  it("renders screen reader text", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByText("More")).toBeInTheDocument()
  })
})

