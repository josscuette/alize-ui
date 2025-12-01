'use client';

import type { ReactNode } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export function CarouselPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Carousel':
      return (
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {[1, 2, 3, 4, 5].map((num) => (
              <CarouselItem key={num}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{num}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      );
    default:
      return null;
  }
}

