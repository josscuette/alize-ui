# switch

## Interfaces

### SwitchCardProps

Defined in: [src/components/ui/switch.tsx:19](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/switch.tsx#L19)

SwitchCard component props interface
Extends Radix UI Switch primitive props and adds label/description

#### Extends

- `ComponentProps`\<*typeof* `SwitchPrimitive.Root`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="description"></a> `description?` | `string` | [src/components/ui/switch.tsx:21](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/switch.tsx#L21) |
| <a id="label"></a> `label` | `string` | [src/components/ui/switch.tsx:20](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/switch.tsx#L20) |

***

### SwitchProps

Defined in: [src/components/ui/switch.tsx:13](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/switch.tsx#L13)

Switch component props interface
Extends Radix UI Switch primitive props

#### Extends

- `ComponentProps`\<*typeof* `SwitchPrimitive.Root`\>

## Functions

### Switch()

```ts
function Switch(props): ReactElement;
```

Defined in: [src/components/ui/switch.tsx:39](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/switch.tsx#L39)

Switch component - A toggle switch control

Provides a binary on/off control with smooth animations.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SwitchProps`](#switchprops) | Switch props including checked, onCheckedChange, and standard Radix UI Switch attributes |

#### Returns

`ReactElement`

A switch element

#### Example

```tsx
<Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
<Switch disabled aria-label="Toggle feature" />
```

***

### SwitchCard()

```ts
function SwitchCard(props): ReactElement;
```

Defined in: [src/components/ui/switch.tsx:94](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/switch.tsx#L94)

SwitchCard component - A switch styled as a card with a label and optional description

Provides an enhanced visual and interactive experience for switches,
suitable for settings lists.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SwitchCardProps`](#switchcardprops) | SwitchCard props including label, description, and standard Radix UI Switch attributes |

#### Returns

`ReactElement`

A label element containing a switch and its associated text

#### Example

```tsx
<SwitchCard label="Enable notifications" description="Receive alerts for new messages." />
```
