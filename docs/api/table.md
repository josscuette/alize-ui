# table

## Interfaces

### TableBodyProps

Defined in: [src/components/ui/table.tsx:23](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L23)

TableBody component props interface
Extends native tbody element props

#### Extends

- `ComponentProps`\<`"tbody"`\>

***

### TableCaptionProps

Defined in: [src/components/ui/table.tsx:53](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L53)

TableCaption component props interface
Extends native caption element props

#### Extends

- `ComponentProps`\<`"caption"`\>

***

### TableCellProps

Defined in: [src/components/ui/table.tsx:47](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L47)

TableCell component props interface
Extends native td element props

#### Extends

- `ComponentProps`\<`"td"`\>

***

### TableFooterProps

Defined in: [src/components/ui/table.tsx:29](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L29)

TableFooter component props interface
Extends native tfoot element props

#### Extends

- `ComponentProps`\<`"tfoot"`\>

***

### TableHeaderProps

Defined in: [src/components/ui/table.tsx:17](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L17)

TableHeader component props interface
Extends native thead element props

#### Extends

- `ComponentProps`\<`"thead"`\>

***

### TableHeadProps

Defined in: [src/components/ui/table.tsx:41](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L41)

TableHead component props interface
Extends native th element props

#### Extends

- `ComponentProps`\<`"th"`\>

***

### TableProps

Defined in: [src/components/ui/table.tsx:11](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L11)

Table component props interface
Extends native table element props

#### Extends

- `ComponentProps`\<`"table"`\>

***

### TableRowProps

Defined in: [src/components/ui/table.tsx:35](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L35)

TableRow component props interface
Extends native tr element props

#### Extends

- `ComponentProps`\<`"tr"`\>

## Functions

### Table()

```ts
function Table(props): ReactElement;
```

Defined in: [src/components/ui/table.tsx:81](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L81)

Table component - A data table

Provides a structured table for displaying tabular data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TableProps`](#tableprops) | Table props including standard HTML table attributes |

#### Returns

`ReactElement`

A table element wrapped in a scrollable container

#### Example

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

***

### TableBody()

```ts
function TableBody(props): ReactElement;
```

Defined in: [src/components/ui/table.tsx:116](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L116)

TableBody component - The body section of the table

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TableBodyProps`](#tablebodyprops) | TableBody props |

#### Returns

`ReactElement`

A TableBody component

***

### TableCaption()

```ts
function TableCaption(props): ReactElement;
```

Defined in: [src/components/ui/table.tsx:203](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L203)

TableCaption component - A caption for the table

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TableCaptionProps`](#tablecaptionprops) | TableCaption props |

#### Returns

`ReactElement`

A TableCaption component

***

### TableCell()

```ts
function TableCell(props): ReactElement;
```

Defined in: [src/components/ui/table.tsx:185](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L185)

TableCell component - A data cell in the table

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TableCellProps`](#tablecellprops) | TableCell props |

#### Returns

`ReactElement`

A TableCell component

***

### TableFooter()

```ts
function TableFooter(props): ReactElement;
```

Defined in: [src/components/ui/table.tsx:131](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L131)

TableFooter component - The footer section of the table

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TableFooterProps`](#tablefooterprops) | TableFooter props |

#### Returns

`ReactElement`

A TableFooter component

***

### TableHead()

```ts
function TableHead(props): ReactElement;
```

Defined in: [src/components/ui/table.tsx:167](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L167)

TableHead component - A header cell in the table

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TableHeadProps`](#tableheadprops) | TableHead props |

#### Returns

`ReactElement`

A TableHead component

***

### TableHeader()

```ts
function TableHeader(props): ReactElement;
```

Defined in: [src/components/ui/table.tsx:101](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L101)

TableHeader component - The header section of the table

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TableHeaderProps`](#tableheaderprops) | TableHeader props |

#### Returns

`ReactElement`

A TableHeader component

***

### TableRow()

```ts
function TableRow(props): ReactElement;
```

Defined in: [src/components/ui/table.tsx:149](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/table.tsx#L149)

TableRow component - A row in the table

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TableRowProps`](#tablerowprops) | TableRow props |

#### Returns

`ReactElement`

A TableRow component
