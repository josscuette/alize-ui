# data-table

## Interfaces

### DataTableColumn

Defined in: [src/components/ui/data-table.tsx:14](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/data-table.tsx#L14)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="cell"></a> `cell` | (`row`) => `ReactNode` | [src/components/ui/data-table.tsx:17](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/data-table.tsx#L17) |
| <a id="classname"></a> `className?` | `string` | [src/components/ui/data-table.tsx:18](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/data-table.tsx#L18) |
| <a id="header"></a> `header` | `ReactNode` | [src/components/ui/data-table.tsx:16](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/data-table.tsx#L16) |
| <a id="key"></a> `key` | `string` | [src/components/ui/data-table.tsx:15](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/data-table.tsx#L15) |

***

### DataTableProps

Defined in: [src/components/ui/data-table.tsx:21](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/data-table.tsx#L21)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="classname-1"></a> `className?` | `string` | [src/components/ui/data-table.tsx:24](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/data-table.tsx#L24) |
| <a id="columns"></a> `columns` | [`DataTableColumn`](#datatablecolumn)\<`T`\>[] | [src/components/ui/data-table.tsx:23](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/data-table.tsx#L23) |
| <a id="data"></a> `data` | `T`[] | [src/components/ui/data-table.tsx:22](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/data-table.tsx#L22) |
| <a id="emptymessage"></a> `emptyMessage?` | `string` | [src/components/ui/data-table.tsx:25](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/data-table.tsx#L25) |

## Variables

### DataTable()

```ts
const DataTable: <T>(props) => ReactElement;
```

Defined in: [src/components/ui/data-table.tsx:28](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/data-table.tsx#L28)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Record`\<`string`, `any`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`DataTableProps`](#datatableprops)\<`T`\> |

#### Returns

`ReactElement`
