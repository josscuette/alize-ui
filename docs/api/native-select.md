# native-select

## Interfaces

### NativeSelectOptGroupProps

Defined in: [src/components/ui/native-select.tsx:22](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/native-select.tsx#L22)

NativeSelectOptGroup component props interface
Extends native optgroup element props

#### Extends

- `ComponentProps`\<`"optgroup"`\>

***

### NativeSelectOptionProps

Defined in: [src/components/ui/native-select.tsx:16](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/native-select.tsx#L16)

NativeSelectOption component props interface
Extends native option element props

#### Extends

- `ComponentProps`\<`"option"`\>

***

### NativeSelectProps

Defined in: [src/components/ui/native-select.tsx:10](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/native-select.tsx#L10)

NativeSelect component props interface
Extends native select element props

#### Extends

- `ComponentProps`\<`"select"`\>

## Functions

### NativeSelect()

```ts
function NativeSelect(props): ReactElement;
```

Defined in: [src/components/ui/native-select.tsx:40](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/native-select.tsx#L40)

NativeSelect component - A native HTML select element

Provides a styled native HTML select dropdown.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NativeSelectProps`](#nativeselectprops) | NativeSelect props including standard HTML select attributes |

#### Returns

`ReactElement`

A NativeSelect component

#### Example

```tsx
<NativeSelect>
  <NativeSelectOption value="option1">Option 1</NativeSelectOption>
  <NativeSelectOption value="option2">Option 2</NativeSelectOption>
</NativeSelect>
```

***

### NativeSelectOptGroup()

```ts
function NativeSelectOptGroup(props): ReactElement;
```

Defined in: [src/components/ui/native-select.tsx:79](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/native-select.tsx#L79)

NativeSelectOptGroup component - A group of options within a NativeSelect

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NativeSelectOptGroupProps`](#nativeselectoptgroupprops) | NativeSelectOptGroup props |

#### Returns

`ReactElement`

A NativeSelectOptGroup component

***

### NativeSelectOption()

```ts
function NativeSelectOption(props): ReactElement;
```

Defined in: [src/components/ui/native-select.tsx:70](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/native-select.tsx#L70)

NativeSelectOption component - An option within a NativeSelect

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NativeSelectOptionProps`](#nativeselectoptionprops) | NativeSelectOption props |

#### Returns

`ReactElement`

A NativeSelectOption component
