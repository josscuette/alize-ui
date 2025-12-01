'use client';

import type { ReactNode } from 'react';
import { Item } from '@/components/ui/item';
import { MaterialSymbol } from '@/components/material-symbol';

/**
 * Preview renderer for Item component examples
 */
export function ItemPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Item':
      return <Item>List item</Item>;
    
    case 'Selected Item':
      return <Item selected>Selected item</Item>;
    
    case 'With Icons':
      return (
        <Item>
          <MaterialSymbol name="folder" size={16} weight={300} />
          <span>Documents</span>
        </Item>
      );
    
    default:
      return null;
  }
}

