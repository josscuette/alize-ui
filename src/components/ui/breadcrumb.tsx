import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "../../lib/utils"
import { animation } from "../../foundation"

/**
 * Breadcrumb component props interface
 * Extends native nav element props
 */
export interface BreadcrumbProps extends React.ComponentProps<"nav"> {}

/**
 * BreadcrumbList component props interface
 * Extends native ol element props
 */
export interface BreadcrumbListProps extends React.ComponentProps<"ol"> {}

/**
 * BreadcrumbItem component props interface
 * Extends native li element props
 */
export interface BreadcrumbItemProps extends React.ComponentProps<"li"> {}

/**
 * BreadcrumbLink component props interface
 * Extends native a element props and adds asChild prop
 */
export interface BreadcrumbLinkProps extends React.ComponentProps<"a"> {
  asChild?: boolean
}

/**
 * BreadcrumbPage component props interface
 * Extends native span element props
 */
export interface BreadcrumbPageProps extends React.ComponentProps<"span"> {}

/**
 * BreadcrumbSeparator component props interface
 * Extends native li element props
 */
export interface BreadcrumbSeparatorProps extends React.ComponentProps<"li"> {}

/**
 * BreadcrumbEllipsis component props interface
 * Extends native span element props
 */
export interface BreadcrumbEllipsisProps extends React.ComponentProps<"span"> {}

/**
 * Breadcrumb component - A navigation breadcrumb trail
 * 
 * Displays a breadcrumb navigation showing the current page's location in the hierarchy.
 * 
 * @param props - Breadcrumb props including standard HTML nav attributes
 * @returns A breadcrumb navigation element
 * 
 * @example
 * ```tsx
 * <Breadcrumb>
 *   <BreadcrumbList>
 *     <BreadcrumbItem>
 *       <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *     </BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem>
 *       <BreadcrumbPage>Current Page</BreadcrumbPage>
 *     </BreadcrumbItem>
 *   </BreadcrumbList>
 * </Breadcrumb>
 * ```
 */
function Breadcrumb({ ...props }: BreadcrumbProps): React.ReactElement {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

/**
 * BreadcrumbList component - The ordered list container for breadcrumb items
 * @param props - BreadcrumbList props
 * @returns A BreadcrumbList component
 */
function BreadcrumbList({ className, ...props }: BreadcrumbListProps): React.ReactElement {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

/**
 * BreadcrumbItem component - An individual breadcrumb item
 * @param props - BreadcrumbItem props
 * @returns A BreadcrumbItem component
 */
function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps): React.ReactElement {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

/**
 * BreadcrumbLink component - A link within a breadcrumb item
 * @param props - BreadcrumbLink props including asChild
 * @returns A BreadcrumbLink component
 */
function BreadcrumbLink({
  asChild,
  className,
  ...props
}: BreadcrumbLinkProps): React.ReactElement {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        // Hover state
        "hover:text-foreground",
        // Transition
        animation.transitionColors,
        className
      )}
      {...props}
    />
  )
}

/**
 * BreadcrumbPage component - The current page indicator in a breadcrumb
 * @param props - BreadcrumbPage props
 * @returns A BreadcrumbPage component
 */
function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps): React.ReactElement {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

/**
 * BreadcrumbSeparator component - A separator between breadcrumb items
 * @param props - BreadcrumbSeparator props
 * @returns A BreadcrumbSeparator component
 */
function BreadcrumbSeparator({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps): React.ReactElement {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("inline-flex items-center [&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

/**
 * BreadcrumbEllipsis component - An ellipsis indicator for truncated breadcrumbs
 * @param props - BreadcrumbEllipsis props
 * @returns A BreadcrumbEllipsis component
 */
function BreadcrumbEllipsis({
  className,
  ...props
}: BreadcrumbEllipsisProps): React.ReactElement {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
