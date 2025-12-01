import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Import component data
const componentsDataPath = path.join(rootDir, 'app/docs/data/components.ts');
const componentsData = fs.readFileSync(componentsDataPath, 'utf-8');

// Extract component names from the data
const componentMatches = componentsData.matchAll(/component:\s*"([^"]+)"/g);
const components = Array.from(componentMatches, m => m[1]);

// Component import mappings
const componentImports = {
  'Button': "import { Button } from '@/components/ui/button';",
  'Input': "import { Input } from '@/components/ui/input';",
  'Label': "import { Label } from '@/components/ui/label';",
  'Badge': "import { Badge } from '@/components/ui/badge';",
  'Avatar': "import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';",
  'Checkbox': "import { Checkbox } from '@/components/ui/checkbox';",
  'Skeleton': "import { Skeleton } from '@/components/ui/skeleton';",
  'Spinner': "import { Spinner } from '@/components/ui/spinner';",
  'Separator': "import { Separator } from '@/components/ui/separator';",
  'Kbd': "import { Kbd } from '@/components/ui/kbd';",
  'Toggle': "import { Toggle } from '@/components/ui/toggle';",
  'ToggleGroup': "import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';",
  'Tooltip': "import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';",
  'Typography': "import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyP, TypographyBlockquote, TypographyCode } from '@/components/ui/typography';",
  'AspectRatio': "import { AspectRatio } from '@/components/ui/aspect-ratio';",
  'Empty': "import { Empty } from '@/components/ui/empty';",
  'Item': "import { Item } from '@/components/ui/item';",
};

// Template for component page
function generatePageTemplate(componentName) {
  const componentVar = componentName.charAt(0).toLowerCase() + componentName.slice(1);
  const importLine = componentImports[componentName] || `// TODO: Add import for ${componentName}`;
  
  return `'use client';

import { components } from '../data/components';
${importLine}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MaterialSymbol } from '@/components/material-symbol';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { DocsSidebar } from '../docs-sidebar';

const componentDoc = components.find(c => c.component === '${componentName}');

if (!componentDoc) {
  throw new Error('${componentName} component documentation not found');
}

// ${componentName}-specific preview component
function ${componentName}Preview({ title }: { title: string }) {
  // TODO: Implement preview cases for ${componentName}
  // Add cases based on componentDoc.examples titles
  switch (title) {
    default:
      return null;
  }
}

function ExampleCard({ example }: { example: { title: string; description?: string; code: string } }) {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>{example.title}</CardTitle>
          {example.description && (
            <CardDescription>{example.description}</CardDescription>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Preview */}
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <MaterialSymbol name="visibility" size={16} weight={300} />
            <span>Preview</span>
          </div>
          <div className="p-4 sm:p-6 lg:p-8 border rounded-lg bg-semantic-surface-subdued overflow-x-auto">
            <div className="flex items-center justify-center w-full min-h-[80px] sm:min-h-[100px]">
              <${componentName}Preview title={example.title} />
            </div>
          </div>
        </div>
        
        {/* Code */}
        <div>
          <div className="mb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <MaterialSymbol name="code" size={16} weight={300} />
              <span>Code</span>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(example.code);
              }}
              className="h-7 sm:h-8 gap-1.5 text-xs px-2 py-1 rounded-md border bg-background hover:bg-accent"
            >
              <MaterialSymbol name="content_copy" size={14} weight={300} />
              Copy
            </button>
          </div>
          <div className="p-3 sm:p-4 border rounded-lg bg-muted/50 overflow-x-auto">
            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code>{example.code}</code>
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ${componentName}Page() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 64);
      
      const sections = ['overview', 'examples', 'properties', 'slots', 'methods', 'css-properties', 'dependencies', 'usage', 'integration'];
      const scrollPosition = scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex min-w-0">
      <DocsSidebar />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8">
        {/* Breadcrumb */}
        <div className="pt-6 sm:pt-8">
          <Breadcrumb className="mb-6 sm:mb-8 overflow-x-auto">
            <BreadcrumbList className="flex-wrap">
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <MaterialSymbol name="chevron_right" size={14} weight={300} className="text-muted-foreground" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="break-words">{componentDoc.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold break-words">{componentDoc.title}</h1>
        </div>

        {/* Fixed Tabs Navigation */}
        <div className={cn(
          "sticky top-16 z-40 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-8 border-b bg-background/80 backdrop-blur-sm overflow-hidden transition-[padding]",
          isScrolled ? "pt-5 pb-5" : "pt-8 pb-8"
        )}>
          <div className="bg-muted text-muted-foreground flex h-9 w-full items-center rounded-lg p-[3px] overflow-x-auto">
            {['overview', 'examples', 'properties', 'slots', 'methods', 'css-properties', 'dependencies', 'usage', 'integration'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={cn(
                  "inline-flex h-[calc(100%-1px)] flex-shrink-0 items-center justify-center gap-1 rounded-md border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50",
                  activeTab === tab
                    ? "bg-background text-foreground shadow-sm"
                    : "text-foreground hover:text-foreground"
                )}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-8 sm:mb-12 scroll-mt-32">
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">{componentDoc.description}</p>
        </section>

        {/* Examples Section */}
        <section id="examples" className="mb-8 sm:mb-12 scroll-mt-32">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Examples</h2>
          {componentDoc.examples && componentDoc.examples.length > 0 ? (
            <div className="space-y-6">
              {componentDoc.examples.map((example, index) => (
                <ExampleCard key={index} example={example} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No examples available.</p>
          )}
        </section>

        {/* Properties Section */}
        <section id="properties" className="mb-8 sm:mb-12 scroll-mt-32">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Properties</h2>
          {componentDoc.props && componentDoc.props.length > 0 ? (
            <Card>
              <CardHeader>
                <CardDescription>Available props for the {componentDoc.component} component</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 text-xs sm:text-sm font-semibold">Name</th>
                          <th className="text-left p-2 text-xs sm:text-sm font-semibold">Type</th>
                          <th className="text-left p-2 text-xs sm:text-sm font-semibold">Default</th>
                          <th className="text-left p-2 text-xs sm:text-sm font-semibold">Required</th>
                          <th className="text-left p-2 text-xs sm:text-sm font-semibold">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {componentDoc.props.map((prop) => (
                          <tr key={prop.name} className="border-b">
                            <td className="p-2">
                              <code className="text-xs sm:text-sm bg-muted px-1 rounded break-all">{prop.name}</code>
                            </td>
                            <td className="p-2">
                              <code className="text-xs sm:text-sm text-muted-foreground break-all">{prop.type}</code>
                            </td>
                            <td className="p-2 text-xs sm:text-sm text-muted-foreground">
                              {prop.default ? <code className="text-xs sm:text-sm break-all">{prop.default}</code> : '-'}
                            </td>
                            <td className="p-2 text-xs sm:text-sm text-muted-foreground">
                              {prop.required ? 'Yes' : 'No'}
                            </td>
                            <td className="p-2 text-xs sm:text-sm text-muted-foreground break-words">{prop.description || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <p className="text-muted-foreground">No properties available.</p>
          )}
        </section>

        {/* Usage Section */}
        <section id="usage" className="mb-8 sm:mb-12 scroll-mt-32">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Usage</h2>
          <div className="space-y-6">
            {(componentDoc.do || componentDoc.dont) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {componentDoc.do && componentDoc.do.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MaterialSymbol name="check_circle" size={20} weight={300} className="text-[var(--semantic-icon-success)]" />
                        Do
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {componentDoc.do.map((item, index) => (
                          <li key={index} className="flex gap-3">
                            <MaterialSymbol name="check" size={16} weight={300} className="text-[var(--semantic-icon-success)] shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {componentDoc.dont && componentDoc.dont.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MaterialSymbol name="cancel" size={20} weight={300} className="text-[var(--semantic-icon-error)]" />
                        Don't
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {componentDoc.dont.map((item, index) => (
                          <li key={index} className="flex gap-3">
                            <MaterialSymbol name="close" size={16} weight={300} className="text-[var(--semantic-icon-error)] shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
`;
}

// Generate pages for all components
components.forEach(componentName => {
  const slug = componentName.toLowerCase();
  const pageDir = path.join(rootDir, 'app/docs', slug);
  const pagePath = path.join(pageDir, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Generate and write page
  const pageContent = generatePageTemplate(componentName);
  fs.writeFileSync(pagePath, pageContent, 'utf-8');
  console.log(`Generated page for ${componentName} at ${pagePath}`);
});

console.log(`\nGenerated ${components.length} component pages!`);


