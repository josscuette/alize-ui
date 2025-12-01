'use client';

import type { ReactNode } from 'react';
import { RadioGroup, RadioGroupItem, RadioGroupCardItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

/**
 * Preview renderer for RadioGroup component examples
 */
export function RadioGroupPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Radio Group':
      return (
        <RadioGroup defaultValue="option-1">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-1" id="option-1-preview" />
            <Label htmlFor="option-1-preview">Option 1</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-2" id="option-2-preview" />
            <Label htmlFor="option-2-preview">Option 2</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-3" id="option-3-preview" />
            <Label htmlFor="option-3-preview">Option 3</Label>
          </div>
        </RadioGroup>
      );
    
    case 'Radio Cards':
      return (
        <RadioGroup defaultValue="basic" className="w-full max-w-sm">
          <RadioGroupCardItem
            value="basic"
            label="Basic plan"
            description="For individuals and small teams"
          />
          <RadioGroupCardItem
            value="pro"
            label="Pro plan"
            description="For growing businesses"
          />
          <RadioGroupCardItem
            value="enterprise"
            label="Enterprise"
            description="For large organizations"
          />
        </RadioGroup>
      );
    
    default:
      return null;
  }
}

