# input-otp

## Interfaces

### InputOTPGroupProps

Defined in: [src/components/ui/input-otp.tsx:22](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input-otp.tsx#L22)

InputOTPGroup component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### InputOTPSeparatorProps

Defined in: [src/components/ui/input-otp.tsx:36](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input-otp.tsx#L36)

InputOTPSeparator component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### InputOTPSlotProps

Defined in: [src/components/ui/input-otp.tsx:28](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input-otp.tsx#L28)

InputOTPSlot component props interface
Extends native div element props and adds index prop

#### Extends

- `ComponentProps`\<`"div"`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="index"></a> `index` | `number` | [src/components/ui/input-otp.tsx:29](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input-otp.tsx#L29) |

## Type Aliases

### InputOTPProps

```ts
type InputOTPProps = React.ComponentProps<typeof OTPInput> & {
  children?: React.ReactNode;
  containerClassName?: string;
};
```

Defined in: [src/components/ui/input-otp.tsx:13](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input-otp.tsx#L13)

InputOTP component props interface
Extends input-otp OTPInput props and adds containerClassName prop

#### Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `children?` | `React.ReactNode` | [src/components/ui/input-otp.tsx:15](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input-otp.tsx#L15) |
| `containerClassName?` | `string` | [src/components/ui/input-otp.tsx:14](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input-otp.tsx#L14) |

## Functions

### InputOTP()

```ts
function InputOTP(props): ReactElement;
```

Defined in: [src/components/ui/input-otp.tsx:58](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input-otp.tsx#L58)

InputOTP component - A one-time password input

Provides an input field for entering one-time passwords (OTP).
Built on input-otp library.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`InputOTPProps`](#inputotpprops) | InputOTP props including maxLength, value, onChange, and standard OTPInput attributes |

#### Returns

`ReactElement`

An InputOTP component

#### Example

```tsx
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
</InputOTP>
```

***

### InputOTPGroup()

```ts
function InputOTPGroup(props): ReactElement;
```

Defined in: [src/components/ui/input-otp.tsx:81](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input-otp.tsx#L81)

InputOTPGroup component - A group of OTP input slots

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`InputOTPGroupProps`](#inputotpgroupprops) | InputOTPGroup props |

#### Returns

`ReactElement`

An InputOTPGroup component

***

### InputOTPSeparator()

```ts
function InputOTPSeparator(props): ReactElement;
```

Defined in: [src/components/ui/input-otp.tsx:129](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input-otp.tsx#L129)

InputOTPSeparator component - A separator between OTP groups

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`InputOTPSeparatorProps`](#inputotpseparatorprops) | InputOTPSeparator props |

#### Returns

`ReactElement`

An InputOTPSeparator component

***

### InputOTPSlot()

```ts
function InputOTPSlot(props): ReactElement;
```

Defined in: [src/components/ui/input-otp.tsx:96](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input-otp.tsx#L96)

InputOTPSlot component - An individual slot in an OTP input

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`InputOTPSlotProps`](#inputotpslotprops) | InputOTPSlot props including index |

#### Returns

`ReactElement`

An InputOTPSlot component
