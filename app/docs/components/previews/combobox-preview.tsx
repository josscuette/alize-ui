'use client';

import type { ReactNode } from 'react';
import { Combobox } from '@/components/ui/combobox';

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
];

export function ComboboxPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Combobox':
      return (
        <Combobox 
          options={frameworks}
          placeholder="Select framework..."
          emptyText="No framework found."
        />
      );
    default:
      return null;
  }
}

