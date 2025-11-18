import * as React from "react"
import { cn } from "../../lib/utils"

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean
}

function Item({
  className,
  selected = false,
  ...props
}: ItemProps) {
  return (
    <div
      data-slot="item"
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
        selected && "bg-accent text-accent-foreground",
        "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Item }

