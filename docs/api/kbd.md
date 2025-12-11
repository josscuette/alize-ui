# kbd

## Interfaces

### KbdGroupProps

Defined in: [src/components/ui/kbd.tsx:14](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/kbd.tsx#L14)

KbdGroup component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### KbdProps

Defined in: [src/components/ui/kbd.tsx:8](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/kbd.tsx#L8)

Kbd component props interface
Extends native kbd element props

#### Extends

- `ComponentProps`\<`"kbd"`\>

## Functions

### Kbd()

```ts
function Kbd(props): ReactElement;
```

Defined in: [src/components/ui/kbd.tsx:33](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/kbd.tsx#L33)

Kbd component - A keyboard key indicator

Displays a keyboard key or key combination for documentation or UI hints.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`KbdProps`](#kbdprops) | Kbd props including standard HTML kbd attributes |

#### Returns

`ReactElement`

A kbd element

#### Example

```tsx
<Kbd>Ctrl</Kbd>
<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>
```

***

### KbdGroup()

```ts
function KbdGroup(props): ReactElement;
```

Defined in: [src/components/ui/kbd.tsx:53](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/kbd.tsx#L53)

KbdGroup component - A group of keyboard keys

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`KbdGroupProps`](#kbdgroupprops) | KbdGroup props |

#### Returns

`ReactElement`

A KbdGroup component
