'use client';

import type { ReactNode } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

export function ScrollAreaPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Scroll Area':
      return (
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium">Tags</h4>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="text-sm py-1 border-b last:border-0">
                Tag {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      );
    default:
      return null;
  }
}

