# dialog

## Interfaces

### DialogCloseProps

Defined in: [src/components/ui/dialog.tsx:31](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L31)

DialogClose component props interface
Extends Radix UI DialogClose primitive props

#### Extends

- `ComponentProps`\<*typeof* `DialogPrimitive.Close`\>

***

### DialogContentProps

Defined in: [src/components/ui/dialog.tsx:43](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L43)

DialogContent component props interface
Extends Radix UI DialogContent primitive props and adds showCloseButton prop

#### Extends

- `ComponentProps`\<*typeof* `DialogPrimitive.Content`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="showclosebutton"></a> `showCloseButton?` | `boolean` | [src/components/ui/dialog.tsx:44](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L44) |

***

### DialogDescriptionProps

Defined in: [src/components/ui/dialog.tsx:69](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L69)

DialogDescription component props interface
Extends Radix UI DialogDescription primitive props

#### Extends

- `ComponentProps`\<*typeof* `DialogPrimitive.Description`\>

***

### DialogFooterProps

Defined in: [src/components/ui/dialog.tsx:57](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L57)

DialogFooter component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### DialogHeaderProps

Defined in: [src/components/ui/dialog.tsx:51](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L51)

DialogHeader component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### DialogOverlayProps

Defined in: [src/components/ui/dialog.tsx:37](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L37)

DialogOverlay component props interface
Extends Radix UI DialogOverlay primitive props

#### Extends

- `ComponentProps`\<*typeof* `DialogPrimitive.Overlay`\>

***

### DialogPortalProps

Defined in: [src/components/ui/dialog.tsx:25](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L25)

DialogPortal component props interface
Extends Radix UI DialogPortal primitive props

#### Extends

- `ComponentProps`\<*typeof* `DialogPrimitive.Portal`\>

***

### DialogProps

Defined in: [src/components/ui/dialog.tsx:13](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L13)

Dialog component props interface
Extends Radix UI Dialog primitive props

#### Extends

- `ComponentProps`\<*typeof* `DialogPrimitive.Root`\>

***

### DialogTitleProps

Defined in: [src/components/ui/dialog.tsx:63](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L63)

DialogTitle component props interface
Extends Radix UI DialogTitle primitive props

#### Extends

- `ComponentProps`\<*typeof* `DialogPrimitive.Title`\>

***

### DialogTriggerProps

Defined in: [src/components/ui/dialog.tsx:19](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L19)

DialogTrigger component props interface
Extends Radix UI DialogTrigger primitive props

#### Extends

- `ComponentProps`\<*typeof* `DialogPrimitive.Trigger`\>

## Variables

### Dialog

```ts
const Dialog: NamedExoticComponent<DialogProps>;
```

Defined in: [src/components/ui/dialog.tsx:93](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L93)

Dialog component - A modal dialog

Provides an accessible modal dialog for displaying content.
Built on Radix UI primitives for accessibility.

#### Param

Dialog props including open, onOpenChange, and standard Radix UI Dialog attributes

#### Returns

A Dialog component

#### Example

```tsx
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

***

### DialogContent

```ts
const DialogContent: NamedExoticComponent<DialogContentProps>;
```

Defined in: [src/components/ui/dialog.tsx:158](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L158)

DialogContent component - The main content container of the dialog

#### Param

DialogContent props including showCloseButton

#### Returns

A DialogContent component

## Functions

### DialogClose()

```ts
function DialogClose(props): ReactElement;
```

Defined in: [src/components/ui/dialog.tsx:126](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L126)

DialogClose component - The element that closes the dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DialogCloseProps`](#dialogcloseprops) | DialogClose props |

#### Returns

`ReactElement`

A DialogClose component

***

### DialogDescription()

```ts
function DialogDescription(props): ReactElement;
```

Defined in: [src/components/ui/dialog.tsx:241](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L241)

DialogDescription component - The description text of the dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DialogDescriptionProps`](#dialogdescriptionprops) | DialogDescription props |

#### Returns

`ReactElement`

A DialogDescription component

***

### DialogFooter()

```ts
function DialogFooter(props): ReactElement;
```

Defined in: [src/components/ui/dialog.tsx:205](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L205)

DialogFooter component - The footer section of the dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DialogFooterProps`](#dialogfooterprops) | DialogFooter props |

#### Returns

`ReactElement`

A DialogFooter component

***

### DialogHeader()

```ts
function DialogHeader(__namedParameters): ReactElement;
```

Defined in: [src/components/ui/dialog.tsx:190](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L190)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `DetailedHTMLProps`\<`HTMLAttributes`\<`HTMLDivElement`\>\> |

#### Returns

`ReactElement`

***

### DialogOverlay()

```ts
function DialogOverlay(props): ReactElement;
```

Defined in: [src/components/ui/dialog.tsx:137](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L137)

DialogOverlay component - The backdrop overlay for the dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DialogOverlayProps`](#dialogoverlayprops) | DialogOverlay props |

#### Returns

`ReactElement`

A DialogOverlay component

***

### DialogPortal()

```ts
function DialogPortal(props): ReactElement;
```

Defined in: [src/components/ui/dialog.tsx:115](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L115)

DialogPortal component - Portals the dialog content

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DialogPortalProps`](#dialogportalprops) | DialogPortal props |

#### Returns

`ReactElement`

A DialogPortal component

***

### DialogTitle()

```ts
function DialogTitle(props): ReactElement;
```

Defined in: [src/components/ui/dialog.tsx:223](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L223)

DialogTitle component - The title of the dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DialogTitleProps`](#dialogtitleprops) | DialogTitle props |

#### Returns

`ReactElement`

A DialogTitle component

***

### DialogTrigger()

```ts
function DialogTrigger(props): ReactElement;
```

Defined in: [src/components/ui/dialog.tsx:104](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/dialog.tsx#L104)

DialogTrigger component - The element that opens the dialog

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DialogTriggerProps`](#dialogtriggerprops) | DialogTrigger props |

#### Returns

`ReactElement`

A DialogTrigger component
