import { vi } from "vitest"
import { render, screen, fireEvent } from "@/lib/test-utils"
import { Switch, SwitchCard } from "./switch"
import { axe, toHaveNoViolations } from "jest-axe"

expect.extend(toHaveNoViolations)

describe("Switch", () => {
  it("renders switch", () => {
    render(<Switch aria-label="Toggle switch" />)
    expect(screen.getByRole("switch", { name: "Toggle switch" })).toBeInTheDocument()
  })

  it("renders unchecked by default", () => {
    render(<Switch aria-label="Toggle switch" />)
    const switchElement = screen.getByRole("switch", { name: "Toggle switch" })
    expect(switchElement).toHaveAttribute("aria-checked", "false")
  })

  it("renders checked when defaultChecked is true", () => {
    render(<Switch defaultChecked aria-label="Toggle switch" />)
    const switchElement = screen.getByRole("switch", { name: "Toggle switch" })
    expect(switchElement).toHaveAttribute("aria-checked", "true")
  })

  it("toggles when clicked", () => {
    render(<Switch aria-label="Toggle switch" />)
    const switchElement = screen.getByRole("switch", { name: "Toggle switch" })
    
    expect(switchElement).toHaveAttribute("aria-checked", "false")
    fireEvent.click(switchElement)
    expect(switchElement).toHaveAttribute("aria-checked", "true")
    fireEvent.click(switchElement)
    expect(switchElement).toHaveAttribute("aria-checked", "false")
  })

  it("applies disabled state", () => {
    render(<Switch disabled aria-label="Toggle switch" />)
    const switchElement = screen.getByRole("switch", { name: "Toggle switch" })
    expect(switchElement).toBeDisabled()
  })

  it("does not toggle when disabled", () => {
    render(<Switch disabled aria-label="Toggle switch" />)
    const switchElement = screen.getByRole("switch", { name: "Toggle switch" })
    
    expect(switchElement).toHaveAttribute("aria-checked", "false")
    fireEvent.click(switchElement)
    expect(switchElement).toHaveAttribute("aria-checked", "false")
  })

  it("calls onCheckedChange when toggled", () => {
    const handleChange = vi.fn()
    render(<Switch onCheckedChange={handleChange} aria-label="Toggle switch" />)
    const switchElement = screen.getByRole("switch", { name: "Toggle switch" })
    
    fireEvent.click(switchElement)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it("applies custom className", () => {
    render(<Switch className="custom-class" aria-label="Toggle switch" />)
    const switchElement = screen.getByRole("switch", { name: "Toggle switch" })
    expect(switchElement).toHaveClass("custom-class")
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(<Switch aria-label="Toggle switch" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations when disabled", async () => {
      const { container } = render(<Switch disabled aria-label="Toggle switch" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations when checked", async () => {
      const { container } = render(<Switch defaultChecked aria-label="Toggle switch" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})

describe("SwitchCard", () => {
  it("renders switch card with label", () => {
    render(<SwitchCard label="Enable notifications" aria-label="Toggle notifications" />)
    expect(screen.getByText("Enable notifications")).toBeInTheDocument()
    expect(screen.getByRole("switch", { name: "Toggle notifications" })).toBeInTheDocument()
  })

  it("renders switch card with description", () => {
    render(
      <SwitchCard
        label="Enable notifications"
        description="Receive alerts for new messages"
        aria-label="Toggle notifications"
      />
    )
    expect(screen.getByText("Enable notifications")).toBeInTheDocument()
    expect(screen.getByText("Receive alerts for new messages")).toBeInTheDocument()
  })

  it("toggles switch when label is clicked", () => {
    render(<SwitchCard label="Enable notifications" aria-label="Toggle notifications" />)
    const switchElement = screen.getByRole("switch", { name: "Toggle notifications" })
    const label = screen.getByText("Enable notifications")
    
    expect(switchElement).toHaveAttribute("aria-checked", "false")
    fireEvent.click(label)
    expect(switchElement).toHaveAttribute("aria-checked", "true")
  })

  it("applies disabled state", () => {
    render(<SwitchCard label="Enable notifications" disabled aria-label="Toggle notifications" />)
    const switchElement = screen.getByRole("switch", { name: "Toggle notifications" })
    expect(switchElement).toBeDisabled()
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(
        <SwitchCard label="Enable notifications" aria-label="Toggle notifications" />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations with description", async () => {
      const { container } = render(
        <SwitchCard
          label="Enable notifications"
          description="Receive alerts"
          aria-label="Toggle notifications"
        />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})

