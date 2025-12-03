/**
 * Integration tests for navigation components
 * Tests Tabs, Accordion, and other navigation patterns
 */
import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import * as React from "react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Test component: Tabs with forms in each tab
function TabsWithForms({ onSubmit }: { onSubmit: (tab: string, data: string) => void }) {
  const [accountEmail, setAccountEmail] = React.useState("")
  const [securityPassword, setSecurityPassword] = React.useState("")

  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div>
          <h3>Account Settings</h3>
          <Input
            placeholder="Email"
            value={accountEmail}
            onChange={(e) => setAccountEmail(e.target.value)}
          />
          <Button onClick={() => onSubmit("account", accountEmail)}>
            Save Account
          </Button>
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div>
          <h3>Security Settings</h3>
          <Input
            type="password"
            placeholder="New password"
            value={securityPassword}
            onChange={(e) => setSecurityPassword(e.target.value)}
          />
          <Button onClick={() => onSubmit("security", securityPassword)}>
            Update Password
          </Button>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div>
          <h3>Notification Preferences</h3>
          <p>Configure your notification settings here.</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}

// Test component: FAQ Accordion
function FAQAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          We offer a 30-day return policy on all items.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How long does shipping take?</AccordionTrigger>
        <AccordionContent>
          Standard shipping takes 5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
        <AccordionContent>
          Yes, we ship to over 100 countries worldwide.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

describe("Navigation Integration", () => {
  describe("Tabs with content", () => {
    it("shows default tab content", () => {
      const onSubmit = vi.fn()
      render(<TabsWithForms onSubmit={onSubmit} />)

      expect(screen.getByText("Account Settings")).toBeInTheDocument()
      expect(screen.getByPlaceholderText("Email")).toBeInTheDocument()
    })

    it("switches between tabs", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<TabsWithForms onSubmit={onSubmit} />)

      // Check initial state
      expect(screen.getByText("Account Settings")).toBeInTheDocument()

      // Switch to security tab
      await user.click(screen.getByRole("tab", { name: /security/i }))
      
      await waitFor(() => {
        expect(screen.getByText("Security Settings")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("New password")).toBeInTheDocument()
      })

      // Switch to notifications tab
      await user.click(screen.getByRole("tab", { name: /notifications/i }))
      
      await waitFor(() => {
        expect(screen.getByText("Notification Preferences")).toBeInTheDocument()
      })
    })

    it("preserves input values when switching tabs", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<TabsWithForms onSubmit={onSubmit} />)

      // Enter data in account tab
      await user.type(screen.getByPlaceholderText("Email"), "test@example.com")

      // Switch to security tab
      await user.click(screen.getByRole("tab", { name: /security/i }))
      
      await waitFor(() => {
        expect(screen.getByText("Security Settings")).toBeInTheDocument()
      })

      // Switch back to account tab
      await user.click(screen.getByRole("tab", { name: /account/i }))
      
      await waitFor(() => {
        expect(screen.getByPlaceholderText("Email")).toHaveValue("test@example.com")
      })
    })

    it("submits form in active tab", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<TabsWithForms onSubmit={onSubmit} />)

      await user.type(screen.getByPlaceholderText("Email"), "test@example.com")
      await user.click(screen.getByRole("button", { name: /save account/i }))

      expect(onSubmit).toHaveBeenCalledWith("account", "test@example.com")
    })

    it("supports keyboard navigation between tabs", async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<TabsWithForms onSubmit={onSubmit} />)

      // Focus first tab
      await user.tab()
      expect(screen.getByRole("tab", { name: /account/i })).toHaveFocus()

      // Arrow right to next tab
      await user.keyboard("{ArrowRight}")
      expect(screen.getByRole("tab", { name: /security/i })).toHaveFocus()

      // Press Enter to activate
      await user.keyboard("{Enter}")
      
      await waitFor(() => {
        expect(screen.getByText("Security Settings")).toBeInTheDocument()
      })
    })
  })

  describe("Accordion navigation", () => {
    it("renders all accordion items collapsed initially", () => {
      render(<FAQAccordion />)

      expect(screen.getByText("What is your return policy?")).toBeInTheDocument()
      expect(screen.getByText("How long does shipping take?")).toBeInTheDocument()
      expect(
        screen.getByText("Do you offer international shipping?")
      ).toBeInTheDocument()

      // Content should not be visible
      expect(
        screen.queryByText("We offer a 30-day return policy on all items.")
      ).not.toBeInTheDocument()
    })

    it("expands accordion item on click", async () => {
      const user = userEvent.setup()
      render(<FAQAccordion />)

      await user.click(screen.getByText("What is your return policy?"))

      await waitFor(() => {
        expect(
          screen.getByText("We offer a 30-day return policy on all items.")
        ).toBeVisible()
      })
    })

    it("collapses previous item when opening new one (single mode)", async () => {
      const user = userEvent.setup()
      render(<FAQAccordion />)

      // Open first item
      await user.click(screen.getByText("What is your return policy?"))
      
      await waitFor(() => {
        expect(
          screen.getByText("We offer a 30-day return policy on all items.")
        ).toBeVisible()
      })

      // Open second item
      await user.click(screen.getByText("How long does shipping take?"))
      
      await waitFor(() => {
        expect(
          screen.getByText("Standard shipping takes 5-7 business days.")
        ).toBeVisible()
        // First item should be collapsed
        expect(
          screen.queryByText("We offer a 30-day return policy on all items.")
        ).not.toBeInTheDocument()
      })
    })

    it("toggles accordion item on repeated clicks", async () => {
      const user = userEvent.setup()
      render(<FAQAccordion />)

      // Open item
      await user.click(screen.getByText("What is your return policy?"))
      
      await waitFor(() => {
        expect(
          screen.getByText("We offer a 30-day return policy on all items.")
        ).toBeVisible()
      })

      // Close item
      await user.click(screen.getByText("What is your return policy?"))
      
      await waitFor(() => {
        expect(
          screen.queryByText("We offer a 30-day return policy on all items.")
        ).not.toBeInTheDocument()
      })
    })

    it("supports keyboard navigation", async () => {
      const user = userEvent.setup()
      render(<FAQAccordion />)

      // Focus first trigger
      await user.tab()
      expect(screen.getByText("What is your return policy?")).toHaveFocus()

      // Open with Enter
      await user.keyboard("{Enter}")
      
      await waitFor(() => {
        expect(
          screen.getByText("We offer a 30-day return policy on all items.")
        ).toBeVisible()
      })

      // Navigate to next item
      await user.tab()
      expect(screen.getByText("How long does shipping take?")).toHaveFocus()
    })
  })
})

