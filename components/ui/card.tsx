import * as React from "react"

import { cn } from "../../lib/utils"

/**
 * Card component props interface
 * Extends native div element props
 */
export interface CardProps extends React.ComponentProps<"div"> {}

/**
 * CardHeader component props interface
 * Extends native div element props
 */
export interface CardHeaderProps extends React.ComponentProps<"div"> {}

/**
 * CardTitle component props interface
 * Extends native div element props
 */
export interface CardTitleProps extends React.ComponentProps<"div"> {}

/**
 * CardDescription component props interface
 * Extends native div element props
 */
export interface CardDescriptionProps extends React.ComponentProps<"div"> {}

/**
 * CardAction component props interface
 * Extends native div element props
 */
export interface CardActionProps extends React.ComponentProps<"div"> {}

/**
 * CardContent component props interface
 * Extends native div element props
 */
export interface CardContentProps extends React.ComponentProps<"div"> {}

/**
 * CardFooter component props interface
 * Extends native div element props
 */
export interface CardFooterProps extends React.ComponentProps<"div"> {}

/**
 * Card component - A container for content with header, body, and footer sections
 * 
 * Provides a structured layout for displaying content in cards.
 * Use CardHeader, CardTitle, CardDescription, CardContent, and CardFooter as children.
 * 
 * @param props - Card props including standard HTML div attributes
 * @returns A card container element
 * 
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Title</CardTitle>
 *     <CardDescription>Description</CardDescription>
 *   </CardHeader>
 *   <CardContent>Content</CardContent>
 *   <CardFooter>Footer</CardFooter>
 * </Card>
 * ```
 */
function Card({ className, ...props }: CardProps): React.ReactElement {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * CardHeader component - The header section of a Card
 * 
 * @param props - CardHeader props including standard HTML div attributes
 * @returns A card header element
 */
function CardHeader({ className, ...props }: CardHeaderProps): React.ReactElement {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

/**
 * CardTitle component - The title within a CardHeader
 * 
 * @param props - CardTitle props including standard HTML div attributes
 * @returns A card title element
 */
/**
 * CardTitle component - The title within a CardHeader
 * 
 * @param props - CardTitle props including standard HTML div attributes
 * @returns A card title element
 */
function CardTitle({ className, ...props }: CardTitleProps): React.ReactElement {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * CardDescription component - The description within a CardHeader
 * 
 * @param props - CardDescription props including standard HTML div attributes
 * @returns A card description element
 */
/**
 * CardDescription component - The description within a CardHeader
 * 
 * @param props - CardDescription props including standard HTML div attributes
 * @returns A card description element
 */
function CardDescription({ className, ...props }: CardDescriptionProps): React.ReactElement {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * CardAction component - An action button area within a CardHeader
 * 
 * @param props - CardAction props including standard HTML div attributes
 * @returns A card action element
 */
/**
 * CardAction component - An action button area within a CardHeader
 * 
 * @param props - CardAction props including standard HTML div attributes
 * @returns A card action element
 */
function CardAction({ className, ...props }: CardActionProps): React.ReactElement {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * CardContent component - The main content section of a Card
 * 
 * @param props - CardContent props including standard HTML div attributes
 * @returns A card content element
 */
/**
 * CardContent component - The main content section of a Card
 * 
 * @param props - CardContent props including standard HTML div attributes
 * @returns A card content element
 */
function CardContent({ className, ...props }: CardContentProps): React.ReactElement {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

/**
 * CardFooter component - The footer section of a Card
 * 
 * @param props - CardFooter props including standard HTML div attributes
 * @returns A card footer element
 */
/**
 * CardFooter component - The footer section of a Card
 * 
 * @param props - CardFooter props including standard HTML div attributes
 * @returns A card footer element
 */
function CardFooter({ className, ...props }: CardFooterProps): React.ReactElement {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
