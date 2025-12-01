'use client';

import type { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MaterialSymbol } from '@/components/material-symbol';

const AVATAR_IMAGE = "/images/avatar-sample.png";

/**
 * Interactive preview renderer for Avatar playground
 */
export function AvatarInteractivePreview(props: Record<string, string>): ReactNode {
  const { size, shape, showImage } = props;
  const hasImage = showImage === 'true';
  
  return (
    <Avatar 
      size={size as "xs" | "sm" | "md" | "lg"} 
      shape={shape as "rounded" | "square"}
    >
      {hasImage && <AvatarImage src={AVATAR_IMAGE} alt="User" />}
      <AvatarFallback size={size as "xs" | "sm" | "md" | "lg"}>JD</AvatarFallback>
    </Avatar>
  );
}

/**
 * Preview renderer for Avatar component examples
 */
export function AvatarPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Avatar':
      return (
        <Avatar size="md">
          <AvatarImage src={AVATAR_IMAGE} alt="User" />
          <AvatarFallback size="md">JD</AvatarFallback>
        </Avatar>
      );
    
    case 'Sizes':
      return (
        <div className="flex items-center gap-4">
          <Avatar size="xs">
            <AvatarImage src={AVATAR_IMAGE} alt="User" />
            <AvatarFallback size="xs">JD</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarImage src={AVATAR_IMAGE} alt="User" />
            <AvatarFallback size="sm">JD</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src={AVATAR_IMAGE} alt="User" />
            <AvatarFallback size="md">JD</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src={AVATAR_IMAGE} alt="User" />
            <AvatarFallback size="lg">JD</AvatarFallback>
          </Avatar>
        </div>
      );
    
    case 'Shapes':
      return (
        <div className="flex items-center gap-4">
          <Avatar size="md" shape="rounded">
            <AvatarImage src={AVATAR_IMAGE} alt="User" />
            <AvatarFallback size="md">JD</AvatarFallback>
          </Avatar>
          <Avatar size="md" shape="square">
            <AvatarImage src={AVATAR_IMAGE} alt="User" />
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

