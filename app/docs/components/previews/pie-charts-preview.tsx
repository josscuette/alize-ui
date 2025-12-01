'use client';

import type { ReactNode } from 'react';
import { Highchart } from '@/components/ui/highchart';

/**
 * Preview renderer for Pie Charts component examples
 */
export function PieChartsPreview({ title }: { title: string }): ReactNode {
  const pieData = [
    { name: "Office Space", y: 35 },
    { name: "Retail", y: 25 },
    { name: "Industrial", y: 20 },
    { name: "Residential", y: 12 },
    { name: "Other", y: 8 },
  ];

  switch (title) {
    case 'Pie Chart':
      return (
        <Highchart 
          options={{
            chart: { type: "pie", height: 350 },
            title: { text: "Portfolio Distribution" },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                  enabled: true,
                  format: "<b>{point.name}</b>: {point.percentage:.1f}%",
                },
              },
            },
            series: [{ name: "Share", data: pieData, type: "pie" }],
          }} 
        />
      );
    
    case 'Donut Chart':
      return (
        <Highchart 
          options={{
            chart: { type: "pie", height: 350 },
            title: { text: "Market Segments" },
            plotOptions: {
              pie: {
                innerSize: "60%",
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                  enabled: true,
                  format: "{point.name}: {point.y}%",
                  distance: 20,
                },
              },
            },
            series: [{ name: "Market Share", data: pieData, type: "pie" }],
          }} 
        />
      );
    
    case 'Semi-Circle Donut':
      return (
        <Highchart 
          options={{
            chart: { type: "pie", height: 300 },
            title: { text: "Project Completion" },
            plotOptions: {
              pie: {
                innerSize: "60%",
                startAngle: -90,
                endAngle: 90,
                center: ["50%", "75%"],
                dataLabels: {
                  enabled: false,
                },
              },
            },
            series: [{ 
              name: "Progress", 
              data: [
                { name: "Completed", y: 75, color: "#0066CC" },
                { name: "Remaining", y: 25, color: "#E5E5E5" },
              ], 
              type: "pie" 
            }],
          }} 
        />
      );
    
    default:
      return null;
  }
}

