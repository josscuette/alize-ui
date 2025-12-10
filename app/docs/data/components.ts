/**
 * Component documentation data
 * Previously managed by Velite, now in pure TypeScript
 */

import type { Component } from '../types';

// Re-export the type for convenience
export type { Component } from '../types';

export const components: Component[] = [
  {
    title: "Button",
    description: "A versatile button component with multiple variants and sizes. Supports all standard button variants and icon-only variants.",
    category: "atoms",
    component: "Button",
    importPath: "alize-ui",
    props: [
      {
        name: "variant",
        type: "default | destructive | outline | secondary | ghost | link",
        default: "default",
        required: false,
        description: "Visual style variant of the button"
      },
      {
        name: "size",
        type: "default | sm | lg | xs | icon | icon-sm | icon-lg | icon-xs",
        default: "default",
        required: false,
        description: "Size of the button"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        required: false,
        description: "Whether the button is disabled"
      },
      {
        name: "asChild",
        type: "boolean",
        default: "false",
        required: false,
        description: "Render as a different element using Radix UI Slot"
      }
    ],
    examples: [
      {
        title: "Default Button",
        description: "Basic button usage with a clear, actionable label",
        code: `import { Button } from 'alize-ui';

<Button>Save</Button>`
      },
      {
        title: "Variants",
        description: "All available button variants. Use primary (default) for main actions, outline/secondary for secondary actions, and destructive only for destructive actions.",
        code: `import { Button } from 'alize-ui';

<div className="flex gap-2">
  <Button variant="default">Save</Button>
  <Button variant="outline">Cancel</Button>
  <Button variant="secondary">Edit</Button>
  <Button variant="destructive">Delete</Button>
  <Button variant="ghost">Settings</Button>
  <Button variant="link">Learn more</Button>
</div>`
      },
      {
        title: "Sizes",
        description: "All available button sizes. Use large size only for marketing purposes or empty states.",
        code: `import { Button } from 'alize-ui';

<div className="flex items-center gap-2">
  <Button size="xs">Add</Button>
  <Button size="sm">Save</Button>
  <Button size="default">Submit</Button>
  <Button size="lg">Get Started</Button>
</div>`
      }
    ],
    bestPractices: [
      "Use `default` variant for primary actions",
      "Use `outline` or `secondary` for secondary actions",
      "Use `destructive` only for destructive actions",
      "Always include `aria-label` for icon-only buttons",
      "Ensure sufficient color contrast",
      "Provide clear focus states"
    ],
    do: [
      "Only use one primary button per section, as a main call-to-action",
      "Use clear and accurate labels",
      "Use established button colors appropriately (e.g., only use a danger button style for an action that's difficult or impossible to undo)",
      "Prioritize the most important actions",
      "Be consistent with positioning of buttons in the user interface",
      "Use strong, actionable verbs in labels such as \"Add\", \"Close\", \"Cancel\", or \"Save\"",
      "Always include `aria-label` for icon-only buttons",
      "Ensure sufficient color contrast",
      "Provide clear focus states"
    ],
    dont: [
      "Don't use a primary button in every row of a table",
      "Don't use buttons to link to other pages (use regular link or a plain style instead where necessary)",
      "Don't use buttons for navigation where the link appears within or following a sentence",
      "Don't use labels such as \"Read more\", \"Click here\" or \"More\"",
      "Don't use multiple primary buttons in the same section"
    ],
    accessibility: `- Icon-only buttons must have an \`aria-label\` for screen readers
- Buttons should have clear focus states
- Use semantic HTML (button element)
- Ensure sufficient color contrast ratios`,
    tokens: [
      {
        name: "surface-interaction-strong",
        category: "surface",
        cssVariable: "var(--semantic-surface-interaction-strong)",
        usage: "Default variant background color"
      },
      {
        name: "text-reversedpersistent",
        category: "text",
        cssVariable: "var(--semantic-text-reversedpersistent)",
        usage: "Default variant text color (white on dark)"
      },
      {
        name: "surface-rag-danger-subtle",
        category: "surface",
        cssVariable: "var(--semantic-surface-rag-danger-subtle)",
        usage: "Destructive variant background color"
      },
      {
        name: "text-rag-danger-default",
        category: "text",
        cssVariable: "var(--semantic-text-rag-danger-default)",
        usage: "Destructive variant text color"
      },
      {
        name: "stroke-default",
        category: "stroke",
        cssVariable: "var(--semantic-stroke-default)",
        usage: "Outline variant border color"
      },
      {
        name: "text-subdued",
        category: "text",
        cssVariable: "var(--semantic-text-subdued)",
        usage: "Secondary/Ghost/Outline variant text color"
      },
      {
        name: "surface-secondary",
        category: "surface",
        cssVariable: "var(--semantic-surface-secondary)",
        usage: "Secondary variant background color"
      },
      {
        name: "text-interaction-default",
        category: "text",
        cssVariable: "var(--semantic-text-interaction-default)",
        usage: "Link variant text color"
      },
      {
        name: "icon-interaction-bright",
        category: "icon",
        cssVariable: "var(--semantic-icon-interaction-bright)",
        usage: "Default variant icon color"
      },
      {
        name: "icon-subdued",
        category: "icon",
        cssVariable: "var(--semantic-icon-subdued)",
        usage: "Secondary/Ghost/Outline variant icon color"
      },
      {
        name: "radius-md",
        category: "radius",
        cssVariable: "var(--radius)",
        usage: "Button border radius"
      }
    ],
    interactiveProps: [
      {
        name: "variant",
        label: "Variant",
        controlType: "select",
        defaultValue: "default",
        options: [
          { value: "default", label: "Default" },
          { value: "destructive", label: "Destructive" },
          { value: "outline", label: "Outline" },
          { value: "secondary", label: "Secondary" },
          { value: "ghost", label: "Ghost" },
          { value: "link", label: "Link" },
        ]
      },
      {
        name: "size",
        label: "Size",
        controlType: "select",
        defaultValue: "default",
        options: [
          { value: "xs", label: "Extra Small" },
          { value: "sm", label: "Small" },
          { value: "default", label: "Default" },
          { value: "lg", label: "Large" },
        ]
      },
      {
        name: "iconOnly",
        label: "Icon Only",
        controlType: "boolean",
        defaultValue: "false",
      },
      {
        name: "disabled",
        label: "Disabled",
        controlType: "boolean",
        defaultValue: "false",
      }
    ],
    interactionStates: [
      {
        state: "hover",
        description: "Subtle opacity reduction on hover for default variant",
        cssClass: "hover:opacity-90",
        foundationToken: "states.hoverOpacity90"
      },
      {
        state: "hover",
        description: "Overlay background on hover for ghost/outline variants",
        cssClass: "hover:bg-semantic-surface-overlays-level1",
        foundationToken: "states.hoverOverlay1"
      },
      {
        state: "focus",
        description: "Ring around the button on focus for keyboard navigation",
        cssClass: "focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]",
        foundationToken: "states.focusRing"
      },
      {
        state: "pressed",
        description: "Subtle scale reduction when button is pressed",
        cssClass: "active:scale-[0.98]",
        foundationToken: "states.pressed"
      },
      {
        state: "disabled",
        description: "Reduced opacity and no pointer events when disabled",
        cssClass: "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
        foundationToken: "states.disabled"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Button component with variants, sizes, and icon support"
      }
    ]
  },
  {
    title: "Line Charts",
    description: "Line, spline, and area charts for visualizing trends and changes over time. Ideal for time series data and continuous data comparisons.",
    category: "dataviz",
    component: "line-charts",
    importPath: "alize-ui/charts",
    props: [
      {
        name: "options",
        type: "Highcharts.Options",
        required: true,
        description: "Highcharts configuration options object"
      },
      {
        name: "immutable",
        type: "boolean",
        default: "false",
        required: false,
        description: "Whether the chart should be treated as immutable"
      },
      {
        name: "allowChartUpdate",
        type: "boolean",
        default: "true",
        required: false,
        description: "Whether to allow chart updates"
      },
      {
        name: "callback",
        type: "(chart: Highcharts.Chart) => void",
        required: false,
        description: "Callback function called when chart is created"
      }
    ],
    examples: [
      {
        title: "Interactive Playground",
        description: "Experiment with different numbers of data series. Use the dropdown to select how many categories to display (2-7).",
        code: `import { useState } from 'react';
import { Highchart } from 'alize-ui/charts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'alize-ui';
import type * as Highcharts from 'highcharts';

const allSeries = [
  { name: "Product A", data: [31, 40, 28, 51, 42, 67], color: "var(--semantic-dataviz-ct-1)" },
  { name: "Product B", data: [28, 35, 32, 42, 38, 55], color: "var(--semantic-dataviz-ct-2)" },
  { name: "Product C", data: [22, 30, 25, 38, 35, 48], color: "var(--semantic-dataviz-ct-3)" },
  { name: "Product D", data: [18, 25, 30, 35, 28, 42], color: "var(--semantic-dataviz-ct-4)" },
  { name: "Product E", data: [35, 42, 38, 55, 48, 72], color: "var(--semantic-dataviz-ct-5)" },
  { name: "Product F", data: [15, 22, 18, 28, 25, 35], color: "var(--semantic-dataviz-ct-6)" },
  { name: "Product G", data: [42, 48, 45, 62, 55, 78], color: "var(--semantic-dataviz-ct-7)" },
];

const [count, setCount] = useState(2);
const visibleSeries = allSeries.slice(0, count);

<Select value={count.toString()} onValueChange={(v) => setCount(parseInt(v))}>
  <SelectTrigger className="w-24">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    {[2,3,4,5,6,7].map(n => <SelectItem key={n} value={n.toString()}>{n}</SelectItem>)}
  </SelectContent>
</Select>

<Highchart options={{
  chart: { type: "line", height: 350 },
  title: { text: "Monthly Performance by Product" },
  xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
  yAxis: { title: { text: "Value" } },
  series: visibleSeries.map(s => ({ ...s, type: "line" })),
}} />`
      },
      {
        title: "Basic Line Chart",
        description: "Standard line chart for tracking values over time.",
        code: `import { Highchart } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      },
      {
        title: "Spline Chart",
        description: "Uses curved lines for a smoother, more organic visualization.",
        code: `import { Highchart } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      },
      {
        title: "Area Chart",
        description: "Emphasizes the magnitude of change with filled areas.",
        code: `import { Highchart } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      },
      {
        title: "Stacked Area",
        description: "Shows contribution of each series to the total.",
        code: `import { Highchart } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      },
      {
        title: "Area Spline",
        description: "Combines smooth curves with filled areas.",
        code: `import { Highchart } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      }
    ],
    do: [
      "Use line charts for time series data and trends over time",
      "Use spline charts when you want smoother, more organic curves",
      "Use area charts to emphasize magnitude and cumulative values",
      "Use stacked area charts to show composition and part-to-whole relationships",
      "Limit the number of series to maintain readability (5-6 maximum)",
      "Provide clear axis labels and titles",
      "Use consistent colors from the Alize dataviz palette"
    ],
    dont: [
      "Don't use line charts for categorical data (use bar charts instead)",
      "Don't overload charts with too many series (more than 6-7)",
      "Don't use area charts when precise values are more important than trends",
      "Don't mix different chart types in the same series",
      "Don't forget to include legends when multiple series are present"
    ],
    accessibility: `- Ensure sufficient color contrast for all data series
- Provide descriptive titles and axis labels
- Include data tables or alternative text for screen readers
- Use accessible color palettes that work for colorblind users
- Consider adding data labels for key data points`,
    tokens: [
      {
        name: "dataviz-ct-1 to ct-10",
        category: "surface",
        cssVariable: "var(--semantic-dataviz-ct-1) ... var(--semantic-dataviz-ct-10)",
        usage: "Categorical palette for series colors"
      },
      {
        name: "dataviz-ct-nodata",
        category: "surface",
        cssVariable: "var(--semantic-dataviz-ct-nodata)",
        usage: "Color for missing or no data"
      },
      {
        name: "stroke-subdued",
        category: "stroke",
        cssVariable: "var(--semantic-stroke-subdued)",
        usage: "Grid lines color"
      },
      {
        name: "stroke-default",
        category: "stroke",
        cssVariable: "var(--semantic-stroke-default)",
        usage: "Axis lines color"
      },
      {
        name: "text-subdued",
        category: "text",
        cssVariable: "var(--semantic-text-subdued)",
        usage: "Axis labels and legend text"
      },
      {
        name: "text-default",
        category: "text",
        cssVariable: "var(--semantic-text-default)",
        usage: "Chart title and axis titles"
      },
      {
        name: "surface-default",
        category: "surface",
        cssVariable: "var(--semantic-surface-default)",
        usage: "Tooltip background"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-06-01",
        type: "added",
        description: "Initial release of Line Charts with line, spline, and area variants"
      }
    ]
  },
  {
    title: "Bar Charts",
    description: "Bar and column charts for comparing values across categories. Perfect for discrete data comparisons and rankings.",
    category: "dataviz",
    component: "bar-charts",
    importPath: "alize-ui/charts",
    props: [
      {
        name: "options",
        type: "Highcharts.Options",
        required: true,
        description: "Highcharts configuration options object"
      }
    ],
    examples: [
      {
        title: "Column Chart",
        description: "Vertical bars for comparing values across categories.",
        code: `import { Highchart } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      },
      {
        title: "Bar Chart (Horizontal)",
        description: "Horizontal bars, ideal for rankings and long category names.",
        code: `import { Highchart } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      },
      {
        title: "Stacked Column",
        description: "Shows how parts contribute to the whole.",
        code: `import { Highchart } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      },
      {
        title: "Percentage Stacked",
        description: "Normalizes data to 100% for easy comparison.",
        code: `import { Highchart } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      }
    ],
    do: [
      "Use column charts for time-based or sequential categories",
      "Use bar charts (horizontal) for rankings and long category names",
      "Use stacked columns to show composition and part-to-whole relationships",
      "Use percentage stacked when comparing proportions across categories",
      "Keep category labels readable and avoid overcrowding",
      "Use consistent spacing between bars"
    ],
    dont: [
      "Don't use bar charts for continuous time series (use line charts)",
      "Don't stack too many series (limit to 5-6 for readability)",
      "Don't use 3D effects or unnecessary decorations",
      "Don't mix positive and negative values without clear indication",
      "Don't forget to include a legend when multiple series are present"
    ],
    accessibility: `- Ensure sufficient color contrast for all data series
- Provide descriptive titles and axis labels
- Include data tables or alternative text for screen readers
- Use accessible color palettes that work for colorblind users
- Consider adding data labels for key values`,
    tokens: [
      {
        name: "dataviz-ct-1 to ct-10",
        category: "surface",
        cssVariable: "var(--semantic-dataviz-ct-1) ... var(--semantic-dataviz-ct-10)",
        usage: "Categorical palette for bar colors"
      },
      {
        name: "stroke-subdued",
        category: "stroke",
        cssVariable: "var(--semantic-stroke-subdued)",
        usage: "Grid lines color"
      },
      {
        name: "stroke-default",
        category: "stroke",
        cssVariable: "var(--semantic-stroke-default)",
        usage: "Axis lines color"
      },
      {
        name: "text-subdued",
        category: "text",
        cssVariable: "var(--semantic-text-subdued)",
        usage: "Axis labels and legend text"
      },
      {
        name: "text-default",
        category: "text",
        cssVariable: "var(--semantic-text-default)",
        usage: "Chart title and data labels"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-06-01",
        type: "added",
        description: "Initial release of Bar Charts with vertical and horizontal variants"
      }
    ]
  },
  {
    title: "Pie Charts",
    description: "Pie and donut charts for showing proportional data and part-to-whole relationships. Best for displaying composition and distribution.",
    category: "dataviz",
    component: "pie-charts",
    importPath: "alize-ui/charts",
    props: [
      {
        name: "options",
        type: "Highcharts.Options",
        required: true,
        description: "Highcharts configuration options object"
      }
    ],
    examples: [
      {
        title: "Pie Chart",
        description: "Classic pie chart for showing proportions.",
        code: `import { Highchart } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      },
      {
        title: "Donut Chart",
        description: "Pie with hollow center for additional context or KPIs.",
        code: `import { Highchart } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      },
      {
        title: "Semi-Circle Donut",
        description: "Half donut, perfect for progress or completion rates.",
        code: `import { Highchart } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      }
    ],
    do: [
      "Use pie charts for showing part-to-whole relationships",
      "Use donut charts when you need space for additional information in the center",
      "Limit the number of segments (5-7 maximum for readability)",
      "Use semi-circle donuts for progress indicators and KPIs",
      "Ensure segments are large enough to be easily distinguished",
      "Use consistent colors from the Alize dataviz palette"
    ],
    dont: [
      "Don't use pie charts for comparing values across different categories",
      "Don't use too many segments (more than 7-8 becomes hard to read)",
      "Don't use pie charts for time series data",
      "Don't use 3D effects or unnecessary decorations",
      "Don't forget to include percentages or values in labels"
    ],
    accessibility: `- Ensure sufficient color contrast for all segments
- Provide descriptive titles and include percentages in labels
- Include data tables or alternative text for screen readers
- Use accessible color palettes that work for colorblind users
- Consider using patterns or textures in addition to colors for differentiation`,
    tokens: [
      {
        name: "dataviz-ct-1 to ct-10",
        category: "surface",
        cssVariable: "var(--semantic-dataviz-ct-1) ... var(--semantic-dataviz-ct-10)",
        usage: "Categorical palette for pie/donut segments"
      },
      {
        name: "text-default",
        category: "text",
        cssVariable: "var(--semantic-text-default)",
        usage: "Chart title and data labels"
      },
      {
        name: "text-subdued",
        category: "text",
        cssVariable: "var(--semantic-text-subdued)",
        usage: "Legend text and percentages"
      },
      {
        name: "surface-default",
        category: "surface",
        cssVariable: "var(--semantic-surface-default)",
        usage: "Tooltip background"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Pie Charts"
      }
    ]
  },
  {
    title: "Advanced Patterns",
    description: "Advanced visualization patterns including heatmaps, treemaps, and more. Leverages sequential and divergent color palettes.",
    category: "dataviz",
    component: "advanced-patterns",
    importPath: "alize-ui/charts",
    props: [
      {
        name: "options",
        type: "Highcharts.Options",
        required: true,
        description: "Highcharts configuration options object"
      }
    ],
    examples: [
      {
        title: "Heatmap (Sequential)",
        description: "Heatmaps use sequential palettes to show intensity. Ideal for correlation matrices, activity patterns, and density visualization.",
        code: `import { Highchart, useSequentialPalette } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      },
      {
        title: "Heatmap (Divergent)",
        description: "Divergent heatmaps show deviation from a center point. Ocean represents negative, orange represents positive.",
        code: `import { Highchart, useDivergentPalette } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

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

<Highchart options={options} />`
      },
      {
        title: "Treemap",
        description: "Treemaps display hierarchical data using nested rectangles. Size represents quantity, color can encode a secondary metric.",
        code: `import { Highchart, useSequentialPalette, getContrastTextColor } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

const sequentialPalette = useSequentialPalette(1, 13);

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
  const colorIndex = Math.round((item.colorValue / 500) * (sequentialPalette.length - 1));
  const bgColor = sequentialPalette[colorIndex] || sequentialPalette[0];
  
  return {
    ...item,
    dataLabels: {
      style: { color: getContrastTextColor(bgColor) },
    },
  };
});

const options: Highcharts.Options = {
  chart: { type: "treemap", height: 400 },
  title: { text: "Portfolio by Asset Type" },
  colorAxis: {
    min: 0,
    max: 500,
    stops: sequentialPalette.map((color, i) => [i / (sequentialPalette.length - 1), color]),
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
};

<Highchart options={options} />`
      },
      {
        title: "Bubble Chart",
        description: "Bubble charts encode three dimensions: x position, y position, and bubble size. Useful for multi-variable analysis like risk vs return.",
        code: `import { Highchart } from 'alize-ui/charts';
import type * as Highcharts from 'highcharts';

const options: Highcharts.Options = {
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
    format: "<b>{point.name}</b><br>Risk: {point.x}<br>Return: {point.y}%<br>Size: \${point.z}M",
  },
};

<Highchart options={options} />`
      }
    ],
    do: [
      "Use sequential heatmaps for showing intensity or density",
      "Use divergent heatmaps for showing deviation from a baseline",
      "Use treemaps for hierarchical data with size-based encoding",
      "Use bubble charts for multi-variable analysis (3 dimensions)",
      "Leverage Alize's sequential and divergent color palettes",
      "Provide clear legends and color scales",
      "Use appropriate color scales for the data type"
    ],
    dont: [
      "Don't use heatmaps for small datasets (bar charts are better)",
      "Don't use divergent palettes for sequential data",
      "Don't overload treemaps with too many levels of hierarchy",
      "Don't forget to include color scale legends",
      "Don't use advanced patterns when simpler charts would suffice"
    ],
    accessibility: `- Ensure sufficient color contrast in heatmaps
- Provide descriptive titles and include values in tooltips
- Include data tables or alternative text for screen readers
- Use accessible color palettes that work for colorblind users
- Consider providing alternative visualizations for complex patterns`,
    tokens: [
      {
        name: "dataviz-ct-1 to ct-10",
        category: "surface",
        cssVariable: "var(--semantic-dataviz-ct-1) ... var(--semantic-dataviz-ct-10)",
        usage: "Base colors for sequential palettes"
      },
      {
        name: "dataviz-rag-danger",
        category: "surface",
        cssVariable: "var(--semantic-dataviz-rag-danger-[weak|medium|strong])",
        usage: "RAG negative/danger indicators"
      },
      {
        name: "dataviz-rag-warning",
        category: "surface",
        cssVariable: "var(--semantic-dataviz-rag-warning-[weak|medium|strong])",
        usage: "RAG warning/attention indicators"
      },
      {
        name: "dataviz-rag-success",
        category: "surface",
        cssVariable: "var(--semantic-dataviz-rag-success-[weak|medium|strong])",
        usage: "RAG positive/success indicators"
      },
      {
        name: "Sequential palette",
        category: "surface",
        cssVariable: "useSequentialPalette(colorIndex, steps)",
        usage: "Auto-generated sequential shades from categorical colors"
      },
      {
        name: "Divergent palette",
        category: "surface",
        cssVariable: "useDivergentPalette(steps)",
        usage: "Auto-generated divergent scale (ocean → neutral → orange)"
      },
      {
        name: "text-default",
        category: "text",
        cssVariable: "var(--semantic-text-default)",
        usage: "Chart titles and labels"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Advanced Patterns"
      }
    ]
  },
  {
    title: "Sparklines",
    description: "Compact inline charts designed for embedding in tables, cards, and dashboards. Includes line sparklines, bar sparklines with RAG thresholds, bullet charts, and trend indicators. Built on Highcharts with full Alize token integration.",
    category: "dataviz",
    component: "sparklines",
    importPath: "alize-ui",
    props: [
      {
        name: "data",
        type: "number[]",
        required: true,
        description: "Array of numeric data points"
      },
      {
        name: "type",
        type: "line | area",
        default: "line",
        required: false,
        description: "Chart type for Sparkline component"
      },
      {
        name: "color",
        type: "string",
        required: false,
        description: "Chart color (CSS variable or hex)"
      },
      {
        name: "thresholds",
        type: "{ warning?: number, danger?: number }",
        required: false,
        description: "RAG thresholds for Sparkbar (auto-colors bars)"
      },
      {
        name: "width",
        type: "number",
        default: "120",
        required: false,
        description: "Width in pixels"
      },
      {
        name: "height",
        type: "number",
        default: "32",
        required: false,
        description: "Height in pixels"
      }
    ],
    examples: [
      {
        title: "Sparkline",
        description: "Line or area sparklines for showing trends",
        code: "import { Sparkline } from 'alize-ui';\n\n// Simple line\n<Sparkline data={[10, 25, 15, 30, 20, 35]} />\n\n// Area with color\n<Sparkline\n  data={cpuHistory}\n  type=\"area\"\n  color=\"var(--semantic-dataviz-rag-successmedium)\"\n  width={100}\n  height={28}\n/>"
      },
      {
        title: "Sparkbar",
        description: "Bar sparklines with optional RAG thresholds",
        code: "import { Sparkbar } from 'alize-ui';\n\n// With RAG coloring\n<Sparkbar\n  data={[30, 45, 80, 65, 90, 50]}\n  thresholds={{ warning: 60, danger: 80 }}\n  width={100}\n  height={28}\n/>\n\n// Custom color\n<Sparkbar\n  data={memoryUsage}\n  color=\"var(--semantic-dataviz-ct-3)\"\n/>"
      },
      {
        title: "Spark Bullet",
        description: "Bullet chart showing value against target and ranges",
        code: "import { SparkBullet } from 'alize-ui';\n\n<SparkBullet\n  value={75}\n  target={80}\n  ranges={[30, 70, 100]}\n  width={120}\n  height={24}\n/>"
      },
      {
        title: "Spark Trend",
        description: "Value with trend indicator and optional sparkline",
        code: "import { SparkTrend } from 'alize-ui';\n\n<SparkTrend\n  value={1250}\n  change={12.5}\n  formatValue={(v) => `$${v.toLocaleString()}`}\n  history={[1000, 1100, 1150, 1200, 1250]}\n/>"
      },
      {
        title: "In Table",
        description: "Sparklines embedded in table cells for dashboards",
        code: "import { DataTable, Sparkline, Sparkbar, SparkTrend } from 'alize-ui';\n\nconst columns: ColumnDef<Server>[] = [\n  { accessorKey: 'name', header: 'Server' },\n  {\n    accessorKey: 'cpuHistory',\n    header: 'CPU',\n    cell: ({ row }) => (\n      <Sparkline\n        data={row.getValue('cpuHistory')}\n        type=\"area\"\n        width={100}\n        height={28}\n      />\n    ),\n  },\n  {\n    accessorKey: 'memoryHistory',\n    header: 'Memory',\n    cell: ({ row }) => (\n      <Sparkbar\n        data={row.getValue('memoryHistory')}\n        thresholds={{ warning: 70, danger: 85 }}\n        width={100}\n        height={28}\n      />\n    ),\n  },\n];\n\n<DataTable columns={columns} data={servers} />"
      }
    ],
    bestPractices: [
      "Keep sparklines small (80-150px wide, 24-40px tall)",
      "Use consistent sizing across a table or dashboard",
      "Use RAG thresholds to highlight important values",
      "Combine with SparkTrend for KPI displays"
    ],
    do: [
      "Use in table cells for compact data visualization",
      "Use area type for cumulative or volume data",
      "Use Sparkbar with thresholds for resource monitoring",
      "Use SparkTrend for KPIs with change indicators",
      "Match colors to the semantic meaning of the data"
    ],
    dont: [
      "Don't use for detailed analysis (use full charts)",
      "Don't add too many sparklines in one row",
      "Don't use without providing context (labels, headers)"
    ],
    accessibility: "- Each sparkline has an aria-label\n- Colors are from accessible Alize palettes\n- Trend indicators include text values",
    tokens: [
      { name: "dataviz-rag-successmedium", category: "surface", cssVariable: "var(--semantic-dataviz-rag-successmedium)", usage: "Good/positive values" },
      { name: "dataviz-rag-warningmedium", category: "surface", cssVariable: "var(--semantic-dataviz-rag-warningmedium)", usage: "Warning threshold" },
      { name: "dataviz-rag-dangermedium", category: "surface", cssVariable: "var(--semantic-dataviz-rag-dangermedium)", usage: "Danger threshold" },
      { name: "dataviz-ct-2", category: "surface", cssVariable: "var(--semantic-dataviz-ct-2)", usage: "Default chart color" },
      { name: "text-default", category: "text", cssVariable: "var(--semantic-text-default)", usage: "Value text" },
      { name: "text-subdued", category: "text", cssVariable: "var(--semantic-text-subdued)", usage: "Trend percentages" }
    ],
    changelog: [
      {
        version: "0.2.0",
        date: "2024-12-10",
        type: "added",
        description: "Initial release of Sparklines with line, bar, bullet, and trend variants"
      }
    ]
  },
  {
    title: "Input",
    description: "Form controls aligned on the typography and focus ring tokens. Supports all standard HTML input types with validation states.",
    category: "atoms",
    component: "Input",
    importPath: "alize-ui",
    props: [
      {
        name: "type",
        type: "string",
        default: "text",
        required: false,
        description: "HTML input type (text, email, password, number, tel, url, date, time, search, file, etc.)"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        required: false,
        description: "Whether the input is disabled"
      },
      {
        name: "readOnly",
        type: "boolean",
        default: "false",
        required: false,
        description: "Whether the input is read-only"
      },
      {
        name: "aria-invalid",
        type: "boolean",
        required: false,
        description: "Indicates invalid input state for accessibility"
      }
    ],
    examples: [
      {
        title: "Basic Input",
        description: "Standard text input with placeholder",
        code: `import { Input } from 'alize-ui';
import { Label } from 'alize-ui';

<div className="space-y-2">
  <Label htmlFor="name">Full name</Label>
  <Input id="name" placeholder="John Doe" />
</div>`
      },
      {
        title: "Input Types",
        description: "Different input types provide appropriate keyboards and validation",
        code: `import { Input } from 'alize-ui';
import { Label } from 'alize-ui';

<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="you@example.com" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="password">Password</Label>
    <Input id="password" type="password" placeholder="••••••••" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="number">Number</Label>
    <Input id="number" type="number" placeholder="0" />
  </div>
</div>`
      },
      {
        title: "With Icons",
        description: "Icons enhance input clarity and provide visual context",
        code: `import { Input } from 'alize-ui';
import { Label } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<div className="space-y-2">
  <Label htmlFor="search">Search</Label>
  <div className="relative">
    <MaterialSymbol
      name="search"
      size={16}
      weight={300}
      className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--semantic-icon-subdued)]"
    />
    <Input id="search" placeholder="Search..." className="pl-9" />
  </div>
</div>`
      },
      {
        title: "Validation States",
        description: "Input states communicate validation and provide feedback",
        code: `import { Input } from 'alize-ui';
import { Label } from 'alize-ui';

<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="error">Error state</Label>
    <Input 
      id="error" 
      defaultValue="invalid@email" 
      aria-invalid={true}
      className="border-[var(--semantic-stroke-rag-danger-default)]"
    />
    <p className="text-xs text-[var(--semantic-text-rag-danger-default)]">Please enter a valid email address</p>
  </div>
  <div className="space-y-2">
    <Label htmlFor="disabled">Disabled</Label>
    <Input id="disabled" disabled value="Cannot edit this field" />
  </div>
</div>`
      }
    ],
    do: [
      "Always pair inputs with labels for accessibility",
      "Use appropriate input types (email, password, tel, etc.) for better UX",
      "Provide clear placeholder text that describes the expected input",
      "Use validation states (aria-invalid) to communicate errors",
      "Include helper text for complex inputs",
      "Use icons to enhance clarity when appropriate"
    ],
    dont: [
      "Don't use placeholder text as the only label",
      "Don't use generic placeholders like 'Enter text'",
      "Don't forget to handle disabled and read-only states",
      "Don't use input types that don't match the data format",
      "Don't overload inputs with too many icons or decorations"
    ],
    accessibility: `- Always associate inputs with labels using htmlFor/id
- Use aria-invalid to indicate validation errors
- Provide aria-describedby for error messages
- Ensure sufficient color contrast for all states
- Support keyboard navigation and screen readers`,
    tokens: [
      { name: "stroke-default", category: "stroke", cssVariable: "var(--semantic-stroke-default)", usage: "Input border" },
      { name: "stroke-rag-danger-default", category: "stroke", cssVariable: "var(--semantic-stroke-rag-danger-default)", usage: "Error state border" },
      { name: "text-subdued", category: "text", cssVariable: "var(--semantic-text-subdued)", usage: "Placeholder text" },
      { name: "surface-interaction-strong", category: "surface", cssVariable: "var(--semantic-surface-interaction-strong)", usage: "Focus ring" },
      { name: "radius-md", category: "radius", cssVariable: "var(--radius)", usage: "Input border radius" }
    ],
    interactiveProps: [
      {
        name: "type",
        label: "Type",
        controlType: "select",
        defaultValue: "text",
        options: [
          { value: "text", label: "Text" },
          { value: "email", label: "Email" },
          { value: "password", label: "Password" },
          { value: "number", label: "Number" },
          { value: "search", label: "Search" },
        ]
      },
      {
        name: "disabled",
        label: "Disabled",
        controlType: "boolean",
        defaultValue: "false"
      },
      {
        name: "invalid",
        label: "Invalid",
        controlType: "boolean",
        defaultValue: "false"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Input component"
      }
    ]
  },
  {
    title: "Label",
    description: "Type ramp, spacing and accessibility baked in. Provides accessible form labels with consistent typography.",
    category: "atoms",
    component: "Label",
    importPath: "alize-ui",
    props: [
      {
        name: "htmlFor",
        type: "string",
        required: false,
        description: "Associates the label with a form control via id"
      }
    ],
    examples: [
      {
        title: "Basic Label",
        description: "Standard label for form inputs",
        code: `import { Label } from 'alize-ui';
import { Input } from 'alize-ui';

<div className="space-y-2">
  <Label htmlFor="email">Email address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`
      },
      {
        title: "With Checkable Controls",
        description: "Labels enhance accessibility for checkboxes and switches",
        code: `import { Label } from 'alize-ui';
import { Checkbox } from 'alize-ui';

<div className="flex items-start gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms" className="leading-snug">
    I agree to the terms and conditions
    <span className="block text-sm text-muted-foreground font-normal">You must agree to continue</span>
  </Label>
</div>`
      },
      {
        title: "Required Fields",
        description: "Indicate required fields with visual markers",
        code: `import { Label } from 'alize-ui';
import { Input } from 'alize-ui';

<div className="space-y-2">
  <Label htmlFor="required">
    Email address
    <span className="text-[var(--semantic-text-rag-danger-default)] ml-1">*</span>
  </Label>
  <Input id="required" type="email" placeholder="you@example.com" />
</div>`
      }
    ],
    do: [
      "Always use labels with form controls",
      "Associate labels with inputs using htmlFor/id",
      "Use descriptive label text that clearly indicates the field purpose",
      "Include required field indicators when appropriate",
      "Provide additional context with helper text when needed"
    ],
    dont: [
      "Don't use placeholder text as a replacement for labels",
      "Don't forget to associate labels with their controls",
      "Don't use vague or unclear label text",
      "Don't hide labels for the sake of design",
      "Don't use labels that are too long or verbose"
    ],
    accessibility: `- Always associate labels with form controls using htmlFor/id
- Labels are required for accessibility and screen readers
- Use clear, descriptive text for labels
- Support keyboard navigation through proper associations`,
    tokens: [
      { name: "text-default", category: "text", cssVariable: "var(--semantic-text-default)", usage: "Label text color" },
      { name: "text-rag-danger-default", category: "text", cssVariable: "var(--semantic-text-rag-danger-default)", usage: "Required indicator color" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Label component"
      }
    ]
  },
  {
    title: "Badge",
    description: "Compact status indicators with semantic RAG (Red/Amber/Green) color tokens and tonal color system for clear visual feedback and categorization.",
    category: "atoms",
    component: "Badge",
    importPath: "alize-ui",
    props: [
      {
        name: "variant",
        type: "default | secondary | outline | success | warning | destructive",
        default: "default",
        required: false,
        description: "Visual style variant of the badge. Use RAG variants (success, warning, destructive) for status indicators."
      },
      {
        name: "tonal",
        type: "default | sand | clay | lima | amber | forest | watercourse | atoll | royal | magenta | lavender | violet | lilac | science",
        default: "undefined",
        required: false,
        description: "Tonal color scheme for the badge. When set, this takes precedence over the variant prop. Use for categorization and non-status use cases."
      },
      {
        name: "badgeStyle",
        type: "default | outline | reversed",
        default: "default",
        required: false,
        description: "Style variant when using tonal colors. Default shows subdued background, outline shows transparent with border, reversed shows strong background with white text."
      },
      {
        name: "numeric",
        type: "boolean",
        default: "false",
        required: false,
        description: "Optimizes the badge for displaying numbers with reduced horizontal padding and tabular numbers."
      },
      {
        name: "asChild",
        type: "boolean",
        default: "false",
        required: false,
        description: "Render as a different element using Radix UI Slot"
      },
      {
        name: "iconLeft",
        type: "ReactNode",
        default: "undefined",
        required: false,
        description: "Optional icon to display on the left side of the badge"
      },
      {
        name: "iconRight",
        type: "ReactNode",
        default: "undefined",
        required: false,
        description: "Optional icon to display on the right side of the badge"
      },
      {
        name: "onDelete",
        type: "(event: MouseEvent) => void",
        default: "undefined",
        required: false,
        description: "Callback when the badge delete button is clicked. When provided, displays a close icon on the right and makes the badge deletable."
      }
    ],
    examples: [
      {
        title: "Variants",
        description: "Different badge styles for various contexts, including RAG status variants",
        code: `import { Badge } from 'alize-ui';

<div className="flex flex-wrap gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="destructive">Destructive</Badge>
</div>`
      },
      {
        title: "Tonal Colors",
        description: "Use tonal colors for categorization and non-status use cases. Each tonal supports default, outline, and reversed styles.",
        code: `import { Badge } from 'alize-ui';

<div className="flex flex-wrap gap-2">
  <Badge tonal="sand">Sand</Badge>
  <Badge tonal="clay">Clay</Badge>
  <Badge tonal="lima">Lima</Badge>
  <Badge tonal="amber">Amber</Badge>
  <Badge tonal="forest">Forest</Badge>
  <Badge tonal="watercourse">Watercourse</Badge>
  <Badge tonal="atoll">Atoll</Badge>
  <Badge tonal="royal">Royal</Badge>
  <Badge tonal="magenta">Magenta</Badge>
  <Badge tonal="lavender">Lavender</Badge>
  <Badge tonal="violet">Violet</Badge>
  <Badge tonal="lilac">Lilac</Badge>
  <Badge tonal="science">Science</Badge>
</div>`
      },
      {
        title: "Tonal Styles",
        description: "Each tonal color supports three styles: default (subdued), outline, and reversed (strong).",
        code: `import { Badge } from 'alize-ui';

<div className="space-y-2">
  <div className="flex gap-2">
    <Badge tonal="royal">Default</Badge>
    <Badge tonal="royal" badgeStyle="outline">Outline</Badge>
    <Badge tonal="royal" badgeStyle="reversed">Reversed</Badge>
  </div>
  <div className="flex gap-2">
    <Badge tonal="magenta">Default</Badge>
    <Badge tonal="magenta" badgeStyle="outline">Outline</Badge>
    <Badge tonal="magenta" badgeStyle="reversed">Reversed</Badge>
  </div>
</div>`
      },
      {
        title: "Numeric Badges",
        description: "Use the numeric prop for number-only badges with optimized padding.",
        code: `import { Badge } from 'alize-ui';

<div className="flex gap-2">
  <Badge tonal="science" numeric>42</Badge>
  <Badge tonal="magenta" badgeStyle="reversed" numeric>99+</Badge>
  <Badge tonal="forest" badgeStyle="outline" numeric>7</Badge>
  <Badge variant="destructive" numeric>3</Badge>
</div>`
      },
      {
        title: "RAG Status",
        description: "Red/Amber/Green status badges for clear visual feedback",
        code: `import { Badge } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<div className="flex gap-2">
  <Badge variant="success">
    <MaterialSymbol name="check_circle" size={12} weight={300} />
    Complete
  </Badge>
  <Badge variant="warning">
    <MaterialSymbol name="schedule" size={12} weight={300} />
    Pending
  </Badge>
  <Badge variant="destructive">
    <MaterialSymbol name="error" size={12} weight={300} />
    Failed
  </Badge>
</div>`
      },
      {
        title: "With Icons",
        description: "Use iconLeft and iconRight props for consistent icon placement",
        code: `import { Badge } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<div className="flex gap-2">
  <Badge 
    iconLeft={<MaterialSymbol name="star" size={12} weight={300} />}
  >
    Featured
  </Badge>
  <Badge 
    tonal="royal" 
    badgeStyle="reversed"
    iconLeft={<MaterialSymbol name="bolt" size={12} weight={300} />}
  >
    Pro
  </Badge>
  <Badge
    iconRight={<MaterialSymbol name="arrow_forward" size={12} weight={300} />}
  >
    Next
  </Badge>
</div>`
      },
      {
        title: "Deletable Badges",
        description: "Use onDelete prop to create removable tags. A close icon is automatically displayed.",
        code: `import { Badge } from 'alize-ui';

const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind']);

<div className="flex gap-2">
  {tags.map(tag => (
    <Badge 
      key={tag}
      onDelete={() => setTags(tags.filter(t => t !== tag))}
    >
      {tag}
    </Badge>
  ))}
</div>`
      },
      {
        title: "Deletable with Tonal",
        description: "Deletable badges work with all tonal colors and styles",
        code: `import { Badge } from 'alize-ui';

<div className="flex gap-2">
  <Badge tonal="royal" onDelete={() => {}}>Royal</Badge>
  <Badge tonal="magenta" badgeStyle="reversed" onDelete={() => {}}>Magenta</Badge>
  <Badge tonal="forest" badgeStyle="outline" onDelete={() => {}}>Forest</Badge>
</div>`
      }
    ],
    do: [
      "Use badges for status indicators and metadata",
      "Use RAG variants (success, warning, destructive) for status communication",
      "Use tonal colors for categorization (e.g., tags, labels)",
      "Use the numeric prop for count badges",
      "Use icons to enhance clarity when appropriate",
      "Keep badge text concise and clear",
      "Use consistent badge styles throughout the interface"
    ],
    dont: [
      "Don't use badges for primary actions (use buttons instead)",
      "Don't overload badges with too much text",
      "Don't use destructive variant for non-critical information",
      "Don't mix too many badge variants in the same context",
      "Don't use badges as a replacement for proper labels",
      "Don't use tonal colors for status indication (use RAG variants)"
    ],
    accessibility: `- Badges should have sufficient color contrast
- Use descriptive text that makes sense out of context
- Consider screen reader announcements for status changes
- Icons should be decorative or have appropriate alt text
- RAG colors alone should not convey meaning - always include text
- Tonal colors provide categorization but should not be the only differentiator`,
    tokens: [
      { name: "surface-secondary", category: "surface", cssVariable: "var(--semantic-surface-secondary)", usage: "Default badge background" },
      { name: "surface-rag-success-subdued", category: "surface", cssVariable: "var(--semantic-surface-rag-success-subdued)", usage: "Success badge background" },
      { name: "surface-rag-warning-subdued", category: "surface", cssVariable: "var(--semantic-surface-rag-warning-subdued)", usage: "Warning badge background" },
      { name: "surface-rag-danger-subdued", category: "surface", cssVariable: "var(--semantic-surface-rag-danger-subdued)", usage: "Destructive badge background" },
      { name: "tonal-*-subdued", category: "surface", cssVariable: "var(--semantic-tonal-*-subdued)", usage: "Tonal badge default background" },
      { name: "tonal-*-strong", category: "surface", cssVariable: "var(--semantic-tonal-*-strong)", usage: "Tonal badge reversed background and text" },
      { name: "tonal-*-default", category: "stroke", cssVariable: "var(--semantic-tonal-*-default)", usage: "Tonal badge outline border" },
      { name: "text-rag-success-default", category: "text", cssVariable: "var(--semantic-text-rag-success-default)", usage: "Success badge text" },
      { name: "text-rag-warning-default", category: "text", cssVariable: "var(--semantic-text-rag-warning-default)", usage: "Warning badge text" },
      { name: "text-rag-danger-default", category: "text", cssVariable: "var(--semantic-text-rag-danger-default)", usage: "Destructive badge text" },
      { name: "stroke-rag-*-default", category: "stroke", cssVariable: "var(--semantic-stroke-rag-*-default)", usage: "RAG badge border" },
      { name: "radius-reduced", category: "radius", cssVariable: "var(--shadcn-radius-reduced)", usage: "4px rounded corners" }
    ],
    interactiveProps: [
      {
        name: "variant",
        label: "Variant",
        controlType: "select",
        defaultValue: "default",
        options: [
          { value: "default", label: "Default" },
        ]
      },
      {
        name: "tonal",
        label: "Tonal Color",
        controlType: "select",
        defaultValue: "none",
        options: [
          { value: "none", label: "None" },
          { value: "sand", label: "Sand" },
          { value: "clay", label: "Clay" },
          { value: "lima", label: "Lima" },
          { value: "amber", label: "Amber" },
          { value: "forest", label: "Forest" },
          { value: "watercourse", label: "Watercourse" },
          { value: "atoll", label: "Atoll" },
          { value: "royal", label: "Royal" },
          { value: "magenta", label: "Magenta" },
          { value: "lavender", label: "Lavender" },
          { value: "violet", label: "Violet" },
          { value: "lilac", label: "Lilac" },
          { value: "science", label: "Science" },
        ]
      },
      {
        name: "badgeStyle",
        label: "Badge Style",
        controlType: "select",
        defaultValue: "default",
        options: [
          { value: "default", label: "Default" },
          { value: "outline", label: "Outline" },
          { value: "reversed", label: "Reversed" },
        ]
      },
      {
        name: "numeric",
        label: "Numeric",
        controlType: "boolean",
        defaultValue: "false"
      },
      {
        name: "deletable",
        label: "Deletable",
        controlType: "boolean",
        defaultValue: "false"
      }
    ],
    changelog: [
      {
        version: "0.4.0",
        date: "2025-12-08",
        type: "added",
        description: "Added iconLeft and iconRight props for consistent icon placement in badges."
      },
      {
        version: "0.4.0",
        date: "2025-12-08",
        type: "added",
        description: "Added onDelete prop for deletable badges. When provided, displays a close icon that triggers the callback on click."
      },
      {
        version: "0.3.0",
        date: "2025-12-05",
        type: "added",
        description: "Added tonal color system with 14 color options (sand, clay, lima, amber, forest, watercourse, atoll, royal, magenta, lavender, violet, lilac, science) for categorization use cases."
      },
      {
        version: "0.3.0",
        date: "2025-12-05",
        type: "added",
        description: "Added badgeStyle prop with three variants (default, outline, reversed) for tonal badges."
      },
      {
        version: "0.3.0",
        date: "2025-12-05",
        type: "added",
        description: "Added numeric prop for optimized number-only badges with reduced padding and tabular numbers."
      },
      {
        version: "0.2.0",
        date: "2025-11-15",
        type: "added",
        description: "Initial release with RAG status variants (success, warning, destructive) and basic variants (default, secondary, outline)."
      }
    ]
  },
  {
    title: "Avatar",
    description: "Sizing scale and fallback tokenized for product surfaces. Displays user images, monograms, or pictograms with consistent sizing.",
    category: "atoms",
    component: "Avatar",
    importPath: "alize-ui",
    props: [
      {
        name: "size",
        type: "xs | sm | md | lg",
        default: "md",
        required: false,
        description: "Size of the avatar"
      },
      {
        name: "shape",
        type: "square | rounded",
        default: "rounded",
        required: false,
        description: "Shape of the avatar (circular or square)"
      }
    ],
    examples: [
      {
        title: "Basic Avatar",
        description: "Avatar with image and fallback",
        code: `import { Avatar, AvatarImage, AvatarFallback } from 'alize-ui';

<Avatar size="md">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback size="md">JD</AvatarFallback>
</Avatar>`
      },
      {
        title: "Sizes",
        description: "Avatar sizes adapt to different contexts",
        code: `import { Avatar, AvatarFallback } from 'alize-ui';

<div className="flex items-center gap-4">
  <Avatar size="xs">
    <AvatarFallback size="xs">JD</AvatarFallback>
  </Avatar>
  <Avatar size="sm">
    <AvatarFallback size="sm">JD</AvatarFallback>
  </Avatar>
  <Avatar size="md">
    <AvatarFallback size="md">JD</AvatarFallback>
  </Avatar>
  <Avatar size="lg">
    <AvatarFallback size="lg">JD</AvatarFallback>
  </Avatar>
</div>`
      },
      {
        title: "Shapes",
        description: "Avatars can be rounded or square",
        code: `import { Avatar, AvatarFallback } from 'alize-ui';

<div className="flex items-center gap-4">
  <Avatar size="md" shape="rounded">
    <AvatarFallback size="md">JD</AvatarFallback>
  </Avatar>
  <Avatar size="md" shape="square">
    <AvatarFallback size="md">JD</AvatarFallback>
  </Avatar>
</div>`
      },
      {
        title: "With Pictogram",
        description: "Use icons as fallback for generic avatars",
        code: `import { Avatar, AvatarFallback } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<Avatar size="md">
  <AvatarFallback size="md">
    <MaterialSymbol name="person" size={20} weight={300} />
  </AvatarFallback>
</Avatar>`
      }
    ],
    do: [
      "Always provide a fallback (monogram or pictogram)",
      "Use appropriate sizes for different contexts",
      "Provide descriptive alt text for images",
      "Use monograms (initials) when user names are available",
      "Use pictograms (icons) for generic or system avatars"
    ],
    dont: [
      "Don't use avatars without fallbacks",
      "Don't use images without proper alt text",
      "Don't mix avatar sizes inconsistently",
      "Don't use avatars that are too small to be recognizable",
      "Don't forget to handle image loading failures gracefully"
    ],
    accessibility: `- Always provide alt text for AvatarImage
- Fallbacks should be descriptive (initials or meaningful icons)
- Ensure sufficient contrast for fallback text/icons
- Support screen readers with appropriate ARIA attributes`,
    tokens: [
      { name: "surface-overlays-level2", category: "stroke", cssVariable: "var(--semantic-surface-overlays-level2)", usage: "Avatar border" },
      { name: "surface-subdued", category: "surface", cssVariable: "var(--semantic-surface-subdued)", usage: "Fallback background" },
      { name: "text-subdued", category: "text", cssVariable: "var(--semantic-text-subdued)", usage: "Fallback text color" }
    ],
    interactiveProps: [
      {
        name: "size",
        label: "Size",
        controlType: "select",
        defaultValue: "md",
        options: [
          { value: "xs", label: "Extra Small" },
          { value: "sm", label: "Small" },
          { value: "md", label: "Medium" },
          { value: "lg", label: "Large" },
        ]
      },
      {
        name: "shape",
        label: "Shape",
        controlType: "select",
        defaultValue: "rounded",
        options: [
          { value: "rounded", label: "Rounded" },
          { value: "square", label: "Square" },
        ]
      },
      {
        name: "showImage",
        label: "Show Image",
        controlType: "boolean",
        defaultValue: "true"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Avatar component"
      }
    ]
  },
  {
    title: "Checkbox",
    description: "Allow users to select one or more options from a list. Checkboxes are ideal for multiple selections and provide clear visual feedback.",
    category: "atoms",
    component: "Checkbox",
    importPath: "alize-ui",
    props: [
      {
        name: "checked",
        type: "boolean",
        required: false,
        description: "Controlled checked state"
      },
      {
        name: "defaultChecked",
        type: "boolean",
        required: false,
        description: "Default checked state (uncontrolled)"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        required: false,
        description: "Whether the checkbox is disabled"
      },
      {
        name: "aria-invalid",
        type: "boolean",
        required: false,
        description: "Indicates invalid state for accessibility"
      }
    ],
    examples: [
      {
        title: "Basic Checkbox",
        description: "Simple checkbox with label",
        code: `import { Checkbox } from 'alize-ui';
import { Label } from 'alize-ui';

<label htmlFor="terms" className="flex items-center gap-2 cursor-pointer">
  <Checkbox id="terms" />
  <span className="text-sm">I agree to the terms</span>
</label>`
      },
      {
        title: "States",
        description: "Checkboxes support checked, unchecked, and disabled states",
        code: `import { Checkbox } from 'alize-ui';
import { Label } from 'alize-ui';

<div className="space-y-3">
  <label htmlFor="unchecked" className="flex items-center gap-2 cursor-pointer">
    <Checkbox id="unchecked" />
    <span className="text-sm">Unchecked</span>
  </label>
  <label htmlFor="checked" className="flex items-center gap-2 cursor-pointer">
    <Checkbox id="checked" defaultChecked />
    <span className="text-sm">Checked</span>
  </label>
  <label htmlFor="disabled" className="flex items-center gap-2 cursor-pointer">
    <Checkbox id="disabled" disabled />
    <span className="text-sm opacity-50">Disabled</span>
  </label>
</div>`
      },
      {
        title: "With Description",
        description: "Checkboxes can include descriptive text",
        code: `import { Checkbox } from 'alize-ui';
import { Label } from 'alize-ui';

<label htmlFor="newsletter" className="flex items-start gap-2 cursor-pointer">
  <Checkbox id="newsletter" className="mt-0.5" />
  <div className="flex flex-col gap-1">
    <span className="text-sm">Email notifications</span>
    <span className="text-sm text-muted-foreground">Receive email updates about your account</span>
  </div>
</label>`
      },
      {
        title: "Checkbox Cards",
        description: "CheckboxCard provides a card-style checkbox with enhanced visual feedback. Perfect for selecting items with descriptions.",
        code: `import { CheckboxCard } from 'alize-ui';

<div className="space-y-3">
  <CheckboxCard
    label="Basic plan"
    description="For individuals and small teams"
  />
  <CheckboxCard
    label="Pro plan"
    description="For growing businesses"
    defaultChecked
  />
  <CheckboxCard
    label="Enterprise"
    description="For large organizations"
  />
</div>`
      }
    ],
    do: [
      "Always pair checkboxes with labels for accessibility",
      "Use checkboxes for multiple selections",
      "Provide clear, descriptive labels",
      "Use checked state for selected options",
      "Group related checkboxes together"
    ],
    dont: [
      "Don't use checkboxes for single selections (use radio buttons)",
      "Don't use checkboxes for actions (use buttons instead)",
      "Don't forget to handle disabled states",
      "Don't use vague or unclear labels",
      "Don't nest checkboxes unnecessarily"
    ],
    accessibility: `- Always associate checkboxes with labels using htmlFor/id
- Use aria-invalid to indicate validation errors
- Support keyboard navigation (Space to toggle)
- Ensure sufficient color contrast for all states
- Provide clear focus indicators`,
    tokens: [
      { name: "stroke-default", category: "stroke", cssVariable: "var(--semantic-stroke-default)", usage: "Checkbox border" },
      { name: "surface-interaction-strong", category: "surface", cssVariable: "var(--semantic-surface-interaction-strong)", usage: "Checked state background" },
      { name: "text-reversedpersistent", category: "text", cssVariable: "var(--semantic-text-reversedpersistent)", usage: "Check icon color" },
      { name: "surface-whisper", category: "surface", cssVariable: "var(--semantic-surface-whisper)", usage: "CheckboxCard active background" },
      { name: "radius-sm", category: "radius", cssVariable: "var(--radius-sm)", usage: "Checkbox border radius" }
    ],
    interactiveProps: [
      {
        name: "checked",
        label: "Checked",
        controlType: "boolean",
        defaultValue: "false"
      },
      {
        name: "disabled",
        label: "Disabled",
        controlType: "boolean",
        defaultValue: "false"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Checkbox component"
      }
    ]
  },
  {
    title: "Skeleton",
    description: "A loading placeholder that displays an animated placeholder while content is loading. Provides visual feedback during async operations.",
    category: "atoms",
    component: "Skeleton",
    importPath: "alize-ui",
    props: [
      {
        name: "className",
        type: "string",
        required: false,
        description: "Additional CSS classes for custom styling"
      }
    ],
    examples: [
      {
        title: "Basic Skeleton",
        description: "Simple skeleton with custom dimensions",
        code: `import { Skeleton } from 'alize-ui';

<Skeleton className="h-4 w-32" />`
      },
      {
        title: "Card Skeleton",
        description: "Skeleton for card layouts",
        code: `import { Skeleton } from 'alize-ui';

<div className="space-y-3">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-32 w-full" />
</div>`
      },
      {
        title: "Avatar Skeleton",
        description: "Skeleton for avatar placeholders",
        code: `import { Skeleton } from 'alize-ui';

<div className="flex items-center gap-3">
  <Skeleton className="h-10 w-10 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-32" />
    <Skeleton className="h-3 w-24" />
  </div>
</div>`
      }
    ],
    do: [
      "Use skeletons to indicate loading states",
      "Match skeleton dimensions to actual content",
      "Use appropriate shapes (rounded, circular) for different content types",
      "Replace skeletons with actual content when loaded",
      "Keep skeleton animations subtle and non-distracting"
    ],
    dont: [
      "Don't use skeletons for instant content",
      "Don't make skeletons too complex",
      "Don't use skeletons without actual loading states",
      "Don't forget to remove skeletons when content loads",
      "Don't use skeletons that don't match the content layout"
    ],
    accessibility: `- Skeletons should not be announced by screen readers
- Use aria-busy="true" on loading containers
- Provide loading text for screen readers when appropriate
- Ensure skeleton animations don't cause motion sensitivity issues`,
    tokens: [
      { name: "surface-secondary", category: "surface", cssVariable: "var(--semantic-surface-secondary)", usage: "Skeleton background" },
      { name: "radius-md", category: "radius", cssVariable: "var(--radius)", usage: "Skeleton border radius" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Skeleton component"
      }
    ]
  },
  {
    title: "Spinner",
    description: "A loading spinner that displays an animated spinner to indicate loading state. Provides visual feedback during async operations.",
    category: "atoms",
    component: "Spinner",
    importPath: "alize-ui",
    props: [
      {
        name: "className",
        type: "string",
        required: false,
        description: "Additional CSS classes for custom sizing and styling"
      }
    ],
    examples: [
      {
        title: "Basic Spinner",
        description: "Standard loading spinner",
        code: `import { Spinner } from 'alize-ui';

<Spinner />`
      },
      {
        title: "Sized Spinners",
        description: "Spinners in different sizes",
        code: `import { Spinner } from 'alize-ui';

<div className="flex items-center gap-4">
  <Spinner className="size-4" />
  <Spinner className="size-6" />
  <Spinner className="size-8" />
</div>`
      },
      {
        title: "In Buttons",
        description: "Spinner in button during loading",
        code: `import { Spinner } from 'alize-ui';
import { Button } from 'alize-ui';

<Button disabled>
  <Spinner className="size-4 mr-2" />
  Loading...
</Button>`
      }
    ],
    do: [
      "Use spinners to indicate loading states",
      "Size spinners appropriately for their context",
      "Provide loading text alongside spinners when helpful",
      "Use spinners in buttons during async actions",
      "Replace spinners with content or success states when complete"
    ],
    dont: [
      "Don't use spinners for instant operations",
      "Don't use multiple spinners in the same view unnecessarily",
      "Don't forget to handle loading state transitions",
      "Don't use spinners without clear context",
      "Don't make spinners too large or distracting"
    ],
    accessibility: `- Spinners have role="status" and aria-label="Loading"
- Use aria-busy="true" on loading containers
- Provide loading announcements for screen readers
- Ensure spinner animations don't cause motion sensitivity issues`,
    tokens: [
      { name: "icon-subdued", category: "icon", cssVariable: "var(--semantic-icon-subdued)", usage: "Spinner color" }
    ],
    interactiveProps: [
      {
        name: "size",
        label: "Size",
        controlType: "select",
        defaultValue: "default",
        options: [
          { value: "sm", label: "Small" },
          { value: "default", label: "Default" },
          { value: "lg", label: "Large" },
        ]
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Spinner component"
      }
    ]
  },
  {
    title: "Separator",
    description: "A visual separator line that displays a horizontal or vertical line to separate content. Built on Radix UI primitives.",
    category: "atoms",
    component: "Separator",
    importPath: "alize-ui",
    props: [
      {
        name: "orientation",
        type: "horizontal | vertical",
        default: "horizontal",
        required: false,
        description: "Orientation of the separator"
      },
      {
        name: "decorative",
        type: "boolean",
        default: "true",
        required: false,
        description: "Whether the separator is decorative (not announced by screen readers)"
      }
    ],
    examples: [
      {
        title: "Horizontal Separator",
        description: "Standard horizontal separator",
        code: `import { Separator } from 'alize-ui';

<div>
  <p>Content above</p>
  <Separator />
  <p>Content below</p>
</div>`
      },
      {
        title: "Vertical Separator",
        description: "Vertical separator for side-by-side content",
        code: `import { Separator } from 'alize-ui';

<div className="flex items-center gap-4">
  <span>Left</span>
  <Separator orientation="vertical" />
  <span>Right</span>
</div>`
      }
    ],
    do: [
      "Use separators to visually divide content sections",
      "Choose horizontal or vertical based on layout",
      "Use decorative separators for visual-only divisions",
      "Place separators with appropriate spacing",
      "Maintain consistent separator usage throughout the interface"
    ],
    dont: [
      "Don't use separators as a replacement for proper spacing",
      "Don't overuse separators (let whitespace work)",
      "Don't use non-decorative separators unless they have semantic meaning",
      "Don't forget to set decorative prop appropriately",
      "Don't use separators that are too prominent or distracting"
    ],
    accessibility: `- Use decorative={true} for visual-only separators
- Use decorative={false} for separators with semantic meaning
- Ensure sufficient contrast for separator visibility
- Don't rely solely on separators for content structure`,
    tokens: [
      { name: "stroke-subdued", category: "stroke", cssVariable: "var(--semantic-stroke-subdued)", usage: "Separator color" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Separator component"
      }
    ]
  },
  {
    title: "Kbd",
    description: "A keyboard key indicator that displays a keyboard key or key combination for documentation or UI hints.",
    category: "atoms",
    component: "Kbd",
    importPath: "alize-ui",
    props: [
      {
        name: "className",
        type: "string",
        required: false,
        description: "Additional CSS classes for custom styling"
      }
    ],
    examples: [
      {
        title: "Single Key",
        description: "Display a single keyboard key",
        code: `import { Kbd } from 'alize-ui';

Press <Kbd>Ctrl</Kbd> to continue.`
      },
      {
        title: "Key Combinations",
        description: "Display key combinations using KbdGroup",
        code: `import { Kbd, KbdGroup } from 'alize-ui';

<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`
      },
      {
        title: "In Tooltips",
        description: "Keyboard shortcuts in tooltips",
        code: `import { Kbd } from 'alize-ui';

<div>
  Search
  <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
</div>`
      }
    ],
    do: [
      "Use Kbd for keyboard shortcuts and key indicators",
      "Group related keys with KbdGroup",
      "Use consistent styling for keyboard hints",
      "Provide keyboard shortcuts alongside actions",
      "Keep key labels clear and recognizable"
    ],
    dont: [
      "Don't use Kbd for non-keyboard interactions",
      "Don't use overly complex key combinations",
      "Don't forget to document keyboard shortcuts",
      "Don't use Kbd without clear context",
      "Don't mix different key label formats"
    ],
    accessibility: `- Kbd elements are semantic HTML for keyboard input
- Screen readers can announce keyboard shortcuts
- Ensure sufficient contrast for readability
- Provide alternative text descriptions when needed`,
    tokens: [
      { name: "surface-secondary", category: "surface", cssVariable: "var(--semantic-surface-secondary)", usage: "Key background" },
      { name: "stroke-subdued", category: "stroke", cssVariable: "var(--semantic-stroke-subdued)", usage: "Key border" },
      { name: "text-default", category: "text", cssVariable: "var(--semantic-text-default)", usage: "Key text" },
      { name: "radius-sm", category: "radius", cssVariable: "var(--radius-sm)", usage: "Key border radius" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Kbd component"
      }
    ]
  },
  {
    title: "Toggle",
    description: "A toggle button that can be pressed on or off. Provides a toggle button with multiple variants and sizes. Built on Radix UI primitives.",
    category: "atoms",
    component: "Toggle",
    importPath: "alize-ui",
    props: [
      {
        name: "variant",
        type: "default | outline",
        default: "default",
        required: false,
        description: "Visual style variant of the toggle"
      },
      {
        name: "size",
        type: "default | sm | lg",
        default: "default",
        required: false,
        description: "Size of the toggle"
      },
      {
        name: "pressed",
        type: "boolean",
        required: false,
        description: "Controlled pressed state"
      },
      {
        name: "defaultPressed",
        type: "boolean",
        required: false,
        description: "Default pressed state (uncontrolled)"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        required: false,
        description: "Whether the toggle is disabled"
      }
    ],
    examples: [
      {
        title: "Basic Toggle",
        description: "Simple toggle button",
        code: `import { Toggle } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<Toggle>
  <MaterialSymbol name="format_bold" size={16} weight={300} />
</Toggle>`
      },
      {
        title: "Variants",
        description: "Toggle with different variants",
        code: `import { Toggle } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<div className="flex gap-2">
  <Toggle variant="default">
    <MaterialSymbol name="format_bold" size={16} weight={300} />
  </Toggle>
  <Toggle variant="outline">
    <MaterialSymbol name="format_italic" size={16} weight={300} />
  </Toggle>
</div>`
      },
      {
        title: "Sizes",
        description: "Toggle in different sizes",
        code: `import { Toggle } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<div className="flex items-center gap-2">
  <Toggle size="sm">
    <MaterialSymbol name="format_bold" size={14} weight={300} />
  </Toggle>
  <Toggle size="default">
    <MaterialSymbol name="format_bold" size={16} weight={300} />
  </Toggle>
  <Toggle size="lg">
    <MaterialSymbol name="format_bold" size={18} weight={300} />
  </Toggle>
</div>`
      }
    ],
    do: [
      "Use toggles for on/off states in toolbars",
      "Use icons to make toggle purpose clear",
      "Provide visual feedback for pressed state",
      "Use appropriate variants for context",
      "Group related toggles together"
    ],
    dont: [
      "Don't use toggles for primary actions",
      "Don't use toggles without clear visual feedback",
      "Don't mix toggle variants unnecessarily",
      "Don't forget to handle disabled states",
      "Don't use toggles for navigation"
    ],
    accessibility: `- Toggles have proper ARIA states (aria-pressed)
- Support keyboard navigation
- Provide clear labels or aria-labels
- Ensure sufficient color contrast for all states
- Support screen reader announcements`,
    tokens: [
      { name: "surface-secondary", category: "surface", cssVariable: "var(--semantic-surface-secondary)", usage: "Pressed state background" },
      { name: "stroke-subdued", category: "stroke", cssVariable: "var(--semantic-stroke-subdued)", usage: "Toggle border" },
      { name: "icon-subdued", category: "icon", cssVariable: "var(--semantic-icon-subdued)", usage: "Icon color" }
    ],
    interactiveProps: [
      {
        name: "variant",
        label: "Variant",
        controlType: "select",
        defaultValue: "default",
        options: [
          { value: "default", label: "Default" },
          { value: "outline", label: "Outline" },
        ]
      },
      {
        name: "size",
        label: "Size",
        controlType: "select",
        defaultValue: "default",
        options: [
          { value: "sm", label: "Small" },
          { value: "default", label: "Default" },
          { value: "lg", label: "Large" },
        ]
      },
      {
        name: "pressed",
        label: "Pressed",
        controlType: "boolean",
        defaultValue: "false"
      },
      {
        name: "disabled",
        label: "Disabled",
        controlType: "boolean",
        defaultValue: "false"
      }
    ],
    interactionStates: [
      {
        state: "hover",
        description: "Overlay background on hover",
        cssClass: "hover:bg-semantic-surface-overlays-level1",
        foundationToken: "states.hoverOverlay1"
      },
      {
        state: "focus",
        description: "Focus ring for keyboard navigation",
        cssClass: "focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]",
        foundationToken: "states.focusRing"
      },
      {
        state: "pressed",
        description: "Subtle scale reduction when pressed",
        cssClass: "active:scale-[0.98]",
        foundationToken: "states.pressed"
      },
      {
        state: "checked",
        description: "Visual state when toggle is on/pressed",
        cssClass: "data-[state=on]:bg-semantic-surface-overlays-level2 data-[state=on]:text-foreground",
        foundationToken: "states.dataStateOn"
      },
      {
        state: "disabled",
        description: "Reduced opacity and no pointer events when disabled",
        cssClass: "disabled:pointer-events-none disabled:opacity-50",
        foundationToken: "states.disabled"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Toggle component"
      }
    ]
  },
  {
    title: "Toggle Group",
    description: "A group of toggle buttons that can be used together. Provides multiple toggles with shared styling and behavior.",
    category: "atoms",
    component: "ToggleGroup",
    importPath: "alize-ui",
    props: [
      {
        name: "variant",
        type: "default | outline",
        default: "default",
        required: false,
        description: "Visual style variant for all toggles in the group"
      },
      {
        name: "size",
        type: "default | sm | lg",
        default: "default",
        required: false,
        description: "Size for all toggles in the group"
      },
      {
        name: "type",
        type: "single | multiple",
        default: "single",
        required: false,
        description: "Whether single or multiple toggles can be pressed"
      },
      {
        name: "value",
        type: "string | string[]",
        required: false,
        description: "Controlled value(s) of pressed toggles"
      },
      {
        name: "defaultValue",
        type: "string | string[]",
        required: false,
        description: "Default value(s) of pressed toggles (uncontrolled)"
      }
    ],
    examples: [
      {
        title: "Single Selection",
        description: "Toggle group with single selection",
        code: `import { ToggleGroup, ToggleGroupItem } from 'alize-ui';

<ToggleGroup type="single" defaultValue="left">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`
      },
      {
        title: "Multiple Selection",
        description: "Toggle group allowing multiple selections",
        code: `import { ToggleGroup, ToggleGroupItem } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">
    <MaterialSymbol name="format_bold" size={16} weight={300} />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <MaterialSymbol name="format_italic" size={16} weight={300} />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline">
    <MaterialSymbol name="format_underlined" size={16} weight={300} />
  </ToggleGroupItem>
</ToggleGroup>`
      }
    ],
    do: [
      "Use toggle groups for related options",
      "Choose single or multiple selection based on use case",
      "Use consistent styling across the group",
      "Provide clear visual feedback for selected states",
      "Use icons when appropriate for clarity"
    ],
    dont: [
      "Don't use toggle groups for unrelated options",
      "Don't mix single and multiple selection patterns",
      "Don't forget to handle empty selection states",
      "Don't use toggle groups for primary navigation",
      "Don't overload groups with too many options"
    ],
    accessibility: `- Toggle groups have proper ARIA attributes
- Support keyboard navigation between toggles
- Provide clear labels for each toggle
- Announce selection changes to screen readers
- Ensure sufficient color contrast`,
    tokens: [
      { name: "surface-secondary", category: "surface", cssVariable: "var(--semantic-surface-secondary)", usage: "Group background" },
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Active toggle background" },
      { name: "radius-md", category: "radius", cssVariable: "var(--radius)", usage: "Group border radius" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Toggle Group"
      }
    ]
  },
  {
    title: "Tooltip",
    description: "A tooltip that displays additional information on hover or focus. Built on Radix UI primitives for accessibility.",
    category: "atoms",
    component: "Tooltip",
    importPath: "alize-ui",
    props: [
      {
        name: "delayDuration",
        type: "number",
        default: "0",
        required: false,
        description: "Delay before showing tooltip (in milliseconds)"
      },
      {
        name: "side",
        type: "top | right | bottom | left",
        default: "top",
        required: false,
        description: "Side of the trigger to show tooltip"
      },
      {
        name: "sideOffset",
        type: "number",
        default: "4",
        required: false,
        description: "Distance from trigger element"
      }
    ],
    examples: [
      {
        title: "Basic Tooltip",
        description: "Simple tooltip on hover",
        code: `import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'alize-ui';
import { Button } from 'alize-ui';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This is a tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`
      },
      {
        title: "With Icons",
        description: "Tooltip for icon buttons",
        code: `import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'alize-ui';
import { Button } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon" aria-label="Settings">
        <MaterialSymbol name="settings" size={20} weight={300} />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Settings</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`
      }
    ],
    do: [
      "Use tooltips to provide additional context",
      "Keep tooltip text concise and helpful",
      "Use tooltips for icon-only buttons",
      "Position tooltips appropriately",
      "Provide tooltips for keyboard shortcuts"
    ],
    dont: [
      "Don't use tooltips for essential information",
      "Don't make tooltips too long or verbose",
      "Don't use tooltips as a replacement for labels",
      "Don't forget to wrap with TooltipProvider",
      "Don't use tooltips for interactive content"
    ],
    accessibility: `- Tooltips are announced by screen readers
- Support keyboard focus for accessibility
- Provide appropriate delay for hover
- Ensure tooltip content is accessible
- Use aria-label for icon-only triggers`,
    tokens: [
      { name: "surface-reversed", category: "surface", cssVariable: "var(--semantic-surface-reversed)", usage: "Tooltip background" },
      { name: "text-reversedpersistent", category: "text", cssVariable: "var(--semantic-text-reversedpersistent)", usage: "Tooltip text" },
      { name: "radius-md", category: "radius", cssVariable: "var(--radius)", usage: "Tooltip border radius" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Tooltip component"
      }
    ]
  },
  {
    title: "Typography",
    description: "Typography components for consistent text styling. Provides semantic heading and text components with consistent typography.",
    category: "atoms",
    component: "Typography",
    importPath: "alize-ui",
    props: [
      {
        name: "className",
        type: "string",
        required: false,
        description: "Additional CSS classes for custom styling"
      }
    ],
    examples: [
      {
        title: "Headings",
        description: "Semantic heading components",
        code: `import { TypographyH1, TypographyH2, TypographyH3, TypographyH4 } from 'alize-ui';

<div className="space-y-4">
  <TypographyH1>Heading 1</TypographyH1>
  <TypographyH2>Heading 2</TypographyH2>
  <TypographyH3>Heading 3</TypographyH3>
  <TypographyH4>Heading 4</TypographyH4>
</div>`
      },
      {
        title: "Text Elements",
        description: "Paragraph and other text components",
        code: `import { TypographyP, TypographyBlockquote, TypographyCode } from 'alize-ui';

<div className="space-y-4">
  <TypographyP>This is a paragraph of text.</TypographyP>
  <TypographyBlockquote>This is a blockquote.</TypographyBlockquote>
  <TypographyCode>const code = "example";</TypographyCode>
</div>`
      }
    ],
    do: [
      "Use semantic heading components (H1-H4)",
      "Maintain proper heading hierarchy",
      "Use TypographyP for paragraphs",
      "Use TypographyCode for inline code",
      "Use TypographyBlockquote for quotes"
    ],
    dont: [
      "Don't skip heading levels",
      "Don't use headings for styling only",
      "Don't use multiple H1 elements on one page",
      "Don't forget semantic HTML structure",
      "Don't mix typography components inconsistently"
    ],
    accessibility: `- Typography components use semantic HTML
- Headings provide document structure for screen readers
- Maintain proper heading hierarchy (H1 > H2 > H3)
- Ensure sufficient color contrast for text
- Support screen reader navigation`,
    tokens: [
      { name: "text-default", category: "text", cssVariable: "var(--semantic-text-default)", usage: "Heading and paragraph text" },
      { name: "text-subdued", category: "text", cssVariable: "var(--semantic-text-subdued)", usage: "Muted text" },
      { name: "text-interaction-default", category: "text", cssVariable: "var(--semantic-text-interaction-default)", usage: "Link text" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Typography"
      }
    ]
  },
  {
    title: "Aspect Ratio",
    description: "Maintains a specific aspect ratio for its content. Provides a container that preserves aspect ratio for images and media.",
    category: "atoms",
    component: "AspectRatio",
    importPath: "alize-ui",
    props: [
      {
        name: "ratio",
        type: "number",
        required: true,
        description: "Aspect ratio (width / height), e.g., 16/9 for 16:9"
      }
    ],
    examples: [
      {
        title: "Image with Aspect Ratio",
        description: "Maintain aspect ratio for images",
        code: `import { AspectRatio } from 'alize-ui';

<AspectRatio ratio={16 / 9}>
  <img src="/image.jpg" alt="Description" className="h-full w-full object-cover" />
</AspectRatio>`
      },
      {
        title: "Video with Aspect Ratio",
        description: "Maintain aspect ratio for videos",
        code: `import { AspectRatio } from 'alize-ui';

<AspectRatio ratio={16 / 9}>
  <iframe src="https://www.youtube.com/embed/..." className="h-full w-full" />
</AspectRatio>`
      }
    ],
    do: [
      "Use AspectRatio for images and media",
      "Choose appropriate ratios (16:9, 4:3, 1:1, etc.)",
      "Use object-cover or object-contain for images",
      "Maintain consistent ratios across similar content",
      "Consider responsive behavior"
    ],
    dont: [
      "Don't use AspectRatio for text content",
      "Don't use inappropriate aspect ratios",
      "Don't forget to handle image loading states",
      "Don't use AspectRatio without proper content",
      "Don't ignore responsive design considerations"
    ],
    accessibility: `- Ensure images have proper alt text
- Maintain aspect ratio for responsive images
- Support screen reader announcements
- Consider loading states and placeholders`,
    tokens: [
      { name: "surface-subdued", category: "surface", cssVariable: "var(--semantic-surface-subdued)", usage: "Placeholder background" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Aspect Ratio"
      }
    ]
  },
  {
    title: "Empty",
    description: "An empty state component that displays a message when there's no content to show. Provides consistent empty state patterns.",
    category: "atoms",
    component: "Empty",
    importPath: "alize-ui",
    props: [
      {
        name: "title",
        type: "string",
        default: "No results found",
        required: false,
        description: "Title text for the empty state"
      },
      {
        name: "description",
        type: "string",
        required: false,
        description: "Description text for the empty state"
      },
      {
        name: "icon",
        type: "ReactNode",
        required: false,
        description: "Icon to display in the empty state"
      }
    ],
    examples: [
      {
        title: "Basic Empty State",
        description: "Simple empty state with title and description",
        code: `import { Empty } from 'alize-ui';

<Empty 
  title="No items found"
  description="Try adjusting your search or filters"
/>`
      },
      {
        title: "With Icon",
        description: "Empty state with custom icon",
        code: `import { Empty } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<Empty 
  title="No results"
  description="We couldn't find any matches"
  icon={<MaterialSymbol name="search_off" size={48} weight={300} className="text-muted-foreground" />}
/>`
      },
      {
        title: "With Action",
        description: "Empty state with action button",
        code: `import { Empty } from 'alize-ui';
import { Button } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<Empty 
  title="No projects yet"
  description="Get started by creating your first project"
  icon={<MaterialSymbol name="folder" size={48} weight={300} className="text-muted-foreground" />}
>
  <Button>Create Project</Button>
</Empty>`
      }
    ],
    do: [
      "Use empty states to guide users",
      "Provide clear, helpful messages",
      "Include actionable next steps when possible",
      "Use appropriate icons for context",
      "Make empty states visually appealing"
    ],
    dont: [
      "Don't use empty states for error messages",
      "Don't make empty states too verbose",
      "Don't forget to provide actionable guidance",
      "Don't use generic empty states everywhere",
      "Don't ignore empty states in design"
    ],
    accessibility: `- Empty states should be announced by screen readers
- Provide clear, descriptive text
- Include actionable guidance when possible
- Ensure sufficient color contrast
- Support keyboard navigation for actions`,
    tokens: [
      { name: "text-subdued", category: "text", cssVariable: "var(--semantic-text-subdued)", usage: "Empty state text" },
      { name: "icon-subdued", category: "icon", cssVariable: "var(--semantic-icon-subdued)", usage: "Empty state icon" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Empty state"
      }
    ]
  },
  {
    title: "Item",
    description: "A list item component with selection state. Provides a consistent item component for lists and menus with hover and selection states.",
    category: "atoms",
    component: "Item",
    importPath: "alize-ui",
    props: [
      {
        name: "selected",
        type: "boolean",
        default: "false",
        required: false,
        description: "Whether the item is selected"
      },
      {
        name: "className",
        type: "string",
        required: false,
        description: "Additional CSS classes for custom styling"
      }
    ],
    examples: [
      {
        title: "Basic Item",
        description: "Simple list item",
        code: `import { Item } from 'alize-ui';

<Item>List item</Item>`
      },
      {
        title: "Selected Item",
        description: "Item with selected state",
        code: `import { Item } from 'alize-ui';

<Item selected>Selected item</Item>`
      },
      {
        title: "With Icons",
        description: "Item with icon and content",
        code: `import { Item } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<Item>
  <MaterialSymbol name="folder" size={16} weight={300} />
  <span>Documents</span>
</Item>`
      }
    ],
    do: [
      "Use Item for list and menu items",
      "Provide clear visual feedback for selection",
      "Use consistent styling across items",
      "Include icons when appropriate",
      "Handle click interactions properly"
    ],
    dont: [
      "Don't use Item for complex layouts",
      "Don't forget to handle selection state",
      "Don't use Item without proper context",
      "Don't mix Item with other list patterns",
      "Don't ignore hover and focus states"
    ],
    accessibility: `- Items should support keyboard navigation
- Provide clear selection feedback
- Use appropriate ARIA attributes for lists
- Ensure sufficient color contrast
- Support screen reader announcements`,
    tokens: [
      { name: "surface-interaction-whisper", category: "surface", cssVariable: "var(--semantic-surface-interaction-whisper)", usage: "Hover background" },
      { name: "surface-interaction-bright", category: "surface", cssVariable: "var(--semantic-surface-interaction-bright)", usage: "Selected background" },
      { name: "text-default", category: "text", cssVariable: "var(--semantic-text-default)", usage: "Item text" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Item"
      }
    ]
  },
  {
    title: "Logo",
    description: "JLL brand logo component with optional product name. Supports light/dark themes using semantic brand tokens. Perfect for navigation headers with collapsible states.",
    category: "atoms",
    component: "Logo",
    importPath: "alize-ui",
    props: [
      {
        name: "productName",
        type: "string",
        required: false,
        description: "Optional product name to display next to the logo. If not provided or empty, only the JLL logo is displayed."
      },
      {
        name: "collapsed",
        type: "boolean",
        default: "false",
        required: false,
        description: "When true, hides the product name and shows only the logo. Useful for collapsed navigation states."
      },
      {
        name: "size",
        type: "default | sm | lg",
        default: "default",
        required: false,
        description: "Size variant of the logo and text"
      },
      {
        name: "className",
        type: "string",
        required: false,
        description: "Additional CSS classes for custom styling"
      }
    ],
    examples: [
      {
        title: "Basic Logo",
        description: "Logo with product name",
        code: `import { Logo } from 'alize-ui';

<Logo productName="Product Name" />`
      },
      {
        title: "Logo Only",
        description: "Just the JLL logo without product name",
        code: `import { Logo, JLLLogo } from 'alize-ui';

{/* Without productName - shows logo only */}
<Logo />

{/* Or using the SVG directly */}
<JLLLogo className="h-6 w-auto" />`
      },
      {
        title: "Sizes",
        description: "Different size variants",
        code: `import { Logo } from 'alize-ui';

<div className="flex flex-col gap-4">
  <Logo size="sm" productName="Small" />
  <Logo size="default" productName="Default" />
  <Logo size="lg" productName="Large" />
</div>`
      },
      {
        title: "Collapsible Navigation",
        description: "Toggle product name visibility for collapsed/expanded navigation states",
        code: `import { Logo } from 'alize-ui';
import { useState } from 'react';

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav>
      <Logo productName="My Application" collapsed={collapsed} />
      {/* Navigation items */}
    </nav>
  );
}`
      },
      {
        title: "In Navigation",
        description: "Logo used in a navigation header",
        code: `import { Logo } from 'alize-ui';

<header className="flex items-center justify-between p-4">
  <Logo productName="My Application" />
  {/* Navigation items */}
</header>`
      }
    ],
    do: [
      "Use Logo for consistent brand presentation",
      "Include product name for application branding",
      "Place in navigation headers or footers",
      "Let the component handle theme switching",
      "Use appropriate size for the context"
    ],
    dont: [
      "Don't modify the JLL logo colors",
      "Don't stretch or distort the logo proportions",
      "Don't use collapsed mode in contexts requiring product identification",
      "Don't override brand token colors",
      "Don't use custom fonts for the product name"
    ],
    accessibility: `- Logo SVG uses aria-hidden="true" as it's decorative
- Product name provides text context
- Ensure sufficient contrast in all themes
- Consider adding aria-label to the container when collapsed`,
    tokens: [
      { name: "brand-picto", category: "brand", cssVariable: "var(--semantic-brand-picto)", usage: "Red J icon color (always #de0614)" },
      { name: "brand-text", category: "brand", cssVariable: "var(--semantic-brand-text)", usage: "LL text and product name (black in light, white in dark)" }
    ],
    interactiveProps: [
      {
        name: "size",
        label: "Size",
        controlType: "select",
        defaultValue: "default",
        options: [
          { value: "sm", label: "Small" },
          { value: "default", label: "Default" },
          { value: "lg", label: "Large" }
        ]
      },
      {
        name: "productName",
        label: "Product Name",
        controlType: "text",
        defaultValue: "Product Name",
        placeholder: "Enter product name..."
      },
      {
        name: "collapsed",
        label: "Collapsed",
        controlType: "boolean",
        defaultValue: "false"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Logo"
      }
    ]
  },
  {
    title: "Switch",
    description: "A toggle switch for binary choices. Provides a visual on/off toggle for settings and preferences.",
    category: "atoms",
    component: "Switch",
    importPath: "alize-ui",
    props: [
      {
        name: "checked",
        type: "boolean",
        required: false,
        description: "Controlled checked state"
      },
      {
        name: "defaultChecked",
        type: "boolean",
        required: false,
        description: "Default checked state (uncontrolled)"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        required: false,
        description: "Whether the switch is disabled"
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        required: false,
        description: "Callback when checked state changes"
      }
    ],
    examples: [
      {
        title: "Basic Switch",
        description: "Simple toggle switch",
        code: `import { Switch } from 'alize-ui';
import { Label } from 'alize-ui';

<div className="flex items-center gap-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`
      },
      {
        title: "States",
        description: "Switch in different states",
        code: `import { Switch } from 'alize-ui';

<div className="space-y-4">
  <div className="flex items-center gap-2">
    <Switch id="off" />
    <span className="text-sm">Off</span>
  </div>
  <div className="flex items-center gap-2">
    <Switch id="on" defaultChecked />
    <span className="text-sm">On</span>
  </div>
  <div className="flex items-center gap-2">
    <Switch id="disabled" disabled />
    <span className="text-sm opacity-50">Disabled</span>
  </div>
</div>`
      },
      {
        title: "Switch Cards",
        description: "SwitchCard provides a card-style switch with enhanced visual feedback. Perfect for settings with descriptions.",
        code: `import { SwitchCard } from 'alize-ui';

<div className="space-y-3">
  <SwitchCard
    label="Email notifications"
    description="Receive emails about your account activity"
  />
  <SwitchCard
    label="Push notifications"
    description="Receive push notifications on your device"
    defaultChecked
  />
  <SwitchCard
    label="Marketing emails"
    description="Receive emails about new features and offers"
  />
</div>`
      }
    ],
    do: [
      "Use switches for binary on/off choices",
      "Provide clear labels that describe the setting",
      "Use SwitchCard when you need more context",
      "Show immediate visual feedback when toggled",
      "Use consistent positioning across the interface"
    ],
    dont: [
      "Don't use switches for actions (use buttons instead)",
      "Don't use switches when multiple options exist (use radio buttons)",
      "Don't forget to provide labels for accessibility",
      "Don't use switches for irreversible actions",
      "Don't stack too many switches without grouping"
    ],
    accessibility: `- Switches have proper ARIA states (aria-checked)
- Always associate switches with labels
- Support keyboard navigation (Space to toggle)
- Ensure sufficient color contrast for all states
- Provide clear focus indicators`,
    tokens: [
      { name: "surface-interaction-strong", category: "surface", cssVariable: "var(--semantic-surface-interaction-strong)", usage: "Checked state background" },
      { name: "surface-secondary", category: "surface", cssVariable: "var(--semantic-surface-secondary)", usage: "Unchecked state background" },
      { name: "surface-whisper", category: "surface", cssVariable: "var(--semantic-surface-whisper)", usage: "SwitchCard active background" }
    ],
    interactiveProps: [
      {
        name: "checked",
        label: "Checked",
        controlType: "boolean",
        defaultValue: "false"
      },
      {
        name: "disabled",
        label: "Disabled",
        controlType: "boolean",
        defaultValue: "false"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Switch"
      }
    ]
  },
  {
    title: "Radio Group",
    description: "A set of mutually exclusive options. Use radio groups when users must select exactly one option from a list.",
    category: "atoms",
    component: "RadioGroup",
    importPath: "alize-ui",
    props: [
      {
        name: "value",
        type: "string",
        required: false,
        description: "Controlled value of the selected radio"
      },
      {
        name: "defaultValue",
        type: "string",
        required: false,
        description: "Default value (uncontrolled)"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        required: false,
        description: "Whether the radio group is disabled"
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        required: false,
        description: "Callback when value changes"
      }
    ],
    examples: [
      {
        title: "Basic Radio Group",
        description: "Simple radio button group",
        code: `import { RadioGroup, RadioGroupItem } from 'alize-ui';
import { Label } from 'alize-ui';

<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-3" id="option-3" />
    <Label htmlFor="option-3">Option 3</Label>
  </div>
</RadioGroup>`
      },
      {
        title: "Radio Cards",
        description: "RadioGroupCardItem provides a card-style radio button with enhanced visual feedback. Perfect for selecting options with descriptions.",
        code: `import { RadioGroup, RadioGroupCardItem } from 'alize-ui';

<RadioGroup defaultValue="basic">
  <RadioGroupCardItem
    value="basic"
    label="Basic plan"
    description="For individuals and small teams"
  />
  <RadioGroupCardItem
    value="pro"
    label="Pro plan"
    description="For growing businesses"
  />
  <RadioGroupCardItem
    value="enterprise"
    label="Enterprise"
    description="For large organizations"
  />
</RadioGroup>`
      }
    ],
    do: [
      "Use radio groups for mutually exclusive options",
      "Provide clear labels for each option",
      "Use RadioGroupCardItem for options with descriptions",
      "Pre-select a default option when appropriate",
      "Group related options together"
    ],
    dont: [
      "Don't use radio groups for multiple selections (use checkboxes)",
      "Don't use radio groups for binary choices (use switches)",
      "Don't forget to provide labels for accessibility",
      "Don't use too many options (consider a select instead)",
      "Don't mix radio buttons with other selection patterns"
    ],
    accessibility: `- Radio groups have proper ARIA roles and states
- Always associate radios with labels
- Support keyboard navigation (Arrow keys to navigate)
- Ensure sufficient color contrast for all states
- Support screen reader announcements`,
    tokens: [
      { name: "surface-interaction-strong", category: "surface", cssVariable: "var(--semantic-surface-interaction-strong)", usage: "Selected radio indicator" },
      { name: "stroke-default", category: "stroke", cssVariable: "var(--semantic-stroke-default)", usage: "Radio border" },
      { name: "surface-whisper", category: "surface", cssVariable: "var(--semantic-surface-whisper)", usage: "RadioCard active background" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Radio Group"
      }
    ]
  },

  // ============================================================================
  // MOLECULES
  // ============================================================================

  {
    title: "Select",
    description: "A dropdown select component for choosing from a list of options. Built on Radix UI for accessibility.",
    category: "molecules",
    component: "Select",
    importPath: "alize-ui",
    props: [
      { name: "value", type: "string", required: false, description: "Controlled value" },
      { name: "defaultValue", type: "string", required: false, description: "Default value (uncontrolled)" },
      { name: "onValueChange", type: "(value: string) => void", required: false, description: "Callback when value changes" },
      { name: "disabled", type: "boolean", default: "false", required: false, description: "Whether the select is disabled" },
      { name: "size", type: "sm | default", default: "default", required: false, description: "Size of the select trigger" }
    ],
    examples: [
      {
        title: "Basic Select",
        description: "Simple select dropdown",
        code: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'alize-ui';

<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>`
      },
      {
        title: "With Groups",
        description: "Select with grouped options",
        code: `import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from 'alize-ui';

<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time</SelectItem>
      <SelectItem value="pst">Pacific Standard Time</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">Greenwich Mean Time</SelectItem>
      <SelectItem value="cet">Central European Time</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`
      }
    ],
    do: [
      "Use Select for choosing one option from many",
      "Provide a clear placeholder text",
      "Group related options together",
      "Use for lists with 5+ options"
    ],
    dont: [
      "Don't use Select for binary choices (use Switch)",
      "Don't use for very few options (use Radio)",
      "Don't forget accessible labels"
    ],
    accessibility: `- Built on Radix UI for full accessibility
- Supports keyboard navigation
- Announces selections to screen readers`,
    tokens: [
      { name: "stroke-default", category: "stroke", cssVariable: "var(--semantic-stroke-default)", usage: "Trigger border" },
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Dropdown background" },
      { name: "surface-interaction-strong", category: "surface", cssVariable: "var(--semantic-surface-interaction-strong)", usage: "Selected item highlight" },
      { name: "text-subdued", category: "text", cssVariable: "var(--semantic-text-subdued)", usage: "Placeholder text" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Select"
      }
    ]
  },
  {
    title: "Textarea",
    description: "A multi-line text input for longer content. Supports auto-sizing and validation states.",
    category: "molecules",
    component: "Textarea",
    importPath: "alize-ui",
    props: [
      { name: "placeholder", type: "string", required: false, description: "Placeholder text" },
      { name: "rows", type: "number", required: false, description: "Number of visible rows" },
      { name: "disabled", type: "boolean", default: "false", required: false, description: "Whether the textarea is disabled" },
      { name: "aria-invalid", type: "boolean", required: false, description: "Indicates invalid state" }
    ],
    examples: [
      {
        title: "Basic Textarea",
        description: "Simple multi-line input",
        code: `import { Textarea } from 'alize-ui';
import { Label } from 'alize-ui';

<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message here..." />
</div>`
      },
      {
        title: "With Validation",
        description: "Textarea with error state",
        code: `import { Textarea } from 'alize-ui';
import { Label } from 'alize-ui';

<div className="space-y-2">
  <Label htmlFor="bio">Bio</Label>
  <Textarea 
    id="bio" 
    aria-invalid={true}
    defaultValue="Too short"
    className="border-destructive"
  />
  <p className="text-xs text-destructive">Bio must be at least 50 characters</p>
</div>`
      }
    ],
    do: [
      "Use for multi-line text input",
      "Provide clear labels and placeholders",
      "Show character counts for limited inputs"
    ],
    dont: [
      "Don't use for single-line inputs",
      "Don't make textareas too small"
    ],
    accessibility: `- Always pair with labels
- Use aria-invalid for error states
- Support keyboard navigation`,
    tokens: [
      { name: "stroke-default", category: "stroke", cssVariable: "var(--semantic-stroke-default)", usage: "Border color" },
      { name: "text-subdued", category: "text", cssVariable: "var(--semantic-text-subdued)", usage: "Placeholder text" },
      { name: "radius-md", category: "radius", cssVariable: "var(--radius)", usage: "Border radius" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Textarea"
      }
    ]
  },
  {
    title: "Slider",
    description: "A range input slider for selecting values within a defined range.",
    category: "molecules",
    component: "Slider",
    importPath: "alize-ui",
    props: [
      { name: "value", type: "number[]", required: false, description: "Controlled value" },
      { name: "defaultValue", type: "number[]", required: false, description: "Default value" },
      { name: "min", type: "number", default: "0", required: false, description: "Minimum value" },
      { name: "max", type: "number", default: "100", required: false, description: "Maximum value" },
      { name: "step", type: "number", default: "1", required: false, description: "Step increment" },
      { name: "disabled", type: "boolean", default: "false", required: false, description: "Whether disabled" }
    ],
    examples: [
      {
        title: "Basic Slider",
        description: "Simple range slider",
        code: `import { Slider } from 'alize-ui';

<Slider defaultValue={[50]} max={100} step={1} className="w-[300px]" />`
      },
      {
        title: "Range Slider",
        description: "Slider with two handles for range selection",
        code: `import { Slider } from 'alize-ui';

<Slider defaultValue={[25, 75]} max={100} step={1} className="w-[300px]" />`
      }
    ],
    do: [
      "Use for selecting values within a range",
      "Show current value feedback",
      "Use appropriate step values"
    ],
    dont: [
      "Don't use for precise value entry (use input)",
      "Don't make the slider too narrow"
    ],
    accessibility: `- Supports keyboard navigation
- Announces value changes
- Provides visual and audible feedback`,
    tokens: [
      { name: "surface-interaction-strong", category: "surface", cssVariable: "var(--semantic-surface-interaction-strong)", usage: "Track fill and thumb border" },
      { name: "surface-secondary", category: "surface", cssVariable: "var(--semantic-surface-secondary)", usage: "Track background" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Slider component"
      }
    ]
  },
  {
    title: "Progress",
    description: "A progress bar for showing completion status of tasks or processes.",
    category: "molecules",
    component: "Progress",
    importPath: "alize-ui",
    props: [
      { name: "value", type: "number", required: false, description: "Progress value (0-100)" },
      { name: "max", type: "number", default: "100", required: false, description: "Maximum value" }
    ],
    examples: [
      {
        title: "Basic Progress",
        description: "Simple progress bar",
        code: `import { Progress } from 'alize-ui';

<Progress value={60} className="w-[300px]" />`
      },
      {
        title: "Progress States",
        description: "Different progress values",
        code: `import { Progress } from 'alize-ui';

<div className="space-y-4 w-[300px]">
  <Progress value={0} />
  <Progress value={33} />
  <Progress value={66} />
  <Progress value={100} />
</div>`
      }
    ],
    do: [
      "Use to show task completion",
      "Provide percentage labels when appropriate",
      "Update smoothly for better UX"
    ],
    dont: [
      "Don't use for indeterminate loading (use Spinner)",
      "Don't forget to communicate progress meaning"
    ],
    accessibility: `- Uses proper progress ARIA role
- Announces progress changes
- Provides visual feedback`,
    tokens: [
      { name: "surface-interaction-strong", category: "surface", cssVariable: "var(--semantic-surface-interaction-strong)", usage: "Progress fill color" },
      { name: "radius-full", category: "radius", cssVariable: "var(--radius-full)", usage: "Rounded ends" }
    ],
    interactiveProps: [
      {
        name: "value",
        label: "Value",
        controlType: "select",
        defaultValue: "50",
        options: [
          { value: "0", label: "0%" },
          { value: "25", label: "25%" },
          { value: "50", label: "50%" },
          { value: "75", label: "75%" },
          { value: "100", label: "100%" },
        ]
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Progress"
      }
    ]
  },
  {
    title: "Alert",
    description: "Displays important messages to users. Supports different variants for info, success, warning, and error states.",
    category: "molecules",
    component: "Alert",
    importPath: "alize-ui",
    props: [
      { name: "variant", type: "default | destructive", default: "default", required: false, description: "Visual variant" }
    ],
    examples: [
      {
        title: "Default Alert",
        description: "Informational alert",
        code: `import { Alert, AlertDescription, AlertTitle } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<Alert>
  <MaterialSymbol name="info" size={16} weight={300} />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>`
      },
      {
        title: "Destructive Alert",
        description: "Error or warning alert",
        code: `import { Alert, AlertDescription, AlertTitle } from 'alize-ui';
import { MaterialSymbol } from 'alize-ui';

<Alert variant="destructive">
  <MaterialSymbol name="error" size={16} weight={300} />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`
      }
    ],
    do: [
      "Use appropriate variants for message type",
      "Keep messages concise and actionable",
      "Include icons for visual reinforcement"
    ],
    dont: [
      "Don't overuse alerts",
      "Don't use for transient notifications (use Toast)"
    ],
    accessibility: `- Uses alert role for screen readers
- Includes proper heading structure
- Supports keyboard dismissal`,
    tokens: [
      { name: "stroke-default", category: "stroke", cssVariable: "var(--semantic-stroke-default)", usage: "Border color" },
      { name: "text-rag-danger-default", category: "text", cssVariable: "var(--semantic-text-rag-danger-default)", usage: "Destructive text" }
    ],
    interactiveProps: [
      {
        name: "variant",
        label: "Variant",
        controlType: "select",
        defaultValue: "default",
        options: [
          { value: "default", label: "Default" },
          { value: "destructive", label: "Destructive" },
        ]
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Alert"
      }
    ]
  },
  {
    title: "Card",
    description: "A container component for grouping related content. Includes header, content, and footer sections.",
    category: "molecules",
    component: "Card",
    importPath: "alize-ui",
    props: [],
    examples: [
      {
        title: "Basic Card",
        description: "Simple card with content",
        code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'alize-ui';

<Card className="w-[350px],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Card component"
      }
    ]">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content and other elements go here.</p>
  </CardContent>
</Card>`
      },
      {
        title: "Card with Footer",
        description: "Card with action buttons",
        code: `import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'alize-ui';
import { Button } from 'alize-ui';

<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create Project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Configure your project settings here.</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`
      }
    ],
    do: [
      "Use cards to group related content",
      "Maintain consistent card layouts",
      "Use appropriate spacing"
    ],
    dont: [
      "Don't nest cards within cards",
      "Don't overload cards with content"
    ],
    accessibility: `- Uses semantic HTML structure
- Supports proper heading levels
- Maintains focus management`,
    tokens: [
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Card background" },
      { name: "stroke-subdued", category: "stroke", cssVariable: "var(--semantic-stroke-subdued)", usage: "Card border" },
      { name: "shadow-sm", category: "shadow", cssVariable: "var(--shadow-sm)", usage: "Card shadow" }
    ]
  },
  {
    title: "Tabs",
    description: "Organizes content into multiple panels that are shown one at a time.",
    category: "molecules",
    component: "Tabs",
    importPath: "alize-ui",
    props: [
      { name: "value", type: "string", required: false, description: "Controlled active tab" },
      { name: "defaultValue", type: "string", required: false, description: "Default active tab" },
      { name: "onValueChange", type: "(value: string) => void", required: false, description: "Tab change callback" }
    ],
    examples: [
      {
        title: "Basic Tabs",
        description: "Simple tab navigation",
        code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from 'alize-ui';

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Make changes to your account here.</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Change your password here.</p>
  </TabsContent>
</Tabs>`
      }
    ],
    do: [
      "Use for organizing related content",
      "Keep tab labels short and clear",
      "Maintain consistent content structure"
    ],
    dont: [
      "Don't use too many tabs",
      "Don't nest tabs within tabs"
    ],
    accessibility: `- Full keyboard navigation
- ARIA tablist/tab/tabpanel roles
- Proper focus management`,
    tokens: [
      { name: "surface-secondary", category: "surface", cssVariable: "var(--semantic-surface-secondary)", usage: "Tab list background" },
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Active tab background" }
    ],
    interactionStates: [
      {
        state: "selected",
        description: "Background and shadow when tab is active",
        cssClass: "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        foundationToken: "states.tabActive"
      },
      {
        state: "focus",
        description: "Focus ring for keyboard navigation",
        cssClass: "focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]",
        foundationToken: "states.focusRing"
      },
      {
        state: "pressed",
        description: "Subtle scale reduction when tab is pressed",
        cssClass: "active:scale-[0.98]",
        foundationToken: "states.pressed"
      },
      {
        state: "disabled",
        description: "Reduced opacity and no pointer events when disabled",
        cssClass: "disabled:pointer-events-none disabled:opacity-50",
        foundationToken: "states.disabled"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Tabs"
      }
    ]
  },
  {
    title: "Accordion",
    description: "A vertically stacked set of interactive headings that reveal or hide associated content.",
    category: "molecules",
    component: "Accordion",
    importPath: "alize-ui",
    props: [
      { name: "type", type: "single | multiple", default: "single", required: false, description: "Single or multiple items open" },
      { name: "collapsible", type: "boolean", default: "false", required: false, description: "Allow all items to be collapsed" }
    ],
    examples: [
      {
        title: "Basic Accordion",
        description: "Collapsible sections",
        code: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'alize-ui';

<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match your theme.
    </AccordionContent>
  </AccordionItem>
</Accordion>`
      }
    ],
    do: [
      "Use for FAQ sections",
      "Keep headers descriptive",
      "Use type='multiple' when users need to compare sections"
    ],
    dont: [
      "Don't hide critical information",
      "Don't use for navigation"
    ],
    accessibility: `- Keyboard navigation with arrows
- ARIA expanded states
- Proper heading structure`,
    tokens: [
      { name: "stroke-subdued", category: "stroke", cssVariable: "var(--semantic-stroke-subdued)", usage: "Item borders" },
      { name: "text-default", category: "text", cssVariable: "var(--semantic-text-default)", usage: "Trigger text" }
    ],
    interactionStates: [
      {
        state: "hover",
        description: "Underline on hover for the accordion trigger",
        cssClass: "hover:underline",
        foundationToken: "states.hoverUnderline"
      },
      {
        state: "focus",
        description: "Focus ring for keyboard navigation",
        cssClass: "focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]",
        foundationToken: "states.focusRing"
      },
      {
        state: "pressed",
        description: "Subtle scale reduction when trigger is pressed",
        cssClass: "active:scale-[0.98]",
        foundationToken: "states.pressed"
      },
      {
        state: "disabled",
        description: "Reduced opacity and no pointer events when disabled",
        cssClass: "disabled:pointer-events-none disabled:opacity-50",
        foundationToken: "states.disabled"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Accordion"
      }
    ]
  },
  {
    title: "Popover",
    description: "Displays floating content triggered by a button or element.",
    category: "molecules",
    component: "Popover",
    importPath: "alize-ui",
    props: [
      { name: "open", type: "boolean", required: false, description: "Controlled open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", required: false, description: "Open state change callback" }
    ],
    examples: [
      {
        title: "Basic Popover",
        description: "Click to show popover",
        code: `import { Popover, PopoverContent, PopoverTrigger } from 'alize-ui';
import { Button } from 'alize-ui';

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
    </div>
  </PopoverContent>
</Popover>`
      }
    ],
    do: [
      "Use for contextual information",
      "Keep content focused and brief",
      "Provide clear trigger affordance"
    ],
    dont: [
      "Don't use for complex forms (use Dialog)",
      "Don't use for critical information"
    ],
    accessibility: `- Focus trap when open
- Escape to close
- ARIA describedby`,
    tokens: [
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Popover background" },
      { name: "stroke-subdued", category: "stroke", cssVariable: "var(--semantic-stroke-subdued)", usage: "Popover border" },
      { name: "shadow-md", category: "shadow", cssVariable: "var(--shadow-md)", usage: "Popover shadow" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Popover"
      }
    ]
  },
  {
    title: "Dropdown Menu",
    description: "A menu of actions or options displayed in a floating panel.",
    category: "molecules",
    component: "DropdownMenu",
    importPath: "alize-ui",
    props: [],
    examples: [
      {
        title: "Basic Dropdown",
        description: "Action menu",
        code: `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'alize-ui';
import { Button } from 'alize-ui';

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`
      }
    ],
    do: [
      "Use for action menus",
      "Group related actions",
      "Include keyboard shortcuts"
    ],
    dont: [
      "Don't use for navigation (use Navigation Menu)",
      "Don't nest dropdowns deeply"
    ],
    accessibility: `- Full keyboard navigation
- ARIA menu roles
- Focus management`,
    tokens: [
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Menu background" },
      { name: "surface-interaction-whisper", category: "surface", cssVariable: "var(--semantic-surface-interaction-whisper)", usage: "Item hover" }
    ],
    interactionStates: [
      {
        state: "focus",
        description: "Overlay background when item is focused via keyboard",
        cssClass: "focus:bg-semantic-surface-overlays-level1 focus:text-foreground",
        foundationToken: "states.focusAccent"
      },
      {
        state: "pressed",
        description: "Subtle scale reduction when item is pressed",
        cssClass: "active:scale-[0.98]",
        foundationToken: "states.pressed"
      },
      {
        state: "open",
        description: "Background change when submenu is open",
        cssClass: "data-[state=open]:bg-semantic-surface-overlays-level1",
        foundationToken: "states.dataStateOpen"
      },
      {
        state: "disabled",
        description: "Reduced opacity and no pointer events when disabled",
        cssClass: "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        foundationToken: "states.disabled"
      }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Dropdown Menu"
      }
    ]
  },
  {
    title: "Command",
    description: "A command palette component for searching and executing actions.",
    category: "molecules",
    component: "Command",
    importPath: "alize-ui",
    props: [],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Command palette component"
      }
    ],
    examples: [
      {
        title: "Basic Command",
        description: "Searchable command list",
        code: `import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from 'alize-ui';

<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`
      }
    ],
    do: [
      "Use for command palettes",
      "Provide search functionality",
      "Group related commands"
    ],
    dont: [
      "Don't use for simple menus",
      "Don't overload with too many options"
    ],
    accessibility: `- Keyboard navigation
- Search announcements
- Focus management`,
    tokens: [
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Command background" },
      { name: "text-subdued", category: "text", cssVariable: "var(--semantic-text-subdued)", usage: "Placeholder and hints" }
    ]
  },
  {
    title: "Combobox",
    description: "An autocomplete input with dropdown suggestions.",
    category: "molecules",
    component: "Combobox",
    importPath: "alize-ui",
    props: [
      { name: "options", type: "ComboboxOption[]", required: true, description: "List of options" },
      { name: "value", type: "string", required: false, description: "Selected value" },
      { name: "onValueChange", type: "(value: string) => void", required: false, description: "Selection callback" },
      { name: "placeholder", type: "string", required: false, description: "Placeholder text" }
    ],
    examples: [
      {
        title: "Basic Combobox",
        description: "Searchable select",
        code: `import { Combobox } from 'alize-ui';

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
];

<Combobox 
  options={frameworks}
  placeholder="Select framework..."
  emptyText="No framework found."
/>`
      }
    ],
    do: [
      "Use for searchable selections",
      "Use when options list is long",
      "Provide clear empty states"
    ],
    dont: [
      "Don't use for short lists (use Select)",
      "Don't forget loading states"
    ],
    accessibility: `- Autocomplete support
- Keyboard navigation
- Screen reader announcements`,
    tokens: [
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Dropdown background" },
      { name: "surface-interaction-strong", category: "surface", cssVariable: "var(--semantic-surface-interaction-strong)", usage: "Selected item" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Combobox component"
      }
    ]
  },
  {
    title: "Breadcrumb",
    description: "Navigation component showing the current page location within a hierarchy.",
    category: "molecules",
    component: "Breadcrumb",
    importPath: "alize-ui",
    props: [],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Breadcrumb navigation"
      }
    ],
    examples: [
      {
        title: "Basic Breadcrumb",
        description: "Navigation path",
        code: `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from 'alize-ui';

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`
      }
    ],
    do: [
      "Use for hierarchical navigation",
      "Keep paths concise",
      "Link all items except current"
    ],
    dont: [
      "Don't use for flat navigation",
      "Don't make breadcrumbs too long"
    ],
    accessibility: `- Uses nav landmark
- Proper link structure
- Current page indication`,
    tokens: [
      { name: "text-subdued", category: "text", cssVariable: "var(--semantic-text-subdued)", usage: "Separator color" },
      { name: "text-interaction-default", category: "text", cssVariable: "var(--semantic-text-interaction-default)", usage: "Link color" }
    ]
  },
  {
    title: "Pagination",
    description: "Navigation component for paginated content.",
    category: "molecules",
    component: "Pagination",
    importPath: "alize-ui",
    props: [],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Pagination component"
      }
    ],
    examples: [
      {
        title: "Basic Pagination",
        description: "Page navigation",
        code: `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from 'alize-ui';

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`
      }
    ],
    do: [
      "Use for paginated lists",
      "Show current page clearly",
      "Include previous/next controls"
    ],
    dont: [
      "Don't show too many page numbers",
      "Don't use without page context"
    ],
    accessibility: `- Proper navigation role
- Current page indication
- Keyboard navigation`,
    tokens: [
      { name: "surface-interaction-strong", category: "surface", cssVariable: "var(--semantic-surface-interaction-strong)", usage: "Active page" },
      { name: "text-subdued", category: "text", cssVariable: "var(--semantic-text-subdued)", usage: "Disabled state" }
    ]
  },
  {
    title: "Button Group",
    description: "Groups related buttons together with proper spacing and styling.",
    category: "molecules",
    component: "ButtonGroup",
    importPath: "alize-ui",
    props: [
      { name: "orientation", type: "horizontal | vertical", default: "horizontal", required: false, description: "Layout direction" }
    ],
    examples: [
      {
        title: "Basic Button Group",
        description: "Grouped actions",
        code: `import { ButtonGroup, ButtonGroupText } from 'alize-ui';
import { Button } from 'alize-ui';

<ButtonGroup>
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>`
      }
    ],
    do: [
      "Use for related actions",
      "Maintain consistent button sizes",
      "Use outline variant for less emphasis"
    ],
    dont: [
      "Don't mix too many variants",
      "Don't use for unrelated actions"
    ],
    accessibility: `- Proper grouping role
- Consistent focus order
- Keyboard navigation`,
    tokens: [
      { name: "stroke-default", category: "stroke", cssVariable: "var(--semantic-stroke-default)", usage: "Button borders" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-03-01",
        type: "added",
        description: "Initial release of Button Group"
      }
    ]
  },

  // ============================================================================
  // ORGANISMS
  // ============================================================================

  {
    title: "Dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    category: "organisms",
    component: "Dialog",
    importPath: "alize-ui",
    props: [
      { name: "open", type: "boolean", required: false, description: "Controlled open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", required: false, description: "Open state callback" }
    ],
    examples: [
      {
        title: "Basic Dialog",
        description: "Modal with form",
        code: `import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from 'alize-ui';
import { Button } from 'alize-ui';
import { Input } from 'alize-ui';
import { Label } from 'alize-ui';

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="John Doe" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
      }
    ],
    do: [
      "Use for important user decisions",
      "Provide clear actions",
      "Include close button"
    ],
    dont: [
      "Don't overuse dialogs",
      "Don't use for simple confirmations (use Alert Dialog)"
    ],
    accessibility: `- Focus trap
- Escape to close
- ARIA dialog role`,
    tokens: [
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Dialog background" },
      { name: "shadow-lg", category: "shadow", cssVariable: "var(--shadow-lg)", usage: "Dialog shadow" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Dialog"
      }
    ]
  },
  {
    title: "Alert Dialog",
    description: "A modal dialog for confirming potentially destructive actions.",
    category: "organisms",
    component: "AlertDialog",
    importPath: "alize-ui",
    props: [],
    examples: [
      {
        title: "Confirmation Dialog",
        description: "Delete confirmation",
        code: `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from 'alize-ui';
import { Button } from 'alize-ui';

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`
      }
    ],
    do: [
      "Use for destructive action confirmation",
      "Clearly explain consequences",
      "Provide clear cancel option"
    ],
    dont: [
      "Don't use for non-destructive actions",
      "Don't use for informational messages"
    ],
    accessibility: `- Focus trap
- Requires explicit action
- ARIA alertdialog role`,
    tokens: [
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Dialog background" },
      { name: "text-rag-danger-default", category: "text", cssVariable: "var(--semantic-text-rag-danger-default)", usage: "Warning text" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Alert Dialog"
      }
    ]
  },
  {
    title: "Sheet",
    description: "A slide-out panel that appears from the edge of the screen.",
    category: "organisms",
    component: "Sheet",
    importPath: "alize-ui",
    props: [
      { name: "side", type: "top | right | bottom | left", default: "right", required: false, description: "Side to appear from" }
    ],
    examples: [
      {
        title: "Side Sheet",
        description: "Panel from the side",
        code: `import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from 'alize-ui';
import { Button } from 'alize-ui';

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <p>Sheet content goes here.</p>
    </div>
  </SheetContent>
</Sheet>`
      }
    ],
    do: [
      "Use for secondary content",
      "Use for forms and settings",
      "Provide clear close action"
    ],
    dont: [
      "Don't use for critical decisions (use Dialog)",
      "Don't make sheets too wide"
    ],
    accessibility: `- Focus trap when open
- Escape to close
- ARIA dialog role`,
    tokens: [
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Sheet background" },
      { name: "shadow-lg", category: "shadow", cssVariable: "var(--shadow-lg)", usage: "Sheet shadow" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Sheet"
      }
    ]
  },
  {
    title: "Table",
    description: "A responsive table component for displaying tabular data.",
    category: "organisms",
    component: "Table",
    importPath: "alize-ui",
    props: [],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Table component"
      }
    ],
    examples: [
      {
        title: "Basic Table",
        description: "Simple data table",
        code: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'alize-ui';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>Active</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>Active</TableCell>
      <TableCell>User</TableCell>
    </TableRow>
  </TableBody>
</Table>`
      }
    ],
    do: [
      "Use for structured data",
      "Include sortable columns when needed",
      "Provide row actions"
    ],
    dont: [
      "Don't use tables for layout",
      "Don't hide important columns"
    ],
    accessibility: `- Proper table semantics
- Sortable column announcements
- Keyboard navigation`,
    tokens: [
      { name: "stroke-subdued", category: "stroke", cssVariable: "var(--semantic-stroke-subdued)", usage: "Row borders" },
      { name: "surface-secondary", category: "surface", cssVariable: "var(--semantic-surface-secondary)", usage: "Header background" }
    ]
  },
  {
    title: "Calendar",
    description: "A calendar component for date selection.",
    category: "organisms",
    component: "Calendar",
    importPath: "alize-ui",
    props: [
      { name: "selected", type: "Date | Date[]", required: false, description: "Selected date(s)" },
      { name: "onSelect", type: "(date: Date) => void", required: false, description: "Selection callback" },
      { name: "mode", type: "single | multiple | range", default: "single", required: false, description: "Selection mode" }
    ],
    examples: [
      {
        title: "Basic Calendar",
        description: "Date picker calendar",
        code: `import { Calendar } from 'alize-ui';
import { useState } from 'react';

const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`
      }
    ],
    do: [
      "Use for date selection",
      "Show current date clearly",
      "Support keyboard navigation"
    ],
    dont: [
      "Don't use for time selection",
      "Don't hide navigation controls"
    ],
    accessibility: `- Full keyboard navigation
- Date announcements
- Proper ARIA labels`,
    tokens: [
      { name: "surface-interaction-strong", category: "surface", cssVariable: "var(--semantic-surface-interaction-strong)", usage: "Selected date" },
      { name: "text-subdued", category: "text", cssVariable: "var(--semantic-text-subdued)", usage: "Disabled dates" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Calendar component"
      }
    ]
  },
  {
    title: "Carousel",
    description: "A slideshow component for cycling through elements.",
    category: "organisms",
    component: "Carousel",
    importPath: "alize-ui",
    props: [
      { name: "orientation", type: "horizontal | vertical", default: "horizontal", required: false, description: "Slide direction" },
      { name: "opts", type: "CarouselOptions", required: false, description: "Embla carousel options" }
    ],
    examples: [
      {
        title: "Basic Carousel",
        description: "Image slideshow",
        code: `import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from 'alize-ui';
import { Card, CardContent } from 'alize-ui';

<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {[1, 2, 3, 4, 5].map((num) => (
      <CarouselItem key={num}>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{num}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`
      }
    ],
    do: [
      "Use for showcasing content",
      "Provide navigation controls",
      "Include pagination indicators"
    ],
    dont: [
      "Don't auto-rotate without user control",
      "Don't hide important content in carousels"
    ],
    accessibility: `- Keyboard navigation
- Pause on hover
- Slide announcements`,
    tokens: [
      { name: "stroke-default", category: "stroke", cssVariable: "var(--semantic-stroke-default)", usage: "Navigation button borders" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Carousel"
      }
    ]
  },
  {
    title: "Collapsible",
    description: "A component that can be expanded or collapsed to show or hide content.",
    category: "molecules",
    component: "Collapsible",
    importPath: "alize-ui",
    props: [
      { name: "open", type: "boolean", required: false, description: "Controlled open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", required: false, description: "Open state callback" },
      { name: "disabled", type: "boolean", default: "false", required: false, description: "Whether disabled" }
    ],
    examples: [
      {
        title: "Basic Collapsible",
        description: "Simple expandable section",
        code: `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from 'alize-ui';
import { Button } from 'alize-ui';

<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost">Toggle Content</Button>
  </CollapsibleTrigger>
  <CollapsibleContent className="mt-2">
    <p className="text-sm text-muted-foreground">
      This content can be expanded or collapsed.
    </p>
  </CollapsibleContent>
</Collapsible>`
      }
    ],
    do: [
      "Use for optional content",
      "Provide clear toggle affordance",
      "Animate transitions smoothly"
    ],
    dont: [
      "Don't hide critical information",
      "Don't use for complex layouts"
    ],
    accessibility: `- ARIA expanded state
- Keyboard toggle support
- Focus management`,
    tokens: [
      { name: "animation-transition", category: "animation", cssVariable: "transition", usage: "Expand/collapse animation" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Collapsible"
      }
    ]
  },
  {
    title: "Hover Card",
    description: "A card that appears when hovering over a trigger element.",
    category: "molecules",
    component: "HoverCard",
    importPath: "alize-ui",
    props: [
      { name: "openDelay", type: "number", default: "700", required: false, description: "Delay before opening (ms)" },
      { name: "closeDelay", type: "number", default: "300", required: false, description: "Delay before closing (ms)" }
    ],
    examples: [
      {
        title: "Basic Hover Card",
        description: "Card on hover",
        code: `import { HoverCard, HoverCardContent, HoverCardTrigger } from 'alize-ui';
import { Avatar, AvatarFallback, AvatarImage } from 'alize-ui';

<HoverCard>
  <HoverCardTrigger asChild>
    <span className="text-sm font-medium underline cursor-pointer">@username</span>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="/avatar.png" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@username</h4>
        <p className="text-sm text-muted-foreground">User profile description</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`
      }
    ],
    do: [
      "Use for supplementary info",
      "Keep content brief",
      "Provide appropriate delays"
    ],
    dont: [
      "Don't use for critical info",
      "Don't make cards too large"
    ],
    accessibility: `- Mouse and keyboard support
- Proper focus management
- Content accessible to screen readers`,
    tokens: [
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Card background" },
      { name: "shadow-md", category: "shadow", cssVariable: "var(--shadow-md)", usage: "Card shadow" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Hover Card"
      }
    ]
  },
  {
    title: "Context Menu",
    description: "A menu that appears on right-click or long-press.",
    category: "molecules",
    component: "ContextMenu",
    importPath: "alize-ui",
    props: [],
    examples: [
      {
        title: "Basic Context Menu",
        description: "Right-click menu",
        code: `import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from 'alize-ui';

<ContextMenu>
  <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Edit</ContextMenuItem>
    <ContextMenuItem>Duplicate</ContextMenuItem>
    <ContextMenuItem>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`
      }
    ],
    do: [
      "Use for contextual actions",
      "Group related actions",
      "Include keyboard shortcuts"
    ],
    dont: [
      "Don't use as primary navigation",
      "Don't hide essential actions"
    ],
    accessibility: `- Full keyboard navigation
- ARIA menu roles
- Screen reader announcements`,
    tokens: [
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Menu background" },
      { name: "surface-interaction-whisper", category: "surface", cssVariable: "var(--semantic-surface-interaction-whisper)", usage: "Item hover" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Context Menu"
      }
    ]
  },
  {
    title: "Drawer",
    description: "A slide-out panel from the bottom of the screen, ideal for mobile interactions.",
    category: "organisms",
    component: "Drawer",
    importPath: "alize-ui",
    props: [
      { name: "open", type: "boolean", required: false, description: "Controlled open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", required: false, description: "Open state callback" }
    ],
    examples: [
      {
        title: "Basic Drawer",
        description: "Bottom sheet drawer",
        code: `import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from 'alize-ui';
import { Button } from 'alize-ui';

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Edit Profile</DrawerTitle>
      <DrawerDescription>Make changes to your profile here.</DrawerDescription>
    </DrawerHeader>
    <div className="p-4">
      <p className="text-sm text-muted-foreground">Drawer content goes here.</p>
    </div>
  </DrawerContent>
</Drawer>`
      }
    ],
    do: [
      "Use for mobile-first interactions",
      "Use for bottom sheets",
      "Provide swipe to close"
    ],
    dont: [
      "Don't use for desktop-first designs (use Sheet)",
      "Don't make drawers too tall"
    ],
    accessibility: `- Focus trap when open
- Escape and swipe to close
- ARIA dialog role`,
    tokens: [
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Drawer background" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Drawer"
      }
    ]
  },
  {
    title: "Scroll Area",
    description: "A scrollable area with custom scrollbars.",
    category: "organisms",
    component: "ScrollArea",
    importPath: "alize-ui",
    props: [
      { name: "orientation", type: "horizontal | vertical", default: "vertical", required: false, description: "Scroll direction" }
    ],
    examples: [
      {
        title: "Basic Scroll Area",
        description: "Custom scrollable container",
        code: `import { ScrollArea } from 'alize-ui';

<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium">Tags</h4>
    {Array.from({ length: 50 }).map((_, i) => (
      <div key={i} className="text-sm py-1">Tag {i + 1}</div>
    ))}
  </div>
</ScrollArea>`
      }
    ],
    do: [
      "Use for long content lists",
      "Maintain consistent styling",
      "Show scroll position indicators"
    ],
    dont: [
      "Don't use for short content",
      "Don't hide scrollbars when scrolling is needed"
    ],
    accessibility: `- Keyboard scrolling support
- Focus within scrollable area
- Screen reader compatible`,
    tokens: [
      { name: "surface-secondary", category: "surface", cssVariable: "var(--semantic-surface-secondary)", usage: "Scrollbar track" },
      { name: "surface-interaction-default", category: "surface", cssVariable: "var(--semantic-surface-interaction-default)", usage: "Scrollbar thumb" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Scroll Area"
      }
    ]
  },
  {
    title: "Date Picker",
    description: "A date input with calendar popup for selecting dates.",
    category: "organisms",
    component: "DatePicker",
    importPath: "alize-ui",
    props: [
      { name: "date", type: "Date", required: false, description: "Selected date" },
      { name: "onDateChange", type: "(date: Date) => void", required: false, description: "Date change callback" }
    ],
    examples: [
      {
        title: "Basic Date Picker",
        description: "Date selection with calendar",
        code: `import { DatePicker } from 'alize-ui';
import { useState } from 'react';

const [date, setDate] = useState<Date>();

<DatePicker date={date} onDateChange={setDate} />`
      }
    ],
    do: [
      "Use for date input fields",
      "Show format hints",
      "Support manual input"
    ],
    dont: [
      "Don't use for date ranges (use range picker)",
      "Don't hide the calendar trigger"
    ],
    accessibility: `- Keyboard date selection
- Screen reader announcements
- Proper ARIA labels`,
    tokens: [
      { name: "surface-interaction-strong", category: "surface", cssVariable: "var(--semantic-surface-interaction-strong)", usage: "Selected date" },
      { name: "stroke-default", category: "stroke", cssVariable: "var(--semantic-stroke-default)", usage: "Input border" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Date Picker"
      }
    ]
  },
  {
    title: "Toast",
    description: "Brief notification messages that appear temporarily.",
    category: "organisms",
    component: "Toast",
    importPath: "alize-ui",
    props: [],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Toast notification component"
      }
    ],
    examples: [
      {
        title: "Basic Toast",
        description: "Show notification",
        code: `import { toast } from 'sonner';
import { Button } from 'alize-ui';

<Button onClick={() => toast("Event created successfully!")}>
  Show Toast
</Button>`
      }
    ],
    do: [
      "Use for non-critical notifications",
      "Keep messages brief",
      "Auto-dismiss after timeout"
    ],
    dont: [
      "Don't use for critical errors",
      "Don't stack too many toasts"
    ],
    accessibility: `- ARIA live regions
- Accessible to screen readers
- Dismissible with keyboard`,
    tokens: [
      { name: "surface-default", category: "surface", cssVariable: "var(--semantic-surface-default)", usage: "Toast background" },
      { name: "shadow-lg", category: "shadow", cssVariable: "var(--shadow-lg)", usage: "Toast shadow" }
    ]
  },
  {
    title: "Input OTP",
    description: "A one-time password input with individual character fields.",
    category: "molecules",
    component: "InputOTP",
    importPath: "alize-ui",
    props: [
      { name: "maxLength", type: "number", required: true, description: "Number of OTP digits" },
      { name: "value", type: "string", required: false, description: "Controlled value" },
      { name: "onChange", type: "(value: string) => void", required: false, description: "Value change callback" }
    ],
    examples: [
      {
        title: "Basic OTP Input",
        description: "6-digit OTP field",
        code: `import { InputOTP, InputOTPGroup, InputOTPSlot } from 'alize-ui';

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`
      }
    ],
    do: [
      "Use for verification codes",
      "Auto-focus next field",
      "Support paste"
    ],
    dont: [
      "Don't use for regular text input",
      "Don't make slots too small"
    ],
    accessibility: `- Keyboard navigation
- Focus management
- Screen reader compatible`,
    tokens: [
      { name: "stroke-default", category: "stroke", cssVariable: "var(--semantic-stroke-default)", usage: "Slot borders" },
      { name: "surface-interaction-strong", category: "surface", cssVariable: "var(--semantic-surface-interaction-strong)", usage: "Active slot indicator" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Input OTP"
      }
    ]
  },
  {
    title: "Resizable",
    description: "A component that allows resizing panels.",
    category: "organisms",
    component: "Resizable",
    importPath: "alize-ui",
    props: [
      { name: "direction", type: "horizontal | vertical", default: "horizontal", required: false, description: "Resize direction" }
    ],
    examples: [
      {
        title: "Basic Resizable",
        description: "Resizable panels",
        code: `import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from 'alize-ui';

<ResizablePanelGroup direction="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Panel One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Panel Two</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`
      }
    ],
    do: [
      "Use for adjustable layouts",
      "Provide clear drag handles",
      "Remember panel sizes"
    ],
    dont: [
      "Don't use for fixed layouts",
      "Don't make handles too small"
    ],
    accessibility: `- Keyboard resizing support
- ARIA slider role
- Focus indicators`,
    tokens: [
      { name: "stroke-subdued", category: "stroke", cssVariable: "var(--semantic-stroke-subdued)", usage: "Panel borders" },
      { name: "surface-secondary", category: "surface", cssVariable: "var(--semantic-surface-secondary)", usage: "Handle background" }
    ],
    changelog: [
      {
        version: "0.1.0",
        date: "2024-01-15",
        type: "added",
        description: "Initial release of Resizable"
      }
    ]
  },
  {
    title: "Data Table",
    description: "A flexible, headless data table built on TanStack Table that uses existing shadcn/ui components. Provides sorting, filtering, pagination, and row selection while maintaining full design consistency with the rest of the library.",
    category: "organisms",
    component: "DataTable",
    importPath: "alize-ui",
    props: [
      {
        name: "columns",
        type: "ColumnDef<TData, TValue>[]",
        required: true,
        description: "Column definitions using TanStack Table's ColumnDef type"
      },
      {
        name: "data",
        type: "TData[]",
        required: true,
        description: "Array of data objects to display"
      },
      {
        name: "enableRowSelection",
        type: "boolean",
        default: "false",
        required: false,
        description: "Enable row selection with checkboxes"
      },
      {
        name: "enableFiltering",
        type: "boolean",
        default: "false",
        required: false,
        description: "Show filter input above the table"
      },
      {
        name: "filterColumn",
        type: "string",
        required: false,
        description: "Column key to filter by (default: first column)"
      },
      {
        name: "filterPlaceholder",
        type: "string",
        default: "Filter...",
        required: false,
        description: "Placeholder text for filter input"
      },
      {
        name: "enablePagination",
        type: "boolean",
        default: "false",
        required: false,
        description: "Enable pagination controls"
      },
      {
        name: "pageSize",
        type: "number",
        default: "10",
        required: false,
        description: "Number of rows per page"
      },
      {
        name: "emptyMessage",
        type: "string",
        default: "No results.",
        required: false,
        description: "Message shown when no data"
      },
      {
        name: "onRowSelectionChange",
        type: "(selectedRows: TData[]) => void",
        required: false,
        description: "Callback when row selection changes"
      },
      {
        name: "enableGlobalFilter",
        type: "boolean",
        default: "false",
        required: false,
        description: "Enable global search across all columns"
      },
      {
        name: "enableColumnVisibility",
        type: "boolean",
        default: "false",
        required: false,
        description: "Show column visibility toggle dropdown"
      },
      {
        name: "enableColumnReordering",
        type: "boolean",
        default: "false",
        required: false,
        description: "Enable drag-and-drop column reordering"
      },
      {
        name: "enableColumnPinning",
        type: "boolean",
        default: "false",
        required: false,
        description: "Enable column pinning (sticky columns on left)"
      },
      {
        name: "pinnedColumns",
        type: "string[]",
        default: "[]",
        required: false,
        description: "Array of column IDs to pin to the left initially"
      },
      {
        name: "variant",
        type: '"bordered" | "plain"',
        default: '"bordered"',
        required: false,
        description: "Table border style - bordered has borders around all edges, plain only has row separators"
      },
      {
        name: "density",
        type: '"default" | "comfortable"',
        default: '"default"',
        required: false,
        description: "Row density - controls row height and padding"
      },
      {
        name: "pageSizeOptions",
        type: "number[]",
        default: "[5, 10, 20, 50]",
        required: false,
        description: "Available page size options"
      }
    ],
    examples: [
      {
        title: "Basic Table",
        description: "Simple table with columns and data",
        code: "import { DataTable } from 'alize-ui';\nimport type { ColumnDef } from 'alize-ui';\n\nconst columns: ColumnDef<Employee>[] = [\n  { accessorKey: 'name', header: 'Name' },\n  { accessorKey: 'email', header: 'Email' },\n  { accessorKey: 'department', header: 'Department' },\n  { accessorKey: 'role', header: 'Role' },\n  { accessorKey: 'status', header: 'Status' },\n];\n\n<DataTable columns={columns} data={employees} />"
      },
      {
        title: "With Sorting",
        description: "Add sortable headers using the SortableHeader component",
        code: "import { DataTable, SortableHeader } from 'alize-ui';\n\nconst columns: ColumnDef<Employee>[] = [\n  {\n    accessorKey: 'name',\n    header: ({ column }) => <SortableHeader column={column}>Name</SortableHeader>,\n  },\n  {\n    accessorKey: 'salary',\n    header: ({ column }) => <SortableHeader column={column}>Salary</SortableHeader>,\n    cell: ({ row }) => formatCurrency(row.getValue('salary')),\n  },\n];\n\n<DataTable columns={columns} data={employees} />"
      },
      {
        title: "With Pagination",
        description: "Enable pagination with page size selector",
        code: "<DataTable\n  columns={columns}\n  data={employees}\n  enablePagination\n  pageSize={10}\n  pageSizeOptions={[5, 10, 20, 50]}\n/>"
      },
      {
        title: "With Filtering",
        description: "Global search across all columns",
        code: "<DataTable\n  columns={columns}\n  data={employees}\n  enableGlobalFilter\n/>"
      },
      {
        title: "Row Selection",
        description: "Enable row selection with checkboxes",
        code: "import { DataTable, createSelectionColumn } from 'alize-ui';\n\nconst columns: ColumnDef<Employee>[] = [\n  createSelectionColumn<Employee>(),\n  { accessorKey: 'name', header: 'Name' },\n  { accessorKey: 'email', header: 'Email' },\n];\n\n<DataTable\n  columns={columns}\n  data={employees}\n  enableRowSelection\n  onRowSelectionChange={(rows) => console.log(rows)}\n/>"
      },
      {
        title: "Column Visibility",
        description: "Toggle column visibility with dropdown",
        code: "<DataTable\n  columns={columns}\n  data={employees}\n  enableColumnVisibility\n/>"
      },
      {
        title: "Column Reordering",
        description: "Drag and drop to reorder columns",
        code: "<DataTable\n  columns={columns}\n  data={employees}\n  enableColumnReordering\n/>"
      },
      {
        title: "Full Featured",
        description: "All features combined",
        code: "<DataTable\n  columns={columns}\n  data={employees}\n  enableRowSelection\n  enableGlobalFilter\n  enablePagination\n  enableColumnVisibility\n  enableColumnReordering\n  pageSize={10}\n/>"
      },
      {
        title: "With Sparklines",
        description: "Embed sparkline charts in table cells for dashboards",
        code: "import { DataTable, Sparkline, Sparkbar, SparkTrend, SparkBullet } from 'alize-ui';\n\nconst columns: ColumnDef<Server>[] = [\n  { accessorKey: 'name', header: 'Server' },\n  {\n    accessorKey: 'cpuHistory',\n    header: 'CPU',\n    cell: ({ row }) => (\n      <Sparkline\n        data={row.getValue('cpuHistory')}\n        type=\"area\"\n        width={90}\n        height={28}\n      />\n    ),\n  },\n  {\n    accessorKey: 'memoryHistory',\n    header: 'Memory',\n    cell: ({ row }) => (\n      <Sparkbar\n        data={row.getValue('memoryHistory')}\n        thresholds={{ warning: 70, danger: 85 }}\n        width={90}\n        height={28}\n      />\n    ),\n  },\n  {\n    accessorKey: 'requests',\n    header: 'Requests',\n    cell: ({ row }) => (\n      <SparkTrend\n        value={row.getValue('requests')}\n        history={row.original.requestsHistory}\n        formatValue={(v) => v.toLocaleString()}\n      />\n    ),\n  },\n];\n\n<DataTable columns={columns} data={servers} />"
      }
    ],
    bestPractices: [
      "Use SortableHeader for columns that should be sortable",
      "Use createSelectionColumn() helper for row selection",
      "Set filterColumn to the most commonly searched field",
      "Use pageSize appropriate for your viewport size"
    ],
    do: [
      "Use for moderate-sized datasets (< 10,000 rows)",
      "Combine with existing shadcn/ui components for custom cells",
      "Use TypeScript generics for type-safe column definitions",
      "Leverage TanStack Table's full API for advanced customization"
    ],
    dont: [
      "Don't use for very large datasets (use AG Grid or virtualized solutions)",
      "Don't forget to memoize columns to prevent unnecessary re-renders",
      "Don't mix accessorKey and accessorFn in the same column"
    ],
    accessibility: "- Full keyboard navigation\n- ARIA labels on checkboxes\n- Focus management\n- Screen reader compatible",
    tokens: [
      { name: "card", category: "surface", cssVariable: "var(--card)", usage: "Table background" },
      { name: "card-foreground", category: "text", cssVariable: "var(--card-foreground)", usage: "Table text" },
      { name: "border", category: "stroke", cssVariable: "var(--border)", usage: "Table borders" },
      { name: "muted", category: "surface", cssVariable: "var(--muted)", usage: "Header background" },
      { name: "muted-foreground", category: "text", cssVariable: "var(--muted-foreground)", usage: "Header text" },
      { name: "accent", category: "surface", cssVariable: "var(--accent)", usage: "Row hover and selection" }
    ],
    interactiveProps: [
      {
        name: "sorting",
        label: "Sorting",
        controlType: "boolean",
        defaultValue: "true"
      },
      {
        name: "filtering",
        label: "Global Filter",
        controlType: "boolean",
        defaultValue: "true"
      },
      {
        name: "pagination",
        label: "Pagination",
        controlType: "boolean",
        defaultValue: "true"
      },
      {
        name: "rowSelection",
        label: "Row Selection",
        controlType: "boolean",
        defaultValue: "true"
      },
      {
        name: "columnVisibility",
        label: "Column Visibility",
        controlType: "boolean",
        defaultValue: "true"
      },
      {
        name: "columnReordering",
        label: "Column Reordering",
        controlType: "boolean",
        defaultValue: "false"
      },
      {
        name: "columnPinning",
        label: "Column Pinning",
        controlType: "boolean",
        defaultValue: "true"
      },
      {
        name: "variant",
        label: "Variant",
        controlType: "select",
        options: [
          { value: "bordered", label: "Bordered" },
          { value: "plain", label: "Plain" }
        ],
        defaultValue: "bordered"
      },
      {
        name: "density",
        label: "Density",
        controlType: "select",
        options: [
          { value: "default", label: "Default" },
          { value: "comfortable", label: "Comfortable" }
        ],
        defaultValue: "default"
      }
    ],
    changelog: [
      {
        version: "0.2.0",
        date: "2025-12-10",
        type: "added",
        description: "Initial release of DataTable with sorting, filtering, pagination, row selection, column visibility, and column reordering"
      }
    ]
  },
  {
    title: "Data List",
    description: "A flexible list component for displaying items with thumbnails, titles, subtitles, and actions. Perfect for property listings, contact lists, file browsers, and other card-like list views.",
    category: "organisms",
    component: "DataList",
    importPath: "alize-ui",
    props: [
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "DataListItem or DataListGroup components"
      },
      {
        name: "density",
        type: '"default" | "comfortable" | "compact"',
        default: '"default"',
        required: false,
        description: "Row density - controls item height and padding"
      },
      {
        name: "dividers",
        type: "boolean",
        default: "true",
        required: false,
        description: "Whether to show dividers between items"
      },
      {
        name: "bordered",
        type: "boolean",
        default: "false",
        required: false,
        description: "Whether the list has a border and rounded corners"
      }
    ],
    examples: [
      {
        title: "File Manager",
        description: "List files with type icons, sizes, and sharing indicators",
        code: "import { DataList, DataListItem } from 'alize-ui';\n\nconst FileIcon = ({ type }) => (\n  <div className={cn('flex h-10 w-10 items-center justify-center rounded-lg bg-muted', iconColors[type])}>\n    <MaterialSymbol name={iconNames[type]} size={24} />\n  </div>\n);\n\n<DataList bordered>\n  {files.map((file) => (\n    <DataListItem\n      key={file.id}\n      id={file.id}\n      title={file.name}\n      subtitle={`${file.size} • ${file.modified}`}\n      thumbnail={<FileIcon type={file.type} />}\n      metadata={file.shared && <MaterialSymbol name=\"group\" size={16} />}\n      actions={[\n        { label: 'Download', icon: 'download', onClick: () => {} },\n        { label: 'Share', icon: 'share', onClick: () => {} },\n        { label: 'Delete', icon: 'delete', onClick: () => {}, destructive: true },\n      ]}\n    />\n  ))}\n</DataList>"
      },
      {
        title: "Notification Center",
        description: "Notifications with unread indicators and avatars",
        code: "<DataList>\n  {notifications.map((notif) => (\n    <DataListItem\n      key={notif.id}\n      id={notif.id}\n      title={notif.title}\n      subtitle={notif.message}\n      thumbnail={notif.avatar}\n      className={cn(!notif.read && 'bg-blue-50 dark:bg-blue-950/20')}\n      metadata={\n        <div className=\"flex items-center gap-2\">\n          <span className=\"text-xs\">{notif.time}</span>\n          {!notif.read && <div className=\"h-2 w-2 rounded-full bg-blue-500\" />}\n        </div>\n      }\n      actions={[\n        { label: 'Mark as read', icon: 'check', onClick: () => {} },\n        { label: 'Delete', icon: 'delete', onClick: () => {}, destructive: true },\n      ]}\n    />\n  ))}\n</DataList>"
      },
      {
        title: "Product Catalog",
        description: "E-commerce products with pricing, stock, and ratings",
        code: "<DataList bordered density=\"comfortable\">\n  {products.map((product) => (\n    <DataListItem\n      key={product.id}\n      id={product.id}\n      title={product.name}\n      thumbnail={product.image}\n      actions={productActions}\n    >\n      <div className=\"space-y-1\">\n        <div className=\"font-medium\">{product.name}</div>\n        <div className=\"flex items-center gap-3 text-sm\">\n          <span className=\"font-semibold\">${product.price}</span>\n          <span className=\"text-muted-foreground\">{product.category}</span>\n          <div className=\"flex items-center gap-1\">\n            <MaterialSymbol name=\"star\" size={14} className=\"text-amber-500\" />\n            <span>{product.rating}</span>\n          </div>\n        </div>\n        <Badge variant={product.stock > 0 ? 'outline' : 'destructive'}>\n          {product.stock > 0 ? 'In stock' : 'Out of stock'}\n        </Badge>\n      </div>\n    </DataListItem>\n  ))}\n</DataList>"
      },
      {
        title: "Task List",
        description: "Todo items with priority indicators and due dates",
        code: "const PriorityIndicator = ({ priority }) => (\n  <div className={cn('h-full w-1 rounded-full', priorityColors[priority])} />\n);\n\n<DataList bordered>\n  {tasks.map((task) => (\n    <DataListItem\n      key={task.id}\n      id={task.id}\n      title={task.title}\n      selectable\n      selected={completedTasks.has(task.id)}\n      onSelectChange={(checked) => toggleTask(task.id, checked)}\n      thumbnail={<PriorityIndicator priority={task.priority} />}\n    >\n      <div className={cn('space-y-1', isCompleted && 'opacity-50 line-through')}>\n        <div className=\"font-medium\">{task.title}</div>\n        <div className=\"flex items-center gap-3 text-xs text-muted-foreground\">\n          <span>{task.project}</span>\n          <span className={cn(task.dueDate === 'Overdue' && 'text-red-500')}>\n            {task.dueDate}\n          </span>\n        </div>\n      </div>\n    </DataListItem>\n  ))}\n</DataList>"
      },
      {
        title: "Email Inbox",
        description: "Messages with subject preview, stars, and attachments",
        code: "<DataList>\n  {messages.map((msg) => (\n    <DataListItem\n      key={msg.id}\n      id={msg.id}\n      title={msg.from}\n      thumbnail={msg.avatar}\n      className={cn(msg.unread && 'bg-blue-50')}\n      actions={messageActions}\n    >\n      <div className=\"space-y-0.5 min-w-0\">\n        <div className=\"flex items-center gap-2\">\n          <span className={cn('truncate', msg.unread && 'font-semibold')}>{msg.from}</span>\n          {msg.starred && <MaterialSymbol name=\"star\" size={14} className=\"text-amber-500\" />}\n          {msg.hasAttachment && <MaterialSymbol name=\"attach_file\" size={14} />}\n          <span className=\"text-xs text-muted-foreground ml-auto\">{msg.time}</span>\n        </div>\n        <div className=\"text-sm truncate\">{msg.subject}</div>\n        <div className=\"text-xs text-muted-foreground truncate\">{msg.preview}</div>\n      </div>\n    </DataListItem>\n  ))}\n</DataList>"
      },
      {
        title: "Media Gallery",
        description: "Videos and images with duration, resolution, and size",
        code: "const MediaThumbnail = ({ item }) => (\n  <div className=\"relative h-16 w-24 overflow-hidden rounded-lg\">\n    <img src={item.thumbnail} className=\"h-full w-full object-cover\" />\n    {item.type === 'video' && (\n      <>\n        <div className=\"absolute inset-0 flex items-center justify-center bg-black/30\">\n          <MaterialSymbol name=\"play_circle\" size={24} className=\"text-white\" />\n        </div>\n        <div className=\"absolute bottom-1 right-1 rounded bg-black/70 px-1 text-[10px] text-white\">\n          {item.duration}\n        </div>\n      </>\n    )}\n  </div>\n);\n\n<DataList bordered density=\"comfortable\">\n  {mediaItems.map((item) => (\n    <DataListItem\n      key={item.id}\n      id={item.id}\n      title={item.name}\n      thumbnail={<MediaThumbnail item={item} />}\n      actions={mediaActions}\n    >\n      <div className=\"space-y-1\">\n        <div className=\"font-medium\">{item.name}</div>\n        <div className=\"flex gap-3 text-xs text-muted-foreground\">\n          <span>{item.resolution}</span>\n          <span>{item.size}</span>\n          <span>{item.date}</span>\n        </div>\n      </div>\n    </DataListItem>\n  ))}\n</DataList>"
      },
      {
        title: "Grouped List",
        description: "Items organized into collapsible groups",
        code: "<DataList bordered>\n  <DataListGroup title=\"Active\" icon=\"check_circle\" collapsible>\n    {activeItems.map((item) => (\n      <DataListItem key={item.id} {...item} />\n    ))}\n  </DataListGroup>\n  <DataListGroup title=\"Pending\" icon=\"pending\" collapsible>\n    {pendingItems.map((item) => (\n      <DataListItem key={item.id} {...item} />\n    ))}\n  </DataListGroup>\n</DataList>"
      },
      {
        title: "Empty State",
        description: "Show when there are no items",
        code: "<DataList bordered>\n  <DataListEmpty\n    icon=\"folder_open\"\n    title=\"No files here yet\"\n    description=\"Upload your first file or create a new folder.\"\n    action={\n      <div className=\"flex gap-2\">\n        <Button><MaterialSymbol name=\"upload\" /> Upload</Button>\n        <Button variant=\"outline\"><MaterialSymbol name=\"create_new_folder\" /> New Folder</Button>\n      </div>\n    }\n  />\n</DataList>"
      },
      {
        title: "Loading State",
        description: "Skeleton loading placeholder",
        code: "<DataList bordered>\n  <DataListSkeleton count={4} showThumbnail />\n</DataList>"
      }
    ],
    bestPractices: [
      "Use thumbnails consistently - either all items have them or none do",
      "Keep action menus to 4-5 options maximum",
      "Use groups to organize large lists logically",
      "Use the comfortable density for touch interfaces"
    ],
    do: [
      "Use for displaying lists of similar items with rich content",
      "Use groups to categorize items logically",
      "Provide meaningful empty states",
      "Include loading skeletons for async data"
    ],
    dont: [
      "Don't use for tabular data with many columns - use DataTable instead",
      "Don't nest DataLists within DataLists",
      "Don't use for navigation - use NavigationMenu instead"
    ],
    accessibility: `- Uses proper list semantics (role="list", role="listitem")
- Expandable items have aria-expanded attributes
- Selection checkboxes have proper labels
- Action menus are keyboard accessible`,
    interactiveProps: [
      {
        name: "useCase",
        label: "Use Case",
        controlType: "select",
        options: [
          { value: "files", label: "📁 File Manager" },
          { value: "notifications", label: "🔔 Notifications" },
          { value: "products", label: "🛒 Products" },
          { value: "tasks", label: "✅ Tasks" },
          { value: "messages", label: "✉️ Messages" },
          { value: "media", label: "🎬 Media Gallery" }
        ],
        defaultValue: "files"
      }
    ],
    changelog: [
      {
        version: "0.2.0",
        date: "2025-12-10",
        type: "added",
        description: "Initial release of DataList with grouping, selection, expandable items, and custom content support"
      }
    ]
  }
];

