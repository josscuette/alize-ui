import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "./drawer"

describe("Drawer", () => {
  describe("Rendering", () => {
    it("renders trigger correctly", () => {
      render(
        <Drawer>
          <DrawerTrigger>Open Drawer</DrawerTrigger>
          <DrawerContent>Content</DrawerContent>
        </Drawer>
      )

      expect(screen.getByText("Open Drawer")).toBeInTheDocument()
    })

    it("does not render content initially", () => {
      render(
        <Drawer>
          <DrawerTrigger>Open Drawer</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      )

      expect(screen.queryByText("Drawer Title")).not.toBeInTheDocument()
    })
  })

  describe("Interaction", () => {
    it("opens drawer on trigger click", async () => {
      const user = userEvent.setup()
      
      render(
        <Drawer>
          <DrawerTrigger>Open Drawer</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
              <DrawerDescription>Drawer Description</DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      )

      await user.click(screen.getByText("Open Drawer"))

      await waitFor(() => {
        expect(screen.getByText("Drawer Title")).toBeInTheDocument()
        expect(screen.getByText("Drawer Description")).toBeInTheDocument()
      })
    })
  })

  describe("Controlled state", () => {
    it("respects open prop", async () => {
      render(
        <Drawer open={true}>
          <DrawerTrigger>Open Drawer</DrawerTrigger>
          <DrawerContent>
            <p>Open by default</p>
          </DrawerContent>
        </Drawer>
      )

      await waitFor(() => {
        expect(screen.getByText("Open by default")).toBeInTheDocument()
      })
    })

    it("calls onOpenChange when opened", async () => {
      const onOpenChange = vi.fn()
      const user = userEvent.setup()
      
      render(
        <Drawer onOpenChange={onOpenChange}>
          <DrawerTrigger>Open Drawer</DrawerTrigger>
          <DrawerContent>Content</DrawerContent>
        </Drawer>
      )

      await user.click(screen.getByText("Open Drawer"))

      await waitFor(() => {
        expect(onOpenChange).toHaveBeenCalledWith(true)
      })
    })
  })
})

describe("DrawerTrigger", () => {
  it("renders with data-slot attribute", () => {
    render(
      <Drawer>
        <DrawerTrigger data-testid="trigger">Open</DrawerTrigger>
        <DrawerContent>Content</DrawerContent>
      </Drawer>
    )

    expect(screen.getByTestId("trigger")).toHaveAttribute(
      "data-slot",
      "drawer-trigger"
    )
  })
})

describe("DrawerContent", () => {
  it("renders with data-slot attribute when open", async () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent data-testid="content">Content</DrawerContent>
      </Drawer>
    )

    await waitFor(() => {
      expect(screen.getByTestId("content")).toHaveAttribute(
        "data-slot",
        "drawer-content"
      )
    })
  })

  it("accepts custom className", async () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent className="custom-class" data-testid="content">
          Content
        </DrawerContent>
      </Drawer>
    )

    await waitFor(() => {
      expect(screen.getByTestId("content")).toHaveClass("custom-class")
    })
  })
})

describe("DrawerHeader", () => {
  it("renders with data-slot attribute", async () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader data-testid="header">
            <DrawerTitle>Title</DrawerTitle>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    )

    await waitFor(() => {
      expect(screen.getByTestId("header")).toHaveAttribute(
        "data-slot",
        "drawer-header"
      )
    })
  })

  it("accepts custom className", async () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="custom-class" data-testid="header">
            <DrawerTitle>Title</DrawerTitle>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    )

    await waitFor(() => {
      expect(screen.getByTestId("header")).toHaveClass("custom-class")
    })
  })
})

describe("DrawerFooter", () => {
  it("renders with data-slot attribute", async () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerFooter data-testid="footer">Footer Content</DrawerFooter>
        </DrawerContent>
      </Drawer>
    )

    await waitFor(() => {
      expect(screen.getByTestId("footer")).toHaveAttribute(
        "data-slot",
        "drawer-footer"
      )
    })
  })

  it("accepts custom className", async () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerFooter className="custom-class" data-testid="footer">
            Footer
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )

    await waitFor(() => {
      expect(screen.getByTestId("footer")).toHaveClass("custom-class")
    })
  })
})

describe("DrawerTitle", () => {
  it("renders with data-slot attribute", async () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle data-testid="title">Title</DrawerTitle>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    )

    await waitFor(() => {
      expect(screen.getByTestId("title")).toHaveAttribute(
        "data-slot",
        "drawer-title"
      )
    })
  })

  it("accepts custom className", async () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="custom-class" data-testid="title">
              Title
            </DrawerTitle>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    )

    await waitFor(() => {
      expect(screen.getByTestId("title")).toHaveClass("custom-class")
    })
  })
})

describe("DrawerDescription", () => {
  it("renders with data-slot attribute", async () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Title</DrawerTitle>
            <DrawerDescription data-testid="desc">Description</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    )

    await waitFor(() => {
      expect(screen.getByTestId("desc")).toHaveAttribute(
        "data-slot",
        "drawer-description"
      )
    })
  })

  it("accepts custom className", async () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Title</DrawerTitle>
            <DrawerDescription className="custom-class" data-testid="desc">
              Description
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    )

    await waitFor(() => {
      expect(screen.getByTestId("desc")).toHaveClass("custom-class")
    })
  })
})

describe("DrawerClose", () => {
  it("renders with data-slot attribute", async () => {
    render(
      <Drawer open={true}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerClose data-testid="close">Close</DrawerClose>
        </DrawerContent>
      </Drawer>
    )

    await waitFor(() => {
      expect(screen.getByTestId("close")).toHaveAttribute(
        "data-slot",
        "drawer-close"
      )
    })
  })

  // Note: The vaul library's Drawer component requires browser APIs 
  // (setPointerCapture) that are not available in jsdom.
  // Close interaction tests are skipped in this environment.
  // Integration tests should cover this behavior.
})

