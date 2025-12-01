'use client';

import type { ReactNode } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MaterialSymbol } from '@/components/material-symbol';

/**
 * Interactive preview renderer for Input playground
 */
export function InputInteractivePreview(props: Record<string, string>): ReactNode {
  const { type, disabled, invalid } = props;
  const isDisabled = disabled === 'true';
  const isInvalid = invalid === 'true';
  
  const placeholders: Record<string, string> = {
    text: 'Enter text...',
    email: 'you@example.com',
    password: '••••••••',
    number: '0',
    search: 'Search...',
  };
  
  return (
    <div className="space-y-2 w-full max-w-sm">
      <Label htmlFor="interactive-input">Input Field</Label>
      <Input
        id="interactive-input"
        type={type}
        placeholder={placeholders[type] || 'Enter text...'}
        disabled={isDisabled}
        aria-invalid={isInvalid}
        className={isInvalid ? 'border-[var(--semantic-stroke-rag-danger-default)]' : ''}
      />
      {isInvalid && (
        <p className="text-xs text-[var(--semantic-text-rag-danger-default)]">
          Please enter a valid value
        </p>
      )}
    </div>
  );
}

/**
 * Preview renderer for Input component examples
 */
export function InputPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Input':
      return (
        <div className="space-y-2 w-full max-w-sm">
          <Label htmlFor="name-preview">Full name</Label>
          <Input id="name-preview" placeholder="John Doe" />
        </div>
      );
    
    case 'Input Types':
      return (
        <div className="space-y-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="email-preview">Email</Label>
            <Input id="email-preview" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password-preview">Password</Label>
            <Input id="password-preview" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="number-preview">Number</Label>
            <Input id="number-preview" type="number" placeholder="0" />
          </div>
        </div>
      );
    
    case 'With Icons':
      return (
        <div className="space-y-2 w-full max-w-sm">
          <Label htmlFor="search-preview">Search</Label>
          <div className="relative">
            <MaterialSymbol
              name="search"
              size={16}
              weight={300}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--semantic-icon-subdued)]"
            />
            <Input id="search-preview" placeholder="Search..." className="pl-9" />
          </div>
        </div>
      );
    
    case 'Validation States':
      return (
        <div className="space-y-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="error-preview">Error state</Label>
            <Input 
              id="error-preview" 
              defaultValue="invalid@email" 
              aria-invalid={true}
              className="border-[var(--semantic-stroke-rag-danger-default)]"
            />
            <p className="text-xs text-[var(--semantic-text-rag-danger-default)]">
              Please enter a valid email address
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled-input-preview">Disabled</Label>
            <Input id="disabled-input-preview" disabled value="Cannot edit this field" />
          </div>
        </div>
      );
    
    default:
      return null;
  }
}

