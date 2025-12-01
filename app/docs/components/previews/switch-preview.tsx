'use client';

import type { ReactNode } from 'react';
import { Switch, SwitchCard } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

/**
 * Interactive preview renderer for Switch playground
 */
export function SwitchInteractivePreview(props: Record<string, string>): ReactNode {
  const { checked, disabled } = props;
  const isChecked = checked === 'true';
  const isDisabled = disabled === 'true';
  
  return (
    <div className="flex items-center gap-2">
      <Switch checked={isChecked} disabled={isDisabled} />
      <Label className={isDisabled ? 'opacity-50' : ''}>Toggle Me</Label>
    </div>
  );
}

/**
 * Preview renderer for Switch component examples
 */
export function SwitchPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Switch':
      return (
        <div className="flex items-center gap-2">
          <Switch id="airplane-mode-preview" />
          <Label htmlFor="airplane-mode-preview">Airplane Mode</Label>
        </div>
      );
    
    case 'States':
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Switch id="off-preview" />
            <span className="text-sm">Off</span>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="on-preview" defaultChecked />
            <span className="text-sm">On</span>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="disabled-switch-preview" disabled />
            <span className="text-sm opacity-50">Disabled</span>
          </div>
        </div>
      );
    
    case 'Switch Cards':
      return (
        <div className="space-y-3 w-full max-w-sm">
          <SwitchCard
            label="Email notifications"
            description="Receive emails about your account activity"
          />
          <SwitchCard
            label="Push notifications"
            description="Receive push notifications on your device"
            defaultChecked
          />
          <SwitchCard
            label="Marketing emails"
            description="Receive emails about new features and offers"
          />
        </div>
      );
    
    default:
      return null;
  }
}

