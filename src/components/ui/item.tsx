import * as React from "react"
import { cn } from "../../lib/utils"
import { states } from "../../foundation"

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean
}

function Item({
  className,
  selected = false,
  ...props
}: ItemProps): React.ReactElement {
  return (
    <div
      data-slot="item"
      className={cn(
        // Layout
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
        // Selected state
        selected && "bg-semantic-surface-overlays-level1 text-foreground",
        // Hover state using foundation
        states.hoverAccent,
        // Pressed state
        states.pressed,
        className
      )}
      {...props}
    />
  )
}

export { Item }

