# progress

## Interfaces

### ProgressProps

Defined in: [src/components/ui/progress.tsx:13](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/progress.tsx#L13)

Progress component props interface
Extends Radix UI Progress primitive props

#### Extends

- `ComponentProps`\<*typeof* `ProgressPrimitive.Root`\>

## Functions

### Progress()

```ts
function Progress(props): ReactElement;
```

Defined in: [src/components/ui/progress.tsx:30](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/progress.tsx#L30)

Progress component - A progress bar indicator

Displays a visual progress indicator with customizable value.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `ProgressProps` & `RefAttributes`\<`HTMLDivElement`\> | Progress props including value and standard Radix UI Progress attributes |

#### Returns

`ReactElement`

A progress bar element

#### Example

```tsx
<Progress value={50} />
<Progress value={75} className="h-4" />
```
