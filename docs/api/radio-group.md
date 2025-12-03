# radio-group

## Interfaces

### RadioGroupCardItemProps

Defined in: [src/components/ui/radio-group.tsx:109](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/radio-group.tsx#L109)

RadioGroupCardItem component props interface
Extends Radix UI RadioGroupItem primitive props and adds label/description

#### Extends

- `ComponentProps`\<*typeof* `RadioGroupPrimitive.Item`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="description"></a> `description?` | `string` | [src/components/ui/radio-group.tsx:111](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/radio-group.tsx#L111) |
| <a id="label"></a> `label` | `string` | [src/components/ui/radio-group.tsx:110](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/radio-group.tsx#L110) |

***

### RadioGroupItemProps

Defined in: [src/components/ui/radio-group.tsx:103](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/radio-group.tsx#L103)

RadioGroupItem component props interface
Extends Radix UI RadioGroupItem primitive props

#### Extends

- `ComponentProps`\<*typeof* `RadioGroupPrimitive.Item`\>

***

### RadioGroupProps

Defined in: [src/components/ui/radio-group.tsx:97](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/radio-group.tsx#L97)

RadioGroup component props interface
Extends Radix UI RadioGroup primitive props

#### Extends

- `ComponentProps`\<*typeof* `RadioGroupPrimitive.Root`\>

## Functions

### RadioGroup()

```ts
function RadioGroup(props): ReactElement;
```

Defined in: [src/components/ui/radio-group.tsx:26](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/radio-group.tsx#L26)

RadioGroup component - A group of radio buttons

Manages a group of radio buttons where only one can be selected at a time.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`RadioGroupProps`](#radiogroupprops) | RadioGroup props including value, onValueChange, and standard Radix UI RadioGroup attributes |

#### Returns

`ReactElement`

A radio group element

#### Example

```tsx
<RadioGroup value={selected} onValueChange={setSelected}>
  <RadioGroupItem value="option1" id="option1" />
  <RadioGroupItem value="option2" id="option2" />
</RadioGroup>
```

***

### RadioGroupCardItem()

```ts
function RadioGroupCardItem(__namedParameters): ReactElement;
```

Defined in: [src/components/ui/radio-group.tsx:114](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/radio-group.tsx#L114)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`RadioGroupCardItemProps`](#radiogroupcarditemprops) |

#### Returns

`ReactElement`

***

### RadioGroupItem()

```ts
function RadioGroupItem(props): ReactElement;
```

Defined in: [src/components/ui/radio-group.tsx:45](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/radio-group.tsx#L45)

RadioGroupItem component - An individual radio button within a RadioGroup

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`RadioGroupItemProps`](#radiogroupitemprops) | RadioGroupItem props including value and standard Radix UI RadioGroupItem attributes |

#### Returns

`ReactElement`

A radio button element
