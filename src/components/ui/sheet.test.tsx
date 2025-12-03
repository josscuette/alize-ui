import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./sheet"

describe("Sheet", () => {
  describe("Rendering", () => {
    it("renders trigger correctly", () => {
      render(
        <Sheet>
          <SheetTrigger>Open Sheet</SheetTrigger>
          <SheetContent>Content</SheetContent>
        </Sheet>
      )

      expect(screen.getByText("Open Sheet")).toBeInTheDocument()
    })

    it("does not render content initially", () => {
      render(
        <Sheet>
          <SheetTrigger>Open Sheet</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )

      expect(screen.queryByText("Sheet Title")).not.toBeInTheDocument()
    })
  })

  describe("Interaction", () => {
    it("opens sheet on trigger click", async () => {
      const user = userEvent.setup()
      
      render(
        <Sheet>
          <SheetTrigger>Open Sheet</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>Sheet Description</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )

      await user.click(screen.getByText("Open Sheet"))

      await waitFor(() => {
        expect(screen.getByText("Sheet Description")).toBeInTheDocument()
      })
    })

    it("closes sheet on close button click", async () => {
      const user = userEvent.setup()
      
      render(
        <Sheet>
          <SheetTrigger>Open Sheet</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
            </SheetHeader>
            <p>Sheet content here</p>
          </SheetContent>
        </Sheet>
      )

      // Open the sheet
      await user.click(screen.getByText("Open Sheet"))
      
      await waitFor(() => {
        expect(screen.getByText("Sheet content here")).toBeInTheDocument()
      })

      // Close the sheet using the X button
      const closeButton = screen.getByRole("button", { name: /close/i })
      await user.click(closeButton)

      await waitFor(() => {
        expect(screen.queryByText("Sheet content here")).not.toBeInTheDocument()
      })
    })

    it("closes sheet on escape key", async () => {
      const user = userEvent.setup()
      
      render(
        <Sheet>
          <SheetTrigger>Open Sheet</SheetTrigger>
          <SheetContent>
            <p>Sheet content</p>
          </SheetContent>
        </Sheet>
      )

      await user.click(screen.getByText("Open Sheet"))
      
      await waitFor(() => {
        expect(screen.getByText("Sheet content")).toBeInTheDocument()
      })

      await user.keyboard("{Escape}")

      await waitFor(() => {
        expect(screen.queryByText("Sheet content")).not.toBeInTheDocument()
      })
    })
  })

  describe("Controlled state", () => {
    it("respects open prop", async () => {
      render(
        <Sheet open={true}>
          <SheetTrigger>Open Sheet</SheetTrigger>
          <SheetContent>
            <p>Open by default</p>
          </SheetContent>
        </Sheet>
      )

      await waitFor(() => {
        expect(screen.getByText("Open by default")).toBeInTheDocument()
      })
    })

    it("calls onOpenChange when opened", async () => {
      const onOpenChange = vi.fn()
      const user = userEvent.setup()
      
      render(
        <Sheet onOpenChange={onOpenChange}>
          <SheetTrigger>Open Sheet</SheetTrigger>
          <SheetContent>Content</SheetContent>
        </Sheet>
      )

      await user.click(screen.getByText("Open Sheet"))

      await waitFor(() => {
        expect(onOpenChange).toHaveBeenCalledWith(true)
      })
    })
  })
})

describe("SheetTrigger", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Sheet>
        <SheetTrigger data-testid="trigger">Open</SheetTrigger>
        <SheetContent>Content</SheetContent>
      </Sheet>
    )

    expect(screen.getByTestId("trigger")).toHaveAttribute(
      "data-slot",
      "sheet-trigger"
    )
  })
})

describe("SheetContent", () => {
  describe("Side positions", () => {
    it("renders on right side by default", async () => {
      const user = userEvent.setup()
      
      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent data-testid="content">Content</SheetContent>
        </Sheet>
      )

      await user.click(screen.getByText("Open"))

      await waitFor(() => {
        const content = screen.getByTestId("content")
        expect(content).toHaveClass("right-0")
      })
    })

    it("renders on left side", async () => {
      const user = userEvent.setup()
      
      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent side="left" data-testid="content">
            Content
          </SheetContent>
        </Sheet>
      )

      await user.click(screen.getByText("Open"))

      await waitFor(() => {
        const content = screen.getByTestId("content")
        expect(content).toHaveClass("left-0")
      })
    })

    it("renders on top side", async () => {
      const user = userEvent.setup()
      
      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent side="top" data-testid="content">
            Content
          </SheetContent>
        </Sheet>
      )

      await user.click(screen.getByText("Open"))

      await waitFor(() => {
        const content = screen.getByTestId("content")
        expect(content).toHaveClass("top-0")
      })
    })

    it("renders on bottom side", async () => {
      const user = userEvent.setup()
      
      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent side="bottom" data-testid="content">
            Content
          </SheetContent>
        </Sheet>
      )

      await user.click(screen.getByText("Open"))

      await waitFor(() => {
        const content = screen.getByTestId("content")
        expect(content).toHaveClass("bottom-0")
      })
    })
  })

  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent data-testid="content">Content</SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText("Open"))

    await waitFor(() => {
      expect(screen.getByTestId("content")).toHaveAttribute(
        "data-slot",
        "sheet-content"
      )
    })
  })

  it("accepts custom className", async () => {
    const user = userEvent.setup()
    
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent className="custom-class" data-testid="content">
          Content
        </SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText("Open"))

    await waitFor(() => {
      expect(screen.getByTestId("content")).toHaveClass("custom-class")
    })
  })
})

describe("SheetHeader", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader data-testid="header">
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText("Open"))

    await waitFor(() => {
      expect(screen.getByTestId("header")).toHaveAttribute(
        "data-slot",
        "sheet-header"
      )
    })
  })

  it("accepts custom className", async () => {
    const user = userEvent.setup()
    
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader className="custom-class" data-testid="header">
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText("Open"))

    await waitFor(() => {
      expect(screen.getByTestId("header")).toHaveClass("custom-class")
    })
  })
})

describe("SheetFooter", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetFooter data-testid="footer">Footer Content</SheetFooter>
        </SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText("Open"))

    await waitFor(() => {
      expect(screen.getByTestId("footer")).toHaveAttribute(
        "data-slot",
        "sheet-footer"
      )
    })
  })

  it("accepts custom className", async () => {
    const user = userEvent.setup()
    
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetFooter className="custom-class" data-testid="footer">
            Footer
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText("Open"))

    await waitFor(() => {
      expect(screen.getByTestId("footer")).toHaveClass("custom-class")
    })
  })
})

describe("SheetTitle", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle data-testid="title">Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText("Open"))

    await waitFor(() => {
      expect(screen.getByTestId("title")).toHaveAttribute(
        "data-slot",
        "sheet-title"
      )
    })
  })
})

describe("SheetDescription", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription data-testid="desc">Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText("Open"))

    await waitFor(() => {
      expect(screen.getByTestId("desc")).toHaveAttribute(
        "data-slot",
        "sheet-description"
      )
    })
  })
})

describe("SheetClose", () => {
  it("renders with data-slot attribute", async () => {
    const user = userEvent.setup()
    
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetClose data-testid="close">Close</SheetClose>
        </SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText("Open"))

    await waitFor(() => {
      expect(screen.getByTestId("close")).toHaveAttribute(
        "data-slot",
        "sheet-close"
      )
    })
  })

  it("closes sheet when clicked", async () => {
    const user = userEvent.setup()
    
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <p>Content</p>
          <SheetClose>Close Sheet</SheetClose>
        </SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText("Open"))
    
    await waitFor(() => {
      expect(screen.getByText("Content")).toBeInTheDocument()
    })

    await user.click(screen.getByText("Close Sheet"))

    await waitFor(() => {
      expect(screen.queryByText("Content")).not.toBeInTheDocument()
    })
  })
})

