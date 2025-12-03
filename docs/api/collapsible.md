# collapsible

## Interfaces

### CollapsibleContentProps

Defined in: [src/components/ui/collapsible.tsx:22](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/collapsible.tsx#L22)

CollapsibleContent component props interface
Extends Radix UI CollapsibleContent primitive props

#### Extends

- `ComponentProps`\<*typeof* `CollapsiblePrimitive.CollapsibleContent`\>

***

### CollapsibleProps

Defined in: [src/components/ui/collapsible.tsx:10](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/collapsible.tsx#L10)

Collapsible component props interface
Extends Radix UI Collapsible primitive props

#### Extends

- `ComponentProps`\<*typeof* `CollapsiblePrimitive.Root`\>

***

### CollapsibleTriggerProps

Defined in: [src/components/ui/collapsible.tsx:16](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/collapsible.tsx#L16)

CollapsibleTrigger component props interface
Extends Radix UI CollapsibleTrigger primitive props

#### Extends

- `ComponentProps`\<*typeof* `CollapsiblePrimitive.CollapsibleTrigger`\>

## Functions

### Collapsible()

```ts
function Collapsible(props): ReactElement;
```

Defined in: [src/components/ui/collapsible.tsx:41](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/collapsible.tsx#L41)

Collapsible component - A collapsible content section

Provides an accessible collapsible section that can be toggled open/closed.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CollapsibleProps`](#collapsibleprops) | Collapsible props including open, onOpenChange, and standard Radix UI Collapsible attributes |

#### Returns

`ReactElement`

A Collapsible component

#### Example

```tsx
<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>Content</CollapsibleContent>
</Collapsible>
```

***

### CollapsibleContent()

```ts
function CollapsibleContent(props): ReactElement;
```

Defined in: [src/components/ui/collapsible.tsx:68](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/collapsible.tsx#L68)

CollapsibleContent component - The collapsible content

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CollapsibleContentProps`](#collapsiblecontentprops) | CollapsibleContent props |

#### Returns

`ReactElement`

A CollapsibleContent component

***

### CollapsibleTrigger()

```ts
function CollapsibleTrigger(props): ReactElement;
```

Defined in: [src/components/ui/collapsible.tsx:52](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/collapsible.tsx#L52)

CollapsibleTrigger component - The element that toggles the collapsible

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CollapsibleTriggerProps`](#collapsibletriggerprops) | CollapsibleTrigger props |

#### Returns

`ReactElement`

A CollapsibleTrigger component
