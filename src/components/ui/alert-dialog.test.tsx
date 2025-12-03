import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./alert-dialog"

expect.extend(toHaveNoViolations)

describe("AlertDialog", () => {
  describe("Rendering", () => {
    it("renders alert dialog trigger", () => {
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
      )
      expect(screen.getByText("Open")).toBeInTheDocument()
    })

    it("does not show content initially", () => {
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
      )
      expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument()
    })

    it("has data-slot on trigger", () => {
      render(
        <AlertDialog>
          <AlertDialogTrigger data-testid="trigger">Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
      )
      expect(screen.getByTestId("trigger")).toHaveAttribute("data-slot", "alert-dialog-trigger")
    })
  })

  describe("Interactions", () => {
    it("shows content on click", async () => {
      const user = userEvent.setup()
      
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByRole("alertdialog")).toBeInTheDocument()
      })
    })

    it("closes on Cancel button click", async () => {
      const user = userEvent.setup()
      
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByRole("alertdialog")).toBeInTheDocument()
      })
      
      await user.click(screen.getByText("Cancel"))
      await waitFor(() => {
        expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument()
      })
    })

    it("closes on Action button click", async () => {
      const user = userEvent.setup()
      
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByRole("alertdialog")).toBeInTheDocument()
      })
      
      await user.click(screen.getByText("Continue"))
      await waitFor(() => {
        expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument()
      })
    })

    it("closes on escape key", async () => {
      const user = userEvent.setup()
      
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByRole("alertdialog")).toBeInTheDocument()
      })
      
      await user.keyboard("{Escape}")
      await waitFor(() => {
        expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument()
      })
    })
  })

  describe("Controlled state", () => {
    it("respects open prop", () => {
      render(
        <AlertDialog open>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      expect(screen.getByRole("alertdialog")).toBeInTheDocument()
    })

    it("calls onOpenChange when state changes", async () => {
      const handleOpenChange = vi.fn()
      const user = userEvent.setup()
      
      render(
        <AlertDialog onOpenChange={handleOpenChange}>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      await user.click(screen.getByText("Open"))
      expect(handleOpenChange).toHaveBeenCalledWith(true)
    })

    it("respects defaultOpen prop", () => {
      render(
        <AlertDialog defaultOpen>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      expect(screen.getByRole("alertdialog")).toBeInTheDocument()
    })
  })

  describe("AlertDialog structure", () => {
    it("renders AlertDialogHeader", async () => {
      const user = userEvent.setup()
      
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader data-testid="header">
              <AlertDialogTitle>Title</AlertDialogTitle>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByTestId("header")).toHaveAttribute("data-slot", "alert-dialog-header")
      })
    })

    it("renders AlertDialogFooter", async () => {
      const user = userEvent.setup()
      
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogFooter data-testid="footer">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByTestId("footer")).toHaveAttribute("data-slot", "alert-dialog-footer")
      })
    })

    it("renders AlertDialogTitle", async () => {
      const user = userEvent.setup()
      
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>My Alert Title</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByText("My Alert Title")).toBeInTheDocument()
      })
    })

    it("renders AlertDialogDescription", async () => {
      const user = userEvent.setup()
      
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone</AlertDialogDescription>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByText("This action cannot be undone")).toBeInTheDocument()
      })
    })
  })

  describe("Action and Cancel buttons", () => {
    it("applies button styles to AlertDialogAction", async () => {
      const user = userEvent.setup()
      
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        const action = screen.getByText("Continue")
        expect(action).toHaveClass("bg-semantic-surface-primary")
      })
    })

    it("applies outline button styles to AlertDialogCancel", async () => {
      const user = userEvent.setup()
      
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        const cancel = screen.getByText("Cancel")
        expect(cancel).toHaveClass("border")
      })
    })
  })

  describe("Styling", () => {
    it("applies custom className to AlertDialogContent", async () => {
      const user = userEvent.setup()
      
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent className="custom-alert-dialog">
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        const dialog = screen.getByRole("alertdialog")
        expect(dialog).toHaveClass("custom-alert-dialog")
      })
    })

    it("applies custom className to AlertDialogAction", async () => {
      const user = userEvent.setup()
      
      render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogAction className="custom-action">Continue</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByText("Continue")).toHaveClass("custom-action")
      })
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations when closed", async () => {
      const { container } = render(
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button>Delete item</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("renders correctly when open", () => {
      render(
        <AlertDialog defaultOpen>
          <AlertDialogTrigger asChild>
            <button>Delete item</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
      expect(screen.getByRole("alertdialog")).toBeInTheDocument()
      expect(screen.getByText("Are you sure?")).toBeInTheDocument()
    })

    it("has correct role on alert dialog", async () => {
      render(
        <AlertDialog defaultOpen>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      expect(screen.getByRole("alertdialog")).toBeInTheDocument()
    })

    it("is labelled by title", async () => {
      render(
        <AlertDialog defaultOpen>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>My Title</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      const dialog = screen.getByRole("alertdialog")
      expect(dialog).toHaveAttribute("aria-labelledby")
    })

    it("is described by description", async () => {
      render(
        <AlertDialog defaultOpen>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>Description text</AlertDialogDescription>
          </AlertDialogContent>
        </AlertDialog>
      )
      
      const dialog = screen.getByRole("alertdialog")
      expect(dialog).toHaveAttribute("aria-describedby")
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to AlertDialogTrigger", () => {
      render(
        <AlertDialog>
          <AlertDialogTrigger data-testid="trigger-test">Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
      )
      expect(screen.getByTestId("trigger-test")).toBeInTheDocument()
    })
  })
})

