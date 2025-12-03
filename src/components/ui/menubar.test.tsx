import { describe, it, expect } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
} from "./menubar"

describe("Menubar", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(
        <Menubar data-testid="menubar">
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )

      expect(screen.getByTestId("menubar")).toBeInTheDocument()
      expect(screen.getByText("File")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(
        <Menubar data-testid="menubar">
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )

      expect(screen.getByTestId("menubar")).toHaveAttribute("data-slot", "menubar")
    })
  })

  describe("Props", () => {
    it("accepts custom className", () => {
      render(
        <Menubar className="custom-class" data-testid="menubar">
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )

      expect(screen.getByTestId("menubar")).toHaveClass("custom-class")
    })
  })
})

describe("MenubarMenu", () => {
  it("renders menu trigger correctly", () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger data-testid="trigger">File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    // MenubarMenu is a Radix primitive that doesn't render a DOM element directly
    // We verify the menu works through its trigger
    expect(screen.getByTestId("trigger")).toBeInTheDocument()
    expect(screen.getByText("File")).toBeInTheDocument()
  })
})

describe("MenubarTrigger", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger data-testid="trigger">File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    expect(screen.getByTestId("trigger")).toHaveAttribute(
      "data-slot",
      "menubar-trigger"
    )
  })

  it("opens menu on click", async () => {
    const user = userEvent.setup()
    
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByText("File"))

    await waitFor(() => {
      expect(screen.getByText("New File")).toBeVisible()
    })
  })

  it("accepts custom className", () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="custom-class" data-testid="trigger">
            File
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    expect(screen.getByTestId("trigger")).toHaveClass("custom-class")
  })
})

describe("MenubarContent", () => {
  it("renders with data-slot attribute when visible", async () => {
    const user = userEvent.setup()
    
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent data-testid="content">
            <MenubarItem>New</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByText("File"))

    await waitFor(() => {
      expect(screen.getByTestId("content")).toHaveAttribute(
        "data-slot",
        "menubar-content"
      )
    })
  })
})

describe("MenubarItem", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem data-testid="item">New</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByText("File"))

    await waitFor(() => {
      expect(screen.getByTestId("item")).toHaveAttribute(
        "data-slot",
        "menubar-item"
      )
    })
  })

  it("supports inset prop", async () => {
    const user = userEvent.setup()
    
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem inset data-testid="item">
              New
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByText("File"))

    await waitFor(() => {
      expect(screen.getByTestId("item")).toHaveAttribute("data-inset", "true")
    })
  })

  it("supports destructive variant", async () => {
    const user = userEvent.setup()
    
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem variant="destructive" data-testid="item">
              Delete
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByText("File"))

    await waitFor(() => {
      expect(screen.getByTestId("item")).toHaveAttribute(
        "data-variant",
        "destructive"
      )
    })
  })
})

describe("MenubarSeparator", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
            <MenubarSeparator data-testid="separator" />
            <MenubarItem>Exit</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByText("File"))

    await waitFor(() => {
      expect(screen.getByTestId("separator")).toHaveAttribute(
        "data-slot",
        "menubar-separator"
      )
    })
  })
})

describe("MenubarLabel", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel data-testid="label">Recent Files</MenubarLabel>
            <MenubarItem>File 1</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByText("File"))

    await waitFor(() => {
      expect(screen.getByTestId("label")).toHaveAttribute(
        "data-slot",
        "menubar-label"
      )
    })
  })

  it("supports inset prop", async () => {
    const user = userEvent.setup()
    
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel inset data-testid="label">
              Recent Files
            </MenubarLabel>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByText("File"))

    await waitFor(() => {
      expect(screen.getByTestId("label")).toHaveAttribute("data-inset", "true")
    })
  })
})

describe("MenubarCheckboxItem", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem data-testid="checkbox" checked>
              Show Sidebar
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByText("View"))

    await waitFor(() => {
      expect(screen.getByTestId("checkbox")).toHaveAttribute(
        "data-slot",
        "menubar-checkbox-item"
      )
    })
  })
})

describe("MenubarRadioGroup and MenubarRadioItem", () => {
  it("renders radio group with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="compact" data-testid="radio-group">
              <MenubarRadioItem value="compact" data-testid="radio-item">
                Compact
              </MenubarRadioItem>
              <MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByText("View"))

    await waitFor(() => {
      expect(screen.getByTestId("radio-group")).toHaveAttribute(
        "data-slot",
        "menubar-radio-group"
      )
      expect(screen.getByTestId("radio-item")).toHaveAttribute(
        "data-slot",
        "menubar-radio-item"
      )
    })
  })
})

describe("MenubarSub, MenubarSubTrigger, MenubarSubContent", () => {
  it("renders submenu structure", async () => {
    const user = userEvent.setup()
    
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger data-testid="sub-trigger">
                Find
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Find in Files</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByText("Edit"))

    await waitFor(() => {
      // MenubarSub doesn't render a DOM element directly (Radix primitive)
      // We verify through the sub-trigger
      expect(screen.getByTestId("sub-trigger")).toHaveAttribute(
        "data-slot",
        "menubar-sub-trigger"
      )
      expect(screen.getByText("Find")).toBeInTheDocument()
    })
  })
})

describe("MenubarShortcut", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Save <MenubarShortcut data-testid="shortcut">⌘S</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByText("File"))

    await waitFor(() => {
      expect(screen.getByTestId("shortcut")).toHaveAttribute(
        "data-slot",
        "menubar-shortcut"
      )
      expect(screen.getByText("⌘S")).toBeInTheDocument()
    })
  })
})

describe("Full menubar example", () => {
  it("renders complete menubar structure", () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
            <MenubarItem>Open</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Exit</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    expect(screen.getByText("File")).toBeInTheDocument()
    expect(screen.getByText("Edit")).toBeInTheDocument()
  })
})

