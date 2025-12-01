'use client';

import type { ReactNode } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function HoverCardPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Hover Card':
      return (
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="text-sm font-medium underline cursor-pointer">@username</span>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@username</h4>
                <p className="text-sm text-muted-foreground">User profile description goes here</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      );
    default:
      return null;
  }
}

