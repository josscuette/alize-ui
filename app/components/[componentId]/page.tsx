"use client";

import { useState, useMemo, useEffect } from "react";
import { usePathname } from "next/navigation";
import { componentsConfig, categories, type ComponentConfig } from "@/lib/components-config";
import { ComponentShowcase } from "@/components/component-showcase";
import { ShowcaseWrapper } from "@/components/showcase-wrapper";
import { DocumentationSidebar, type SidebarSection } from "@/components/documentation-sidebar";
import { useNavigation } from "@/contexts/navigation-context";

export default function ComponentPage() {
  const pathname = usePathname();
  const componentId = pathname?.split('/').pop() || 'button';
  const [showModifiedOnly, setShowModifiedOnly] = useState<boolean>(false);
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
    if (showModifiedOnly) {
      return componentsConfig.filter((component) => component.modified);
    }
    return componentsConfig;
  }, [showModifiedOnly]);

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
      <main className="flex-1 overflow-y-auto bg-background relative" data-component-showcase>
        <ShowcaseWrapper>
          <ComponentShowcase componentId={componentId} />
        </ShowcaseWrapper>
      </main>
    </div>
  );
}

