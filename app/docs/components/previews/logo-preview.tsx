'use client';

import { useState, type ReactNode } from 'react';
import { Logo, JLLLogo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { MaterialSymbol } from '@/components/material-symbol';

/**
 * Interactive preview renderer for Logo playground
 */
export function LogoInteractivePreview(props: Record<string, string>): ReactNode {
  const { size, productName, collapsed } = props;
  
  return (
    <Logo 
      size={size as "default" | "sm" | "lg"} 
      productName={productName}
      collapsed={collapsed === "true"}
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
        <div className="flex items-center gap-6">
          <Logo />
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
    
    case 'Collapsible Navigation':
      return <CollapsibleNavDemo />;
    
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

/**
 * Demo component for collapsible navigation example
 */
function CollapsibleNavDemo(): ReactNode {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
        >
          <MaterialSymbol name={collapsed ? "menu_open" : "menu"} size={16} weight={300} />
          {collapsed ? "Expand" : "Collapse"}
        </Button>
        <span className="text-sm text-semantic-text-subdued">
          {collapsed ? "Navigation collapsed" : "Navigation expanded"}
        </span>
      </div>
      <div className="flex items-center gap-4 p-4 border border-semantic-stroke-default rounded-lg transition-all">
        <Logo productName="My Application" collapsed={collapsed} />
      </div>
    </div>
  );
}

