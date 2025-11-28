"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialSymbol } from "@/components/material-symbol";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

export interface SidebarItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  badge?: string | number;
  modified?: boolean;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

interface DocumentationSidebarProps {
  sections: SidebarSection[];
  title: string;
  searchPlaceholder?: string;
  showModifiedFilter?: boolean;
  modifiedCount?: number;
  onModifiedToggle?: () => void;
  showModifiedOnly?: boolean;
}

export function DocumentationSidebar({
  sections,
  title,
  searchPlaceholder = "Search...",
  showModifiedFilter = false,
  modifiedCount = 0,
  onModifiedToggle,
  showModifiedOnly = false,
}: DocumentationSidebarProps): React.ReactElement | null {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(() => {
    // Initialize from localStorage on client
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sidebar-collapsed-sections");
      if (saved) {
        try {
          return new Set(JSON.parse(saved));
        } catch {
          return new Set();
        }
      }
    }
    return new Set();
  });

  const toggleSection = useCallback((sectionTitle: string) => {
    setCollapsedSections(prev => {
      const next = new Set(prev);
      if (next.has(sectionTitle)) {
        next.delete(sectionTitle);
      } else {
        next.add(sectionTitle);
      }
      // Save to localStorage
      localStorage.setItem("sidebar-collapsed-sections", JSON.stringify([...next]));
      return next;
    });
  }, []);

  const filteredSections = useMemo(() => {
    let currentSections = sections;

    // Apply modified filter first
    if (showModifiedOnly) {
      currentSections = currentSections.map(section => ({
        ...section,
        items: section.items.filter(item => item.modified)
      })).filter(section => section.items.length > 0);
    }

    // Apply search query filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      currentSections = currentSections
        .map((section) => ({
          ...section,
          items: section.items.filter(
            (item) =>
              item.label.toLowerCase().includes(query) ||
              item.id.toLowerCase().includes(query)
          ),
        }))
        .filter((section) => section.items.length > 0);
    }
    return currentSections;
  }, [sections, searchQuery, showModifiedOnly]);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const SidebarContent = useMemo(() => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 md:px-8 py-8 border-b space-y-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-normal hover:text-semantic-text-interaction-default transition-colors">
            {title}
          </Link>
        </div>
        {showModifiedFilter && (
          <button
            onClick={onModifiedToggle || (() => {})}
            disabled={!onModifiedToggle}
            className={cn(
              "flex items-center gap-2 py-1 rounded text-xs transition-colors w-full text-left",
              showModifiedOnly
                ? "bg-semantic-surface-interaction-subdued text-semantic-text-interaction-default font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
              !onModifiedToggle && "opacity-50 cursor-not-allowed"
            )}
          >
            <MaterialSymbol 
              name={showModifiedOnly ? "check_circle" : "circle"} 
              size={14} 
              weight={300}
            />
            <span>{modifiedCount} modified</span>
          </button>
        )}
        <div className="relative group">
          <MaterialSymbol 
            name="search" 
            size={16}
            weight={300}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--semantic-icon-subdued)] pointer-events-none z-10" 
          />
          <Input
            ref={searchInputRef}
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => {
              const newValue = e.target.value;
              setSearchQuery(newValue);
            }}
            className="pl-9 pr-9 h-8 text-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleClearSearch}
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
      <nav className="flex-1 overflow-y-auto px-4 md:px-8 pt-3 pb-4 space-y-4">
        {filteredSections.map((section, sectionIndex) => {
          if (section.items.length === 0) return null;
          const isCollapsed = collapsedSections.has(section.title);

          return (
            <div key={sectionIndex} className="space-y-1">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full group py-1 -mx-1 px-1 rounded hover:bg-accent/30 transition-colors"
              >
                <h2 className="text-xs font-normal text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors">
                  {section.title}
                </h2>
                <MaterialSymbol 
                  name={isCollapsed ? "chevron_right" : "expand_more"} 
                  size={16} 
                  weight={300}
                  className="text-muted-foreground group-hover:text-foreground transition-all"
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  isCollapsed ? "max-h-0 opacity-0" : "max-h-[2000px] opacity-100"
                )}
              >
                <ul className="space-y-1 pt-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          onClick={() => {
                            if (isMobile) setSidebarOpen(false);
                          }}
                          className={cn(
                            "w-full text-left py-1.5 px-3 -mx-3 rounded-md text-sm transition-colors flex items-center justify-between group",
                            isActive
                              ? "bg-accent text-accent-foreground font-medium"
                              : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            {item.icon && (
                              <MaterialSymbol name={item.icon} size={16} weight={300} className="shrink-0" />
                            )}
                            <span className="truncate">{item.label}</span>
                          </div>
                          {item.badge && (
                            <span className="text-xs text-muted-foreground shrink-0 ml-2">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  ), [
    title,
    showModifiedFilter,
    showModifiedOnly,
    modifiedCount,
    onModifiedToggle,
    searchPlaceholder,
    searchQuery,
    handleClearSearch,
    filteredSections,
    pathname,
    isMobile,
    collapsedSections,
    toggleSection,
  ]);

  // On mobile, the sidebar is handled by MobileNavigation in GlobalNavigation
  if (isMobile) {
    return null;
  }

  return (
    <aside className="hidden md:flex w-64 border-r bg-background flex-col shrink-0">
      {SidebarContent}
    </aside>
  );
}

