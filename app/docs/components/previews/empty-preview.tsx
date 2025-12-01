'use client';

import type { ReactNode } from 'react';
import { Empty } from '@/components/ui/empty';
import { Button } from '@/components/ui/button';
import { MaterialSymbol } from '@/components/material-symbol';

/**
 * Preview renderer for Empty component examples
 */
export function EmptyPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Empty State':
      return (
        <Empty 
          title="No items found"
          description="Try adjusting your search or filters"
        />
      );
    
    case 'With Icon':
      return (
        <Empty 
          title="No results"
          description="We couldn't find any matches"
          icon={
            <MaterialSymbol 
              name="search_off" 
              size={48} 
              weight={300} 
              className="text-muted-foreground" 
            />
          }
        />
      );
    
    case 'With Action':
      return (
        <Empty 
          title="No projects yet"
          description="Get started by creating your first project"
          icon={
            <MaterialSymbol 
              name="folder" 
              size={48} 
              weight={300} 
              className="text-muted-foreground" 
            />
          }
        >
          <Button>Create Project</Button>
        </Empty>
      );
    
    default:
      return null;
  }
}

