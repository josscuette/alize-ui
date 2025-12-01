'use client';

import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { MaterialSymbol } from '@/components/material-symbol';

/**
 * Interactive preview renderer for Button playground
 */
export function ButtonInteractivePreview(props: Record<string, string>): ReactNode {
  const { variant, size, iconOnly, disabled } = props;
  
  const isIconOnly = iconOnly === 'true';
  const isDisabled = disabled === 'true';
  
  // Map sizes to icon sizes when iconOnly is true
  let actualSize = size || 'default';
  if (isIconOnly) {
    const sizeMap: Record<string, string> = {
      'xs': 'icon-xs',
      'sm': 'icon-sm',
      'default': 'icon',
      'lg': 'icon-lg',
    };
    actualSize = sizeMap[size || 'default'] || 'icon';
  }
  
  return (
    <Button 
      variant={variant as "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"} 
      size={actualSize as "default" | "sm" | "lg" | "xs" | "icon" | "icon-sm" | "icon-lg" | "icon-xs"} 
      disabled={isDisabled}
      aria-label={isIconOnly ? "Icon button" : undefined}
    >
      {isIconOnly ? (
        <MaterialSymbol name="add" size={20} weight={300} />
      ) : (
        'Click me'
      )}
    </Button>
  );
}

/**
 * Preview renderer for Button component examples
 */
export function ButtonPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Default Button':
      return <Button>Save</Button>;
    
    case 'Variants':
      return (
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Save</Button>
          <Button variant="outline">Cancel</Button>
          <Button variant="secondary">Edit</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="ghost">Settings</Button>
          <Button variant="link">Learn more</Button>
        </div>
      );
    
    case 'Sizes':
      return (
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs">Add</Button>
          <Button size="sm">Save</Button>
          <Button size="default">Submit</Button>
          <Button size="lg">Get Started</Button>
        </div>
      );

    case 'Icon Buttons':
      return (
        <div className="flex items-center gap-2">
          <Button size="icon-xs" aria-label="Extra small">
            <MaterialSymbol name="add" size={12} weight={300} />
          </Button>
          <Button size="icon-sm" aria-label="Small">
            <MaterialSymbol name="add" size={16} weight={300} />
          </Button>
          <Button size="icon" aria-label="Default">
            <MaterialSymbol name="add" size={20} weight={300} />
          </Button>
          <Button size="icon-lg" aria-label="Large">
            <MaterialSymbol name="add" size={24} weight={300} />
          </Button>
        </div>
      );

    case 'With Icons':
      return (
        <div className="flex gap-2">
          <Button>
            <MaterialSymbol name="download" size={20} weight={300} />
            Download
          </Button>
          <Button variant="outline">
            <MaterialSymbol name="settings" size={20} weight={300} />
            Settings
          </Button>
        </div>
      );

    case 'States':
      return (
        <div className="flex gap-2">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
        </div>
      );
    
    default:
      return null;
  }
}

