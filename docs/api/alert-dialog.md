# alert-dialog

## Interfaces

### AlertDialogActionProps

Defined in: [src/components/ui/alert-dialog.tsx:67](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L67)

AlertDialogAction component props interface
Extends Radix UI AlertDialogAction primitive props

#### Extends

- `ComponentProps`\<*typeof* `AlertDialogPrimitive.Action`\>

***

### AlertDialogCancelProps

Defined in: [src/components/ui/alert-dialog.tsx:73](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L73)

AlertDialogCancel component props interface
Extends Radix UI AlertDialogCancel primitive props

#### Extends

- `ComponentProps`\<*typeof* `AlertDialogPrimitive.Cancel`\>

***

### AlertDialogContentProps

Defined in: [src/components/ui/alert-dialog.tsx:37](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L37)

AlertDialogContent component props interface
Extends Radix UI AlertDialogContent primitive props

#### Extends

- `ComponentProps`\<*typeof* `AlertDialogPrimitive.Content`\>

***

### AlertDialogDescriptionProps

Defined in: [src/components/ui/alert-dialog.tsx:61](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L61)

AlertDialogDescription component props interface
Extends Radix UI AlertDialogDescription primitive props

#### Extends

- `ComponentProps`\<*typeof* `AlertDialogPrimitive.Description`\>

***

### AlertDialogFooterProps

Defined in: [src/components/ui/alert-dialog.tsx:49](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L49)

AlertDialogFooter component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### AlertDialogHeaderProps

Defined in: [src/components/ui/alert-dialog.tsx:43](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L43)

AlertDialogHeader component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### AlertDialogOverlayProps

Defined in: [src/components/ui/alert-dialog.tsx:31](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L31)

AlertDialogOverlay component props interface
Extends Radix UI AlertDialogOverlay primitive props

#### Extends

- `ComponentProps`\<*typeof* `AlertDialogPrimitive.Overlay`\>

***

### AlertDialogPortalProps

Defined in: [src/components/ui/alert-dialog.tsx:25](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L25)

AlertDialogPortal component props interface
Extends Radix UI AlertDialogPortal primitive props

#### Extends

- `ComponentProps`\<*typeof* `AlertDialogPrimitive.Portal`\>

***

### AlertDialogProps

Defined in: [src/components/ui/alert-dialog.tsx:13](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L13)

AlertDialog component props interface
Extends Radix UI AlertDialog primitive props

#### Extends

- `ComponentProps`\<*typeof* `AlertDialogPrimitive.Root`\>

***

### AlertDialogTitleProps

Defined in: [src/components/ui/alert-dialog.tsx:55](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L55)

AlertDialogTitle component props interface
Extends Radix UI AlertDialogTitle primitive props

#### Extends

- `ComponentProps`\<*typeof* `AlertDialogPrimitive.Title`\>

***

### AlertDialogTriggerProps

Defined in: [src/components/ui/alert-dialog.tsx:19](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L19)

AlertDialogTrigger component props interface
Extends Radix UI AlertDialogTrigger primitive props

#### Extends

- `ComponentProps`\<*typeof* `AlertDialogPrimitive.Trigger`\>

## Functions

### AlertDialog()

```ts
function AlertDialog(props): ReactElement;
```

Defined in: [src/components/ui/alert-dialog.tsx:101](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L101)

AlertDialog component - A modal dialog for important confirmations

Provides an accessible alert dialog for critical confirmations and actions.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertDialogProps`](#alertdialogprops) | AlertDialog props including open, onOpenChange, and standard Radix UI AlertDialog attributes |

#### Returns

`ReactElement`

An AlertDialog component

#### Example

```tsx
<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

***

### AlertDialogAction()

```ts
function AlertDialogAction(props): ReactElement;
```

Defined in: [src/components/ui/alert-dialog.tsx:258](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L258)

AlertDialogAction component - The action button in the alert dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertDialogActionProps`](#alertdialogactionprops) | AlertDialogAction props |

#### Returns

`ReactElement`

An AlertDialogAction component

***

### AlertDialogCancel()

```ts
function AlertDialogCancel(props): ReactElement;
```

Defined in: [src/components/ui/alert-dialog.tsx:275](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L275)

AlertDialogCancel component - The cancel button in the alert dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertDialogCancelProps`](#alertdialogcancelprops) | AlertDialogCancel props |

#### Returns

`ReactElement`

An AlertDialogCancel component

***

### AlertDialogContent()

```ts
function AlertDialogContent(props): ReactElement;
```

Defined in: [src/components/ui/alert-dialog.tsx:159](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L159)

AlertDialogContent component - The main content container of the alert dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertDialogContentProps`](#alertdialogcontentprops) | AlertDialogContent props |

#### Returns

`ReactElement`

An AlertDialogContent component

***

### AlertDialogDescription()

```ts
function AlertDialogDescription(props): ReactElement;
```

Defined in: [src/components/ui/alert-dialog.tsx:240](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L240)

AlertDialogDescription component - The description text of the alert dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertDialogDescriptionProps`](#alertdialogdescriptionprops) | AlertDialogDescription props |

#### Returns

`ReactElement`

An AlertDialogDescription component

***

### AlertDialogFooter()

```ts
function AlertDialogFooter(props): ReactElement;
```

Defined in: [src/components/ui/alert-dialog.tsx:201](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L201)

AlertDialogFooter component - The footer section of the alert dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertDialogFooterProps`](#alertdialogfooterprops) | AlertDialogFooter props |

#### Returns

`ReactElement`

An AlertDialogFooter component

***

### AlertDialogHeader()

```ts
function AlertDialogHeader(props): ReactElement;
```

Defined in: [src/components/ui/alert-dialog.tsx:183](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L183)

AlertDialogHeader component - The header section of the alert dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertDialogHeaderProps`](#alertdialogheaderprops) | AlertDialogHeader props |

#### Returns

`ReactElement`

An AlertDialogHeader component

***

### AlertDialogOverlay()

```ts
function AlertDialogOverlay(props): ReactElement;
```

Defined in: [src/components/ui/alert-dialog.tsx:138](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L138)

AlertDialogOverlay component - The backdrop overlay for the alert dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertDialogOverlayProps`](#alertdialogoverlayprops) | AlertDialogOverlay props |

#### Returns

`ReactElement`

An AlertDialogOverlay component

***

### AlertDialogPortal()

```ts
function AlertDialogPortal(props): ReactElement;
```

Defined in: [src/components/ui/alert-dialog.tsx:125](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L125)

AlertDialogPortal component - Portals the alert dialog content

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertDialogPortalProps`](#alertdialogportalprops) | AlertDialogPortal props |

#### Returns

`ReactElement`

An AlertDialogPortal component

***

### AlertDialogTitle()

```ts
function AlertDialogTitle(props): ReactElement;
```

Defined in: [src/components/ui/alert-dialog.tsx:222](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L222)

AlertDialogTitle component - The title of the alert dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertDialogTitleProps`](#alertdialogtitleprops) | AlertDialogTitle props |

#### Returns

`ReactElement`

An AlertDialogTitle component

***

### AlertDialogTrigger()

```ts
function AlertDialogTrigger(props): ReactElement;
```

Defined in: [src/components/ui/alert-dialog.tsx:112](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/alert-dialog.tsx#L112)

AlertDialogTrigger component - The element that opens the alert dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AlertDialogTriggerProps`](#alertdialogtriggerprops) | AlertDialogTrigger props |

#### Returns

`ReactElement`

An AlertDialogTrigger component
