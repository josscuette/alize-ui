"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Checkbox } from "./checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { MaterialSymbol } from "../material-symbol"

// ============================================================================
// Types
// ============================================================================

export interface DataListAction {
  /** Label for the action */
  label: string
  /** Icon name (Material Symbol) */
  icon?: string
  /** Click handler */
  onClick: () => void
  /** Whether the action is destructive (shows in red) */
  destructive?: boolean
  /** Whether the action is disabled */
  disabled?: boolean
}

export interface DataListItemProps {
  /** Unique identifier for the item */
  id: string
  /** Main title text */
  title: string
  /** Secondary text below the title */
  subtitle?: string
  /** Thumbnail image URL or React node */
  thumbnail?: string | React.ReactNode
  /** Whether the item is expandable */
  expandable?: boolean
  /** Content to show when expanded */
  expandedContent?: React.ReactNode
  /** Whether the item is currently expanded (controlled) */
  expanded?: boolean
  /** Callback when expand state changes */
  onExpandChange?: (expanded: boolean) => void
  /** Actions to show in the dropdown menu */
  actions?: DataListAction[]
  /** Whether the item is selectable */
  selectable?: boolean
  /** Whether the item is selected (controlled) */
  selected?: boolean
  /** Callback when selection changes */
  onSelectChange?: (selected: boolean) => void
  /** Additional metadata to display on the right */
  metadata?: React.ReactNode
  /** Custom content to render instead of default layout */
  children?: React.ReactNode
  /** Additional class names */
  className?: string
  /** Click handler for the entire item (not the actions) */
  onClick?: () => void
}

export interface DataListGroupProps {
  /** Group title/header */
  title: string
  /** Icon for the group header */
  icon?: string
  /** Whether the group is collapsible */
  collapsible?: boolean
  /** Whether the group is collapsed (controlled) */
  collapsed?: boolean
  /** Callback when collapse state changes */
  onCollapseChange?: (collapsed: boolean) => void
  /** Items in the group */
  children: React.ReactNode
  /** Additional class names */
  className?: string
}

export interface DataListProps {
  /** Items or groups to render */
  children: React.ReactNode
  /** Density of the list items */
  density?: "default" | "comfortable" | "compact"
  /** Whether to show dividers between items */
  dividers?: boolean
  /** Whether the list has a border */
  bordered?: boolean
  /** Additional class names */
  className?: string
}

// ============================================================================
// Context
// ============================================================================

interface DataListContextValue {
  density: "default" | "comfortable" | "compact"
  dividers: boolean
}

const DataListContext = React.createContext<DataListContextValue>({
  density: "default",
  dividers: true,
})

const useDataList = () => React.useContext(DataListContext)

// ============================================================================
// DataList
// ============================================================================

export function DataList({
  children,
  density = "default",
  dividers = true,
  bordered = false,
  className,
}: DataListProps) {
  return (
    <DataListContext.Provider value={{ density, dividers }}>
      <div
        className={cn(
          "w-full",
          bordered && "rounded-lg border border-[var(--border)] overflow-hidden",
          className
        )}
        role="list"
      >
        {children}
      </div>
    </DataListContext.Provider>
  )
}

// ============================================================================
// DataListGroup
// ============================================================================

export function DataListGroup({
  title,
  icon,
  collapsible = false,
  collapsed: controlledCollapsed,
  onCollapseChange,
  children,
  className,
}: DataListGroupProps) {
  const [internalCollapsed, setInternalCollapsed] = React.useState(false)
  const collapsed = controlledCollapsed ?? internalCollapsed
  const { dividers } = useDataList()

  const handleToggle = () => {
    const newValue = !collapsed
    setInternalCollapsed(newValue)
    onCollapseChange?.(newValue)
  }

  return (
    <div className={cn("w-full", className)} role="group">
      {/* Group Header */}
      <div
        className={cn(
          "flex items-center gap-3 px-4 py-3",
          "bg-[var(--muted)] text-[var(--semantic-text-subdued)]",
          collapsible && "cursor-pointer hover:bg-[var(--accent)]",
          dividers && "border-b border-[var(--border)]"
        )}
        onClick={collapsible ? handleToggle : undefined}
        role={collapsible ? "button" : undefined}
        aria-expanded={collapsible ? !collapsed : undefined}
      >
        {collapsible && (
          <MaterialSymbol
            name={collapsed ? "chevron_right" : "expand_more"}
            size={20}
            weight={300}
            className="text-[var(--semantic-icon-subdued)]"
          />
        )}
        {icon && (
          <MaterialSymbol
            name={icon}
            size={20}
            weight={300}
            className="text-[var(--semantic-icon-subdued)]"
          />
        )}
        <span className="text-sm font-medium">{title}</span>
      </div>

      {/* Group Content */}
      {!collapsed && (
        <div role="list">
          {children}
        </div>
      )}
    </div>
  )
}

// ============================================================================
// DataListItem
// ============================================================================

export function DataListItem({
  id,
  title,
  subtitle,
  thumbnail,
  expandable = false,
  expandedContent,
  expanded: controlledExpanded,
  onExpandChange,
  actions,
  selectable = false,
  selected: controlledSelected,
  onSelectChange,
  metadata,
  children,
  className,
  onClick,
}: DataListItemProps) {
  const { density, dividers } = useDataList()
  const [internalExpanded, setInternalExpanded] = React.useState(false)
  const [internalSelected, setInternalSelected] = React.useState(false)
  
  const expanded = controlledExpanded ?? internalExpanded
  const selected = controlledSelected ?? internalSelected

  const handleExpandToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    const newValue = !expanded
    setInternalExpanded(newValue)
    onExpandChange?.(newValue)
  }

  const handleSelectToggle = (checked: boolean) => {
    setInternalSelected(checked)
    onSelectChange?.(checked)
  }

  const handleItemClick = () => {
    if (onClick) {
      onClick()
    } else if (expandable) {
      const newValue = !expanded
      setInternalExpanded(newValue)
      onExpandChange?.(newValue)
    }
  }

  // Density-based padding
  const paddingClass = {
    compact: "py-2 px-4",
    default: "py-3 px-4",
    comfortable: "py-4 px-4",
  }[density]

  // Thumbnail size based on density
  const thumbnailSize = {
    compact: "h-10 w-10",
    default: "h-12 w-12",
    comfortable: "h-16 w-16",
  }[density]

  return (
    <div
      className={cn(
        "w-full",
        dividers && "border-b border-[var(--border)] last:border-b-0",
        className
      )}
      role="listitem"
      data-selected={selected}
    >
      {/* Main Row */}
      <div
        className={cn(
          "flex items-center gap-3",
          paddingClass,
          "transition-colors",
          (onClick || expandable) && "cursor-pointer hover:bg-[var(--accent)]",
          selected && "bg-[var(--accent)]"
        )}
        onClick={handleItemClick}
      >
        {/* Expand Button */}
        {expandable && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={handleExpandToggle}
            aria-expanded={expanded}
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            <MaterialSymbol
              name={expanded ? "expand_more" : "chevron_right"}
              size={20}
              weight={300}
              className="text-[var(--semantic-icon-subdued)]"
            />
          </Button>
        )}

        {/* Selection Checkbox */}
        {selectable && (
          <Checkbox
            checked={selected}
            onCheckedChange={handleSelectToggle}
            onClick={(e) => e.stopPropagation()}
            aria-label={`Select ${title}`}
          />
        )}

        {/* Thumbnail */}
        {thumbnail && (
          typeof thumbnail === "string" ? (
            <div className={cn("shrink-0 overflow-hidden rounded-lg", thumbnailSize)}>
              <img
                src={thumbnail}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            thumbnail
          )
        )}

        {/* Content */}
        {children ? (
          <div className="flex-1 min-w-0">{children}</div>
        ) : (
          <div className="flex-1 min-w-0">
            <div className="font-medium text-[var(--foreground)] truncate">
              {title}
            </div>
            {subtitle && (
              <div className="text-sm text-[var(--semantic-text-subdued)] truncate">
                {subtitle}
              </div>
            )}
          </div>
        )}

        {/* Metadata */}
        {metadata && (
          <div className="shrink-0 text-sm text-[var(--semantic-text-subdued)]">
            {metadata}
          </div>
        )}

        {/* Actions Menu */}
        {actions && actions.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0"
                onClick={(e) => e.stopPropagation()}
                aria-label="Actions"
              >
                <MaterialSymbol
                  name="more_horiz"
                  size={20}
                  weight={300}
                  className="text-[var(--semantic-icon-subdued)]"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {actions.map((action, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    action.onClick()
                  }}
                  disabled={action.disabled}
                  className={cn(
                    action.destructive && "text-[var(--semantic-text-danger)]"
                  )}
                >
                  {action.icon && (
                    <MaterialSymbol
                      name={action.icon}
                      size={16}
                      weight={300}
                      className="mr-2"
                    />
                  )}
                  {action.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* Expanded Content */}
      {expandable && expanded && expandedContent && (
        <div
          className={cn(
            "border-t border-[var(--border)] bg-[var(--muted)]",
            paddingClass,
            "pl-14" // Indent to align with content
          )}
        >
          {expandedContent}
        </div>
      )}
    </div>
  )
}

// ============================================================================
// DataListEmpty
// ============================================================================

export interface DataListEmptyProps {
  /** Icon to show */
  icon?: string
  /** Title text */
  title?: string
  /** Description text */
  description?: string
  /** Action button */
  action?: React.ReactNode
  /** Additional class names */
  className?: string
}

export function DataListEmpty({
  icon = "inbox",
  title = "No items",
  description,
  action,
  className,
}: DataListEmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-12 px-4 text-center",
        className
      )}
    >
      <MaterialSymbol
        name={icon}
        size={48}
        weight={300}
        className="text-[var(--semantic-icon-subdued)] mb-4"
      />
      <div className="font-medium text-[var(--foreground)] mb-1">{title}</div>
      {description && (
        <div className="text-sm text-[var(--semantic-text-subdued)] mb-4 max-w-sm">
          {description}
        </div>
      )}
      {action}
    </div>
  )
}

// ============================================================================
// DataListSkeleton
// ============================================================================

export interface DataListSkeletonProps {
  /** Number of skeleton items to show */
  count?: number
  /** Whether to show thumbnail placeholders */
  showThumbnail?: boolean
  /** Additional class names */
  className?: string
}

export function DataListSkeleton({
  count = 3,
  showThumbnail = true,
  className,
}: DataListSkeletonProps) {
  const { density, dividers } = useDataList()
  
  const paddingClass = {
    compact: "py-2 px-4",
    default: "py-3 px-4",
    comfortable: "py-4 px-4",
  }[density]

  const thumbnailSize = {
    compact: "h-10 w-10",
    default: "h-12 w-12",
    comfortable: "h-16 w-16",
  }[density]

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center gap-3 animate-pulse",
            paddingClass,
            dividers && "border-b border-[var(--border)] last:border-b-0",
            className
          )}
        >
          {showThumbnail && (
            <div className={cn("shrink-0 rounded-lg bg-[var(--muted)]", thumbnailSize)} />
          )}
          <div className="flex-1 space-y-2">
            <div className="h-4 w-3/4 rounded bg-[var(--muted)]" />
            <div className="h-3 w-1/2 rounded bg-[var(--muted)]" />
          </div>
          <div className="h-8 w-8 rounded bg-[var(--muted)]" />
        </div>
      ))}
    </>
  )
}

