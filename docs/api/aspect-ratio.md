# aspect-ratio

## Interfaces

### AspectRatioProps

Defined in: [src/components/ui/aspect-ratio.tsx:10](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/aspect-ratio.tsx#L10)

AspectRatio component props interface
Extends Radix UI AspectRatio primitive props

#### Extends

- `ComponentProps`\<*typeof* `AspectRatioPrimitive.Root`\>

## Functions

### AspectRatio()

```ts
function AspectRatio(props): ReactElement;
```

Defined in: [src/components/ui/aspect-ratio.tsx:28](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/aspect-ratio.tsx#L28)

AspectRatio component - Maintains a specific aspect ratio for its content

Provides a container that maintains a specific aspect ratio for its content.
Built on Radix UI primitives.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AspectRatioProps`](#aspectratioprops) | AspectRatio props including ratio and standard Radix UI AspectRatio attributes |

#### Returns

`ReactElement`

An AspectRatio component

#### Example

```tsx
<AspectRatio ratio={16 / 9}>
  <img src="/image.jpg" alt="Image" />
</AspectRatio>
```
