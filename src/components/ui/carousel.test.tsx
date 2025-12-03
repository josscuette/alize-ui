import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel"

describe("Carousel", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(
        <Carousel data-testid="carousel">
          <CarouselContent>
            <CarouselItem>Slide 1</CarouselItem>
          </CarouselContent>
        </Carousel>
      )

      expect(screen.getByTestId("carousel")).toBeInTheDocument()
      expect(screen.getByText("Slide 1")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(
        <Carousel data-testid="carousel">
          <CarouselContent>
            <CarouselItem>Slide 1</CarouselItem>
          </CarouselContent>
        </Carousel>
      )

      expect(screen.getByTestId("carousel")).toHaveAttribute(
        "data-slot",
        "carousel"
      )
    })

    it("has role=region attribute", () => {
      render(
        <Carousel data-testid="carousel">
          <CarouselContent>
            <CarouselItem>Slide 1</CarouselItem>
          </CarouselContent>
        </Carousel>
      )

      expect(screen.getByTestId("carousel")).toHaveAttribute("role", "region")
    })

    it("has aria-roledescription=carousel attribute", () => {
      render(
        <Carousel data-testid="carousel">
          <CarouselContent>
            <CarouselItem>Slide 1</CarouselItem>
          </CarouselContent>
        </Carousel>
      )

      expect(screen.getByTestId("carousel")).toHaveAttribute(
        "aria-roledescription",
        "carousel"
      )
    })
  })

  describe("Props", () => {
    it("accepts custom className", () => {
      render(
        <Carousel className="custom-class" data-testid="carousel">
          <CarouselContent>
            <CarouselItem>Slide 1</CarouselItem>
          </CarouselContent>
        </Carousel>
      )

      expect(screen.getByTestId("carousel")).toHaveClass("custom-class")
    })

    it("defaults to horizontal orientation", () => {
      render(
        <Carousel data-testid="carousel">
          <CarouselContent>
            <CarouselItem>Slide 1</CarouselItem>
          </CarouselContent>
        </Carousel>
      )

      expect(screen.getByTestId("carousel")).toBeInTheDocument()
    })
  })
})

describe("CarouselContent", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Carousel>
        <CarouselContent data-testid="content">
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
      </Carousel>
    )

    // Content wrapper has the data-slot
    const content = screen.getByTestId("content")?.parentElement
    expect(content).toHaveAttribute("data-slot", "carousel-content")
  })

  it("renders children", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>
    )

    expect(screen.getByText("Slide 1")).toBeInTheDocument()
    expect(screen.getByText("Slide 2")).toBeInTheDocument()
  })
})

describe("CarouselItem", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem data-testid="item">Slide 1</CarouselItem>
        </CarouselContent>
      </Carousel>
    )

    expect(screen.getByTestId("item")).toHaveAttribute(
      "data-slot",
      "carousel-item"
    )
  })

  it("has role=group attribute", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem data-testid="item">Slide 1</CarouselItem>
        </CarouselContent>
      </Carousel>
    )

    expect(screen.getByTestId("item")).toHaveAttribute("role", "group")
  })

  it("has aria-roledescription=slide attribute", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem data-testid="item">Slide 1</CarouselItem>
        </CarouselContent>
      </Carousel>
    )

    expect(screen.getByTestId("item")).toHaveAttribute(
      "aria-roledescription",
      "slide"
    )
  })

  it("accepts custom className", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem className="custom-class" data-testid="item">
            Slide 1
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    )

    expect(screen.getByTestId("item")).toHaveClass("custom-class")
  })
})

describe("CarouselPrevious", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
        <CarouselPrevious data-testid="prev" />
      </Carousel>
    )

    expect(screen.getByTestId("prev")).toHaveAttribute(
      "data-slot",
      "carousel-previous"
    )
  })

  it("has accessible label", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>
    )

    expect(screen.getByText("Previous slide")).toBeInTheDocument()
  })

  it("is disabled initially (no previous slide)", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
        <CarouselPrevious data-testid="prev" />
      </Carousel>
    )

    expect(screen.getByTestId("prev")).toBeDisabled()
  })
})

describe("CarouselNext", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
        <CarouselNext data-testid="next" />
      </Carousel>
    )

    expect(screen.getByTestId("next")).toHaveAttribute(
      "data-slot",
      "carousel-next"
    )
  })

  it("has accessible label", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    )

    expect(screen.getByText("Next slide")).toBeInTheDocument()
  })
})

describe("Full carousel example", () => {
  it("renders complete carousel structure", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
          <CarouselItem>Slide 3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )

    expect(screen.getByText("Slide 1")).toBeInTheDocument()
    expect(screen.getByText("Slide 2")).toBeInTheDocument()
    expect(screen.getByText("Slide 3")).toBeInTheDocument()
    expect(screen.getByText("Previous slide")).toBeInTheDocument()
    expect(screen.getByText("Next slide")).toBeInTheDocument()
  })
})

