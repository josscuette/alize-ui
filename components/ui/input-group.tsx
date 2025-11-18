import * as React from "react"
import { cn } from "../../lib/utils"

function InputGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="input-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

export { InputGroup }

