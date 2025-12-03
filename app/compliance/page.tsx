"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MaterialSymbol } from "@/components/material-symbol";
import { cn } from "@/lib/utils";
import { DocumentationSidebar, type SidebarSection } from "@/components/documentation-sidebar";
import { complianceData, type CategoryStatus } from "@/lib/compliance-data";
import { useNavigation } from "@/contexts/navigation-context";

/**
 * Calculate overall compliance score
 */
function calculateOverallScore(): number {
  const totalScore = complianceData.reduce((sum, category) => sum + category.score, 0);
  const totalMax = complianceData.reduce((sum, category) => sum + category.maxScore, 0);
  return Math.round((totalScore / totalMax) * 100);
}

/**
 * Get status badge variant
 */
function getStatusVariant(status: CategoryStatus["status"]): "default" | "secondary" | "outline" {
  switch (status) {
    case "complete":
      return "default";
    case "in-progress":
      return "secondary";
    case "not-started":
      return "outline";
  }
}

/**
 * Convert category name to URL slug
 */
function categoryToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function CompliancePage() {
  const overallScore = calculateOverallScore();
  const {
    setSidebarSections,
    setShowSearch,
    setSearchPlaceholder,
    setShowModifiedFilter,
  } = useNavigation();

  const sidebarSections: SidebarSection[] = React.useMemo(() => {
    return [
      {
        title: "Categories",
        items: [
          {
            id: "foundation-layer",
            label: "Foundation Layer",
            href: "/compliance/foundation-layer",
            icon: "layers",
          },
          ...complianceData.map((category) => ({
            id: categoryToSlug(category.name),
            label: category.name,
            href: `/compliance/${categoryToSlug(category.name)}`,
          })),
        ],
      },
    ];
  }, []);

  // Update navigation context
  React.useEffect(() => {
    setSidebarSections(sidebarSections);
    setShowSearch(true);
    setSearchPlaceholder("Search categories...");
    setShowModifiedFilter(false);
  }, [
    sidebarSections,
    setSidebarSections,
    setShowSearch,
    setSearchPlaceholder,
    setShowModifiedFilter,
  ]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <DocumentationSidebar
        sections={sidebarSections}
        title="Engineering Compliance"
        searchPlaceholder="Search categories..."
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="container mx-auto px-4 md:px-8 py-8">
          <header className="space-y-4 mb-8">
            <h1 className="text-3xl font-normal text-foreground">Engineering Compliance</h1>
            <p className="text-muted-foreground max-w-3xl leading-relaxed">
              Track compliance with JLL Enterprise Standards for React TypeScript Component Libraries. 
              Click on any category to see detailed requirements and progress.
            </p>
            <div className="flex flex-col gap-2 p-4 rounded-lg bg-semantic-surface-subdued border border-semantic-stroke-subdued">
              <div className="flex items-center gap-2 text-sm">
                <MaterialSymbol name="policy" size={18} weight={300} className="text-semantic-icon-subdued" />
                <span className="text-semantic-text-subdued">
                  Compliance rules based on{" "}
                  <a 
                    href="https://github.com/JLLT-Apps/jll-cursorrules" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-semantic-text-interaction-default hover:underline"
                  >
                    JLLT-Apps/jll-cursorrules
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-semantic-text-subdued">
                <MaterialSymbol name="group" size={16} weight={300} className="text-semantic-icon-subdued" />
                <span>
                  Contributors: Leah Zhao, Eyal Ella, Jan Konopasek, Fernando Rivas
                </span>
              </div>
            </div>
          </header>

          {/* Dashboard Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
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
                      <Badge 
                        variant={overallScore >= 80 ? "default" : overallScore >= 60 ? "secondary" : "outline"}
                        className={overallScore >= 80 ? "bg-semantic-surface-rag-success-strong text-semantic-text-reversedpersistent border-semantic-stroke-rag-success-strong" : ""}
                      >
                        {overallScore >= 80 ? "Excellent" : overallScore >= 60 ? "Good" : "Needs Improvement"}
                      </Badge>
                      <div className="text-xs text-semantic-text-subdued">Target: 85%</div>
                    </div>
                  </div>
                  <Progress 
                    value={overallScore} 
                    className={cn(
                      "h-2",
                      overallScore === 100 && "[&_[data-slot=progress-indicator]]:bg-semantic-surface-rag-success-bright"
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-semantic-text-subdued">
                    <div>
                      <strong>Initial (Nov 2024):</strong> 65% (1.95 / 3.0)
                    </div>
                    <div>
                      <strong>Current (v0.2.0):</strong> {overallScore}% ({complianceData.reduce((sum, cat) => sum + cat.score, 0).toFixed(1)} / {complianceData.reduce((sum, cat) => sum + cat.maxScore, 0).toFixed(1)})
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <strong className="text-sm">Current status (v0.2.0):</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
                      <li>TypeScript Standards: 100% (276 exported types/interfaces, 250+ explicit return types)</li>
                      <li>Component Architecture: 100% (71 components, clean /src/ structure)</li>
                      <li>Performance: 100% (10 React.memo components, 212KB ESM bundle)</li>
                      <li>Testing: 97% (1,119 tests, 62 files, 51 components, 93.5% coverage)</li>
                      <li>Documentation: 100% (98 @example blocks, TypeDoc API docs, comprehensive guides)</li>
                      <li>Package Distribution: 100% (ESM+CJS, charts module, CLI tool)</li>
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
          </div>

          {/* Category Cards - Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {complianceData.map((category) => (
              <Card key={category.name} className="border-semantic-stroke-default hover:border-semantic-stroke-interaction-default transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg flex-1 min-w-0">{category.name}</CardTitle>
                    <Badge 
                      variant={getStatusVariant(category.status)} 
                      className={cn(
                        "shrink-0",
                        category.status === "complete" && "bg-semantic-surface-rag-success-strong text-semantic-text-reversedpersistent border-semantic-stroke-rag-success-strong"
                      )}
                    >
                      {category.status === "complete" ? "Complete" : category.status === "in-progress" ? "In Progress" : "Not Started"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <CardDescription className="text-xs flex-1 min-w-0">{category.description}</CardDescription>
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-semibold">{category.percentage}%</div>
                      <div className="text-xs text-semantic-text-subdued">
                        {category.score.toFixed(1)} / {category.maxScore.toFixed(1)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Progress 
                      value={category.percentage} 
                      className={cn(
                        "h-2",
                        (category.status === "complete" || category.percentage === 100) && "[&_[data-slot=progress-indicator]]:bg-semantic-surface-rag-success-bright"
                      )}
                    />
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Requirements</span>
                        <span className="text-sm font-medium">
                          {category.requirements.filter(req => req.status === "complete").length} / {category.requirements.length}
                        </span>
                      </div>
                    </div>

                    <Link href={`/compliance/${categoryToSlug(category.name)}`}>
                      <Button variant="outline" className="w-full">
                        See more
                        <MaterialSymbol name="arrow_forward" size={16} weight={300} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
