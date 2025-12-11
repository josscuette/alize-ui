"use client"

import * as React from "react"
import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Kbd, KbdGroup } from "./ui/kbd"
import { Separator } from "./ui/separator"
import { MaterialSymbol } from "./material-symbol"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

/**
 * Known Alizé component slot names
 * This list is used to distinguish Alizé components from other components
 * that might also use data-slot attributes (e.g., raw shadcn/ui)
 */
const ALIZE_SLOT_NAMES = new Set([
  // Atoms
  "button",
  "input",
  "label",
  "badge",
  "avatar",
  "avatar-image",
  "avatar-fallback",
  "skeleton",
  "spinner",
  "separator",
  "kbd",
  "kbd-group",
  "toggle",
  "toggle-group",
  "toggle-group-item",
  "tooltip",
  "tooltip-trigger",
  "tooltip-content",
  "aspect-ratio",
  "empty",
  "item",
  "logo",
  // Typography
  "typography-h1",
  "typography-h2",
  "typography-h3",
  "typography-h4",
  "typography-p",
  "typography-blockquote",
  "typography-code",
  // Molecules
  "checkbox",
  "checkbox-card",
  "switch",
  "switch-card",
  "radio-group",
  "radio-group-item",
  "radio-group-card-item",
  "select",
  "select-trigger",
  "select-content",
  "select-item",
  "select-value",
  "select-group",
  "select-label",
  "select-separator",
  "textarea",
  "slider",
  "slider-track",
  "slider-range",
  "slider-thumb",
  "progress",
  "progress-indicator",
  "alert",
  "alert-title",
  "alert-description",
  "card",
  "card-header",
  "card-footer",
  "card-title",
  "card-action",
  "card-description",
  "card-content",
  "tabs",
  "tabs-list",
  "tabs-trigger",
  "tabs-content",
  "accordion",
  "accordion-item",
  "accordion-trigger",
  "accordion-content",
  "collapsible",
  "collapsible-trigger",
  "collapsible-content",
  "popover",
  "popover-trigger",
  "popover-content",
  "popover-anchor",
  "hover-card",
  "hover-card-trigger",
  "hover-card-content",
  "dropdown-menu",
  "dropdown-menu-trigger",
  "dropdown-menu-content",
  "dropdown-menu-item",
  "dropdown-menu-label",
  "dropdown-menu-separator",
  "dropdown-menu-shortcut",
  "dropdown-menu-group",
  "dropdown-menu-checkbox-item",
  "dropdown-menu-radio-group",
  "dropdown-menu-radio-item",
  "dropdown-menu-sub",
  "dropdown-menu-sub-trigger",
  "dropdown-menu-sub-content",
  "context-menu",
  "context-menu-trigger",
  "context-menu-content",
  "context-menu-item",
  "context-menu-label",
  "context-menu-separator",
  "context-menu-shortcut",
  "context-menu-checkbox-item",
  "context-menu-radio-group",
  "context-menu-radio-item",
  "context-menu-sub",
  "context-menu-sub-trigger",
  "context-menu-sub-content",
  "command",
  "command-dialog",
  "command-input",
  "command-list",
  "command-empty",
  "command-group",
  "command-item",
  "command-shortcut",
  "command-separator",
  "combobox",
  "input-otp",
  "input-otp-group",
  "input-otp-slot",
  "input-otp-separator",
  "input-group",
  "breadcrumb",
  "breadcrumb-list",
  "breadcrumb-item",
  "breadcrumb-link",
  "breadcrumb-page",
  "breadcrumb-separator",
  "breadcrumb-ellipsis",
  "pagination",
  "pagination-content",
  "pagination-item",
  "pagination-link",
  "pagination-previous",
  "pagination-next",
  "pagination-ellipsis",
  "button-group",
  "button-group-separator",
  "button-group-text",
  "native-select",
  "native-select-trigger",
  "native-select-value",
  "native-select-content",
  "native-select-item",
  "field",
  "field-content",
  "field-description",
  "field-error",
  "field-group",
  "field-label",
  "field-legend",
  "field-separator",
  "field-set",
  "field-title",
  // Organisms
  "dialog",
  "dialog-trigger",
  "dialog-content",
  "dialog-header",
  "dialog-footer",
  "dialog-title",
  "dialog-description",
  "dialog-close",
  "dialog-overlay",
  "dialog-portal",
  "alert-dialog",
  "alert-dialog-trigger",
  "alert-dialog-content",
  "alert-dialog-header",
  "alert-dialog-footer",
  "alert-dialog-title",
  "alert-dialog-description",
  "alert-dialog-action",
  "alert-dialog-cancel",
  "drawer",
  "drawer-trigger",
  "drawer-content",
  "drawer-header",
  "drawer-footer",
  "drawer-title",
  "drawer-description",
  "drawer-close",
  "drawer-overlay",
  "drawer-portal",
  "sheet",
  "sheet-trigger",
  "sheet-content",
  "sheet-header",
  "sheet-footer",
  "sheet-title",
  "sheet-description",
  "sheet-close",
  "sidebar",
  "sidebar-content",
  "sidebar-footer",
  "sidebar-group",
  "sidebar-group-action",
  "sidebar-group-content",
  "sidebar-group-label",
  "sidebar-header",
  "sidebar-input",
  "sidebar-inset",
  "sidebar-menu",
  "sidebar-menu-action",
  "sidebar-menu-badge",
  "sidebar-menu-button",
  "sidebar-menu-item",
  "sidebar-menu-skeleton",
  "sidebar-menu-sub",
  "sidebar-menu-sub-button",
  "sidebar-menu-sub-item",
  "sidebar-provider",
  "sidebar-rail",
  "sidebar-separator",
  "sidebar-trigger",
  "navigation-menu",
  "navigation-menu-content",
  "navigation-menu-item",
  "navigation-menu-link",
  "navigation-menu-list",
  "navigation-menu-trigger",
  "navigation-menu-viewport",
  "navigation-menu-indicator",
  "menubar",
  "menubar-menu",
  "menubar-trigger",
  "menubar-content",
  "menubar-item",
  "menubar-label",
  "menubar-separator",
  "menubar-shortcut",
  "menubar-checkbox-item",
  "menubar-radio-group",
  "menubar-radio-item",
  "menubar-sub",
  "menubar-sub-trigger",
  "menubar-sub-content",
  "form",
  "form-item",
  "form-label",
  "form-control",
  "form-description",
  "form-message",
  "table",
  "table-header",
  "table-body",
  "table-footer",
  "table-row",
  "table-head",
  "table-cell",
  "table-caption",
  "data-table",
  "data-list",
  "data-list-group",
  "data-list-item",
  "data-list-empty",
  "data-list-skeleton",
  "sparkline",
  "sparkbar",
  "spark-bullet",
  "spark-trend",
  "sparkline-cell",
  "sparkbar-cell",
  "spark-bullet-cell",
  "spark-trend-cell",
  "calendar",
  "calendar-day-button",
  "date-picker",
  "carousel",
  "carousel-content",
  "carousel-item",
  "carousel-previous",
  "carousel-next",
  "highchart",
  "toaster",
  "scroll-area",
  "scroll-bar",
  "resizable-panel-group",
  "resizable-panel",
  "resizable-handle",
  // Utilities
  "material-symbol",
])

/**
 * Check if a data-slot value is from Alizé
 */
function isAlizeSlot(slotName: string): boolean {
  return ALIZE_SLOT_NAMES.has(slotName)
}

/**
 * Highlight mode for the DevTools
 */
type HighlightMode = "off" | "alize"

interface AlizeDevToolsContextValue {
  highlightMode: HighlightMode
  setHighlightMode: (mode: HighlightMode) => void
  isEnabled: boolean
  setIsEnabled: (enabled: boolean) => void
  alizeCount: number
  nonAlizeCount: number
}

const AlizeDevToolsContext = React.createContext<AlizeDevToolsContextValue | null>(null)

function useAlizeDevTools(): AlizeDevToolsContextValue {
  const context = React.useContext(AlizeDevToolsContext)
  if (!context) {
    throw new Error("useAlizeDevTools must be used within AlizeDevToolsProvider")
  }
  return context
}

/**
 * Props for the AlizeDevToolsProvider component
 */
export interface AlizeDevToolsProviderProps {
  children: React.ReactNode
  /**
   * Enable DevTools by default
   * @default true in development, false in production
   */
  enabled?: boolean
  /**
   * Position of the debug bar
   * @default "bottom-right"
   */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  /**
   * Keyboard shortcut to toggle DevTools visibility
   * @default "ctrl+shift+a" (or cmd+shift+a on Mac)
   */
  shortcut?: string
}

/**
 * CSS styles for the debug overlay and highlighting
 * Uses Alizé semantic tokens for consistent styling
 * - Lilac for Alizé components (stands out from typical UI)
 * - Slate for non-Alizé components (neutral but visible)
 */
const devToolsStyles = `
  /* Alizé DevTools Styles */
  [data-alize-component="true"] {
    outline: 3px solid var(--semantic-tonal-lilac-strong, #9333ea) !important;
    outline-offset: 2px !important;
    position: relative !important;
  }
  
  [data-alize-component="true"]::before {
    content: "Alizé: " attr(data-slot);
    position: absolute !important;
    top: -22px !important;
    left: 0 !important;
    background: var(--semantic-tonal-lilac-strong, #9333ea) !important;
    color: white !important;
    font-size: 10px !important;
    font-weight: 500 !important;
    padding: 2px 8px !important;
    border-radius: 4px !important;
    font-family: ui-monospace, SFMono-Regular, monospace !important;
    z-index: 99999 !important;
    white-space: nowrap !important;
    pointer-events: none !important;
    line-height: 1.4 !important;
  }
  
`

/**
 * Mode button configuration
 */
interface ModeButtonConfig {
  mode: HighlightMode
  label: string
  icon: "visibility_off" | "check_circle"
}

const modeButtons: ModeButtonConfig[] = [
  { mode: "off", label: "Off", icon: "visibility_off" },
  { mode: "alize", label: "Alizé", icon: "check_circle" },
]

/**
 * DevTools debug bar component - Built with Alizé components
 */
function DevToolsBar(): React.ReactElement | null {
  const { highlightMode, setHighlightMode, isEnabled, setIsEnabled, alizeCount } = useAlizeDevTools()
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  if (!isEnabled) return null

  return (
    <div
      data-alize-devtools
      className="fixed bottom-4 right-4 z-[99999] font-sans text-sm"
    >
      {isCollapsed ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setIsCollapsed(false)}
              size="icon"
              className="size-11 rounded-xl bg-[var(--semantic-surface-default)] border border-[var(--semantic-stroke-default)] shadow-lg hover:bg-[var(--semantic-surface-overlays-level1)]"
            >
              <span className="text-lg font-bold text-[var(--semantic-text-interaction-default)]">A</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Open Alizé DevTools</TooltipContent>
        </Tooltip>
      ) : (
        <div className="min-w-[300px] rounded-xl border border-[var(--semantic-stroke-default)] bg-[var(--semantic-surface-default)] p-4 shadow-xl">
          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-[var(--semantic-text-interaction-default)]">
                Alizé DevTools
              </span>
              <Badge tonal="default" className="text-[10px]">beta</Badge>
            </div>
            <div className="flex gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    onClick={() => setIsCollapsed(true)}
                  >
                    <MaterialSymbol name="remove" size={16} weight={300} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Minimize</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    onClick={() => setIsEnabled(false)}
                  >
                    <MaterialSymbol name="close" size={16} weight={300} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Close (⌘/Ctrl+Shift+A to reopen)</TooltipContent>
              </Tooltip>
            </div>
          </div>

          <Separator className="mb-3" />

          {/* Stats */}
          <div className="mb-3 flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-[var(--semantic-tonal-lilac-strong)]" />
            <span className="text-[var(--semantic-text-subdued)]">Alizé components:</span>
            <Badge tonal="lilac" badgeStyle="reversed" numeric>{alizeCount}</Badge>
          </div>

          {/* Mode Buttons */}
          <div className="grid grid-cols-2 gap-1.5">
            {modeButtons.map(({ mode, label, icon }) => (
              <Button
                key={mode}
                variant="outline"
                size="sm"
                onClick={() => setHighlightMode(mode)}
                className={cn(
                  "flex-col gap-0.5 h-auto py-2",
                  highlightMode === mode 
                    ? "bg-[var(--semantic-surface-overlays-level1)] border-[var(--semantic-stroke-default)] text-[var(--semantic-text-default)]" 
                    : "text-[var(--semantic-text-subdued)]"
                )}
              >
                <MaterialSymbol name={icon} size={16} weight={300} />
                <span className="text-[11px]">{label}</span>
              </Button>
            ))}
          </div>

          <Separator className="my-3" />

          {/* Keyboard shortcut hint */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[var(--semantic-text-subdued)]">
            <span>Press</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>⇧</Kbd>
              <Kbd>A</Kbd>
            </KbdGroup>
            <span>to toggle</span>
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Check if an element has an Alizé ancestor (is inside an Alizé component)
 */
function hasAlizeAncestor(el: Element): boolean {
  let parent = el.parentElement
  while (parent) {
    const parentSlot = parent.getAttribute("data-slot")
    if (parentSlot && isAlizeSlot(parentSlot)) {
      return true
    }
    parent = parent.parentElement
  }
  return false
}

/**
 * Get categorized component elements
 * - Alizé elements: elements with data-slot matching known Alizé slots
 * - Non-Alizé elements: elements with data-slot NOT matching Alizé slots
 *   AND not inside an Alizé component (to avoid false positives on child elements)
 */
function getComponents(): { alizeElements: Element[]; nonAlizeElements: Element[] } {
  if (typeof document === "undefined") {
    return { alizeElements: [], nonAlizeElements: [] }
  }

  const alizeElements: Element[] = []
  const nonAlizeElements: Element[] = []
  
  // Find all elements with data-slot
  const slottedElements = document.querySelectorAll("[data-slot]")
  
  slottedElements.forEach((el) => {
    // Skip devtools elements
    if (el.closest("[data-alize-devtools]")) {
      return
    }
    
    const slotName = el.getAttribute("data-slot")
    if (slotName && isAlizeSlot(slotName)) {
      alizeElements.push(el)
    } else {
      // Has data-slot but not an Alizé slot name
      // Only flag as non-Alizé if it's NOT inside an Alizé component
      // (to avoid false positives on internal/child elements)
      if (!hasAlizeAncestor(el)) {
        nonAlizeElements.push(el)
      }
    }
  })
  
  return { alizeElements, nonAlizeElements }
}

/**
 * Count Alizé vs non-Alizé components
 */
function countComponents(): { alizeCount: number; nonAlizeCount: number } {
  const { alizeElements, nonAlizeElements } = getComponents()
  return { alizeCount: alizeElements.length, nonAlizeCount: nonAlizeElements.length }
}

/**
 * Apply or remove highlight markers on elements
 */
function applyHighlights(mode: HighlightMode): void {
  if (typeof document === "undefined") return
  
  // First, clean up any existing markers
  document.querySelectorAll("[data-alize-component]").forEach((el) => {
    el.removeAttribute("data-alize-component")
  })
  
  if (mode === "off") return
  
  const { alizeElements } = getComponents()
  
  alizeElements.forEach((el) => {
    el.setAttribute("data-alize-component", "true")
  })
}

/**
 * AlizeDevToolsProvider - Wraps your app to enable Alizé DevTools
 * 
 * This component provides debugging tools to identify which components
 * in your app are from the Alizé design system vs custom implementations.
 * 
 * **Activation methods:**
 * 1. **npm script**: `npm run dev:devtools` (sets NEXT_PUBLIC_ALIZE_DEVTOOLS=true)
 * 2. **URL parameter**: Add `?alize-devtools=true` to any page URL
 * 3. **Prop**: Pass `enabled={true}` to force enable
 * 
 * **Keyboard shortcut**: Press `Ctrl+Shift+A` (or `Cmd+Shift+A` on Mac) to toggle
 * (only works when DevTools is activated via one of the methods above)
 * 
 * @example
 * ```tsx
 * // In your layout.tsx or _app.tsx
 * import { AlizeDevToolsProvider } from "alize-ui"
 * 
 * export default function Layout({ children }) {
 *   return (
 *     <AlizeDevToolsProvider>
 *       {children}
 *     </AlizeDevToolsProvider>
 *   )
 * }
 * ```
 * 
 * @example
 * ```bash
 * # Start dev server with DevTools enabled
 * npm run dev:devtools
 * 
 * # Or add to URL
 * http://localhost:3000?alize-devtools=true
 * ```
 */
/**
 * Check if DevTools should be available (not necessarily visible, but activatable)
 * - Via environment variable: NEXT_PUBLIC_ALIZE_DEVTOOLS=true
 * - Via URL query parameter: ?alize-devtools=true
 */
function useDevToolsAvailable(): boolean {
  const [isAvailable, setIsAvailable] = React.useState(false)
  
  React.useEffect(() => {
    // Check environment variable
    const envEnabled = process.env.NEXT_PUBLIC_ALIZE_DEVTOOLS === "true"
    
    // Check URL query parameter
    const urlParams = new URLSearchParams(window.location.search)
    const urlEnabled = urlParams.get("alize-devtools") === "true"
    
    setIsAvailable(envEnabled || urlEnabled)
  }, [])
  
  return isAvailable
}

export function AlizeDevToolsProvider({
  children,
  enabled,
  position = "bottom-right",
}: AlizeDevToolsProviderProps): React.ReactElement {
  // Check if DevTools is available via env var or URL param
  const isAvailable = useDevToolsAvailable()
  
  // If explicitly enabled via prop, use that. Otherwise, use availability check
  const shouldEnable = enabled ?? isAvailable
  
  const [isEnabled, setIsEnabled] = React.useState(false)
  const [highlightMode, setHighlightMode] = React.useState<HighlightMode>("off")
  const [counts, setCounts] = React.useState({ alizeCount: 0, nonAlizeCount: 0 })
  
  // Sync enabled state when availability changes
  React.useEffect(() => {
    if (enabled === undefined) {
      setIsEnabled(isAvailable)
    }
  }, [isAvailable, enabled])

  // Update counts when highlight mode changes or on interval
  React.useEffect(() => {
    const updateCounts = (): void => {
      setCounts(countComponents())
    }

    updateCounts()

    // Update counts periodically to catch dynamic content
    const interval = setInterval(updateCounts, 2000)

    return () => clearInterval(interval)
  }, [highlightMode])

  // Apply highlight mode to elements
  React.useEffect(() => {
    if (typeof document === "undefined") return

    applyHighlights(highlightMode)

    // Set up a MutationObserver to handle dynamic content
    const observer = new MutationObserver(() => {
      if (highlightMode !== "off") {
        applyHighlights(highlightMode)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      applyHighlights("off")
    }
  }, [highlightMode])

  // Keyboard shortcut handler - only works when DevTools is available
  React.useEffect(() => {
    // Don't register shortcut if DevTools is not available
    if (!isAvailable && enabled === undefined) return
    
    const handleKeyDown = (e: KeyboardEvent): void => {
      // Ctrl+Shift+A or Cmd+Shift+A
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault()
        setIsEnabled((prev) => !prev)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isAvailable, enabled])

  const contextValue = React.useMemo(
    () => ({
      highlightMode,
      setHighlightMode,
      isEnabled,
      setIsEnabled,
      alizeCount: counts.alizeCount,
      nonAlizeCount: counts.nonAlizeCount,
    }),
    [highlightMode, isEnabled, counts]
  )

  return (
    <AlizeDevToolsContext.Provider value={contextValue}>
      {/* Inject styles */}
      {isEnabled && <style dangerouslySetInnerHTML={{ __html: devToolsStyles }} />}
      {children}
      <DevToolsBar />
    </AlizeDevToolsContext.Provider>
  )
}

export { useAlizeDevTools }
export type { HighlightMode, AlizeDevToolsContextValue }

