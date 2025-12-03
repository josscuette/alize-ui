/**
 * Integration tests for Dialog with nested components
 * Tests dialog interactions, form submission within dialogs, and accessibility
 */
import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import * as React from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Test component: Dialog with form
function DialogWithForm({ onSave }: { onSave: (name: string) => void }) {
  const [name, setName] = React.useState("")
  const [open, setOpen] = React.useState(false)

  const handleSave = () => {
    onSave(name)
    setOpen(false)
    setName("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Test component: Confirmation dialog
function ConfirmationDialog({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void
  onCancel: () => void
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            Yes, delete account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

describe("Dialog Integration", () => {
  describe("Dialog with form", () => {
    it("opens dialog and shows form", async () => {
      const user = userEvent.setup()
      const onSave = vi.fn()

      render(<DialogWithForm onSave={onSave} />)

      await user.click(screen.getByRole("button", { name: /edit profile/i }))

      await waitFor(() => {
        expect(screen.getByText("Edit profile")).toBeInTheDocument()
        expect(
          screen.getByText("Make changes to your profile here.")
        ).toBeInTheDocument()
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
      })
    })

    it("accepts input in dialog form", async () => {
      const user = userEvent.setup()
      const onSave = vi.fn()

      render(<DialogWithForm onSave={onSave} />)

      await user.click(screen.getByRole("button", { name: /edit profile/i }))

      await waitFor(() => {
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
      })

      await user.type(screen.getByLabelText(/name/i), "John Doe")

      expect(screen.getByLabelText(/name/i)).toHaveValue("John Doe")
    })

    it("saves data and closes dialog", async () => {
      const user = userEvent.setup()
      const onSave = vi.fn()

      render(<DialogWithForm onSave={onSave} />)

      await user.click(screen.getByRole("button", { name: /edit profile/i }))

      await waitFor(() => {
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
      })

      await user.type(screen.getByLabelText(/name/i), "John Doe")
      await user.click(screen.getByRole("button", { name: /save changes/i }))

      await waitFor(() => {
        expect(onSave).toHaveBeenCalledWith("John Doe")
        expect(screen.queryByText("Edit profile")).not.toBeInTheDocument()
      })
    })

    it("cancels and closes dialog without saving", async () => {
      const user = userEvent.setup()
      const onSave = vi.fn()

      render(<DialogWithForm onSave={onSave} />)

      await user.click(screen.getByRole("button", { name: /edit profile/i }))

      await waitFor(() => {
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
      })

      await user.type(screen.getByLabelText(/name/i), "John Doe")
      await user.click(screen.getByRole("button", { name: /cancel/i }))

      await waitFor(() => {
        expect(onSave).not.toHaveBeenCalled()
        expect(screen.queryByText("Edit profile")).not.toBeInTheDocument()
      })
    })

    it("closes dialog on escape key", async () => {
      const user = userEvent.setup()
      const onSave = vi.fn()

      render(<DialogWithForm onSave={onSave} />)

      await user.click(screen.getByRole("button", { name: /edit profile/i }))

      await waitFor(() => {
        expect(screen.getByText("Edit profile")).toBeInTheDocument()
      })

      await user.keyboard("{Escape}")

      await waitFor(() => {
        expect(screen.queryByText("Edit profile")).not.toBeInTheDocument()
      })
    })
  })

  describe("Alert Dialog (Confirmation)", () => {
    it("opens confirmation dialog", async () => {
      const user = userEvent.setup()
      const onConfirm = vi.fn()
      const onCancel = vi.fn()

      render(<ConfirmationDialog onConfirm={onConfirm} onCancel={onCancel} />)

      await user.click(screen.getByRole("button", { name: /delete account/i }))

      await waitFor(() => {
        expect(
          screen.getByText("Are you absolutely sure?")
        ).toBeInTheDocument()
        expect(
          screen.getByText(/this action cannot be undone/i)
        ).toBeInTheDocument()
      })
    })

    it("confirms action", async () => {
      const user = userEvent.setup()
      const onConfirm = vi.fn()
      const onCancel = vi.fn()

      render(<ConfirmationDialog onConfirm={onConfirm} onCancel={onCancel} />)

      await user.click(screen.getByRole("button", { name: /delete account/i }))

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: /yes, delete account/i })
        ).toBeInTheDocument()
      })

      await user.click(
        screen.getByRole("button", { name: /yes, delete account/i })
      )

      await waitFor(() => {
        expect(onConfirm).toHaveBeenCalled()
      })
    })

    it("cancels action", async () => {
      const user = userEvent.setup()
      const onConfirm = vi.fn()
      const onCancel = vi.fn()

      render(<ConfirmationDialog onConfirm={onConfirm} onCancel={onCancel} />)

      await user.click(screen.getByRole("button", { name: /delete account/i }))

      await waitFor(() => {
        expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument()
      })

      await user.click(screen.getByRole("button", { name: /cancel/i }))

      await waitFor(() => {
        expect(onCancel).toHaveBeenCalled()
        expect(onConfirm).not.toHaveBeenCalled()
      })
    })
  })

  describe("Dialog accessibility", () => {
    it("focuses dialog content when opened", async () => {
      const user = userEvent.setup()
      const onSave = vi.fn()

      render(<DialogWithForm onSave={onSave} />)

      await user.click(screen.getByRole("button", { name: /edit profile/i }))

      await waitFor(() => {
        // Dialog should trap focus
        expect(screen.getByRole("dialog")).toBeInTheDocument()
      })
    })

    it("returns focus to trigger when closed", async () => {
      const user = userEvent.setup()
      const onSave = vi.fn()

      render(<DialogWithForm onSave={onSave} />)

      const trigger = screen.getByRole("button", { name: /edit profile/i })
      await user.click(trigger)

      await waitFor(() => {
        expect(screen.getByText("Edit profile")).toBeInTheDocument()
      })

      await user.keyboard("{Escape}")

      await waitFor(() => {
        expect(trigger).toHaveFocus()
      })
    })
  })
})

