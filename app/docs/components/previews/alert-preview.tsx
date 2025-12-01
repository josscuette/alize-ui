'use client';

import type { ReactNode } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MaterialSymbol } from '@/components/material-symbol';

/**
 * Interactive preview renderer for Alert playground
 */
export function AlertInteractivePreview(props: Record<string, string>): ReactNode {
  const { variant } = props;
  const isDestructive = variant === 'destructive';
  
  return (
    <Alert variant={variant as "default" | "destructive"} className="max-w-md">
      <MaterialSymbol name={isDestructive ? "error" : "info"} size={16} weight={300} />
      <AlertTitle>{isDestructive ? 'Error' : 'Heads up!'}</AlertTitle>
      <AlertDescription>
        {isDestructive 
          ? 'Your session has expired. Please log in again.'
          : 'You can add components to your app using the CLI.'}
      </AlertDescription>
    </Alert>
  );
}

export function AlertPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Default Alert':
      return (
        <Alert className="max-w-md">
          <MaterialSymbol name="info" size={16} weight={300} />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
      );
    case 'Destructive Alert':
      return (
        <Alert variant="destructive" className="max-w-md">
          <MaterialSymbol name="error" size={16} weight={300} />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      );
    default:
      return null;
  }
}

