"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { states } from "../../foundation"

/**
 * Accordion component props interface
 * Extends Radix UI Accordion primitive props
 */
export interface AccordionProps extends Omit<React.ComponentProps<typeof AccordionPrimitive.Root>, "type"> {
  type?: "single" | "multiple"
  collapsible?: boolean
  children?: React.ReactNode
}

/**
 * AccordionItem component props interface
 * Extends Radix UI AccordionItem primitive props
 */
export interface AccordionItemProps extends React.ComponentProps<typeof AccordionPrimitive.Item> {}

/**
 * AccordionTrigger component props interface
 * Extends Radix UI AccordionTrigger primitive props
 */
export interface AccordionTriggerProps extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {}

/**
 * AccordionContent component props interface
 * Extends Radix UI AccordionContent primitive props
 */
export interface AccordionContentProps extends React.ComponentProps<typeof AccordionPrimitive.Content> {}

/**
 * Accordion component - A collapsible content section
 * 
 * Provides an accessible accordion for organizing content into collapsible sections.
 * Built on Radix UI primitives for accessibility.
 * 
 * @param props - Accordion props including type, defaultValue, and standard Radix UI Accordion attributes
 * @returns An Accordion component
 * 
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Section 1</AccordionTrigger>
 *     <AccordionContent>Content 1</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
function Accordion(props: AccordionProps): React.ReactElement {
  const { type = "single", collapsible, ...restProps } = props
  if (type === "single") {
    const singleProps = {
      ...restProps,
      type: "single" as const,
      ...(collapsible !== undefined && { collapsible }),
    } as React.ComponentProps<typeof AccordionPrimitive.Root>
    return <AccordionPrimitive.Root data-slot="accordion" {...singleProps} />
  }
  const multipleProps = {
    ...restProps,
    type: "multiple" as const,
  } as React.ComponentProps<typeof AccordionPrimitive.Root>
  return <AccordionPrimitive.Root data-slot="accordion" {...multipleProps} />
}

/**
 * AccordionItem component - An individual accordion item
 * @param props - AccordionItem props including value
 * @returns An AccordionItem component
 */
function AccordionItem({
  className,
  ...props
}: AccordionItemProps): React.ReactElement {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

/**
 * AccordionTrigger component - The clickable header that toggles the accordion item
 * @param props - AccordionTrigger props
 * @returns An AccordionTrigger component
 */
function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps): React.ReactElement {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          // Layout
          "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all",
          // Focus state using foundation
          states.focusRing,
          states.outlineNone,
          "focus-visible:border-ring",
          // Hover state
          states.hoverUnderline,
          // Pressed state
          states.pressed,
          // Disabled state
          states.disabled,
          states.disabledCursor,
          // Chevron rotation on open
          "[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

/**
 * AccordionContent component - The collapsible content of the accordion item
 * @param props - AccordionContent props
 * @returns An AccordionContent component
 */
function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps): React.ReactElement {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
