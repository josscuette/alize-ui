import * as React from "react"
import { cn } from "../../lib/utils"

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  icon?: React.ReactNode
}

function Empty({
  className,
  title = "No results found",
  description,
  icon,
  children,
  ...props
}: EmptyProps): React.ReactElement {
  return (
    <div
      data-slot="empty"
      className={cn("flex flex-col items-center justify-center py-12 text-center", className)}
      {...props}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-lg font-normal">{title}</h3>
      {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}

export { Empty }

