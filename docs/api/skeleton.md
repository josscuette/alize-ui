# skeleton

## Interfaces

### SkeletonProps

Defined in: [src/components/ui/skeleton.tsx:8](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/skeleton.tsx#L8)

Skeleton component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

## Functions

### Skeleton()

```ts
function Skeleton(props): ReactElement;
```

Defined in: [src/components/ui/skeleton.tsx:24](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/skeleton.tsx#L24)

Skeleton component - A loading placeholder

Displays an animated placeholder while content is loading.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SkeletonProps`](#skeletonprops) | Skeleton props including standard HTML div attributes |

#### Returns

`ReactElement`

A skeleton element

#### Example

```tsx
<Skeleton className="h-4 w-32" />
<Skeleton className="h-8 w-full" />
```
