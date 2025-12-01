'use client';

import type { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MaterialSymbol } from '@/components/material-symbol';

/**
 * Preview renderer for Avatar component examples
 */
export function AvatarPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Avatar':
      return (
        <Avatar size="md">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback size="md">JD</AvatarFallback>
        </Avatar>
      );
    
    case 'Sizes':
      return (
        <div className="flex items-center gap-4">
          <Avatar size="xs">
            <AvatarFallback size="xs">JD</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback size="sm">JD</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarFallback size="md">JD</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback size="lg">JD</AvatarFallback>
          </Avatar>
        </div>
      );
    
    case 'Shapes':
      return (
        <div className="flex items-center gap-4">
          <Avatar size="md" shape="rounded">
            <AvatarFallback size="md">JD</AvatarFallback>
          </Avatar>
          <Avatar size="md" shape="square">
            <AvatarFallback size="md">JD</AvatarFallback>
          </Avatar>
        </div>
      );

    case 'With Pictogram':
      return (
        <Avatar size="md">
          <AvatarFallback size="md">
            <MaterialSymbol name="person" size={20} weight={300} />
          </AvatarFallback>
        </Avatar>
      );
    
    default:
      return null;
  }
}

