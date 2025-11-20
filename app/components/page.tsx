"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { componentsConfig, categories, type ComponentConfig } from "@/lib/components-config";
import { GlobalHeader } from "@/components/global-header";
import { MaterialSymbol } from "@/components/material-symbol";
import { cn } from "@/lib/utils";
import { ComponentShowcase } from "@/components/component-showcase";
import { ShowcaseWrapper } from "@/components/showcase-wrapper";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ComponentsPage() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [selectedComponent, setSelectedComponent] = useState<string>("button");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showModifiedOnly, setShowModifiedOnly] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const filteredComponents = useMemo(() => {
    let filtered = componentsConfig;
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((component) =>
        component.name.toLowerCase().includes(query) ||
        component.category.toLowerCase().includes(query)
      );
    }
    
    // Filter by modified status
    if (showModifiedOnly) {
      filtered = filtered.filter((component) => component.modified);
    }
    
    return filtered;
  }, [searchQuery, showModifiedOnly]);

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

  const SidebarContent = () => (
    <>
      {/* Header */}
      <div className="p-4 border-b space-y-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-normal hover:text-[var(--semantic-text-interaction-default)] transition-colors">
            Components
          </Link>
          {!isMobile && <GlobalHeader />}
        </div>
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors",
            pathname === "/"
              ? "bg-accent text-accent-foreground font-medium"
              : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
          )}
          onClick={() => isMobile && setSidebarOpen(false)}
        >
          <MaterialSymbol name="home" size={16} weight={300} />
          <span>Home</span>
        </Link>
        <Link
          href="/components"
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors",
            pathname === "/components"
              ? "bg-accent text-accent-foreground font-medium"
              : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
          )}
          onClick={() => isMobile && setSidebarOpen(false)}
        >
          <MaterialSymbol name="apps" size={16} weight={300} />
          <span>Components</span>
        </Link>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowModifiedOnly(!showModifiedOnly)}
            className={cn(
              "flex items-center gap-2 px-2 py-1 rounded text-xs transition-colors",
              showModifiedOnly
                ? "bg-[var(--semantic-surface-interaction-default)] text-[var(--semantic-text-interaction-default)] font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            )}
          >
            <MaterialSymbol 
              name={showModifiedOnly ? "check_circle" : "circle"} 
              size={14} 
              weight={300}
            />
            <span>
              {componentsConfig.filter((c) => c.modified).length} modified
            </span>
          </button>
        </div>
        <div className="relative group">
          <MaterialSymbol 
            name="search" 
            size={16}
            weight={300}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--semantic-icon-subdued)] pointer-events-none z-10" 
          />
          <Input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-9 h-8 text-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Clear search"
            >
              <MaterialSymbol 
                name="close" 
                size={16}
                weight={300}
                className="text-[var(--semantic-icon-subdued)] hover:text-[var(--semantic-icon-interaction-default)] cursor-pointer" 
              />
            </button>
          )}
        </div>
      </div>

      {/* Navigation scrollable */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        {Object.entries(categories).map(([key, label]) => {
          const components = groupedComponents[key] || [];
          if (components.length === 0) return null;

          return (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-normal text-muted-foreground uppercase tracking-wider">
                  {label}
                </h2>
                {components.filter((c) => c.modified).length > 0 && (
                  <span className="text-xs text-muted-foreground">
                    {components.filter((c) => c.modified).length}
                  </span>
                )}
              </div>
              <ul className="space-y-1">
                {components.map((component) => (
                  <li key={component.id}>
                    <button
                      onClick={() => {
                        setSelectedComponent(component.id);
                        if (isMobile) setSidebarOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors flex items-center justify-between group",
                        selectedComponent === component.id
                          ? "bg-accent text-accent-foreground font-medium"
                          : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <span className={cn(
                        component.modified && "font-medium"
                      )}>
                        {component.name}
                      </span>
                      {component.modified && (
                        <span
                          className="size-1.5 rounded-full bg-[var(--semantic-surface-interaction-strong)]"
                          title="Modified component"
                          aria-label="Modified component"
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </nav>
    </>
  );

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Navigation latérale - Desktop */}
      {!isMobile && (
        <aside className="hidden md:flex w-64 border-r bg-background flex-col shrink-0">
          <SidebarContent />
        </aside>
      )}

      {/* Navigation latérale - Mobile (Sheet) */}
      {isMobile && (
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex flex-col h-full">
              <SidebarContent />
            </div>
          </SheetContent>
        </Sheet>
      )}
      {/* Zone principale avec showcase */}
      <main className="flex-1 overflow-y-auto bg-background relative" data-component-showcase>
        {/* Mobile header avec bouton menu */}
        {isMobile && (
          <div className="sticky top-0 z-10 bg-background border-b flex items-center justify-between px-4 py-3 md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSidebarOpen(true)}
              className="md:hidden"
            >
              <MaterialSymbol name="menu" size={20} weight={300} />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Link href="/" className="text-lg font-normal hover:text-[var(--semantic-text-interaction-default)] transition-colors">
              Components
            </Link>
            <GlobalHeader />
          </div>
        )}
        <ShowcaseWrapper key={selectedComponent}>
          <ComponentShowcase componentId={selectedComponent} />
        </ShowcaseWrapper>
      </main>
    </div>
  );
}
