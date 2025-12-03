# popover

## Interfaces

### PopoverAnchorProps

Defined in: [src/components/ui/popover.tsx:33](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/popover.tsx#L33)

PopoverAnchor component props interface
Extends Radix UI PopoverAnchor primitive props

#### Extends

- `ComponentProps`\<*typeof* `PopoverPrimitive.Anchor`\>

***

### PopoverContentProps

Defined in: [src/components/ui/popover.tsx:24](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/popover.tsx#L24)

PopoverContent component props interface
Extends Radix UI PopoverContent primitive props

#### Extends

- `ComponentProps`\<*typeof* `PopoverPrimitive.Content`\>

#### Properties

| Property | Type | Overrides | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="align"></a> `align?` | `"center"` \| `"start"` \| `"end"` | `React.ComponentProps.align` | [src/components/ui/popover.tsx:25](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/popover.tsx#L25) |
| <a id="sideoffset"></a> `sideOffset?` | `number` | `React.ComponentProps.sideOffset` | [src/components/ui/popover.tsx:26](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/popover.tsx#L26) |

***

### PopoverProps

Defined in: [src/components/ui/popover.tsx:12](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/popover.tsx#L12)

Popover component props interface
Extends Radix UI Popover primitive props

#### Extends

- `ComponentProps`\<*typeof* `PopoverPrimitive.Root`\>

***

### PopoverTriggerProps

Defined in: [src/components/ui/popover.tsx:18](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/popover.tsx#L18)

PopoverTrigger component props interface
Extends Radix UI PopoverTrigger primitive props

#### Extends

- `ComponentProps`\<*typeof* `PopoverPrimitive.Trigger`\>

## Functions

### Popover()

```ts
function Popover(props): ReactElement;
```

Defined in: [src/components/ui/popover.tsx:52](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/popover.tsx#L52)

Popover component - A popover for displaying content

Provides an accessible popover for displaying additional content.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`PopoverProps`](#popoverprops) | Popover props including open, onOpenChange, and standard Radix UI Popover attributes |

#### Returns

`ReactElement`

A Popover component

#### Example

```tsx
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Content</PopoverContent>
</Popover>
```

***

### PopoverAnchor()

```ts
function PopoverAnchor(props): ReactElement;
```

Defined in: [src/components/ui/popover.tsx:101](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/popover.tsx#L101)

PopoverAnchor component - The anchor element for the popover

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`PopoverAnchorProps`](#popoveranchorprops) | PopoverAnchor props |

#### Returns

`ReactElement`

A PopoverAnchor component

***

### PopoverContent()

```ts
function PopoverContent(props): ReactElement;
```

Defined in: [src/components/ui/popover.tsx:74](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/popover.tsx#L74)

PopoverContent component - The content container of the popover

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`PopoverContentProps`](#popovercontentprops) | PopoverContent props including align and sideOffset |

#### Returns

`ReactElement`

A PopoverContent component

***

### PopoverTrigger()

```ts
function PopoverTrigger(props): ReactElement;
```

Defined in: [src/components/ui/popover.tsx:63](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/popover.tsx#L63)

PopoverTrigger component - The element that opens the popover

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`PopoverTriggerProps`](#popovertriggerprops) | PopoverTrigger props |

#### Returns

`ReactElement`

A PopoverTrigger component
