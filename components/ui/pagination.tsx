import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "../../lib/utils"
import { Button, buttonVariants } from "./button"

/**
 * Pagination component props interface
 * Extends native nav element props
 */
export interface PaginationProps extends React.ComponentProps<"nav"> {}

/**
 * PaginationContent component props interface
 * Extends native ul element props
 */
export interface PaginationContentProps extends React.ComponentProps<"ul"> {}

/**
 * PaginationItem component props interface
 * Extends native li element props
 */
export interface PaginationItemProps extends React.ComponentProps<"li"> {}

/**
 * PaginationLink component props interface
 * Extends native a element props and adds isActive and size props
 */
export interface PaginationLinkProps extends React.ComponentProps<"a"> {
  isActive?: boolean
  size?: React.ComponentProps<typeof Button>["size"]
}

/**
 * PaginationPrevious component props interface
 * Extends PaginationLink props
 */
export interface PaginationPreviousProps extends PaginationLinkProps {}

/**
 * PaginationNext component props interface
 * Extends PaginationLink props
 */
export interface PaginationNextProps extends PaginationLinkProps {}

/**
 * PaginationEllipsis component props interface
 * Extends native span element props
 */
export interface PaginationEllipsisProps extends React.ComponentProps<"span"> {}

/**
 * Pagination component - A pagination navigation
 * 
 * Provides navigation controls for paginated content.
 * 
 * @param props - Pagination props including standard HTML nav attributes
 * @returns A pagination navigation element
 * 
 * @example
 * ```tsx
 * <Pagination>
 *   <PaginationContent>
 *     <PaginationItem>
 *       <PaginationPrevious href="/page/1" />
 *     </PaginationItem>
 *     <PaginationItem>
 *       <PaginationLink href="/page/2" isActive>2</PaginationLink>
 *     </PaginationItem>
 *     <PaginationItem>
 *       <PaginationNext href="/page/3" />
 *     </PaginationItem>
 *   </PaginationContent>
 * </Pagination>
 * ```
 */
function Pagination({ className, ...props }: PaginationProps): React.ReactElement {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

/**
 * PaginationContent component - The container for pagination items
 * @param props - PaginationContent props
 * @returns A PaginationContent component
 */
function PaginationContent({
  className,
  ...props
}: PaginationContentProps): React.ReactElement {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

/**
 * PaginationItem component - An individual pagination item
 * @param props - PaginationItem props
 * @returns A PaginationItem component
 */
function PaginationItem({ ...props }: PaginationItemProps): React.ReactElement {
  return <li data-slot="pagination-item" {...props} />
}

/**
 * PaginationLink component - A link to a specific page
 * @param props - PaginationLink props including isActive and size
 * @returns A PaginationLink component
 */
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps): React.ReactElement {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

/**
 * PaginationPrevious component - A link to the previous page
 * @param props - PaginationPrevious props
 * @returns A PaginationPrevious component
 */
function PaginationPrevious({
  className,
  ...props
}: PaginationPreviousProps): React.ReactElement {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

/**
 * PaginationNext component - A link to the next page
 * @param props - PaginationNext props
 * @returns A PaginationNext component
 */
function PaginationNext({
  className,
  ...props
}: PaginationNextProps): React.ReactElement {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

/**
 * PaginationEllipsis component - An ellipsis indicator for truncated pages
 * @param props - PaginationEllipsis props
 * @returns A PaginationEllipsis component
 */
function PaginationEllipsis({
  className,
  ...props
}: PaginationEllipsisProps): React.ReactElement {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
