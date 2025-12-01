'use client';

import type { ReactNode } from 'react';
import { ButtonGroup } from '@/components/ui/button-group';
import { Button } from '@/components/ui/button';

export function ButtonGroupPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Button Group':
      return (
        <ButtonGroup>
          <Button variant="outline">Left</Button>
          <Button variant="outline">Center</Button>
          <Button variant="outline">Right</Button>
        </ButtonGroup>
      );
    default:
      return null;
  }
}

