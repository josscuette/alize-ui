'use client';

import { components } from './data/components';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { MaterialSymbol } from '@/components/material-symbol';
import { DocsSidebar } from './docs-sidebar';

// Mini previews for the grid
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Spinner } from '@/components/ui/spinner';
import { Label } from '@/components/ui/label';
import { Toggle } from '@/components/ui/toggle';
import { Kbd } from '@/components/ui/kbd';
import { Alert, AlertTitle } from '@/components/ui/alert';

// Component mini preview renderer
function ComponentMiniPreview({ componentName }: { componentName: string }) {
  const previews: Record<string, React.ReactNode> = {
    'Button': (
      <div className="flex items-center gap-2">
        <Button size="sm">Button</Button>
        <Button size="sm" variant="outline">Outline</Button>
      </div>
    ),
    'Input': (
      <Input placeholder="Enter text..." className="w-full max-w-[180px]" />
    ),
    'Checkbox': (
      <div className="flex items-center gap-2">
        <Checkbox id="preview-check" defaultChecked />
        <Label htmlFor="preview-check" className="text-xs">Checkbox</Label>
      </div>
    ),
    'Switch': (
      <div className="flex items-center gap-2">
        <Switch defaultChecked />
        <span className="text-xs">Toggle</span>
      </div>
    ),
    'Badge': (
      <div className="flex items-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
      </div>
    ),
    'Avatar': (
      <div className="flex items-center gap-2">
        <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
      </div>
    ),
    'Skeleton': (
      <div className="space-y-2 w-full">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    ),
    'Spinner': (
      <div className="flex items-center gap-3">
        <Spinner className="size-4" />
        <Spinner className="size-6" />
      </div>
    ),
    'Separator': (
      <div className="flex items-center gap-4 w-full">
        <span className="text-xs">Left</span>
        <Separator orientation="vertical" className="h-4" />
        <span className="text-xs">Right</span>
      </div>
    ),
    'Kbd': (
      <div className="flex items-center gap-1">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </div>
    ),
    'Toggle': (
      <Toggle size="sm" aria-label="Toggle">
        <MaterialSymbol name="format_bold" size={16} weight={300} />
      </Toggle>
    ),
    'Progress': (
      <Progress value={60} className="w-full h-2" />
    ),
    'Slider': (
      <Slider defaultValue={[50]} max={100} className="w-full" />
    ),
    'Label': (
      <Label className="text-sm">Form Label</Label>
    ),
    'Tooltip': (
      <div className="text-xs text-muted-foreground">Hover for tooltip</div>
    ),
    'Typography': (
      <div className="space-y-1">
        <p className="text-sm font-semibold">Heading</p>
        <p className="text-xs text-muted-foreground">Body text</p>
      </div>
    ),
    'Alert': (
      <Alert className="p-2">
        <AlertTitle className="text-xs mb-0">Alert message</AlertTitle>
      </Alert>
    ),
    'Card': (
      <div className="border rounded-md p-2 w-full">
        <p className="text-xs font-medium">Card</p>
        <p className="text-xs text-muted-foreground">Content</p>
      </div>
    ),
    'Select': (
      <div className="border rounded-md px-3 py-1.5 text-xs w-full flex items-center justify-between">
        <span className="text-muted-foreground">Select...</span>
        <MaterialSymbol name="expand_more" size={14} weight={300} />
      </div>
    ),
    'Textarea': (
      <div className="border rounded-md p-2 text-xs text-muted-foreground w-full h-12">
        Multi-line input...
      </div>
    ),
    'Tabs': (
      <div className="flex gap-1 bg-muted rounded-md p-0.5">
        <span className="px-2 py-1 text-xs bg-background rounded-sm">Tab 1</span>
        <span className="px-2 py-1 text-xs text-muted-foreground">Tab 2</span>
      </div>
    ),
    'Accordion': (
      <div className="w-full border rounded-md">
        <div className="flex items-center justify-between p-2 text-xs">
          <span>Accordion</span>
          <MaterialSymbol name="expand_more" size={14} weight={300} />
        </div>
      </div>
    ),
    'Dialog': (
      <div className="border rounded-md p-3 shadow-sm w-full">
        <p className="text-xs font-medium">Modal Dialog</p>
      </div>
    ),
    'Table': (
      <div className="w-full text-xs">
        <div className="grid grid-cols-2 gap-2 border-b pb-1 font-medium">
          <span>Name</span><span>Value</span>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1 text-muted-foreground">
          <span>Item</span><span>123</span>
        </div>
      </div>
    ),
    'Calendar': (
      <div className="grid grid-cols-7 gap-0.5 text-xs">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <span key={i} className="size-5 flex items-center justify-center text-muted-foreground">{d}</span>
        ))}
        {[1, 2, 3, 4, 5, 6, 7].map((d) => (
          <span key={d} className={cn("size-5 flex items-center justify-center rounded-sm", d === 3 && "bg-primary text-primary-foreground")}>{d}</span>
        ))}
      </div>
    ),
  };

  return (
    <div className="flex items-center justify-center aspect-video px-3 bg-muted/30 rounded-lg overflow-hidden">
      {previews[componentName] || (
        <MaterialSymbol name="widgets" size={24} weight={300} className="text-muted-foreground" />
      )}
    </div>
  );
}

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

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredComponents = useMemo(() => {
    let filtered = components;
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(c => 
        c.title.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query)
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(c => c.category === selectedCategory);
    }
    
    return filtered;
  }, [searchQuery, selectedCategory]);

  const groupedComponents = useMemo(() => {
    const grouped: Record<string, typeof components> = {};
    filteredComponents.forEach((component) => {
      if (!grouped[component.category]) {
        grouped[component.category] = [];
      }
      grouped[component.category].push(component);
    });
    return grouped;
  }, [filteredComponents]);

  return (
    <div className="flex">
      <DocsSidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="px-4 md:px-8 py-8">
          {/* Header */}
          <header className="space-y-6 mb-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-normal text-foreground">Components</h1>
              <p className="text-muted-foreground max-w-3xl leading-relaxed">
                Browse all {components.length} components in the Alize design system. 
                Each component is built with TypeScript, accessibility in mind, and follows our design system principles.
              </p>
            </div>
            
            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-md">
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
                  className="pl-9"
                />
              </div>
              
              {/* Category Tabs */}
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="atoms">Atoms</TabsTrigger>
                  <TabsTrigger value="molecules">Molecules</TabsTrigger>
                  <TabsTrigger value="organisms">Organisms</TabsTrigger>
                  <TabsTrigger value="dataviz">DataViz</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Results count */}
            {(searchQuery || selectedCategory !== 'all') && (
              <p className="text-sm text-muted-foreground">
                Showing {filteredComponents.length} of {components.length} components
              </p>
            )}
          </header>

          {/* Components by Category */}
          {Object.entries(groupedComponents).map(([category, categoryComponents]) => (
            <section key={category} className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <MaterialSymbol
                  name={categoryIcons[category] || 'widgets'}
                  size={20}
                  weight={300}
                  className="text-[var(--semantic-icon-subdued)]"
                />
                <h2 className="text-lg font-medium">{categoryLabels[category] || category}</h2>
                <Badge variant="secondary" className="text-xs">
                  {categoryComponents.length}
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categoryComponents.map((component) => (
                  <Link
                    key={component.component}
                    href={`/docs/${component.component.toLowerCase().replace(/\s+/g, '')}`}
                    className="group block"
                  >
                    <Card className="border-border hover:border-[var(--semantic-stroke-interaction-default)] transition-colors h-full flex flex-col cursor-pointer py-0">
                      <CardContent className="p-3 flex flex-col flex-1 gap-2">
                        {/* Preview */}
                        <ComponentMiniPreview componentName={component.component} />
                        
                        {/* Title */}
                        <h3 className="text-sm font-medium group-hover:text-[var(--semantic-text-interaction-default)] transition-colors">
                          {component.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-xs text-muted-foreground line-clamp-3 flex-1">
                          {component.description}
                        </p>
                        
                        {/* View button */}
                        <Button variant="secondary" size="sm" className="w-full mt-auto pointer-events-none">
                          View details
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          ))}
          
          {filteredComponents.length === 0 && (
            <div className="text-center py-12">
              <MaterialSymbol name="search_off" size={48} weight={300} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No components found matching your search.</p>
              <Button 
                variant="ghost" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
