'use client';

import type { ReactNode } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function TextareaPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Textarea':
      return (
        <div className="space-y-2 w-full max-w-sm">
          <Label htmlFor="message-preview">Message</Label>
          <Textarea id="message-preview" placeholder="Type your message here..." />
        </div>
      );
    case 'With Validation':
      return (
        <div className="space-y-2 w-full max-w-sm">
          <Label htmlFor="bio-preview">Bio</Label>
          <Textarea 
            id="bio-preview" 
            aria-invalid={true}
            defaultValue="Too short"
            className="border-destructive"
          />
          <p className="text-xs text-destructive">Bio must be at least 50 characters</p>
        </div>
      );
    default:
      return null;
  }
}

