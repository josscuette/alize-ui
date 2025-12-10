'use client';

import { foundations } from './data/foundations';
import { useMemo, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { MaterialSymbol } from '@/components/material-symbol';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import type { FoundationCategory, AnyFoundation } from './types';

const STORAGE_KEY = 'foundations-sidebar-collapsed';

type CategoryState = Record<string, boolean>;

const categoryLabels: Record<FoundationCategory, string> = {
  visual: 'Visual',
  layout: 'Layout',
  interaction: 'Interaction',
};

const categoryIcons: Record<FoundationCategory, string> = {
  visual: 'palette',
  layout: 'view_quilt',
  interaction: 'touch_app',
};

const categoryOrder: FoundationCategory[] = ['visual', 'layout', 'interaction'];

export function FoundationsSidebar(): React.ReactNode {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [collapsedCategories, setCollapsedCategories] = useState<CategoryState>({});
  const [isHydrated, setIsHydrated] = useState(false);

  // Load collapsed state from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCollapsedCategories(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load sidebar state:', e);
    }
    setIsHydrated(true);
  }, []);

  // Save collapsed state to localStorage
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(collapsedCategories));
      } catch (e) {
        console.error('Failed to save sidebar state:', e);
      }
    }
  }, [collapsedCategories, isHydrated]);

  const toggleCategory = useCallback((category: string) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  }, []);

  const groupedFoundations = useMemo(() => {
    const grouped: Record<FoundationCategory, AnyFoundation[]> = {
      visual: [],
      layout: [],
      interaction: [],
    };
    
    foundations.forEach((foundation) => {
      if (grouped[foundation.category]) {
        grouped[foundation.category].push(foundation);
      }
    });
    
    // Sort each category alphabetically by title
    Object.keys(grouped).forEach((category) => {
      grouped[category as FoundationCategory].sort((a, b) => a.title.localeCompare(b.title));
    });
    
    return grouped;
  }, []);

  // Filter foundations based on search query
  const filteredFoundations = useMemo(() => {
    if (!searchQuery.trim()) {
      return groupedFoundations;
    }
    
    const query = searchQuery.toLowerCase();
    const filtered: Record<FoundationCategory, AnyFoundation[]> = {
      visual: [],
      layout: [],
      interaction: [],
    };
    
    Object.entries(groupedFoundations).forEach(([category, items]) => {
      filtered[category as FoundationCategory] = items.filter(foundation => 
        foundation.title.toLowerCase().includes(query) ||
        foundation.description.toLowerCase().includes(query)
      );
    });
    
    return filtered;
  }, [groupedFoundations, searchQuery]);

  // Count total filtered foundations
  const totalFiltered = useMemo(() => {
    return Object.values(filteredFoundations).reduce((acc, items) => acc + items.length, 0);
  }, [filteredFoundations]);

  return (
    <aside className="hidden lg:block w-64 border-r bg-background h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-2 px-2">
          <MaterialSymbol
            name="token"
            size={16}
            weight={300}
            className="text-[var(--semantic-icon-interaction-default)]"
          />
          <span className="text-sm font-medium">Foundations</span>
        </div>

        {/* Search */}
        <div className="relative">
          <MaterialSymbol
            name="search"
            size={16}
            weight={300}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--semantic-icon-subdued)]"
          />
          <Input
            type="search"
            placeholder="Search foundations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9"
          />
        </div>

        {/* Results count when searching */}
        {searchQuery && (
          <p className="text-xs text-muted-foreground px-2">
            {totalFiltered} foundation{totalFiltered !== 1 ? 's' : ''} found
          </p>
        )}

        {/* Navigation */}
        <nav className="space-y-1">
          {/* Overview link */}
          <Link
            href="/foundations"
            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            className={cn(
              "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors",
              pathname === '/foundations'
                ? "bg-accent text-accent-foreground font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            )}
          >
            <MaterialSymbol name="home" size={14} weight={300} className="text-[var(--semantic-icon-subdued)]" />
            Overview
          </Link>

          <Separator className="my-2" />

          {categoryOrder.map((category, index) => {
            const items = filteredFoundations[category];
            if (items.length === 0) return null;
            
            const isCollapsed = collapsedCategories[category] ?? false;
            const isLast = index === categoryOrder.length - 1 || 
              categoryOrder.slice(index + 1).every(cat => filteredFoundations[cat].length === 0);

            return (
              <div key={category}>
                <Collapsible
                  open={!isCollapsed}
                  onOpenChange={() => toggleCategory(category)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-2 py-2 rounded-md hover:bg-accent/50 transition-colors group">
                    <div className="flex items-center gap-2">
                      <MaterialSymbol
                        name={categoryIcons[category]}
                        size={14}
                        weight={300}
                        className="text-[var(--semantic-icon-subdued)]"
                      />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {categoryLabels[category]}
                      </span>
                      <span className="text-xs text-muted-foreground/60">
                        ({items.length})
                      </span>
                    </div>
                    <MaterialSymbol
                      name={isCollapsed ? "chevron_right" : "expand_more"}
                      size={16}
                      weight={300}
                      className="text-[var(--semantic-icon-subdued)] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <ul className="mt-1 space-y-0.5">
                      {items.map((foundation) => {
                        const href = `/foundations/${foundation.slug}`;
                        const isActive = pathname === href;
                        
                        return (
                          <li key={foundation.slug}>
                            <Link
                              href={href}
                              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                              className={cn(
                                "flex items-center gap-2 pl-6 pr-2 py-1.5 rounded-md text-sm transition-colors",
                                isActive
                                  ? "bg-accent text-accent-foreground font-medium"
                                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                              )}
                            >
                              <MaterialSymbol
                                name={foundation.icon}
                                size={14}
                                weight={300}
                                className={cn(
                                  isActive 
                                    ? "text-[var(--semantic-icon-interaction-default)]" 
                                    : "text-[var(--semantic-icon-subdued)]"
                                )}
                              />
                              {foundation.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
                
                {/* Separator after each category (except last) */}
                {!isLast && (
                  <Separator className="my-2" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Coming Soon placeholder for empty categories */}
        {foundations.length < 8 && (
          <>
            <Separator className="my-2" />
            <div className="px-2 py-4 text-center">
              <p className="text-xs text-muted-foreground">
                More foundations coming soon
              </p>
              <p className="text-[10px] text-muted-foreground/60 mt-1">
                Typography, Spacing, Animation...
              </p>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

