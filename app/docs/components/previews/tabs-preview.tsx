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
    case 'Underline Tabs':
      return (
        <Tabs defaultValue="overview" className="w-[400px]">
          <TabsList variant="underline">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="p-4">
            <p className="text-sm text-muted-foreground">View your project overview and key metrics.</p>
          </TabsContent>
          <TabsContent value="analytics" className="p-4">
            <p className="text-sm text-muted-foreground">Detailed analytics and performance data.</p>
          </TabsContent>
          <TabsContent value="reports" className="p-4">
            <p className="text-sm text-muted-foreground">Generate and download reports.</p>
          </TabsContent>
        </Tabs>
      );
    case 'Underline Tabs in Container':
      return (
        <div className="w-[500px]">
          {/* Simulated header container */}
          <header className="flex items-center gap-6 h-14 px-4 border-b border-[var(--semantic-stroke-subdued)] bg-[var(--semantic-surface-default)]">
            <span className="font-semibold text-sm">Project Name</span>
            <Tabs defaultValue="overview" className="h-full">
              <TabsList variant="underline" fill>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
            </Tabs>
          </header>
          <div className="p-4 text-sm text-muted-foreground">
            Content area below the header...
          </div>
        </div>
      );
    default:
      return null;
  }
}

