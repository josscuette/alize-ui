# highchart

## Interfaces

### AlizeChartColors

Defined in: [src/components/ui/highchart.tsx:154](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L154)

Alize dataviz theme colors for Highcharts
Uses semantic dataviz tokens for consistent theming

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="axis"></a> `axis` | `string` | - | [src/components/ui/highchart.tsx:169](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L169) |
| <a id="background"></a> `background` | `string` | - | [src/components/ui/highchart.tsx:170](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L170) |
| <a id="categorical"></a> `categorical` | `string`[] | Categorical palette (10 colors) for discrete categories | [src/components/ui/highchart.tsx:156](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L156) |
| <a id="grid"></a> `grid` | `string` | - | [src/components/ui/highchart.tsx:168](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L168) |
| <a id="nodata"></a> `noData` | `string` | No data color | [src/components/ui/highchart.tsx:158](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L158) |
| <a id="rag"></a> `rag` | \{ `danger`: \{ `medium`: `string`; `strong`: `string`; `weak`: `string`; \}; `success`: \{ `medium`: `string`; `strong`: `string`; `weak`: `string`; \}; `warning`: \{ `medium`: `string`; `strong`: `string`; `weak`: `string`; \}; \} | RAG colors (danger, warning, success) with weak/medium/strong variants | [src/components/ui/highchart.tsx:160](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L160) |
| `rag.danger` | \{ `medium`: `string`; `strong`: `string`; `weak`: `string`; \} | - | [src/components/ui/highchart.tsx:161](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L161) |
| `rag.danger.medium` | `string` | - | [src/components/ui/highchart.tsx:161](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L161) |
| `rag.danger.strong` | `string` | - | [src/components/ui/highchart.tsx:161](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L161) |
| `rag.danger.weak` | `string` | - | [src/components/ui/highchart.tsx:161](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L161) |
| `rag.success` | \{ `medium`: `string`; `strong`: `string`; `weak`: `string`; \} | - | [src/components/ui/highchart.tsx:163](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L163) |
| `rag.success.medium` | `string` | - | [src/components/ui/highchart.tsx:163](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L163) |
| `rag.success.strong` | `string` | - | [src/components/ui/highchart.tsx:163](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L163) |
| `rag.success.weak` | `string` | - | [src/components/ui/highchart.tsx:163](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L163) |
| `rag.warning` | \{ `medium`: `string`; `strong`: `string`; `weak`: `string`; \} | - | [src/components/ui/highchart.tsx:162](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L162) |
| `rag.warning.medium` | `string` | - | [src/components/ui/highchart.tsx:162](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L162) |
| `rag.warning.strong` | `string` | - | [src/components/ui/highchart.tsx:162](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L162) |
| `rag.warning.weak` | `string` | - | [src/components/ui/highchart.tsx:162](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L162) |
| <a id="text"></a> `text` | `string` | UI colors from semantic tokens | [src/components/ui/highchart.tsx:166](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L166) |
| <a id="textsubdued"></a> `textSubdued` | `string` | - | [src/components/ui/highchart.tsx:167](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L167) |
| <a id="tooltipbackground"></a> `tooltipBackground` | `string` | - | [src/components/ui/highchart.tsx:171](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L171) |

***

### DivergentColors

Defined in: [src/components/ui/highchart.tsx:331](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L331)

Divergent palette colors interface

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="negative"></a> `negative` | `string` | [src/components/ui/highchart.tsx:332](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L332) |
| <a id="neutral"></a> `neutral` | `string` | [src/components/ui/highchart.tsx:334](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L334) |
| <a id="positive"></a> `positive` | `string` | [src/components/ui/highchart.tsx:333](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L333) |

***

### HighchartProps

Defined in: [src/components/ui/highchart.tsx:521](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L521)

Highchart component props interface

#### Extends

- `HTMLAttributes`\<`HTMLDivElement`\>

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="allowchartupdate"></a> `allowChartUpdate?` | `boolean` | Whether to allow chart update | [src/components/ui/highchart.tsx:527](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L527) |
| <a id="callback"></a> `callback?` | (`chart`) => `void` | Callback when chart is created | [src/components/ui/highchart.tsx:529](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L529) |
| <a id="containerprops"></a> `containerProps?` | `HTMLAttributes`\<`HTMLDivElement`\> | Container props | [src/components/ui/highchart.tsx:531](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L531) |
| <a id="immutable"></a> `immutable?` | `boolean` | Whether to update the chart immutably | [src/components/ui/highchart.tsx:525](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L525) |
| <a id="options"></a> `options` | `Options` | Highcharts configuration options | [src/components/ui/highchart.tsx:523](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L523) |

## Functions

### generateDivergentPalette()

```ts
function generateDivergentPalette(
   negativeColor, 
   positiveColor, 
   _neutralColor, 
   steps): string[];
```

Defined in: [src/components/ui/highchart.tsx:274](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L274)

Generate a divergent palette from two base colors
Center is a light blend of both colors (not gray), extremes are saturated

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `negativeColor` | `string` | `undefined` | Color for negative values (left side) |
| `positiveColor` | `string` | `undefined` | Color for positive values (right side) |
| `_neutralColor` | `string` | `undefined` | Unused, kept for API compatibility |
| `steps` | `number` | `7` | Total number of steps (should be odd, default 7) |

#### Returns

`string`[]

***

### generateSequentialPalette()

```ts
function generateSequentialPalette(baseColor, steps): string[];
```

Defined in: [src/components/ui/highchart.tsx:127](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L127)

Generate a sequential color palette from a base color
Creates shades from light (low intensity) to dark (high intensity)

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `baseColor` | `string` | `undefined` | The base hex color |
| `steps` | `number` | `7` | Number of steps in the palette (default 7) |

#### Returns

`string`[]

***

### getContrastTextColor()

```ts
function getContrastTextColor(
   backgroundColor, 
   darkColor, 
   lightColor): string;
```

Defined in: [src/components/ui/highchart.tsx:109](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L109)

Get the best text color (white or dark) for a given background color
Uses WCAG AA standard (4.5:1 for normal text)

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `backgroundColor` | `string` | `undefined` | Hex color of the background |
| `darkColor` | `string` | `"#0e1d23"` | Dark text color option (default: #0e1d23) |
| `lightColor` | `string` | `"#ffffff"` | Light text color option (default: #ffffff) |

#### Returns

`string`

***

### Highchart()

```ts
function Highchart(props): ReactElement;
```

Defined in: [src/components/ui/highchart.tsx:552](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L552)

Highchart component - A wrapper around Highcharts for React

Provides a themed Highcharts instance with Alize design system integration.
Automatically applies semantic dataviz tokens for consistent styling.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`HighchartProps`](#highchartprops) | Highchart props including options and container attributes |

#### Returns

`ReactElement`

A Highcharts chart element

#### Example

```tsx
const options = {
  chart: { type: 'line' },
  series: [{ data: [1, 2, 3, 4, 5] }]
};
<Highchart options={options} className="h-64" />
```

***

### useAlizeChartColors()

```ts
function useAlizeChartColors(): AlizeChartColors;
```

Defined in: [src/components/ui/highchart.tsx:178](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L178)

Hook to get Alize dataviz theme colors for Highcharts
Reads CSS variables and returns color values

#### Returns

[`AlizeChartColors`](#alizechartcolors)

***

### useDivergentColors()

```ts
function useDivergentColors(): DivergentColors;
```

Defined in: [src/components/ui/highchart.tsx:341](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L341)

Hook to get divergent palette base colors from CSS variables
Uses Ocean for negative and Orange for positive

#### Returns

[`DivergentColors`](#divergentcolors)

***

### useDivergentPalette()

```ts
function useDivergentPalette(steps): string[];
```

Defined in: [src/components/ui/highchart.tsx:376](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L376)

Hook to generate a divergent palette
Uses Ocean for negative values and Orange for positive values

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `steps` | `number` | `7` | Total number of steps (should be odd, default 7) |

#### Returns

`string`[]

***

### useHighchartsTheme()

```ts
function useHighchartsTheme(): Options;
```

Defined in: [src/components/ui/highchart.tsx:387](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L387)

Generate Highcharts theme options based on Alize dataviz tokens

#### Returns

`Options`

***

### useSequentialPalette()

```ts
function useSequentialPalette(colorIndex, steps): string[];
```

Defined in: [src/components/ui/highchart.tsx:257](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/highchart.tsx#L257)

Hook to generate a sequential palette from a categorical color

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `colorIndex` | `number` | `1` | Index of the categorical color (1-10) |
| `steps` | `number` | `7` | Number of steps in the palette (default 7) |

#### Returns

`string`[]
