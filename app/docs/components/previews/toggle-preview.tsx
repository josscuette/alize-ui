'use client';

import type { ReactNode } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { MaterialSymbol } from '@/components/material-symbol';

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

