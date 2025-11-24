/**
 * Validation schemas using Zod
 * 
 * This file provides reusable Zod schemas for form validation.
 * These schemas can be used with react-hook-form via @hookform/resolvers/zod.
 * 
 * @example
 * ```tsx
 * import { z } from 'zod'
 * import { zodResolver } from '@hookform/resolvers/zod'
 * import { useForm } from 'react-hook-form'
 * import { emailSchema, passwordSchema } from 'alize/lib/validation'
 * 
 * const formSchema = z.object({
 *   email: emailSchema,
 *   password: passwordSchema,
 * })
 * 
 * const form = useForm({
 *   resolver: zodResolver(formSchema),
 *   defaultValues: {
 *     email: '',
 *     password: '',
 *   },
 * })
 * ```
 */

import { z } from "zod"

/**
 * Email validation schema
 * Validates email format
 */
export const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Please enter a valid email address")

/**
 * Password validation schema
 * Validates password strength (minimum 8 characters)
 */
export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")

/**
 * Strong password validation schema
 * Validates strong password requirements
 */
export const strongPasswordSchema = passwordSchema.regex(
  /[^A-Za-z0-9]/,
  "Password must contain at least one special character"
)

/**
 * Username validation schema
 * Validates username format (3-20 alphanumeric characters and underscores)
 */
export const usernameSchema = z
  .string()
  .min(3, "Username must be at least 3 characters")
  .max(20, "Username must be at most 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores")

/**
 * URL validation schema
 * Validates URL format
 */
export const urlSchema = z
  .string()
  .min(1, "URL is required")
  .url("Please enter a valid URL")

/**
 * Phone number validation schema
 * Validates phone number format (basic international format)
 */
export const phoneSchema = z
  .string()
  .min(1, "Phone number is required")
  .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number")

/**
 * Date validation schema
 * Validates date format
 */
export const dateSchema = z
  .string()
  .min(1, "Date is required")
  .refine((val) => !isNaN(Date.parse(val)), "Please enter a valid date")

/**
 * Number validation schema
 * Validates numeric input
 */
export const numberSchema = z
  .string()
  .min(1, "Number is required")
  .refine((val) => !isNaN(Number(val)), "Please enter a valid number")

/**
 * Positive number validation schema
 * Validates positive numeric input
 */
export const positiveNumberSchema = numberSchema.refine(
  (val) => Number(val) > 0,
  "Number must be positive"
)

/**
 * Integer validation schema
 * Validates integer input
 */
export const integerSchema = z
  .string()
  .min(1, "Integer is required")
  .refine((val) => Number.isInteger(Number(val)), "Please enter a valid integer")

/**
 * Required string validation schema
 * Validates non-empty string
 */
export const requiredStringSchema = z
  .string()
  .min(1, "This field is required")

/**
 * Optional string validation schema
 * Allows empty string or validates string if provided
 */
export const optionalStringSchema = z.string().optional()

/**
 * Textarea validation schema
 * Validates textarea content with optional min/max length
 */
export const textareaSchema = (minLength = 0, maxLength?: number) => {
  let schema = z.string().min(minLength, `Text must be at least ${minLength} characters`)
  if (maxLength !== undefined) {
    schema = schema.max(maxLength, `Text must be at most ${maxLength} characters`) as typeof schema
  }
  return schema
}

/**
 * Checkbox validation schema
 * Validates checkbox checked state
 */
export const checkboxSchema = z.boolean().refine((val) => val === true, "This field must be checked")

/**
 * Select validation schema
 * Validates select option selection
 */
export const selectSchema = <T extends string>(options: readonly T[]) =>
  z.enum(options as [T, ...T[]], {
    message: "Please select a valid option",
  })

/**
 * File validation schema
 * Validates file upload
 */
export const fileSchema = z
  .instanceof(File)
  .refine((file) => file.size > 0, "File is required")
  .optional()

/**
 * File size validation schema
 * Validates file size (in bytes)
 */
export const fileSizeSchema = (maxSizeInBytes: number) =>
  z
    .instanceof(File)
    .refine((file) => file.size <= maxSizeInBytes, `File size must be less than ${maxSizeInBytes} bytes`)

/**
 * File type validation schema
 * Validates file MIME type
 */
export const fileTypeSchema = (allowedTypes: string[]) =>
  z
    .instanceof(File)
    .refine((file) => allowedTypes.includes(file.type), `File type must be one of: ${allowedTypes.join(", ")}`)

/**
 * Common form schemas
 * Pre-configured schemas for common form patterns
 */
export const commonSchemas = {
  /**
   * Login form schema
   */
  login: z.object({
    email: emailSchema,
    password: requiredStringSchema,
  }),

  /**
   * Registration form schema
   */
  registration: z.object({
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: requiredStringSchema,
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }),

  /**
   * Contact form schema
   */
  contact: z.object({
    name: requiredStringSchema,
    email: emailSchema,
    message: textareaSchema(10, 1000),
  }),

  /**
   * Profile update schema
   */
  profile: z.object({
    username: usernameSchema,
    email: emailSchema,
    phone: phoneSchema.optional(),
    bio: optionalStringSchema,
  }),
} as const

/**
 * Type inference helpers
 * Extract TypeScript types from Zod schemas
 */
export type EmailInput = z.infer<typeof emailSchema>
export type PasswordInput = z.infer<typeof passwordSchema>
export type UsernameInput = z.infer<typeof usernameSchema>
export type LoginFormInput = z.infer<typeof commonSchemas.login>
export type RegistrationFormInput = z.infer<typeof commonSchemas.registration>
export type ContactFormInput = z.infer<typeof commonSchemas.contact>
export type ProfileFormInput = z.infer<typeof commonSchemas.profile>

