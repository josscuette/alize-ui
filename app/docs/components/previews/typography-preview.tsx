'use client';

import type { ReactNode } from 'react';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyCode,
} from '@/components/ui/typography';

/**
 * Preview renderer for Typography component examples
 */
export function TypographyPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Headings':
      return (
        <div className="space-y-4 w-full">
          <TypographyH1>Heading 1</TypographyH1>
          <TypographyH2>Heading 2</TypographyH2>
          <TypographyH3>Heading 3</TypographyH3>
          <TypographyH4>Heading 4</TypographyH4>
        </div>
      );
    
    case 'Text Elements':
      return (
        <div className="space-y-4 w-full">
          <TypographyP>This is a paragraph of text.</TypographyP>
          <TypographyBlockquote>This is a blockquote.</TypographyBlockquote>
          <TypographyCode>const code = &quot;example&quot;;</TypographyCode>
        </div>
      );
    
    default:
      return null;
  }
}

