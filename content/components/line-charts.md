---
title: Line Charts
description: Line, spline, and area charts for visualizing trends and changes over time. Ideal for time series data and continuous data comparisons.
category: dataviz
component: line-charts
importPath: '@/components/ui/highchart'
props:
  - name: options
    type: "Highcharts.Options"
    required: true
    description: Highcharts configuration options object
  - name: immutable
    type: "boolean"
    default: "false"
    required: false
    description: Whether the chart should be treated as immutable
  - name: allowChartUpdate
    type: "boolean"
    default: "true"
    required: false
    description: Whether to allow chart updates
  - name: callback
    type: "(chart: Highcharts.Chart) => void"
    required: false
    description: Callback function called when chart is created
examples:
  - title: Basic Line Chart
    description: Standard line chart for tracking values over time.
    code: |
      import { Highchart } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const options: Highcharts.Options = {
        chart: { type: "line", height: 350 },
        title: { text: "Monthly Performance by Product" },
        xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
        yAxis: { title: { text: "Value" } },
        series: [
          { name: "Product A", data: [31, 40, 28, 51, 42, 67], type: "line" },
          { name: "Product B", data: [28, 35, 32, 42, 38, 55], type: "line" },
        ],
      };

      <Highchart options={options} />
  - title: Spline Chart
    description: Uses curved lines for a smoother, more organic visualization.
    code: |
      import { Highchart } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const options: Highcharts.Options = {
        chart: { type: "spline", height: 350 },
        title: { text: "Regional Trend Analysis" },
        xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
        yAxis: { title: { text: "Performance Index" } },
        plotOptions: {
          spline: { marker: { enabled: true, radius: 4 } },
        },
        series: [
          { name: "North", data: [31, 40, 28, 51, 42, 67], type: "spline" },
          { name: "South", data: [26, 34, 24, 43, 36, 57], type: "spline" },
        ],
      };

      <Highchart options={options} />
  - title: Area Chart
    description: Emphasizes the magnitude of change with filled areas.
    code: |
      import { Highchart } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const options: Highcharts.Options = {
        chart: { type: "area", height: 350 },
        title: { text: "Revenue by Channel" },
        xAxis: { categories: ["Q1", "Q2", "Q3", "Q4"] },
        yAxis: { title: { text: "Amount (thousands)" } },
        plotOptions: { area: { fillOpacity: 0.3 } },
        series: [
          { name: "Direct Sales", data: [150, 180, 210, 250], type: "area" },
          { name: "Online", data: [90, 108, 126, 150], type: "area" },
        ],
      };

      <Highchart options={options} />
  - title: Stacked Area
    description: Shows contribution of each series to the total.
    code: |
      import { Highchart } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const options: Highcharts.Options = {
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
      };

      <Highchart options={options} />
  - title: Area Spline
    description: Combines smooth curves with filled areas.
    code: |
      import { Highchart } from '@/components/ui/highchart';
      import * as Highcharts from 'highcharts';

      const options: Highcharts.Options = {
        chart: { type: "areaspline", height: 350 },
        title: { text: "Sales by Category" },
        xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
        yAxis: { title: { text: "Units" } },
        plotOptions: { areaspline: { fillOpacity: 0.2 } },
        series: [
          { name: "Electronics", data: [31, 40, 28, 51, 42, 67], type: "areaspline" },
          { name: "Furniture", data: [25, 35, 32, 45, 38, 55], type: "areaspline" },
        ],
      };

      <Highchart options={options} />
do:
  - Use line charts for time series data and trends over time
  - Use spline charts when you want smoother, more organic curves
  - Use area charts to emphasize magnitude and cumulative values
  - Use stacked area charts to show composition and part-to-whole relationships
  - Limit the number of series to maintain readability (5-6 maximum)
  - Provide clear axis labels and titles
  - Use consistent colors from the Alize dataviz palette
dont:
  - Don't use line charts for categorical data (use bar charts instead)
  - Don't overload charts with too many series (more than 6-7)
  - Don't use area charts when precise values are more important than trends
  - Don't mix different chart types in the same series
  - Don't forget to include legends when multiple series are present
accessibility: |
  - Ensure sufficient color contrast for all data series
  - Provide descriptive titles and axis labels
  - Include data tables or alternative text for screen readers
  - Use accessible color palettes that work for colorblind users
  - Consider adding data labels for key data points

