"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialSymbol } from "@/components/material-symbol";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import type { SidebarSection } from "@/components/documentation-sidebar";

const mainNavigationItems = [
  {
    href: "/get-started",
    label: "Get started",
    icon: "rocket_launch",
  },
  {
    href: "/compliance/foundation-layer",
    label: "Foundation layer",
    icon: "layers",
  },
  {
    href: "/components",
    label: "Components",
    icon: "apps",
  },
  {
    href: "/compliance",
    label: "Engineering Compliance",
    icon: "verified",
  },
] as const;

interface MobileNavigationProps {
  sidebarSections?: SidebarSection[];
  showSearch?: boolean;
  searchPlaceholder?: string;
  showModifiedFilter?: boolean;
  modifiedCount?: number;
  onModifiedToggle?: () => void;
  showModifiedOnly?: boolean;
}

export function MobileNavigation({
  sidebarSections = [],
  showSearch = false,
  searchPlaceholder = "Search...",
  showModifiedFilter = false,
  modifiedCount = 0,
  onModifiedToggle,
  showModifiedOnly = false,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const isMobile = useIsMobile();

  // Determine if we're on a page with subpages
  const hasSubpages = sidebarSections.length > 0 && sidebarSections.some(s => s.items.length > 0);

  // Filter sidebar sections by search and modified filter
  let filteredSidebarSections = sidebarSections;

  // Apply modified filter first
  if (showModifiedOnly) {
    filteredSidebarSections = filteredSidebarSections.map(section => ({
      ...section,
      items: section.items.filter(item => item.modified)
    })).filter(section => section.items.length > 0);
  }

  // Apply search filter
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredSidebarSections = filteredSidebarSections.map(section => ({
      ...section,
      items: section.items.filter(item =>
        item.label.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query)
      )
    })).filter(section => section.items.length > 0);
  }

  if (!isMobile) {
    return null;
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="md:hidden"
      >
        <MaterialSymbol name="menu" size={20} weight={300} />
        <span className="sr-only">Open menu</span>
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-80 p-0">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="px-4 md:px-8 py-4 border-b space-y-3">
              <div className="flex items-center justify-between">
                <Link 
                  href="/" 
                  className="text-lg font-normal hover:text-semantic-text-interaction-default transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Alize
                </Link>
              </div>

              {showModifiedFilter && (
                <div className="flex items-center justify-between">
                  <button
                    onClick={onModifiedToggle}
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
                    <span>{modifiedCount} modified</span>
                  </button>
                </div>
              )}

              {showSearch && (
                <div className="relative group">
                  <MaterialSymbol 
                    name="search" 
                    size={16}
                    weight={300}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--semantic-icon-subdued)] pointer-events-none z-10" 
                  />
                  <Input
                    type="text"
                    placeholder={searchPlaceholder}
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
              )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-4 md:px-8 py-4 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-2">
                <h2 className="text-xs font-normal text-muted-foreground uppercase tracking-wider">
                  Main
                </h2>
                <ul className="space-y-1">
                  {mainNavigationItems.map((item) => {
                    const isActive = pathname === item.href || 
                      (item.href === "/components" && pathname?.startsWith("/components")) ||
                      (item.href === "/compliance/foundation-layer" && pathname === "/compliance/foundation-layer") ||
                      (item.href === "/compliance" && pathname?.startsWith("/compliance") && pathname !== "/compliance/foundation-layer");
                    
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors flex items-center gap-2",
                            isActive
                              ? "bg-accent text-accent-foreground font-medium"
                              : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <MaterialSymbol name={item.icon} size={16} weight={300} />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Subpages (if available) */}
              {hasSubpages && (
                <>
                  <Separator />
                  {filteredSidebarSections.map((section, sectionIndex) => {
                    if (section.items.length === 0) return null;

                    return (
                      <div key={sectionIndex} className="space-y-2">
                        <h2 className="text-xs font-normal text-muted-foreground uppercase tracking-wider">
                          {section.title}
                        </h2>
                        <ul className="space-y-1">
                          {section.items.map((item) => {
                            const isActive = pathname === item.href;
                            
                            return (
                              <li key={item.id}>
                                <Link
                                  href={item.href}
                                  onClick={() => setIsOpen(false)}
                                  className={cn(
                                    "w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors flex items-center gap-2",
                                    isActive
                                      ? "bg-accent text-accent-foreground font-medium"
                                      : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                                  )}
                                >
                                  {item.icon && (
                                    <MaterialSymbol name={item.icon} size={16} weight={300} className="shrink-0" />
                                  )}
                                  <span className="truncate">{item.label}</span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </>
              )}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

