import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs"

expect.extend(toHaveNoViolations)

describe("Tabs", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(
        <Tabs defaultValue="tab1" data-testid="tabs">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      )
      const tabs = screen.getByTestId("tabs")
      expect(tabs).toHaveAttribute("data-slot", "tabs")
    })

    it("renders tabs list", () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList data-testid="tabs-list">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      )
      expect(screen.getByTestId("tabs-list")).toBeInTheDocument()
    })

    it("renders tab triggers", () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      )
      expect(screen.getByRole("tab", { name: /tab 1/i })).toBeInTheDocument()
      expect(screen.getByRole("tab", { name: /tab 2/i })).toBeInTheDocument()
    })

    it("renders tab content", () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      )
      expect(screen.getByRole("tabpanel")).toBeInTheDocument()
      expect(screen.getByText("Content 1")).toBeInTheDocument()
    })
  })

  describe("Selection", () => {
    it("shows content for default selected tab", () => {
      render(
        <Tabs defaultValue="tab2">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      )
      expect(screen.getByText("Content 2")).toBeVisible()
    })

    it("marks selected tab as active", () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      )
      const tab1 = screen.getByRole("tab", { name: /tab 1/i })
      expect(tab1).toHaveAttribute("data-state", "active")
    })
  })

  describe("Interactions", () => {
    it("switches tabs on click", async () => {
      const user = userEvent.setup()
      
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      )
      
      await user.click(screen.getByRole("tab", { name: /tab 2/i }))
      expect(screen.getByText("Content 2")).toBeVisible()
    })

    it("calls onValueChange when tab changes", async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      
      render(
        <Tabs defaultValue="tab1" onValueChange={handleChange}>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      )
      
      await user.click(screen.getByRole("tab", { name: /tab 2/i }))
      expect(handleChange).toHaveBeenCalledWith("tab2")
    })

    it("supports keyboard navigation", async () => {
      const user = userEvent.setup()
      
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      )
      
      const tab1 = screen.getByRole("tab", { name: /tab 1/i })
      await user.click(tab1)
      await user.keyboard("{ArrowRight}")
      
      expect(screen.getByRole("tab", { name: /tab 2/i })).toHaveFocus()
    })
  })

  describe("Disabled state", () => {
    it("disables tab trigger", () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2" disabled>Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      )
      const tab2 = screen.getByRole("tab", { name: /tab 2/i })
      expect(tab2).toBeDisabled()
    })

    it("cannot select disabled tab", async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      
      render(
        <Tabs defaultValue="tab1" onValueChange={handleChange}>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2" disabled>Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      )
      
      await user.click(screen.getByRole("tab", { name: /tab 2/i }))
      expect(handleChange).not.toHaveBeenCalled()
    })
  })

  describe("Styling", () => {
    it("applies custom className to Tabs", () => {
      render(
        <Tabs defaultValue="tab1" className="custom-tabs" data-testid="tabs">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content</TabsContent>
        </Tabs>
      )
      expect(screen.getByTestId("tabs")).toHaveClass("custom-tabs")
    })

    it("applies custom className to TabsList", () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList className="custom-list" data-testid="list">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content</TabsContent>
        </Tabs>
      )
      expect(screen.getByTestId("list")).toHaveClass("custom-list")
    })

    it("applies custom className to TabsTrigger", () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1" className="custom-trigger">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content</TabsContent>
        </Tabs>
      )
      expect(screen.getByRole("tab")).toHaveClass("custom-trigger")
    })

    it("applies custom className to TabsContent", () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="custom-content">Content</TabsContent>
        </Tabs>
      )
      expect(screen.getByRole("tabpanel")).toHaveClass("custom-content")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has correct ARIA attributes", () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      )
      
      const tab = screen.getByRole("tab")
      const tabpanel = screen.getByRole("tabpanel")
      
      expect(tab).toHaveAttribute("aria-selected", "true")
      expect(tab).toHaveAttribute("aria-controls")
      expect(tabpanel).toHaveAttribute("aria-labelledby")
    })

    it("has no accessibility violations with disabled tab", async () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2" disabled>Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to Tabs", () => {
      render(
        <Tabs defaultValue="tab1" data-testid="tabs-test">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content</TabsContent>
        </Tabs>
      )
      expect(screen.getByTestId("tabs-test")).toBeInTheDocument()
    })

    it("supports controlled value", () => {
      render(
        <Tabs value="tab2">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      )
      expect(screen.getByText("Content 2")).toBeVisible()
    })
  })
})

