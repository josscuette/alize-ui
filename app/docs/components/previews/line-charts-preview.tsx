'use client';

import type { ReactNode } from 'react';
import { Highchart } from '@/components/ui/highchart';
import * as Highcharts from 'highcharts';

/**
 * Preview renderer for Line Charts component examples
 */
export function LineChartsPreview({ title }: { title: string }): ReactNode {
  const monthlyData = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  switch (title) {
    case 'Basic Line Chart':
      return (
        <Highchart 
          options={{
            chart: { type: "line", height: 350 },
            title: { text: "Monthly Performance by Product" },
            xAxis: { categories: monthlyData },
            yAxis: { title: { text: "Value" } },
            series: [
              { name: "Product A", data: [31, 40, 28, 51, 42, 67], type: "line" },
              { name: "Product B", data: [28, 35, 32, 42, 38, 55], type: "line" },
            ],
          }} 
        />
      );
    
    case 'Spline Chart':
      return (
        <Highchart 
          options={{
            chart: { type: "spline", height: 350 },
            title: { text: "Regional Trend Analysis" },
            xAxis: { categories: monthlyData },
            yAxis: { title: { text: "Performance Index" } },
            plotOptions: {
              spline: { marker: { enabled: true, radius: 4 } },
            },
            series: [
              { name: "North", data: [31, 40, 28, 51, 42, 67], type: "spline" },
              { name: "South", data: [26, 34, 24, 43, 36, 57], type: "spline" },
            ],
          }} 
        />
      );
    
    case 'Area Chart':
      return (
        <Highchart 
          options={{
            chart: { type: "area", height: 350 },
            title: { text: "Revenue by Channel" },
            xAxis: { categories: ["Q1", "Q2", "Q3", "Q4"] },
            yAxis: { title: { text: "Amount (thousands)" } },
            plotOptions: { area: { fillOpacity: 0.3 } },
            series: [
              { name: "Direct Sales", data: [150, 180, 210, 250], type: "area" },
              { name: "Online", data: [90, 108, 126, 150], type: "area" },
            ],
          }} 
        />
      );
    
    case 'Stacked Area':
      return (
        <Highchart 
          options={{
            chart: { type: "area", height: 350 },
            title: { text: "Revenue by Region" },
            xAxis: { categories: ["Q1", "Q2", "Q3", "Q4"] },
            yAxis: { title: { text: "Revenue" } },
            plotOptions: { area: { stacking: "normal", fillOpacity: 0.6 } },
            series: [
              { name: "EMEA", data: [50, 60, 70, 80], type: "area" },
              { name: "Americas", data: [80, 90, 100, 120], type: "area" },
              { name: "APAC", data: [30, 40, 50, 60], type: "area" },
            ],
          }} 
        />
      );
    
    case 'Area Spline':
      return (
        <Highchart 
          options={{
            chart: { type: "areaspline", height: 350 },
            title: { text: "Sales by Category" },
            xAxis: { categories: monthlyData },
            yAxis: { title: { text: "Units" } },
            plotOptions: { areaspline: { fillOpacity: 0.2 } },
            series: [
              { name: "Electronics", data: [31, 40, 28, 51, 42, 67], type: "areaspline" },
              { name: "Furniture", data: [25, 35, 32, 45, 38, 55], type: "areaspline" },
            ],
          }} 
        />
      );
    
    default:
      return null;
  }
}

