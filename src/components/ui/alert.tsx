import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>.material-symbols-outlined]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 has-[>.material-symbols-outlined]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current [&>.material-symbols-outlined]:size-4 [&>.material-symbols-outlined]:translate-y-0.5 [&>.material-symbols-outlined]:text-current",
  {
      variants: {
        variant: {
          default: "bg-card text-card-foreground",
          destructive:
            "bg-destructive text-[var(--destructive-foreground)] [&>svg]:text-current [&>.material-symbols-outlined]:text-current *:data-[slot=alert-description]:text-[var(--destructive-foreground)]/90 border-0",
        },
      },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * Alert component props interface
 * Extends native div element props and adds variant prop
 */
export interface AlertProps extends React.ComponentProps<"div">, VariantProps<typeof alertVariants> {}

/**
 * AlertTitle component props interface
 * Extends native div element props
 */
export interface AlertTitleProps extends React.ComponentProps<"div"> {}

/**
 * AlertDescription component props interface
 * Extends native div element props
 */
export interface AlertDescriptionProps extends React.ComponentProps<"div"> {}

/**
 * Alert component - A contextual alert message
 * 
 * Displays an alert message with optional title and description.
 * Supports multiple variants (default, destructive).
 * 
 * @param props - Alert props including variant and standard HTML div attributes
 * @returns An alert element
 * 
 * @example
 * ```tsx
 * <Alert variant="default">
 *   <AlertTitle>Title</AlertTitle>
 *   <AlertDescription>Description</AlertDescription>
 * </Alert>
 * ```
 */
function Alert({
  className,
  variant,
  ...props
}: AlertProps): React.ReactElement {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

/**
 * AlertTitle component - The title of the alert
 * @param props - AlertTitle props
 * @returns An AlertTitle component
 */
function AlertTitle({ className, ...props }: AlertTitleProps): React.ReactElement {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

/**
 * AlertDescription component - The description text of the alert
 * @param props - AlertDescription props
 * @returns An AlertDescription component
 */
function AlertDescription({
  className,
  ...props
}: AlertDescriptionProps): React.ReactElement {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
