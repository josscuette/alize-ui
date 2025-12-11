# input

## Interfaces

### InputProps

Defined in: [src/components/ui/input.tsx:16](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input.tsx#L16)

Input component props interface
Extends native HTML input element props

#### Example

```tsx
<Input type="text" placeholder="Enter your name" />
<Input type="email" aria-invalid={hasError} />
```

#### Extends

- `ComponentProps`\<`"input"`\>

## Variables

### Input

```ts
const Input: ForwardRefExoticComponent<Omit<InputProps, "ref"> & RefAttributes<HTMLInputElement>>;
```

Defined in: [src/components/ui/input.tsx:43](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input.tsx#L43)

Input component - A styled input field with validation states

Supports all standard HTML input types and includes built-in support for:
- Disabled states
- Invalid/error states (via aria-invalid)
- Focus states
- File input styling

#### Param

Input props including type and standard HTML input attributes

#### Returns

An input element with appropriate styling

#### Example

```tsx
// Basic input
<Input type="text" placeholder="Enter text" />

// Input with error state
<Input 
  type="email" 
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : undefined}
/>
```
