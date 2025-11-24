# Security Guide

This guide covers security best practices and patterns for using Alize UI components securely.

## Input Validation

### Using Zod Schemas

Alize UI provides reusable Zod validation schemas in `lib/validation.ts`. Always validate user input on both client and server side.

```tsx
import { zodResolver } from '@hookform/resolvers/zod'
import { emailSchema, passwordSchema } from 'alize/lib/validation'
import { useForm } from 'react-hook-form'

const formSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

const form = useForm({
  resolver: zodResolver(formSchema),
})
```

See [VALIDATION.md](./VALIDATION.md) for complete validation guide.

## Content Sanitization

### HTML Sanitization

Never render user-provided HTML without sanitization:

```tsx
import { sanitizeHtml } from 'alize/lib/sanitization'

// ❌ DON'T: Directly render user HTML
<div dangerouslySetInnerHTML={{ __html: userContent }} />

// ✅ DO: Sanitize HTML first
const safeHtml = sanitizeHtml(userContent)
<div dangerouslySetInnerHTML={{ __html: safeHtml }} />
```

### URL Sanitization

Always sanitize URLs before using them in links or redirects:

```tsx
import { sanitizeUrl } from 'alize/lib/sanitization'

const safeUrl = sanitizeUrl(userProvidedUrl)
if (safeUrl) {
  <a href={safeUrl}>Link</a>
}
```

### Text Sanitization

Escape user text to prevent XSS:

```tsx
import { sanitizeText } from 'alize/lib/sanitization'

const safeText = sanitizeText(userInput)
```

## Error Handling

### Async Error Handling

Always wrap async operations with error handling:

```tsx
import { handleAsyncError, safeAsync } from 'alize/lib/error-handling'

// Option 1: Throw errors
try {
  const data = await handleAsyncError(
    async () => fetch('/api/data').then(r => r.json()),
    { component: 'DataFetcher', action: 'fetchData' }
  )
} catch (error) {
  // Handle error
}

// Option 2: Return result object
const result = await safeAsync(
  async () => fetch('/api/data').then(r => r.json())
)

if (result.success) {
  console.log(result.data)
} else {
  console.error(result.error)
}
```

### Error Boundaries

Wrap components with ErrorBoundary to catch React errors:

```tsx
import { ErrorBoundary } from 'alize/components/error-boundary'

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

## Dependency Security

### npm audit

Run regular security audits:

```bash
npm audit
npm audit fix
```

### CI/CD Integration

Add npm audit to your CI/CD pipeline:

```yaml
# .github/workflows/security.yml
name: Security Audit

on:
  schedule:
    - cron: '0 0 * * 0' # Weekly
  push:
    branches: [main]

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm audit --audit-level=moderate
```

## Best Practices

1. **Never trust client-side validation alone** - Always validate on the server
2. **Sanitize all user input** - Use sanitization utilities before rendering
3. **Use HTTPS** - Always use HTTPS for external API calls
4. **Keep dependencies updated** - Regularly update dependencies and run security audits
5. **Use Content Security Policy (CSP)** - Implement CSP headers in production
6. **Avoid dangerouslySetInnerHTML** - Use sanitization utilities if absolutely necessary
7. **Validate file uploads** - Check file types and sizes on both client and server
8. **Use error boundaries** - Wrap components to catch and handle errors gracefully

## Common Security Patterns

### File Upload Security

```tsx
import { fileSchema, fileSizeSchema, fileTypeSchema } from 'alize/lib/validation'

const fileUploadSchema = z.object({
  file: fileSchema
    .pipe(fileSizeSchema(5 * 1024 * 1024)) // Max 5MB
    .pipe(fileTypeSchema(['image/jpeg', 'image/png'])) // Only images
})
```

### API Request Security

```tsx
import { handleAsyncError, NetworkError } from 'alize/lib/error-handling'

async function fetchSecureData() {
  try {
    const response = await handleAsyncError(
      async () => fetch('https://api.example.com/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
      { component: 'DataFetcher', action: 'fetchSecureData' }
    )
    
    if (!response.ok) {
      throw new NetworkError(`Request failed with status ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    // Handle error appropriately
    throw error
  }
}
```

## Reporting Security Issues

If you discover a security vulnerability, please report it responsibly. Do not create public GitHub issues for security vulnerabilities.

