'use client';

import { useState, type ReactNode } from 'react';
import { DatePicker } from '@/components/ui/date-picker';

export function DatePickerPreview({ title }: { title: string }): ReactNode {
  const [date, setDate] = useState<Date>();

  switch (title) {
    case 'Basic Date Picker':
      return <DatePicker date={date} onDateChange={setDate} />;
    default:
      return null;
  }
}

