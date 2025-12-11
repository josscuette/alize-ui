# label

## Interfaces

### LabelProps

Defined in: [src/components/ui/label.tsx:12](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/label.tsx#L12)

Label component props interface
Extends Radix UI Label primitive props

#### Extends

- `ComponentProps`\<*typeof* `LabelPrimitive.Root`\>

## Functions

### Label()

```ts
function Label(props): ReactElement;
```

Defined in: [src/components/ui/label.tsx:29](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/label.tsx#L29)

Label component - A form label

Provides an accessible label for form inputs.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`LabelProps`](#labelprops) | Label props including htmlFor and standard Radix UI Label attributes |

#### Returns

`ReactElement`

A label element

#### Example

```tsx
<Label htmlFor="email">Email</Label>
<Input id="email" />
```
