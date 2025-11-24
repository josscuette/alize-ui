# Form Validation Guide

This guide explains how to use Zod validation schemas with Alize UI form components.

## Overview

Alize UI provides reusable Zod validation schemas in `lib/validation.ts` that can be used with `react-hook-form` via `@hookform/resolvers/zod`.

## Installation

Zod and react-hook-form are already included as dependencies. If you need to install them separately:

```bash
npm install zod react-hook-form @hookform/resolvers
```

## Basic Usage

### 1. Import Required Dependencies

```tsx
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from 'alize'
import { emailSchema, passwordSchema } from 'alize/lib/validation'
```

### 2. Define Your Form Schema

```tsx
const formSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

type FormInput = z.infer<typeof formSchema>
```

### 3. Create Form with Validation

```tsx
function LoginForm() {
  const form = useForm<FormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: FormInput) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

## Available Validation Schemas

### Basic Schemas

- `emailSchema` - Email validation
- `passwordSchema` - Password validation (min 8 chars, uppercase, lowercase, number)
- `strongPasswordSchema` - Strong password (includes special character)
- `usernameSchema` - Username validation (3-20 alphanumeric + underscore)
- `urlSchema` - URL validation
- `phoneSchema` - Phone number validation
- `dateSchema` - Date validation
- `numberSchema` - Number validation
- `positiveNumberSchema` - Positive number validation
- `integerSchema` - Integer validation
- `requiredStringSchema` - Required string
- `optionalStringSchema` - Optional string
- `textareaSchema(minLength, maxLength?)` - Textarea with length validation
- `checkboxSchema` - Checkbox validation
- `selectSchema(options)` - Select validation

### File Validation Schemas

- `fileSchema` - File validation
- `fileSizeSchema(maxSizeInBytes)` - File size validation
- `fileTypeSchema(allowedTypes)` - File MIME type validation

### Pre-configured Form Schemas

- `commonSchemas.login` - Login form schema
- `commonSchemas.registration` - Registration form schema
- `commonSchemas.contact` - Contact form schema
- `commonSchemas.profile` - Profile update schema

## Examples

### Example 1: Login Form

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { commonSchemas } from 'alize/lib/validation'

function LoginForm() {
  const form = useForm({
    resolver: zodResolver(commonSchemas.login),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        {/* Form fields */}
      </form>
    </Form>
  )
}
```

### Example 2: Custom Validation

```tsx
import { z } from 'zod'
import { emailSchema, requiredStringSchema } from 'alize/lib/validation'

const customSchema = z.object({
  email: emailSchema,
  name: requiredStringSchema.min(2, 'Name must be at least 2 characters'),
  age: z.number().min(18, 'Must be at least 18 years old'),
})
```

### Example 3: Conditional Validation

```tsx
const formSchema = z.object({
  email: emailSchema,
  subscribe: z.boolean(),
  newsletterEmail: z.string().optional(),
}).refine((data) => {
  if (data.subscribe && !data.newsletterEmail) {
    return false
  }
  return true
}, {
  message: 'Newsletter email is required when subscribing',
  path: ['newsletterEmail'],
})
```

### Example 4: File Upload Validation

```tsx
import { fileSchema, fileSizeSchema, fileTypeSchema } from 'alize/lib/validation'

const fileUploadSchema = z.object({
  file: fileSchema
    .pipe(fileSizeSchema(5 * 1024 * 1024)) // Max 5MB
    .pipe(fileTypeSchema(['image/jpeg', 'image/png', 'image/webp']))
})
```

## Best Practices

1. **Always validate on both client and server** - Client-side validation improves UX, but server-side validation is essential for security.

2. **Use TypeScript types** - Extract types from schemas using `z.infer<typeof schema>` for type safety.

3. **Provide clear error messages** - Customize error messages to be user-friendly and actionable.

4. **Validate early** - Use `mode: 'onChange'` or `mode: 'onBlur'` for immediate feedback.

5. **Combine schemas** - Reuse common schemas and combine them for complex forms.

## Integration with Error Handling

Validation errors can be integrated with error handling utilities:

```tsx
import { ValidationError, handleAsyncError } from 'alize/lib/error-handling'
import { z } from 'zod'

async function submitForm(data: FormInput) {
  try {
    // Validate on server side as well
    const result = formSchema.parse(data)
    await handleAsyncError(
      async () => fetch('/api/submit', { method: 'POST', body: JSON.stringify(result) }),
      { component: 'Form', action: 'submit' }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError('Validation failed', error.flatten().fieldErrors)
    }
    throw error
  }
}
```

## Type Safety

All schemas export TypeScript types:

```tsx
import type { EmailInput, PasswordInput, LoginFormInput } from 'alize/lib/validation'
```

This ensures type safety throughout your application.

