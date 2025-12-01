'use client';

import type { ReactNode } from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export function ResizablePreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Resizable':
      return (
        <ResizablePanelGroup direction="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Panel One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Panel Two</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      );
    default:
      return null;
  }
}

