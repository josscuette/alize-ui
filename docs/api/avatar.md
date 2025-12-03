# avatar

## Interfaces

### AvatarFallbackProps

Defined in: [src/components/ui/avatar.tsx:63](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/avatar.tsx#L63)

AvatarFallback component props interface
Extends Radix UI AvatarFallback primitive props and adds size prop

#### Extends

- `ComponentProps`\<*typeof* `AvatarPrimitive.Fallback`\>

#### Properties

| Property | Type | Overrides | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="delayms"></a> `delayMs?` | `number` | `React.ComponentProps.delayMs` | [src/components/ui/avatar.tsx:65](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/avatar.tsx#L65) |
| <a id="size"></a> `size?` | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` | - | [src/components/ui/avatar.tsx:64](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/avatar.tsx#L64) |

***

### AvatarImageProps

Defined in: [src/components/ui/avatar.tsx:57](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/avatar.tsx#L57)

AvatarImage component props interface
Extends Radix UI AvatarImage primitive props

#### Extends

- `ComponentProps`\<*typeof* `AvatarPrimitive.Image`\>

***

### AvatarProps

Defined in: [src/components/ui/avatar.tsx:51](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/avatar.tsx#L51)

Avatar component props interface
Extends Radix UI Avatar primitive props and adds size/shape variants

#### Extends

- `ComponentProps`\<*typeof* `AvatarPrimitive.Root`\>.`VariantProps`\<*typeof* [`avatarVariants`](#avatarvariants)\>

#### Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="shape"></a> `shape?` | `"square"` \| `"rounded"` \| `null` | `VariantProps.shape` | [src/components/ui/avatar.tsx:20](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/avatar.tsx#L20) |
| <a id="size-1"></a> `size?` | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `null` | `VariantProps.size` | [src/components/ui/avatar.tsx:14](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/avatar.tsx#L14) |

## Variables

### avatarVariants()

```ts
const avatarVariants: (props?) => string;
```

Defined in: [src/components/ui/avatar.tsx:10](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/avatar.tsx#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | ConfigVariants\<\{ size: \{ xs: string; sm: string; md: string; lg: string; \}; shape: \{ square: string; rounded: "rounded-full"; \}; \}\> & ClassProp |

#### Returns

`string`

## Functions

### Avatar()

```ts
function Avatar(props): ReactElement;
```

Defined in: [src/components/ui/avatar.tsx:86](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/avatar.tsx#L86)

Avatar component - A user avatar with image and fallback

Displays a user's avatar image with a fallback when the image fails to load.
Supports multiple sizes and shapes (square/rounded).
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AvatarProps`](#avatarprops) | Avatar props including size, shape, and standard Radix UI Avatar attributes |

#### Returns

`ReactElement`

An avatar element

#### Example

```tsx
<Avatar size="md" shape="rounded">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

***

### AvatarFallback()

```ts
function AvatarFallback(props): ReactElement;
```

Defined in: [src/components/ui/avatar.tsx:133](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/avatar.tsx#L133)

AvatarFallback component - The fallback content displayed when AvatarImage fails to load

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AvatarFallbackProps`](#avatarfallbackprops) | AvatarFallback props including size and standard Radix UI AvatarFallback attributes |

#### Returns

`ReactElement`

An avatar fallback element

***

### AvatarImage()

```ts
function AvatarImage(props): ReactElement;
```

Defined in: [src/components/ui/avatar.tsx:114](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/avatar.tsx#L114)

AvatarImage component - The image displayed in an Avatar

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AvatarImageProps`](#avatarimageprops) | AvatarImage props including src, alt, and standard Radix UI AvatarImage attributes |

#### Returns

`ReactElement`

An avatar image element
