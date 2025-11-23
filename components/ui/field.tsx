"use client"

import { useMemo } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"
import { cn } from "../../lib/utils"
import { Label } from "./label"
import { Separator } from "./separator"

/**
 * FieldSet component props interface
 * Extends native fieldset element props
 */
export interface FieldSetProps extends React.ComponentProps<"fieldset"> {}

/**
 * FieldLegend component props interface
 * Extends native legend element props and adds variant prop
 */
export interface FieldLegendProps extends React.ComponentProps<"legend"> {
  variant?: "legend" | "label"
}

/**
 * FieldGroup component props interface
 * Extends native div element props
 */
export interface FieldGroupProps extends React.ComponentProps<"div"> {}

/**
 * Field component props interface
 * Extends native div element props and adds orientation prop
 */
export interface FieldProps extends React.ComponentProps<"div">, VariantProps<typeof fieldVariants> {}

/**
 * FieldContent component props interface
 * Extends native div element props
 */
export interface FieldContentProps extends React.ComponentProps<"div"> {}

/**
 * FieldLabel component props interface
 * Extends Label props
 */
export interface FieldLabelProps extends React.ComponentProps<typeof Label> {}

/**
 * FieldTitle component props interface
 * Extends native div element props
 */
export interface FieldTitleProps extends React.ComponentProps<"div"> {}

/**
 * FieldDescription component props interface
 * Extends native p element props
 */
export interface FieldDescriptionProps extends React.ComponentProps<"p"> {}

/**
 * FieldSeparator component props interface
 * Extends native div element props
 */
export interface FieldSeparatorProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode
}

/**
 * FieldError component props interface
 * Extends native div element props and adds errors prop
 */
export interface FieldErrorProps extends React.ComponentProps<"div"> {
  errors?: Array<{ message?: string } | undefined>
}

/**
 * FieldSet component - A fieldset container for form fields
 * 
 * Provides a fieldset container for grouping related form fields.
 * 
 * @param props - FieldSet props including standard HTML fieldset attributes
 * @returns A FieldSet component
 * 
 * @example
 * ```tsx
 * <FieldSet>
 *   <FieldLegend>Personal Information</FieldLegend>
 *   <Field>
 *     <FieldLabel>Name</FieldLabel>
 *     <FieldContent>
 *       <Input />
 *     </FieldContent>
 *   </Field>
 * </FieldSet>
 * ```
 */
function FieldSet({ className, ...props }: FieldSetProps): React.ReactElement {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-3",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  )
}

/**
 * FieldLegend component - A legend for a FieldSet
 * @param props - FieldLegend props including variant
 * @returns A FieldLegend component
 */
function FieldLegend({
  className,
  variant = "legend",
  ...props
}: FieldLegendProps): React.ReactElement {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-3 font-normal",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * FieldGroup component - A group of fields
 * @param props - FieldGroup props
 * @returns A FieldGroup component
 */
function FieldGroup({ className, ...props }: FieldGroupProps): React.ReactElement {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-3 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-3",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-[var(--destructive-foreground)]",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

/**
 * Field component - A form field container
 * 
 * Provides a container for form fields with label, content, description, and error.
 * 
 * @param props - Field props including orientation and standard HTML div attributes
 * @returns A Field component
 * 
 * @example
 * ```tsx
 * <Field orientation="vertical">
 *   <FieldLabel>Email</FieldLabel>
 *   <FieldContent>
 *     <Input type="email" />
 *   </FieldContent>
 *   <FieldDescription>Enter your email address</FieldDescription>
 *   <FieldError />
 * </Field>
 * ```
 */
function Field({
  className,
  orientation = "vertical",
  ...props
}: FieldProps): React.ReactElement {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

/**
 * FieldContent component - The content area of a field
 * @param props - FieldContent props
 * @returns A FieldContent component
 */
function FieldContent({ className, ...props }: FieldContentProps): React.ReactElement {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-3 leading-snug",
        className
      )}
      {...props}
    />
  )
}

/**
 * FieldLabel component - A label for a field
 * @param props - FieldLabel props
 * @returns A FieldLabel component
 */
function FieldLabel({
  className,
  ...props
}: FieldLabelProps): React.ReactElement {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        className
      )}
      {...props}
    />
  )
}

/**
 * FieldTitle component - A title for a field
 * @param props - FieldTitle props
 * @returns A FieldTitle component
 */
function FieldTitle({ className, ...props }: FieldTitleProps): React.ReactElement {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-normal group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props}
    />
  )
}

/**
 * FieldDescription component - A description for a field
 * @param props - FieldDescription props
 * @returns A FieldDescription component
 */
function FieldDescription({ className, ...props }: FieldDescriptionProps): React.ReactElement {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * FieldSeparator component - A separator between fields
 * @param props - FieldSeparator props including children
 * @returns A FieldSeparator component
 */
function FieldSeparator({
  children,
  className,
  ...props
}: FieldSeparatorProps): React.ReactElement {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="bg-background text-muted-foreground relative mx-auto block w-fit px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: FieldErrorProps): React.ReactElement | null {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-[var(--destructive-foreground)] text-sm font-normal", className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}
