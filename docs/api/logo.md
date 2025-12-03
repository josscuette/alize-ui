# logo

## Interfaces

### LogoProps

Defined in: [src/components/ui/logo.tsx:110](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/logo.tsx#L110)

Logo component props interface

#### Example

```tsx
// Logo only (no product name)
<Logo />

// Logo with product name
<Logo productName="Product Name" />

// Collapsible navigation: toggle product name visibility
<Logo productName="My App" collapsed={isNavCollapsed} />

// Different sizes
<Logo size="sm" productName="Small" />
<Logo size="lg" productName="Large" />
```

#### Extends

- `Omit`\<`React.ComponentProps`\<`"div"`\>, `"children"`\>.`VariantProps`\<*typeof* [`logoVariants`](#logovariants)\>

#### Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="collapsed"></a> `collapsed?` | `boolean` | When true, hides the product name and shows only the logo. Useful for collapsed navigation states. **Default** `false` | - | [src/components/ui/logo.tsx:123](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/logo.tsx#L123) |
| <a id="productname"></a> `productName?` | `string` | Optional product name to display next to the logo. If not provided or empty, only the JLL logo is displayed. | - | [src/components/ui/logo.tsx:117](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/logo.tsx#L117) |
| <a id="size"></a> `size?` | `"default"` \| `"sm"` \| `"lg"` \| `null` | - | `VariantProps.size` | [src/components/ui/logo.tsx:45](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/logo.tsx#L45) |

## Variables

### logoVariants()

```ts
const logoVariants: (props?) => string;
```

Defined in: [src/components/ui/logo.tsx:40](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/logo.tsx#L40)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | ConfigVariants\<\{ size: \{ default: string; sm: string; lg: string; \}; \}\> & ClassProp |

#### Returns

`string`

## Functions

### JLLLogo()

```ts
function JLLLogo(__namedParameters): ReactElement;
```

Defined in: [src/components/ui/logo.tsx:12](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/logo.tsx#L12)

JLL Logo SVG Component
Uses semantic brand tokens for theming in light/dark mode:
- brand-picto: Red "J" icon (always #de0614)
- brand-text: "LL" text (black in light, white in dark)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `SVGProps`\<`SVGSVGElement`\> |

#### Returns

`ReactElement`

***

### Logo()

```ts
function Logo(props): ReactElement;
```

Defined in: [src/components/ui/logo.tsx:151](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/logo.tsx#L151)

Logo component - JLL brand logo with optional product name

Uses semantic brand tokens for theming:
- `--semantic-brand-picto`: Red "J" icon (constant across themes)
- `--semantic-brand-text`: "LL" text and product name (black/white based on theme)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`LogoProps`](#logoprops) | Logo props including productName, size, and standard HTML div attributes |

#### Returns

`ReactElement`

A logo element with appropriate styling

#### Example

```tsx
// Logo only (no product name provided)
<Logo />

// Logo with product name
<Logo productName="My Product" />

// Collapsible navigation
<Logo productName="My App" collapsed={isNavCollapsed} />

// With custom className
<Logo productName="Product" className="my-4" />
```
