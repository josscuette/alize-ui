---
title: Button
description: A versatile button component with multiple variants and sizes. Supports all standard button variants and icon-only variants.
category: atoms
component: Button
importPath: '@/components/ui/button'
props:
  - name: variant
    type: "default | destructive | outline | secondary | ghost | link"
    default: "default"
    required: false
    description: Visual style variant of the button
  - name: size
    type: "default | sm | lg | xs | icon | icon-sm | icon-lg | icon-xs"
    default: "default"
    required: false
    description: Size of the button
  - name: disabled
    type: "boolean"
    default: "false"
    required: false
    description: Whether the button is disabled
  - name: asChild
    type: "boolean"
    default: "false"
    required: false
    description: Render as a different element using Radix UI Slot
examples:
  - title: Default Button
    description: Basic button usage with a clear, actionable label
    code: |
      import { Button } from '@/components/ui/button';
      
      <Button>Save</Button>
  - title: Variants
    description: All available button variants. Use primary (default) for main actions, outline/secondary for secondary actions, and destructive only for destructive actions.
    code: |
      import { Button } from '@/components/ui/button';
      
      <div className="flex gap-2">
        <Button variant="default">Save</Button>
        <Button variant="outline">Cancel</Button>
        <Button variant="secondary">Edit</Button>
        <Button variant="destructive">Delete</Button>
        <Button variant="ghost">Settings</Button>
        <Button variant="link">Learn more</Button>
      </div>
  - title: Sizes
    description: All available button sizes. Use large size only for marketing purposes or empty states.
    code: |
      import { Button } from '@/components/ui/button';
      
      <div className="flex items-center gap-2">
        <Button size="xs">Add</Button>
        <Button size="sm">Save</Button>
        <Button size="default">Submit</Button>
        <Button size="lg">Get Started</Button>
      </div>
bestPractices:
  - Use `default` variant for primary actions
  - Use `outline` or `secondary` for secondary actions
  - Use `destructive` only for destructive actions
  - Always include `aria-label` for icon-only buttons
  - Ensure sufficient color contrast
  - Provide clear focus states
do:
  - Only use one primary button per section, as a main call-to-action
  - Use clear and accurate labels
  - Use established button colors appropriately (e.g., only use a danger button style for an action that's difficult or impossible to undo)
  - Prioritize the most important actions
  - Be consistent with positioning of buttons in the user interface
  - Use strong, actionable verbs in labels such as "Add", "Close", "Cancel", or "Save"
  - Always include `aria-label` for icon-only buttons
  - Ensure sufficient color contrast
  - Provide clear focus states
dont:
  - Don't use a primary button in every row of a table
  - Don't use buttons to link to other pages (use regular link or a plain style instead where necessary)
  - Don't use buttons for navigation where the link appears within or following a sentence
  - Don't use labels such as "Read more", "Click here" or "More"
  - Don't use multiple primary buttons in the same section
accessibility: |
  - Icon-only buttons must have an `aria-label` for screen readers
  - Buttons should have clear focus states
  - Use semantic HTML (button element)
  - Ensure sufficient color contrast ratios
---