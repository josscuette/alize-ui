"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps as SonnerToasterProps } from "sonner"

/**
 * Toaster component props interface
 * Extends sonner ToasterProps
 */
export interface ToasterProps extends SonnerToasterProps {}

/**
 * Toaster component - A toast notification system
 * 
 * Provides toast notifications using sonner library.
 * Automatically adapts to the current theme.
 * 
 * @param props - Toaster props including position, duration, and standard sonner ToasterProps
 * @returns A Toaster component
 * 
 * @example
 * ```tsx
 * <Toaster position="top-right" />
 * ```
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as SonnerToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
