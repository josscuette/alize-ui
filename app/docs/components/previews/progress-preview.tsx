'use client';

import type { ReactNode } from 'react';
import { Progress } from '@/components/ui/progress';

/**
 * Interactive preview renderer for Progress playground
 */
export function ProgressInteractivePreview(props: Record<string, string>): ReactNode {
  const { value } = props;
  const numValue = parseInt(value, 10) || 50;
  
  return (
    <div className="w-[300px]">
      <Progress value={numValue} />
      <p className="text-sm text-muted-foreground mt-2 text-center">{numValue}%</p>
    </div>
  );
}

export function ProgressPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Progress':
      return <Progress value={60} className="w-[300px]" />;
    case 'Progress States':
      return (
        <div className="space-y-4 w-[300px]">
          <Progress value={0} />
          <Progress value={33} />
          <Progress value={66} />
          <Progress value={100} />
        </div>
      );
    default:
      return null;
  }
}

