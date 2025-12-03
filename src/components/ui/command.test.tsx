import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "./command"

describe("Command", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(
        <Command data-testid="command">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandItem>Item 1</CommandItem>
          </CommandList>
        </Command>
      )

      expect(screen.getByTestId("command")).toBeInTheDocument()
      expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(
        <Command data-testid="command">
          <CommandInput placeholder="Search..." />
        </Command>
      )

      expect(screen.getByTestId("command")).toHaveAttribute("data-slot", "command")
    })
  })

  describe("Props", () => {
    it("accepts custom className", () => {
      render(
        <Command className="custom-class" data-testid="command">
          <CommandInput placeholder="Search..." />
        </Command>
      )

      expect(screen.getByTestId("command")).toHaveClass("custom-class")
    })
  })
})

describe("CommandInput", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." data-testid="input" />
      </Command>
    )

    expect(screen.getByTestId("input")).toHaveAttribute(
      "data-slot",
      "command-input"
    )
  })

  it("renders with placeholder", () => {
    render(
      <Command>
        <CommandInput placeholder="Type a command..." />
      </Command>
    )

    expect(screen.getByPlaceholderText("Type a command...")).toBeInTheDocument()
  })

  it("accepts user input", async () => {
    const user = userEvent.setup()
    
    render(
      <Command>
        <CommandInput placeholder="Search..." data-testid="input" />
      </Command>
    )

    const input = screen.getByTestId("input")
    await user.type(input, "test query")
    
    expect(input).toHaveValue("test query")
  })

  it("accepts custom className", () => {
    render(
      <Command>
        <CommandInput className="custom-class" placeholder="Search..." data-testid="input" />
      </Command>
    )

    expect(screen.getByTestId("input")).toHaveClass("custom-class")
  })
})

describe("CommandList", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Command>
        <CommandList data-testid="list">
          <CommandItem>Item</CommandItem>
        </CommandList>
      </Command>
    )

    expect(screen.getByTestId("list")).toHaveAttribute(
      "data-slot",
      "command-list"
    )
  })

  it("renders children", () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>Item 1</CommandItem>
          <CommandItem>Item 2</CommandItem>
        </CommandList>
      </Command>
    )

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  it("accepts custom className", () => {
    render(
      <Command>
        <CommandList className="custom-class" data-testid="list">
          <CommandItem>Item</CommandItem>
        </CommandList>
      </Command>
    )

    expect(screen.getByTestId("list")).toHaveClass("custom-class")
  })
})

describe("CommandEmpty", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Command>
        <CommandList>
          <CommandEmpty data-testid="empty">No results found</CommandEmpty>
        </CommandList>
      </Command>
    )

    expect(screen.getByTestId("empty")).toHaveAttribute(
      "data-slot",
      "command-empty"
    )
  })

  it("renders empty message", () => {
    render(
      <Command>
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
        </CommandList>
      </Command>
    )

    expect(screen.getByText("No results found")).toBeInTheDocument()
  })
})

describe("CommandGroup", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup heading="Suggestions" data-testid="group">
            <CommandItem>Item</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )

    expect(screen.getByTestId("group")).toHaveAttribute(
      "data-slot",
      "command-group"
    )
  })

  it("renders heading", () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup heading="Suggestions">
            <CommandItem>Item</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )

    expect(screen.getByText("Suggestions")).toBeInTheDocument()
  })

  it("accepts custom className", () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup className="custom-class" data-testid="group">
            <CommandItem>Item</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )

    expect(screen.getByTestId("group")).toHaveClass("custom-class")
  })
})

describe("CommandItem", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Command>
        <CommandList>
          <CommandItem data-testid="item">Item</CommandItem>
        </CommandList>
      </Command>
    )

    expect(screen.getByTestId("item")).toHaveAttribute(
      "data-slot",
      "command-item"
    )
  })

  it("renders content", () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>Click me</CommandItem>
        </CommandList>
      </Command>
    )

    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("accepts custom className", () => {
    render(
      <Command>
        <CommandList>
          <CommandItem className="custom-class" data-testid="item">
            Item
          </CommandItem>
        </CommandList>
      </Command>
    )

    expect(screen.getByTestId("item")).toHaveClass("custom-class")
  })
})

describe("CommandSeparator", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>Item 1</CommandItem>
          <CommandSeparator data-testid="separator" />
          <CommandItem>Item 2</CommandItem>
        </CommandList>
      </Command>
    )

    expect(screen.getByTestId("separator")).toHaveAttribute(
      "data-slot",
      "command-separator"
    )
  })
})

describe("CommandShortcut", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>
            Save <CommandShortcut data-testid="shortcut">⌘S</CommandShortcut>
          </CommandItem>
        </CommandList>
      </Command>
    )

    expect(screen.getByTestId("shortcut")).toHaveAttribute(
      "data-slot",
      "command-shortcut"
    )
  })

  it("renders shortcut text", () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>
            Save <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandList>
      </Command>
    )

    expect(screen.getByText("⌘S")).toBeInTheDocument()
  })
})

describe("Full command example", () => {
  it("renders complete command structure", () => {
    render(
      <Command>
        <CommandInput placeholder="Search commands..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              Profile <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )

    expect(screen.getByPlaceholderText("Search commands...")).toBeInTheDocument()
    expect(screen.getByText("Suggestions")).toBeInTheDocument()
    expect(screen.getByText("Calendar")).toBeInTheDocument()
    expect(screen.getByText("Settings")).toBeInTheDocument()
    expect(screen.getByText("⌘P")).toBeInTheDocument()
  })
})

