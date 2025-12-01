'use client';

import { useState, type ReactNode } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { MaterialSymbol } from '@/components/material-symbol';

export function CollapsiblePreview({ title }: { title: string }): ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  switch (title) {
    case 'Basic Collapsible':
      return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[300px]">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <MaterialSymbol name={isOpen ? "expand_less" : "expand_more"} size={16} weight={300} />
              Toggle Content
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 p-4 border rounded-md">
            <p className="text-sm text-muted-foreground">
              This content can be expanded or collapsed.
            </p>
          </CollapsibleContent>
        </Collapsible>
      );
    default:
      return null;
  }
}

