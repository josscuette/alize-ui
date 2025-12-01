'use client';

import type { ReactNode } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { MaterialSymbol } from '@/components/material-symbol';

/**
 * Preview renderer for ToggleGroup component examples
 */
export function ToggleGroupPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Single Selection':
      return (
        <ToggleGroup type="single" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="Left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right">Right</ToggleGroupItem>
        </ToggleGroup>
      );
    
    case 'Multiple Selection':
      return (
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <MaterialSymbol name="format_bold" size={16} weight={300} />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <MaterialSymbol name="format_italic" size={16} weight={300} />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <MaterialSymbol name="format_underlined" size={16} weight={300} />
          </ToggleGroupItem>
        </ToggleGroup>
      );
    
    default:
      return null;
  }
}

