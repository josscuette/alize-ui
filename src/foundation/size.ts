/**
 * Size presets
 * Canonical source for standardized component sizes
 * Includes height, padding, font-size, icon-size selectors, and border radius
 */

import { cn } from "../lib/utils"
import { radius } from "./radius"

export const size = {
  // Extra small
  xs: cn(
    "h-5 px-1 gap-1 pt-px",
    "text-xs leading-none",
    "[&_svg]:size-3 [&_.material-symbols-outlined]:!text-[12px]",
    radius.sm // rounded-[4px]
  ),
  
  // Small
  sm: cn(
    "h-7 px-2 gap-2",
    "text-sm leading-5",
    "[&_svg]:size-4 [&_.material-symbols-outlined]:!text-[16px]",
    radius.md // rounded-md
  ),
  
  // Medium (default)
  md: cn(
    "h-9 px-3 gap-2",
    "text-sm leading-5",
    "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]",
    radius.md // rounded-md
  ),
  
  // Large
  lg: cn(
    "h-11 px-4 gap-2",
    "text-base leading-6",
    "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]",
    radius.md // rounded-md
  ),
  
  // Icon-only sizes (square)
  iconXs: cn(
    "size-5",
    "[&_svg]:size-3 [&_.material-symbols-outlined]:!text-[12px]",
    radius.sm // rounded-[4px]
  ),
  
  iconSm: cn(
    "size-7",
    "[&_svg]:size-4 [&_.material-symbols-outlined]:!text-[16px]",
    radius.md // rounded-md
  ),
  
  iconMd: cn(
    "size-9",
    "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]",
    radius.md // rounded-md
  ),
  
  iconLg: cn(
    "size-11",
    "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]",
    radius.md // rounded-md
  ),
} as const

