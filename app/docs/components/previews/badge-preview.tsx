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
    <Badge variant={variant as "default" | "secondary" | "outline" | "destructive" | "warning" | "success"}>
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
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      );
    
    case 'RAG Status':
      return (
        <div className="flex gap-2">
          <Badge variant="success">
            <MaterialSymbol name="check_circle" size={12} weight={300} />
            Complete
          </Badge>
          <Badge variant="warning">
            <MaterialSymbol name="schedule" size={12} weight={300} />
            Pending
          </Badge>
          <Badge variant="destructive">
            <MaterialSymbol name="error" size={12} weight={300} />
            Failed
          </Badge>
        </div>
      );
    
    case 'With Icons':
      return (
        <div className="flex gap-2">
          <Badge variant="success">
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
          <Badge variant="success">
            <MaterialSymbol name="check_circle" size={12} weight={300} />
            Active
          </Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="destructive">Failed</Badge>
        </div>
      );
    
    default:
      return null;
  }
}

