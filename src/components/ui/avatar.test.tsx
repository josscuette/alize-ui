import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Avatar, AvatarImage, AvatarFallback } from "./avatar"

describe("Avatar", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(
        <Avatar data-testid="avatar">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      )

      expect(screen.getByTestId("avatar")).toBeInTheDocument()
      expect(screen.getByText("JD")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(
        <Avatar data-testid="avatar">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      )

      expect(screen.getByTestId("avatar")).toHaveAttribute("data-slot", "avatar")
    })
  })

  describe("Sizes", () => {
    it("renders xs size", () => {
      render(
        <Avatar size="xs" data-testid="avatar">
          <AvatarFallback size="xs">A</AvatarFallback>
        </Avatar>
      )

      expect(screen.getByTestId("avatar")).toHaveClass("size-5")
    })

    it("renders sm size", () => {
      render(
        <Avatar size="sm" data-testid="avatar">
          <AvatarFallback size="sm">AB</AvatarFallback>
        </Avatar>
      )

      expect(screen.getByTestId("avatar")).toHaveClass("h-7", "w-7")
    })

    it("renders md size (default)", () => {
      render(
        <Avatar data-testid="avatar">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      )

      expect(screen.getByTestId("avatar")).toHaveClass("h-9", "w-9")
    })

    it("renders lg size", () => {
      render(
        <Avatar size="lg" data-testid="avatar">
          <AvatarFallback size="lg">JD</AvatarFallback>
        </Avatar>
      )

      expect(screen.getByTestId("avatar")).toHaveClass("h-11", "w-11")
    })
  })

  describe("Shapes", () => {
    it("renders rounded shape (default)", () => {
      render(
        <Avatar data-testid="avatar">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      )

      expect(screen.getByTestId("avatar")).toHaveClass("rounded-full")
    })

    it("renders square shape", () => {
      render(
        <Avatar shape="square" data-testid="avatar">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      )

      // Square shape doesn't have rounded-full
      expect(screen.getByTestId("avatar")).not.toHaveClass("rounded-full")
    })
  })

  describe("Props", () => {
    it("accepts custom className", () => {
      render(
        <Avatar className="custom-class" data-testid="avatar">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      )

      expect(screen.getByTestId("avatar")).toHaveClass("custom-class")
    })
  })
})

describe("AvatarImage", () => {
  // Note: Radix AvatarImage doesn't render in jsdom because images don't trigger
  // load events. The image only renders after the onLoadingStatusChange callback
  // fires with "loaded" status. We verify component exports instead.

  it("AvatarImage is exported and can be imported", () => {
    expect(AvatarImage).toBeDefined()
    expect(typeof AvatarImage).toBe("function")
  })

  it("renders avatar with image and fallback structure", () => {
    const { container } = render(
      <Avatar>
        <AvatarImage src="/test.jpg" alt="Test User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )

    // Avatar root should be present
    expect(container.querySelector('[data-slot="avatar"]')).toBeInTheDocument()
    // Fallback shows because image doesn't "load" in jsdom
    expect(screen.getByText("JD")).toBeInTheDocument()
  })
})

describe("AvatarFallback", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Avatar>
        <AvatarFallback data-testid="fallback">JD</AvatarFallback>
      </Avatar>
    )

    expect(screen.getByTestId("fallback")).toHaveAttribute(
      "data-slot",
      "avatar-fallback"
    )
  })

  it("renders fallback content", () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )

    expect(screen.getByText("JD")).toBeInTheDocument()
  })

  describe("Text sizes", () => {
    it("renders xs text size", () => {
      render(
        <Avatar size="xs">
          <AvatarFallback size="xs" data-testid="fallback">
            A
          </AvatarFallback>
        </Avatar>
      )

      expect(screen.getByTestId("fallback")).toHaveClass("text-xs")
    })

    it("renders sm text size", () => {
      render(
        <Avatar size="sm">
          <AvatarFallback size="sm" data-testid="fallback">
            AB
          </AvatarFallback>
        </Avatar>
      )

      expect(screen.getByTestId("fallback")).toHaveClass("text-sm")
    })

    it("renders md text size (default)", () => {
      render(
        <Avatar>
          <AvatarFallback data-testid="fallback">JD</AvatarFallback>
        </Avatar>
      )

      expect(screen.getByTestId("fallback")).toHaveClass("text-base")
    })
  })

  it("accepts custom className", () => {
    render(
      <Avatar>
        <AvatarFallback className="custom-class" data-testid="fallback">
          JD
        </AvatarFallback>
      </Avatar>
    )

    expect(screen.getByTestId("fallback")).toHaveClass("custom-class")
  })
})

