"use client"

import { useEffect } from "react"

/**
 * Alizé DevTools Auto-Injection Script
 * 
 * This script automatically injects the DevTools when the URL contains
 * ?alize-devtools=true
 * 
 * It uses a hook that should be called from Alizé components.
 */

// Known Alizé component slot names
const ALIZE_SLOT_NAMES = new Set([
  // Atoms
  "button", "input", "label", "badge", "avatar", "avatar-image", "avatar-fallback",
  "skeleton", "spinner", "separator", "kbd", "kbd-group", "toggle", "toggle-group",
  "toggle-group-item", "tooltip", "tooltip-trigger", "tooltip-content", "aspect-ratio",
  "empty", "item", "logo",
  // Typography
  "typography-h1", "typography-h2", "typography-h3", "typography-h4", "typography-p",
  "typography-blockquote", "typography-code",
  // Molecules
  "checkbox", "checkbox-card", "switch", "switch-card", "radio-group", "radio-group-item",
  "radio-group-card-item", "select", "select-trigger", "select-content", "select-item",
  "select-value", "select-group", "select-label", "select-separator", "textarea",
  "slider", "slider-track", "slider-range", "slider-thumb", "progress", "progress-indicator",
  "alert", "alert-title", "alert-description", "card", "card-header", "card-footer",
  "card-title", "card-action", "card-description", "card-content", "tabs", "tabs-list",
  "tabs-trigger", "tabs-content", "accordion", "accordion-item", "accordion-trigger",
  "accordion-content", "collapsible", "collapsible-trigger", "collapsible-content",
  "popover", "popover-trigger", "popover-content", "popover-anchor", "hover-card",
  "hover-card-trigger", "hover-card-content", "dropdown-menu", "dropdown-menu-trigger",
  "dropdown-menu-content", "dropdown-menu-item", "dropdown-menu-label",
  "dropdown-menu-separator", "dropdown-menu-shortcut", "dropdown-menu-group",
  "dropdown-menu-checkbox-item", "dropdown-menu-radio-group", "dropdown-menu-radio-item",
  "dropdown-menu-sub", "dropdown-menu-sub-trigger", "dropdown-menu-sub-content",
  "context-menu", "context-menu-trigger", "context-menu-content", "context-menu-item",
  "context-menu-label", "context-menu-separator", "context-menu-shortcut",
  "context-menu-checkbox-item", "context-menu-radio-group", "context-menu-radio-item",
  "context-menu-sub", "context-menu-sub-trigger", "context-menu-sub-content",
  "command", "command-dialog", "command-input", "command-list", "command-empty",
  "command-group", "command-item", "command-shortcut", "command-separator", "combobox",
  "input-otp", "input-otp-group", "input-otp-slot", "input-otp-separator", "input-group",
  "breadcrumb", "breadcrumb-list", "breadcrumb-item", "breadcrumb-link", "breadcrumb-page",
  "breadcrumb-separator", "breadcrumb-ellipsis", "pagination", "pagination-content",
  "pagination-item", "pagination-link", "pagination-previous", "pagination-next",
  "pagination-ellipsis", "button-group", "button-group-separator", "button-group-text",
  "native-select", "native-select-trigger", "native-select-value", "native-select-content",
  "native-select-item", "field", "field-content", "field-description", "field-error",
  "field-group", "field-label", "field-legend", "field-separator", "field-set", "field-title",
  // Organisms
  "dialog", "dialog-trigger", "dialog-content", "dialog-header", "dialog-footer",
  "dialog-title", "dialog-description", "dialog-close", "dialog-overlay", "dialog-portal",
  "alert-dialog", "alert-dialog-trigger", "alert-dialog-content", "alert-dialog-header",
  "alert-dialog-footer", "alert-dialog-title", "alert-dialog-description",
  "alert-dialog-action", "alert-dialog-cancel", "drawer", "drawer-trigger", "drawer-content",
  "drawer-header", "drawer-footer", "drawer-title", "drawer-description", "drawer-close",
  "drawer-overlay", "drawer-portal", "sheet", "sheet-trigger", "sheet-content",
  "sheet-header", "sheet-footer", "sheet-title", "sheet-description", "sheet-close",
  "sidebar", "sidebar-content", "sidebar-footer", "sidebar-group", "sidebar-group-action",
  "sidebar-group-content", "sidebar-group-label", "sidebar-header", "sidebar-input",
  "sidebar-inset", "sidebar-menu", "sidebar-menu-action", "sidebar-menu-badge",
  "sidebar-menu-button", "sidebar-menu-item", "sidebar-menu-skeleton", "sidebar-menu-sub",
  "sidebar-menu-sub-button", "sidebar-menu-sub-item", "sidebar-provider", "sidebar-rail",
  "sidebar-separator", "sidebar-trigger", "navigation-menu", "navigation-menu-content",
  "navigation-menu-item", "navigation-menu-link", "navigation-menu-list",
  "navigation-menu-trigger", "navigation-menu-viewport", "navigation-menu-indicator",
  "menubar", "menubar-menu", "menubar-trigger", "menubar-content", "menubar-item",
  "menubar-label", "menubar-separator", "menubar-shortcut", "menubar-checkbox-item",
  "menubar-radio-group", "menubar-radio-item", "menubar-sub", "menubar-sub-trigger",
  "menubar-sub-content", "form", "form-item", "form-label", "form-control",
  "form-description", "form-message", "table", "table-header", "table-body", "table-footer",
  "table-row", "table-head", "table-cell", "table-caption", "data-table", "data-list",
  "data-list-group", "data-list-item", "data-list-empty", "data-list-skeleton",
  "sparkline", "sparkbar", "spark-bullet", "spark-trend", "sparkline-cell", "sparkbar-cell",
  "spark-bullet-cell", "spark-trend-cell", "calendar", "calendar-day-button", "date-picker",
  "carousel", "carousel-content", "carousel-item", "carousel-previous", "carousel-next",
  "highchart", "toaster", "scroll-area", "scroll-bar", "resizable-panel-group",
  "resizable-panel", "resizable-handle", "material-symbol",
])

type HighlightMode = "off" | "alize" | "non-alize" | "both"

// Global state stored on window to persist across re-renders
declare global {
  interface Window {
    __ALIZE_DEVTOOLS__?: {
      isInjected: boolean
      highlightMode: HighlightMode
      isVisible: boolean
      isCollapsed: boolean
    }
  }
}

function getState() {
  if (typeof window === "undefined") {
    return { isInjected: false, highlightMode: "off" as HighlightMode, isVisible: true, isCollapsed: false }
  }
  if (!window.__ALIZE_DEVTOOLS__) {
    window.__ALIZE_DEVTOOLS__ = { isInjected: false, highlightMode: "off", isVisible: true, isCollapsed: false }
  }
  return window.__ALIZE_DEVTOOLS__
}

function isAlizeSlot(slotName: string): boolean {
  return ALIZE_SLOT_NAMES.has(slotName)
}

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

function getComponents(): { alizeElements: Element[]; nonAlizeElements: Element[] } {
  const alizeElements: Element[] = []
  const nonAlizeElements: Element[] = []
  
  const slottedElements = document.querySelectorAll("[data-slot]")
  
  slottedElements.forEach((el) => {
    if (el.closest("[data-alize-devtools-standalone]")) return
    
    const slotName = el.getAttribute("data-slot")
    if (slotName && isAlizeSlot(slotName)) {
      alizeElements.push(el)
    } else {
      if (!hasAlizeAncestor(el)) {
        nonAlizeElements.push(el)
      }
    }
  })
  
  return { alizeElements, nonAlizeElements }
}

function applyHighlights(mode: HighlightMode): void {
  document.querySelectorAll("[data-alize-component]").forEach((el) => {
    el.removeAttribute("data-alize-component")
  })
  
  if (mode === "off") return
  
  const { alizeElements, nonAlizeElements } = getComponents()
  
  if (mode === "alize" || mode === "both") {
    alizeElements.forEach((el) => {
      el.setAttribute("data-alize-component", "true")
    })
  }
  
  if (mode === "non-alize" || mode === "both") {
    nonAlizeElements.forEach((el) => {
      el.setAttribute("data-alize-component", "false")
    })
  }
}

function injectStyles(): void {
  if (document.getElementById("alize-devtools-styles")) return
  
  const style = document.createElement("style")
  style.id = "alize-devtools-styles"
  style.textContent = `
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
    
    [data-alize-component="false"] {
      outline: 3px solid var(--color-tailwind-slate-500, #64748b) !important;
      outline-offset: 2px !important;
      position: relative !important;
    }
    
    [data-alize-component="false"]::before {
      content: "Not Alizé";
      position: absolute !important;
      top: -22px !important;
      left: 0 !important;
      background: var(--color-tailwind-slate-500, #64748b) !important;
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
    
    #alize-devtools-bar {
      position: fixed;
      bottom: 16px;
      right: 16px;
      z-index: 99999;
      font-family: ui-sans-serif, system-ui, sans-serif;
      font-size: 13px;
    }
    
    #alize-devtools-bar * {
      box-sizing: border-box;
    }
    
    .alize-devtools-panel {
      min-width: 300px;
      border-radius: 12px;
      border: 1px solid var(--semantic-stroke-default, #334155);
      background: var(--semantic-surface-default, #0f172a);
      padding: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      color: var(--semantic-text-default, #e2e8f0);
    }
    
    .alize-devtools-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    
    .alize-devtools-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--semantic-text-interaction-default, #38bdf8);
    }
    
    .alize-devtools-badge {
      font-size: 10px;
      background: var(--semantic-surface-secondary, #1e293b);
      color: var(--semantic-text-subdued, #94a3b8);
      padding: 2px 6px;
      border-radius: 4px;
      margin-left: 8px;
    }
    
    .alize-devtools-close {
      background: transparent;
      border: none;
      color: var(--semantic-text-subdued, #94a3b8);
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .alize-devtools-close:hover {
      background: var(--semantic-surface-overlays-level1, rgba(255,255,255,0.1));
    }
    
    .alize-devtools-separator {
      height: 1px;
      background: var(--semantic-stroke-default, #334155);
      margin: 12px 0;
    }
    
    .alize-devtools-stats {
      display: flex;
      gap: 16px;
      margin-bottom: 12px;
    }
    
    .alize-devtools-stat {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .alize-devtools-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    
    .alize-devtools-dot.alize {
      background: var(--semantic-tonal-lilac-strong, #9333ea);
    }
    
    .alize-devtools-dot.other {
      background: var(--color-tailwind-slate-500, #64748b);
    }
    
    .alize-devtools-stat-label {
      color: var(--semantic-text-subdued, #94a3b8);
    }
    
    .alize-devtools-stat-value {
      font-weight: 500;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
    }
    
    .alize-devtools-stat-value.alize {
      background: var(--semantic-tonal-lilac-strong, #9333ea);
      color: white;
    }
    
    .alize-devtools-stat-value.other {
      background: var(--color-tailwind-slate-500, #64748b);
      color: white;
    }
    
    .alize-devtools-buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
    }
    
    .alize-devtools-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 8px;
      border: 1px solid var(--semantic-stroke-default, #334155);
      border-radius: 8px;
      background: transparent;
      color: var(--semantic-text-subdued, #94a3b8);
      cursor: pointer;
      font-size: 11px;
      transition: all 0.15s;
    }
    
    .alize-devtools-btn:hover {
      background: var(--semantic-surface-overlays-level1, rgba(255,255,255,0.1));
    }
    
    .alize-devtools-btn.active {
      background: var(--semantic-surface-overlays-level1, rgba(255,255,255,0.1));
      border-color: var(--semantic-stroke-default, #475569);
      color: var(--semantic-text-default, #e2e8f0);
    }
    
    .alize-devtools-hint {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--semantic-stroke-default, #334155);
      text-align: center;
      font-size: 11px;
      color: var(--semantic-text-subdued, #64748b);
    }
    
    .alize-devtools-kbd {
      background: var(--semantic-surface-secondary, #1e293b);
      color: var(--semantic-text-subdued, #94a3b8);
      padding: 2px 6px;
      border-radius: 4px;
      font-family: ui-monospace, monospace;
      font-size: 10px;
      margin: 0 2px;
    }
    
    .alize-devtools-collapsed {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      border: 1px solid var(--semantic-stroke-default, #334155);
      background: var(--semantic-surface-default, #0f172a);
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--semantic-text-interaction-default, #38bdf8);
      font-size: 18px;
      font-weight: bold;
    }
    
    .alize-devtools-collapsed:hover {
      background: var(--semantic-surface-overlays-level1, rgba(255,255,255,0.1));
    }
  `
  document.head.appendChild(style)
}

function updateStats(): void {
  const { alizeElements, nonAlizeElements } = getComponents()
  const alizeCount = document.getElementById("alize-devtools-alize-count")
  const otherCount = document.getElementById("alize-devtools-other-count")
  if (alizeCount) alizeCount.textContent = String(alizeElements.length)
  if (otherCount) otherCount.textContent = String(nonAlizeElements.length)
}

function setMode(mode: HighlightMode): void {
  const state = getState()
  state.highlightMode = mode
  applyHighlights(mode)
  
  // Update button states
  document.querySelectorAll(".alize-devtools-btn").forEach((btn) => {
    btn.classList.remove("active")
    if (btn.getAttribute("data-mode") === mode) {
      btn.classList.add("active")
    }
  })
}

function renderPanel(): string {
  return `
    <div class="alize-devtools-panel">
      <div class="alize-devtools-header">
        <div style="display: flex; align-items: center;">
          <span class="alize-devtools-title">Alizé DevTools</span>
          <span class="alize-devtools-badge">standalone</span>
        </div>
        <div style="display: flex; gap: 4px;">
          <button class="alize-devtools-close" id="alize-devtools-minimize" title="Minimize">−</button>
          <button class="alize-devtools-close" id="alize-devtools-close" title="Close">×</button>
        </div>
      </div>
      
      <div class="alize-devtools-separator"></div>
      
      <div class="alize-devtools-stats">
        <div class="alize-devtools-stat">
          <div class="alize-devtools-dot alize"></div>
          <span class="alize-devtools-stat-label">Alizé:</span>
          <span class="alize-devtools-stat-value alize" id="alize-devtools-alize-count">0</span>
        </div>
        <div class="alize-devtools-stat">
          <div class="alize-devtools-dot other"></div>
          <span class="alize-devtools-stat-label">Other:</span>
          <span class="alize-devtools-stat-value other" id="alize-devtools-other-count">0</span>
        </div>
      </div>
      
      <div class="alize-devtools-buttons">
        <button class="alize-devtools-btn active" data-mode="off">
          <span>○</span>
          <span>Off</span>
        </button>
        <button class="alize-devtools-btn" data-mode="alize">
          <span>◉</span>
          <span>Alizé</span>
        </button>
        <button class="alize-devtools-btn" data-mode="non-alize">
          <span>◉</span>
          <span>Other</span>
        </button>
        <button class="alize-devtools-btn" data-mode="both">
          <span>◎</span>
          <span>Both</span>
        </button>
      </div>
      
      <div class="alize-devtools-hint">
        Press <span class="alize-devtools-kbd">⌘</span><span class="alize-devtools-kbd">⇧</span><span class="alize-devtools-kbd">A</span> to toggle
      </div>
    </div>
  `
}

function renderCollapsed(): string {
  return `<div class="alize-devtools-collapsed" id="alize-devtools-expand" title="Open Alizé DevTools">A</div>`
}

function render(): void {
  const state = getState()
  const bar = document.getElementById("alize-devtools-bar")
  if (!bar) return
  
  if (!state.isVisible) {
    bar.innerHTML = ""
    return
  }
  
  bar.innerHTML = state.isCollapsed ? renderCollapsed() : renderPanel()
  
  // Attach event listeners
  if (state.isCollapsed) {
    document.getElementById("alize-devtools-expand")?.addEventListener("click", () => {
      state.isCollapsed = false
      render()
    })
  } else {
    document.getElementById("alize-devtools-minimize")?.addEventListener("click", () => {
      state.isCollapsed = true
      render()
    })
    
    document.getElementById("alize-devtools-close")?.addEventListener("click", () => {
      state.isVisible = false
      applyHighlights("off")
      render()
    })
    
    document.querySelectorAll(".alize-devtools-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const mode = btn.getAttribute("data-mode") as HighlightMode
        setMode(mode)
      })
    })
    
    updateStats()
  }
}

function injectDevTools(): void {
  const state = getState()
  if (state.isInjected) return
  if (typeof document === "undefined") return
  
  state.isInjected = true
  
  injectStyles()
  
  // Create container
  const bar = document.createElement("div")
  bar.id = "alize-devtools-bar"
  bar.setAttribute("data-alize-devtools-standalone", "true")
  document.body.appendChild(bar)
  
  render()
  
  // Set up periodic stats update
  setInterval(updateStats, 2000)
  
  // Set up mutation observer for dynamic content
  const observer = new MutationObserver(() => {
    if (state.highlightMode !== "off") {
      applyHighlights(state.highlightMode)
    }
    updateStats()
  })
  
  observer.observe(document.body, { childList: true, subtree: true })
  
  // Keyboard shortcut
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "a") {
      e.preventDefault()
      state.isVisible = !state.isVisible
      if (!state.isVisible) {
        applyHighlights("off")
      }
      render()
    }
  })
  
  // eslint-disable-next-line no-console
  console.log("[Alizé DevTools] Injected successfully! Press ⌘+Shift+A to toggle.")
}

function shouldInjectDevTools(): boolean {
  if (typeof window === "undefined") return false
  
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get("alize-devtools") === "true"
}

/**
 * Hook to be called from Alizé components to auto-inject DevTools
 * This runs in useEffect, guaranteeing client-side execution
 */
export function useAlizeDevToolsAutoInject(): void {
  useEffect(() => {
    if (shouldInjectDevTools()) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(injectDevTools, 50)
      return () => clearTimeout(timer)
    }
  }, [])
}

// Export for manual use
export { injectDevTools }
