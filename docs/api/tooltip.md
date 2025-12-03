# tooltip

## Interfaces

### TooltipContentProps

Defined in: [src/components/ui/tooltip.tsx:30](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tooltip.tsx#L30)

TooltipContent component props interface
Extends Radix UI TooltipContent primitive props

#### Extends

- `ComponentProps`\<*typeof* `TooltipPrimitive.Content`\>

#### Properties

| Property | Type | Overrides | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="sideoffset"></a> `sideOffset?` | `number` | `React.ComponentProps.sideOffset` | [src/components/ui/tooltip.tsx:31](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tooltip.tsx#L31) |

***

### TooltipProps

Defined in: [src/components/ui/tooltip.tsx:18](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tooltip.tsx#L18)

Tooltip component props interface
Extends Radix UI Tooltip primitive props

#### Extends

- `ComponentProps`\<*typeof* `TooltipPrimitive.Root`\>

***

### TooltipProviderProps

Defined in: [src/components/ui/tooltip.tsx:12](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tooltip.tsx#L12)

TooltipProvider component props interface
Extends Radix UI TooltipProvider primitive props

#### Extends

- `ComponentProps`\<*typeof* `TooltipPrimitive.Provider`\>

***

### TooltipTriggerProps

Defined in: [src/components/ui/tooltip.tsx:24](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tooltip.tsx#L24)

TooltipTrigger component props interface
Extends Radix UI TooltipTrigger primitive props

#### Extends

- `ComponentProps`\<*typeof* `TooltipPrimitive.Trigger`\>

## Functions

### Tooltip()

```ts
function Tooltip(props): ReactElement;
```

Defined in: [src/components/ui/tooltip.tsx:72](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tooltip.tsx#L72)

Tooltip component - A tooltip wrapper that includes TooltipProvider

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TooltipProps`](#tooltipprops) | Tooltip props |

#### Returns

`ReactElement`

A Tooltip component

***

### TooltipContent()

```ts
function TooltipContent(props): ReactElement;
```

Defined in: [src/components/ui/tooltip.tsx:98](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tooltip.tsx#L98)

TooltipContent component - The content displayed in the tooltip

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TooltipContentProps`](#tooltipcontentprops) | TooltipContent props including sideOffset |

#### Returns

`ReactElement`

A TooltipContent component

***

### TooltipProvider()

```ts
function TooltipProvider(props): ReactElement;
```

Defined in: [src/components/ui/tooltip.tsx:53](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tooltip.tsx#L53)

TooltipProvider component - Provides context for tooltips

Wraps the application or a section to provide tooltip context.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TooltipProviderProps`](#tooltipproviderprops) | TooltipProvider props including delayDuration |

#### Returns

`ReactElement`

A TooltipProvider component

#### Example

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

***

### TooltipTrigger()

```ts
function TooltipTrigger(props): ReactElement;
```

Defined in: [src/components/ui/tooltip.tsx:87](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/tooltip.tsx#L87)

TooltipTrigger component - The element that triggers the tooltip

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TooltipTriggerProps`](#tooltiptriggerprops) | TooltipTrigger props |

#### Returns

`ReactElement`

A TooltipTrigger component
