import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./resizable"

describe("ResizablePanelGroup", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(
        <ResizablePanelGroup direction="horizontal" data-testid="group">
          <ResizablePanel>Panel 1</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>Panel 2</ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByText("Panel 1")).toBeInTheDocument()
      expect(screen.getByText("Panel 2")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(
        <ResizablePanelGroup direction="horizontal" data-testid="group">
          <ResizablePanel>Panel 1</ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("group")).toHaveAttribute(
        "data-slot",
        "resizable-panel-group"
      )
    })
  })

  describe("Direction", () => {
    it("handles horizontal direction", () => {
      render(
        <ResizablePanelGroup direction="horizontal" data-testid="group">
          <ResizablePanel>Panel 1</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>Panel 2</ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("group")).toHaveAttribute(
        "data-panel-group-direction",
        "horizontal"
      )
    })

    it("handles vertical direction", () => {
      render(
        <ResizablePanelGroup direction="vertical" data-testid="group">
          <ResizablePanel>Panel 1</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>Panel 2</ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("group")).toHaveAttribute(
        "data-panel-group-direction",
        "vertical"
      )
    })
  })

  describe("Props", () => {
    it("accepts custom className", () => {
      render(
        <ResizablePanelGroup
          direction="horizontal"
          className="custom-class"
          data-testid="group"
        >
          <ResizablePanel>Panel</ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("group")).toHaveClass("custom-class")
    })

    it("applies default flex styling", () => {
      render(
        <ResizablePanelGroup direction="horizontal" data-testid="group">
          <ResizablePanel>Panel</ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("group")).toHaveClass("flex", "h-full", "w-full")
    })
  })
})

describe("ResizablePanel", () => {
  describe("Rendering", () => {
    it("renders content correctly", () => {
      render(
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel data-testid="panel">
            <div data-testid="content">Panel Content</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("content")).toBeInTheDocument()
      expect(screen.getByText("Panel Content")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel data-testid="panel">Panel</ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("panel")).toHaveAttribute(
        "data-slot",
        "resizable-panel"
      )
    })
  })

  describe("Props", () => {
    it("accepts defaultSize prop", () => {
      render(
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={30} data-testid="panel1">
            Panel 1
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={70} data-testid="panel2">
            Panel 2
          </ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("panel1")).toBeInTheDocument()
      expect(screen.getByTestId("panel2")).toBeInTheDocument()
    })

    it("accepts minSize prop", () => {
      render(
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel minSize={20} data-testid="panel">
            Panel
          </ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("panel")).toBeInTheDocument()
    })

    it("accepts maxSize prop", () => {
      render(
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel maxSize={80} data-testid="panel">
            Panel
          </ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("panel")).toBeInTheDocument()
    })

    it("accepts collapsible prop", () => {
      render(
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel collapsible data-testid="panel">
            Panel
          </ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("panel")).toBeInTheDocument()
    })
  })
})

describe("ResizableHandle", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>Panel 1</ResizablePanel>
          <ResizableHandle data-testid="handle" />
          <ResizablePanel>Panel 2</ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("handle")).toHaveAttribute(
        "data-slot",
        "resizable-handle"
      )
    })
  })

  describe("Props", () => {
    it("renders without handle by default", () => {
      render(
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>Panel 1</ResizablePanel>
          <ResizableHandle data-testid="handle" />
          <ResizablePanel>Panel 2</ResizablePanel>
        </ResizablePanelGroup>
      )

      const handle = screen.getByTestId("handle")
      // The grip icon should not be present without withHandle
      expect(handle.querySelector('[class*="grip"]')).toBeNull()
    })

    it("renders with handle when withHandle is true", () => {
      render(
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>Panel 1</ResizablePanel>
          <ResizableHandle withHandle data-testid="handle" />
          <ResizablePanel>Panel 2</ResizablePanel>
        </ResizablePanelGroup>
      )

      const handle = screen.getByTestId("handle")
      // Should contain a div with the grip icon
      expect(handle.querySelector("div")).toBeInTheDocument()
    })

    it("accepts custom className", () => {
      render(
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>Panel 1</ResizablePanel>
          <ResizableHandle className="custom-class" data-testid="handle" />
          <ResizablePanel>Panel 2</ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("handle")).toHaveClass("custom-class")
    })
  })

  describe("Panel group integration", () => {
    it("separates panels correctly", () => {
      render(
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel data-testid="panel1">Left Panel</ResizablePanel>
          <ResizableHandle data-testid="handle" />
          <ResizablePanel data-testid="panel2">Right Panel</ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("panel1")).toBeInTheDocument()
      expect(screen.getByTestId("handle")).toBeInTheDocument()
      expect(screen.getByTestId("panel2")).toBeInTheDocument()
    })

    it("supports multiple handles", () => {
      render(
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>Panel 1</ResizablePanel>
          <ResizableHandle data-testid="handle1" />
          <ResizablePanel>Panel 2</ResizablePanel>
          <ResizableHandle data-testid="handle2" />
          <ResizablePanel>Panel 3</ResizablePanel>
        </ResizablePanelGroup>
      )

      expect(screen.getByTestId("handle1")).toBeInTheDocument()
      expect(screen.getByTestId("handle2")).toBeInTheDocument()
    })
  })
})

