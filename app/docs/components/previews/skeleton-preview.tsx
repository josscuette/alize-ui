'use client';

import type { ReactNode } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * Preview renderer for Skeleton component examples
 */
export function SkeletonPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Skeleton':
      return <Skeleton className="h-4 w-32" />;
    
    case 'Card Skeleton':
      return (
        <div className="space-y-3 w-full max-w-sm">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-32 w-full" />
        </div>
      );
    
    case 'Avatar Skeleton':
      return (
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      );
    
    default:
      return null;
  }
}

