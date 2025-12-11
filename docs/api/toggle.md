# toggle

## Interfaces

### ToggleProps

Defined in: [src/components/ui/toggle.tsx:13](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/toggle.tsx#L13)

Toggle component props interface
Extends Radix UI Toggle primitive props and adds variant and size props

#### Extends

- `ComponentProps`\<*typeof* `TogglePrimitive.Root`\>.`VariantProps`\<*typeof* [`toggleVariants`](#togglevariants)\>

#### Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="size"></a> `size?` | `"default"` \| `"sm"` \| `"lg"` \| `null` | `VariantProps.size` | [src/components/ui/toggle.tsx:24](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/toggle.tsx#L24) |
| <a id="variant"></a> `variant?` | `"default"` \| `"outline"` \| `null` | `VariantProps.variant` | [src/components/ui/toggle.tsx:19](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/toggle.tsx#L19) |

## Variables

### toggleVariants()

```ts
const toggleVariants: (props?) => string;
```

Defined in: [src/components/ui/toggle.tsx:15](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/toggle.tsx#L15)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | ConfigVariants\<\{ variant: \{ default: string; outline: string; \}; size: \{ default: string; sm: string; lg: string; \}; \}\> & ClassProp |

#### Returns

`string`

## Functions

### Toggle()

```ts
function Toggle(props): ReactElement;
```

Defined in: [src/components/ui/toggle.tsx:52](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/toggle.tsx#L52)

Toggle component - A toggle button

Provides a toggle button that can be pressed on or off.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ToggleProps`](#toggleprops) | Toggle props including variant, size, pressed, onPressedChange, and standard Radix UI Toggle attributes |

#### Returns

`ReactElement`

A toggle button element

#### Example

```tsx
<Toggle variant="default" size="default" />
<Toggle variant="outline" pressed={isPressed} onPressedChange={setIsPressed} />
```
