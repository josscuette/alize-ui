# toggle-group

## Interfaces

### ToggleGroupItemProps

Defined in: [src/components/ui/toggle-group.tsx:23](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/toggle-group.tsx#L23)

ToggleGroupItem component props interface
Extends Radix UI ToggleGroupItem primitive props and adds variant and size props

#### Extends

- `ComponentProps`\<*typeof* `ToggleGroupPrimitive.Item`\>.`VariantProps`\<*typeof* [`toggleVariants`](toggle.md#togglevariants)\>

#### Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="size"></a> `size?` | `"default"` \| `"sm"` \| `"lg"` \| `null` | `VariantProps.size` | [src/components/ui/toggle.tsx:24](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/toggle.tsx#L24) |
| <a id="variant"></a> `variant?` | `"default"` \| `"outline"` \| `null` | `VariantProps.variant` | [src/components/ui/toggle.tsx:19](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/toggle.tsx#L19) |

## Type Aliases

### ToggleGroupProps

```ts
type ToggleGroupProps = React.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants> & {
  children?: React.ReactNode;
  spacing?: number;
};
```

Defined in: [src/components/ui/toggle-group.tsx:14](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/toggle-group.tsx#L14)

ToggleGroup component props interface
Extends Radix UI ToggleGroup primitive props and adds variant, size, and spacing props

#### Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `children?` | `React.ReactNode` | [src/components/ui/toggle-group.tsx:16](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/toggle-group.tsx#L16) |
| `spacing?` | `number` | [src/components/ui/toggle-group.tsx:15](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/toggle-group.tsx#L15) |

## Functions

### ToggleGroup()

```ts
function ToggleGroup(props): ReactElement;
```

Defined in: [src/components/ui/toggle-group.tsx:52](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/toggle-group.tsx#L52)

ToggleGroup component - A group of toggle buttons

Provides a group of toggle buttons that can be used together.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ToggleGroupProps`](#togglegroupprops) | ToggleGroup props including variant, size, spacing, value, onValueChange, and standard Radix UI ToggleGroup attributes |

#### Returns

`ReactElement`

A ToggleGroup component

#### Example

```tsx
<ToggleGroup variant="default" size="default" spacing={2}>
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
</ToggleGroup>
```

***

### ToggleGroupItem()

```ts
function ToggleGroupItem(props): ReactElement;
```

Defined in: [src/components/ui/toggle-group.tsx:86](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/toggle-group.tsx#L86)

ToggleGroupItem component - An individual toggle button in a ToggleGroup

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ToggleGroupItemProps`](#togglegroupitemprops) | ToggleGroupItem props including variant, size, and value |

#### Returns

`ReactElement`

A ToggleGroupItem component
