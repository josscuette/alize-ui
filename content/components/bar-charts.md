---
title: Bar Charts
description: Bar and column charts for comparing values across categories. Perfect for discrete data comparisons and rankings.
category: dataviz
component: bar-charts
importPath: '@/components/ui/highchart'
props:
  - name: options
    type: "Highcharts.Options"
    required: true
    description: Highcharts configuration options object
examples:
  - title: Column Chart
    description: Vertical bars for comparing values across categories.
    code: |
      import { Highchart } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const options: Highcharts.Options = {
        chart: { type: "column", height: 350 },
        title: { text: "Quarterly Revenue by Year" },
        xAxis: { categories: ["Q1", "Q2", "Q3", "Q4"] },
        yAxis: { title: { text: "Revenue (millions)" } },
        series: [
          { name: "2020", data: [90, 110, 130, 150], type: "column" },
          { name: "2021", data: [100, 125, 155, 175], type: "column" },
          { name: "2022", data: [110, 140, 170, 190], type: "column" },
        ],
      };

      <Highchart options={options} />
  - title: Bar Chart (Horizontal)
    description: Horizontal bars, ideal for rankings and long category names.
    code: |
      import { Highchart } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const options: Highcharts.Options = {
        chart: { type: "bar", height: 400 },
        title: { text: "Top Markets Performance" },
        xAxis: { categories: ["New York", "London", "Tokyo", "Singapore", "Paris"] },
        yAxis: { title: { text: "Value ($M)" } },
        series: [
          { name: "Revenue", data: [450, 380, 320, 290, 250], type: "bar" },
          { name: "Profit", data: [120, 95, 85, 75, 60], type: "bar" },
        ],
      };

      <Highchart options={options} />
  - title: Stacked Column
    description: Shows how parts contribute to the whole.
    code: |
      import { Highchart } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const options: Highcharts.Options = {
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
      };

      <Highchart options={options} />
  - title: Percentage Stacked
    description: Normalizes data to 100% for easy comparison.
    code: |
      import { Highchart } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const options: Highcharts.Options = {
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
      };

      <Highchart options={options} />
do:
  - Use column charts for time-based or sequential categories
  - Use bar charts (horizontal) for rankings and long category names
  - Use stacked columns to show composition and part-to-whole relationships
  - Use percentage stacked when comparing proportions across categories
  - Keep category labels readable and avoid overcrowding
  - Use consistent spacing between bars
dont:
  - Don't use bar charts for continuous time series (use line charts)
  - Don't stack too many series (limit to 5-6 for readability)
  - Don't use 3D effects or unnecessary decorations
  - Don't mix positive and negative values without clear indication
  - Don't forget to include a legend when multiple series are present
accessibility: |
  - Ensure sufficient color contrast for all data series
  - Provide descriptive titles and axis labels
  - Include data tables or alternative text for screen readers
  - Use accessible color palettes that work for colorblind users
  - Consider adding data labels for key values

