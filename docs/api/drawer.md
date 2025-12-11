# drawer

## Interfaces

### DrawerCloseProps

Defined in: [src/components/ui/drawer.tsx:30](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L30)

DrawerClose component props interface
Extends vaul Drawer Close props

#### Extends

- `ComponentProps`\<*typeof* `DrawerPrimitive.Close`\>

***

### DrawerContentProps

Defined in: [src/components/ui/drawer.tsx:42](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L42)

DrawerContent component props interface
Extends vaul Drawer Content props

#### Extends

- `ComponentProps`\<*typeof* `DrawerPrimitive.Content`\>

***

### DrawerDescriptionProps

Defined in: [src/components/ui/drawer.tsx:66](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L66)

DrawerDescription component props interface
Extends vaul Drawer Description props

#### Extends

- `ComponentProps`\<*typeof* `DrawerPrimitive.Description`\>

***

### DrawerFooterProps

Defined in: [src/components/ui/drawer.tsx:54](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L54)

DrawerFooter component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### DrawerHeaderProps

Defined in: [src/components/ui/drawer.tsx:48](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L48)

DrawerHeader component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### DrawerOverlayProps

Defined in: [src/components/ui/drawer.tsx:36](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L36)

DrawerOverlay component props interface
Extends vaul Drawer Overlay props

#### Extends

- `ComponentProps`\<*typeof* `DrawerPrimitive.Overlay`\>

***

### DrawerPortalProps

Defined in: [src/components/ui/drawer.tsx:24](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L24)

DrawerPortal component props interface
Extends vaul Drawer Portal props

#### Extends

- `ComponentProps`\<*typeof* `DrawerPrimitive.Portal`\>

***

### DrawerTitleProps

Defined in: [src/components/ui/drawer.tsx:60](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L60)

DrawerTitle component props interface
Extends vaul Drawer Title props

#### Extends

- `ComponentProps`\<*typeof* `DrawerPrimitive.Title`\>

***

### DrawerTriggerProps

Defined in: [src/components/ui/drawer.tsx:18](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L18)

DrawerTrigger component props interface
Extends vaul Drawer Trigger props

#### Extends

- `ComponentProps`\<*typeof* `DrawerPrimitive.Trigger`\>

## Type Aliases

### DrawerProps

```ts
type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root>;
```

Defined in: [src/components/ui/drawer.tsx:12](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L12)

Drawer component props interface
Extends vaul Drawer Root props

## Functions

### Drawer()

```ts
function Drawer(props): ReactElement;
```

Defined in: [src/components/ui/drawer.tsx:90](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L90)

Drawer component - A drawer/sheet component

Provides a drawer component that slides in from the edges of the screen.
Built on vaul library for smooth animations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `DialogProps` | Drawer props including open, onOpenChange, and standard vaul Drawer attributes |

#### Returns

`ReactElement`

A Drawer component

#### Example

```tsx
<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description</DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>
```

***

### DrawerClose()

```ts
function DrawerClose(props): ReactElement;
```

Defined in: [src/components/ui/drawer.tsx:123](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L123)

DrawerClose component - A close button for the drawer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DrawerCloseProps`](#drawercloseprops) | DrawerClose props |

#### Returns

`ReactElement`

A DrawerClose component

***

### DrawerContent()

```ts
function DrawerContent(props): ReactElement;
```

Defined in: [src/components/ui/drawer.tsx:155](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L155)

DrawerContent component - The main content area of the drawer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DrawerContentProps`](#drawercontentprops) | DrawerContent props |

#### Returns

`ReactElement`

A DrawerContent component

***

### DrawerDescription()

```ts
function DrawerDescription(props): ReactElement;
```

Defined in: [src/components/ui/drawer.tsx:238](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L238)

DrawerDescription component - A description for the drawer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DrawerDescriptionProps`](#drawerdescriptionprops) | DrawerDescription props |

#### Returns

`ReactElement`

A DrawerDescription component

***

### DrawerFooter()

```ts
function DrawerFooter(props): ReactElement;
```

Defined in: [src/components/ui/drawer.tsx:205](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L205)

DrawerFooter component - A footer section for the drawer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DrawerFooterProps`](#drawerfooterprops) | DrawerFooter props |

#### Returns

`ReactElement`

A DrawerFooter component

***

### DrawerHeader()

```ts
function DrawerHeader(props): ReactElement;
```

Defined in: [src/components/ui/drawer.tsx:187](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L187)

DrawerHeader component - A header section for the drawer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DrawerHeaderProps`](#drawerheaderprops) | DrawerHeader props |

#### Returns

`ReactElement`

A DrawerHeader component

***

### DrawerOverlay()

```ts
function DrawerOverlay(props): ReactElement;
```

Defined in: [src/components/ui/drawer.tsx:134](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L134)

DrawerOverlay component - An overlay backdrop for the drawer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DrawerOverlayProps`](#draweroverlayprops) | DrawerOverlay props |

#### Returns

`ReactElement`

A DrawerOverlay component

***

### DrawerPortal()

```ts
function DrawerPortal(props): ReactElement;
```

Defined in: [src/components/ui/drawer.tsx:112](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L112)

DrawerPortal component - A portal for drawer content

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DrawerPortalProps`](#drawerportalprops) | DrawerPortal props |

#### Returns

`ReactElement`

A DrawerPortal component

***

### DrawerTitle()

```ts
function DrawerTitle(props): ReactElement;
```

Defined in: [src/components/ui/drawer.tsx:220](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L220)

DrawerTitle component - A title for the drawer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DrawerTitleProps`](#drawertitleprops) | DrawerTitle props |

#### Returns

`ReactElement`

A DrawerTitle component

***

### DrawerTrigger()

```ts
function DrawerTrigger(props): ReactElement;
```

Defined in: [src/components/ui/drawer.tsx:101](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/drawer.tsx#L101)

DrawerTrigger component - A trigger button for the drawer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`DrawerTriggerProps`](#drawertriggerprops) | DrawerTrigger props |

#### Returns

`ReactElement`

A DrawerTrigger component
