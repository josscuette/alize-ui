import { describe, it, expect } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./navigation-menu"

describe("NavigationMenu", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(
        <NavigationMenu data-testid="nav-menu">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Home</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )

      expect(screen.getByTestId("nav-menu")).toBeInTheDocument()
      expect(screen.getByText("Home")).toBeInTheDocument()
    })

    it("renders with data-slot attribute", () => {
      render(
        <NavigationMenu data-testid="nav-menu">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Home</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )

      expect(screen.getByTestId("nav-menu")).toHaveAttribute(
        "data-slot",
        "navigation-menu"
      )
    })
  })

  describe("Viewport", () => {
    it("renders viewport by default", () => {
      render(
        <NavigationMenu data-testid="nav-menu">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Home</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )

      expect(screen.getByTestId("nav-menu")).toHaveAttribute(
        "data-viewport",
        "true"
      )
    })

    it("can disable viewport", () => {
      render(
        <NavigationMenu viewport={false} data-testid="nav-menu">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Home</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )

      expect(screen.getByTestId("nav-menu")).toHaveAttribute(
        "data-viewport",
        "false"
      )
    })
  })

  describe("Props", () => {
    it("accepts custom className", () => {
      render(
        <NavigationMenu className="custom-class" data-testid="nav-menu">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Home</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )

      expect(screen.getByTestId("nav-menu")).toHaveClass("custom-class")
    })
  })
})

describe("NavigationMenuList", () => {
  it("renders with data-slot attribute", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList data-testid="list">
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Item</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByTestId("list")).toHaveAttribute(
      "data-slot",
      "navigation-menu-list"
    )
  })

  it("accepts custom className", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList className="custom-class" data-testid="list">
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Item</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByTestId("list")).toHaveClass("custom-class")
  })
})

describe("NavigationMenuItem", () => {
  it("renders with data-slot attribute", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem data-testid="item">
            <NavigationMenuLink href="#">Item</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByTestId("item")).toHaveAttribute(
      "data-slot",
      "navigation-menu-item"
    )
  })

  it("accepts custom className", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="custom-class" data-testid="item">
            <NavigationMenuLink href="#">Item</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByTestId("item")).toHaveClass("custom-class")
  })
})

describe("NavigationMenuTrigger", () => {
  it("renders with data-slot attribute", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger data-testid="trigger">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>Content</NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByTestId("trigger")).toHaveAttribute(
      "data-slot",
      "navigation-menu-trigger"
    )
  })

  it("renders as button", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger data-testid="trigger">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>Content</NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByTestId("trigger").tagName).toBe("BUTTON")
  })

  it("opens content on hover", async () => {
    const user = userEvent.setup()
    
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div>Product Content</div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    await user.hover(screen.getByText("Products"))

    await waitFor(() => {
      expect(screen.getByText("Product Content")).toBeVisible()
    })
  })

  it("accepts custom className", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="custom-class" data-testid="trigger">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>Content</NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByTestId("trigger")).toHaveClass("custom-class")
  })
})

describe("NavigationMenuContent", () => {
  it("renders with data-slot attribute when visible", async () => {
    const user = userEvent.setup()
    
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent data-testid="content">
              <div>Content</div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    await user.hover(screen.getByText("Products"))

    await waitFor(() => {
      expect(screen.getByTestId("content")).toHaveAttribute(
        "data-slot",
        "navigation-menu-content"
      )
    })
  })

  it("accepts custom className", async () => {
    const user = userEvent.setup()
    
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent className="custom-class" data-testid="content">
              <div>Content</div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    await user.hover(screen.getByText("Products"))

    await waitFor(() => {
      expect(screen.getByTestId("content")).toHaveClass("custom-class")
    })
  })
})

describe("NavigationMenuLink", () => {
  it("renders with data-slot attribute", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" data-testid="link">
              Link
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByTestId("link")).toHaveAttribute(
      "data-slot",
      "navigation-menu-link"
    )
  })

  it("renders as anchor", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about" data-testid="link">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByTestId("link").tagName).toBe("A")
    expect(screen.getByTestId("link")).toHaveAttribute("href", "/about")
  })

  it("accepts custom className", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="custom-class" data-testid="link">
              Link
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByTestId("link")).toHaveClass("custom-class")
  })
})

describe("Full navigation example", () => {
  it("renders complete navigation menu structure", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/products/a">Product A</NavigationMenuLink>
              <NavigationMenuLink href="/products/b">Product B</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("Products")).toBeInTheDocument()
    expect(screen.getByText("About")).toBeInTheDocument()
  })
})

