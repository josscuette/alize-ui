# carousel

## Interfaces

### CarouselContentProps

Defined in: [src/components/ui/carousel.tsx:50](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L50)

CarouselContent component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### CarouselItemProps

Defined in: [src/components/ui/carousel.tsx:56](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L56)

CarouselItem component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### CarouselNextProps

Defined in: [src/components/ui/carousel.tsx:68](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L68)

CarouselNext component props interface
Extends Button props

#### Extends

- `ComponentProps`\<*typeof* [`Button`](button.md#button)\>

#### Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="aschild"></a> `asChild?` | `boolean` | Render as a different element using Radix UI Slot **Default** `false` | `React.ComponentProps.asChild` | [src/components/ui/button.tsx:24](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button.tsx#L24) |
| <a id="size"></a> `size?` | \| `"default"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"icon"` \| `"icon-sm"` \| `"icon-lg"` \| `"icon-xs"` \| `null` | - | `React.ComponentProps.size` | [src/components/ui/button.tsx:95](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button.tsx#L95) |
| <a id="variant"></a> `variant?` | \| `"link"` \| `"default"` \| `"destructive"` \| `"secondary"` \| `"outline"` \| `"ghost"` \| `"tertiary"` \| `null` | - | `React.ComponentProps.variant` | [src/components/ui/button.tsx:48](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button.tsx#L48) |

***

### CarouselPreviousProps

Defined in: [src/components/ui/carousel.tsx:62](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L62)

CarouselPrevious component props interface
Extends Button props

#### Extends

- `ComponentProps`\<*typeof* [`Button`](button.md#button)\>

#### Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="aschild-1"></a> `asChild?` | `boolean` | Render as a different element using Radix UI Slot **Default** `false` | `React.ComponentProps.asChild` | [src/components/ui/button.tsx:24](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button.tsx#L24) |
| <a id="size-1"></a> `size?` | \| `"default"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"icon"` \| `"icon-sm"` \| `"icon-lg"` \| `"icon-xs"` \| `null` | - | `React.ComponentProps.size` | [src/components/ui/button.tsx:95](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button.tsx#L95) |
| <a id="variant-1"></a> `variant?` | \| `"link"` \| `"default"` \| `"destructive"` \| `"secondary"` \| `"outline"` \| `"ghost"` \| `"tertiary"` \| `null` | - | `React.ComponentProps.variant` | [src/components/ui/button.tsx:48](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/button.tsx#L48) |

***

### CarouselProps

Defined in: [src/components/ui/carousel.tsx:26](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L26)

Carousel component props interface
Extends native div element props and adds carousel-specific props

#### Extends

- `ComponentProps`\<`"div"`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="opts"></a> `opts?` | `Partial`\<`OptionsType`\> | [src/components/ui/carousel.tsx:27](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L27) |
| <a id="orientation"></a> `orientation?` | `"horizontal"` \| `"vertical"` | [src/components/ui/carousel.tsx:29](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L29) |
| <a id="plugins"></a> `plugins?` | `CreatePluginType`\<`LoosePluginType`, \{ \}\>[] | [src/components/ui/carousel.tsx:28](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L28) |
| <a id="setapi"></a> `setApi?` | (`api`) => `void` | [src/components/ui/carousel.tsx:30](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L30) |

## Type Aliases

### CarouselApi

```ts
type CarouselApi = UseEmblaCarouselType[1];
```

Defined in: [src/components/ui/carousel.tsx:16](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L16)

CarouselApi type
Represents the Embla Carousel API instance

## Variables

### Carousel

```ts
const Carousel: NamedExoticComponent<CarouselProps>;
```

Defined in: [src/components/ui/carousel.tsx:103](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L103)

Carousel component - A carousel/slider component

Provides a carousel component with navigation controls.
Built on Embla Carousel for smooth scrolling.

#### Param

Carousel props including orientation, opts, plugins, setApi, and standard HTML div attributes

#### Returns

A Carousel component

#### Example

```tsx
<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

## Functions

### CarouselContent()

```ts
function CarouselContent(props): ReactElement;
```

Defined in: [src/components/ui/carousel.tsx:198](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L198)

CarouselContent component - The content container for carousel items

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CarouselContentProps`](#carouselcontentprops) | CarouselContent props |

#### Returns

`ReactElement`

A CarouselContent component

***

### CarouselItem()

```ts
function CarouselItem(props): ReactElement;
```

Defined in: [src/components/ui/carousel.tsx:224](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L224)

CarouselItem component - An individual slide/item in the carousel

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CarouselItemProps`](#carouselitemprops) | CarouselItem props |

#### Returns

`ReactElement`

A CarouselItem component

***

### CarouselNext()

```ts
function CarouselNext(props): ReactElement;
```

Defined in: [src/components/ui/carousel.tsx:282](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L282)

CarouselNext component - A button to navigate to the next slide

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CarouselNextProps`](#carouselnextprops) | CarouselNext props including variant and size |

#### Returns

`ReactElement`

A CarouselNext component

***

### CarouselPrevious()

```ts
function CarouselPrevious(props): ReactElement;
```

Defined in: [src/components/ui/carousel.tsx:247](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/carousel.tsx#L247)

CarouselPrevious component - A button to navigate to the previous slide

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CarouselPreviousProps`](#carouselpreviousprops) | CarouselPrevious props including variant and size |

#### Returns

`ReactElement`

A CarouselPrevious component
