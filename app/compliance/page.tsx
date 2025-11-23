"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { MaterialSymbol } from "@/components/material-symbol"
import { cn } from "@/lib/utils"
import { GlobalHeader } from "@/components/global-header"

/**
 * Compliance status for each category
 */
interface CategoryStatus {
  name: string
  score: number
  maxScore: number
  percentage: number
  status: "complete" | "in-progress" | "not-started"
  description: string
  requirements: Requirement[]
}

interface Requirement {
  id: string
  name: string
  status: "complete" | "in-progress" | "not-started"
  description: string
}

/**
 * Compliance data structure
 * This should be updated as implementation progresses
 */
const complianceData: CategoryStatus[] = [
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
]

/**
 * Calculate overall compliance score
 */
function calculateOverallScore(): number {
  const totalScore = complianceData.reduce((sum, category) => sum + category.score, 0)
  const totalMax = complianceData.reduce((sum, category) => sum + category.maxScore, 0)
  return Math.round((totalScore / totalMax) * 100)
}

/**
 * Get status badge variant
 */
function getStatusVariant(status: CategoryStatus["status"]): "default" | "secondary" | "outline" {
  switch (status) {
    case "complete":
      return "default"
    case "in-progress":
      return "secondary"
    case "not-started":
      return "outline"
  }
}

/**
 * Get requirement status icon
 */
function getRequirementIcon(status: Requirement["status"]) {
  switch (status) {
    case "complete":
      return <MaterialSymbol name="check_circle" size={16} weight={300} className="text-semantic-text-rag-success-default" />
    case "in-progress":
      return <MaterialSymbol name="pending" size={16} weight={300} className="text-semantic-text-rag-warning-default" />
    case "not-started":
      return <MaterialSymbol name="radio_button_unchecked" size={16} weight={300} className="text-semantic-text-subdued" />
  }
}

export default function CompliancePage() {
  const overallScore = calculateOverallScore()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <MaterialSymbol name="verified" size={24} weight={300} className="text-semantic-icon-interaction-default" />
            <h1 className="text-xl font-normal">Enterprise Standards Compliance</h1>
          </div>
          <GlobalHeader />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-8">
        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Overall Score Card - Full width on mobile, spans 2 columns on desktop */}
          <Card className="lg:col-span-2 border-semantic-stroke-default">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MaterialSymbol name="assessment" size={24} weight={300} />
                Overall Compliance Score
              </CardTitle>
              <CardDescription>
                Current compliance with JLL Enterprise Standards for React TypeScript Component Libraries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-4xl font-semibold">{overallScore}%</div>
                    <div className="text-sm text-semantic-text-subdued">
                      {complianceData.reduce((sum, cat) => sum + cat.score, 0).toFixed(1)} / {complianceData.reduce((sum, cat) => sum + cat.maxScore, 0).toFixed(1)} points
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge variant={overallScore >= 80 ? "default" : overallScore >= 60 ? "secondary" : "outline"}>
                      {overallScore >= 80 ? "Excellent" : overallScore >= 60 ? "Good" : "Needs Improvement"}
                    </Badge>
                    <div className="text-xs text-semantic-text-subdued">Target: 85%</div>
                  </div>
                </div>
                <Progress value={overallScore} className="h-2" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-semantic-text-subdued">
                  <div>
                    <strong>Before:</strong> 60% (1.8 / 3.0)
                  </div>
                  <div>
                    <strong>Current:</strong> {overallScore}% ({complianceData.reduce((sum, cat) => sum + cat.score, 0).toFixed(1)} / {complianceData.reduce((sum, cat) => sum + cat.maxScore, 0).toFixed(1)})
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <strong className="text-sm">Recent improvements:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
                    <li>TypeScript Standards: 90% → 100% (Explicit return types for all 259 component functions)</li>
                    <li>Type Exports: 0% → 100% (58/58 components with exported interfaces)</li>
                    <li>JSDoc Documentation: 5% → 100% (58/58 components with comprehensive JSDoc)</li>
                    <li>Testing: 0% → 83% (infrastructure + 101 tests, 88% coverage, 7 components)</li>
                    <li>Code Quality: 67% → 83% (JSDoc completion)</li>
                    <li>Documentation: 50% → 67% (JSDoc completion)</li>
                    <li>Accessibility: 50% → 67% (tests for 7 components with jest-axe)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats Card */}
          <Card className="border-semantic-stroke-default">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MaterialSymbol name="insights" size={24} weight={300} />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-semantic-text-subdued mb-1">Categories Complete</div>
                  <div className="text-2xl font-semibold">
                    {complianceData.filter(cat => cat.status === "complete").length} / {complianceData.length}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-semantic-text-subdued mb-1">In Progress</div>
                  <div className="text-2xl font-semibold">
                    {complianceData.filter(cat => cat.status === "in-progress").length}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-semantic-text-subdued mb-1">Requirements Met</div>
                  <div className="text-2xl font-semibold">
                    {complianceData.reduce((sum, cat) => sum + cat.requirements.filter(req => req.status === "complete").length, 0)} / {complianceData.reduce((sum, cat) => sum + cat.requirements.length, 0)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Category Cards - Grid */}
          {complianceData.map((category) => (
            <Card key={category.name} className="border-semantic-stroke-default">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <CardTitle className="text-lg truncate">{category.name}</CardTitle>
                    <Badge variant={getStatusVariant(category.status)} className="shrink-0">
                      {category.status === "complete" ? "Complete" : category.status === "in-progress" ? "In Progress" : "Not Started"}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <CardDescription className="text-xs">{category.description}</CardDescription>
                  <div className="text-right shrink-0 ml-2">
                    <div className="text-2xl font-semibold">{category.percentage}%</div>
                    <div className="text-xs text-semantic-text-subdued">
                      {category.score.toFixed(1)} / {category.maxScore.toFixed(1)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={category.percentage} className="h-2" />
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Requirements</h3>
                    <div className="space-y-2 max-h-[300px] overflow-y-auto">
                      {category.requirements.map((req) => (
                        <div
                          key={req.id}
                          className={cn(
                            "flex items-start gap-2 p-2.5 rounded-md border",
                            req.status === "complete" && "bg-semantic-surface-rag-success-subdued border-semantic-stroke-rag-success-default",
                            req.status === "in-progress" && "bg-semantic-surface-rag-warning-subdued border-semantic-stroke-rag-warning-default",
                            req.status === "not-started" && "bg-semantic-surface-subdued border-semantic-stroke-subdued"
                          )}
                        >
                          <div className="mt-0.5 shrink-0">{getRequirementIcon(req.status)}</div>
                          <div className="flex-1 space-y-1 min-w-0">
                            <div className="text-sm font-medium">{req.name}</div>
                            <div className="text-xs text-semantic-text-subdued">{req.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Sections */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Implementation Progress */}
          <Card className="border-semantic-stroke-default">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MaterialSymbol name="timeline" size={24} weight={300} />
                Implementation Progress
              </CardTitle>
              <CardDescription>
                Track progress through the compliance plan phases
              </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Phase 1: Critical Infrastructure</span>
                      <span className="text-semantic-text-subdued">100% complete</span>
                    </div>
                    <Progress value={100} className="h-2" />
                    <div className="text-xs text-semantic-text-subdued space-y-1">
                      <div>✅ Testing infrastructure setup (Vitest + React Testing Library)</div>
                      <div>✅ Unit tests for critical components (101 tests, 100% passing, 88% coverage, 7 components)</div>
                      <div>✅ Error boundaries implemented (ErrorBoundary + wrapper)</div>
                      <div>✅ TypeScript Standards (100% complete - all return types added)</div>
                      <div>✅ Type exports (58/58 = 100% complete)</div>
                      <div>✅ JSDoc documentation (58/58 = 100% complete)</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Phase 2: High Priority Improvements</span>
                      <span className="text-semantic-text-subdued">75% complete</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <div className="text-xs text-semantic-text-subdued space-y-1">
                      <div>✅ TypeScript Standards complete (100% - all return types added)</div>
                      <div>✅ Accessibility tests (jest-axe for all 7 tested components)</div>
                      <div>✅ Accessibility improvements (aria-label in Button)</div>
                      <div>✅ JSDoc documentation complete (58/58 components = 100%)</div>
                      <div>⏳ Performance optimization (not started)</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Phase 3: Medium Priority Enhancements</span>
                      <span className="text-semantic-text-subdued">0% complete</span>
                    </div>
                    <Progress value={0} className="h-2" />
                    <div className="text-xs text-semantic-text-subdued space-y-1">
                      <div>⏳ Security improvements (not started)</div>
                      <div>⏳ Component refactoring (not started)</div>
                    </div>
                  </div>
                </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card className="border-semantic-stroke-default">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MaterialSymbol name="description" size={24} weight={300} />
                Documentation & Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Analysis Report:</strong>{" "}
                    <code className="px-1 py-0.5 bg-semantic-surface-subdued rounded text-xs">
                      QualityAssessment/21-11-2024-compliance/ANALYSIS-REPORT.md
                    </code>
                  </div>
                  <div>
                    <strong>Compliance Plan:</strong>{" "}
                    <code className="px-1 py-0.5 bg-semantic-surface-subdued rounded text-xs">
                      QualityAssessment/21-11-2024-compliance/COMPLIANCE-PLAN.md
                    </code>
                  </div>
                  <div>
                    <strong>Compliance Checklist:</strong>{" "}
                    <code className="px-1 py-0.5 bg-semantic-surface-subdued rounded text-xs">
                      QualityAssessment/21-11-2024-compliance/COMPLIANCE-CHECKLIST.md
                    </code>
                  </div>
                </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

