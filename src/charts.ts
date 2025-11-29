/**
 * Alize UI - Charts Module
 * 
 * This module requires highcharts and highcharts-react-official to be installed.
 * Install with: npm install highcharts highcharts-react-official
 * 
 * @example
 * ```tsx
 * import { Highchart, useHighchartsTheme, useAlizeChartColors } from 'alize-ui/charts'
 * ```
 */

export { 
  Highchart, 
  useHighchartsTheme, 
  useAlizeChartColors, 
  useSequentialPalette, 
  generateSequentialPalette, 
  useDivergentPalette, 
  useDivergentColors, 
  generateDivergentPalette, 
  getContrastTextColor 
} from './components/ui/highchart'

export type { 
  HighchartProps, 
  AlizeChartColors, 
  DivergentColors 
} from './components/ui/highchart'

