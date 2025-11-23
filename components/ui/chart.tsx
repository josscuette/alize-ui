"use client"

import * as React from "react"
import { ResponsiveContainer } from "recharts"
import { cn } from "../../lib/utils"

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement
}

export function Chart({ className, children, ...props }: ChartProps): React.ReactElement {
  return (
    <div className={cn("w-full", className)} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  )
}

