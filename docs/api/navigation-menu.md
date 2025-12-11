# navigation-menu

## Interfaces

### NavigationMenuContentProps

Defined in: [src/components/ui/navigation-menu.tsx:38](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L38)

NavigationMenuContent component props interface
Extends Radix UI NavigationMenuContent primitive props

#### Extends

- `ComponentProps`\<*typeof* `NavigationMenuPrimitive.Content`\>

***

### NavigationMenuIndicatorProps

Defined in: [src/components/ui/navigation-menu.tsx:56](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L56)

NavigationMenuIndicator component props interface
Extends Radix UI NavigationMenuIndicator primitive props

#### Extends

- `ComponentProps`\<*typeof* `NavigationMenuPrimitive.Indicator`\>

***

### NavigationMenuItemProps

Defined in: [src/components/ui/navigation-menu.tsx:26](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L26)

NavigationMenuItem component props interface
Extends Radix UI NavigationMenuItem primitive props

#### Extends

- `ComponentProps`\<*typeof* `NavigationMenuPrimitive.Item`\>

***

### NavigationMenuLinkProps

Defined in: [src/components/ui/navigation-menu.tsx:50](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L50)

NavigationMenuLink component props interface
Extends Radix UI NavigationMenuLink primitive props

#### Extends

- `ComponentProps`\<*typeof* `NavigationMenuPrimitive.Link`\>

***

### NavigationMenuListProps

Defined in: [src/components/ui/navigation-menu.tsx:20](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L20)

NavigationMenuList component props interface
Extends Radix UI NavigationMenuList primitive props

#### Extends

- `ComponentProps`\<*typeof* `NavigationMenuPrimitive.List`\>

***

### NavigationMenuProps

Defined in: [src/components/ui/navigation-menu.tsx:12](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L12)

NavigationMenu component props interface
Extends Radix UI NavigationMenu primitive props and adds viewport prop

#### Extends

- `ComponentProps`\<*typeof* `NavigationMenuPrimitive.Root`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="viewport"></a> `viewport?` | `boolean` | [src/components/ui/navigation-menu.tsx:13](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L13) |

***

### NavigationMenuTriggerProps

Defined in: [src/components/ui/navigation-menu.tsx:32](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L32)

NavigationMenuTrigger component props interface
Extends Radix UI NavigationMenuTrigger primitive props

#### Extends

- `ComponentProps`\<*typeof* `NavigationMenuPrimitive.Trigger`\>

***

### NavigationMenuViewportProps

Defined in: [src/components/ui/navigation-menu.tsx:44](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L44)

NavigationMenuViewport component props interface
Extends Radix UI NavigationMenuViewport primitive props

#### Extends

- `ComponentProps`\<*typeof* `NavigationMenuPrimitive.Viewport`\>

## Variables

### navigationMenuTriggerStyle()

```ts
const navigationMenuTriggerStyle: (props?) => string;
```

Defined in: [src/components/ui/navigation-menu.tsx:140](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L140)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | `ClassProp` |

#### Returns

`string`

## Functions

### NavigationMenu()

```ts
function NavigationMenu(props): ReactElement;
```

Defined in: [src/components/ui/navigation-menu.tsx:79](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L79)

NavigationMenu component - A navigation menu

Provides an accessible navigation menu with dropdown support.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NavigationMenuProps`](#navigationmenuprops) | NavigationMenu props including viewport and standard Radix UI NavigationMenu attributes |

#### Returns

`ReactElement`

A NavigationMenu component

#### Example

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item</NavigationMenuTrigger>
      <NavigationMenuContent>Content</NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

***

### NavigationMenuContent()

```ts
function NavigationMenuContent(props): ReactElement;
```

Defined in: [src/components/ui/navigation-menu.tsx:174](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L174)

NavigationMenuContent component - Content displayed in navigation menu dropdowns

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NavigationMenuContentProps`](#navigationmenucontentprops) | NavigationMenuContent props |

#### Returns

`ReactElement`

A NavigationMenuContent component

***

### NavigationMenuIndicator()

```ts
function NavigationMenuIndicator(props): ReactElement;
```

Defined in: [src/components/ui/navigation-menu.tsx:244](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L244)

NavigationMenuIndicator component - An indicator for active navigation menu items

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NavigationMenuIndicatorProps`](#navigationmenuindicatorprops) | NavigationMenuIndicator props |

#### Returns

`ReactElement`

A NavigationMenuIndicator component

***

### NavigationMenuItem()

```ts
function NavigationMenuItem(props): ReactElement;
```

Defined in: [src/components/ui/navigation-menu.tsx:127](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L127)

NavigationMenuItem component - An individual navigation menu item

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NavigationMenuItemProps`](#navigationmenuitemprops) | NavigationMenuItem props |

#### Returns

`ReactElement`

A NavigationMenuItem component

***

### NavigationMenuLink()

```ts
function NavigationMenuLink(props): ReactElement;
```

Defined in: [src/components/ui/navigation-menu.tsx:223](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L223)

NavigationMenuLink component - A link within a navigation menu

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NavigationMenuLinkProps`](#navigationmenulinkprops) | NavigationMenuLink props |

#### Returns

`ReactElement`

A NavigationMenuLink component

***

### NavigationMenuList()

```ts
function NavigationMenuList(props): ReactElement;
```

Defined in: [src/components/ui/navigation-menu.tsx:106](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L106)

NavigationMenuList component - A list container for navigation menu items

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NavigationMenuListProps`](#navigationmenulistprops) | NavigationMenuList props |

#### Returns

`ReactElement`

A NavigationMenuList component

***

### NavigationMenuTrigger()

```ts
function NavigationMenuTrigger(props): ReactElement;
```

Defined in: [src/components/ui/navigation-menu.tsx:149](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L149)

NavigationMenuTrigger component - A trigger button for navigation menu items

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NavigationMenuTriggerProps`](#navigationmenutriggerprops) | NavigationMenuTrigger props |

#### Returns

`ReactElement`

A NavigationMenuTrigger component

***

### NavigationMenuViewport()

```ts
function NavigationMenuViewport(props): ReactElement;
```

Defined in: [src/components/ui/navigation-menu.tsx:196](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/navigation-menu.tsx#L196)

NavigationMenuViewport component - A viewport container for navigation menu content

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NavigationMenuViewportProps`](#navigationmenuviewportprops) | NavigationMenuViewport props |

#### Returns

`ReactElement`

A NavigationMenuViewport component
