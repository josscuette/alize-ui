'use client';

import type { ReactNode } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

export function ToastPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Toast':
      return (
        <div className="flex gap-2">
          <Button onClick={() => toast("Event created successfully!")}>
            Show Toast
          </Button>
          <Button variant="outline" onClick={() => toast.success("Success!")}>
            Success
          </Button>
          <Button variant="destructive" onClick={() => toast.error("Error!")}>
            Error
          </Button>
        </div>
      );
    default:
      return null;
  }
}

