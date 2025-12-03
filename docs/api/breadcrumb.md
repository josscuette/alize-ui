# breadcrumb

## Interfaces

### BreadcrumbEllipsisProps

Defined in: [src/components/ui/breadcrumb.tsx:49](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L49)

BreadcrumbEllipsis component props interface
Extends native span element props

#### Extends

- `ComponentProps`\<`"span"`\>

***

### BreadcrumbItemProps

Defined in: [src/components/ui/breadcrumb.tsx:23](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L23)

BreadcrumbItem component props interface
Extends native li element props

#### Extends

- `ComponentProps`\<`"li"`\>

***

### BreadcrumbLinkProps

Defined in: [src/components/ui/breadcrumb.tsx:29](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L29)

BreadcrumbLink component props interface
Extends native a element props and adds asChild prop

#### Extends

- `ComponentProps`\<`"a"`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="aschild"></a> `asChild?` | `boolean` | [src/components/ui/breadcrumb.tsx:30](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L30) |

***

### BreadcrumbListProps

Defined in: [src/components/ui/breadcrumb.tsx:17](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L17)

BreadcrumbList component props interface
Extends native ol element props

#### Extends

- `ComponentProps`\<`"ol"`\>

***

### BreadcrumbPageProps

Defined in: [src/components/ui/breadcrumb.tsx:37](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L37)

BreadcrumbPage component props interface
Extends native span element props

#### Extends

- `ComponentProps`\<`"span"`\>

***

### BreadcrumbProps

Defined in: [src/components/ui/breadcrumb.tsx:11](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L11)

Breadcrumb component props interface
Extends native nav element props

#### Extends

- `ComponentProps`\<`"nav"`\>

***

### BreadcrumbSeparatorProps

Defined in: [src/components/ui/breadcrumb.tsx:43](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L43)

BreadcrumbSeparator component props interface
Extends native li element props

#### Extends

- `ComponentProps`\<`"li"`\>

## Functions

### Breadcrumb()

```ts
function Breadcrumb(props): ReactElement;
```

Defined in: [src/components/ui/breadcrumb.tsx:74](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L74)

Breadcrumb component - A navigation breadcrumb trail

Displays a breadcrumb navigation showing the current page's location in the hierarchy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`BreadcrumbProps`](#breadcrumbprops) | Breadcrumb props including standard HTML nav attributes |

#### Returns

`ReactElement`

A breadcrumb navigation element

#### Example

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

***

### BreadcrumbEllipsis()

```ts
function BreadcrumbEllipsis(props): ReactElement;
```

Defined in: [src/components/ui/breadcrumb.tsx:178](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L178)

BreadcrumbEllipsis component - An ellipsis indicator for truncated breadcrumbs

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`BreadcrumbEllipsisProps`](#breadcrumbellipsisprops) | BreadcrumbEllipsis props |

#### Returns

`ReactElement`

A BreadcrumbEllipsis component

***

### BreadcrumbItem()

```ts
function BreadcrumbItem(props): ReactElement;
```

Defined in: [src/components/ui/breadcrumb.tsx:101](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L101)

BreadcrumbItem component - An individual breadcrumb item

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`BreadcrumbItemProps`](#breadcrumbitemprops) | BreadcrumbItem props |

#### Returns

`ReactElement`

A BreadcrumbItem component

***

### BreadcrumbLink()

```ts
function BreadcrumbLink(props): ReactElement;
```

Defined in: [src/components/ui/breadcrumb.tsx:116](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L116)

BreadcrumbLink component - A link within a breadcrumb item

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`BreadcrumbLinkProps`](#breadcrumblinkprops) | BreadcrumbLink props including asChild |

#### Returns

`ReactElement`

A BreadcrumbLink component

***

### BreadcrumbList()

```ts
function BreadcrumbList(props): ReactElement;
```

Defined in: [src/components/ui/breadcrumb.tsx:83](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L83)

BreadcrumbList component - The ordered list container for breadcrumb items

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`BreadcrumbListProps`](#breadcrumblistprops) | BreadcrumbList props |

#### Returns

`ReactElement`

A BreadcrumbList component

***

### BreadcrumbPage()

```ts
function BreadcrumbPage(props): ReactElement;
```

Defined in: [src/components/ui/breadcrumb.tsx:137](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L137)

BreadcrumbPage component - The current page indicator in a breadcrumb

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`BreadcrumbPageProps`](#breadcrumbpageprops) | BreadcrumbPage props |

#### Returns

`ReactElement`

A BreadcrumbPage component

***

### BreadcrumbSeparator()

```ts
function BreadcrumbSeparator(props): ReactElement;
```

Defined in: [src/components/ui/breadcrumb.tsx:155](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/breadcrumb.tsx#L155)

BreadcrumbSeparator component - A separator between breadcrumb items

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`BreadcrumbSeparatorProps`](#breadcrumbseparatorprops) | BreadcrumbSeparator props |

#### Returns

`ReactElement`

A BreadcrumbSeparator component
