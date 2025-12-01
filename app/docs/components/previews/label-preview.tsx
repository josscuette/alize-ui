'use client';

import type { ReactNode } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

/**
 * Preview renderer for Label component examples
 */
export function LabelPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Label':
      return (
        <div className="space-y-2 w-full max-w-sm">
          <Label htmlFor="email-label-preview">Email address</Label>
          <Input id="email-label-preview" type="email" placeholder="you@example.com" />
        </div>
      );
    
    case 'With Checkable Controls':
      return (
        <div className="flex items-start gap-2">
          <Checkbox id="terms-label-preview" />
          <Label htmlFor="terms-label-preview" className="leading-snug">
            I agree to the terms and conditions
            <span className="block text-sm text-muted-foreground font-normal">
              You must agree to continue
            </span>
          </Label>
        </div>
      );
    
    case 'Required Fields':
      return (
        <div className="space-y-2 w-full max-w-sm">
          <Label htmlFor="required-label-preview">
            Email address
            <span className="text-[var(--semantic-text-rag-danger-default)] ml-1">*</span>
          </Label>
          <Input id="required-label-preview" type="email" placeholder="you@example.com" />
        </div>
      );
    
    default:
      return null;
  }
}

