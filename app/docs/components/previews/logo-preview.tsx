'use client';

import type { ReactNode } from 'react';
import { Logo, JLLLogo } from '@/components/ui/logo';

/**
 * Interactive preview renderer for Logo playground
 */
export function LogoInteractivePreview(props: Record<string, string>): ReactNode {
  const { size, productName } = props;
  
  return (
    <Logo 
      size={size as "default" | "sm" | "lg"} 
      productName={productName || "Product Name"}
    />
  );
}

/**
 * Preview renderer for Logo component examples
 */
export function LogoPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Logo':
      return (
        <div className="flex items-center gap-8">
          <Logo productName="Product Name" />
        </div>
      );
    
    case 'Logo Only':
      return (
        <div className="flex items-center gap-4">
          <Logo logoOnly />
          <JLLLogo className="h-6 w-auto" />
        </div>
      );
    
    case 'Sizes':
      return (
        <div className="flex flex-col gap-4">
          <Logo size="sm" productName="Small" />
          <Logo size="default" productName="Default" />
          <Logo size="lg" productName="Large" />
        </div>
      );
    
    case 'In Navigation':
      return (
        <div className="flex items-center justify-between gap-8 p-4 border border-semantic-stroke-default rounded-lg">
          <Logo productName="My Application" />
          <div className="text-sm text-semantic-text-subdued">Navigation items...</div>
        </div>
      );
    
    default:
      return null;
  }
}

