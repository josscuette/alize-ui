"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { componentsConfig, categories, type ComponentConfig } from "@/lib/components-config";
import { MaterialSymbol } from "@/components/material-symbol";
import { cn } from "@/lib/utils";
import { DocumentationSidebar, type SidebarSection } from "@/components/documentation-sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { ComponentPreview } from "@/components/component-preview";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigation } from "@/contexts/navigation-context";

function ComponentsPageInner() {
  const [showModifiedOnly, setShowModifiedOnly] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const {
    setSidebarSections,
    setShowSearch,
    setSearchPlaceholder,
    setShowModifiedFilter,
    setModifiedCount,
    setOnModifiedToggle,
    setShowModifiedOnly: setContextShowModifiedOnly,
  } = useNavigation();

  const filteredComponents = useMemo(() => {
    let filtered = componentsConfig;
    
    if (showModifiedOnly) {
      filtered = filtered.filter((component) => component.modified);
    }
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter((component) => component.category === selectedCategory);
    }
    
    return filtered;
  }, [showModifiedOnly, selectedCategory]);

  const groupedComponents = useMemo(() => {
    return filteredComponents.reduce(
      (acc, component) => {
        if (!acc[component.category]) {
          acc[component.category] = [];
        }
        acc[component.category].push(component);
        return acc;
      },
      {} as Record<string, ComponentConfig[]>
    );
  }, [filteredComponents]);

  const sidebarSections: SidebarSection[] = useMemo(() => {
    return Object.entries(categories).map(([key, label]) => {
      const components = groupedComponents[key] || [];
      return {
        title: label,
        items: components.map((component) => ({
          id: component.id,
          label: component.name,
          href: `/components/${component.id}`,
          modified: component.modified,
        })),
      };
    }).filter((section) => section.items.length > 0);
  }, [groupedComponents]);

  // Update navigation context
  useEffect(() => {
    setSidebarSections(sidebarSections);
    setShowSearch(true);
    setSearchPlaceholder("Search components...");
    setShowModifiedFilter(true);
    setModifiedCount(componentsConfig.filter((c) => c.modified).length);
    setOnModifiedToggle(() => () => setShowModifiedOnly((prev) => !prev));
    setContextShowModifiedOnly(showModifiedOnly);
  }, [
    sidebarSections,
    showModifiedOnly,
    setSidebarSections,
    setShowSearch,
    setSearchPlaceholder,
    setShowModifiedFilter,
    setModifiedCount,
    setOnModifiedToggle,
    setContextShowModifiedOnly,
  ]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <DocumentationSidebar
        sections={sidebarSections}
        title="Components"
        searchPlaceholder="Search components..."
        showModifiedFilter={true}
        modifiedCount={componentsConfig.filter((c) => c.modified).length}
        showModifiedOnly={showModifiedOnly}
        onModifiedToggle={() => setShowModifiedOnly(!showModifiedOnly)}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="container mx-auto px-4 md:px-8 py-8">
          <header className="space-y-4 mb-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-normal text-foreground">Components</h1>
              <p className="text-muted-foreground max-w-3xl leading-relaxed">
                Browse all available components in the Alize library. Each component is built with TypeScript, 
                accessibility in mind, and follows our design system principles.
              </p>
            </div>
            
            {/* Category Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                {Object.entries(categories).map(([key, label]) => (
                  <TabsTrigger key={key} value={key}>
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </header>

          {/* Components Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredComponents.map((component) => (
              <Link
                key={component.id}
                href={`/components/${component.id}`}
                className="group block"
              >
                <Card className="border-semantic-stroke-default hover:border-semantic-stroke-interaction-default transition-colors h-full flex flex-col py-0 cursor-pointer">
                  <CardContent className="p-4 flex flex-col flex-1 gap-4">
                    {/* Preview */}
                    <ComponentPreview componentId={component.id} />
                    
                    {/* Title and modified indicator */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-medium group-hover:text-semantic-text-interaction-default transition-colors">
                        {component.name}
                      </h3>
                      {component.modified && (
                        <span
                          className="size-2 rounded-full bg-[var(--semantic-surface-interaction-strong)]"
                          title="Modified component"
                          aria-label="Modified component"
                        />
                      )}
                    </div>
                    
                    {/* Category Badge */}
                    <Badge variant="outline" className="w-fit text-xs">
                      {categories[component.category]}
                    </Badge>
                    
                    {/* View details button */}
                    <Button variant="outline" className="w-full mt-auto pointer-events-none">
                      View details
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          {filteredComponents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No components found matching your filters.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default function ComponentsPage() {
  return <ComponentsPageInner />;
}
