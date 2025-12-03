import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "./pagination"

describe("Pagination", () => {
  describe("Rendering", () => {
    it("renders as nav element", () => {
      render(
        <Pagination data-testid="pagination">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )

      expect(screen.getByTestId("pagination").tagName).toBe("NAV")
    })

    it("has role=navigation attribute", () => {
      render(
        <Pagination data-testid="pagination">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )

      expect(screen.getByTestId("pagination")).toHaveAttribute("role", "navigation")
    })

    it("has aria-label for accessibility", () => {
      render(
        <Pagination data-testid="pagination">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )

      expect(screen.getByTestId("pagination")).toHaveAttribute(
        "aria-label",
        "pagination"
      )
    })

    it("renders with data-slot attribute", () => {
      render(
        <Pagination data-testid="pagination">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )

      expect(screen.getByTestId("pagination")).toHaveAttribute(
        "data-slot",
        "pagination"
      )
    })

    it("accepts custom className", () => {
      render(
        <Pagination className="custom-class" data-testid="pagination">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )

      expect(screen.getByTestId("pagination")).toHaveClass("custom-class")
    })
  })

  describe("Complete pagination", () => {
    it("renders full pagination structure", () => {
      render(
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="/page/1" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/page/1">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/page/2" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/page/3">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="/page/3" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )

      expect(screen.getByText("1")).toBeInTheDocument()
      expect(screen.getByText("2")).toBeInTheDocument()
      expect(screen.getByText("3")).toBeInTheDocument()
    })
  })
})

describe("PaginationContent", () => {
  it("renders as unordered list", () => {
    render(
      <Pagination>
        <PaginationContent data-testid="content">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("content").tagName).toBe("UL")
  })

  it("has data-slot attribute", () => {
    render(
      <Pagination>
        <PaginationContent data-testid="content">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("content")).toHaveAttribute(
      "data-slot",
      "pagination-content"
    )
  })

  it("accepts custom className", () => {
    render(
      <Pagination>
        <PaginationContent className="custom-class" data-testid="content">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("content")).toHaveClass("custom-class")
  })
})

describe("PaginationItem", () => {
  it("renders as list item", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem data-testid="item">
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("item").tagName).toBe("LI")
  })

  it("has data-slot attribute", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem data-testid="item">
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("item")).toHaveAttribute(
      "data-slot",
      "pagination-item"
    )
  })
})

describe("PaginationLink", () => {
  it("renders as anchor", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="/page/1" data-testid="link">
              1
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("link").tagName).toBe("A")
    expect(screen.getByTestId("link")).toHaveAttribute("href", "/page/1")
  })

  it("has data-slot attribute", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" data-testid="link">
              1
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("link")).toHaveAttribute(
      "data-slot",
      "pagination-link"
    )
  })

  it("has aria-current=page when active", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive data-testid="link">
              1
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("link")).toHaveAttribute("aria-current", "page")
  })

  it("does not have aria-current when not active", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" data-testid="link">
              1
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("link")).not.toHaveAttribute("aria-current")
  })

  it("accepts custom className", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" className="custom-class" data-testid="link">
              1
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("link")).toHaveClass("custom-class")
  })
})

describe("PaginationPrevious", () => {
  it("renders as anchor", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="/page/1" data-testid="prev" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("prev").tagName).toBe("A")
  })

  it("has aria-label for accessibility", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="/page/1" data-testid="prev" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("prev")).toHaveAttribute(
      "aria-label",
      "Go to previous page"
    )
  })

  it("displays 'Previous' text", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="/page/1" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByText("Previous")).toBeInTheDocument()
  })
})

describe("PaginationNext", () => {
  it("renders as anchor", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationNext href="/page/3" data-testid="next" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("next").tagName).toBe("A")
  })

  it("has aria-label for accessibility", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationNext href="/page/3" data-testid="next" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("next")).toHaveAttribute(
      "aria-label",
      "Go to next page"
    )
  })

  it("displays 'Next' text", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationNext href="/page/3" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByText("Next")).toBeInTheDocument()
  })
})

describe("PaginationEllipsis", () => {
  it("renders as span", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationEllipsis data-testid="ellipsis" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("ellipsis").tagName).toBe("SPAN")
  })

  it("has aria-hidden attribute", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationEllipsis data-testid="ellipsis" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("ellipsis")).toHaveAttribute("aria-hidden")
  })

  it("has data-slot attribute", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationEllipsis data-testid="ellipsis" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByTestId("ellipsis")).toHaveAttribute(
      "data-slot",
      "pagination-ellipsis"
    )
  })

  it("renders screen reader text", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByText("More pages")).toBeInTheDocument()
  })
})

