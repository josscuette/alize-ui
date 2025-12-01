'use client';

import type { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';

/**
 * Preview renderer for Separator component examples
 */
export function SeparatorPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Horizontal Separator':
      return (
        <div className="w-full max-w-sm space-y-4">
          <p className="text-sm">Content above</p>
          <Separator />
          <p className="text-sm">Content below</p>
        </div>
      );
    
    case 'Vertical Separator':
      return (
        <div className="flex items-center gap-4 h-5">
          <span className="text-sm">Left</span>
          <Separator orientation="vertical" />
          <span className="text-sm">Right</span>
        </div>
      );
    
    default:
      return null;
  }
}

