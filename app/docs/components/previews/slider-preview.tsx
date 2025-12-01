'use client';

import type { ReactNode } from 'react';
import { Slider } from '@/components/ui/slider';

export function SliderPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Basic Slider':
      return <Slider defaultValue={[50]} max={100} step={1} className="w-[300px]" />;
    case 'Range Slider':
      return <Slider defaultValue={[25, 75]} max={100} step={1} className="w-[300px]" />;
    default:
      return null;
  }
}

