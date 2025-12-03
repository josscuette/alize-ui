# separator

## Interfaces

### SeparatorProps

Defined in: [src/components/ui/separator.tsx:12](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/separator.tsx#L12)

Separator component props interface
Extends Radix UI Separator primitive props

#### Extends

- `ComponentProps`\<*typeof* `SeparatorPrimitive.Root`\>

## Functions

### Separator()

```ts
function Separator(props): ReactElement;
```

Defined in: [src/components/ui/separator.tsx:29](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/separator.tsx#L29)

Separator component - A visual separator line

Displays a horizontal or vertical line to separate content.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SeparatorProps`](#separatorprops) | Separator props including orientation, decorative, and standard Radix UI Separator attributes |

#### Returns

`ReactElement`

A separator element

#### Example

```tsx
<Separator orientation="horizontal" />
<Separator orientation="vertical" decorative={false} />
```
