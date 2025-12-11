# tabs

## Interfaces

### TabsContentProps

Defined in: [src/components/ui/tabs.tsx:30](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tabs.tsx#L30)

TabsContent component props interface
Extends Radix UI TabsContent primitive props

#### Extends

- `ComponentProps`\<*typeof* `TabsPrimitive.Content`\>

***

### TabsListProps

Defined in: [src/components/ui/tabs.tsx:18](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tabs.tsx#L18)

TabsList component props interface
Extends Radix UI TabsList primitive props

#### Extends

- `ComponentProps`\<*typeof* `TabsPrimitive.List`\>

***

### TabsProps

Defined in: [src/components/ui/tabs.tsx:12](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tabs.tsx#L12)

Tabs component props interface
Extends Radix UI Tabs primitive props

#### Extends

- `ComponentProps`\<*typeof* `TabsPrimitive.Root`\>

***

### TabsTriggerProps

Defined in: [src/components/ui/tabs.tsx:24](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tabs.tsx#L24)

TabsTrigger component props interface
Extends Radix UI TabsTrigger primitive props

#### Extends

- `ComponentProps`\<*typeof* `TabsPrimitive.Trigger`\>

## Functions

### Tabs()

```ts
function Tabs(props): ReactElement;
```

Defined in: [src/components/ui/tabs.tsx:53](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tabs.tsx#L53)

Tabs component - A tabbed interface

Provides a tabbed interface for organizing content into multiple panels.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TabsProps`](#tabsprops) | Tabs props including value, onValueChange, and standard Radix UI Tabs attributes |

#### Returns

`ReactElement`

A tabs container element

#### Example

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

***

### TabsContent()

```ts
function TabsContent(props): ReactElement;
```

Defined in: [src/components/ui/tabs.tsx:113](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tabs.tsx#L113)

TabsContent component - The content panel for a tab

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TabsContentProps`](#tabscontentprops) | TabsContent props |

#### Returns

`ReactElement`

A TabsContent component

***

### TabsList()

```ts
function TabsList(props): ReactElement;
```

Defined in: [src/components/ui/tabs.tsx:71](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tabs.tsx#L71)

TabsList component - The container for tab triggers

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TabsListProps`](#tabslistprops) | TabsList props |

#### Returns

`ReactElement`

A TabsList component

***

### TabsTrigger()

```ts
function TabsTrigger(props): ReactElement;
```

Defined in: [src/components/ui/tabs.tsx:92](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tabs.tsx#L92)

TabsTrigger component - An individual tab trigger button

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TabsTriggerProps`](#tabstriggerprops) | TabsTrigger props |

#### Returns

`ReactElement`

A TabsTrigger component
