"use client";

import { useState, useMemo, useCallback, memo, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
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

function ComponentsPageInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isMobile = useIsMobile();
  
  // Initialize selectedComponent from URL query param or default to button
  const initialComponent = searchParams?.get("component") || "button";
  const [selectedComponent, setSelectedComponent] = useState<string>(initialComponent);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showModifiedOnly, setShowModifiedOnly] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // Sync selectedComponent with URL query param
  useEffect(() => {
    const componentParam = searchParams?.get("component");
    if (componentParam) {
      if (componentParam !== selectedComponent) {
        setSelectedComponent(componentParam);
      }
    } else {
      // Default to button if no component param
      if (selectedComponent !== "button") {
        setSelectedComponent("button");
      }
    }
  }, [searchParams]);

  // Update URL when selectedComponent changes
  const handleComponentSelect = useCallback((componentId: string) => {
    setSelectedComponent(componentId);
    if (componentId === "foundation-layer") {
      router.push("/components?component=foundation-layer");
    } else if (componentId && componentId !== "button") {
      router.push(`/components?component=${componentId}`);
    } else {
      // For button or default, go to /components without param
      router.push("/components");
    }
  }, [router]);

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

  const searchInputRef = useRef<HTMLInputElement>(null);
  const wasFocusedRef = useRef(false);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    wasFocusedRef.current = document.activeElement === e.target;
    setSearchQuery(e.target.value);
  }, []);

  useEffect(() => {
    if (wasFocusedRef.current && searchInputRef.current) {
      searchInputRef.current.focus();
      wasFocusedRef.current = false;
    }
  }, [searchQuery]);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const SidebarContent = memo(function SidebarContent({
    pathname,
    isMobile,
    searchQuery,
    showModifiedOnly,
    groupedComponents,
    selectedComponent,
    onComponentSelect,
    onToggleModified,
    onCloseMobile,
    onSearchChange,
    onClearSearch,
    searchInputRef,
  }: {
    pathname: string;
    isMobile: boolean;
    searchQuery: string;
    showModifiedOnly: boolean;
    groupedComponents: Record<string, ComponentConfig[]>;
    selectedComponent: string;
    onComponentSelect: (id: string) => void;
    onToggleModified: () => void;
    onCloseMobile: () => void;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClearSearch: () => void;
    searchInputRef: React.RefObject<HTMLInputElement | null>;
  }) {
    return (
    <>
      {/* Header */}
      <div className="p-4 border-b space-y-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-normal hover:text-semantic-text-interaction-default transition-colors">
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
          onClick={onCloseMobile}
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
          onClick={onCloseMobile}
        >
          <MaterialSymbol name="apps" size={16} weight={300} />
          <span>Components</span>
        </Link>
        <div className="flex items-center justify-between">
          <button
            onClick={onToggleModified}
            className={cn(
              "flex items-center gap-2 px-2 py-1 rounded text-xs transition-colors",
              showModifiedOnly
                ? "bg-semantic-surface-interaction-subdued text-semantic-text-interaction-default font-medium"
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
            className="absolute left-3 top-1/2 -translate-y-1/2 text-semantic-icon-subdued pointer-events-none z-10" 
          />
          <Input
            ref={searchInputRef}
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={onSearchChange}
            className="pl-9 pr-9 h-8 text-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={onClearSearch}
              className="absolute right-3 top-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Clear search"
            >
              <MaterialSymbol 
                name="close" 
                size={16}
                weight={300}
                className="text-semantic-icon-subdued hover:text-semantic-icon-interaction-default cursor-pointer" 
              />
            </button>
          )}
        </div>
      </div>

      {/* Navigation scrollable */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Foundation Layer Link */}
        <div className="space-y-2">
          <h2 className="text-xs font-normal text-muted-foreground uppercase tracking-wider">
            Documentation
          </h2>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => {
                  onComponentSelect("foundation-layer");
                  if (isMobile) onCloseMobile();
                }}
                className={cn(
                  "w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors flex items-center gap-2",
                  selectedComponent === "foundation-layer"
                    ? "bg-accent text-accent-foreground font-medium"
                    : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                )}
              >
                <MaterialSymbol name="layers" size={16} weight={300} />
                <span>Foundation Layer</span>
              </button>
            </li>
            <li>
              <Link
                href="/compliance"
                className={cn(
                  "w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors flex items-center gap-2",
                  pathname === "/compliance"
                    ? "bg-accent text-accent-foreground font-medium"
                    : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                )}
              >
                <MaterialSymbol name="verified" size={16} weight={300} />
                <span>Compliance</span>
              </Link>
            </li>
          </ul>
        </div>

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
                        onComponentSelect(component.id);
                        if (isMobile) onCloseMobile();
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
                          className="size-1.5 rounded-full bg-semantic-surface-interaction-strong"
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
  });

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Navigation latérale - Desktop */}
      {!isMobile && (
        <aside className="hidden md:flex w-64 border-r bg-background flex-col shrink-0">
          <SidebarContent
            pathname={pathname}
            isMobile={isMobile}
            searchQuery={searchQuery}
            showModifiedOnly={showModifiedOnly}
            groupedComponents={groupedComponents}
            selectedComponent={selectedComponent}
            onComponentSelect={handleComponentSelect}
            onToggleModified={() => setShowModifiedOnly(!showModifiedOnly)}
            onCloseMobile={() => setSidebarOpen(false)}
            onSearchChange={handleSearchChange}
            onClearSearch={handleClearSearch}
            searchInputRef={searchInputRef}
          />
        </aside>
      )}

      {/* Navigation latérale - Mobile (Sheet) */}
      {isMobile && (
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex flex-col h-full">
              <SidebarContent
                pathname={pathname}
                isMobile={isMobile}
                searchQuery={searchQuery}
                showModifiedOnly={showModifiedOnly}
                groupedComponents={groupedComponents}
                selectedComponent={selectedComponent}
                onComponentSelect={handleComponentSelect}
                onToggleModified={() => setShowModifiedOnly(!showModifiedOnly)}
                onCloseMobile={() => setSidebarOpen(false)}
                onSearchChange={handleSearchChange}
                onClearSearch={handleClearSearch}
                searchInputRef={searchInputRef}
              />
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
            <Link href="/" className="text-lg font-normal hover:text-semantic-text-interaction-default transition-colors">
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

export default function ComponentsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-2">
          <MaterialSymbol name="hourglass_empty" size={24} weight={300} className="animate-spin mx-auto text-semantic-text-subdued" />
          <p className="text-sm text-semantic-text-subdued">Loading components...</p>
        </div>
      </div>
    }>
      <ComponentsPageInner />
    </Suspense>
  );
}
