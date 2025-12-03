/**
 * Integration tests for Combobox component
 * Tests search, selection, and form integration
 */
import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Combobox } from "@/components/ui/combobox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"

// Test data
const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue.js" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "next", label: "Next.js" },
  { value: "nuxt", label: "Nuxt" },
]

// Test component: Basic Combobox
function BasicCombobox({ onSelect }: { onSelect: (value: string) => void }) {
  const [value, setValue] = React.useState("")

  return (
    <div>
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={(val) => {
          setValue(val)
          onSelect(val)
        }}
        placeholder="Select framework..."
        searchPlaceholder="Search frameworks..."
        emptyText="No framework found."
      />
      <div data-testid="selected-value">Selected: {value || "none"}</div>
    </div>
  )
}

// Test component: Combobox in Form
const formSchema = z.object({
  framework: z.string().min(1, "Please select a framework"),
})

function ComboboxForm({ onSubmit }: { onSubmit: (data: { framework: string }) => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      framework: "",
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="framework"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Framework</FormLabel>
              <FormControl>
                <Combobox
                  options={frameworks}
                  value={field.value}
                  onValueChange={field.onChange}
                  placeholder="Select framework..."
                  searchPlaceholder="Search frameworks..."
                  emptyText="No framework found."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

describe("Combobox Integration", () => {
  describe("Basic Combobox", () => {
    it("renders with placeholder", () => {
      const onSelect = vi.fn()
      render(<BasicCombobox onSelect={onSelect} />)

      expect(screen.getByRole("combobox")).toBeInTheDocument()
      expect(screen.getByText("Select framework...")).toBeInTheDocument()
    })

    it("opens popover on click", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicCombobox onSelect={onSelect} />)

      await user.click(screen.getByRole("combobox"))

      await waitFor(() => {
        expect(screen.getByPlaceholderText("Search frameworks...")).toBeInTheDocument()
      })
    })

    it("shows all items when opened", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicCombobox onSelect={onSelect} />)

      await user.click(screen.getByRole("combobox"))

      await waitFor(() => {
        expect(screen.getByText("React")).toBeInTheDocument()
        expect(screen.getByText("Vue.js")).toBeInTheDocument()
        expect(screen.getByText("Angular")).toBeInTheDocument()
        expect(screen.getByText("Svelte")).toBeInTheDocument()
      })
    })

    it("selects item on click", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicCombobox onSelect={onSelect} />)

      await user.click(screen.getByRole("combobox"))

      await waitFor(() => {
        expect(screen.getByText("React")).toBeInTheDocument()
      })

      await user.click(screen.getByText("React"))

      await waitFor(() => {
        expect(screen.getByTestId("selected-value")).toHaveTextContent(
          "Selected: react"
        )
        expect(onSelect).toHaveBeenCalledWith("react")
      })
    })

    it("filters items based on search", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicCombobox onSelect={onSelect} />)

      await user.click(screen.getByRole("combobox"))

      await waitFor(() => {
        expect(screen.getByPlaceholderText("Search frameworks...")).toBeInTheDocument()
      })

      await user.type(
        screen.getByPlaceholderText("Search frameworks..."),
        "vue"
      )

      await waitFor(() => {
        expect(screen.getByText("Vue.js")).toBeInTheDocument()
        expect(screen.queryByText("React")).not.toBeInTheDocument()
        expect(screen.queryByText("Angular")).not.toBeInTheDocument()
      })
    })

    it("shows empty message when no matches", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicCombobox onSelect={onSelect} />)

      await user.click(screen.getByRole("combobox"))

      await waitFor(() => {
        expect(screen.getByPlaceholderText("Search frameworks...")).toBeInTheDocument()
      })

      await user.type(
        screen.getByPlaceholderText("Search frameworks..."),
        "nonexistent"
      )

      await waitFor(() => {
        expect(screen.getByText("No framework found.")).toBeInTheDocument()
      })
    })

    it("clears search on selection", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicCombobox onSelect={onSelect} />)

      await user.click(screen.getByRole("combobox"))

      await waitFor(() => {
        expect(screen.getByPlaceholderText("Search frameworks...")).toBeInTheDocument()
      })

      await user.type(
        screen.getByPlaceholderText("Search frameworks..."),
        "react"
      )
      await user.click(screen.getByText("React"))

      // Reopen to verify search is cleared
      await user.click(screen.getByRole("combobox"))

      await waitFor(() => {
        const searchInput = screen.getByPlaceholderText("Search frameworks...")
        expect(searchInput).toHaveValue("")
      })
    })
  })

  describe("Combobox in Form", () => {
    it("validates required selection", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<ComboboxForm onSubmit={onSubmit} />)

      await user.click(screen.getByRole("button", { name: /submit/i }))

      await waitFor(() => {
        expect(screen.getByText("Please select a framework")).toBeInTheDocument()
      })

      expect(onSubmit).not.toHaveBeenCalled()
    })

    it("submits form with selected value", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<ComboboxForm onSubmit={onSubmit} />)

      await user.click(screen.getByRole("combobox"))

      await waitFor(() => {
        expect(screen.getByText("React")).toBeInTheDocument()
      })

      await user.click(screen.getByText("React"))
      await user.click(screen.getByRole("button", { name: /submit/i }))

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({ framework: "react" }),
          expect.anything()
        )
      })
    })

    it("shows selected value in button", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<ComboboxForm onSubmit={onSubmit} />)

      await user.click(screen.getByRole("combobox"))

      await waitFor(() => {
        expect(screen.getByText("React")).toBeInTheDocument()
      })

      await user.click(screen.getByText("React"))

      await waitFor(() => {
        expect(screen.getByRole("combobox")).toHaveTextContent("React")
      })
    })

    it("clears validation error on selection", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<ComboboxForm onSubmit={onSubmit} />)

      // Trigger validation error
      await user.click(screen.getByRole("button", { name: /submit/i }))

      await waitFor(() => {
        expect(screen.getByText("Please select a framework")).toBeInTheDocument()
      })

      // Select an item
      await user.click(screen.getByRole("combobox"))

      await waitFor(() => {
        expect(screen.getByText("Vue.js")).toBeInTheDocument()
      })

      await user.click(screen.getByText("Vue.js"))

      // Error should be cleared
      await waitFor(() => {
        expect(
          screen.queryByText("Please select a framework")
        ).not.toBeInTheDocument()
      })
    })
  })

  describe("Combobox accessibility", () => {
    it("has proper ARIA attributes", async () => {
      const onSelect = vi.fn()
      render(<BasicCombobox onSelect={onSelect} />)

      const combobox = screen.getByRole("combobox")
      expect(combobox).toHaveAttribute("aria-expanded", "false")
    })

    it("updates aria-expanded when opened", async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<BasicCombobox onSelect={onSelect} />)

      const combobox = screen.getByRole("combobox")
      await user.click(combobox)

      await waitFor(() => {
        expect(combobox).toHaveAttribute("aria-expanded", "true")
      })
    })
  })
})
