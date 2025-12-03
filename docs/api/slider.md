# slider

## Interfaces

### SliderProps

Defined in: [src/components/ui/slider.tsx:12](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/slider.tsx#L12)

Slider component props interface
Extends Radix UI Slider primitive props

#### Extends

- `ComponentProps`\<*typeof* `SliderPrimitive.Root`\>

## Functions

### Slider()

```ts
function Slider(props): ReactElement;
```

Defined in: [src/components/ui/slider.tsx:29](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/slider.tsx#L29)

Slider component - A range input slider

Provides a draggable slider for selecting values within a range.
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`SliderProps`](#sliderprops) | Slider props including value, defaultValue, min, max, and standard Radix UI Slider attributes |

#### Returns

`ReactElement`

A slider element

#### Example

```tsx
<Slider defaultValue={[50]} min={0} max={100} />
<Slider value={value} onValueChange={setValue} />
```
