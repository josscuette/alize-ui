'use client';

import type { ReactNode } from 'react';
import { Badge, type BadgeTonal } from '@/components/ui/badge';
import { MaterialSymbol } from '@/components/material-symbol';

/**
 * Interactive preview renderer for Badge playground
 */
export function BadgeInteractivePreview(props: Record<string, string>): ReactNode {
  const { variant, tonal, badgeStyle, numeric } = props;
  
  // Determine if tonal is being used (not "none")
  const tonalValue = tonal && tonal !== 'none' ? tonal as BadgeTonal : undefined;
  const isNumeric = numeric === 'true';
  
  return (
    <Badge 
      variant={!tonalValue ? variant as "default" | "secondary" | "outline" | "destructive" | "warning" | "success" : undefined}
      tonal={tonalValue}
      badgeStyle={badgeStyle as "default" | "outline" | "reversed"}
      numeric={isNumeric}
    >
      {isNumeric ? '42' : 'Badge Label'}
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
    
    case 'Tonal Colors':
      return (
        <div className="flex flex-wrap gap-2">
          <Badge tonal="sand">Sand</Badge>
          <Badge tonal="clay">Clay</Badge>
          <Badge tonal="lima">Lima</Badge>
          <Badge tonal="amber">Amber</Badge>
          <Badge tonal="forest">Forest</Badge>
          <Badge tonal="watercourse">Watercourse</Badge>
          <Badge tonal="atoll">Atoll</Badge>
          <Badge tonal="royal">Royal</Badge>
          <Badge tonal="magenta">Magenta</Badge>
          <Badge tonal="lavender">Lavender</Badge>
          <Badge tonal="violet">Violet</Badge>
          <Badge tonal="lilac">Lilac</Badge>
          <Badge tonal="science">Science</Badge>
        </div>
      );
    
    case 'Tonal Styles':
      return (
        <div className="space-y-2">
          <div className="flex gap-2">
            <Badge tonal="royal">Default</Badge>
            <Badge tonal="royal" badgeStyle="outline">Outline</Badge>
            <Badge tonal="royal" badgeStyle="reversed">Reversed</Badge>
          </div>
          <div className="flex gap-2">
            <Badge tonal="magenta">Default</Badge>
            <Badge tonal="magenta" badgeStyle="outline">Outline</Badge>
            <Badge tonal="magenta" badgeStyle="reversed">Reversed</Badge>
          </div>
        </div>
      );
    
    case 'Numeric Badges':
      return (
        <div className="flex gap-2">
          <Badge tonal="science" numeric>42</Badge>
          <Badge tonal="magenta" badgeStyle="reversed" numeric>99+</Badge>
          <Badge tonal="forest" badgeStyle="outline" numeric>7</Badge>
          <Badge variant="destructive" numeric>3</Badge>
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
          <Badge tonal="royal" badgeStyle="reversed">
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
