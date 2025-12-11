# spinner

## Interfaces

### SpinnerProps

Defined in: [src/components/ui/spinner.tsx:10](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/spinner.tsx#L10)

Spinner component props interface
Extends native SVG element props

#### Extends

- `ComponentProps`\<`"svg"`\>

## Functions

### Spinner()

```ts
function Spinner(props): ReactElement;
```

Defined in: [src/components/ui/spinner.tsx:26](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/spinner.tsx#L26)

Spinner component - A loading spinner

Displays an animated spinner to indicate loading state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SpinnerProps`](#spinnerprops) | Spinner props including standard HTML SVG attributes |

#### Returns

`ReactElement`

A spinner element

#### Example

```tsx
<Spinner />
<Spinner className="size-8" />
```
