# hover-card

## Interfaces

### HoverCardContentProps

Defined in: [src/components/ui/hover-card.tsx:24](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/hover-card.tsx#L24)

HoverCardContent component props interface
Extends Radix UI HoverCardContent primitive props

#### Extends

- `ComponentProps`\<*typeof* `HoverCardPrimitive.Content`\>

#### Properties

| Property | Type | Overrides | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="align"></a> `align?` | `"center"` \| `"start"` \| `"end"` | `React.ComponentProps.align` | [src/components/ui/hover-card.tsx:25](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/hover-card.tsx#L25) |
| <a id="sideoffset"></a> `sideOffset?` | `number` | `React.ComponentProps.sideOffset` | [src/components/ui/hover-card.tsx:26](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/hover-card.tsx#L26) |

***

### HoverCardProps

Defined in: [src/components/ui/hover-card.tsx:12](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/hover-card.tsx#L12)

HoverCard component props interface
Extends Radix UI HoverCard primitive props

#### Extends

- `ComponentProps`\<*typeof* `HoverCardPrimitive.Root`\>

***

### HoverCardTriggerProps

Defined in: [src/components/ui/hover-card.tsx:18](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/hover-card.tsx#L18)

HoverCardTrigger component props interface
Extends Radix UI HoverCardTrigger primitive props

#### Extends

- `ComponentProps`\<*typeof* `HoverCardPrimitive.Trigger`\>

## Functions

### HoverCard()

```ts
function HoverCard(props): ReactElement;
```

Defined in: [src/components/ui/hover-card.tsx:46](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/hover-card.tsx#L46)

HoverCard component - A hover card for displaying additional content

Provides an accessible hover card that appears when hovering over a trigger element.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`HoverCardProps`](#hovercardprops) | HoverCard props including openDelay, closeDelay, and standard Radix UI HoverCard attributes |

#### Returns

`ReactElement`

A HoverCard component

#### Example

```tsx
<HoverCard>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>Additional information</HoverCardContent>
</HoverCard>
```

***

### HoverCardContent()

```ts
function HoverCardContent(props): ReactElement;
```

Defined in: [src/components/ui/hover-card.tsx:70](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/hover-card.tsx#L70)

HoverCardContent component - The content container of the hover card

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`HoverCardContentProps`](#hovercardcontentprops) | HoverCardContent props including align and sideOffset |

#### Returns

`ReactElement`

A HoverCardContent component

***

### HoverCardTrigger()

```ts
function HoverCardTrigger(props): ReactElement;
```

Defined in: [src/components/ui/hover-card.tsx:57](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/hover-card.tsx#L57)

HoverCardTrigger component - The element that triggers the hover card

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`HoverCardTriggerProps`](#hovercardtriggerprops) | HoverCardTrigger props |

#### Returns

`ReactElement`

A HoverCardTrigger component
