'use client';

import { foundations } from './data/foundations';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MaterialSymbol } from '@/components/material-symbol';
import { FoundationsSidebar } from './foundations-sidebar';
import type { FoundationCategory } from './types';

// Category configuration
const categoryLabels: Record<FoundationCategory, string> = {
  visual: 'Visual',
  layout: 'Layout',
  interaction: 'Interaction',
};

const categoryDescriptions: Record<FoundationCategory, string> = {
  visual: 'Color, typography, and visual styling',
  layout: 'Spacing, sizing, and layout primitives',
  interaction: 'States, animations, and feedback',
};

const categoryIcons: Record<FoundationCategory, string> = {
  visual: 'palette',
  layout: 'view_quilt',
  interaction: 'touch_app',
};

// Coming soon placeholder foundations
const comingSoon = [
  { title: 'Typography', icon: 'text_fields', category: 'visual' as FoundationCategory },
  { title: 'Spacing', icon: 'straighten', category: 'layout' as FoundationCategory },
  { title: 'Radius', icon: 'rounded_corner', category: 'visual' as FoundationCategory },
  { title: 'Shadow', icon: 'layers', category: 'visual' as FoundationCategory },
  { title: 'Animation', icon: 'animation', category: 'interaction' as FoundationCategory },
  { title: 'States', icon: 'touch_app', category: 'interaction' as FoundationCategory },
  { title: 'Icons', icon: 'emoji_symbols', category: 'visual' as FoundationCategory },
];

export default function FoundationsPage(): React.ReactNode {
  // Group foundations by category
  const groupedFoundations = foundations.reduce((acc, foundation) => {
    if (!acc[foundation.category]) {
      acc[foundation.category] = [];
    }
    acc[foundation.category].push(foundation);
    return acc;
  }, {} as Record<FoundationCategory, typeof foundations>);

  // Get coming soon items not already in foundations
  const availableSlugs = foundations.map(f => f.title.toLowerCase());
  const comingSoonFiltered = comingSoon.filter(
    item => !availableSlugs.includes(item.title.toLowerCase())
  );

  return (
    <div className="flex">
      <FoundationsSidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="px-4 md:px-8 py-8">
          {/* Header */}
          <header className="space-y-4 mb-8">
            <h1 className="text-3xl font-normal text-foreground">System Foundations</h1>
            <p className="text-muted-foreground max-w-3xl leading-relaxed">
              The building blocks of the Alize design system. These foundational elements ensure consistency 
              across all components and applications. Each foundation provides semantic tokens and utility 
              classes that automatically adapt to themes and contexts.
            </p>
          </header>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="py-4">
              <CardContent className="flex items-center gap-3 p-4">
                <MaterialSymbol 
                  name="palette" 
                  size={24} 
                  weight={300} 
                  className="text-[var(--semantic-icon-subdued)]" 
                />
                <div>
                  <div className="text-2xl font-semibold">{foundations.length}</div>
                  <div className="text-xs text-muted-foreground">Foundations</div>
                </div>
              </CardContent>
            </Card>
            <Card className="py-4">
              <CardContent className="flex items-center gap-3 p-4">
                <MaterialSymbol 
                  name="colorize" 
                  size={24} 
                  weight={300} 
                  className="text-[var(--semantic-icon-subdued)]" 
                />
                <div>
                  <div className="text-2xl font-semibold">
                    {foundations.reduce((acc, f) => acc + f.tokenGroups.reduce((a, g) => a + g.tokens.length, 0), 0)}
                  </div>
                  <div className="text-xs text-muted-foreground">Design Tokens</div>
                </div>
              </CardContent>
            </Card>
            <Card className="py-4">
              <CardContent className="flex items-center gap-3 p-4">
                <MaterialSymbol 
                  name="dark_mode" 
                  size={24} 
                  weight={300} 
                  className="text-[var(--semantic-icon-subdued)]" 
                />
                <div>
                  <div className="text-2xl font-semibold">2</div>
                  <div className="text-xs text-muted-foreground">Theme Modes</div>
                </div>
              </CardContent>
            </Card>
            <Card className="py-4">
              <CardContent className="flex items-center gap-3 p-4">
                <MaterialSymbol 
                  name="code" 
                  size={24} 
                  weight={300} 
                  className="text-[var(--semantic-icon-subdued)]" 
                />
                <div>
                  <div className="text-2xl font-semibold">TS</div>
                  <div className="text-xs text-muted-foreground">Type-Safe</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Foundation Cards */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <MaterialSymbol name="widgets" size={20} weight={300} className="text-[var(--semantic-icon-subdued)]" />
              Available Foundations
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {foundations.map((foundation) => (
                <Link
                  key={foundation.slug}
                  href={`/foundations/${foundation.slug}`}
                  className="group block"
                >
                  <Card className="border-border hover:border-[var(--semantic-stroke-interaction-default)] transition-colors h-full cursor-pointer">
                    <CardContent className="p-5 flex flex-col gap-4">
                      {/* Icon and badge */}
                      <div className="flex items-start justify-between">
                        <div className="p-2.5 rounded-lg bg-[var(--semantic-surface-overlays-level1)] group-hover:bg-[var(--semantic-surface-interaction-subdued)] transition-colors">
                          <MaterialSymbol 
                            name={foundation.icon} 
                            size={24} 
                            weight={300} 
                            className="text-[var(--semantic-icon-subdued)] group-hover:text-[var(--semantic-icon-interaction-default)] transition-colors" 
                          />
                        </div>
                        <Badge variant="secondary" className="text-[10px]">
                          {categoryLabels[foundation.category]}
                        </Badge>
                      </div>
                      
                      {/* Title and description */}
                      <div>
                        <h3 className="text-lg font-medium group-hover:text-[var(--semantic-text-interaction-default)] transition-colors mb-1">
                          {foundation.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {foundation.description}
                        </p>
                      </div>

                      {/* Token count */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto pt-2 border-t">
                        <span className="flex items-center gap-1">
                          <MaterialSymbol name="token" size={14} weight={300} />
                          {foundation.tokenGroups.reduce((a, g) => a + g.tokens.length, 0)} tokens
                        </span>
                        <span className="flex items-center gap-1">
                          <MaterialSymbol name="category" size={14} weight={300} />
                          {foundation.tokenGroups.length} groups
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Coming Soon */}
          {comingSoonFiltered.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <MaterialSymbol name="schedule" size={20} weight={300} className="text-[var(--semantic-icon-subdued)]" />
                Coming Soon
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {comingSoonFiltered.map((item) => (
                  <Card key={item.title} className="opacity-60">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted">
                        <MaterialSymbol 
                          name={item.icon} 
                          size={20} 
                          weight={300} 
                          className="text-muted-foreground" 
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{item.title}</h3>
                        <span className="text-[10px] text-muted-foreground">
                          {categoryLabels[item.category]}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* How to Use */}
          <section className="mt-12 p-6 rounded-lg bg-[var(--semantic-surface-subdued)] border">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MaterialSymbol name="code" size={20} weight={300} className="text-[var(--semantic-icon-subdued)]" />
              Quick Start
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Use foundation tokens via the TypeScript foundation layer or CSS variables:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-muted/50 border">
                  <div className="text-xs font-medium text-muted-foreground mb-2">Foundation Layer (Recommended)</div>
                  <pre className="text-xs overflow-x-auto">
                    <code>{`import { surface, text } from '@/foundation';

<div className={cn(
  surface.default,
  text.subdued
)}>
  Content
</div>`}</code>
                  </pre>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border">
                  <div className="text-xs font-medium text-muted-foreground mb-2">CSS Variables</div>
                  <pre className="text-xs overflow-x-auto">
                    <code>{`<div className="
  bg-[var(--semantic-surface-default)]
  text-[var(--semantic-text-subdued)]
">
  Content
</div>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

