# sonner

## Interfaces

### ToasterProps

Defined in: [src/components/ui/sonner.tsx:17](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sonner.tsx#L17)

Toaster component props interface
Extends sonner ToasterProps

#### Extends

- `ToasterProps`

## Functions

### Toaster()

```ts
function Toaster(props): Element;
```

Defined in: [src/components/ui/sonner.tsx:33](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/sonner.tsx#L33)

Toaster component - A toast notification system

Provides toast notifications using sonner library.
Automatically adapts to the current theme.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ToasterProps`](#toasterprops) | Toaster props including position, duration, and standard sonner ToasterProps |

#### Returns

`Element`

A Toaster component

#### Example

```tsx
<Toaster position="top-right" />
```
