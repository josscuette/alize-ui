# select

## Interfaces

### SelectContentProps

Defined in: [src/components/ui/select.tsx:29](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L29)

SelectContent component props interface
Extends Radix UI SelectContent primitive props

#### Extends

- `ComponentProps`\<*typeof* `SelectPrimitive.Content`\>

***

### SelectItemProps

Defined in: [src/components/ui/select.tsx:35](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L35)

SelectItem component props interface
Extends Radix UI SelectItem primitive props

#### Extends

- `ComponentProps`\<*typeof* `SelectPrimitive.Item`\>

***

### SelectLabelProps

Defined in: [src/components/ui/select.tsx:41](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L41)

SelectLabel component props interface
Extends Radix UI SelectLabel primitive props

#### Extends

- `ComponentProps`\<*typeof* `SelectPrimitive.Label`\>

***

### SelectProps

Defined in: [src/components/ui/select.tsx:15](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L15)

Select component props interface
Extends Radix UI Select primitive props

#### Extends

- `ComponentProps`\<*typeof* `SelectPrimitive.Root`\>

***

### SelectScrollDownButtonProps

Defined in: [src/components/ui/select.tsx:59](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L59)

SelectScrollDownButton component props interface
Extends Radix UI SelectScrollDownButton primitive props

#### Extends

- `ComponentProps`\<*typeof* `SelectPrimitive.ScrollDownButton`\>

***

### SelectScrollUpButtonProps

Defined in: [src/components/ui/select.tsx:53](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L53)

SelectScrollUpButton component props interface
Extends Radix UI SelectScrollUpButton primitive props

#### Extends

- `ComponentProps`\<*typeof* `SelectPrimitive.ScrollUpButton`\>

***

### SelectSeparatorProps

Defined in: [src/components/ui/select.tsx:47](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L47)

SelectSeparator component props interface
Extends Radix UI SelectSeparator primitive props

#### Extends

- `ComponentProps`\<*typeof* `SelectPrimitive.Separator`\>

***

### SelectTriggerProps

Defined in: [src/components/ui/select.tsx:21](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L21)

SelectTrigger component props interface
Extends Radix UI SelectTrigger primitive props and adds size prop

#### Extends

- `ComponentProps`\<*typeof* `SelectPrimitive.Trigger`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="size"></a> `size?` | `"default"` \| `"sm"` | [src/components/ui/select.tsx:22](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L22) |

## Variables

### Select

```ts
const Select: NamedExoticComponent<SelectProps>;
```

Defined in: [src/components/ui/select.tsx:85](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L85)

Select component - A custom select input built on Radix UI

Provides an accessible and customizable dropdown for selecting options.

#### Param

Select props

#### Returns

A Select component

#### Example

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

## Functions

### SelectContent()

```ts
function SelectContent(props): ReactElement;
```

Defined in: [src/components/ui/select.tsx:171](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L171)

SelectContent component - The popover content containing select items

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SelectContentProps`](#selectcontentprops) | SelectContent props |

#### Returns

`ReactElement`

A SelectContent component

***

### SelectGroup()

```ts
function SelectGroup(__namedParameters): ReactElement;
```

Defined in: [src/components/ui/select.tsx:91](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L91)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `SelectGroupProps` & `RefAttributes`\<`HTMLDivElement`\> |

#### Returns

`ReactElement`

***

### SelectItem()

```ts
function SelectItem(props): ReactElement;
```

Defined in: [src/components/ui/select.tsx:238](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L238)

SelectItem component - An individual selectable item within the select content

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SelectItemProps`](#selectitemprops) | SelectItem props |

#### Returns

`ReactElement`

A SelectItem component

***

### SelectLabel()

```ts
function SelectLabel(__namedParameters): ReactElement;
```

Defined in: [src/components/ui/select.tsx:220](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L220)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `SelectLabelProps` & `RefAttributes`\<`HTMLDivElement`\> |

#### Returns

`ReactElement`

***

### SelectScrollDownButton()

```ts
function SelectScrollDownButton(props): ReactElement;
```

Defined in: [src/components/ui/select.tsx:308](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L308)

SelectScrollDownButton component - Button to scroll down in the select content

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SelectScrollDownButtonProps`](#selectscrolldownbuttonprops) | SelectScrollDownButton props |

#### Returns

`ReactElement`

A SelectScrollDownButton component

***

### SelectScrollUpButton()

```ts
function SelectScrollUpButton(props): ReactElement;
```

Defined in: [src/components/ui/select.tsx:285](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L285)

SelectScrollUpButton component - Button to scroll up in the select content

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SelectScrollUpButtonProps`](#selectscrollupbuttonprops) | SelectScrollUpButton props |

#### Returns

`ReactElement`

A SelectScrollUpButton component

***

### SelectSeparator()

```ts
function SelectSeparator(props): ReactElement;
```

Defined in: [src/components/ui/select.tsx:267](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L267)

SelectSeparator component - A visual separator between select groups or items

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SelectSeparatorProps`](#selectseparatorprops) | SelectSeparator props |

#### Returns

`ReactElement`

A SelectSeparator component

***

### SelectTrigger()

```ts
function SelectTrigger(__namedParameters): ReactElement;
```

Defined in: [src/components/ui/select.tsx:103](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L103)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `SelectTriggerProps` & `RefAttributes`\<`HTMLButtonElement`\> & \{ `size?`: `"default"` \| `"sm"`; \} |

#### Returns

`ReactElement`

***

### SelectValue()

```ts
function SelectValue(__namedParameters): ReactElement;
```

Defined in: [src/components/ui/select.tsx:97](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/select.tsx#L97)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `SelectValueProps` & `RefAttributes`\<`HTMLSpanElement`\> |

#### Returns

`ReactElement`
