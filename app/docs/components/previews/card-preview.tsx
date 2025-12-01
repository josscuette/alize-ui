'use client';

import type { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function CardPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Card':
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card content and other elements go here.</p>
          </CardContent>
        </Card>
      );
    case 'Card with Footer':
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create Project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Configure your project settings here.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      );
    default:
      return null;
  }
}

