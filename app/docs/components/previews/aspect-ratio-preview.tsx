'use client';

import type { ReactNode } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

/**
 * Preview renderer for AspectRatio component examples
 */
export function AspectRatioPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Image with Aspect Ratio':
      return (
        <div className="w-full max-w-sm">
          <AspectRatio ratio={16 / 9}>
            <div className="h-full w-full bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
              16:9 Image Placeholder
            </div>
          </AspectRatio>
        </div>
      );
    
    case 'Video with Aspect Ratio':
      return (
        <div className="w-full max-w-sm">
          <AspectRatio ratio={16 / 9}>
            <div className="h-full w-full bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
              16:9 Video Placeholder
            </div>
          </AspectRatio>
        </div>
      );
    
    default:
      return null;
  }
}

