'use client';

import { useState, type ReactNode } from 'react';
import { Calendar } from '@/components/ui/calendar';

export function CalendarPreview({ title }: { title: string }): ReactNode {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
  };

  switch (title) {
    case 'Basic Calendar':
      return (
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          className="rounded-md border"
        />
      );
    default:
      return null;
  }
}

