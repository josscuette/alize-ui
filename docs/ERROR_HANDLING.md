# Error Handling Guide

This guide explains how to handle errors effectively when using Alize UI components.

## Overview

Alize UI provides comprehensive error handling utilities in `lib/error-handling.ts` for managing errors in async operations, components, and user interactions.

## Error Boundaries

### Basic Usage

Wrap your components with `ErrorBoundary` to catch React errors:

```tsx
import { ErrorBoundary } from 'alize/components/error-boundary'

function App() {
  return (
    <ErrorBoundary>
      <YourComponent />
    </ErrorBoundary>
  )
}
```

### Custom Fallback

Provide a custom error fallback component:

```tsx
function CustomErrorFallback({ error, resetError }) {
  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={resetError}>Try again</button>
    </div>
  )
}

<ErrorBoundary fallback={CustomErrorFallback}>
  <YourComponent />
</ErrorBoundary>
```

## Async Error Handling

### handleAsyncError

Wrap async operations with automatic error logging:

```tsx
import { handleAsyncError } from 'alize/lib/error-handling'

async function fetchData() {
  try {
    const data = await handleAsyncError(
      async () => {
        const response = await fetch('/api/data')
        if (!response.ok) throw new Error('Failed to fetch')
        return response.json()
      },
      { component: 'DataFetcher', action: 'fetchData' }
    )
    return data
  } catch (error) {
    // Error is already logged
    // Handle error in UI
  }
}
```

### safeAsync

Get result object instead of throwing:

```tsx
import { safeAsync } from 'alize/lib/error-handling'

const result = await safeAsync(
  async () => fetch('/api/data').then(r => r.json()),
  { component: 'DataFetcher' }
)

if (result.success) {
  console.log('Data:', result.data)
} else {
  console.error('Error:', result.error)
  // Show error to user
}
```

### retryAsync

Retry failed operations with exponential backoff:

```tsx
import { retryAsync } from 'alize/lib/error-handling'

const data = await retryAsync(
  () => fetch('/api/data').then(r => r.json()),
  {
    maxRetries: 3,
    initialDelay: 1000,
    retryable: (error) => error.message.includes('network'),
  }
)
```

### withTimeout

Add timeout to async operations:

```tsx
import { withTimeout } from 'alize/lib/error-handling'

const data = await withTimeout(
  () => fetch('/api/data').then(r => r.json()),
  5000 // 5 seconds
)
```

## Custom Error Classes

### AppError

Create application-specific errors:

```tsx
import { AppError } from 'alize/lib/error-handling'

throw new AppError(
  'User not found',
  'USER_NOT_FOUND',
  404,
  { userId: '123' }
)
```

### NetworkError

Handle network errors:

```tsx
import { NetworkError } from 'alize/lib/error-handling'

try {
  await fetch('/api/data')
} catch (error) {
  throw new NetworkError('Failed to connect to server', { endpoint: '/api/data' })
}
```

### ValidationError

Handle validation errors:

```tsx
import { ValidationError } from 'alize/lib/error-handling'

throw new ValidationError(
  'Invalid form data',
  { email: 'Invalid email format', password: 'Password too short' },
  { component: 'LoginForm' }
)
```

## Error Logging

### ErrorLogger

The `ErrorLogger` automatically logs errors. In production, you can replace it with a custom implementation:

```tsx
import { ErrorLogger, ErrorContext } from 'alize/lib/error-handling'

// Custom implementation for Sentry
class SentryErrorLogger implements ErrorLogger {
  log(error: Error, context?: ErrorContext) {
    Sentry.captureException(error, {
      extra: context,
      tags: {
        component: context?.component,
        action: context?.action,
      },
    })
  }

  async logAsync(error: Error, context?: ErrorContext) {
    await Sentry.captureException(error, {
      extra: context,
    })
  }
}

// Replace default logger
ErrorLogger = new SentryErrorLogger()
```

## Error Display

### formatErrorMessage

Format errors for user display:

```tsx
import { formatErrorMessage } from 'alize/lib/error-handling'

try {
  await riskyOperation()
} catch (error) {
  const userMessage = formatErrorMessage(error)
  toast.error(userMessage)
}
```

## Best Practices

1. **Always handle async errors** - Use `handleAsyncError` or `safeAsync` for async operations
2. **Provide context** - Include component and action information in error context
3. **Use error boundaries** - Wrap components to catch React errors
4. **Log errors appropriately** - Use ErrorLogger for consistent error logging
5. **Show user-friendly messages** - Use `formatErrorMessage` for user-facing errors
6. **Retry transient errors** - Use `retryAsync` for network errors
7. **Set timeouts** - Use `withTimeout` for long-running operations
8. **Validate input** - Use validation schemas to catch errors early

## Integration Examples

### Form Submission with Error Handling

```tsx
import { handleAsyncError, ValidationError } from 'alize/lib/error-handling'
import { formatErrorMessage } from 'alize/lib/error-handling'
import { toast } from 'sonner'

async function submitForm(data: FormData) {
  try {
    await handleAsyncError(
      async () => {
        const response = await fetch('/api/submit', {
          method: 'POST',
          body: JSON.stringify(data),
        })
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new ValidationError('Validation failed', errorData.errors)
        }
        
        return response.json()
      },
      { component: 'ContactForm', action: 'submit' }
    )
    
    toast.success('Form submitted successfully')
  } catch (error) {
    const message = formatErrorMessage(error)
    toast.error(message)
  }
}
```

### Component with Error Boundary

```tsx
import { ErrorBoundary } from 'alize/components/error-boundary'
import { handleAsyncError } from 'alize/lib/error-handling'

function DataComponent() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    handleAsyncError(
      async () => {
        const result = await fetch('/api/data').then(r => r.json())
        setData(result)
        setLoading(false)
      },
      { component: 'DataComponent', action: 'loadData' }
    ).catch(() => {
      setLoading(false)
    })
  }, [])

  if (loading) return <div>Loading...</div>
  return <div>{/* Render data */}</div>
}

// Wrap with error boundary
<ErrorBoundary>
  <DataComponent />
</ErrorBoundary>
```

