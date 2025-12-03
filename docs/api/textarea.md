# textarea

## Interfaces

### TextareaProps

Defined in: [src/components/ui/textarea.tsx:10](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/textarea.tsx#L10)

Textarea component props interface
Extends native HTML textarea element props

#### Extends

- `ComponentProps`\<`"textarea"`\>

## Functions

### Textarea()

```ts
function Textarea(props): ReactElement;
```

Defined in: [src/components/ui/textarea.tsx:30](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/textarea.tsx#L30)

Textarea component - A styled textarea field with validation states

Supports all standard HTML textarea attributes and includes built-in support for:
- Disabled states
- Invalid/error states (via aria-invalid)
- Focus states
- Auto-sizing with field-sizing-content

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TextareaProps`](#textareaprops) | Textarea props including rows, cols, and standard HTML textarea attributes |

#### Returns

`ReactElement`

A textarea element with appropriate styling

#### Example

```tsx
<Textarea placeholder="Enter your message" rows={5} />
<Textarea aria-invalid={hasError} aria-describedby={hasError ? "error-id" : undefined} />
```
