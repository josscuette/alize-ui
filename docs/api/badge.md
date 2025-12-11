# badge

## Interfaces

### BadgeProps

Defined in: [src/components/ui/badge.tsx:36](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/badge.tsx#L36)

Badge component props interface
Extends native span element props and adds variant and asChild props

#### Extends

- `ComponentProps`\<`"span"`\>.`VariantProps`\<*typeof* [`badgeVariants`](#badgevariants)\>

#### Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="aschild"></a> `asChild?` | `boolean` | Render as a different element using Radix UI Slot **Default** `false` | - | [src/components/ui/badge.tsx:41](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/badge.tsx#L41) |
| <a id="variant"></a> `variant?` | \| `"default"` \| `"destructive"` \| `"secondary"` \| `"warning"` \| `"success"` \| `"outline"` \| `null` | - | `VariantProps.variant` | [src/components/ui/badge.tsx:11](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/badge.tsx#L11) |

## Variables

### badgeVariants()

```ts
const badgeVariants: (props?) => string;
```

Defined in: [src/components/ui/badge.tsx:7](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/badge.tsx#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | ConfigVariants\<\{ variant: \{ default: string; secondary: string; destructive: string; warning: string; success: string; outline: string; \}; \}\> & ClassProp |

#### Returns

`string`

## Functions

### Badge()

```ts
function Badge(props): ReactElement;
```

Defined in: [src/components/ui/badge.tsx:76](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/badge.tsx#L76)

Badge component - A small status indicator or label

Displays a badge with multiple variants for different states:
- `default` / `secondary`: Neutral badge for general use
- `destructive`: Red/danger badge for errors or critical states
- `warning`: Orange/amber badge for warnings or caution states
- `success`: Green badge for success or positive states
- `outline`: Outlined badge without background

Can be used as a link or other element via the asChild prop.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`BadgeProps`](#badgeprops) | Badge props including variant, asChild, and standard HTML span attributes |

#### Returns

`ReactElement`

A badge element

#### Example

```tsx
// RAG status badges
<Badge variant="success">Complete</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="destructive">Error</Badge>

// Other variants
<Badge variant="default">New</Badge>
<Badge variant="outline">Draft</Badge>

// As a link
<Badge asChild>
  <a href="/link">Link Badge</a>
</Badge>
```
