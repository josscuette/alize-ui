import * as React from "react"
import { cn } from "@/lib/utils"

export interface MaterialSymbolProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Name of the Material Symbol icon (e.g., "home", "arrow_forward", "settings")
   * Must match the icon name from Material Symbols library
   */
  name: string
  /**
   * Size of the icon in pixels (default: 24)
   */
  size?: number
  /**
   * Fill style: 0 = outlined, 1 = filled (default: 0)
   */
  fill?: 0 | 1
  /**
   * Weight: 100-700 (default: 300)
   */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
  /**
   * Grade: -25 to 200 (default: 0)
   */
  grade?: number
  /**
   * Optical size: 20-48 (default: 24)
   */
  opticalSize?: number
}

/**
 * MaterialSymbol component for rendering Material Symbols icons
 * 
 * @example
 * <MaterialSymbol name="home" size={24} />
 * <MaterialSymbol name="arrow_forward" size={20} fill={1} />
 */
export function MaterialSymbol({
  name,
  size,
  fill = 0,
  weight = 300,
  grade = 0,
  opticalSize,
  className,
  style,
  ...props
}: MaterialSymbolProps) {
  // Use default opticalSize (24) if not specified
  const finalOpticalSize = opticalSize ?? 24
  
  return (
    <span
      className={cn("material-symbols-outlined", className)}
      style={{
        ...(size !== undefined && { fontSize: `${size}px` }),
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${finalOpticalSize}`,
        ...style,
      }}
      {...props}
    >
      {name}
    </span>
  )
}

