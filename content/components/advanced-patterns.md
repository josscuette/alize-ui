---
title: Advanced Patterns
description: Advanced visualization patterns including heatmaps, treemaps, and more. Leverages sequential and divergent color palettes.
category: dataviz
component: advanced-patterns
importPath: '@/components/ui/highchart'
props:
  - name: options
    type: "Highcharts.Options"
    required: true
    description: Highcharts configuration options object
examples:
  - title: Heatmap (Sequential)
    description: Heatmaps use sequential palettes to show intensity. Ideal for correlation matrices, activity patterns, and density visualization.
    code: |
      import { Highchart, useSequentialPalette } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const sequentialPalette = useSequentialPalette(1, 13);
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      const hours = ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM"];

      const heatmapData: [number, number, number][] = [];
      for (let day = 0; day < days.length; day++) {
        for (let hour = 0; hour < hours.length; hour++) {
          heatmapData.push([hour, day, Math.round(Math.random() * 100)]);
        }
      }

      const options: Highcharts.Options = {
        chart: { type: "heatmap", height: 400 },
        title: { text: "Office Activity by Hour" },
        xAxis: { categories: hours, title: { text: "Hour" } },
        yAxis: { categories: days, title: { text: "Day" }, reversed: true },
        colorAxis: {
          min: 0,
          max: 100,
          stops: sequentialPalette.map((color, i) => [i / (sequentialPalette.length - 1), color]),
        },
        series: [{
          name: "Activity",
          type: "heatmap",
          data: heatmapData,
        }],
      };

      <Highchart options={options} />
  - title: Heatmap (Divergent)
    description: Divergent heatmaps show deviation from a center point. Ocean represents negative, orange represents positive.
    code: |
      import { Highchart, useDivergentPalette } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const divergentPalette = useDivergentPalette(13);
      const regions = ["North America", "South America", "Western Europe"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

      const heatmapData: [number, number, number][] = [];
      for (let region = 0; region < regions.length; region++) {
        for (let month = 0; month < months.length; month++) {
          heatmapData.push([month, region, Math.round((Math.random() - 0.5) * 100)]);
        }
      }

      const options: Highcharts.Options = {
        chart: { type: "heatmap", height: 400 },
        title: { text: "Performance vs Target" },
        xAxis: { categories: months, title: { text: "Month" } },
        yAxis: { categories: regions, title: { text: "Region" }, reversed: true },
        colorAxis: {
          min: -50,
          max: 50,
          stops: divergentPalette.map((color, i) => [i / (divergentPalette.length - 1), color]),
        },
        series: [{
          name: "Deviation",
          type: "heatmap",
          data: heatmapData,
        }],
      };

      <Highchart options={options} />
  - title: Treemap
    description: Treemaps display hierarchical data using nested rectangles. Size represents quantity, color can encode a secondary metric.
    code: |
      import { Highchart } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const data = [
        { name: "Office", value: 450 },
        { name: "Retail", value: 320 },
        { name: "Industrial", value: 280 },
        { name: "Residential", value: 180 },
        { name: "Logistics", value: 120 },
      ];

      const options: Highcharts.Options = {
        chart: { type: "treemap", height: 400 },
        title: { text: "Portfolio by Asset Type" },
        series: [{
          type: "treemap",
          data: data,
        }],
      };

      <Highchart options={options} />
do:
  - Use sequential heatmaps for showing intensity or density
  - Use divergent heatmaps for showing deviation from a baseline
  - Use treemaps for hierarchical data with size-based encoding
  - Leverage Alize's sequential and divergent color palettes
  - Provide clear legends and color scales
  - Use appropriate color scales for the data type
dont:
  - Don't use heatmaps for small datasets (bar charts are better)
  - Don't use divergent palettes for sequential data
  - Don't overload treemaps with too many levels of hierarchy
  - Don't forget to include color scale legends
  - Don't use advanced patterns when simpler charts would suffice
accessibility: |
  - Ensure sufficient color contrast in heatmaps
  - Provide descriptive titles and include values in tooltips
  - Include data tables or alternative text for screen readers
  - Use accessible color palettes that work for colorblind users
  - Consider providing alternative visualizations for complex patterns

