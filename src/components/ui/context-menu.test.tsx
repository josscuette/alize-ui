import { describe, it, expect } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuShortcut,
} from "./context-menu"

describe("ContextMenu", () => {
  describe("Rendering", () => {
    it("renders trigger correctly", () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger data-testid="trigger">
            Right click me
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Item</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )

      expect(screen.getByTestId("trigger")).toBeInTheDocument()
      expect(screen.getByText("Right click me")).toBeInTheDocument()
    })
  })

  describe("Interaction", () => {
    it("opens on right-click", async () => {
      const user = userEvent.setup()
      
      render(
        <ContextMenu>
          <ContextMenuTrigger data-testid="trigger">
            Right click me
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Copy</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )

      await user.pointer([{ target: screen.getByTestId("trigger"), keys: "[MouseRight]" }])

      await waitFor(() => {
        expect(screen.getByText("Copy")).toBeVisible()
      })
    })
  })
})

describe("ContextMenuTrigger", () => {
  it("renders with data-slot attribute", () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Content</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Item</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    expect(screen.getByTestId("trigger")).toHaveAttribute(
      "data-slot",
      "context-menu-trigger"
    )
  })
})

describe("ContextMenuContent", () => {
  it("renders with data-slot attribute when visible", async () => {
    const user = userEvent.setup()
    
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Content</ContextMenuTrigger>
        <ContextMenuContent data-testid="content">
          <ContextMenuItem>Item</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    await user.pointer([{ target: screen.getByTestId("trigger"), keys: "[MouseRight]" }])

    await waitFor(() => {
      expect(screen.getByTestId("content")).toHaveAttribute(
        "data-slot",
        "context-menu-content"
      )
    })
  })

  it("accepts custom className", async () => {
    const user = userEvent.setup()
    
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Content</ContextMenuTrigger>
        <ContextMenuContent className="custom-class" data-testid="content">
          <ContextMenuItem>Item</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    await user.pointer([{ target: screen.getByTestId("trigger"), keys: "[MouseRight]" }])

    await waitFor(() => {
      expect(screen.getByTestId("content")).toHaveClass("custom-class")
    })
  })
})

describe("ContextMenuItem", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Content</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem data-testid="item">Copy</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    await user.pointer([{ target: screen.getByTestId("trigger"), keys: "[MouseRight]" }])

    await waitFor(() => {
      expect(screen.getByTestId("item")).toHaveAttribute(
        "data-slot",
        "context-menu-item"
      )
    })
  })

  it("supports inset prop", async () => {
    const user = userEvent.setup()
    
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Content</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem inset data-testid="item">
            Inset Item
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    await user.pointer([{ target: screen.getByTestId("trigger"), keys: "[MouseRight]" }])

    await waitFor(() => {
      expect(screen.getByTestId("item")).toHaveAttribute("data-inset", "true")
    })
  })

  it("supports destructive variant", async () => {
    const user = userEvent.setup()
    
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Content</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem variant="destructive" data-testid="item">
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    await user.pointer([{ target: screen.getByTestId("trigger"), keys: "[MouseRight]" }])

    await waitFor(() => {
      expect(screen.getByTestId("item")).toHaveAttribute(
        "data-variant",
        "destructive"
      )
    })
  })
})

describe("ContextMenuSeparator", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Content</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Copy</ContextMenuItem>
          <ContextMenuSeparator data-testid="separator" />
          <ContextMenuItem>Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    await user.pointer([{ target: screen.getByTestId("trigger"), keys: "[MouseRight]" }])

    await waitFor(() => {
      expect(screen.getByTestId("separator")).toHaveAttribute(
        "data-slot",
        "context-menu-separator"
      )
    })
  })
})

describe("ContextMenuLabel", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Content</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel data-testid="label">Actions</ContextMenuLabel>
          <ContextMenuItem>Copy</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    await user.pointer([{ target: screen.getByTestId("trigger"), keys: "[MouseRight]" }])

    await waitFor(() => {
      expect(screen.getByTestId("label")).toHaveAttribute(
        "data-slot",
        "context-menu-label"
      )
    })
  })

  it("supports inset prop", async () => {
    const user = userEvent.setup()
    
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Content</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel inset data-testid="label">
            Actions
          </ContextMenuLabel>
        </ContextMenuContent>
      </ContextMenu>
    )

    await user.pointer([{ target: screen.getByTestId("trigger"), keys: "[MouseRight]" }])

    await waitFor(() => {
      expect(screen.getByTestId("label")).toHaveAttribute("data-inset", "true")
    })
  })
})

describe("ContextMenuCheckboxItem", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Content</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuCheckboxItem data-testid="checkbox" checked>
            Show Hidden Files
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    await user.pointer([{ target: screen.getByTestId("trigger"), keys: "[MouseRight]" }])

    await waitFor(() => {
      expect(screen.getByTestId("checkbox")).toHaveAttribute(
        "data-slot",
        "context-menu-checkbox-item"
      )
    })
  })
})

describe("ContextMenuRadioGroup and ContextMenuRadioItem", () => {
  it("renders radio group with data-slot attributes", async () => {
    const user = userEvent.setup()
    
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Content</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuRadioGroup value="icons" data-testid="radio-group">
            <ContextMenuRadioItem value="icons" data-testid="radio-item">
              Icons
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="list">List</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    )

    await user.pointer([{ target: screen.getByTestId("trigger"), keys: "[MouseRight]" }])

    await waitFor(() => {
      expect(screen.getByTestId("radio-group")).toHaveAttribute(
        "data-slot",
        "context-menu-radio-group"
      )
      expect(screen.getByTestId("radio-item")).toHaveAttribute(
        "data-slot",
        "context-menu-radio-item"
      )
    })
  })
})

describe("ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent", () => {
  it("renders submenu structure", async () => {
    const user = userEvent.setup()
    
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Content</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuSub>
            <ContextMenuSubTrigger data-testid="sub-trigger">
              More Options
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Option 1</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>
    )

    await user.pointer([{ target: screen.getByTestId("trigger"), keys: "[MouseRight]" }])

    await waitFor(() => {
      // ContextMenuSub doesn't render a DOM element directly (Radix primitive)
      // We verify through the sub-trigger
      expect(screen.getByTestId("sub-trigger")).toHaveAttribute(
        "data-slot",
        "context-menu-sub-trigger"
      )
      expect(screen.getByText("More Options")).toBeInTheDocument()
    })
  })
})

describe("ContextMenuShortcut", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <ContextMenu>
        <ContextMenuTrigger data-testid="trigger">Content</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            Copy <ContextMenuShortcut data-testid="shortcut">⌘C</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    await user.pointer([{ target: screen.getByTestId("trigger"), keys: "[MouseRight]" }])

    await waitFor(() => {
      expect(screen.getByTestId("shortcut")).toHaveAttribute(
        "data-slot",
        "context-menu-shortcut"
      )
      expect(screen.getByText("⌘C")).toBeInTheDocument()
    })
  })
})

describe("Full context menu example", () => {
  it("renders complete context menu structure", () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger className="p-4 border">
          Right click me
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>Actions</ContextMenuLabel>
          <ContextMenuItem>Cut</ContextMenuItem>
          <ContextMenuItem>Copy</ContextMenuItem>
          <ContextMenuItem>Paste</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem>Show Hidden</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    expect(screen.getByText("Right click me")).toBeInTheDocument()
  })
})

