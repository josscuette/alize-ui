# field

## Interfaces

### FieldContentProps

Defined in: [src/components/ui/field.tsx:41](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L41)

FieldContent component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### FieldDescriptionProps

Defined in: [src/components/ui/field.tsx:59](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L59)

FieldDescription component props interface
Extends native p element props

#### Extends

- `ComponentProps`\<`"p"`\>

***

### FieldErrorProps

Defined in: [src/components/ui/field.tsx:73](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L73)

FieldError component props interface
Extends native div element props and adds errors prop

#### Extends

- `ComponentProps`\<`"div"`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="errors"></a> `errors?` | ( \| \{ `message?`: `string`; \} \| `undefined`)[] | [src/components/ui/field.tsx:74](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L74) |

***

### FieldGroupProps

Defined in: [src/components/ui/field.tsx:29](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L29)

FieldGroup component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### FieldLabelProps

Defined in: [src/components/ui/field.tsx:47](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L47)

FieldLabel component props interface
Extends Label props

#### Extends

- `ComponentProps`\<*typeof* [`Label`](label.md#label)\>

***

### FieldLegendProps

Defined in: [src/components/ui/field.tsx:21](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L21)

FieldLegend component props interface
Extends native legend element props and adds variant prop

#### Extends

- `ComponentProps`\<`"legend"`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="variant"></a> `variant?` | `"label"` \| `"legend"` | [src/components/ui/field.tsx:22](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L22) |

***

### FieldProps

Defined in: [src/components/ui/field.tsx:35](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L35)

Field component props interface
Extends native div element props and adds orientation prop

#### Extends

- `ComponentProps`\<`"div"`\>.`VariantProps`\<*typeof* `fieldVariants`\>

#### Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="orientation"></a> `orientation?` | `"horizontal"` \| `"vertical"` \| `"responsive"` \| `null` | `VariantProps.orientation` | [src/components/ui/field.tsx:159](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L159) |

***

### FieldSeparatorProps

Defined in: [src/components/ui/field.tsx:65](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L65)

FieldSeparator component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

#### Properties

| Property | Type | Overrides | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | `React.ComponentProps.children` | [src/components/ui/field.tsx:66](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L66) |

***

### FieldSetProps

Defined in: [src/components/ui/field.tsx:15](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L15)

FieldSet component props interface
Extends native fieldset element props

#### Extends

- `ComponentProps`\<`"fieldset"`\>

***

### FieldTitleProps

Defined in: [src/components/ui/field.tsx:53](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L53)

FieldTitle component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

## Variables

### Field

```ts
const Field: NamedExoticComponent<FieldProps>;
```

Defined in: [src/components/ui/field.tsx:199](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L199)

Field component - A form field container

Provides a container for form fields with label, content, description, and error.

#### Param

Field props including orientation and standard HTML div attributes

#### Returns

A Field component

#### Example

```tsx
<Field orientation="vertical">
  <FieldLabel>Email</FieldLabel>
  <FieldContent>
    <Input type="email" />
  </FieldContent>
  <FieldDescription>Enter your email address</FieldDescription>
  <FieldError />
</Field>
```

## Functions

### FieldContent()

```ts
function FieldContent(props): ReactElement;
```

Defined in: [src/components/ui/field.tsx:220](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L220)

FieldContent component - The content area of a field

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FieldContentProps`](#fieldcontentprops) | FieldContent props |

#### Returns

`ReactElement`

A FieldContent component

***

### FieldDescription()

```ts
function FieldDescription(props): ReactElement;
```

Defined in: [src/components/ui/field.tsx:279](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L279)

FieldDescription component - A description for a field

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FieldDescriptionProps`](#fielddescriptionprops) | FieldDescription props |

#### Returns

`ReactElement`

A FieldDescription component

***

### FieldError()

```ts
function FieldError(__namedParameters): 
  | ReactElement<unknown, string | JSXElementConstructor<any>>
  | null;
```

Defined in: [src/components/ui/field.tsx:327](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L327)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`FieldErrorProps`](#fielderrorprops) |

#### Returns

  \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\>
  \| `null`

***

### FieldGroup()

```ts
function FieldGroup(props): ReactElement;
```

Defined in: [src/components/ui/field.tsx:142](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L142)

FieldGroup component - A group of fields

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FieldGroupProps`](#fieldgroupprops) | FieldGroup props |

#### Returns

`ReactElement`

A FieldGroup component

***

### FieldLabel()

```ts
function FieldLabel(props): ReactElement;
```

Defined in: [src/components/ui/field.tsx:238](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L238)

FieldLabel component - A label for a field

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FieldLabelProps`](#fieldlabelprops) | FieldLabel props |

#### Returns

`ReactElement`

A FieldLabel component

***

### FieldLegend()

```ts
function FieldLegend(props): ReactElement;
```

Defined in: [src/components/ui/field.tsx:117](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L117)

FieldLegend component - A legend for a FieldSet

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FieldLegendProps`](#fieldlegendprops) | FieldLegend props including variant |

#### Returns

`ReactElement`

A FieldLegend component

***

### FieldSeparator()

```ts
function FieldSeparator(props): ReactElement;
```

Defined in: [src/components/ui/field.tsx:299](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L299)

FieldSeparator component - A separator between fields

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FieldSeparatorProps`](#fieldseparatorprops) | FieldSeparator props including children |

#### Returns

`ReactElement`

A FieldSeparator component

***

### FieldSet()

```ts
function FieldSet(props): ReactElement;
```

Defined in: [src/components/ui/field.tsx:98](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L98)

FieldSet component - A fieldset container for form fields

Provides a fieldset container for grouping related form fields.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FieldSetProps`](#fieldsetprops) | FieldSet props including standard HTML fieldset attributes |

#### Returns

`ReactElement`

A FieldSet component

#### Example

```tsx
<FieldSet>
  <FieldLegend>Personal Information</FieldLegend>
  <Field>
    <FieldLabel>Name</FieldLabel>
    <FieldContent>
      <Input />
    </FieldContent>
  </Field>
</FieldSet>
```

***

### FieldTitle()

```ts
function FieldTitle(props): ReactElement;
```

Defined in: [src/components/ui/field.tsx:261](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/field.tsx#L261)

FieldTitle component - A title for a field

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FieldTitleProps`](#fieldtitleprops) | FieldTitle props |

#### Returns

`ReactElement`

A FieldTitle component
