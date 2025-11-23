"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "../../lib/utils"

/**
 * InputOTP component props interface
 * Extends input-otp OTPInput props and adds containerClassName prop
 */
export type InputOTPProps = React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
  children?: React.ReactNode
}

/**
 * InputOTPGroup component props interface
 * Extends native div element props
 */
export interface InputOTPGroupProps extends React.ComponentProps<"div"> {}

/**
 * InputOTPSlot component props interface
 * Extends native div element props and adds index prop
 */
export interface InputOTPSlotProps extends React.ComponentProps<"div"> {
  index: number
}

/**
 * InputOTPSeparator component props interface
 * Extends native div element props
 */
export interface InputOTPSeparatorProps extends React.ComponentProps<"div"> {}

/**
 * InputOTP component - A one-time password input
 * 
 * Provides an input field for entering one-time passwords (OTP).
 * Built on input-otp library.
 * 
 * @param props - InputOTP props including maxLength, value, onChange, and standard OTPInput attributes
 * @returns An InputOTP component
 * 
 * @example
 * ```tsx
 * <InputOTP maxLength={6}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *   </InputOTPGroup>
 * </InputOTP>
 * ```
 */
function InputOTP({
  className,
  containerClassName,
  ...props
}: InputOTPProps): React.ReactElement {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

/**
 * InputOTPGroup component - A group of OTP input slots
 * @param props - InputOTPGroup props
 * @returns An InputOTPGroup component
 */
function InputOTPGroup({ className, ...props }: InputOTPGroupProps): React.ReactElement {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

/**
 * InputOTPSlot component - An individual slot in an OTP input
 * @param props - InputOTPSlot props including index
 * @returns An InputOTPSlot component
 */
function InputOTPSlot({
  index,
  className,
  ...props
}: InputOTPSlotProps): React.ReactElement {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
}

/**
 * InputOTPSeparator component - A separator between OTP groups
 * @param props - InputOTPSeparator props
 * @returns An InputOTPSeparator component
 */
function InputOTPSeparator({ ...props }: InputOTPSeparatorProps): React.ReactElement {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
