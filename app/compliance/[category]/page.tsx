"use client";

import { useMemo, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { MaterialSymbol } from "@/components/material-symbol";
import { cn } from "@/lib/utils";
import { DocumentationSidebar, type SidebarSection } from "@/components/documentation-sidebar";
import { ShowcaseWrapper } from "@/components/showcase-wrapper";
import { complianceData, type CategoryStatus, type Requirement } from "@/lib/compliance-data";
import { ComponentShowcase } from "@/components/component-showcase";
import { useNavigation } from "@/contexts/navigation-context";

/**
 * Convert category name to URL slug
 */
function categoryToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

/**
 * Convert URL slug to category name
 */
function slugToCategory(slug: string): string {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
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
 * Get requirement status icon
 */
function getRequirementIcon(status: Requirement["status"]) {
  switch (status) {
    case "complete":
      return <MaterialSymbol name="check_circle" size={16} weight={300} className="text-[var(--semantic-text-rag-success-default)]" />;
    case "in-progress":
      return <MaterialSymbol name="pending" size={16} weight={300} className="text-[var(--semantic-text-rag-warning-default)]" />;
    case "not-started":
      return <MaterialSymbol name="radio_button_unchecked" size={16} weight={300} className="text-[var(--semantic-text-subdued)]" />;
  }
}

export default function ComplianceCategoryPage() {
  const pathname = usePathname();
  const categorySlug = pathname?.split('/').pop() || '';

  // Handle Foundation Layer special case
  const isFoundationLayer = categorySlug === 'foundation-layer';

  const category = useMemo(() => {
    if (isFoundationLayer) {
      return null; // Foundation Layer is handled separately
    }
    return complianceData.find(
      (cat) => categoryToSlug(cat.name) === categorySlug
    );
  }, [categorySlug, isFoundationLayer]);

  const {
    setSidebarSections,
    setShowSearch,
    setSearchPlaceholder,
    setShowModifiedFilter,
  } = useNavigation();

  const sidebarSections: SidebarSection[] = useMemo(() => {
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
          ...complianceData.map((cat) => ({
            id: categoryToSlug(cat.name),
            label: cat.name,
            href: `/compliance/${categoryToSlug(cat.name)}`,
          })),
        ],
      },
    ];
  }, []);

  // Update navigation context
  useEffect(() => {
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

  // Foundation Layer page
  if (isFoundationLayer) {
    return (
      <div className="flex h-screen overflow-hidden">
        <DocumentationSidebar
          sections={sidebarSections}
          title="Engineering Compliance"
          searchPlaceholder="Search categories..."
        />
        <main className="flex-1 overflow-y-auto bg-background relative" data-component-showcase>
          <ShowcaseWrapper>
            <ComponentShowcase componentId="foundation-layer" />
          </ShowcaseWrapper>
        </main>
      </div>
    );
  }

  // Category not found
  if (!category) {
    return (
      <div className="flex h-screen overflow-hidden">
        <DocumentationSidebar
          sections={sidebarSections}
          title="Engineering Compliance"
          searchPlaceholder="Search categories..."
        />
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="container mx-auto px-4 md:px-8 py-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-normal">Category not found</h2>
              <p className="text-muted-foreground text-sm">
                The category you're looking for doesn't exist.
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <DocumentationSidebar
        sections={sidebarSections}
        title="Engineering Compliance"
        searchPlaceholder="Search categories..."
      />
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="container mx-auto px-4 md:px-8 py-8">
          <header className="space-y-2 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-normal text-foreground">{category.name}</h1>
                <p className="text-muted-foreground max-w-3xl leading-relaxed mt-2">
                  {category.description}
                </p>
              </div>
              <Badge 
                variant={getStatusVariant(category.status)}
                className={cn(
                  category.status === "complete" && "bg-semantic-surface-rag-success-default text-semantic-text-reversedpersistent border-semantic-stroke-rag-success-default"
                )}
              >
                {category.status === "complete" ? "Complete" : category.status === "in-progress" ? "In Progress" : "Not Started"}
              </Badge>
            </div>
          </header>

          {/* Score Card */}
          <Card className="border-semantic-stroke-default mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MaterialSymbol name="assessment" size={24} weight={300} />
                Compliance Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-4xl font-semibold">{category.percentage}%</div>
                    <div className="text-sm text-semantic-text-subdued">
                      {category.score.toFixed(1)} / {category.maxScore.toFixed(1)} points
                    </div>
                  </div>
                </div>
                <Progress 
                  value={category.percentage} 
                  className={cn(
                    "h-2",
                    (category.status === "complete" || category.percentage === 100) && "[&_[data-slot=progress-indicator]]:bg-semantic-surface-rag-success-bright"
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="border-semantic-stroke-default">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MaterialSymbol name="checklist" size={24} weight={300} />
                Requirements
              </CardTitle>
              <CardDescription>
                Detailed requirements and their current status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.requirements.map((req) => (
                  <div
                    key={req.id}
                    className={cn(
                      "flex items-start gap-3 p-4 rounded-md border",
                      req.status === "complete" && "bg-[var(--semantic-surface-rag-success-subdued)] border-[var(--semantic-stroke-rag-success-default)]",
                      req.status === "in-progress" && "bg-[var(--semantic-surface-rag-warning-subdued)] border-[var(--semantic-stroke-rag-warning-default)]",
                      req.status === "not-started" && "bg-[var(--semantic-surface-subdued)] border-[var(--semantic-stroke-subdued)]"
                    )}
                  >
                    <div className="mt-0.5 shrink-0">{getRequirementIcon(req.status)}</div>
                    <div className="flex-1 space-y-2 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-base font-medium">{req.name}</div>
                        <Badge 
                          variant={getStatusVariant(req.status)} 
                          className={cn(
                            "shrink-0",
                            req.status === "complete" && "bg-semantic-surface-rag-success-default text-semantic-text-reversedpersistent border-semantic-stroke-rag-success-default"
                          )}
                        >
                          {req.status === "complete" ? "Complete" : req.status === "in-progress" ? "In Progress" : "Not Started"}
                        </Badge>
                      </div>
                      <div className="text-sm text-[var(--semantic-text-subdued)]">{req.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

