import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    charts: "src/charts.ts",
  },
  format: ["esm", "cjs"],
  dts: {
    resolve: true,
  },
  outDir: "dist",
  tsconfig: "./tsconfig.build.json",
  // Mark all peer dependencies as external - they will be provided by the consumer
  external: [
    // React
    "react",
    "react-dom",
    "react/jsx-runtime",
    
    // Forms
    "react-hook-form",
    "@hookform/resolvers",
    "zod",
    
    // Radix UI
    "@radix-ui/react-accordion",
    "@radix-ui/react-alert-dialog",
    "@radix-ui/react-aspect-ratio",
    "@radix-ui/react-avatar",
    "@radix-ui/react-checkbox",
    "@radix-ui/react-collapsible",
    "@radix-ui/react-context-menu",
    "@radix-ui/react-dialog",
    "@radix-ui/react-dropdown-menu",
    "@radix-ui/react-hover-card",
    "@radix-ui/react-label",
    "@radix-ui/react-menubar",
    "@radix-ui/react-navigation-menu",
    "@radix-ui/react-popover",
    "@radix-ui/react-progress",
    "@radix-ui/react-radio-group",
    "@radix-ui/react-scroll-area",
    "@radix-ui/react-select",
    "@radix-ui/react-separator",
    "@radix-ui/react-slider",
    "@radix-ui/react-slot",
    "@radix-ui/react-switch",
    "@radix-ui/react-tabs",
    "@radix-ui/react-toggle",
    "@radix-ui/react-toggle-group",
    "@radix-ui/react-tooltip",
    
    // UI Libraries
    "cmdk",
    "input-otp",
    "vaul",
    "sonner",
    "embla-carousel-react",
    "react-resizable-panels",
    "lucide-react",
    
    // Charts
    "highcharts",
    "highcharts-react-official",
    "highcharts/modules/heatmap",
    "highcharts/modules/treemap",
    "highcharts/modules/solid-gauge",
    "highcharts/highcharts-more",
    
    // Date
    "date-fns",
    "react-day-picker",
    
    // Theme
    "next-themes",
    
    // Next.js (should not be bundled)
    "next",
    "next/link",
    "next/image",
    "next/navigation",
    
    // Tailwind (runtime)
    "tailwindcss",
  ],
  treeshake: true,
  clean: true,
  splitting: false,
  sourcemap: false,
  minify: false, // Let consumers minify if needed
  // Ensure we don't bundle node_modules
  noExternal: [],
});
