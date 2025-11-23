import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"
import { cn } from "../../lib/utils"
import { Separator } from "./separator"

/**
 * ButtonGroup component props interface
 * Extends native div element props and adds orientation prop
 */
export interface ButtonGroupProps extends React.ComponentProps<"div">, VariantProps<typeof buttonGroupVariants> {}

/**
 * ButtonGroupText component props interface
 * Extends native div element props and adds asChild prop
 */
export interface ButtonGroupTextProps extends React.ComponentProps<"div"> {
  asChild?: boolean
}

/**
 * ButtonGroupSeparator component props interface
 * Extends Separator props
 */
export interface ButtonGroupSeparatorProps extends React.ComponentProps<typeof Separator> {
  orientation?: "horizontal" | "vertical"
}

const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

/**
 * ButtonGroup component - A group of buttons
 * 
 * Provides a container for grouping buttons together with shared styling.
 * 
 * @param props - ButtonGroup props including orientation and standard HTML div attributes
 * @returns A ButtonGroup component
 * 
 * @example
 * ```tsx
 * <ButtonGroup orientation="horizontal">
 *   <Button>Button 1</Button>
 *   <Button>Button 2</Button>
 * </ButtonGroup>
 * ```
 */
function ButtonGroup({
  className,
  orientation,
  ...props
}: ButtonGroupProps): React.ReactElement {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

/**
 * ButtonGroupText component - A text element within a button group
 * @param props - ButtonGroupText props including asChild
 * @returns A ButtonGroupText component
 */
function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: ButtonGroupTextProps): React.ReactElement {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * ButtonGroupSeparator component - A separator within a button group
 * @param props - ButtonGroupSeparator props including orientation
 * @returns A ButtonGroupSeparator component
 */
function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: ButtonGroupSeparatorProps): React.ReactElement {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        className
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}
