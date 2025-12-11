# scroll-area

## Interfaces

### ScrollAreaProps

Defined in: [src/components/ui/scroll-area.tsx:12](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/scroll-area.tsx#L12)

ScrollArea component props interface
Extends Radix UI ScrollArea primitive props

#### Extends

- `ComponentProps`\<*typeof* `ScrollAreaPrimitive.Root`\>

***

### ScrollBarProps

Defined in: [src/components/ui/scroll-area.tsx:18](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/scroll-area.tsx#L18)

ScrollBar component props interface
Extends Radix UI ScrollAreaScrollbar primitive props

#### Extends

- `ComponentProps`\<*typeof* `ScrollAreaPrimitive.ScrollAreaScrollbar`\>

#### Properties

| Property | Type | Overrides | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="orientation"></a> `orientation?` | `"horizontal"` \| `"vertical"` | `React.ComponentProps.orientation` | [src/components/ui/scroll-area.tsx:19](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/scroll-area.tsx#L19) |

## Functions

### ScrollArea()

```ts
function ScrollArea(props): ReactElement;
```

Defined in: [src/components/ui/scroll-area.tsx:38](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/scroll-area.tsx#L38)

ScrollArea component - A scrollable container

Provides a scrollable container with custom scrollbars.
Built on Radix UI primitives.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ScrollAreaProps`](#scrollareaprops) | ScrollArea props including standard Radix UI ScrollArea attributes |

#### Returns

`ReactElement`

A ScrollArea component

#### Example

```tsx
<ScrollArea className="h-72 w-48">
  <div>Long content...</div>
</ScrollArea>
```

***

### ScrollBar()

```ts
function ScrollBar(props): ReactElement;
```

Defined in: [src/components/ui/scroll-area.tsx:66](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/scroll-area.tsx#L66)

ScrollBar component - A custom scrollbar for the ScrollArea

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ScrollBarProps`](#scrollbarprops) | ScrollBar props including orientation |

#### Returns

`ReactElement`

A ScrollBar component
