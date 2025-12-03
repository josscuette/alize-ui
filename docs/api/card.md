# card

## Interfaces

### CardActionProps

Defined in: [src/components/ui/card.tsx:33](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L33)

CardAction component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### CardContentProps

Defined in: [src/components/ui/card.tsx:39](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L39)

CardContent component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### CardDescriptionProps

Defined in: [src/components/ui/card.tsx:27](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L27)

CardDescription component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### CardFooterProps

Defined in: [src/components/ui/card.tsx:45](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L45)

CardFooter component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### CardHeaderProps

Defined in: [src/components/ui/card.tsx:15](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L15)

CardHeader component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### CardProps

Defined in: [src/components/ui/card.tsx:9](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L9)

Card component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### CardTitleProps

Defined in: [src/components/ui/card.tsx:21](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L21)

CardTitle component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

## Functions

### Card()

```ts
function Card(props): ReactElement;
```

Defined in: [src/components/ui/card.tsx:68](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L68)

Card component - A container for content with header, body, and footer sections

Provides a structured layout for displaying content in cards.
Use CardHeader, CardTitle, CardDescription, CardContent, and CardFooter as children.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CardProps`](#cardprops) | Card props including standard HTML div attributes |

#### Returns

`ReactElement`

A card container element

#### Example

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

***

### CardAction()

```ts
function CardAction(props): ReactElement;
```

Defined in: [src/components/ui/card.tsx:156](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L156)

CardAction component - An action button area within a CardHeader

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CardActionProps`](#cardactionprops) | CardAction props including standard HTML div attributes |

#### Returns

`ReactElement`

A card action element

***

### CardContent()

```ts
function CardContent(props): ReactElement;
```

Defined in: [src/components/ui/card.tsx:181](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L181)

CardContent component - The main content section of a Card

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CardContentProps`](#cardcontentprops) | CardContent props including standard HTML div attributes |

#### Returns

`ReactElement`

A card content element

***

### CardDescription()

```ts
function CardDescription(props): ReactElement;
```

Defined in: [src/components/ui/card.tsx:134](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L134)

CardDescription component - The description within a CardHeader

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CardDescriptionProps`](#carddescriptionprops) | CardDescription props including standard HTML div attributes |

#### Returns

`ReactElement`

A card description element

***

### CardFooter()

```ts
function CardFooter(props): ReactElement;
```

Defined in: [src/components/ui/card.tsx:203](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L203)

CardFooter component - The footer section of a Card

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CardFooterProps`](#cardfooterprops) | CardFooter props including standard HTML div attributes |

#### Returns

`ReactElement`

A card footer element

***

### CardHeader()

```ts
function CardHeader(props): ReactElement;
```

Defined in: [src/components/ui/card.tsx:87](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L87)

CardHeader component - The header section of a Card

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CardHeaderProps`](#cardheaderprops) | CardHeader props including standard HTML div attributes |

#### Returns

`ReactElement`

A card header element

***

### CardTitle()

```ts
function CardTitle(props): ReactElement;
```

Defined in: [src/components/ui/card.tsx:112](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/card.tsx#L112)

CardTitle component - The title within a CardHeader

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CardTitleProps`](#cardtitleprops) | CardTitle props including standard HTML div attributes |

#### Returns

`ReactElement`

A card title element
