'use client';

import type { ReactNode } from 'react';
import { 
  Highchart, 
  useAlizeChartColors, 
  useSequentialPalette, 
  useDivergentPalette, 
  getContrastTextColor 
} from '@/components/ui/highchart';

/**
 * Preview renderer for Advanced Patterns component examples
 * Uses hooks for color palettes, so must be a component
 */
export function AdvancedPatternsPreview({ title }: { title: string }): ReactNode {
  const colors = useAlizeChartColors();
  const sequentialPalette = useSequentialPalette(1, 13);
  const divergentPalette = useDivergentPalette(13);

  // Heatmap (Sequential)
  if (title === 'Heatmap (Sequential)') {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const hours = ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM"];
    const heatmapData: [number, number, number][] = [];
    
    // Generate consistent data (not random on each render)
    const seedData = [
      [45, 23, 67, 89, 34, 56, 78],
      [12, 45, 78, 90, 23, 45, 67],
      [34, 56, 12, 67, 89, 23, 45],
      [67, 89, 34, 45, 56, 78, 12],
      [23, 67, 89, 12, 34, 56, 90],
      [56, 12, 45, 78, 90, 67, 34],
      [78, 34, 56, 23, 67, 12, 89],
    ];
    
    for (let day = 0; day < days.length; day++) {
      for (let hour = 0; hour < hours.length; hour++) {
        heatmapData.push([hour, day, seedData[day][hour]]);
      }
    }
    
    return (
      <Highchart 
        options={{
          chart: { type: "heatmap", height: 400 },
          title: { text: "Office Activity by Hour" },
          xAxis: { categories: hours, title: { text: "Hour" } },
          yAxis: { categories: days, title: { text: "Day" }, reversed: true },
          colorAxis: {
            min: 0,
            max: 100,
            stops: sequentialPalette.map((color, i) => [
              i / (sequentialPalette.length - 1), 
              color
            ]),
            labels: { style: { color: colors.textSubdued } },
          },
          series: [{
            name: "Activity",
            type: "heatmap",
            data: heatmapData,
            dataLabels: { enabled: false },
            borderWidth: 1,
            borderColor: colors.background,
          }],
        }} 
      />
    );
  }

  // Heatmap (Divergent)
  if (title === 'Heatmap (Divergent)') {
    const regions = ["North America", "South America", "Western Europe"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const heatmapData: [number, number, number][] = [];
    
    // Generate consistent data (not random on each render)
    const seedData = [
      [15, -23, 34, -12, 45, -8],
      [-28, 19, -45, 32, -15, 42],
      [38, -12, 25, -35, 18, -22],
    ];
    
    for (let region = 0; region < regions.length; region++) {
      for (let month = 0; month < months.length; month++) {
        heatmapData.push([month, region, seedData[region][month]]);
      }
    }
    
    return (
      <Highchart 
        options={{
          chart: { type: "heatmap", height: 400 },
          title: { text: "Performance vs Target" },
          xAxis: { categories: months, title: { text: "Month" } },
          yAxis: { categories: regions, title: { text: "Region" }, reversed: true },
          colorAxis: {
            min: -50,
            max: 50,
            stops: divergentPalette.map((color, i) => [
              i / (divergentPalette.length - 1), 
              color
            ]),
            labels: { style: { color: colors.textSubdued } },
          },
          series: [{
            name: "Deviation",
            type: "heatmap",
            data: heatmapData,
            dataLabels: { enabled: false },
            borderWidth: 1,
            borderColor: colors.background,
          }],
        }} 
      />
    );
  }

  // Bubble Chart
  if (title === 'Bubble Chart') {
    return (
      <Highchart 
        options={{
          chart: { type: "bubble", height: 400 },
          title: { text: "Market Analysis" },
          xAxis: { title: { text: "Risk Score" }, min: 0, max: 100 },
          yAxis: { title: { text: "Return (%)" }, min: -10, max: 30 },
          legend: { enabled: true },
          series: [
            {
              name: "Real Estate",
              type: "bubble",
              data: [
                { x: 35, y: 12, z: 500, name: "Office" },
                { x: 45, y: 8, z: 300, name: "Retail" },
                { x: 25, y: 15, z: 400, name: "Industrial" },
              ],
            },
            {
              name: "Equities",
              type: "bubble",
              data: [
                { x: 70, y: 22, z: 600, name: "Tech" },
                { x: 55, y: 14, z: 350, name: "Finance" },
                { x: 50, y: 18, z: 450, name: "Healthcare" },
              ],
            },
            {
              name: "Bonds",
              type: "bubble",
              data: [
                { x: 15, y: 4, z: 700, name: "Government" },
                { x: 30, y: 6, z: 250, name: "Corporate" },
              ],
            },
          ],
          tooltip: {
            format: "<b>{point.name}</b><br>Risk: {point.x}<br>Return: {point.y}%<br>Size: ${point.z}M",
          },
        }} 
      />
    );
  }

  // Treemap
  if (title === 'Treemap') {
    const rawData = [
      { name: "Office", value: 450, colorValue: 450 },
      { name: "Retail", value: 320, colorValue: 320 },
      { name: "Industrial", value: 280, colorValue: 280 },
      { name: "Residential", value: 180, colorValue: 180 },
      { name: "Logistics", value: 120, colorValue: 120 },
    ];
    
    // Calculate contrast-aware text colors for each data point
    const data = rawData.map(item => {
      // Calculate color from colorValue using sequential palette
      const colorIndex = Math.round(
        (item.colorValue / 500) * (sequentialPalette.length - 1)
      );
      const bgColor = sequentialPalette[colorIndex] || sequentialPalette[0];
      
      return {
        ...item,
        dataLabels: {
          style: { color: getContrastTextColor(bgColor) },
        },
      };
    });
    
    return (
      <Highchart 
        options={{
          chart: { type: "treemap", height: 400 },
          title: { text: "Portfolio by Asset Type" },
          colorAxis: {
            min: 0,
            max: 500,
            stops: sequentialPalette.map((color, i) => [
              i / (sequentialPalette.length - 1), 
              color
            ]),
            labels: { style: { color: colors.textSubdued } },
          },
          series: [{
            type: "treemap",
            layoutAlgorithm: "squarified",
            data: data,
            dataLabels: {
              enabled: true,
              format: "{point.name}<br>{point.value}",
              style: {
                fontSize: "11px",
                fontWeight: "normal",
                textOutline: "none",
              },
            },
          }],
        }} 
      />
    );
  }

  return null;
}

