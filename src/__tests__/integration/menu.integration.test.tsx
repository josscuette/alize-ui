/**
 * Integration tests for menu components
 * Tests DropdownMenu, ContextMenu with actions and state management
 */
import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu"
import { Button } from "@/components/ui/button"

// Test component: User menu with actions
function UserMenu({
  onProfile,
  onSettings,
  onLogout,
}: {
  onProfile: () => void
  onSettings: () => void
  onLogout: () => void
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onProfile}>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={onSettings}>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Test component: Settings menu with checkboxes
function SettingsMenu() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showPanel, setShowPanel] = React.useState(false)

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>View Settings</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>View Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Side Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div data-testid="status">
        Status Bar: {showStatusBar ? "visible" : "hidden"}, Panel:{" "}
        {showPanel ? "visible" : "hidden"}
      </div>
    </div>
  )
}

// Test component: Theme selector with radio items
function ThemeSelector() {
  const [theme, setTheme] = React.useState("light")

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Theme: {theme}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div data-testid="current-theme">Current theme: {theme}</div>
    </div>
  )
}

// Test component: File context menu
function FileContextMenu({
  onCopy,
  onCut,
  onPaste,
  onDelete,
}: {
  onCopy: () => void
  onCut: () => void
  onPaste: () => void
  onDelete: () => void
}) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div
          className="border p-8 text-center"
          data-testid="context-area"
        >
          Right click on this area
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={onCopy}>Copy</ContextMenuItem>
        <ContextMenuItem onClick={onCut}>Cut</ContextMenuItem>
        <ContextMenuItem onClick={onPaste}>Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem onClick={onDelete}>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

describe("Menu Integration", () => {
  describe("Dropdown Menu with actions", () => {
    it("opens menu on click", async () => {
      const user = userEvent.setup()
      const onProfile = vi.fn()
      const onSettings = vi.fn()
      const onLogout = vi.fn()

      render(
        <UserMenu
          onProfile={onProfile}
          onSettings={onSettings}
          onLogout={onLogout}
        />
      )

      await user.click(screen.getByRole("button", { name: /menu/i }))

      await waitFor(() => {
        expect(screen.getByText("My Account")).toBeInTheDocument()
        expect(screen.getByText("Profile")).toBeInTheDocument()
        expect(screen.getByText("Settings")).toBeInTheDocument()
        expect(screen.getByText("Log out")).toBeInTheDocument()
      })
    })

    it("calls profile handler on click", async () => {
      const user = userEvent.setup()
      const onProfile = vi.fn()
      const onSettings = vi.fn()
      const onLogout = vi.fn()

      render(
        <UserMenu
          onProfile={onProfile}
          onSettings={onSettings}
          onLogout={onLogout}
        />
      )

      await user.click(screen.getByRole("button", { name: /menu/i }))
      
      await waitFor(() => {
        expect(screen.getByText("Profile")).toBeInTheDocument()
      })

      await user.click(screen.getByText("Profile"))

      expect(onProfile).toHaveBeenCalled()
    })

    it("calls logout handler on click", async () => {
      const user = userEvent.setup()
      const onProfile = vi.fn()
      const onSettings = vi.fn()
      const onLogout = vi.fn()

      render(
        <UserMenu
          onProfile={onProfile}
          onSettings={onSettings}
          onLogout={onLogout}
        />
      )

      await user.click(screen.getByRole("button", { name: /menu/i }))
      
      await waitFor(() => {
        expect(screen.getByText("Log out")).toBeInTheDocument()
      })

      await user.click(screen.getByText("Log out"))

      expect(onLogout).toHaveBeenCalled()
    })
  })

  describe("Dropdown Menu with checkbox items", () => {
    it("shows initial checked state", async () => {
      const user = userEvent.setup()
      render(<SettingsMenu />)

      expect(screen.getByTestId("status")).toHaveTextContent(
        "Status Bar: visible, Panel: hidden"
      )
    })

    it("toggles checkbox item", async () => {
      const user = userEvent.setup()
      render(<SettingsMenu />)

      await user.click(screen.getByRole("button", { name: /view settings/i }))

      await waitFor(() => {
        expect(screen.getByText("Side Panel")).toBeInTheDocument()
      })

      await user.click(screen.getByRole("menuitemcheckbox", { name: /side panel/i }))

      await waitFor(() => {
        expect(screen.getByTestId("status")).toHaveTextContent(
          "Status Bar: visible, Panel: visible"
        )
      })
    })

    it("unchecks previously checked item", async () => {
      const user = userEvent.setup()
      render(<SettingsMenu />)

      await user.click(screen.getByRole("button", { name: /view settings/i }))

      await waitFor(() => {
        expect(screen.getByText("Status Bar")).toBeInTheDocument()
      })

      await user.click(screen.getByRole("menuitemcheckbox", { name: /status bar/i }))

      await waitFor(() => {
        expect(screen.getByTestId("status")).toHaveTextContent(
          "Status Bar: hidden"
        )
      })
    })
  })

  describe("Dropdown Menu with radio items", () => {
    it("shows initial selected theme", () => {
      render(<ThemeSelector />)

      expect(screen.getByTestId("current-theme")).toHaveTextContent(
        "Current theme: light"
      )
    })

    it("selects different theme", async () => {
      const user = userEvent.setup()
      render(<ThemeSelector />)

      await user.click(screen.getByRole("button", { name: /theme: light/i }))

      await waitFor(() => {
        expect(screen.getByText("Dark")).toBeInTheDocument()
      })

      await user.click(screen.getByRole("menuitemradio", { name: /dark/i }))

      await waitFor(() => {
        expect(screen.getByTestId("current-theme")).toHaveTextContent(
          "Current theme: dark"
        )
      })
    })
  })

  describe("Context Menu", () => {
    it("opens on right-click", async () => {
      const user = userEvent.setup()
      const onCopy = vi.fn()
      const onCut = vi.fn()
      const onPaste = vi.fn()
      const onDelete = vi.fn()

      render(
        <FileContextMenu
          onCopy={onCopy}
          onCut={onCut}
          onPaste={onPaste}
          onDelete={onDelete}
        />
      )

      await user.pointer([
        { target: screen.getByTestId("context-area"), keys: "[MouseRight]" },
      ])

      await waitFor(() => {
        expect(screen.getByText("Copy")).toBeInTheDocument()
        expect(screen.getByText("Cut")).toBeInTheDocument()
        expect(screen.getByText("Paste")).toBeInTheDocument()
        expect(screen.getByText("Delete")).toBeInTheDocument()
      })
    })

    it("calls action handlers", async () => {
      const user = userEvent.setup()
      const onCopy = vi.fn()
      const onCut = vi.fn()
      const onPaste = vi.fn()
      const onDelete = vi.fn()

      render(
        <FileContextMenu
          onCopy={onCopy}
          onCut={onCut}
          onPaste={onPaste}
          onDelete={onDelete}
        />
      )

      await user.pointer([
        { target: screen.getByTestId("context-area"), keys: "[MouseRight]" },
      ])

      await waitFor(() => {
        expect(screen.getByText("Copy")).toBeInTheDocument()
      })

      await user.click(screen.getByText("Copy"))

      expect(onCopy).toHaveBeenCalled()
    })
  })
})

