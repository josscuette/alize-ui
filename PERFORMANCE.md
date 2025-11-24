# Performance Optimization Guide

This guide explains how to optimize performance when using Alize components.

## React.memo Optimization

The following components are already optimized with `React.memo` to prevent unnecessary re-renders:

- `Chart` - Memoized to prevent re-renders when parent updates
- `DataTable` - Memoized to prevent re-renders when data hasn't changed
- `Dialog` - Memoized to prevent re-renders when dialog state changes
- `DialogContent` - Memoized to prevent re-renders when dialog content updates
- `Calendar` - Memoized to prevent re-renders when date selection changes
- `Carousel` - Memoized to prevent re-renders when carousel navigation occurs

## Code Splitting with React.lazy

For heavy components that are not always needed, use `React.lazy` for code splitting:

### Example: Lazy Loading Chart Component

```tsx
import { Suspense, lazy } from "react"
import { ChartProps } from "alize"

const Chart = lazy(() => import("alize").then((mod) => ({ default: mod.Chart })))

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading chart...</div>}>
      <Chart>
        {/* Chart content */}
      </Chart>
    </Suspense>
  )
}
```

### Example: Lazy Loading DataTable Component

```tsx
import { Suspense, lazy } from "react"
import { DataTableProps } from "alize"

const DataTable = lazy(() => import("alize").then((mod) => ({ default: mod.DataTable })))

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading table...</div>}>
      <DataTable data={data} columns={columns} />
    </Suspense>
  )
}
```

### Components Recommended for Lazy Loading

- `Chart` - Heavy dependency on recharts library
- `DataTable` - Can handle large datasets
- `Dialog` - Overlay component, not always visible
- `Calendar` - Heavy dependency on react-day-picker
- `Carousel` - Heavy dependency on embla-carousel-react

## Performance Monitoring

### Bundle Size Analysis

Use the following tools to monitor bundle size:

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

### Performance Budgets

Recommended performance budgets:

- **Initial JS Bundle**: < 200 KB (gzipped)
- **Total JS Bundle**: < 500 KB (gzipped)
- **CSS Bundle**: < 50 KB (gzipped)
- **Time to Interactive (TTI)**: < 3.5s
- **First Contentful Paint (FCP)**: < 1.8s

### Web Vitals Monitoring

Monitor Core Web Vitals in production:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## Best Practices

1. **Use React.memo for expensive components** - Already implemented for Chart, DataTable, Dialog, Calendar, and Carousel
2. **Lazy load heavy components** - Use React.lazy for components not immediately visible
3. **Optimize images** - Use Next.js Image component for images
4. **Code splitting** - Split routes and heavy components
5. **Monitor bundle size** - Regularly check bundle size and optimize

## Performance Checklist

- [x] React.memo added to expensive components
- [x] Tree-shaking supported (named exports)
- [x] Peer dependencies configured
- [ ] Code splitting implemented (use React.lazy in consuming applications)
- [ ] Performance monitoring set up (use Lighthouse CI or similar)

