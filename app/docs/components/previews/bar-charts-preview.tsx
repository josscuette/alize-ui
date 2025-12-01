'use client';

import type { ReactNode } from 'react';
import { Highchart } from '@/components/ui/highchart';

/**
 * Preview renderer for Bar Charts component examples
 */
export function BarChartsPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case 'Column Chart':
      return (
        <Highchart 
          options={{
            chart: { type: "column", height: 350 },
            title: { text: "Quarterly Revenue by Year" },
            xAxis: { categories: ["Q1", "Q2", "Q3", "Q4"] },
            yAxis: { title: { text: "Revenue (millions)" } },
            series: [
              { name: "2020", data: [90, 110, 130, 150], type: "column" },
              { name: "2021", data: [100, 125, 155, 175], type: "column" },
              { name: "2022", data: [110, 140, 170, 190], type: "column" },
            ],
          }} 
        />
      );
    
    case 'Bar Chart (Horizontal)':
      return (
        <Highchart 
          options={{
            chart: { type: "bar", height: 400 },
            title: { text: "Top Markets Performance" },
            xAxis: { categories: ["New York", "London", "Tokyo", "Singapore", "Paris"] },
            yAxis: { title: { text: "Value ($M)" } },
            series: [
              { name: "Revenue", data: [450, 380, 320, 290, 250], type: "bar" },
              { name: "Profit", data: [120, 95, 85, 75, 60], type: "bar" },
            ],
          }} 
        />
      );
    
    case 'Stacked Column':
      return (
        <Highchart 
          options={{
            chart: { type: "column", height: 350 },
            title: { text: "Revenue by Product Line" },
            xAxis: { categories: ["Q1", "Q2", "Q3", "Q4"] },
            yAxis: { title: { text: "Revenue" } },
            plotOptions: { column: { stacking: "normal" } },
            series: [
              { name: "Office", data: [50, 60, 70, 80], type: "column" },
              { name: "Retail", data: [30, 40, 50, 60], type: "column" },
              { name: "Industrial", data: [20, 30, 40, 50], type: "column" },
            ],
          }} 
        />
      );
    
    case 'Percentage Stacked':
      return (
        <Highchart 
          options={{
            chart: { type: "column", height: 350 },
            title: { text: "Market Share by Region" },
            xAxis: { categories: ["Q1", "Q2", "Q3", "Q4"] },
            yAxis: { 
              title: { text: "Percentage" },
              max: 100,
            },
            plotOptions: { column: { stacking: "percent" } },
            series: [
              { name: "EMEA", data: [40, 35, 45, 38], type: "column" },
              { name: "Americas", data: [35, 40, 30, 42], type: "column" },
              { name: "APAC", data: [25, 25, 25, 20], type: "column" },
            ],
          }} 
        />
      );
    
    default:
      return null;
  }
}

