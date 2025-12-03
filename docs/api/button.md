# button

## Interfaces

### ButtonProps

Defined in: [src/components/ui/button.tsx:19](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button.tsx#L19)

Button component props interface

#### Example

```tsx
<Button variant="default" size="md">Click me</Button>
<Button variant="outline" size="icon" aria-label="Close">
  <MaterialSymbol name="close" />
</Button>
```

#### Extends

- `ComponentProps`\<`"button"`\>.`VariantProps`\<*typeof* [`buttonVariants`](#buttonvariants)\>

#### Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="aschild"></a> `asChild?` | `boolean` | Render as a different element using Radix UI Slot **Default** `false` | - | [src/components/ui/button.tsx:24](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button.tsx#L24) |
| <a id="size"></a> `size?` | \| `"default"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"icon"` \| `"icon-sm"` \| `"icon-lg"` \| `"icon-xs"` \| `null` | - | `VariantProps.size` | [src/components/ui/button.tsx:95](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button.tsx#L95) |
| <a id="variant"></a> `variant?` | \| `"link"` \| `"default"` \| `"destructive"` \| `"secondary"` \| `"outline"` \| `"ghost"` \| `"tertiary"` \| `null` | - | `VariantProps.variant` | [src/components/ui/button.tsx:48](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button.tsx#L48) |

## Variables

### buttonVariants()

```ts
const buttonVariants: (props?) => string;
```

Defined in: [src/components/ui/button.tsx:27](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button.tsx#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | ConfigVariants\<\{ variant: \{ default: string; destructive: string; outline: string; secondary: string; ghost: string; link: string; tertiary: string; \}; size: \{ default: string; sm: string; lg: string; xs: string; icon: string; "icon-sm": string; "icon-lg": string; "icon-xs": string; \}; \}\> & ClassProp |

#### Returns

`string`

## Functions

### Button()

```ts
function Button(props): ReactElement;
```

Defined in: [src/components/ui/button.tsx:136](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button.tsx#L136)

Button component - A versatile button with multiple variants and sizes

Supports all standard button variants (default, destructive, outline, secondary, ghost, link, tertiary)
and multiple sizes including icon-only variants.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ButtonProps`](#buttonprops) | Button props including variant, size, and standard HTML button attributes |

#### Returns

`ReactElement`

A button element with appropriate styling

#### Example

```tsx
// Default button
<Button>Click me</Button>

// Destructive button
<Button variant="destructive">Delete</Button>

// Icon-only button (requires aria-label for accessibility)
<Button size="icon" aria-label="Close dialog">
  <MaterialSymbol name="close" />
</Button>
```
