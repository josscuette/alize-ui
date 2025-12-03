import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { AspectRatio } from "./aspect-ratio"

describe("AspectRatio", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(
        <AspectRatio ratio={16 / 9}>
          <div data-testid="child">Content</div>
        </AspectRatio>
      )

      expect(screen.getByTestId("child")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(
        <AspectRatio ratio={16 / 9} data-testid="aspect-ratio">
          <div>Content</div>
        </AspectRatio>
      )

      expect(screen.getByTestId("aspect-ratio")).toHaveAttribute(
        "data-slot",
        "aspect-ratio"
      )
    })
  })

  describe("Props", () => {
    it("accepts ratio prop", () => {
      render(
        <AspectRatio ratio={1} data-testid="aspect-ratio">
          <div>Content</div>
        </AspectRatio>
      )

      expect(screen.getByTestId("aspect-ratio")).toBeInTheDocument()
    })

    it("accepts custom className", () => {
      render(
        <AspectRatio ratio={16 / 9} className="custom-class" data-testid="aspect-ratio">
          <div>Content</div>
        </AspectRatio>
      )

      expect(screen.getByTestId("aspect-ratio")).toHaveClass("custom-class")
    })

    it("forwards additional props", () => {
      render(
        <AspectRatio ratio={16 / 9} data-testid="aspect-ratio" aria-label="Image container">
          <div>Content</div>
        </AspectRatio>
      )

      expect(screen.getByTestId("aspect-ratio")).toHaveAttribute(
        "aria-label",
        "Image container"
      )
    })
  })

  describe("Common aspect ratios", () => {
    it("handles 16:9 aspect ratio", () => {
      render(
        <AspectRatio ratio={16 / 9} data-testid="aspect-ratio">
          <img src="/test.jpg" alt="Test" />
        </AspectRatio>
      )

      expect(screen.getByTestId("aspect-ratio")).toBeInTheDocument()
    })

    it("handles 4:3 aspect ratio", () => {
      render(
        <AspectRatio ratio={4 / 3} data-testid="aspect-ratio">
          <img src="/test.jpg" alt="Test" />
        </AspectRatio>
      )

      expect(screen.getByTestId("aspect-ratio")).toBeInTheDocument()
    })

    it("handles 1:1 aspect ratio (square)", () => {
      render(
        <AspectRatio ratio={1} data-testid="aspect-ratio">
          <img src="/test.jpg" alt="Test" />
        </AspectRatio>
      )

      expect(screen.getByTestId("aspect-ratio")).toBeInTheDocument()
    })
  })
})

