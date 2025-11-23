"use client"

import * as React from "react"

import { cn } from "../../lib/utils"

/**
 * Table component props interface
 * Extends native table element props
 */
export interface TableProps extends React.ComponentProps<"table"> {}

/**
 * TableHeader component props interface
 * Extends native thead element props
 */
export interface TableHeaderProps extends React.ComponentProps<"thead"> {}

/**
 * TableBody component props interface
 * Extends native tbody element props
 */
export interface TableBodyProps extends React.ComponentProps<"tbody"> {}

/**
 * TableFooter component props interface
 * Extends native tfoot element props
 */
export interface TableFooterProps extends React.ComponentProps<"tfoot"> {}

/**
 * TableRow component props interface
 * Extends native tr element props
 */
export interface TableRowProps extends React.ComponentProps<"tr"> {}

/**
 * TableHead component props interface
 * Extends native th element props
 */
export interface TableHeadProps extends React.ComponentProps<"th"> {}

/**
 * TableCell component props interface
 * Extends native td element props
 */
export interface TableCellProps extends React.ComponentProps<"td"> {}

/**
 * TableCaption component props interface
 * Extends native caption element props
 */
export interface TableCaptionProps extends React.ComponentProps<"caption"> {}

/**
 * Table component - A data table
 * 
 * Provides a structured table for displaying tabular data.
 * 
 * @param props - Table props including standard HTML table attributes
 * @returns A table element wrapped in a scrollable container
 * 
 * @example
 * ```tsx
 * <Table>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Name</TableHead>
 *       <TableHead>Email</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *       <TableCell>john@example.com</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
function Table({ className, ...props }: TableProps): React.ReactElement {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

/**
 * TableHeader component - The header section of the table
 * @param props - TableHeader props
 * @returns A TableHeader component
 */
function TableHeader({ className, ...props }: TableHeaderProps): React.ReactElement {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

/**
 * TableBody component - The body section of the table
 * @param props - TableBody props
 * @returns A TableBody component
 */
function TableBody({ className, ...props }: TableBodyProps): React.ReactElement {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

/**
 * TableFooter component - The footer section of the table
 * @param props - TableFooter props
 * @returns A TableFooter component
 */
function TableFooter({ className, ...props }: TableFooterProps): React.ReactElement {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * TableRow component - A row in the table
 * @param props - TableRow props
 * @returns A TableRow component
 */
function TableRow({ className, ...props }: TableRowProps): React.ReactElement {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

/**
 * TableHead component - A header cell in the table
 * @param props - TableHead props
 * @returns A TableHead component
 */
function TableHead({ className, ...props }: TableHeadProps): React.ReactElement {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-normal whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * TableCell component - A data cell in the table
 * @param props - TableCell props
 * @returns A TableCell component
 */
function TableCell({ className, ...props }: TableCellProps): React.ReactElement {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * TableCaption component - A caption for the table
 * @param props - TableCaption props
 * @returns A TableCaption component
 */
function TableCaption({
  className,
  ...props
}: TableCaptionProps): React.ReactElement {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
