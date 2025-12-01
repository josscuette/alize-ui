'use client';

import type { ReactNode } from 'react';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { MaterialSymbol } from '@/components/material-symbol';

/**
 * Preview renderer for Tooltip component examples
 */
export function TooltipPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Tooltip':
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    
    case 'With Icons':
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" aria-label="Settings">
                <MaterialSymbol name="settings" size={20} weight={300} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    
    default:
      return null;
  }
}

