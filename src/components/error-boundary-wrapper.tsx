"use client"

import * as React from "react"
import { ErrorBoundary } from "./error-boundary"

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode
}

/**
 * Client component wrapper for ErrorBoundary
 * Required because ErrorBoundary is a class component and must be in a client component
 */
export function ErrorBoundaryWrapper({ children }: ErrorBoundaryWrapperProps) {
  return <ErrorBoundary>{children}</ErrorBoundary>
}

