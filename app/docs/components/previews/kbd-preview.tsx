'use client';

import type { ReactNode } from 'react';
import { Kbd, KbdGroup } from '@/components/ui/kbd';

/**
 * Preview renderer for Kbd component examples
 */
export function KbdPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Single Key':
      return (
        <span className="text-sm">
          Press <Kbd>Ctrl</Kbd> to continue.
        </span>
      );
    
    case 'Key Combinations':
      return (
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      );
    
    case 'In Tooltips':
      return (
        <div className="flex items-center gap-2 text-sm">
          <span>Search</span>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>K</Kbd>
        </div>
      );
    
    default:
      return null;
  }
}

