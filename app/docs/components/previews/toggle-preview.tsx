'use client';

import type { ReactNode } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { MaterialSymbol } from '@/components/material-symbol';

/**
 * States preview renderer for Toggle component
 * Shows Toggle in different interaction states
 */
export function ToggleStatesPreview(activeState: 'hover' | 'focus' | 'pressed' | 'disabled'): ReactNode {
  const isDisabled = activeState === 'disabled';
  const isFocus = activeState === 'focus';
  
  // Force focus ring styles when focus state is selected
  const focusRingClass = isFocus ? "ring-[3px] ring-[var(--semantic-surface-interaction-strong)]/50" : "";
  
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {/* Default variant - unpressed */}
      <div className="text-center">
        <p className="text-[10px] text-muted-foreground mb-2">Default (off)</p>
        <Toggle aria-label="Toggle bold" disabled={isDisabled} className={focusRingClass}>
          <MaterialSymbol name="format_bold" size={16} weight={300} />
        </Toggle>
      </div>
      
      {/* Default variant - pressed */}
      <div className="text-center">
        <p className="text-[10px] text-muted-foreground mb-2">Default (on)</p>
        <Toggle aria-label="Toggle bold" pressed disabled={isDisabled} className={focusRingClass}>
          <MaterialSymbol name="format_bold" size={16} weight={300} />
        </Toggle>
      </div>
      
      {/* Outline variant - unpressed */}
      <div className="text-center">
        <p className="text-[10px] text-muted-foreground mb-2">Outline (off)</p>
        <Toggle variant="outline" aria-label="Toggle italic" disabled={isDisabled} className={focusRingClass}>
          <MaterialSymbol name="format_italic" size={16} weight={300} />
        </Toggle>
      </div>
      
      {/* Outline variant - pressed */}
      <div className="text-center">
        <p className="text-[10px] text-muted-foreground mb-2">Outline (on)</p>
        <Toggle variant="outline" aria-label="Toggle italic" pressed disabled={isDisabled} className={focusRingClass}>
          <MaterialSymbol name="format_italic" size={16} weight={300} />
        </Toggle>
      </div>
    </div>
  );
}

/**
 * Interactive preview renderer for Toggle playground
 */
export function ToggleInteractivePreview(props: Record<string, string>): ReactNode {
  const { variant, size, pressed, disabled } = props;
  const isPressed = pressed === 'true';
  const isDisabled = disabled === 'true';
  
  const iconSizes: Record<string, number> = {
    sm: 14,
    default: 16,
    lg: 18,
  };
  
  return (
    <Toggle 
      variant={variant as "default" | "outline"} 
      size={size as "default" | "sm" | "lg"}
      pressed={isPressed}
      disabled={isDisabled}
      aria-label="Toggle formatting"
    >
      <MaterialSymbol name="format_bold" size={iconSizes[size] || 16} weight={300} />
    </Toggle>
  );
}

/**
 * Preview renderer for Toggle component examples
 */
export function TogglePreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Toggle':
      return (
        <Toggle aria-label="Toggle bold">
          <MaterialSymbol name="format_bold" size={16} weight={300} />
        </Toggle>
      );
    
    case 'Variants':
      return (
        <div className="flex gap-2">
          <Toggle variant="default" aria-label="Toggle bold">
            <MaterialSymbol name="format_bold" size={16} weight={300} />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <MaterialSymbol name="format_italic" size={16} weight={300} />
          </Toggle>
        </div>
      );
    
    case 'Sizes':
      return (
        <div className="flex items-center gap-2">
          <Toggle size="sm" aria-label="Toggle bold">
            <MaterialSymbol name="format_bold" size={14} weight={300} />
          </Toggle>
          <Toggle size="default" aria-label="Toggle bold">
            <MaterialSymbol name="format_bold" size={16} weight={300} />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle bold">
            <MaterialSymbol name="format_bold" size={18} weight={300} />
          </Toggle>
        </div>
      );
    
    default:
      return null;
  }
}

