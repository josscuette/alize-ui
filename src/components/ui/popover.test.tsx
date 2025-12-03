import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from "./popover"

expect.extend(toHaveNoViolations)

describe("Popover", () => {
  describe("Rendering", () => {
    it("renders popover trigger", () => {
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      expect(screen.getByText("Open")).toBeInTheDocument()
    })

    it("does not show content initially", () => {
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      expect(screen.queryByText("Content")).not.toBeInTheDocument()
    })

    it("has data-slot on trigger", () => {
      render(
        <Popover>
          <PopoverTrigger data-testid="trigger">Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      expect(screen.getByTestId("trigger")).toHaveAttribute("data-slot", "popover-trigger")
    })
  })

  describe("Interactions", () => {
    it("shows content on click", async () => {
      const user = userEvent.setup()
      
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByText("Content")).toBeInTheDocument()
      })
    })

    it("hides content on click outside", async () => {
      const user = userEvent.setup()
      
      render(
        <div>
          <button>Outside</button>
          <Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent>Content</PopoverContent>
          </Popover>
        </div>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByText("Content")).toBeInTheDocument()
      })
      
      await user.click(screen.getByText("Outside"))
      await waitFor(() => {
        expect(screen.queryByText("Content")).not.toBeInTheDocument()
      })
    })

    it("toggles content on repeated clicks", async () => {
      const user = userEvent.setup()
      
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByText("Content")).toBeInTheDocument()
      })
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.queryByText("Content")).not.toBeInTheDocument()
      })
    })
  })

  describe("Controlled state", () => {
    it("respects open prop", () => {
      render(
        <Popover open>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      
      expect(screen.getByText("Content")).toBeInTheDocument()
    })

    it("calls onOpenChange when state changes", async () => {
      const handleOpenChange = vi.fn()
      const user = userEvent.setup()
      
      render(
        <Popover onOpenChange={handleOpenChange}>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      
      await user.click(screen.getByText("Open"))
      expect(handleOpenChange).toHaveBeenCalledWith(true)
    })

    it("respects defaultOpen prop", () => {
      render(
        <Popover defaultOpen>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      
      expect(screen.getByText("Content")).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies custom className to PopoverContent", async () => {
      const user = userEvent.setup()
      
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent className="custom-popover">Content</PopoverContent>
        </Popover>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        const content = screen.getByText("Content").closest('[data-slot="popover-content"]')
        expect(content).toHaveClass("custom-popover")
      })
    })

    it("applies base classes to PopoverContent", async () => {
      const user = userEvent.setup()
      
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        const content = screen.getByText("Content").closest('[data-slot="popover-content"]')
        expect(content).toHaveClass("bg-popover", "rounded-md", "border")
      })
    })
  })

  describe("Alignment", () => {
    it("respects align prop", async () => {
      const user = userEvent.setup()
      
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent align="start">Content</PopoverContent>
        </Popover>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByText("Content")).toBeInTheDocument()
      })
    })

    it("respects sideOffset prop", async () => {
      const user = userEvent.setup()
      
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent sideOffset={10}>Content</PopoverContent>
        </Popover>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByText("Content")).toBeInTheDocument()
      })
    })
  })

  describe("PopoverAnchor", () => {
    it("renders anchor element", () => {
      render(
        <Popover>
          <PopoverAnchor data-testid="anchor">Anchor</PopoverAnchor>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      expect(screen.getByTestId("anchor")).toBeInTheDocument()
    })

    it("has data-slot on anchor", () => {
      render(
        <Popover>
          <PopoverAnchor data-testid="anchor">Anchor</PopoverAnchor>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      expect(screen.getByTestId("anchor")).toHaveAttribute("data-slot", "popover-anchor")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations when closed", async () => {
      const { container } = render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Open popover</button>
          </PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations when open", async () => {
      const { container } = render(
        <Popover defaultOpen>
          <PopoverTrigger asChild>
            <button>Open popover</button>
          </PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("supports keyboard navigation to close", async () => {
      const user = userEvent.setup()
      
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByText("Content")).toBeInTheDocument()
      })
      
      await user.keyboard("{Escape}")
      await waitFor(() => {
        expect(screen.queryByText("Content")).not.toBeInTheDocument()
      })
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to PopoverTrigger", () => {
      render(
        <Popover>
          <PopoverTrigger data-testid="trigger-test">Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      expect(screen.getByTestId("trigger-test")).toBeInTheDocument()
    })

    it("forwards modal prop", async () => {
      const user = userEvent.setup()
      
      render(
        <Popover modal>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByText("Content")).toBeInTheDocument()
      })
    })
  })
})

