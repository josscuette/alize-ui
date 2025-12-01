'use client';

import type { ReactNode } from 'react';
import { Checkbox, CheckboxCard } from '@/components/ui/checkbox';

/**
 * Interactive preview renderer for Checkbox playground
 */
export function CheckboxInteractivePreview(props: Record<string, string>): ReactNode {
  const { checked, disabled } = props;
  const isChecked = checked === 'true';
  const isDisabled = disabled === 'true';
  
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox checked={isChecked} disabled={isDisabled} />
      <span className={`text-sm ${isDisabled ? 'opacity-50' : ''}`}>Checkbox Label</span>
    </label>
  );
}

/**
 * Preview renderer for Checkbox component examples
 */
export function CheckboxPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Checkbox':
      return (
        <label htmlFor="terms-preview" className="flex items-center gap-2 cursor-pointer">
          <Checkbox id="terms-preview" />
          <span className="text-sm">I agree to the terms</span>
        </label>
      );
    
    case 'States':
      return (
        <div className="space-y-3">
          <label htmlFor="unchecked-preview" className="flex items-center gap-2 cursor-pointer">
            <Checkbox id="unchecked-preview" />
            <span className="text-sm">Unchecked</span>
          </label>
          <label htmlFor="checked-preview" className="flex items-center gap-2 cursor-pointer">
            <Checkbox id="checked-preview" defaultChecked />
            <span className="text-sm">Checked</span>
          </label>
          <label htmlFor="disabled-preview" className="flex items-center gap-2 cursor-pointer">
            <Checkbox id="disabled-preview" disabled />
            <span className="text-sm opacity-50">Disabled</span>
          </label>
        </div>
      );
    
    case 'With Description':
      return (
        <label htmlFor="newsletter-preview" className="flex items-start gap-2 cursor-pointer">
          <Checkbox id="newsletter-preview" className="mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="text-sm">Email notifications</span>
            <span className="text-sm text-muted-foreground">
              Receive email updates about your account
            </span>
          </div>
        </label>
      );

    case 'Checkbox Cards':
      return (
        <div className="space-y-3 w-full max-w-sm">
          <CheckboxCard
            label="Basic plan"
            description="For individuals and small teams"
          />
          <CheckboxCard
            label="Pro plan"
            description="For growing businesses"
            defaultChecked
          />
          <CheckboxCard
            label="Enterprise"
            description="For large organizations"
          />
        </div>
      );
    
    default:
      return null;
  }
}

