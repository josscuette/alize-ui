/**
 * Foundation Layer - Design System Styles
 * 
 * Canonical source of truth for all semantic classes used across the library.
 * 
 * This module exports all style presets organized by category:
 * - surfaces: Background colors
 * - text: Text colors
 * - icon: Icon colors (Material Symbols)
 * - stroke: Border colors
 * - states: Interaction states (hover, focus, disabled, etc.)
 * - size: Size presets (xs, sm, md, lg)
 * - radius: Border radius presets
 * - animation: Animation presets
 * 
 * Usage:
 * ```tsx
 * import { surface, text, icon, states } from '@/styles'
 * 
 * className={cn(
 *   surface.primary,
 *   text.reversedPersistent,
 *   icon.interactionBright,
 *   states.hoverOverlay1
 * )}
 * ```
 */

export { surface } from "./surfaces"
export { text } from "./text"
export { icon } from "./icon"
export { stroke } from "./stroke"
export { states } from "./states"
export { size } from "./size"
export { radius } from "./radius"
export { animation } from "./animation"
export { shadow } from "./shadow"

