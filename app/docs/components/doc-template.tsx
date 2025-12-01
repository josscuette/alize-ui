'use client';

import { useState, useEffect, useMemo, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MaterialSymbol } from '@/components/material-symbol';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import { DocsSidebar } from '../docs-sidebar';
import type { Component, ComponentExample, InteractiveProp, ComponentToken } from '../types';

// ============================================================================
// Types
// ============================================================================

export interface PreviewRendererProps {
  title: string;
  code: string;
  /** Dynamic props from the playground controls */
  interactiveValues?: Record<string, string>;
}

export interface DocTemplateProps {
  /** The component documentation data */
  componentDoc: Component;
  /** Function to render live previews for examples */
  renderPreview?: (props: PreviewRendererProps) => ReactNode;
  /** Function to render interactive playground preview */
  renderInteractivePreview?: (props: Record<string, string>) => ReactNode;
}

// ============================================================================
// Sub-components
// ============================================================================

interface ExampleCardProps {
  example: ComponentExample;
  renderPreview?: (props: PreviewRendererProps) => ReactNode;
}

function ExampleCard({ example, renderPreview }: ExampleCardProps): ReactNode {
  const [copied, setCopied] = useState(false);

  const handleCopy = (): void => {
    navigator.clipboard.writeText(example.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        {renderPreview && (
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <MaterialSymbol name="visibility" size={16} weight={300} />
              <span>Preview</span>
            </div>
            <div className="p-4 sm:p-6 lg:p-8 border rounded-lg bg-semantic-surface-subdued overflow-x-auto">
              <div className="flex items-center justify-center w-full min-h-[80px] sm:min-h-[100px] [&_button:disabled]:cursor-not-allowed">
                {renderPreview({ title: example.title, code: example.code })}
              </div>
            </div>
          </div>
        )}
        
        {/* Code */}
        <div>
          <div className="mb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <MaterialSymbol name="code" size={16} weight={300} />
              <span>Code</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-7 sm:h-8 gap-1.5 text-xs self-start sm:self-auto"
            >
              <MaterialSymbol name={copied ? "check" : "content_copy"} size={14} weight={300} />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
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

// ============================================================================
// Interactive Playground
// ============================================================================

interface InteractivePlaygroundProps {
  componentDoc: Component;
  renderInteractivePreview?: (props: Record<string, string>) => ReactNode;
}

function InteractivePlayground({ 
  componentDoc, 
  renderInteractivePreview 
}: InteractivePlaygroundProps): ReactNode {
  const interactiveProps = componentDoc.interactiveProps || [];
  
  // Initialize state with default values
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    interactiveProps.forEach(prop => {
      initial[prop.name] = prop.defaultValue;
    });
    return initial;
  });

  const [copied, setCopied] = useState(false);

  // Generate code based on current values
  const generatedCode = useMemo(() => {
    const componentName = componentDoc.component;
    const importPath = componentDoc.importPath;
    
    // Build props string
    const propsArr: string[] = [];
    let needsMaterialSymbol = false;
    let isIconOnly = false;
    
    interactiveProps.forEach(prop => {
      const value = values[prop.name];
      const defaultValue = prop.defaultValue;
      
      // Skip if value is default
      if (value === defaultValue) return;
      
      // Handle special cases
      if (prop.name === 'iconOnly' && value === 'true') {
        isIconOnly = true;
        needsMaterialSymbol = true;
        return;
      }
      
      // Handle boolean props
      if (prop.controlType === 'boolean') {
        if (value === 'true') {
          propsArr.push(prop.name);
        }
        return;
      }
      
      // Handle other props
      propsArr.push(`${prop.name}="${value}"`);
    });
    
    // Handle icon-only size mapping
    if (isIconOnly) {
      const sizeValue = values['size'] || 'default';
      const sizeMap: Record<string, string> = {
        'xs': 'icon-xs',
        'sm': 'icon-sm',
        'default': 'icon',
        'lg': 'icon-lg',
      };
      const iconSize = sizeMap[sizeValue] || 'icon';
      // Remove size prop if present and add icon size
      const sizeIndex = propsArr.findIndex(p => p.startsWith('size='));
      if (sizeIndex !== -1) {
        propsArr.splice(sizeIndex, 1);
      }
      if (iconSize !== 'icon') {
        propsArr.push(`size="${iconSize}"`);
      }
      propsArr.push('aria-label="Icon button"');
    }
    
    const propsString = propsArr.length > 0 ? ` ${propsArr.join(' ')}` : '';
    
    // Generate import statement
    let importLine = `import { ${componentName} } from '${importPath}';`;
    if (needsMaterialSymbol) {
      importLine += `\nimport { MaterialSymbol } from '@/components/material-symbol';`;
    }
    
    // Generate component content
    let content = 'Click me';
    if (isIconOnly) {
      content = `\n  <MaterialSymbol name="add" size={20} weight={300} />`;
    }
    
    return `${importLine}\n\n<${componentName}${propsString}>${content}\n</${componentName}>`;
  }, [values, componentDoc, interactiveProps]);

  const handleCopy = (): void => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (interactiveProps.length === 0 || !renderInteractivePreview) {
    return null;
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MaterialSymbol name="tune" size={20} weight={300} />
          Interactive Playground
        </CardTitle>
        <CardDescription>
          Customize the component props to see different configurations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Controls */}
        <div className="flex flex-wrap gap-4">
          {interactiveProps.map((prop) => (
            <div key={prop.name} className="flex-1 min-w-[180px]">
              <label className="text-xs font-medium text-muted-foreground mb-2 block">
                {prop.label}
              </label>
              {prop.controlType === 'select' && prop.options && (
                <Select 
                  value={values[prop.name]} 
                  onValueChange={(v) => setValues(prev => ({ ...prev, [prop.name]: v }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {prop.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {prop.controlType === 'boolean' && (
                <Select 
                  value={values[prop.name]} 
                  onValueChange={(v) => setValues(prev => ({ ...prev, [prop.name]: v }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="false">No</SelectItem>
                    <SelectItem value="true">Yes</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>
          ))}
        </div>

        {/* Preview */}
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <MaterialSymbol name="visibility" size={16} weight={300} />
            <span>Preview</span>
          </div>
          <div className="p-4 sm:p-6 lg:p-8 border rounded-lg bg-semantic-surface-subdued overflow-x-auto">
            <div className="flex items-center justify-center w-full min-h-[80px] sm:min-h-[100px] [&_button:disabled]:cursor-not-allowed">
              {renderInteractivePreview(values)}
            </div>
          </div>
        </div>

        {/* Code */}
        <div>
          <div className="mb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <MaterialSymbol name="code" size={16} weight={300} />
              <span>Generated Code</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-7 sm:h-8 gap-1.5 text-xs self-start sm:self-auto"
            >
              <MaterialSymbol name={copied ? "check" : "content_copy"} size={14} weight={300} />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className="p-3 sm:p-4 border rounded-lg bg-muted/50 overflow-x-auto">
            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code>{generatedCode}</code>
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ============================================================================
// Main Component
// ============================================================================

const TABS = [
  'overview',
  'playground',
  'examples', 
  'properties',
  'tokens',
  'usage',
] as const;

export function DocTemplate({ 
  componentDoc, 
  renderPreview,
  renderInteractivePreview,
}: DocTemplateProps): ReactNode {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Determine which tabs to show based on available content
  const hasPlayground = !!(componentDoc.interactiveProps?.length && renderInteractivePreview);
  const hasTokens = !!(componentDoc.tokens?.length);
  const visibleTabs = TABS.filter(tab => {
    if (tab === 'playground') return hasPlayground;
    if (tab === 'tokens') return hasTokens;
    return true;
  });

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 64);
      
      const scrollPosition = scrollY + 150;

      for (let i = visibleTabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(visibleTabs[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(visibleTabs[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleTabs]);

  const handleTabClick = (tabId: string): void => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      // Header (64px) + Tabs bar (~72px) + desired spacing (32px) = 168px
      const offset = 168;
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
        <div>
          <Breadcrumb className="mb-3 sm:mb-4 overflow-x-auto">
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
            {visibleTabs.map((tab) => (
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

        {/* Content wrapper with max-width */}
        <div className="max-w-[1200px]">
          {/* Overview Section */}
          <section id="overview" className="mb-8 sm:mb-12 scroll-mt-[168px]">
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {componentDoc.description}
            </p>
          </section>

          {/* Playground Section (if interactive props are defined) */}
          {hasPlayground && (
            <section id="playground" className="mb-8 sm:mb-12 scroll-mt-[168px]">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Playground</h2>
              <InteractivePlayground 
                componentDoc={componentDoc}
                renderInteractivePreview={renderInteractivePreview}
              />
            </section>
          )}

        {/* Examples Section */}
        <section id="examples" className="mb-8 sm:mb-12 scroll-mt-[168px]">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Examples</h2>
          {componentDoc.examples && componentDoc.examples.length > 0 ? (
            <div className="space-y-6">
              {componentDoc.examples.map((example, index) => (
                <ExampleCard 
                  key={index} 
                  example={example} 
                  renderPreview={renderPreview}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No examples available.</p>
          )}
        </section>

        {/* Properties Section */}
        <section id="properties" className="mb-8 sm:mb-12 scroll-mt-[168px]">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Properties</h2>
          {componentDoc.props && componentDoc.props.length > 0 ? (
            <Card>
              <CardHeader>
                <CardDescription>
                  Available props for the {componentDoc.component} component
                </CardDescription>
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
                              <code className="text-xs sm:text-sm bg-muted px-1 rounded break-all">
                                {prop.name}
                              </code>
                            </td>
                            <td className="p-2">
                              <code className="text-xs sm:text-sm text-muted-foreground break-all">
                                {prop.type}
                              </code>
                            </td>
                            <td className="p-2 text-xs sm:text-sm text-muted-foreground">
                              {prop.default ? (
                                <code className="text-xs sm:text-sm break-all">{prop.default}</code>
                              ) : (
                                '-'
                              )}
                            </td>
                            <td className="p-2 text-xs sm:text-sm text-muted-foreground">
                              {prop.required ? 'Yes' : 'No'}
                            </td>
                            <td className="p-2 text-xs sm:text-sm text-muted-foreground break-words">
                              {prop.description || '-'}
                            </td>
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

        {/* Tokens Section (if tokens are defined) */}
        {hasTokens && (
          <section id="tokens" className="mb-8 sm:mb-12 scroll-mt-[168px]">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Design Tokens</h2>
            <Card>
              <CardHeader>
                <CardDescription>
                  Semantic design tokens used by the {componentDoc.component} component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 text-xs sm:text-sm font-semibold">Token</th>
                          <th className="text-left p-2 text-xs sm:text-sm font-semibold">Category</th>
                          <th className="text-left p-2 text-xs sm:text-sm font-semibold">CSS Variable</th>
                          <th className="text-left p-2 text-xs sm:text-sm font-semibold">Usage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {componentDoc.tokens?.map((token) => {
                          // Check if this token category is color-related
                          const isColorToken = ['surface', 'text', 'stroke', 'icon', 'fill', 'background', 'border', 'color'].includes(token.category.toLowerCase());
                          
                          return (
                            <tr key={token.name} className="border-b">
                              <td className="p-2">
                                <div className="flex items-center gap-2">
                                  {isColorToken && (
                                    <span 
                                      className="inline-block w-4 h-4 rounded border border-[var(--semantic-stroke-subdued)] shrink-0"
                                      style={{ backgroundColor: token.cssVariable }}
                                      aria-hidden="true"
                                    />
                                  )}
                                  <code className="text-xs sm:text-sm bg-muted px-1 rounded break-all">
                                    {token.name}
                                  </code>
                                </div>
                              </td>
                              <td className="p-2">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-muted capitalize">
                                  {token.category}
                                </span>
                              </td>
                              <td className="p-2">
                                <code className="text-xs sm:text-sm text-muted-foreground break-all">
                                  {token.cssVariable}
                                </code>
                              </td>
                              <td className="p-2 text-xs sm:text-sm text-muted-foreground break-words">
                                {token.usage}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Usage Section */}
        <section id="usage" className="mb-8 sm:mb-12 scroll-mt-[168px]">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Usage</h2>
          <div className="space-y-6">
            {(componentDoc.do || componentDoc.dont) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {componentDoc.do && componentDoc.do.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MaterialSymbol 
                          name="check_circle" 
                          size={20} 
                          weight={300} 
                          className="text-[var(--semantic-icon-success)]" 
                        />
                        Do
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {componentDoc.do.map((item, index) => (
                          <li key={index} className="flex gap-3">
                            <MaterialSymbol 
                              name="check" 
                              size={16} 
                              weight={300} 
                              className="text-[var(--semantic-icon-success)] shrink-0 mt-0.5" 
                            />
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
                        <MaterialSymbol 
                          name="cancel" 
                          size={20} 
                          weight={300} 
                          className="text-[var(--semantic-icon-error)]" 
                        />
                        Don&apos;t
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {componentDoc.dont.map((item, index) => (
                          <li key={index} className="flex gap-3">
                            <MaterialSymbol 
                              name="close" 
                              size={16} 
                              weight={300} 
                              className="text-[var(--semantic-icon-error)] shrink-0 mt-0.5" 
                            />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Accessibility Section (if available) */}
            {componentDoc.accessibility && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MaterialSymbol 
                      name="accessibility" 
                      size={20} 
                      weight={300} 
                      className="text-[var(--semantic-icon-interaction-default)]" 
                    />
                    Accessibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground whitespace-pre-line">
                    {componentDoc.accessibility}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
        </div>{/* End content wrapper */}
      </div>
    </div>
  );
}
