'use client';

import type { ReactNode } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';

/**
 * Interactive preview renderer for Spinner playground
 */
export function SpinnerInteractivePreview(props: Record<string, string>): ReactNode {
  const { size } = props;
  
  const sizeClasses: Record<string, string> = {
    sm: 'size-4',
    default: 'size-6',
    lg: 'size-8',
  };
  
  return (
    <div className="flex items-center gap-4">
      <Spinner className={sizeClasses[size] || 'size-6'} />
      <span className="text-sm text-muted-foreground">
        {size === 'sm' ? 'Small' : size === 'lg' ? 'Large' : 'Default'} spinner
      </span>
    </div>
  );
}

/**
 * Preview renderer for Spinner component examples
 */
export function SpinnerPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Spinner':
      return <Spinner />;
    
    case 'Sized Spinners':
      return (
        <div className="flex items-center gap-4">
          <Spinner className="size-4" />
          <Spinner className="size-6" />
          <Spinner className="size-8" />
        </div>
      );
    
    case 'In Buttons':
      return (
        <Button disabled>
          <Spinner className="size-4 mr-2" />
          Loading...
        </Button>
      );
    
    default:
      return null;
  }
}

