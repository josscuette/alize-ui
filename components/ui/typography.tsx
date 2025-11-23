import * as React from "react"
import { cn } from "../../lib/utils"

/**
 * TypographyH1 component props interface
 * Extends native h1 element props
 */
export interface TypographyH1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * TypographyH2 component props interface
 * Extends native h2 element props
 */
export interface TypographyH2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * TypographyH3 component props interface
 * Extends native h3 element props
 */
export interface TypographyH3Props extends React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * TypographyH4 component props interface
 * Extends native h4 element props
 */
export interface TypographyH4Props extends React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * TypographyP component props interface
 * Extends native p element props
 */
export interface TypographyPProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * TypographyBlockquote component props interface
 * Extends native blockquote element props
 */
export interface TypographyBlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {}

/**
 * TypographyCode component props interface
 * Extends native code element props
 */
export interface TypographyCodeProps extends React.HTMLAttributes<HTMLElement> {}

/**
 * TypographyH1 component - A heading level 1
 * 
 * Provides a styled h1 heading with consistent typography.
 * 
 * @param props - TypographyH1 props including standard HTML h1 attributes
 * @returns A TypographyH1 component
 * 
 * @example
 * ```tsx
 * <TypographyH1>Main Title</TypographyH1>
 * ```
 */
const TypographyH1 = React.forwardRef<
  HTMLHeadingElement,
  TypographyH1Props
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn("scroll-m-20 text-4xl font-normal tracking-tight", className)}
    {...props}
  />
))
TypographyH1.displayName = "TypographyH1"

/**
 * TypographyH2 component - A heading level 2
 * @param props - TypographyH2 props
 * @returns A TypographyH2 component
 */
const TypographyH2 = React.forwardRef<
  HTMLHeadingElement,
  TypographyH2Props
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("scroll-m-20 text-3xl font-normal tracking-tight", className)}
    {...props}
  />
))
TypographyH2.displayName = "TypographyH2"

/**
 * TypographyH3 component - A heading level 3
 * @param props - TypographyH3 props
 * @returns A TypographyH3 component
 */
const TypographyH3 = React.forwardRef<
  HTMLHeadingElement,
  TypographyH3Props
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("scroll-m-20 text-2xl font-normal tracking-tight", className)}
    {...props}
  />
))
TypographyH3.displayName = "TypographyH3"

/**
 * TypographyH4 component - A heading level 4
 * @param props - TypographyH4 props
 * @returns A TypographyH4 component
 */
const TypographyH4 = React.forwardRef<
  HTMLHeadingElement,
  TypographyH4Props
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("scroll-m-20 text-xl font-normal tracking-tight", className)}
    {...props}
  />
))
TypographyH4.displayName = "TypographyH4"

/**
 * TypographyP component - A paragraph
 * @param props - TypographyP props
 * @returns A TypographyP component
 */
const TypographyP = React.forwardRef<
  HTMLParagraphElement,
  TypographyPProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("leading-7", className)}
    {...props}
  />
))
TypographyP.displayName = "TypographyP"

/**
 * TypographyBlockquote component - A blockquote
 * @param props - TypographyBlockquote props
 * @returns A TypographyBlockquote component
 */
const TypographyBlockquote = React.forwardRef<
  HTMLQuoteElement,
  TypographyBlockquoteProps
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn("mt-6 border-l-2 pl-6 italic", className)}
    {...props}
  />
))
TypographyBlockquote.displayName = "TypographyBlockquote"

/**
 * TypographyCode component - Inline code
 * @param props - TypographyCode props
 * @returns A TypographyCode component
 */
const TypographyCode = React.forwardRef<
  HTMLElement,
  TypographyCodeProps
>(({ className, ...props }, ref) => (
  <code
    ref={ref}
    className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}
    {...props}
  />
))
TypographyCode.displayName = "TypographyCode"

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyCode,
}

