"use client"

import * as React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import HighchartsMore from "highcharts/highcharts-more"
import HighchartsHeatmap from "highcharts/modules/heatmap"
import HighchartsTreemap from "highcharts/modules/treemap"
import HighchartsSolidGauge from "highcharts/modules/solid-gauge"

import { cn } from "../../lib/utils"

// Initialize Highcharts modules (static imports, initialized once)
let modulesInitialized = false
type HighchartsModuleInit = (hc: typeof Highcharts) => void

function initHighchartsModules(): void {
  if (modulesInitialized || typeof window === "undefined") return
  
  try {
    const initMore = HighchartsMore as unknown as HighchartsModuleInit
    const initHeatmap = HighchartsHeatmap as unknown as HighchartsModuleInit
    const initTreemap = HighchartsTreemap as unknown as HighchartsModuleInit
    const initSolidGauge = HighchartsSolidGauge as unknown as HighchartsModuleInit
    
    if (typeof initMore === "function") initMore(Highcharts)
    if (typeof initHeatmap === "function") initHeatmap(Highcharts)
    if (typeof initTreemap === "function") initTreemap(Highcharts)
    if (typeof initSolidGauge === "function") initSolidGauge(Highcharts)
    
    modulesInitialized = true
  } catch (e) {
    console.warn("Failed to initialize Highcharts modules:", e)
  }
}

// Initialize modules immediately on client side
if (typeof window !== "undefined") {
  initHighchartsModules()
}

/**
 * Get computed CSS variable value from the document
 */
function getCSSVariable(name: string): string {
  if (typeof window === "undefined") return ""
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

/**
 * Convert hex color to RGB components
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * Convert RGB to hex color
 */
function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map(x => {
    const hex = Math.round(Math.max(0, Math.min(255, x))).toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }).join("")
}

/**
 * Calculate relative luminance of a color (WCAG 2.1)
 */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * Calculate contrast ratio between two colors (WCAG 2.1)
 */
function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)
  if (!rgb1 || !rgb2) return 1

  const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b)
  const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b)
  
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  
  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Get the best text color (white or dark) for a given background color
 * Uses WCAG AA standard (4.5:1 for normal text)
 * @param backgroundColor - Hex color of the background
 * @param darkColor - Dark text color option (default: #0e1d23)
 * @param lightColor - Light text color option (default: #ffffff)
 */
export function getContrastTextColor(
  backgroundColor: string,
  darkColor: string = "#0e1d23",
  lightColor: string = "#ffffff"
): string {
  const contrastWithDark = getContrastRatio(backgroundColor, darkColor)
  const contrastWithLight = getContrastRatio(backgroundColor, lightColor)
  
  // Return the color with better contrast
  return contrastWithLight > contrastWithDark ? lightColor : darkColor
}

/**
 * Generate a sequential color palette from a base color
 * Creates shades from light (low intensity) to dark (high intensity)
 * @param baseColor - The base hex color
 * @param steps - Number of steps in the palette (default 7)
 */
export function generateSequentialPalette(baseColor: string, steps: number = 7): string[] {
  const rgb = hexToRgb(baseColor)
  if (!rgb) return Array(steps).fill(baseColor)

  const palette: string[] = []
  
  for (let i = 0; i < steps; i++) {
    // Progress from 0 (lightest) to 1 (darkest/base color)
    const progress = i / (steps - 1)
    
    // Interpolate from white towards the base color
    const lightness = 1 - progress * 0.85 // 1 -> 0.15
    
    const r = Math.round(rgb.r + (255 - rgb.r) * lightness * (1 - progress * 0.3))
    const g = Math.round(rgb.g + (255 - rgb.g) * lightness * (1 - progress * 0.3))
    const b = Math.round(rgb.b + (255 - rgb.b) * lightness * (1 - progress * 0.3))
    
    palette.push(rgbToHex(r, g, b))
  }
  
  return palette
}

/**
 * Alize dataviz theme colors for Highcharts
 * Uses semantic dataviz tokens for consistent theming
 */
export interface AlizeChartColors {
  /** Categorical palette (10 colors) for discrete categories */
  categorical: string[]
  /** No data color */
  noData: string
  /** RAG colors (danger, warning, success) with weak/medium/strong variants */
  rag: {
    danger: { weak: string; medium: string; strong: string }
    warning: { weak: string; medium: string; strong: string }
    success: { weak: string; medium: string; strong: string }
  }
  /** UI colors from semantic tokens */
  text: string
  textSubdued: string
  grid: string
  axis: string
  background: string
  tooltipBackground: string
}

/**
 * Hook to get Alize dataviz theme colors for Highcharts
 * Reads CSS variables and returns color values
 */
export function useAlizeChartColors(): AlizeChartColors {
  const [colors, setColors] = React.useState<AlizeChartColors>({
    categorical: [
      "#aa9888", "#3e778b", "#6ea2b3", "#674467", "#7da57e",
      "#584e47", "#c08e91", "#375837", "#b68eb5", "#919da2"
    ],
    noData: "#d1d5dc",
    rag: {
      danger: { weak: "#e47a95", medium: "#922842", strong: "#751b31" },
      warning: { weak: "#e77f45", medium: "#8d3301", strong: "#6d2800" },
      success: { weak: "#12b168", medium: "#065c3c", strong: "#054732" },
    },
    text: "#0e1d23",
    textSubdued: "#5d7078",
    grid: "#dce2e5",
    axis: "#cad1d5",
    background: "transparent",
    tooltipBackground: "#ffffff",
  })

  React.useEffect(() => {
    const updateColors = (): void => {
      // Get categorical colors (ct-1 through ct-10)
      const categorical: string[] = []
      for (let i = 1; i <= 10; i++) {
        const color = getCSSVariable(`--semantic-dataviz-ct-${i}`)
        if (color) categorical.push(color)
      }

      setColors({
        categorical: categorical.length === 10 ? categorical : colors.categorical,
        noData: getCSSVariable("--semantic-dataviz-ct-nodata") || "#d1d5dc",
        rag: {
          danger: {
            weak: getCSSVariable("--semantic-dataviz-rag-dangerweak") || "#e47a95",
            medium: getCSSVariable("--semantic-dataviz-rag-dangermedium") || "#922842",
            strong: getCSSVariable("--semantic-dataviz-rag-dangerstrong") || "#751b31",
          },
          warning: {
            weak: getCSSVariable("--semantic-dataviz-rag-warningweak") || "#e77f45",
            medium: getCSSVariable("--semantic-dataviz-rag-warningmedium") || "#8d3301",
            strong: getCSSVariable("--semantic-dataviz-rag-warningstrong") || "#6d2800",
          },
          success: {
            weak: getCSSVariable("--semantic-dataviz-rag-successweak") || "#12b168",
            medium: getCSSVariable("--semantic-dataviz-rag-successmedium") || "#065c3c",
            strong: getCSSVariable("--semantic-dataviz-rag-successstrong") || "#054732",
          },
        },
        // UI colors from existing semantic tokens
        text: getCSSVariable("--semantic-text-default") || "#0e1d23",
        textSubdued: getCSSVariable("--semantic-text-subdued") || "#5d7078",
        grid: getCSSVariable("--semantic-stroke-subdued") || "#dce2e5",
        axis: getCSSVariable("--semantic-stroke-default") || "#cad1d5",
        background: "transparent",
        tooltipBackground: getCSSVariable("--semantic-surface-default") || "#ffffff",
      })
    }

    updateColors()

    // Listen for theme changes
    const observer = new MutationObserver(updateColors)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    })

    return () => observer.disconnect()
  }, [])

  return colors
}

/**
 * Hook to generate a sequential palette from a categorical color
 * @param colorIndex - Index of the categorical color (1-10)
 * @param steps - Number of steps in the palette (default 7)
 */
export function useSequentialPalette(colorIndex: number = 1, steps: number = 7): string[] {
  const colors = useAlizeChartColors()
  
  return React.useMemo(() => {
    const baseColor = colors.categorical[Math.min(Math.max(colorIndex - 1, 0), 9)]
    return generateSequentialPalette(baseColor, steps)
  }, [colors.categorical, colorIndex, steps])
}

/**
 * Generate a divergent palette from two base colors
 * Center is a light blend of both colors (not gray), extremes are saturated
 * @param negativeColor - Color for negative values (left side)  
 * @param positiveColor - Color for positive values (right side)
 * @param _neutralColor - Unused, kept for API compatibility
 * @param steps - Total number of steps (should be odd, default 7)
 */
export function generateDivergentPalette(
  negativeColor: string,
  positiveColor: string,
  _neutralColor: string,
  steps: number = 7
): string[] {
  const negRgb = hexToRgb(negativeColor)
  const posRgb = hexToRgb(positiveColor)
  
  if (!negRgb || !posRgb) {
    return Array(steps).fill(negativeColor)
  }

  const palette: string[] = []
  const midpoint = Math.floor(steps / 2)

  // Create a light center color by blending both colors and lightening
  const centerR = Math.round((negRgb.r + posRgb.r) / 2 * 0.4 + 255 * 0.6)
  const centerG = Math.round((negRgb.g + posRgb.g) / 2 * 0.4 + 255 * 0.6)
  const centerB = Math.round((negRgb.b + posRgb.b) / 2 * 0.4 + 255 * 0.6)

  for (let i = 0; i < steps; i++) {
    if (i < midpoint) {
      // Negative side: interpolate from negative color to light center
      // Keep saturation by using the negative hue throughout
      const progress = i / midpoint // 0 at extreme, 1 at center
      
      // Lighten the negative color as we approach center
      const lightenAmount = progress * 0.7 // 0 -> 0.7
      const r = Math.round(negRgb.r + (255 - negRgb.r) * lightenAmount)
      const g = Math.round(negRgb.g + (255 - negRgb.g) * lightenAmount)
      const b = Math.round(negRgb.b + (255 - negRgb.b) * lightenAmount)
      
      palette.push(rgbToHex(r, g, b))
    } else if (i === midpoint) {
      // Center point - light blend of both colors
      palette.push(rgbToHex(centerR, centerG, centerB))
    } else {
      // Positive side: interpolate from light center to positive color
      const progress = (i - midpoint) / (steps - midpoint - 1) // 0 at center, 1 at extreme
      
      // Start light and increase saturation toward the positive color
      const lightenAmount = (1 - progress) * 0.7 // 0.7 -> 0
      const r = Math.round(posRgb.r + (255 - posRgb.r) * lightenAmount)
      const g = Math.round(posRgb.g + (255 - posRgb.g) * lightenAmount)
      const b = Math.round(posRgb.b + (255 - posRgb.b) * lightenAmount)
      
      palette.push(rgbToHex(r, g, b))
    }
  }

  return palette
}

/**
 * Divergent palette colors interface
 */
export interface DivergentColors {
  negative: string
  positive: string
  neutral: string
}

/**
 * Hook to get divergent palette base colors from CSS variables
 * Uses Ocean for negative and Orange for positive
 */
export function useDivergentColors(): DivergentColors {
  const [colors, setColors] = React.useState<DivergentColors>({
    negative: "#3e778b", // ocean-600
    positive: "#be4501", // orange-500
    neutral: "#cad1d5",  // glacier-300
  })

  React.useEffect(() => {
    const updateColors = (): void => {
      setColors({
        negative: getCSSVariable("--color-solstice-ocean-600") || "#3e778b",
        positive: getCSSVariable("--color-solstice-orange-500") || "#be4501",
        neutral: getCSSVariable("--color-solstice-glacier-300") || "#cad1d5",
      })
    }

    updateColors()

    const observer = new MutationObserver(updateColors)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    })

    return () => observer.disconnect()
  }, [])

  return colors
}

/**
 * Hook to generate a divergent palette
 * Uses Ocean for negative values and Orange for positive values
 * @param steps - Total number of steps (should be odd, default 7)
 */
export function useDivergentPalette(steps: number = 7): string[] {
  const colors = useDivergentColors()

  return React.useMemo(() => {
    return generateDivergentPalette(colors.negative, colors.positive, colors.neutral, steps)
  }, [colors.negative, colors.positive, colors.neutral, steps])
}

/**
 * Generate Highcharts theme options based on Alize dataviz tokens
 */
export function useHighchartsTheme(): Highcharts.Options {
  const colors = useAlizeChartColors()

  return React.useMemo(
    () => ({
      colors: colors.categorical,
      chart: {
        backgroundColor: colors.background,
        style: {
          fontFamily: 'var(--font-sans), ui-sans-serif, system-ui, sans-serif',
        },
      },
      title: {
        style: {
          color: colors.text,
          fontSize: "16px",
          fontWeight: "500",
        },
      },
      subtitle: {
        style: {
          color: colors.textSubdued,
          fontSize: "14px",
        },
      },
      xAxis: {
        gridLineColor: colors.grid,
        lineColor: colors.axis,
        tickColor: colors.axis,
        labels: {
          style: {
            color: colors.textSubdued,
            fontSize: "12px",
          },
        },
        title: {
          style: {
            color: colors.text,
            fontSize: "12px",
          },
        },
      },
      yAxis: {
        gridLineColor: colors.grid,
        lineColor: colors.axis,
        tickColor: colors.axis,
        labels: {
          style: {
            color: colors.textSubdued,
            fontSize: "12px",
          },
        },
        title: {
          style: {
            color: colors.text,
            fontSize: "12px",
          },
        },
      },
      legend: {
        itemStyle: {
          color: colors.text,
          fontSize: "12px",
          fontWeight: "400",
        },
        itemHoverStyle: {
          color: colors.categorical[0],
        },
      },
      tooltip: {
        backgroundColor: colors.tooltipBackground,
        borderColor: colors.grid,
        borderRadius: 8,
        style: {
          color: colors.text,
          fontSize: "12px",
        },
        shadow: {
          color: "rgba(0, 0, 0, 0.1)",
          offsetX: 0,
          offsetY: 4,
          width: 8,
        },
      },
      plotOptions: {
        series: {
          borderRadius: 0,
          borderWidth: 0,
          animation: {
            duration: 500,
          },
          dataLabels: {
            style: {
              color: colors.text,
              textOutline: "none",
              fontWeight: "400",
              fontSize: "11px",
            },
          },
        },
        column: {
          borderRadius: 0,
          borderWidth: 0,
        },
        bar: {
          borderRadius: 0,
          borderWidth: 0,
        },
        pie: {
          borderRadius: 0,
          borderWidth: 0,
        },
        area: {
          lineWidth: 2,
          fillOpacity: 0.3,
        },
        line: {
          lineWidth: 2,
        },
        spline: {
          lineWidth: 2,
        },
      },
      credits: {
        enabled: false,
      },
    }),
    [colors]
  )
}

/**
 * Highchart component props interface
 */
export interface HighchartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Highcharts configuration options */
  options: Highcharts.Options
  /** Whether to update the chart immutably */
  immutable?: boolean
  /** Whether to allow chart update */
  allowChartUpdate?: boolean
  /** Callback when chart is created */
  callback?: (chart: Highcharts.Chart) => void
  /** Container props */
  containerProps?: React.HTMLAttributes<HTMLDivElement>
}

/**
 * Highchart component - A wrapper around Highcharts for React
 *
 * Provides a themed Highcharts instance with Alize design system integration.
 * Automatically applies semantic dataviz tokens for consistent styling.
 *
 * @param props - Highchart props including options and container attributes
 * @returns A Highcharts chart element
 *
 * @example
 * ```tsx
 * const options = {
 *   chart: { type: 'line' },
 *   series: [{ data: [1, 2, 3, 4, 5] }]
 * };
 * <Highchart options={options} className="h-64" />
 * ```
 */
function Highchart({
  className,
  options,
  immutable = false,
  allowChartUpdate = true,
  callback,
  containerProps,
  ...props
}: HighchartProps): React.ReactElement {
  const theme = useHighchartsTheme()
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  
  // Ensure modules are initialized
  React.useEffect(() => {
    initHighchartsModules()
  }, [])

  // Merge theme with provided options
  const mergedOptions = React.useMemo(
    () => Highcharts.merge(theme, options),
    [theme, options]
  )

  return (
    <div
      data-slot="highchart"
      className={cn("w-full", className)}
      {...props}
    >
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={mergedOptions}
        immutable={immutable}
        allowChartUpdate={allowChartUpdate}
        callback={callback}
        containerProps={containerProps}
      />
    </div>
  )
}

export { Highchart }
