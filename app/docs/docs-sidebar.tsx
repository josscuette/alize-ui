'use client';

import { components } from './data/components';
import { useMemo, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { MaterialSymbol } from '@/components/material-symbol';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const STORAGE_KEY = 'docs-sidebar-collapsed';

type CategoryState = Record<string, boolean>;

export function DocsSidebar() {
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

  const groupedComponents = useMemo(() => {
    const grouped: Record<string, typeof components> = {
      atoms: [],
      molecules: [],
      organisms: [],
      dataviz: [],
    };
    
    components.forEach((component) => {
      if (grouped[component.category]) {
        grouped[component.category].push(component);
      }
    });
    
    // Sort each category alphabetically by title
    Object.keys(grouped).forEach((category) => {
      grouped[category].sort((a, b) => a.title.localeCompare(b.title));
    });
    
    return grouped;
  }, []);

  // Filter components based on search query
  const filteredComponents = useMemo(() => {
    if (!searchQuery.trim()) {
      return groupedComponents;
    }
    
    const query = searchQuery.toLowerCase();
    const filtered: Record<string, typeof components> = {
      atoms: [],
      molecules: [],
      organisms: [],
      dataviz: [],
    };
    
    Object.entries(groupedComponents).forEach(([category, items]) => {
      filtered[category] = items.filter(component => 
        component.title.toLowerCase().includes(query) ||
        component.description.toLowerCase().includes(query)
      );
    });
    
    return filtered;
  }, [groupedComponents, searchQuery]);

  const categoryLabels: Record<string, string> = {
    atoms: 'Atoms',
    molecules: 'Molecules',
    organisms: 'Organisms',
    dataviz: 'Data Visualization',
  };

  const categoryIcons: Record<string, string> = {
    atoms: 'circle',
    molecules: 'hub',
    organisms: 'dashboard',
    dataviz: 'monitoring',
  };

  const categories = ['atoms', 'molecules', 'organisms', 'dataviz'];

  // Count total filtered components
  const totalFiltered = useMemo(() => {
    return Object.values(filteredComponents).reduce((acc, items) => acc + items.length, 0);
  }, [filteredComponents]);

  return (
    <aside className="hidden lg:block w-64 border-r bg-background h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <div className="p-4 space-y-4">
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
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9"
          />
        </div>

        {/* Results count when searching */}
        {searchQuery && (
          <p className="text-xs text-muted-foreground px-2">
            {totalFiltered} component{totalFiltered !== 1 ? 's' : ''} found
          </p>
        )}

        {/* Navigation */}
        <nav className="space-y-1">
          {categories.map((category, index) => {
            const items = filteredComponents[category];
            if (items.length === 0) return null;
            
            const isCollapsed = collapsedCategories[category] ?? false;
            const isLast = index === categories.length - 1 || 
              categories.slice(index + 1).every(cat => filteredComponents[cat].length === 0);

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
                      {items.map((component) => {
                        const href = `/docs/${component.component.toLowerCase().replace(/\s+/g, '')}`;
                        const isActive = pathname === href;
                        
                        return (
                          <li key={component.component}>
                            <Link
                              href={href}
                              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                              className={cn(
                                "block pl-6 pr-2 py-1.5 rounded-md text-sm transition-colors",
                                isActive
                                  ? "bg-accent text-accent-foreground font-medium"
                                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                              )}
                            >
                              {component.title}
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
      </div>
    </aside>
  );
}
