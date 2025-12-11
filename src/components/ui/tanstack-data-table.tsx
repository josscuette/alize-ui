"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  ColumnPinningState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  RowSelectionState,
  ColumnOrderState,
  Column,
  Header,
  Cell,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"
import { Button } from "./button"
import { Input } from "./input"
import { Checkbox } from "./checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"
import { cn } from "../../lib/utils"
import { MaterialSymbol } from "../material-symbol"

// Re-export ColumnDef for convenience
export type { ColumnDef, Column }

/**
 * Props for the TanStackDataTable component
 */
export interface TanStackDataTableProps<TData, TValue> {
  /** Column definitions */
  columns: ColumnDef<TData, TValue>[]
  /** Data array */
  data: TData[]
  /** Enable row selection */
  enableRowSelection?: boolean
  /** Enable column filtering */
  enableFiltering?: boolean
  /** Placeholder for the filter input */
  filterPlaceholder?: string
  /** Column to filter by (default: first column) */
  filterColumn?: string
  /** Enable global filter (search all columns) */
  enableGlobalFilter?: boolean
  /** Enable pagination */
  enablePagination?: boolean
  /** Page size options */
  pageSizeOptions?: number[]
  /** Initial page size (default: 10) */
  pageSize?: number
  /** Enable column visibility toggle */
  enableColumnVisibility?: boolean
  /** Enable column reordering via drag */
  enableColumnReordering?: boolean
  /** Enable column pinning (sticky columns on left) */
  enableColumnPinning?: boolean
  /** Initially pinned column IDs (pinned to left) */
  pinnedColumns?: string[]
  /** Table variant style */
  variant?: "bordered" | "plain"
  /** Row density - controls row height and padding */
  density?: "default" | "comfortable"
  /** Custom class name */
  className?: string
  /** Message when no data */
  emptyMessage?: string
  /** Callback when row selection changes */
  onRowSelectionChange?: (selectedRows: TData[]) => void
  /** Show toolbar */
  showToolbar?: boolean
}

/**
 * Create a selection column for row selection
 */
export function createSelectionColumn<TData>(): ColumnDef<TData> {
  return {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 40,
  }
}

/**
 * Create a sortable header component
 */
export function SortableHeader({
  column,
  children,
  className,
}: {
  column: { getIsSorted: () => false | "asc" | "desc"; toggleSorting: (desc?: boolean) => void; getCanSort: () => boolean }
  children: React.ReactNode
  className?: string
}) {
  const sorted = column.getIsSorted()
  
  if (!column.getCanSort()) {
    return <span className={className}>{children}</span>
  }
  
  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn("-ml-2 h-8 px-2 hover:bg-transparent", className)}
      onClick={() => column.toggleSorting(sorted === "asc")}
    >
      {children}
      <MaterialSymbol
        name={sorted === "asc" ? "arrow_upward" : sorted === "desc" ? "arrow_downward" : "unfold_more"}
        size={16}
        weight={300}
        className={cn(
          "ml-2",
          sorted ? "text-[var(--semantic-icon-interaction-default)]" : "text-[var(--semantic-icon-subdued)]"
        )}
      />
    </Button>
  )
}

/**
 * Column visibility and pinning dropdown
 */
function ColumnVisibilityDropdown<TData>({
  table,
  enablePinning = false,
}: {
  table: ReturnType<typeof useReactTable<TData>>
  enablePinning?: boolean
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto">
          <MaterialSymbol name="view_column" size={20} weight={300} className="mr-2" />
          Columns
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            const isPinned = column.getIsPinned()
            return (
              <div key={column.id} className="flex items-center justify-between px-2 py-1.5">
                <DropdownMenuCheckboxItem
                  className="capitalize flex-1"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
                {enablePinning && column.getIsVisible() && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 ml-1"
                    onClick={() => column.pin(isPinned ? false : 'left')}
                    title={isPinned ? "Unpin column" : "Pin column to left"}
                  >
                    <MaterialSymbol 
                      name={isPinned ? "push_pin" : "push_pin"} 
                      size={14} 
                      weight={300}
                      className={isPinned ? "text-[var(--semantic-icon-interaction-default)]" : "text-[var(--semantic-icon-subdued)]"}
                      fill={isPinned ? 1 : 0}
                    />
                  </Button>
                )}
              </div>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/**
 * Page size selector
 */
function PageSizeSelector({
  pageSize,
  setPageSize,
  options,
}: {
  pageSize: number
  setPageSize: (size: number) => void
  options: number[]
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-[var(--semantic-text-subdued)]">Rows per page</span>
      <Select
        value={String(pageSize)}
        onValueChange={(value) => setPageSize(Number(value))}
      >
        <SelectTrigger className="h-8 w-[70px]">
          <SelectValue placeholder={pageSize} />
        </SelectTrigger>
        <SelectContent side="top">
          {options.map((size) => (
            <SelectItem key={size} value={String(size)}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

/**
 * TanStack Data Table with Alize theming
 *
 * A flexible data table component built on TanStack Table that uses
 * existing shadcn/ui components for a consistent, tokenized design.
 * 
 * Features:
 * - Sorting (single & multi-column)
 * - Filtering (column & global)
 * - Pagination with page size selector
 * - Row selection
 * - Column visibility toggle
 * - Column reordering (drag & drop)
 * - Fully keyboard accessible
 *
 * @example
 * ```tsx
 * import { TanStackDataTable, ColumnDef } from 'alize-ui';
 *
 * const columns: ColumnDef<User>[] = [
 *   { accessorKey: "name", header: "Name" },
 *   { accessorKey: "email", header: "Email" },
 * ];
 *
 * <TanStackDataTable
 *   columns={columns}
 *   data={users}
 *   enablePagination
 *   enableFiltering
 * />
 * ```
 */
export function TanStackDataTable<TData, TValue>({
  columns,
  data,
  enableRowSelection = false,
  enableFiltering = false,
  filterPlaceholder = "Filter...",
  filterColumn,
  enableGlobalFilter = false,
  enablePagination = false,
  pageSizeOptions = [5, 10, 20, 50],
  pageSize = 10,
  enableColumnVisibility = false,
  enableColumnReordering = false,
  enableColumnPinning = false,
  pinnedColumns = [],
  variant = "bordered",
  density = "default",
  className,
  emptyMessage = "No results.",
  onRowSelectionChange,
  showToolbar,
}: TanStackDataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [globalFilter, setGlobalFilter] = React.useState("")
  // Memoize pinnedColumns to avoid infinite loops
  const pinnedColumnsKey = pinnedColumns.join(',')
  
  const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>(() => ({
    left: enableColumnPinning ? pinnedColumns : [],
    right: [],
  }))

  // Sync pinning state when props change (using string key to avoid reference issues)
  React.useEffect(() => {
    const newPinned = enableColumnPinning ? pinnedColumnsKey.split(',').filter(Boolean) : []
    setColumnPinning({ left: newPinned, right: [] })
  }, [enableColumnPinning, pinnedColumnsKey])
  // Column order for drag-and-drop reordering
  const getColumnIds = React.useCallback(() => 
    columns.map((c) => {
      const col = c as { accessorKey?: string; id?: string }
      return col.id || col.accessorKey || ""
    }).filter(Boolean),
    [columns]
  )
  
  const [columnOrder, setColumnOrder] = React.useState<ColumnOrderState>(getColumnIds)
  
  // Update column order when columns change
  React.useEffect(() => {
    if (!enableColumnReordering) {
      setColumnOrder(getColumnIds())
    }
  }, [columns, enableColumnReordering, getColumnIds])

  // Determine which column to filter
  const filterColumnId = filterColumn || (columns[0] as { accessorKey?: string })?.accessorKey

  // Determine if we should show toolbar
  const shouldShowToolbar = showToolbar ?? (enableFiltering || enableGlobalFilter || enableColumnVisibility)

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    ...(enablePagination && { getPaginationRowModel: getPaginationRowModel() }),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onColumnOrderChange: setColumnOrder,
    onGlobalFilterChange: setGlobalFilter,
    onColumnPinningChange: setColumnPinning,
    enableRowSelection,
    enableColumnPinning,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      columnOrder,
      globalFilter,
      columnPinning,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
  })

  // Call onRowSelectionChange when selection changes
  React.useEffect(() => {
    if (onRowSelectionChange) {
      const selectedRows = table.getFilteredSelectedRowModel().rows.map((row) => row.original)
      onRowSelectionChange(selectedRows)
    }
  }, [rowSelection, onRowSelectionChange, table])

  // Drag and drop for column reordering
  const [draggedColumn, setDraggedColumn] = React.useState<string | null>(null)

  const handleDragStart = (columnId: string) => {
    if (enableColumnReordering) {
      setDraggedColumn(columnId)
    }
  }

  const handleDragOver = (e: React.DragEvent, columnId: string) => {
    e.preventDefault()
    if (draggedColumn && draggedColumn !== columnId && enableColumnReordering) {
      const newOrder = [...columnOrder]
      const draggedIndex = newOrder.indexOf(draggedColumn)
      const targetIndex = newOrder.indexOf(columnId)
      newOrder.splice(draggedIndex, 1)
      newOrder.splice(targetIndex, 0, draggedColumn)
      setColumnOrder(newOrder)
    }
  }

  const handleDragEnd = () => {
    setDraggedColumn(null)
  }

  return (
    <div data-slot="tanstack-data-table" className={cn("w-full space-y-4", className)}>
      {/* Toolbar - fixed width, no scroll */}
      {shouldShowToolbar && (
        <div className="flex items-center gap-4 w-full">
          {/* Global Filter */}
          {enableGlobalFilter && (
            <Input
              placeholder="Search all columns..."
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="max-w-sm"
            />
          )}
          
          {/* Column Filter */}
          {enableFiltering && !enableGlobalFilter && filterColumnId && (
            <Input
              placeholder={filterPlaceholder}
              value={(table.getColumn(filterColumnId)?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn(filterColumnId)?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
          )}

          {/* Column Visibility */}
          {enableColumnVisibility && <ColumnVisibilityDropdown table={table} enablePinning={enableColumnPinning} />}
        </div>
      )}

      {/* Table container - horizontal scroll only on this element */}
      <div className={cn(
        "w-full overflow-x-auto",
        variant === "bordered" && "rounded-md border border-[var(--border)]"
      )}>
        <Table className="w-max min-w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => {
              // Get pinned and unpinned headers separately
              const leftPinnedHeaders = headerGroup.headers.filter(h => h.column.getIsPinned() === 'left')
              const unpinnedHeaders = headerGroup.headers.filter(h => !h.column.getIsPinned())
              const rightPinnedHeaders = headerGroup.headers.filter(h => h.column.getIsPinned() === 'right')
              
              // Total columns for first/last detection
              const allHeaders = [...leftPinnedHeaders, ...unpinnedHeaders, ...rightPinnedHeaders]
              
              // Render function for a header
              const renderHeader = (header: typeof headerGroup.headers[0], pinnedIndex?: number, isFirstUnpinned?: boolean, isFirst?: boolean, isLast?: boolean) => {
                const isPinned = header.column.getIsPinned()
                // Calculate left offset for pinned columns
                let leftOffset = 0
                if (isPinned === 'left' && pinnedIndex !== undefined) {
                  for (let i = 0; i < pinnedIndex; i++) {
                    leftOffset += leftPinnedHeaders[i].getSize()
                  }
                }
                
                return (
                  <TableHead
                    key={header.id}
                    style={{ 
                      width: header.getSize(),
                      ...(isPinned === 'left' ? {
                        position: 'sticky' as const,
                        left: leftOffset,
                        zIndex: 2,
                      } : {}),
                    }}
                    draggable={enableColumnReordering && header.column.getCanHide() && !isPinned}
                    onDragStart={() => handleDragStart(header.column.id)}
                    onDragOver={(e) => handleDragOver(e, header.column.id)}
                    onDragEnd={handleDragEnd}
                    className={cn(
                      enableColumnReordering && header.column.getCanHide() && !isPinned && "cursor-grab",
                      draggedColumn === header.column.id && "opacity-50",
                      isPinned && "bg-[var(--card)]",
                      isPinned === 'left' && pinnedIndex === leftPinnedHeaders.length - 1 && "shadow-[inset_-3px_0_0_0_var(--border)]",
                      isFirstUnpinned && "pl-8",
                      // Bordered variant: extra padding on first/last columns
                      variant === "bordered" && isFirst && "pl-4",
                      variant === "bordered" && isLast && "pr-4",
                      // Density
                      density === "comfortable" && "py-4"
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              }
              
              return (
                <TableRow key={headerGroup.id}>
                  {leftPinnedHeaders.map((header, idx) => renderHeader(header, idx, false, idx === 0, idx === allHeaders.length - 1))}
                  {unpinnedHeaders.map((header, idx) => renderHeader(
                    header, 
                    undefined, 
                    idx === 0 && leftPinnedHeaders.length > 0,
                    leftPinnedHeaders.length === 0 && idx === 0,
                    rightPinnedHeaders.length === 0 && idx === unpinnedHeaders.length - 1
                  ))}
                  {rightPinnedHeaders.map((header, idx) => renderHeader(header, undefined, false, false, idx === rightPinnedHeaders.length - 1))}
                </TableRow>
              )
            })}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                // Get pinned and unpinned cells separately
                const allCells = row.getVisibleCells()
                const leftPinnedCells = allCells.filter(c => c.column.getIsPinned() === 'left')
                const unpinnedCells = allCells.filter(c => !c.column.getIsPinned())
                const rightPinnedCells = allCells.filter(c => c.column.getIsPinned() === 'right')
                
                // Total cells for first/last detection
                const sortedCells = [...leftPinnedCells, ...unpinnedCells, ...rightPinnedCells]
                
                // Render function for a cell
                const renderCell = (cell: typeof allCells[0], pinnedIndex?: number, isFirstUnpinned?: boolean, isFirst?: boolean, isLast?: boolean) => {
                  const isPinned = cell.column.getIsPinned()
                  // Calculate left offset for pinned columns
                  let leftOffset = 0
                  if (isPinned === 'left' && pinnedIndex !== undefined) {
                    for (let i = 0; i < pinnedIndex; i++) {
                      leftOffset += leftPinnedCells[i].column.getSize()
                    }
                  }
                  
                  return (
                    <TableCell 
                      key={cell.id}
                      style={{
                        width: cell.column.getSize(),
                        ...(isPinned === 'left' ? {
                          position: 'sticky' as const,
                          left: leftOffset,
                          zIndex: 1,
                        } : {}),
                      }}
                      className={cn(
                        isPinned && "bg-[var(--card)]",
                        isPinned === 'left' && pinnedIndex === leftPinnedCells.length - 1 && "shadow-[inset_-3px_0_0_0_var(--border)]",
                        isFirstUnpinned && "pl-8",
                        // Bordered variant: extra padding on first/last columns
                        variant === "bordered" && isFirst && "pl-4",
                        variant === "bordered" && isLast && "pr-4",
                        // Density
                        density === "comfortable" && "py-4"
                      )}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  )
                }
                
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {leftPinnedCells.map((cell, idx) => renderCell(cell, idx, false, idx === 0, idx === sortedCells.length - 1))}
                    {unpinnedCells.map((cell, idx) => renderCell(
                      cell, 
                      undefined, 
                      idx === 0 && leftPinnedCells.length > 0,
                      leftPinnedCells.length === 0 && idx === 0,
                      rightPinnedCells.length === 0 && idx === unpinnedCells.length - 1
                    ))}
                    {rightPinnedCells.map((cell, idx) => renderCell(cell, undefined, false, false, idx === rightPinnedCells.length - 1))}
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-[var(--semantic-text-subdued)]">
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Footer: Pagination & Selection Info - fixed width, no scroll */}
      {(enablePagination || enableRowSelection) && (
        <div className="flex items-center justify-between w-full">
          {/* Selection count */}
          {enableRowSelection ? (
            <div className="text-sm text-[var(--semantic-text-subdued)]">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
          ) : (
            <div />
          )}
          
          {/* Pagination controls */}
          {enablePagination && (
            <div className="flex items-center gap-6">
              <PageSizeSelector
                pageSize={table.getState().pagination.pageSize}
                setPageSize={table.setPageSize}
                options={pageSizeOptions}
              />
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-[var(--semantic-text-subdued)]">
                  Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </span>
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                  >
                    <MaterialSymbol name="first_page" size={20} weight={300} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                    <MaterialSymbol name="chevron_left" size={20} weight={300} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    <MaterialSymbol name="chevron_right" size={20} weight={300} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                  >
                    <MaterialSymbol name="last_page" size={20} weight={300} />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default TanStackDataTable
