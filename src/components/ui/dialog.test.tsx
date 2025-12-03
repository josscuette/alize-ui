import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./dialog"

expect.extend(toHaveNoViolations)

describe("Dialog", () => {
  describe("Rendering", () => {
    it("renders dialog trigger", () => {
      render(
        <Dialog>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      expect(screen.getByText("Open Dialog")).toBeInTheDocument()
    })

    it("does not show content initially", () => {
      render(
        <Dialog>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })

    it("has data-slot on trigger", () => {
      render(
        <Dialog>
          <DialogTrigger data-testid="trigger">Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      expect(screen.getByTestId("trigger")).toHaveAttribute("data-slot", "dialog-trigger")
    })
  })

  describe("Interactions", () => {
    it("shows content on click", async () => {
      const user = userEvent.setup()
      
      render(
        <Dialog>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open Dialog"))
      
      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument()
      })
    })

    it("closes on close button click", async () => {
      const user = userEvent.setup()
      
      render(
        <Dialog>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent showCloseButton>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open Dialog"))
      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument()
      })
      
      await user.click(screen.getByRole("button", { name: /close/i }))
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      })
    })

    it("closes on escape key", async () => {
      const user = userEvent.setup()
      
      render(
        <Dialog>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open Dialog"))
      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument()
      })
      
      await user.keyboard("{Escape}")
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      })
    })
  })

  describe("Controlled state", () => {
    it("respects open prop", () => {
      render(
        <Dialog open>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      
      expect(screen.getByRole("dialog")).toBeInTheDocument()
    })

    it("calls onOpenChange when state changes", async () => {
      const handleOpenChange = vi.fn()
      const user = userEvent.setup()
      
      render(
        <Dialog onOpenChange={handleOpenChange}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open"))
      expect(handleOpenChange).toHaveBeenCalledWith(true)
    })

    it("respects defaultOpen prop", () => {
      render(
        <Dialog defaultOpen>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      
      expect(screen.getByRole("dialog")).toBeInTheDocument()
    })
  })

  describe("Close button", () => {
    it("shows close button by default", async () => {
      const user = userEvent.setup()
      
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument()
      })
    })

    it("hides close button when showCloseButton is false", async () => {
      const user = userEvent.setup()
      
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument()
      })
      expect(screen.queryByRole("button", { name: /close/i })).not.toBeInTheDocument()
    })
  })

  describe("Dialog structure", () => {
    it("renders DialogHeader", async () => {
      const user = userEvent.setup()
      
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader data-testid="header">
              <DialogTitle>Title</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByTestId("header")).toHaveAttribute("data-slot", "dialog-header")
      })
    })

    it("renders DialogFooter", async () => {
      const user = userEvent.setup()
      
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
            <DialogFooter data-testid="footer">
              <button>Action</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByTestId("footer")).toHaveAttribute("data-slot", "dialog-footer")
      })
    })

    it("renders DialogTitle", async () => {
      const user = userEvent.setup()
      
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>My Dialog Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByText("My Dialog Title")).toBeInTheDocument()
      })
    })

    it("renders DialogDescription", async () => {
      const user = userEvent.setup()
      
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>This is a description</DialogDescription>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByText("This is a description")).toBeInTheDocument()
      })
    })
  })

  describe("DialogClose", () => {
    it("renders custom close button", async () => {
      const user = userEvent.setup()
      
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogTitle>Title</DialogTitle>
            <DialogClose data-testid="custom-close">Close</DialogClose>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByTestId("custom-close")).toBeInTheDocument()
      })
    })

    it("closes dialog when DialogClose is clicked", async () => {
      const user = userEvent.setup()
      
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogTitle>Title</DialogTitle>
            <DialogClose>Close Me</DialogClose>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument()
      })
      
      await user.click(screen.getByText("Close Me"))
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      })
    })
  })

  describe("Styling", () => {
    it("applies custom className to DialogContent", async () => {
      const user = userEvent.setup()
      
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent className="custom-dialog">
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        const dialog = screen.getByRole("dialog")
        expect(dialog).toHaveClass("custom-dialog")
      })
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations when closed", async () => {
      const { container } = render(
        <Dialog>
          <DialogTrigger asChild>
            <button>Open dialog</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogContent>
        </Dialog>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("renders correctly when open", () => {
      render(
        <Dialog defaultOpen>
          <DialogTrigger asChild>
            <button>Open dialog</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogContent>
        </Dialog>
      )
      expect(screen.getByRole("dialog")).toBeInTheDocument()
      expect(screen.getByText("Title")).toBeInTheDocument()
      expect(screen.getByText("Description")).toBeInTheDocument()
    })

    it("has correct role on dialog", async () => {
      render(
        <Dialog defaultOpen>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      
      expect(screen.getByRole("dialog")).toBeInTheDocument()
    })

    it("dialog is labelled by title", async () => {
      render(
        <Dialog defaultOpen>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>My Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      
      const dialog = screen.getByRole("dialog")
      expect(dialog).toHaveAttribute("aria-labelledby")
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to DialogTrigger", () => {
      render(
        <Dialog>
          <DialogTrigger data-testid="trigger-test">Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      expect(screen.getByTestId("trigger-test")).toBeInTheDocument()
    })

    it("forwards modal prop", async () => {
      const user = userEvent.setup()
      
      render(
        <Dialog modal={false}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument()
      })
    })
  })
})

