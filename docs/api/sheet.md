# sheet

## Interfaces

### SheetCloseProps

Defined in: [src/components/ui/sheet.tsx:25](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L25)

SheetClose component props interface
Extends Radix UI DialogClose primitive props

#### Extends

- `ComponentProps`\<*typeof* `SheetPrimitive.Close`\>

***

### SheetContentProps

Defined in: [src/components/ui/sheet.tsx:43](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L43)

SheetContent component props interface
Extends Radix UI DialogContent primitive props and adds side prop

#### Extends

- `ComponentProps`\<*typeof* `SheetPrimitive.Content`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="side"></a> `side?` | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | [src/components/ui/sheet.tsx:44](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L44) |

***

### SheetDescriptionProps

Defined in: [src/components/ui/sheet.tsx:69](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L69)

SheetDescription component props interface
Extends Radix UI DialogDescription primitive props

#### Extends

- `ComponentProps`\<*typeof* `SheetPrimitive.Description`\>

***

### SheetFooterProps

Defined in: [src/components/ui/sheet.tsx:57](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L57)

SheetFooter component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### SheetHeaderProps

Defined in: [src/components/ui/sheet.tsx:51](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L51)

SheetHeader component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### SheetOverlayProps

Defined in: [src/components/ui/sheet.tsx:37](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L37)

SheetOverlay component props interface
Extends Radix UI DialogOverlay primitive props

#### Extends

- `ComponentProps`\<*typeof* `SheetPrimitive.Overlay`\>

***

### SheetPortalProps

Defined in: [src/components/ui/sheet.tsx:31](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L31)

SheetPortal component props interface
Extends Radix UI DialogPortal primitive props

#### Extends

- `ComponentProps`\<*typeof* `SheetPrimitive.Portal`\>

***

### SheetProps

Defined in: [src/components/ui/sheet.tsx:13](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L13)

Sheet component props interface
Extends Radix UI Dialog (Sheet) primitive props

#### Extends

- `ComponentProps`\<*typeof* `SheetPrimitive.Root`\>

***

### SheetTitleProps

Defined in: [src/components/ui/sheet.tsx:63](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L63)

SheetTitle component props interface
Extends Radix UI DialogTitle primitive props

#### Extends

- `ComponentProps`\<*typeof* `SheetPrimitive.Title`\>

***

### SheetTriggerProps

Defined in: [src/components/ui/sheet.tsx:19](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L19)

SheetTrigger component props interface
Extends Radix UI DialogTrigger primitive props

#### Extends

- `ComponentProps`\<*typeof* `SheetPrimitive.Trigger`\>

## Functions

### Sheet()

```ts
function Sheet(props): ReactElement;
```

Defined in: [src/components/ui/sheet.tsx:93](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L93)

Sheet component - A slide-over panel

Provides an accessible slide-over panel that appears from the side of the screen.
Built on Radix UI Dialog primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SheetProps`](#sheetprops) | Sheet props including open, onOpenChange, and standard Radix UI Dialog attributes |

#### Returns

`ReactElement`

A Sheet component

#### Example

```tsx
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

***

### SheetClose()

```ts
function SheetClose(props): ReactElement;
```

Defined in: [src/components/ui/sheet.tsx:113](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L113)

SheetClose component - The element that closes the sheet

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SheetCloseProps`](#sheetcloseprops) | SheetClose props |

#### Returns

`ReactElement`

A SheetClose component

***

### SheetContent()

```ts
function SheetContent(props): ReactElement;
```

Defined in: [src/components/ui/sheet.tsx:156](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L156)

SheetContent component - The main content container of the sheet

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SheetContentProps`](#sheetcontentprops) | SheetContent props including side |

#### Returns

`ReactElement`

A SheetContent component

***

### SheetDescription()

```ts
function SheetDescription(props): ReactElement;
```

Defined in: [src/components/ui/sheet.tsx:247](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L247)

SheetDescription component - The description text of the sheet

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SheetDescriptionProps`](#sheetdescriptionprops) | SheetDescription props |

#### Returns

`ReactElement`

A SheetDescription component

***

### SheetFooter()

```ts
function SheetFooter(props): ReactElement;
```

Defined in: [src/components/ui/sheet.tsx:214](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L214)

SheetFooter component - The footer section of the sheet

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SheetFooterProps`](#sheetfooterprops) | SheetFooter props |

#### Returns

`ReactElement`

A SheetFooter component

***

### SheetHeader()

```ts
function SheetHeader(props): ReactElement;
```

Defined in: [src/components/ui/sheet.tsx:199](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L199)

SheetHeader component - The header section of the sheet

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SheetHeaderProps`](#sheetheaderprops) | SheetHeader props |

#### Returns

`ReactElement`

A SheetHeader component

***

### SheetTitle()

```ts
function SheetTitle(props): ReactElement;
```

Defined in: [src/components/ui/sheet.tsx:229](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L229)

SheetTitle component - The title of the sheet

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SheetTitleProps`](#sheettitleprops) | SheetTitle props |

#### Returns

`ReactElement`

A SheetTitle component

***

### SheetTrigger()

```ts
function SheetTrigger(props): ReactElement;
```

Defined in: [src/components/ui/sheet.tsx:102](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sheet.tsx#L102)

SheetTrigger component - The element that opens the sheet

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SheetTriggerProps`](#sheettriggerprops) | SheetTrigger props |

#### Returns

`ReactElement`

A SheetTrigger component
