"use client"

import * as React from "react"
import { Button } from "./ui/button"
import { MaterialSymbol } from "./material-symbol"
import { ErrorLogger } from "../lib/error-handling"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<ErrorFallbackProps>
}

interface ErrorFallbackProps {
  error: Error
  resetError: () => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

/**
 * Default error fallback component
 * Displays a user-friendly error message with a reset button
 */
function DefaultErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <MaterialSymbol 
          name="error_outline" 
          size={48} 
          weight={300}
          className="text-semantic-text-rag-danger-default"
        />
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="text-sm text-semantic-text-subdued max-w-md">
            An unexpected error occurred. Please try refreshing the page or contact support if the problem persists.
          </p>
        </div>
        {process.env.NODE_ENV === "development" && error && (
          <details className="mt-4 max-w-2xl">
            <summary className="cursor-pointer text-sm text-semantic-text-subdued">
              Error details (development only)
            </summary>
            <pre className="mt-2 overflow-auto rounded-md bg-semantic-surface-subdued p-4 text-xs">
              {error.message}
              {"\n\n"}
              {error.stack}
            </pre>
          </details>
        )}
        <Button onClick={resetError} variant="default" className="mt-4">
          <MaterialSymbol name="refresh" size={20} weight={300} />
          Try again
        </Button>
      </div>
    </div>
  )
}

/**
 * Error Boundary component for catching React errors
 * 
 * @example
 * ```tsx
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error using ErrorLogger (ready for production error tracking integration)
    ErrorLogger.log(error, {
      component: "ErrorBoundary",
      action: "componentDidCatch",
      metadata: {
        componentStack: errorInfo.componentStack,
        errorBoundary: true,
      },
    })
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
    })
  }

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return (
        <FallbackComponent 
          error={this.state.error} 
          resetError={this.resetError}
        />
      )
    }

    return this.props.children
  }
}

