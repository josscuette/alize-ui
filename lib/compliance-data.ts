/**
 * Compliance status for each category
 */
export interface CategoryStatus {
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
  status: "complete" | "in-progress" | "not-started";
  description: string;
  requirements: Requirement[];
}

export interface Requirement {
  id: string;
  name: string;
  status: "complete" | "in-progress" | "not-started";
  description: string;
}

/**
 * Compliance data structure
 * This should be updated as implementation progresses
 */
export const complianceData: CategoryStatus[] = [
  {
    name: "TypeScript Standards",
    score: 3.0,
    maxScore: 3.0,
    percentage: 100,
    status: "complete",
    description: "Type safety, interfaces, generics, and type exports",
    requirements: [
      {
        id: "ts-1",
        name: "TypeScript strict mode enabled",
        status: "complete",
        description: "tsconfig.json has strict: true"
      },
      {
        id: "ts-2",
        name: "Props typed with React.ComponentProps",
        status: "complete",
        description: "All components use proper prop typing"
      },
      {
        id: "ts-3",
        name: "Export types for all components",
        status: "complete",
        description: "✅ 58/58 components export types (100%). All components have proper TypeScript interfaces and JSDoc documentation."
      },
      {
        id: "ts-4",
        name: "Explicit return types for functions",
        status: "complete",
        description: "✅ Added return types to 250+ component functions using automated script. All component functions now have explicit return types (`React.ReactElement` or `React.ReactElement | null` for conditional returns). Completed: All UI components including Button, Input, Checkbox, Select, Switch, Textarea, RadioGroup, Accordion, Calendar, Tabs, Dialog, ToggleGroup, Carousel, Drawer, InputOTP, AlertDialog, Alert, ContextMenu, Collapsible, Popover, Tooltip, Sheet, HoverCard, Form, DropdownMenu, Command, Breadcrumb, Pagination, NavigationMenu, Sidebar, Menubar, Table, Field, and all others."
      },
      {
        id: "ts-5",
        name: "Generic types for reusable patterns",
        status: "not-started",
        description: "Implement generic types where applicable"
      }
    ]
  },
  {
    name: "Component Architecture",
    score: 2.5,
    maxScore: 3.0,
    percentage: 83,
    status: "in-progress",
    description: "Component structure, composition, and organization",
    requirements: [
      {
        id: "arch-1",
        name: "Functional components with hooks",
        status: "complete",
        description: "All components use functional component pattern"
      },
      {
        id: "arch-2",
        name: "Named exports for tree-shaking",
        status: "complete",
        description: "Components exported via index.ts barrel exports"
      },
      {
        id: "arch-3",
        name: "Foundation Layer implementation",
        status: "complete",
        description: "Centralized style system in /styles directory"
      },
      {
        id: "arch-4",
        name: "Components under 200 lines",
        status: "in-progress",
        description: "Some components exceed 200 lines (e.g., component-showcase.tsx)"
      },
      {
        id: "arch-5",
        name: "Compound component patterns",
        status: "not-started",
        description: "Implement compound components where appropriate"
      }
    ]
  },
  {
    name: "Performance",
    score: 1.5,
    maxScore: 3.0,
    percentage: 50,
    status: "in-progress",
    description: "Memoization, code splitting, and optimization",
    requirements: [
      {
        id: "perf-1",
        name: "Tree-shaking supported",
        status: "complete",
        description: "Named exports enable tree-shaking"
      },
      {
        id: "perf-2",
        name: "Peer dependencies configured",
        status: "complete",
        description: "React, React-DOM, Tailwind as peer dependencies"
      },
      {
        id: "perf-3",
        name: "React.memo for expensive components",
        status: "in-progress",
        description: "Limited use of memoization (4 components only)"
      },
      {
        id: "perf-4",
        name: "Code splitting with React.lazy",
        status: "not-started",
        description: "Implement lazy loading for heavy components"
      },
      {
        id: "perf-5",
        name: "Performance monitoring",
        status: "not-started",
        description: "Set up performance budgets and monitoring"
      }
    ]
  },
  {
    name: "Security",
    score: 1.5,
    maxScore: 3.0,
    percentage: 50,
    status: "in-progress",
    description: "Input validation, XSS prevention, secure patterns",
    requirements: [
      {
        id: "sec-1",
        name: "No dangerouslySetInnerHTML usage",
        status: "complete",
        description: "No unsafe HTML rendering found"
      },
      {
        id: "sec-2",
        name: "React built-in XSS protection",
        status: "complete",
        description: "Using React's safe rendering by default"
      },
      {
        id: "sec-3",
        name: "Input validation framework",
        status: "not-started",
        description: "Integrate Zod or Yup for form validation"
      },
      {
        id: "sec-4",
        name: "Dependency vulnerability scanning",
        status: "not-started",
        description: "Set up npm audit in CI/CD"
      },
      {
        id: "sec-5",
        name: "Sanitization patterns",
        status: "not-started",
        description: "Implement content sanitization where needed"
      }
    ]
  },
  {
    name: "Testing",
    score: 2.5,
    maxScore: 3.0,
    percentage: 83,
    status: "in-progress",
    description: "Unit tests, integration tests, accessibility tests",
    requirements: [
      {
        id: "test-1",
        name: "Testing infrastructure setup",
        status: "complete",
        description: "Vitest + React Testing Library configured. 101 tests created, 100% passing, 88% code coverage"
      },
      {
        id: "test-2",
        name: "Unit tests for critical components",
        status: "complete",
        description: "101 tests for Button (14), Input (15), Checkbox (16), Select (11), Switch (17), Textarea (14), RadioGroup (14). All passing ✅"
      },
      {
        id: "test-3",
        name: "Integration tests",
        status: "not-started",
        description: "Test component interactions"
      },
      {
        id: "test-4",
        name: "Accessibility tests (jest-axe)",
        status: "complete",
        description: "Accessibility tests added for all 7 tested components using jest-axe"
      },
      {
        id: "test-5",
        name: "CI/CD test pipeline",
        status: "not-started",
        description: "Configure automated test runs"
      }
    ]
  },
  {
    name: "Accessibility",
    score: 2.0,
    maxScore: 3.0,
    percentage: 67,
    status: "in-progress",
    description: "ARIA attributes, semantic HTML, keyboard navigation",
    requirements: [
      {
        id: "a11y-1",
        name: "Radix UI primitives (built-in a11y)",
        status: "complete",
        description: "All components use Radix UI with accessibility"
      },
      {
        id: "a11y-2",
        name: "data-slot attributes",
        status: "complete",
        description: "Present on main elements for testing"
      },
      {
        id: "a11y-3",
        name: "aria-invalid support",
        status: "complete",
        description: "Input components support aria-invalid"
      },
      {
        id: "a11y-4",
        name: "aria-label for icon-only components",
        status: "in-progress",
        description: "Added to Button component, need to verify all icon-only elements"
      },
      {
        id: "a11y-5",
        name: "Accessibility testing",
        status: "complete",
        description: "jest-axe tests added for all 7 tested components (Button, Input, Checkbox, Select, Switch, Textarea, RadioGroup). All accessibility tests passing ✅"
      },
      {
        id: "a11y-6",
        name: "Semantic HTML usage",
        status: "in-progress",
        description: "Improve semantic elements where appropriate"
      }
    ]
  },
  {
    name: "Code Quality",
    score: 2.5,
    maxScore: 3.0,
    percentage: 83,
    status: "in-progress",
    description: "Naming conventions, organization, documentation",
    requirements: [
      {
        id: "qual-1",
        name: "Naming conventions followed",
        status: "complete",
        description: "PascalCase for components, camelCase for functions"
      },
      {
        id: "qual-2",
        name: "ESLint and Prettier configured",
        status: "complete",
        description: "Code quality tools in place"
      },
      {
        id: "qual-3",
        name: "Barrel exports",
        status: "complete",
        description: "Clean imports via index.ts"
      },
      {
        id: "qual-4",
        name: "JSDoc documentation",
        status: "complete",
        description: "✅ 58/58 components (100%) have comprehensive JSDoc documentation with interfaces and examples"
      },
      {
        id: "qual-5",
        name: "Component size optimization",
        status: "in-progress",
        description: "Some components need refactoring"
      }
    ]
  },
  {
    name: "Error Handling",
    score: 1.5,
    maxScore: 3.0,
    percentage: 50,
    status: "in-progress",
    description: "Error boundaries, async error handling, fallback UI",
    requirements: [
      {
        id: "err-1",
        name: "Error boundary component",
        status: "complete",
        description: "ErrorBoundary component created with DefaultErrorFallback UI"
      },
      {
        id: "err-2",
        name: "Error boundary integration",
        status: "complete",
        description: "ErrorBoundaryWrapper created for Next.js App Router compatibility"
      },
      {
        id: "err-3",
        name: "Fallback UI component",
        status: "complete",
        description: "DefaultErrorFallback component with user-friendly error message and reset button"
      },
      {
        id: "err-4",
        name: "Error logging",
        status: "in-progress",
        description: "Basic console logging implemented. Ready for production error tracking (Sentry, etc.)"
      },
      {
        id: "err-5",
        name: "Async error handling patterns",
        status: "not-started",
        description: "Implement try/catch patterns in async operations"
      }
    ]
  },
  {
    name: "Documentation",
    score: 2.0,
    maxScore: 3.0,
    percentage: 67,
    status: "in-progress",
    description: "JSDoc, API documentation, usage examples",
    requirements: [
      {
        id: "doc-1",
        name: "Markdown documentation files",
        status: "complete",
        description: "README, INSTALLATION, CONVENTIONS, etc."
      },
      {
        id: "doc-2",
        name: "Interactive showcase",
        status: "complete",
        description: "Component showcase with examples"
      },
      {
        id: "doc-3",
        name: "Foundation Layer documentation",
        status: "complete",
        description: "styles/README.md with usage examples"
      },
      {
        id: "doc-4",
        name: "JSDoc for all components",
        status: "complete",
        description: "✅ 58/58 components (100%) have comprehensive JSDoc documentation with type interfaces and usage examples"
      },
      {
        id: "doc-5",
        name: "Generated API documentation",
        status: "not-started",
        description: "Set up TypeDoc or equivalent"
      }
    ]
  }
];

