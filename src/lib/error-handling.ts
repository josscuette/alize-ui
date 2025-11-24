/**
 * Error handling utilities
 * 
 * Provides utilities for handling errors in async operations and components.
 * Includes error logging, error transformation, and error boundary integration.
 * 
 * @example
 * ```tsx
 * import { handleAsyncError, ErrorLogger } from 'alize/lib/error-handling'
 * 
 * async function fetchData() {
 *   try {
 *     const response = await fetch('/api/data')
 *     return await handleAsyncError(async () => response.json())
 *   } catch (error) {
 *     ErrorLogger.log(error, { context: 'fetchData' })
 *     throw error
 *   }
 * }
 * ```
 */

/**
 * Error logger interface
 * Can be extended to integrate with error tracking services (Sentry, etc.)
 */
export interface ErrorLogger {
  log(error: Error, context?: ErrorContext): void
  logAsync(error: Error, context?: ErrorContext): Promise<void>
}

/**
 * Error context for additional error information
 */
export interface ErrorContext {
  component?: string
  action?: string
  userId?: string
  metadata?: Record<string, unknown>
  [key: string]: unknown
}

/**
 * Default error logger implementation
 * Logs to console in development, ready for production error tracking integration
 */
class DefaultErrorLogger implements ErrorLogger {
  log(error: Error, context?: ErrorContext): void {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      name: error.name,
      ...context,
      timestamp: new Date().toISOString(),
    }

    // In development, log to console
    if (process.env.NODE_ENV === "development") {
      console.error("Error logged:", errorInfo)
    }

    // In production, you would send this to an error tracking service
    // Example: Sentry.captureException(error, { extra: context })
    // Example: LogRocket.captureException(error, { extra: context })
  }

  async logAsync(error: Error, context?: ErrorContext): Promise<void> {
    this.log(error, context)
    
    // In production, you would await the error tracking service call
    // Example: await Sentry.captureException(error, { extra: context })
  }
}

/**
 * Global error logger instance
 * Can be replaced with a custom implementation
 */
export const ErrorLogger: ErrorLogger = new DefaultErrorLogger()

/**
 * Custom error class for application-specific errors
 */
export class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public statusCode?: number,
    public context?: ErrorContext
  ) {
    super(message)
    this.name = "AppError"
    Object.setPrototypeOf(this, AppError.prototype)
  }
}

/**
 * Network error class
 */
export class NetworkError extends AppError {
  constructor(message: string = "Network request failed", context?: ErrorContext) {
    super(message, "NETWORK_ERROR", 0, context)
    this.name = "NetworkError"
    Object.setPrototypeOf(this, NetworkError.prototype)
  }
}

/**
 * Validation error class
 */
export class ValidationError extends AppError {
  constructor(message: string, public fields?: Record<string, string>, context?: ErrorContext) {
    super(message, "VALIDATION_ERROR", 400, context)
    this.name = "ValidationError"
    Object.setPrototypeOf(this, ValidationError.prototype)
  }
}

/**
 * Async error handler wrapper
 * Wraps async functions with error handling and logging
 * 
 * @param fn - Async function to wrap
 * @param context - Error context for logging
 * @returns Promise that resolves with the function result or rejects with a handled error
 * 
 * @example
 * ```tsx
 * const data = await handleAsyncError(
 *   async () => fetch('/api/data').then(r => r.json()),
 *   { component: 'DataFetcher', action: 'fetchData' }
 * )
 * ```
 */
export async function handleAsyncError<T>(
  fn: () => Promise<T>,
  context?: ErrorContext
): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    const appError = error instanceof Error ? error : new Error(String(error))
    ErrorLogger.log(appError, context)
    throw appError
  }
}

/**
 * Safe async function wrapper
 * Returns a result object instead of throwing
 * 
 * @param fn - Async function to wrap
 * @param context - Error context for logging
 * @returns Promise that resolves with { success: true, data } or { success: false, error }
 * 
 * @example
 * ```tsx
 * const result = await safeAsync(
 *   async () => fetch('/api/data').then(r => r.json())
 * )
 * 
 * if (result.success) {
 *   console.log(result.data)
 * } else {
 *   console.error(result.error)
 * }
 * ```
 */
export async function safeAsync<T>(
  fn: () => Promise<T>,
  context?: ErrorContext
): Promise<{ success: true; data: T } | { success: false; error: Error }> {
  try {
    const data = await fn()
    return { success: true, data }
  } catch (error) {
    const appError = error instanceof Error ? error : new Error(String(error))
    ErrorLogger.log(appError, context)
    return { success: false, error: appError }
  }
}

/**
 * Retry async operation with exponential backoff
 * 
 * @param fn - Async function to retry
 * @param options - Retry options
 * @returns Promise that resolves with the function result
 * 
 * @example
 * ```tsx
 * const data = await retryAsync(
 *   () => fetch('/api/data').then(r => r.json()),
 *   { maxRetries: 3, initialDelay: 1000 }
 * )
 * ```
 */
export async function retryAsync<T>(
  fn: () => Promise<T>,
  options: {
    maxRetries?: number
    initialDelay?: number
    maxDelay?: number
    retryable?: (error: Error) => boolean
  } = {}
): Promise<T> {
  const {
    maxRetries = 3,
    initialDelay = 1000,
    maxDelay = 10000,
    retryable = () => true,
  } = options

  let lastError: Error

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))

      if (attempt === maxRetries || !retryable(lastError)) {
        throw lastError
      }

      const delay = Math.min(initialDelay * Math.pow(2, attempt), maxDelay)
      await new Promise((resolve) => setTimeout(resolve, delay))
    }
  }

  throw lastError!
}

/**
 * Timeout wrapper for async operations
 * 
 * @param fn - Async function to wrap
 * @param timeoutMs - Timeout in milliseconds
 * @returns Promise that resolves with the function result or rejects with timeout error
 * 
 * @example
 * ```tsx
 * const data = await withTimeout(
 *   () => fetch('/api/data').then(r => r.json()),
 *   5000
 * )
 * ```
 */
export async function withTimeout<T>(
  fn: () => Promise<T>,
  timeoutMs: number
): Promise<T> {
  return Promise.race([
    fn(),
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`Operation timed out after ${timeoutMs}ms`)), timeoutMs)
    ),
  ])
}

/**
 * Error message formatter
 * Formats error messages for user display
 * 
 * @param error - Error to format
 * @returns User-friendly error message
 */
export function formatErrorMessage(error: unknown): string {
  if (error instanceof AppError) {
    return error.message
  }
  if (error instanceof Error) {
    return error.message
  }
  return "An unexpected error occurred"
}

/**
 * Check if error is retryable
 * Determines if an error should trigger a retry
 * 
 * @param error - Error to check
 * @returns True if error is retryable
 */
export function isRetryableError(error: unknown): boolean {
  if (error instanceof NetworkError) {
    return true
  }
  if (error instanceof Error) {
    // Retry on network errors, timeouts, and 5xx server errors
    return (
      error.message.includes("network") ||
      error.message.includes("timeout") ||
      error.message.includes("ECONNREFUSED") ||
      error.message.includes("ETIMEDOUT")
    )
  }
  return false
}

