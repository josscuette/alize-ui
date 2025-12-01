'use client';

import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { MaterialSymbol } from '@/components/material-symbol';

/**
 * Interactive preview renderer for Badge playground
 */
export function BadgeInteractivePreview(props: Record<string, string>): ReactNode {
  const { variant } = props;
  
  return (
    <Badge variant={variant as "default" | "secondary" | "outline" | "destructive"}>
      Badge Label
    </Badge>
  );
}

/**
 * Preview renderer for Badge component examples
 */
export function BadgePreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Variants':
      return (
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      );
    
    case 'With Icons':
      return (
        <div className="flex gap-2">
          <Badge>
            <MaterialSymbol name="check_circle" size={12} weight={300} />
            Success
          </Badge>
          <Badge variant="outline">
            <MaterialSymbol name="bolt" size={12} weight={300} />
            Pro
          </Badge>
        </div>
      );
    
    case 'Status Indicators':
      return (
        <div className="flex gap-2">
          <Badge>
            <MaterialSymbol name="check_circle" size={12} weight={300} />
            Active
          </Badge>
          <Badge variant="secondary">Pending</Badge>
          <Badge variant="destructive">Failed</Badge>
        </div>
      );
    
    default:
      return null;
  }
}

