'use client';

import type { ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TabsPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Tabs':
      return (
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-4">
            <p className="text-sm text-muted-foreground">Make changes to your account here.</p>
          </TabsContent>
          <TabsContent value="password" className="p-4">
            <p className="text-sm text-muted-foreground">Change your password here.</p>
          </TabsContent>
        </Tabs>
      );
    default:
      return null;
  }
}

