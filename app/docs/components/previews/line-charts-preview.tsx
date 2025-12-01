'use client';

import { useState, type ReactNode } from 'react';
import { Highchart } from '@/components/ui/highchart';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

// All available series data for the playground
const allSeriesData = [
  { name: "Product A", data: [31, 40, 28, 51, 42, 67], color: "var(--semantic-dataviz-ct-1)" },
  { name: "Product B", data: [28, 35, 32, 42, 38, 55], color: "var(--semantic-dataviz-ct-2)" },
  { name: "Product C", data: [22, 30, 25, 38, 35, 48], color: "var(--semantic-dataviz-ct-3)" },
  { name: "Product D", data: [18, 25, 30, 35, 28, 42], color: "var(--semantic-dataviz-ct-4)" },
  { name: "Product E", data: [35, 42, 38, 55, 48, 72], color: "var(--semantic-dataviz-ct-5)" },
  { name: "Product F", data: [15, 22, 18, 28, 25, 35], color: "var(--semantic-dataviz-ct-6)" },
  { name: "Product G", data: [42, 48, 45, 62, 55, 78], color: "var(--semantic-dataviz-ct-7)" },
];

/**
 * Preview renderer for Line Charts component examples
 */
export function LineChartsPreview({ title }: { title: string }): ReactNode {
  const monthlyData = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const [categoryCount, setCategoryCount] = useState(2);

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
    
    case 'Interactive Playground':
      return (
        <LineChartPlayground 
          categoryCount={categoryCount} 
          onCategoryCountChange={setCategoryCount} 
        />
      );
    
    default:
      return null;
  }
}

/**
 * Interactive playground for Line Charts
 */
function LineChartPlayground({ 
  categoryCount, 
  onCategoryCountChange 
}: { 
  categoryCount: number; 
  onCategoryCountChange: (value: number) => void;
}): ReactNode {
  const monthlyData = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const visibleSeries = allSeriesData.slice(0, categoryCount).map(s => ({
    ...s,
    type: "line" as const,
  }));

  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center gap-3">
        <Label htmlFor="category-select" className="text-sm font-medium whitespace-nowrap">
          Number of categories:
        </Label>
        <Select
          value={categoryCount.toString()}
          onValueChange={(value) => onCategoryCountChange(parseInt(value))}
        >
          <SelectTrigger id="category-select" className="w-24">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="6">6</SelectItem>
            <SelectItem value="7">7</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Highchart 
        options={{
          chart: { type: "line", height: 350 },
          title: { text: "Monthly Performance by Product" },
          xAxis: { categories: monthlyData },
          yAxis: { title: { text: "Value" } },
          series: visibleSeries,
          legend: { enabled: true },
        }} 
      />
    </div>
  );
}

