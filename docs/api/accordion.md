# accordion

## Interfaces

### AccordionContentProps

Defined in: [src/components/ui/accordion.tsx:35](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/accordion.tsx#L35)

AccordionContent component props interface
Extends Radix UI AccordionContent primitive props

#### Extends

- `ComponentProps`\<*typeof* `AccordionPrimitive.Content`\>

***

### AccordionItemProps

Defined in: [src/components/ui/accordion.tsx:23](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/accordion.tsx#L23)

AccordionItem component props interface
Extends Radix UI AccordionItem primitive props

#### Extends

- `ComponentProps`\<*typeof* `AccordionPrimitive.Item`\>

***

### AccordionProps

Defined in: [src/components/ui/accordion.tsx:13](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/accordion.tsx#L13)

Accordion component props interface
Extends Radix UI Accordion primitive props

#### Extends

- `Omit`\<`React.ComponentProps`\<*typeof* `AccordionPrimitive.Root`\>, `"type"`\>

#### Properties

| Property | Type | Overrides | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | `Omit.children` | [src/components/ui/accordion.tsx:16](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/accordion.tsx#L16) |
| <a id="collapsible"></a> `collapsible?` | `boolean` | - | [src/components/ui/accordion.tsx:15](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/accordion.tsx#L15) |
| <a id="type"></a> `type?` | `"single"` \| `"multiple"` | - | [src/components/ui/accordion.tsx:14](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/accordion.tsx#L14) |

***

### AccordionTriggerProps

Defined in: [src/components/ui/accordion.tsx:29](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/accordion.tsx#L29)

AccordionTrigger component props interface
Extends Radix UI AccordionTrigger primitive props

#### Extends

- `ComponentProps`\<*typeof* `AccordionPrimitive.Trigger`\>

## Functions

### Accordion()

```ts
function Accordion(props): ReactElement;
```

Defined in: [src/components/ui/accordion.tsx:56](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/accordion.tsx#L56)

Accordion component - A collapsible content section

Provides an accessible accordion for organizing content into collapsible sections.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AccordionProps`](#accordionprops) | Accordion props including type, defaultValue, and standard Radix UI Accordion attributes |

#### Returns

`ReactElement`

An Accordion component

#### Example

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
</Accordion>
```

***

### AccordionContent()

```ts
function AccordionContent(props): ReactElement;
```

Defined in: [src/components/ui/accordion.tsx:123](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/accordion.tsx#L123)

AccordionContent component - The collapsible content of the accordion item

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AccordionContentProps`](#accordioncontentprops) | AccordionContent props |

#### Returns

`ReactElement`

An AccordionContent component

***

### AccordionItem()

```ts
function AccordionItem(props): ReactElement;
```

Defined in: [src/components/ui/accordion.tsx:78](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/accordion.tsx#L78)

AccordionItem component - An individual accordion item

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AccordionItemProps`](#accordionitemprops) | AccordionItem props including value |

#### Returns

`ReactElement`

An AccordionItem component

***

### AccordionTrigger()

```ts
function AccordionTrigger(props): ReactElement;
```

Defined in: [src/components/ui/accordion.tsx:96](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/accordion.tsx#L96)

AccordionTrigger component - The clickable header that toggles the accordion item

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`AccordionTriggerProps`](#accordiontriggerprops) | AccordionTrigger props |

#### Returns

`ReactElement`

An AccordionTrigger component
