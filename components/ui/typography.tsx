import * as React from "react"
import { cn } from "@/lib/utils"

const TypographyH1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn("scroll-m-20 text-4xl font-normal tracking-tight", className)}
    {...props}
  />
))
TypographyH1.displayName = "TypographyH1"

const TypographyH2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("scroll-m-20 text-3xl font-normal tracking-tight", className)}
    {...props}
  />
))
TypographyH2.displayName = "TypographyH2"

const TypographyH3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("scroll-m-20 text-2xl font-normal tracking-tight", className)}
    {...props}
  />
))
TypographyH3.displayName = "TypographyH3"

const TypographyH4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("scroll-m-20 text-xl font-normal tracking-tight", className)}
    {...props}
  />
))
TypographyH4.displayName = "TypographyH4"

const TypographyP = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("leading-7", className)}
    {...props}
  />
))
TypographyP.displayName = "TypographyP"

const TypographyBlockquote = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn("mt-6 border-l-2 pl-6 italic", className)}
    {...props}
  />
))
TypographyBlockquote.displayName = "TypographyBlockquote"

const TypographyCode = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
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

