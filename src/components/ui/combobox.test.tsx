import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import { Combobox } from "./combobox"

expect.extend(toHaveNoViolations)

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
]

describe("Combobox", () => {
  describe("Rendering", () => {
    it("renders combobox trigger", () => {
      render(<Combobox options={options} />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
    })

    it("renders with placeholder", () => {
      render(<Combobox options={options} placeholder="Select a fruit" />)
      expect(screen.getByText("Select a fruit")).toBeInTheDocument()
    })

    it("renders selected value", () => {
      render(<Combobox options={options} value="banana" />)
      expect(screen.getByText("Banana")).toBeInTheDocument()
    })

    it("renders with custom placeholder", () => {
      render(<Combobox options={options} placeholder="Choose fruit..." />)
      expect(screen.getByText("Choose fruit...")).toBeInTheDocument()
    })
  })

  describe("Interactions", () => {
    it("opens dropdown on click", async () => {
      const user = userEvent.setup()
      
      render(<Combobox options={options} />)
      
      await user.click(screen.getByRole("combobox"))
      
      await waitFor(() => {
        expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
      })
    })

    it("displays all options when opened", async () => {
      const user = userEvent.setup()
      
      render(<Combobox options={options} />)
      
      await user.click(screen.getByRole("combobox"))
      
      await waitFor(() => {
        expect(screen.getByText("Apple")).toBeInTheDocument()
        expect(screen.getByText("Banana")).toBeInTheDocument()
        expect(screen.getByText("Cherry")).toBeInTheDocument()
      })
    })

    it("calls onValueChange when option is selected", async () => {
      const handleValueChange = vi.fn()
      const user = userEvent.setup()
      
      render(<Combobox options={options} onValueChange={handleValueChange} />)
      
      await user.click(screen.getByRole("combobox"))
      
      await waitFor(() => {
        expect(screen.getByText("Apple")).toBeInTheDocument()
      })
      
      await user.click(screen.getByText("Apple"))
      
      expect(handleValueChange).toHaveBeenCalledWith("apple")
    })

    it("closes dropdown after selection", async () => {
      const user = userEvent.setup()
      
      render(<Combobox options={options} />)
      
      await user.click(screen.getByRole("combobox"))
      
      await waitFor(() => {
        expect(screen.getByText("Apple")).toBeInTheDocument()
      })
      
      await user.click(screen.getByText("Apple"))
      
      await waitFor(() => {
        expect(screen.queryByPlaceholderText(/search/i)).not.toBeInTheDocument()
      })
    })
  })

  describe("Search", () => {
    it("renders with custom search placeholder", async () => {
      const user = userEvent.setup()
      
      render(<Combobox options={options} searchPlaceholder="Type to search..." />)
      
      await user.click(screen.getByRole("combobox"))
      
      await waitFor(() => {
        expect(screen.getByPlaceholderText("Type to search...")).toBeInTheDocument()
      })
    })
  })

  describe("Empty state", () => {
    it("renders with custom empty text", async () => {
      const user = userEvent.setup()
      
      render(<Combobox options={[]} emptyText="No fruits available" />)
      
      await user.click(screen.getByRole("combobox"))
      
      await waitFor(() => {
        expect(screen.getByText("No fruits available")).toBeInTheDocument()
      })
    })
  })

  describe("Disabled state", () => {
    it("renders disabled state", () => {
      render(<Combobox options={options} disabled />)
      expect(screen.getByRole("combobox")).toBeDisabled()
    })

    it("cannot be opened when disabled", async () => {
      const user = userEvent.setup()
      
      render(<Combobox options={options} disabled />)
      
      await user.click(screen.getByRole("combobox"))
      
      expect(screen.queryByPlaceholderText(/search/i)).not.toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies custom className", () => {
      render(<Combobox options={options} className="custom-class" />)
      expect(screen.getByRole("combobox")).toHaveClass("custom-class")
    })
  })

  describe("Accessibility", () => {
    it("has combobox role", () => {
      render(<Combobox options={options} />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
    })

    it("renders with accessible name", () => {
      render(<Combobox options={options} placeholder="Select fruit" />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
    })
  })

  describe("Controlled value", () => {
    it("displays controlled value", () => {
      render(<Combobox options={options} value="cherry" />)
      expect(screen.getByText("Cherry")).toBeInTheDocument()
    })

    it("supports controlled value updates", () => {
      const { rerender } = render(<Combobox options={options} value="apple" />)
      expect(screen.getByText("Apple")).toBeInTheDocument()
      
      rerender(<Combobox options={options} value="banana" />)
      expect(screen.getByText("Banana")).toBeInTheDocument()
    })
  })
})

