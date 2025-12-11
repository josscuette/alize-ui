# pagination

## Interfaces

### PaginationContentProps

Defined in: [src/components/ui/pagination.tsx:21](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L21)

PaginationContent component props interface
Extends native ul element props

#### Extends

- `ComponentProps`\<`"ul"`\>

***

### PaginationEllipsisProps

Defined in: [src/components/ui/pagination.tsx:54](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L54)

PaginationEllipsis component props interface
Extends native span element props

#### Extends

- `ComponentProps`\<`"span"`\>

***

### PaginationItemProps

Defined in: [src/components/ui/pagination.tsx:27](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L27)

PaginationItem component props interface
Extends native li element props

#### Extends

- `ComponentProps`\<`"li"`\>

***

### PaginationLinkProps

Defined in: [src/components/ui/pagination.tsx:33](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L33)

PaginationLink component props interface
Extends native a element props and adds isActive and size props

#### Extends

- `ComponentProps`\<`"a"`\>

#### Extended by

- [`PaginationPreviousProps`](#paginationpreviousprops)
- [`PaginationNextProps`](#paginationnextprops)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/components/ui/pagination.tsx:34](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L34) |
| <a id="size"></a> `size?` | \| `"default"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"icon"` \| `"icon-sm"` \| `"icon-lg"` \| `"icon-xs"` \| `null` | [src/components/ui/pagination.tsx:35](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L35) |

***

### PaginationNextProps

Defined in: [src/components/ui/pagination.tsx:48](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L48)

PaginationNext component props interface
Extends PaginationLink props

#### Extends

- [`PaginationLinkProps`](#paginationlinkprops)

#### Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="isactive-1"></a> `isActive?` | `boolean` | [`PaginationLinkProps`](#paginationlinkprops).[`isActive`](#isactive) | [src/components/ui/pagination.tsx:34](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L34) |
| <a id="size-1"></a> `size?` | \| `"default"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"icon"` \| `"icon-sm"` \| `"icon-lg"` \| `"icon-xs"` \| `null` | [`PaginationPreviousProps`](#paginationpreviousprops).[`size`](#size-2) | [src/components/ui/pagination.tsx:35](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L35) |

***

### PaginationPreviousProps

Defined in: [src/components/ui/pagination.tsx:42](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L42)

PaginationPrevious component props interface
Extends PaginationLink props

#### Extends

- [`PaginationLinkProps`](#paginationlinkprops)

#### Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="isactive-2"></a> `isActive?` | `boolean` | [`PaginationLinkProps`](#paginationlinkprops).[`isActive`](#isactive) | [src/components/ui/pagination.tsx:34](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L34) |
| <a id="size-2"></a> `size?` | \| `"default"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"icon"` \| `"icon-sm"` \| `"icon-lg"` \| `"icon-xs"` \| `null` | [`PaginationPreviousProps`](#paginationpreviousprops).[`size`](#size-2) | [src/components/ui/pagination.tsx:35](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L35) |

***

### PaginationProps

Defined in: [src/components/ui/pagination.tsx:15](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L15)

Pagination component props interface
Extends native nav element props

#### Extends

- `ComponentProps`\<`"nav"`\>

## Functions

### Pagination()

```ts
function Pagination(props): ReactElement;
```

Defined in: [src/components/ui/pagination.tsx:81](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L81)

Pagination component - A pagination navigation

Provides navigation controls for paginated content.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`PaginationProps`](#paginationprops) | Pagination props including standard HTML nav attributes |

#### Returns

`ReactElement`

A pagination navigation element

#### Example

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/page/1" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/2" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/page/3" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

***

### PaginationContent()

```ts
function PaginationContent(props): ReactElement;
```

Defined in: [src/components/ui/pagination.tsx:98](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L98)

PaginationContent component - The container for pagination items

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`PaginationContentProps`](#paginationcontentprops) | PaginationContent props |

#### Returns

`ReactElement`

A PaginationContent component

***

### PaginationEllipsis()

```ts
function PaginationEllipsis(props): ReactElement;
```

Defined in: [src/components/ui/pagination.tsx:214](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L214)

PaginationEllipsis component - An ellipsis indicator for truncated pages

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`PaginationEllipsisProps`](#paginationellipsisprops) | PaginationEllipsis props |

#### Returns

`ReactElement`

A PaginationEllipsis component

***

### PaginationItem()

```ts
function PaginationItem(props): ReactElement;
```

Defined in: [src/components/ui/pagination.tsx:116](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L116)

PaginationItem component - An individual pagination item

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`PaginationItemProps`](#paginationitemprops) | PaginationItem props |

#### Returns

`ReactElement`

A PaginationItem component

***

### PaginationLink()

```ts
function PaginationLink(props): ReactElement;
```

Defined in: [src/components/ui/pagination.tsx:125](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L125)

PaginationLink component - A link to a specific page

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`PaginationLinkProps`](#paginationlinkprops) | PaginationLink props including isActive and size |

#### Returns

`ReactElement`

A PaginationLink component

***

### PaginationNext()

```ts
function PaginationNext(props): ReactElement;
```

Defined in: [src/components/ui/pagination.tsx:192](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L192)

PaginationNext component - A link to the next page

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`PaginationNextProps`](#paginationnextprops) | PaginationNext props |

#### Returns

`ReactElement`

A PaginationNext component

***

### PaginationPrevious()

```ts
function PaginationPrevious(props): ReactElement;
```

Defined in: [src/components/ui/pagination.tsx:170](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/pagination.tsx#L170)

PaginationPrevious component - A link to the previous page

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`PaginationPreviousProps`](#paginationpreviousprops) | PaginationPrevious props |

#### Returns

`ReactElement`

A PaginationPrevious component
