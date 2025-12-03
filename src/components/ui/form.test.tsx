import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@/lib/test-utils"
import userEvent from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import { useForm } from "react-hook-form"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./form"
import { Input } from "./input"

expect.extend(toHaveNoViolations)

// Helper component for testing Form with react-hook-form
function TestForm({ 
  onSubmit = vi.fn(),
  defaultValues = { email: "" },
  children,
}: {
  onSubmit?: (data: unknown) => void
  defaultValues?: Record<string, unknown>
  children?: React.ReactNode
}) {
  const form = useForm({ defaultValues })
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {children || (
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormDescription>Your email address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <button type="submit">Submit</button>
      </form>
    </Form>
  )
}

describe("Form", () => {
  describe("Rendering", () => {
    it("renders form with all components", () => {
      render(<TestForm />)
      
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      expect(screen.getByText("Your email address")).toBeInTheDocument()
      expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument()
    })

    it("renders FormLabel", () => {
      render(<TestForm />)
      expect(screen.getByText("Email")).toBeInTheDocument()
    })

    it("renders FormDescription", () => {
      render(<TestForm />)
      expect(screen.getByText("Your email address")).toBeInTheDocument()
    })

    it("renders input with placeholder", () => {
      render(<TestForm />)
      expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument()
    })
  })

  describe("Form submission", () => {
    it("calls onSubmit with form data", async () => {
      const handleSubmit = vi.fn()
      const user = userEvent.setup()
      
      render(<TestForm onSubmit={handleSubmit} />)
      
      await user.type(screen.getByLabelText(/email/i), "test@example.com")
      await user.click(screen.getByRole("button", { name: /submit/i }))
      
      await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledWith(
          expect.objectContaining({ email: "test@example.com" }),
          expect.anything()
        )
      })
    })

    it("updates input value", async () => {
      const user = userEvent.setup()
      
      render(<TestForm />)
      
      const input = screen.getByLabelText(/email/i)
      await user.type(input, "hello@world.com")
      
      expect(input).toHaveValue("hello@world.com")
    })
  })

  describe("Validation", () => {
    function TestFormWithValidation() {
      const form = useForm({
        defaultValues: { email: "" },
        mode: "onBlur",
      })
      
      return (
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button type="submit">Submit</button>
          </form>
        </Form>
      )
    }

    it("shows validation error for required field", async () => {
      const user = userEvent.setup()
      
      render(<TestFormWithValidation />)
      
      const input = screen.getByLabelText(/email/i)
      await user.click(input)
      await user.tab() // Blur the input
      
      await waitFor(() => {
        expect(screen.getByText("Email is required")).toBeInTheDocument()
      })
    })

    it("shows validation error for invalid format", async () => {
      const user = userEvent.setup()
      
      render(<TestFormWithValidation />)
      
      const input = screen.getByLabelText(/email/i)
      await user.type(input, "invalid-email")
      await user.tab()
      
      await waitFor(() => {
        expect(screen.getByText("Invalid email format")).toBeInTheDocument()
      })
    })

    it("clears error when valid input is provided", async () => {
      const user = userEvent.setup()
      
      render(<TestFormWithValidation />)
      
      const input = screen.getByLabelText(/email/i)
      await user.type(input, "invalid")
      await user.tab()
      
      await waitFor(() => {
        expect(screen.getByText("Invalid email format")).toBeInTheDocument()
      })
      
      await user.clear(input)
      await user.type(input, "valid@email.com")
      await user.tab()
      
      await waitFor(() => {
        expect(screen.queryByText("Invalid email format")).not.toBeInTheDocument()
      })
    })
  })

  describe("Data slots", () => {
    it("has data-slot on FormItem", () => {
      render(<TestForm />)
      const formItem = screen.getByText("Email").closest('[data-slot="form-item"]')
      expect(formItem).toBeInTheDocument()
    })

    it("has data-slot on FormLabel", () => {
      render(<TestForm />)
      const label = screen.getByText("Email")
      expect(label).toHaveAttribute("data-slot", "form-label")
    })

    it("has data-slot on FormDescription", () => {
      render(<TestForm />)
      const description = screen.getByText("Your email address")
      expect(description).toHaveAttribute("data-slot", "form-description")
    })
  })

  describe("Error state", () => {
    function TestFormWithError() {
      const form = useForm({
        defaultValues: { email: "" },
      })
      
      // Manually set an error
      form.setError("email", { type: "manual", message: "Custom error message" })
      
      return (
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      )
    }

    it("displays FormMessage with error", () => {
      render(<TestFormWithError />)
      expect(screen.getByText("Custom error message")).toBeInTheDocument()
    })

    it("applies error styling to label", () => {
      render(<TestFormWithError />)
      const label = screen.getByText("Email")
      expect(label).toHaveAttribute("data-error", "true")
    })

    it("applies aria-invalid to input", () => {
      render(<TestFormWithError />)
      const input = screen.getByRole("textbox")
      expect(input).toHaveAttribute("aria-invalid", "true")
    })
  })

  describe("Styling", () => {
    it("applies custom className to FormItem", () => {
      function TestFormWithClassName() {
        const form = useForm({ defaultValues: { email: "" } })
        
        return (
          <Form {...form}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="custom-form-item" data-testid="form-item">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        )
      }
      
      render(<TestFormWithClassName />)
      expect(screen.getByTestId("form-item")).toHaveClass("custom-form-item")
    })

    it("applies custom className to FormLabel", () => {
      function TestFormWithClassName() {
        const form = useForm({ defaultValues: { email: "" } })
        
        return (
          <Form {...form}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="custom-label">Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        )
      }
      
      render(<TestFormWithClassName />)
      expect(screen.getByText("Email")).toHaveClass("custom-label")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations", async () => {
      const { container } = render(<TestForm />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("associates label with input", () => {
      render(<TestForm />)
      const input = screen.getByLabelText(/email/i)
      expect(input).toBeInTheDocument()
    })

    it("associates description with input via aria-describedby", () => {
      render(<TestForm />)
      const input = screen.getByRole("textbox")
      const describedBy = input.getAttribute("aria-describedby")
      expect(describedBy).toBeTruthy()
    })

    it("has no accessibility violations with error state", async () => {
      function TestFormWithError() {
        const form = useForm({ defaultValues: { email: "" } })
        form.setError("email", { type: "manual", message: "Error" })
        
        return (
          <Form {...form}>
            <form>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        )
      }
      
      const { container } = render(<TestFormWithError />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Multiple fields", () => {
    function MultiFieldForm() {
      const form = useForm({
        defaultValues: { 
          firstName: "",
          lastName: "",
        },
      })
      
      return (
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      )
    }

    it("renders multiple form fields", () => {
      render(<MultiFieldForm />)
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    })

    it("handles multiple field inputs", async () => {
      const user = userEvent.setup()
      
      render(<MultiFieldForm />)
      
      await user.type(screen.getByLabelText(/first name/i), "John")
      await user.type(screen.getByLabelText(/last name/i), "Doe")
      
      expect(screen.getByLabelText(/first name/i)).toHaveValue("John")
      expect(screen.getByLabelText(/last name/i)).toHaveValue("Doe")
    })
  })
})

