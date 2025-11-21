/**
 * Size presets
 * Canonical source for standardized component sizes
 * Includes height, padding, font-size, and icon-size selectors
 */

import { cn } from "../lib/utils"

export const size = {
  // Extra small
  xs: cn(
    "h-5 px-1 gap-1",
    "text-xs leading-4",
    "[&_svg]:size-3 [&_.material-symbols-outlined]:!text-[12px]"
  ),
  
  // Small
  sm: cn(
    "h-7 px-2 gap-2",
    "text-sm leading-5",
    "[&_svg]:size-4 [&_.material-symbols-outlined]:!text-[16px]"
  ),
  
  // Medium (default)
  md: cn(
    "h-9 px-3 gap-2",
    "text-sm leading-5",
    "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]"
  ),
  
  // Large
  lg: cn(
    "h-11 px-4 gap-2",
    "text-base leading-6",
    "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]"
  ),
  
  // Icon-only sizes (square)
  iconXs: cn(
    "size-5",
    "[&_svg]:size-3 [&_.material-symbols-outlined]:!text-[12px]"
  ),
  
  iconSm: cn(
    "size-7",
    "[&_svg]:size-4 [&_.material-symbols-outlined]:!text-[16px]"
  ),
  
  iconMd: cn(
    "size-9",
    "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]"
  ),
  
  iconLg: cn(
    "size-11",
    "[&_svg]:size-5 [&_.material-symbols-outlined]:!text-[20px]"
  ),
} as const

