# alert

## Interfaces

### AlertDescriptionProps

Defined in: [src/components/ui/alert.tsx:38](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert.tsx#L38)

AlertDescription component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### AlertProps

Defined in: [src/components/ui/alert.tsx:26](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert.tsx#L26)

Alert component props interface
Extends native div element props and adds variant prop

#### Extends

- `ComponentProps`\<`"div"`\>.`VariantProps`\<*typeof* `alertVariants`\>

#### Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="variant"></a> `variant?` | `"default"` \| `"destructive"` \| `null` | `VariantProps.variant` | [src/components/ui/alert.tsx:10](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert.tsx#L10) |

***

### AlertTitleProps

Defined in: [src/components/ui/alert.tsx:32](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert.tsx#L32)

AlertTitle component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

## Functions

### Alert()

```ts
function Alert(props): ReactElement;
```

Defined in: [src/components/ui/alert.tsx:57](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert.tsx#L57)

Alert component - A contextual alert message

Displays an alert message with optional title and description.
Supports multiple variants (default, destructive).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertProps`](#alertprops) | Alert props including variant and standard HTML div attributes |

#### Returns

`ReactElement`

An alert element

#### Example

```tsx
<Alert variant="default">
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

***

### AlertDescription()

```ts
function AlertDescription(props): ReactElement;
```

Defined in: [src/components/ui/alert.tsx:95](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert.tsx#L95)

AlertDescription component - The description text of the alert

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertDescriptionProps`](#alertdescriptionprops) | AlertDescription props |

#### Returns

`ReactElement`

An AlertDescription component

***

### AlertTitle()

```ts
function AlertTitle(props): ReactElement;
```

Defined in: [src/components/ui/alert.tsx:77](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert.tsx#L77)

AlertTitle component - The title of the alert

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertTitleProps`](#alerttitleprops) | AlertTitle props |

#### Returns

`ReactElement`

An AlertTitle component
