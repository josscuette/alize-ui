---
title: Pie Charts
description: Pie and donut charts for showing proportional data and part-to-whole relationships. Best for displaying composition and distribution.
category: dataviz
component: pie-charts
importPath: '@/components/ui/highchart'
props:
  - name: options
    type: "Highcharts.Options"
    required: true
    description: Highcharts configuration options object
examples:
  - title: Pie Chart
    description: Classic pie chart for showing proportions.
    code: |
      import { Highchart } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const data = [
        { name: "Office Space", y: 35 },
        { name: "Retail", y: 25 },
        { name: "Industrial", y: 20 },
        { name: "Residential", y: 12 },
        { name: "Other", y: 8 },
      ];

      const options: Highcharts.Options = {
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
        series: [{ name: "Share", data: data, type: "pie" }],
      };

      <Highchart options={options} />
  - title: Donut Chart
    description: Pie with hollow center for additional context or KPIs.
    code: |
      import { Highchart } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const data = [
        { name: "Office Space", y: 35 },
        { name: "Retail", y: 25 },
        { name: "Industrial", y: 20 },
        { name: "Residential", y: 12 },
        { name: "Other", y: 8 },
      ];

      const options: Highcharts.Options = {
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
        series: [{ name: "Market Share", data: data, type: "pie" }],
      };

      <Highchart options={options} />
  - title: Semi-Circle Donut
    description: Half donut, perfect for progress or completion rates.
    code: |
      import { Highchart } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const data = [
        { name: "Completed", y: 75, color: "#0066CC" },
        { name: "Remaining", y: 25, color: "#E5E5E5" },
      ];

      const options: Highcharts.Options = {
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
        series: [{ name: "Progress", data: data, type: "pie" }],
      };

      <Highchart options={options} />
do:
  - Use pie charts for showing part-to-whole relationships
  - Use donut charts when you need space for additional information in the center
  - Limit the number of segments (5-7 maximum for readability)
  - Use semi-circle donuts for progress indicators and KPIs
  - Ensure segments are large enough to be easily distinguished
  - Use consistent colors from the Alize dataviz palette
dont:
  - Don't use pie charts for comparing values across different categories
  - Don't use too many segments (more than 7-8 becomes hard to read)
  - Don't use pie charts for time series data
  - Don't use 3D effects or unnecessary decorations
  - Don't forget to include percentages or values in labels
accessibility: |
  - Ensure sufficient color contrast for all segments
  - Provide descriptive titles and include percentages in labels
  - Include data tables or alternative text for screen readers
  - Use accessible color palettes that work for colorblind users
  - Consider using patterns or textures in addition to colors for differentiation

