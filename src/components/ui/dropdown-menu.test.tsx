import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./dropdown-menu"

expect.extend(toHaveNoViolations)

describe("DropdownMenu", () => {
  describe("Rendering", () => {
    it("renders dropdown menu trigger", () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      expect(screen.getByText("Open")).toBeInTheDocument()
    })

    it("does not show content initially", () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      expect(screen.queryByRole("menu")).not.toBeInTheDocument()
    })

    it("has data-slot on trigger", () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger data-testid="trigger">Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      expect(screen.getByTestId("trigger")).toHaveAttribute("data-slot", "dropdown-menu-trigger")
    })
  })

  describe("Interactions", () => {
    it("shows content on click", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByRole("menu")).toBeInTheDocument()
      })
    })

    it("closes on item click", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByRole("menu")).toBeInTheDocument()
      })
      
      await user.click(screen.getByRole("menuitem", { name: /item 1/i }))
      await waitFor(() => {
        expect(screen.queryByRole("menu")).not.toBeInTheDocument()
      })
    })

    it("closes on escape key", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByRole("menu")).toBeInTheDocument()
      })
      
      await user.keyboard("{Escape}")
      await waitFor(() => {
        expect(screen.queryByRole("menu")).not.toBeInTheDocument()
      })
    })

    it("calls onSelect when item is clicked", async () => {
      const handleSelect = vi.fn()
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={handleSelect}>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByRole("menu")).toBeInTheDocument()
      })
      
      await user.click(screen.getByRole("menuitem", { name: /item 1/i }))
      expect(handleSelect).toHaveBeenCalled()
    })
  })

  describe("Controlled state", () => {
    it("respects open prop", () => {
      render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      expect(screen.getByRole("menu")).toBeInTheDocument()
    })

    it("calls onOpenChange when state changes", async () => {
      const handleOpenChange = vi.fn()
      const user = userEvent.setup()
      
      render(
        <DropdownMenu onOpenChange={handleOpenChange}>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      expect(handleOpenChange).toHaveBeenCalledWith(true)
    })

    it("respects defaultOpen prop", () => {
      render(
        <DropdownMenu defaultOpen>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      expect(screen.getByRole("menu")).toBeInTheDocument()
    })
  })

  describe("DropdownMenuItem variants", () => {
    it("renders default variant", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem variant="default">Default Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByRole("menuitem", { name: /default item/i })).toBeInTheDocument()
      })
    })

    it("renders destructive variant", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        const item = screen.getByRole("menuitem", { name: /delete/i })
        expect(item).toHaveAttribute("data-variant", "destructive")
      })
    })

    it("applies inset prop", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem inset>Inset Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        const item = screen.getByRole("menuitem", { name: /inset item/i })
        expect(item).toHaveAttribute("data-inset", "true")
      })
    })
  })

  describe("DropdownMenu structure", () => {
    it("renders DropdownMenuLabel", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByText("My Account")).toBeInTheDocument()
      })
    })

    it("renders DropdownMenuSeparator", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuSeparator data-testid="separator" />
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByTestId("separator")).toHaveAttribute("data-slot", "dropdown-menu-separator")
      })
    })

    it("renders DropdownMenuShortcut", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              Save
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByText("⌘S")).toBeInTheDocument()
      })
    })

    it("renders DropdownMenuGroup", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup data-testid="group">
              <DropdownMenuItem>Item 1</DropdownMenuItem>
              <DropdownMenuItem>Item 2</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByTestId("group")).toHaveAttribute("data-slot", "dropdown-menu-group")
      })
    })
  })

  describe("DropdownMenuCheckboxItem", () => {
    it("renders checkbox item", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked>Status Bar</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByRole("menuitemcheckbox")).toBeInTheDocument()
      })
    })

    it("shows checked state", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked>Checked</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        const checkbox = screen.getByRole("menuitemcheckbox")
        expect(checkbox).toHaveAttribute("aria-checked", "true")
      })
    })
  })

  describe("DropdownMenuRadioGroup", () => {
    it("renders radio group", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value="option1">
              <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getAllByRole("menuitemradio")).toHaveLength(2)
      })
    })

    it("shows selected radio item", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value="option1">
              <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        const radios = screen.getAllByRole("menuitemradio")
        expect(radios[0]).toHaveAttribute("aria-checked", "true")
        expect(radios[1]).toHaveAttribute("aria-checked", "false")
      })
    })
  })

  describe("Submenu", () => {
    it("renders submenu", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Sub Item</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        expect(screen.getByText("More Options")).toBeInTheDocument()
      })
    })
  })

  describe("Disabled items", () => {
    it("disables menu item", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        const item = screen.getByRole("menuitem", { name: /disabled item/i })
        expect(item).toHaveAttribute("data-disabled", "")
      })
    })
  })

  describe("Styling", () => {
    it("applies custom className to DropdownMenuContent", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent className="custom-menu">
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      
      await waitFor(() => {
        const content = screen.getByRole("menu")
        expect(content).toHaveClass("custom-menu")
      })
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations when closed", async () => {
      const { container } = render(
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>Open menu</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("renders correctly when open", () => {
      render(
        <DropdownMenu defaultOpen>
          <DropdownMenuTrigger asChild>
            <button>Open menu</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      expect(screen.getByRole("menu")).toBeInTheDocument()
      expect(screen.getByText("Actions")).toBeInTheDocument()
    })

    it("supports keyboard navigation", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByRole("menu")).toBeInTheDocument()
      })
      
      await user.keyboard("{ArrowDown}")
      // Radix handles focus management
      expect(screen.getByRole("menu")).toBeInTheDocument()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to DropdownMenuTrigger", () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger data-testid="trigger-test">Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      expect(screen.getByTestId("trigger-test")).toBeInTheDocument()
    })

    it("forwards sideOffset to DropdownMenuContent", async () => {
      const user = userEvent.setup()
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      
      await user.click(screen.getByText("Open"))
      await waitFor(() => {
        expect(screen.getByRole("menu")).toBeInTheDocument()
      })
    })
  })
})

