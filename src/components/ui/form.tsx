"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "../../lib/utils"
import { Label } from "./label"

const Form = FormProvider

/**
 * Form component props interface
 * Extends react-hook-form FormProvider props
 */
export type FormProps<T extends FieldValues = FieldValues> = React.ComponentProps<typeof FormProvider<T>>

/**
 * FormField component props interface
 * Extends react-hook-form ControllerProps
 */
export type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerProps<TFieldValues, TName>

/**
 * FormItem component props interface
 * Extends native div element props
 */
export interface FormItemProps extends React.ComponentProps<"div"> {}

/**
 * FormLabel component props interface
 * Extends Radix UI Label primitive props
 */
export interface FormLabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {}

/**
 * FormControl component props interface
 * Extends Radix UI Slot primitive props
 */
export interface FormControlProps extends React.ComponentProps<typeof Slot> {}

/**
 * FormDescription component props interface
 * Extends native p element props
 */
export interface FormDescriptionProps extends React.ComponentProps<"p"> {}

/**
 * FormMessage component props interface
 * Extends native p element props
 */
export interface FormMessageProps extends React.ComponentProps<"p"> {}

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

/**
 * FormItem component - A container for form field elements
 * 
 * Provides context for form field components (FormLabel, FormControl, FormDescription, FormMessage).
 * 
 * @param props - FormItem props including standard HTML div attributes
 * @returns A FormItem component
 * 
 * @example
 * ```tsx
 * <FormItem>
 *   <FormLabel>Email</FormLabel>
 *   <FormControl>
 *     <Input type="email" />
 *   </FormControl>
 *   <FormDescription>Enter your email address</FormDescription>
 *   <FormMessage />
 * </FormItem>
 * ```
 */
function FormItem({ className, ...props }: FormItemProps): React.ReactElement {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

/**
 * FormLabel component - A label for a form field
 * 
 * Automatically associates with the form field and displays error state.
 * 
 * @param props - FormLabel props including standard Radix UI Label attributes
 * @returns A FormLabel component
 */
function FormLabel({
  className,
  ...props
}: FormLabelProps): React.ReactElement {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-[var(--destructive-foreground)]", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

/**
 * FormControl component - A wrapper for form input components
 * 
 * Automatically connects the input to form validation and error states.
 * 
 * @param props - FormControl props including standard Radix UI Slot attributes
 * @returns A FormControl component
 */
function FormControl({ ...props }: FormControlProps): React.ReactElement {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

/**
 * FormDescription component - A description text for a form field
 * 
 * Displays helpful text below the form field.
 * 
 * @param props - FormDescription props including standard HTML p attributes
 * @returns A FormDescription component
 */
function FormDescription({ className, ...props }: FormDescriptionProps): React.ReactElement {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * FormMessage component - An error message for a form field
 * 
 * Automatically displays validation errors from react-hook-form.
 * 
 * @param props - FormMessage props including standard HTML p attributes
 * @returns A FormMessage component or null if no error
 */
function FormMessage({ className, ...props }: FormMessageProps): React.ReactElement | null {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-[var(--destructive-foreground)] text-sm", className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
