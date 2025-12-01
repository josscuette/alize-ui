'use client';

import type { ReactNode } from 'react';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

export function DrawerPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Drawer':
      return (
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit Profile</DrawerTitle>
              <DrawerDescription>Make changes to your profile here.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">Drawer content goes here.</p>
            </div>
          </DrawerContent>
        </Drawer>
      );
    default:
      return null;
  }
}

