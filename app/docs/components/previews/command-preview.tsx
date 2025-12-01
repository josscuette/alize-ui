'use client';

import type { ReactNode } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

export function CommandPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Command':
      return (
        <Command className="rounded-lg border shadow-md max-w-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      );
    default:
      return null;
  }
}

