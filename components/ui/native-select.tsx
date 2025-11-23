import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "../../lib/utils"

/**
 * NativeSelect component props interface
 * Extends native select element props
 */
export interface NativeSelectProps extends React.ComponentProps<"select"> {}

/**
 * NativeSelectOption component props interface
 * Extends native option element props
 */
export interface NativeSelectOptionProps extends React.ComponentProps<"option"> {}

/**
 * NativeSelectOptGroup component props interface
 * Extends native optgroup element props
 */
export interface NativeSelectOptGroupProps extends React.ComponentProps<"optgroup"> {}

/**
 * NativeSelect component - A native HTML select element
 * 
 * Provides a styled native HTML select dropdown.
 * 
 * @param props - NativeSelect props including standard HTML select attributes
 * @returns A NativeSelect component
 * 
 * @example
 * ```tsx
 * <NativeSelect>
 *   <NativeSelectOption value="option1">Option 1</NativeSelectOption>
 *   <NativeSelectOption value="option2">Option 2</NativeSelectOption>
 * </NativeSelect>
 * ```
 */
function NativeSelect({ className, ...props }: NativeSelectProps): React.ReactElement {
  return (
    <div
      className="group/native-select relative w-fit has-[select:disabled]:opacity-50"
      data-slot="native-select-wrapper"
    >
      <select
        data-slot="native-select"
        className={cn(
          "border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 h-9 w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      <ChevronDownIcon
        className="text-muted-foreground pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 opacity-50 select-none"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </div>
  )
}

/**
 * NativeSelectOption component - An option within a NativeSelect
 * @param props - NativeSelectOption props
 * @returns A NativeSelectOption component
 */
function NativeSelectOption({ ...props }: NativeSelectOptionProps): React.ReactElement {
  return <option data-slot="native-select-option" {...props} />
}

/**
 * NativeSelectOptGroup component - A group of options within a NativeSelect
 * @param props - NativeSelectOptGroup props
 * @returns A NativeSelectOptGroup component
 */
function NativeSelectOptGroup({
  className,
  ...props
}: NativeSelectOptGroupProps): React.ReactElement {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn(className)}
      {...props}
    />
  )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
