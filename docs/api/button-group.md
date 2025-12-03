# button-group

## Interfaces

### ButtonGroupProps

Defined in: [src/components/ui/button-group.tsx:12](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button-group.tsx#L12)

ButtonGroup component props interface
Extends native div element props and adds orientation prop

#### Extends

- `ComponentProps`\<`"div"`\>.`VariantProps`\<*typeof* [`buttonGroupVariants`](#buttongroupvariants)\>

#### Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="orientation"></a> `orientation?` | `"horizontal"` \| `"vertical"` \| `null` | `VariantProps.orientation` | [src/components/ui/button-group.tsx:34](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button-group.tsx#L34) |

***

### ButtonGroupSeparatorProps

Defined in: [src/components/ui/button-group.tsx:26](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button-group.tsx#L26)

ButtonGroupSeparator component props interface
Extends Separator props

#### Extends

- `ComponentProps`\<*typeof* [`Separator`](separator.md#separator)\>

#### Properties

| Property | Type | Description | Overrides | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="orientation-1"></a> `orientation?` | `"horizontal"` \| `"vertical"` | Either `vertical` or `horizontal`. Defaults to `horizontal`. | `React.ComponentProps.orientation` | [src/components/ui/button-group.tsx:27](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button-group.tsx#L27) |

***

### ButtonGroupTextProps

Defined in: [src/components/ui/button-group.tsx:18](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button-group.tsx#L18)

ButtonGroupText component props interface
Extends native div element props and adds asChild prop

#### Extends

- `ComponentProps`\<`"div"`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="aschild"></a> `asChild?` | `boolean` | [src/components/ui/button-group.tsx:19](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button-group.tsx#L19) |

## Variables

### buttonGroupVariants()

```ts
const buttonGroupVariants: (props?) => string;
```

Defined in: [src/components/ui/button-group.tsx:30](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button-group.tsx#L30)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | ConfigVariants\<\{ orientation: \{ horizontal: string; vertical: string; \}; \}\> & ClassProp |

#### Returns

`string`

## Functions

### ButtonGroup()

```ts
function ButtonGroup(props): ReactElement;
```

Defined in: [src/components/ui/button-group.tsx:63](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button-group.tsx#L63)

ButtonGroup component - A group of buttons

Provides a container for grouping buttons together with shared styling.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ButtonGroupProps`](#buttongroupprops) | ButtonGroup props including orientation and standard HTML div attributes |

#### Returns

`ReactElement`

A ButtonGroup component

#### Example

```tsx
<ButtonGroup orientation="horizontal">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</ButtonGroup>
```

***

### ButtonGroupSeparator()

```ts
function ButtonGroupSeparator(props): ReactElement;
```

Defined in: [src/components/ui/button-group.tsx:107](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button-group.tsx#L107)

ButtonGroupSeparator component - A separator within a button group

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ButtonGroupSeparatorProps`](#buttongroupseparatorprops) | ButtonGroupSeparator props including orientation |

#### Returns

`ReactElement`

A ButtonGroupSeparator component

***

### ButtonGroupText()

```ts
function ButtonGroupText(props): ReactElement;
```

Defined in: [src/components/ui/button-group.tsx:84](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button-group.tsx#L84)

ButtonGroupText component - A text element within a button group

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ButtonGroupTextProps`](#buttongrouptextprops) | ButtonGroupText props including asChild |

#### Returns

`ReactElement`

A ButtonGroupText component
