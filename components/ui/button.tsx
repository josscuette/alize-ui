import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
  {
    variants: {
      variant: {
        default: "bg-[var(--semantic-surface-primary)] text-[var(--semantic-text-reversedpersistent)] hover:opacity-90 [&_.material-symbols-outlined]:text-[var(--semantic-icon-interaction-bright)]",
        destructive:
          "bg-destructive text-[var(--destructive-foreground)] hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 [&_.material-symbols-outlined]:!text-[var(--destructive-foreground)]",
        outline:
          "border border-[var(--semantic-stroke-default)] text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
        secondary:
          "bg-[var(--semantic-surface-secondary)] text-[var(--semantic-text-subdued)] hover:opacity-80 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
        ghost:
          "text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
        link: "text-primary underline-offset-4 hover:underline hover:text-[var(--semantic-text-interaction-bright)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)] hover:[&_.material-symbols-outlined]:!text-[var(--semantic-icon-interaction-bright)]",
        tertiary: "text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
      },
      size: {
        default: "h-9 px-3 gap-2 rounded-md text-sm leading-5 [&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]",
        sm: "h-7 px-2 gap-2 rounded-md text-sm leading-5 [&_svg]:size-4 [&_.material-symbols-outlined]:!text-[16px]",
        lg: "h-11 px-4 gap-2 rounded-md text-base leading-6 [&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]",
        xs: "h-5 px-1 gap-1 rounded-[4px] text-xs leading-4 [&_svg]:size-3 [&_.material-symbols-outlined]:!text-[12px]",
        icon: "size-9 rounded-md [&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]",
        "icon-sm": "size-7 rounded-md [&_svg]:size-4 [&_.material-symbols-outlined]:!text-[16px]",
        "icon-lg": "size-11 rounded-md [&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]",
        "icon-xs": "size-5 rounded-[4px] [&_svg]:size-3 [&_.material-symbols-outlined]:!text-[12px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  
  // Check if button has text (not just icons) - simple check
  const hasText = React.Children.toArray(children).some((child) => {
    if (typeof child === 'string') return child.trim().length > 0
    if (typeof child === 'number') return true
    return false
  })
  
  const isIconOnly = size?.toString().includes('icon') || false
  const isPrimaryWithText = variant === 'default' && hasText && !isIconOnly
  const isPrimaryIconOnly = variant === 'default' && isIconOnly

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        // Primary icon-only: icon should be reversedPersistent (white) - override default bright color
        isPrimaryIconOnly && '[&_.material-symbols-outlined]:!text-[var(--semantic-text-reversedpersistent)]',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
