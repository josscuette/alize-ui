import { describe, it, expect } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./hover-card"

describe("HoverCard", () => {
  describe("Rendering", () => {
    it("renders trigger correctly", () => {
      render(
        <HoverCard>
          <HoverCardTrigger data-testid="trigger">Hover me</HoverCardTrigger>
          <HoverCardContent>Content</HoverCardContent>
        </HoverCard>
      )

      expect(screen.getByTestId("trigger")).toBeInTheDocument()
      expect(screen.getByText("Hover me")).toBeInTheDocument()
    })

    it("does not render content initially", () => {
      render(
        <HoverCard>
          <HoverCardTrigger>Hover me</HoverCardTrigger>
          <HoverCardContent>Hidden Content</HoverCardContent>
        </HoverCard>
      )

      expect(screen.queryByText("Hidden Content")).not.toBeInTheDocument()
    })
  })

  describe("Interaction", () => {
    it("shows content on hover", async () => {
      const user = userEvent.setup()
      
      render(
        <HoverCard openDelay={0}>
          <HoverCardTrigger>Hover me</HoverCardTrigger>
          <HoverCardContent>Hover Content</HoverCardContent>
        </HoverCard>
      )

      await user.hover(screen.getByText("Hover me"))

      await waitFor(() => {
        expect(screen.getByText("Hover Content")).toBeInTheDocument()
      })
    })

    it("hides content when hover ends", async () => {
      const user = userEvent.setup()
      
      render(
        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger>Hover me</HoverCardTrigger>
          <HoverCardContent>Hover Content</HoverCardContent>
        </HoverCard>
      )

      await user.hover(screen.getByText("Hover me"))
      
      await waitFor(() => {
        expect(screen.getByText("Hover Content")).toBeInTheDocument()
      })

      await user.unhover(screen.getByText("Hover me"))
      
      await waitFor(() => {
        expect(screen.queryByText("Hover Content")).not.toBeInTheDocument()
      })
    })
  })

  describe("Controlled state", () => {
    it("respects open prop", async () => {
      render(
        <HoverCard open={true}>
          <HoverCardTrigger>Hover me</HoverCardTrigger>
          <HoverCardContent>Open Content</HoverCardContent>
        </HoverCard>
      )

      await waitFor(() => {
        expect(screen.getByText("Open Content")).toBeInTheDocument()
      })
    })
  })
})

describe("HoverCardTrigger", () => {
  it("renders with data-slot attribute", () => {
    render(
      <HoverCard>
        <HoverCardTrigger data-testid="trigger">Trigger</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>
    )

    expect(screen.getByTestId("trigger")).toHaveAttribute(
      "data-slot",
      "hover-card-trigger"
    )
  })

  it("accepts custom className", () => {
    render(
      <HoverCard>
        <HoverCardTrigger className="custom-class" data-testid="trigger">
          Trigger
        </HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>
    )

    expect(screen.getByTestId("trigger")).toHaveClass("custom-class")
  })
})

describe("HoverCardContent", () => {
  it("renders with data-slot attribute when visible", async () => {
    render(
      <HoverCard open={true}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent data-testid="content">Content</HoverCardContent>
      </HoverCard>
    )

    await waitFor(() => {
      expect(screen.getByTestId("content")).toHaveAttribute(
        "data-slot",
        "hover-card-content"
      )
    })
  })

  it("accepts custom className", async () => {
    render(
      <HoverCard open={true}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent className="custom-class" data-testid="content">
          Content
        </HoverCardContent>
      </HoverCard>
    )

    await waitFor(() => {
      expect(screen.getByTestId("content")).toHaveClass("custom-class")
    })
  })

  it("accepts align prop", async () => {
    render(
      <HoverCard open={true}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent align="start" data-testid="content">
          Content
        </HoverCardContent>
      </HoverCard>
    )

    await waitFor(() => {
      expect(screen.getByTestId("content")).toBeInTheDocument()
    })
  })

  it("accepts sideOffset prop", async () => {
    render(
      <HoverCard open={true}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent sideOffset={10} data-testid="content">
          Content
        </HoverCardContent>
      </HoverCard>
    )

    await waitFor(() => {
      expect(screen.getByTestId("content")).toBeInTheDocument()
    })
  })
})

describe("Full hover card example", () => {
  it("renders complete hover card structure", async () => {
    const user = userEvent.setup()
    
    render(
      <HoverCard openDelay={0}>
        <HoverCardTrigger>
          @username
        </HoverCardTrigger>
        <HoverCardContent>
          <div>
            <h4>Username</h4>
            <p>User bio goes here</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    )

    expect(screen.getByText("@username")).toBeInTheDocument()
    
    await user.hover(screen.getByText("@username"))
    
    await waitFor(() => {
      expect(screen.getByText("Username")).toBeInTheDocument()
      expect(screen.getByText("User bio goes here")).toBeInTheDocument()
    })
  })
})

