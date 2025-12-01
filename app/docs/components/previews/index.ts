/**
 * Preview Registry
 * 
 * This file exports all preview components and provides a way to 
 * get the correct preview renderer for a given component ID.
 * 
 * To add a new component preview:
 * 1. Create a new file: `[component]-preview.tsx`
 * 2. Export a `[Component]Preview` function that takes { title: string }
 * 3. Import and register it in the PREVIEW_REGISTRY below
 */

import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import type { PreviewRendererProps } from '../doc-template';

// Import all preview components
import { ButtonPreview, ButtonInteractivePreview } from './button-preview';
import { CheckboxPreview } from './checkbox-preview';
import { InputPreview } from './input-preview';
import { BadgePreview } from './badge-preview';
import { LabelPreview } from './label-preview';
import { AvatarPreview } from './avatar-preview';
import { SkeletonPreview } from './skeleton-preview';
import { SpinnerPreview } from './spinner-preview';
import { SeparatorPreview } from './separator-preview';
import { KbdPreview } from './kbd-preview';
import { TogglePreview } from './toggle-preview';
import { ToggleGroupPreview } from './toggle-group-preview';
import { TooltipPreview } from './tooltip-preview';
import { TypographyPreview } from './typography-preview';
import { AspectRatioPreview } from './aspect-ratio-preview';
import { EmptyPreview } from './empty-preview';
import { ItemPreview } from './item-preview';
import { SwitchPreview } from './switch-preview';
import { RadioGroupPreview } from './radio-group-preview';

// DataViz previews - loaded dynamically to avoid SSR issues with Highcharts
const LineChartsPreview = dynamic(
  () => import('./line-charts-preview').then(mod => mod.LineChartsPreview),
  { ssr: false, loading: () => <div className="animate-pulse h-[300px] bg-muted rounded-lg" /> }
);
const BarChartsPreview = dynamic(
  () => import('./bar-charts-preview').then(mod => mod.BarChartsPreview),
  { ssr: false, loading: () => <div className="animate-pulse h-[300px] bg-muted rounded-lg" /> }
);
const PieChartsPreview = dynamic(
  () => import('./pie-charts-preview').then(mod => mod.PieChartsPreview),
  { ssr: false, loading: () => <div className="animate-pulse h-[300px] bg-muted rounded-lg" /> }
);
const AdvancedPatternsPreview = dynamic(
  () => import('./advanced-patterns-preview').then(mod => mod.AdvancedPatternsPreview),
  { ssr: false, loading: () => <div className="animate-pulse h-[300px] bg-muted rounded-lg" /> }
);

// Type for preview functions
type PreviewFunction = (props: { title: string }) => ReactNode;

// Type for interactive preview functions
type InteractivePreviewFunction = (props: Record<string, string>) => ReactNode;

/**
 * Registry mapping component IDs to their interactive preview functions
 */
const INTERACTIVE_PREVIEW_REGISTRY: Record<string, InteractivePreviewFunction> = {
  'Button': ButtonInteractivePreview,
};

/**
 * Get the interactive preview renderer function for a component
 */
export function getInteractivePreviewRenderer(
  componentId: string
): InteractivePreviewFunction | undefined {
  return INTERACTIVE_PREVIEW_REGISTRY[componentId];
}

/**
 * Registry mapping component IDs to their preview functions
 * 
 * The key is the `component` field from the component data (e.g., "Button", "Checkbox")
 * The value is the preview function
 */
const PREVIEW_REGISTRY: Record<string, PreviewFunction> = {
  // Atoms
  'Button': ButtonPreview,
  'Checkbox': CheckboxPreview,
  'Input': InputPreview,
  'Badge': BadgePreview,
  'Label': LabelPreview,
  'Avatar': AvatarPreview,
  'Skeleton': SkeletonPreview,
  'Spinner': SpinnerPreview,
  'Separator': SeparatorPreview,
  'Kbd': KbdPreview,
  'Toggle': TogglePreview,
  'ToggleGroup': ToggleGroupPreview,
  'Tooltip': TooltipPreview,
  'Typography': TypographyPreview,
  'AspectRatio': AspectRatioPreview,
  'Empty': EmptyPreview,
  'Item': ItemPreview,
  'Switch': SwitchPreview,
  'RadioGroup': RadioGroupPreview,
  
  // DataViz (loaded dynamically - no SSR)
  'line-charts': LineChartsPreview,
  'bar-charts': BarChartsPreview,
  'pie-charts': PieChartsPreview,
  'advanced-patterns': AdvancedPatternsPreview,
};

/**
 * Get the preview renderer function for a component
 * 
 * @param componentId - The component ID (e.g., "Button", "Checkbox")
 * @returns A function that renders the preview, or undefined if no preview exists
 */
export function getPreviewRenderer(
  componentId: string
): ((props: PreviewRendererProps) => ReactNode) | undefined {
  const previewFn = PREVIEW_REGISTRY[componentId];
  
  if (!previewFn) {
    return undefined;
  }
  
  // Wrap the preview function to match the expected signature
  return ({ title }: PreviewRendererProps) => previewFn({ title });
}

/**
 * Check if a component has a live preview available
 */
export function hasPreview(componentId: string): boolean {
  return componentId in PREVIEW_REGISTRY;
}

// Re-export individual previews for direct import if needed
export {
  // Atoms
  ButtonPreview,
  ButtonInteractivePreview,
  CheckboxPreview,
  InputPreview,
  BadgePreview,
  LabelPreview,
  AvatarPreview,
  SkeletonPreview,
  SpinnerPreview,
  SeparatorPreview,
  KbdPreview,
  TogglePreview,
  ToggleGroupPreview,
  TooltipPreview,
  TypographyPreview,
  AspectRatioPreview,
  EmptyPreview,
  ItemPreview,
  SwitchPreview,
  RadioGroupPreview,
  // DataViz (dynamic)
  LineChartsPreview,
  BarChartsPreview,
  PieChartsPreview,
  AdvancedPatternsPreview,
};

