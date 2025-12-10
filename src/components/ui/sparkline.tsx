"use client"

import * as React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { cn } from "../../lib/utils"

// Initialize bullet module lazily
let bulletModuleInitialized = false

type HighchartsModuleInit = (hc: typeof Highcharts) => void

async function initBulletModule() {
  if (bulletModuleInitialized || typeof window === "undefined") return
  try {
    const bulletModule = await import("highcharts/modules/bullet")
    const HighchartsBullet = bulletModule.default as unknown as HighchartsModuleInit
    if (typeof HighchartsBullet === "function" && Highcharts.Series) {
      HighchartsBullet(Highcharts)
      bulletModuleInitialized = true
    }
  } catch (e) {
    console.warn("Failed to initialize Highcharts bullet module:", e)
  }
}

/**
 * Get computed CSS variable value from the document
 */
function getCSSVariable(name: string): string {
  if (typeof window === "undefined") return ""
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

/**
 * Alize color tokens for sparklines
 */
function useSparklineColors() {
  const [colors, setColors] = React.useState({
    success: "#4c774c",
    warning: "#c97c12",
    danger: "#c03c5e",
    primary: "#3e778b",
    muted: "#919da2",
    text: "#0e1d23",
    background: "transparent",
  })

  React.useEffect(() => {
    setColors({
      success: getCSSVariable("--semantic-dataviz-rag-successmedium") || "#4c774c",
      warning: getCSSVariable("--semantic-dataviz-rag-warningmedium") || "#c97c12",
      danger: getCSSVariable("--semantic-dataviz-rag-dangermedium") || "#c03c5e",
      primary: getCSSVariable("--semantic-dataviz-ct-2") || "#3e778b",
      muted: getCSSVariable("--semantic-icon-subdued") || "#919da2",
      text: getCSSVariable("--semantic-text-default") || "#0e1d23",
      background: "transparent",
    })
  }, [])

  return colors
}

// ============================================
// SPARKLINE (Line/Area Chart)
// ============================================

export interface SparklineProps {
  /** Data points array */
  data: number[]
  /** Chart type */
  type?: "line" | "area"
  /** Line/fill color */
  color?: string
  /** Width of the sparkline */
  width?: number
  /** Height of the sparkline */
  height?: number
  /** Show dots on data points */
  showMarkers?: boolean
  /** Line width */
  lineWidth?: number
  /** Custom class name */
  className?: string
  /** Accessible label */
  ariaLabel?: string
}

/**
 * Sparkline component for inline line/area charts
 * 
 * @example
 * ```tsx
 * <Sparkline data={[10, 25, 15, 30, 20]} color="var(--semantic-dataviz-rag-successmedium)" />
 * ```
 */
export function Sparkline({
  data,
  type = "line",
  color,
  width = 120,
  height = 32,
  showMarkers = false,
  lineWidth = 2,
  className,
  ariaLabel = "Sparkline chart",
}: SparklineProps) {
  const colors = useSparklineColors()
  const chartColor = color || colors.primary

  const options: Highcharts.Options = {
    chart: {
      type: type === "area" ? "areaspline" : "spline",
      width,
      height,
      backgroundColor: "transparent",
      margin: [2, 2, 2, 2],
      spacing: [0, 0, 0, 0],
    },
    title: { text: undefined },
    credits: { enabled: false },
    xAxis: {
      visible: false,
      labels: { enabled: false },
      tickLength: 0,
    },
    yAxis: {
      visible: false,
      labels: { enabled: false },
      gridLineWidth: 0,
    },
    legend: { enabled: false },
    tooltip: { enabled: false },
    plotOptions: {
      series: {
        animation: false,
        lineWidth,
        marker: {
          enabled: showMarkers,
          radius: 2,
          fillColor: chartColor,
        },
        states: {
          hover: { enabled: false },
        },
      },
      areaspline: {
        fillOpacity: 0.2,
      },
    },
    series: [
      {
        type: type === "area" ? "areaspline" : "spline",
        data,
        color: chartColor,
        fillColor: type === "area" ? chartColor : undefined,
      },
    ],
    accessibility: {
      description: ariaLabel,
    },
  }

  return (
    <div className={cn("inline-flex items-center", className)} role="img" aria-label={ariaLabel}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

// ============================================
// SPARKBAR (Bar Chart)
// ============================================

export interface SparkbarProps {
  /** Data points array */
  data: number[]
  /** Bar color or function to determine color per value */
  color?: string | ((value: number) => string)
  /** Thresholds for RAG coloring */
  thresholds?: {
    warning?: number
    danger?: number
  }
  /** Width of the sparkbar */
  width?: number
  /** Height of the sparkbar */
  height?: number
  /** Gap between bars (0-1) */
  gap?: number
  /** Custom class name */
  className?: string
  /** Accessible label */
  ariaLabel?: string
}

/**
 * Sparkbar component for inline bar charts with optional RAG coloring
 * 
 * @example
 * ```tsx
 * <Sparkbar 
 *   data={[30, 45, 80, 65, 90, 50]} 
 *   thresholds={{ warning: 60, danger: 80 }} 
 * />
 * ```
 */
export function Sparkbar({
  data,
  color,
  thresholds,
  width = 120,
  height = 32,
  gap = 0.2,
  className,
  ariaLabel = "Sparkbar chart",
}: SparkbarProps) {
  const colors = useSparklineColors()

  // Determine color for each bar
  const getBarColor = React.useCallback(
    (value: number): string => {
      if (typeof color === "function") return color(value)
      if (typeof color === "string") return color

      if (thresholds) {
        if (thresholds.danger && value >= thresholds.danger) return colors.danger
        if (thresholds.warning && value >= thresholds.warning) return colors.warning
        return colors.success
      }

      return colors.primary
    },
    [color, thresholds, colors]
  )

  const seriesData = data.map((value) => ({
    y: value,
    color: getBarColor(value),
  }))

  const options: Highcharts.Options = {
    chart: {
      type: "column",
      width,
      height,
      backgroundColor: "transparent",
      margin: [2, 2, 2, 2],
      spacing: [0, 0, 0, 0],
    },
    title: { text: undefined },
    credits: { enabled: false },
    xAxis: {
      visible: false,
      labels: { enabled: false },
      tickLength: 0,
    },
    yAxis: {
      visible: false,
      labels: { enabled: false },
      gridLineWidth: 0,
      min: 0,
    },
    legend: { enabled: false },
    tooltip: { enabled: false },
    plotOptions: {
      column: {
        animation: false,
        borderWidth: 0,
        borderRadius: 1,
        pointPadding: gap / 2,
        groupPadding: 0,
        states: {
          hover: { enabled: false },
        },
      },
    },
    series: [
      {
        type: "column",
        data: seriesData,
      },
    ],
    accessibility: {
      description: ariaLabel,
    },
  }

  return (
    <div className={cn("inline-flex items-center", className)} role="img" aria-label={ariaLabel}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

// ============================================
// SPARK BULLET (Progress with threshold)
// ============================================

export interface SparkBulletProps {
  /** Current value (0-100) */
  value: number
  /** Target value (0-100) */
  target?: number
  /** Threshold ranges */
  ranges?: [number, number, number] // [danger, warning, good]
  /** Width of the bullet */
  width?: number
  /** Height of the bullet */
  height?: number
  /** Custom class name */
  className?: string
  /** Accessible label */
  ariaLabel?: string
}

/**
 * SparkBullet component for inline progress with thresholds
 * 
 * @example
 * ```tsx
 * <SparkBullet value={75} target={80} ranges={[30, 60, 100]} />
 * ```
 */
export function SparkBullet({
  value,
  target,
  ranges = [30, 70, 100],
  width = 120,
  height = 24,
  className,
  ariaLabel = "Bullet chart",
}: SparkBulletProps) {
  const colors = useSparklineColors()
  const [moduleReady, setModuleReady] = React.useState(bulletModuleInitialized)

  React.useEffect(() => {
    if (!bulletModuleInitialized) {
      initBulletModule().then(() => setModuleReady(true))
    }
  }, [])

  const options: Highcharts.Options = {
    chart: {
      type: "bullet",
      width,
      height,
      backgroundColor: "transparent",
      margin: [0, 0, 0, 0],
      inverted: true,
    },
    title: { text: undefined },
    credits: { enabled: false },
    xAxis: { visible: false },
    yAxis: {
      visible: false,
      gridLineWidth: 0,
      min: 0,
      max: 100,
      plotBands: [
        { from: 0, to: ranges[0], color: colors.danger + "30" },
        { from: ranges[0], to: ranges[1], color: colors.warning + "30" },
        { from: ranges[1], to: ranges[2], color: colors.success + "30" },
      ],
    },
    legend: { enabled: false },
    tooltip: { enabled: false },
    plotOptions: {
      bullet: {
        animation: false,
        borderWidth: 0,
        pointWidth: height - 8,
        targetOptions: {
          width: 3,
          height: height - 4,
          borderWidth: 0,
          color: colors.text,
        },
      },
    },
    series: [
      {
        type: "bullet",
        data: [
          {
            y: value,
            target: target,
            color: value >= ranges[1] ? colors.success : value >= ranges[0] ? colors.warning : colors.danger,
          },
        ],
      },
    ],
    accessibility: {
      description: ariaLabel,
    },
  }

  // Don't render until bullet module is ready
  if (!moduleReady) {
    return (
      <div 
        className={cn("inline-flex items-center animate-pulse bg-muted rounded", className)} 
        style={{ width, height }}
        role="img" 
        aria-label={ariaLabel}
      />
    )
  }

  return (
    <div className={cn("inline-flex items-center", className)} role="img" aria-label={ariaLabel}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

// ============================================
// SPARK TREND (Value with trend indicator)
// ============================================

export interface SparkTrendProps {
  /** Current value */
  value: number
  /** Previous value for comparison */
  previousValue?: number
  /** Percentage change (alternative to previousValue) */
  change?: number
  /** Format function for value display */
  formatValue?: (value: number) => string
  /** Whether higher is better (affects color) */
  higherIsBetter?: boolean
  /** Show sparkline with historical data */
  history?: number[]
  /** Width of history sparkline */
  sparklineWidth?: number
  /** Custom class name */
  className?: string
}

/**
 * SparkTrend component showing value with trend indicator
 * 
 * @example
 * ```tsx
 * <SparkTrend 
 *   value={1250} 
 *   change={12.5} 
 *   formatValue={(v) => `$${v.toLocaleString()}`}
 *   history={[1000, 1100, 1150, 1200, 1250]}
 * />
 * ```
 */
export function SparkTrend({
  value,
  previousValue,
  change,
  formatValue = (v) => v.toLocaleString(),
  higherIsBetter = true,
  history,
  sparklineWidth = 60,
  className,
}: SparkTrendProps) {
  const colors = useSparklineColors()

  // Calculate change if not provided
  const calculatedChange = React.useMemo(() => {
    if (change !== undefined) return change
    if (previousValue !== undefined && previousValue !== 0) {
      return ((value - previousValue) / previousValue) * 100
    }
    return 0
  }, [value, previousValue, change])

  const isPositive = calculatedChange > 0
  const isNeutral = calculatedChange === 0
  const isBetter = higherIsBetter ? isPositive : !isPositive

  const trendColor = isNeutral ? colors.muted : isBetter ? colors.success : colors.danger
  const trendIcon = isNeutral ? "→" : isPositive ? "↑" : "↓"

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      {history && (
        <Sparkline
          data={history}
          width={sparklineWidth}
          height={24}
          color={trendColor}
          lineWidth={1.5}
        />
      )}
      <div className="flex flex-col items-end">
        <span className="text-sm font-medium text-[var(--semantic-text-default)]">
          {formatValue(value)}
        </span>
        {!isNeutral && (
          <span className="text-xs" style={{ color: trendColor }}>
            {trendIcon} {Math.abs(calculatedChange).toFixed(1)}%
          </span>
        )}
      </div>
    </div>
  )
}

// ============================================
// TABLE CELL WRAPPERS (for TanStack integration)
// ============================================

/**
 * SparklineCell - Wrapper for use in TanStack Table cells
 */
export function SparklineCell(props: SparklineProps) {
  return <Sparkline {...props} />
}

/**
 * SparkbarCell - Wrapper for use in TanStack Table cells
 */
export function SparkbarCell(props: SparkbarProps) {
  return <Sparkbar {...props} />
}

/**
 * SparkBulletCell - Wrapper for use in TanStack Table cells
 */
export function SparkBulletCell(props: SparkBulletProps) {
  return <SparkBullet {...props} />
}

/**
 * SparkTrendCell - Wrapper for use in TanStack Table cells
 */
export function SparkTrendCell(props: SparkTrendProps) {
  return <SparkTrend {...props} />
}

export default {
  Sparkline,
  Sparkbar,
  SparkBullet,
  SparkTrend,
  SparklineCell,
  SparkbarCell,
  SparkBulletCell,
  SparkTrendCell,
}

