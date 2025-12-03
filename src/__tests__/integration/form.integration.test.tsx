/**
 * Integration tests for Form with various input components
 * Tests form validation, submission, and error handling across components
 */
import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

// Test form schema
const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
  notifications: z.boolean().default(false),
})

type FormValues = z.infer<typeof formSchema>

// Test form component
function TestContactForm({
  onSubmit,
}: {
  onSubmit: (data: FormValues) => void
}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
      acceptTerms: false,
      notifications: false,
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} data-testid="contact-form">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Accept terms and conditions</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notifications"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel>Enable notifications</FormLabel>
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

describe("Form Integration", () => {
  describe("Form with Input components", () => {
    it("accepts user input in text fields", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()

      render(<TestContactForm onSubmit={onSubmit} />)

      await user.type(screen.getByPlaceholderText("Enter username"), "johndoe")
      await user.type(
        screen.getByPlaceholderText("Enter email"),
        "john@example.com"
      )

      expect(screen.getByPlaceholderText("Enter username")).toHaveValue(
        "johndoe"
      )
      expect(screen.getByPlaceholderText("Enter email")).toHaveValue(
        "john@example.com"
      )
    })

    it("accepts user input in textarea", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()

      render(<TestContactForm onSubmit={onSubmit} />)

      await user.type(
        screen.getByPlaceholderText("Enter your message"),
        "This is a test message"
      )

      expect(screen.getByPlaceholderText("Enter your message")).toHaveValue(
        "This is a test message"
      )
    })
  })

  describe("Form validation", () => {
    it("shows validation errors on submit with empty fields", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()

      render(<TestContactForm onSubmit={onSubmit} />)

      await user.click(screen.getByRole("button", { name: /submit/i }))

      await waitFor(() => {
        expect(
          screen.getByText("Username must be at least 2 characters")
        ).toBeInTheDocument()
      })

      expect(onSubmit).not.toHaveBeenCalled()
    })

    it("validates email format correctly", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()

      render(<TestContactForm onSubmit={onSubmit} />)

      // Fill all required fields
      await user.type(screen.getByPlaceholderText("Enter username"), "johndoe")
      await user.type(screen.getByPlaceholderText("Enter email"), "john@example.com")
      await user.type(
        screen.getByPlaceholderText("Enter your message"),
        "This is a test message that is long enough"
      )
      await user.click(screen.getByRole("checkbox"))
      
      await user.click(screen.getByRole("button", { name: /submit/i }))

      // Valid email should pass validation
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalled()
      })
    })

    it("shows checkbox validation error", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()

      render(<TestContactForm onSubmit={onSubmit} />)

      // Fill valid inputs but don't accept terms
      await user.type(screen.getByPlaceholderText("Enter username"), "johndoe")
      await user.type(
        screen.getByPlaceholderText("Enter email"),
        "john@example.com"
      )
      await user.type(
        screen.getByPlaceholderText("Enter your message"),
        "This is a test message that is long enough"
      )

      await user.click(screen.getByRole("button", { name: /submit/i }))

      await waitFor(() => {
        expect(screen.getByText("You must accept the terms")).toBeInTheDocument()
      })
    })
  })

  describe("Form submission", () => {
    it("submits form with valid data", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()

      render(<TestContactForm onSubmit={onSubmit} />)

      // Fill all required fields
      await user.type(screen.getByPlaceholderText("Enter username"), "johndoe")
      await user.type(
        screen.getByPlaceholderText("Enter email"),
        "john@example.com"
      )
      await user.type(
        screen.getByPlaceholderText("Enter your message"),
        "This is a test message that is long enough"
      )
      await user.click(screen.getByRole("checkbox"))

      // Submit form
      await user.click(screen.getByRole("button", { name: /submit/i }))

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            username: "johndoe",
            email: "john@example.com",
            message: "This is a test message that is long enough",
            acceptTerms: true,
            notifications: false,
          }),
          expect.anything()
        )
      })
    })

    it("submits form with switch toggled", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()

      render(<TestContactForm onSubmit={onSubmit} />)

      // Fill all required fields
      await user.type(screen.getByPlaceholderText("Enter username"), "johndoe")
      await user.type(
        screen.getByPlaceholderText("Enter email"),
        "john@example.com"
      )
      await user.type(
        screen.getByPlaceholderText("Enter your message"),
        "This is a test message that is long enough"
      )
      await user.click(screen.getByRole("checkbox"))
      await user.click(screen.getByRole("switch"))

      // Submit form
      await user.click(screen.getByRole("button", { name: /submit/i }))

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            notifications: true,
          }),
          expect.anything()
        )
      })
    })
  })

  describe("Form accessibility", () => {
    it("connects labels to inputs", () => {
      const onSubmit = vi.fn()
      render(<TestContactForm onSubmit={onSubmit} />)

      // Labels should be associated with inputs
      expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    })

    it("supports keyboard navigation", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()

      render(<TestContactForm onSubmit={onSubmit} />)

      // Tab through form fields
      await user.tab()
      expect(screen.getByPlaceholderText("Enter username")).toHaveFocus()

      await user.tab()
      expect(screen.getByPlaceholderText("Enter email")).toHaveFocus()

      await user.tab()
      expect(screen.getByPlaceholderText("Enter your message")).toHaveFocus()
    })
  })
})

