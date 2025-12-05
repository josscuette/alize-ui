'use client';

import { useState, useEffect, useMemo, useRef, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
import { Input } from '@/components/ui/input';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { DocsSidebar } from '../docs-sidebar';
import type { Component, ComponentExample, InteractiveProp, ComponentToken, InteractionState, ChangelogEntry } from '../types';

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
  /** Function to render states playground preview for the specific component */
  renderStatesPreview?: (activeState: 'hover' | 'focus' | 'pressed' | 'disabled') => ReactNode;
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
            <div className="p-4 sm:p-6 lg:p-8 border rounded-lg bg-[var(--semantic-surface-overlays-level1)]/40 overflow-x-auto">
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
// States Playground
// ============================================================================

interface StatesPlaygroundProps {
  interactionStates: InteractionState[];
  componentName: string;
  renderStatesPreview?: (activeState: 'hover' | 'focus' | 'pressed' | 'disabled') => ReactNode;
}

function StatesPlayground({ interactionStates, componentName, renderStatesPreview }: StatesPlaygroundProps): ReactNode {
  const [copied, setCopied] = useState(false);
  const [activeDemo, setActiveDemo] = useState<'hover' | 'focus' | 'pressed' | 'disabled'>('hover');

  // Generate code example for states
  const generatedCode = useMemo(() => {
    const relevantStates = interactionStates.filter(s => 
      ['hover', 'focus', 'pressed', 'disabled'].includes(s.state)
    );
    
    if (relevantStates.length === 0) {
      return `// No interaction states defined for ${componentName}`;
    }

    const foundationImports = relevantStates
      .filter(s => s.foundationToken)
      .map(s => s.foundationToken?.split('.').pop())
      .filter(Boolean);
    
    const uniqueTokens = [...new Set(foundationImports)];

    return `import { states } from '@/foundation';
import { cn } from '@/lib/utils';

// Apply states using foundation layer
className={cn(
  // ... component styles
  ${uniqueTokens.map(t => `states.${t}`).join(',\n  ')}
)}`;
  }, [interactionStates, componentName]);

  const handleCopy = (): void => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // If no render function provided, don't show the playground
  if (!renderStatesPreview) {
    return null;
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MaterialSymbol name="touch_app" size={20} weight={300} />
          States Playground
        </CardTitle>
        <CardDescription>
          Interact with the {componentName} below to see how states work. Hover, focus (tab), and click to see the visual feedback.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Interactive Demo */}
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <MaterialSymbol name="visibility" size={16} weight={300} />
            <span>Interactive Preview</span>
          </div>
          
          {/* Demo Selector */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(['hover', 'focus', 'pressed', 'disabled'] as const).map((state) => (
              <Button
                key={state}
                variant={activeDemo === state ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveDemo(state)}
                className="capitalize"
              >
                {state}
              </Button>
            ))}
          </div>

          {/* Demo Area */}
          <div className="p-6 sm:p-8 border rounded-lg bg-[var(--semantic-surface-overlays-level1)]/40">
            <div className="flex flex-col items-center gap-4">
              <p className="text-xs text-muted-foreground text-center">
                {activeDemo === 'hover' && 'Hover over the component to see the hover state'}
                {activeDemo === 'focus' && 'Click or press Tab to see the focus ring'}
                {activeDemo === 'pressed' && 'Click and hold to see the pressed effect'}
                {activeDemo === 'disabled' && 'Disabled state - cannot be interacted with'}
              </p>
              <div className="flex items-center justify-center min-h-[80px]">
                {renderStatesPreview(activeDemo)}
              </div>
            </div>
          </div>
        </div>

        {/* Visual State Reference */}
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <MaterialSymbol name="palette" size={16} weight={300} />
            <span>State Visual Reference</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-lg border text-center">
              <div className="w-full h-12 rounded bg-[var(--semantic-surface-overlays-level1)] mb-2" />
              <p className="text-xs font-medium">Hover</p>
              <p className="text-[10px] text-muted-foreground">Overlay background</p>
            </div>
            <div className="p-4 rounded-lg border text-center">
              <div className="w-full h-12 rounded bg-muted ring-[3px] ring-[var(--semantic-surface-interaction-strong)]/50 mb-2" />
              <p className="text-xs font-medium">Focus</p>
              <p className="text-[10px] text-muted-foreground">Ring indicator</p>
            </div>
            <div className="p-4 rounded-lg border text-center">
              <div className="w-full h-12 rounded bg-muted scale-[0.98] mb-2" />
              <p className="text-xs font-medium">Pressed</p>
              <p className="text-[10px] text-muted-foreground">Scale reduction</p>
            </div>
            <div className="p-4 rounded-lg border text-center">
              <div className="w-full h-12 rounded bg-muted opacity-50 mb-2" />
              <p className="text-xs font-medium">Disabled</p>
              <p className="text-[10px] text-muted-foreground">50% opacity</p>
            </div>
          </div>
        </div>

        {/* Code Preview */}
        <div>
          <div className="mb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <MaterialSymbol name="code" size={16} weight={300} />
              <span>Usage Example</span>
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
      
      // Skip internal props like showImage
      if (prop.name === 'showImage') return;
      
      // Skip if value is default
      if (value === defaultValue) return;
      
      // Handle special cases for Button
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
    
    // Handle icon-only size mapping for Button
    if (isIconOnly && componentName === 'Button') {
      const sizeValue = values['size'] || 'default';
      const sizeMap: Record<string, string> = {
        'xs': 'icon-xs',
        'sm': 'icon-sm',
        'default': 'icon',
        'lg': 'icon-lg',
      };
      const iconSize = sizeMap[sizeValue] || 'icon';
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
    
    // Generate component-specific code
    const generateComponentCode = (): string => {
      switch (componentName) {
        case 'Button':
          if (isIconOnly) {
            return `import { Button } from '${importPath}';\nimport { MaterialSymbol } from '@/components/material-symbol';\n\n<Button${propsString}>\n  <MaterialSymbol name="add" size={20} weight={300} />\n</Button>`;
          }
          return `import { Button } from '${importPath}';\n\n<Button${propsString}>Click me</Button>`;
        
        case 'Avatar': {
          const size = values['size'] || 'md';
          const showImage = values['showImage'] === 'true';
          const avatarProps = propsArr.filter(p => !p.startsWith('size=')).join(' ');
          const avatarPropsStr = avatarProps ? ` ${avatarProps}` : '';
          if (showImage) {
            return `import { Avatar, AvatarImage, AvatarFallback } from '${importPath}';\n\n<Avatar size="${size}"${avatarPropsStr}>\n  <AvatarImage src="/user.jpg" alt="User" />\n  <AvatarFallback size="${size}">JD</AvatarFallback>\n</Avatar>`;
          }
          return `import { Avatar, AvatarFallback } from '${importPath}';\n\n<Avatar size="${size}"${avatarPropsStr}>\n  <AvatarFallback size="${size}">JD</AvatarFallback>\n</Avatar>`;
        }
        
        case 'Badge':
          return `import { Badge } from '${importPath}';\n\n<Badge${propsString}>Badge Label</Badge>`;
        
        case 'Checkbox': {
          const isChecked = values['checked'] === 'true';
          const isDisabled = values['disabled'] === 'true';
          const checkboxProps = [isChecked && 'defaultChecked', isDisabled && 'disabled'].filter(Boolean).join(' ');
          const checkboxPropsStr = checkboxProps ? ` ${checkboxProps}` : '';
          return `import { Checkbox } from '${importPath}';\n\n<label className="flex items-center gap-2">\n  <Checkbox${checkboxPropsStr} />\n  <span>Label</span>\n</label>`;
        }
        
        case 'Input': {
          const inputType = values['type'] || 'text';
          const isDisabled = values['disabled'] === 'true';
          const isInvalid = values['invalid'] === 'true';
          const inputPropsArr = [];
          if (inputType !== 'text') inputPropsArr.push(`type="${inputType}"`);
          if (isDisabled) inputPropsArr.push('disabled');
          if (isInvalid) inputPropsArr.push('aria-invalid={true}');
          const inputPropsStr = inputPropsArr.length > 0 ? ` ${inputPropsArr.join(' ')}` : '';
          return `import { Input } from '${importPath}';\n\n<Input${inputPropsStr} placeholder="Enter text..." />`;
        }
        
        case 'Switch': {
          const isChecked = values['checked'] === 'true';
          const isDisabled = values['disabled'] === 'true';
          const switchProps = [isChecked && 'defaultChecked', isDisabled && 'disabled'].filter(Boolean).join(' ');
          const switchPropsStr = switchProps ? ` ${switchProps}` : '';
          return `import { Switch } from '${importPath}';\n\n<Switch${switchPropsStr} />`;
        }
        
        case 'Toggle':
          return `import { Toggle } from '${importPath}';\nimport { MaterialSymbol } from '@/components/material-symbol';\n\n<Toggle${propsString} aria-label="Toggle">\n  <MaterialSymbol name="format_bold" size={16} weight={300} />\n</Toggle>`;
        
        case 'Spinner': {
          const size = values['size'] || 'default';
          const sizeClass = size === 'sm' ? 'size-4' : size === 'lg' ? 'size-8' : 'size-6';
          return `import { Spinner } from '${importPath}';\n\n<Spinner className="${sizeClass}" />`;
        }
        
        case 'Progress': {
          const progressValue = values['value'] || '50';
          return `import { Progress } from '${importPath}';\n\n<Progress value={${progressValue}} />`;
        }
        
        case 'Alert': {
          const variant = values['variant'] || 'default';
          const variantProp = variant !== 'default' ? ` variant="${variant}"` : '';
          return `import { Alert, AlertTitle, AlertDescription } from '${importPath}';\n\n<Alert${variantProp}>\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>You can add components to your app.</AlertDescription>\n</Alert>`;
        }
        
        case 'Logo': {
          const size = values['size'] || 'default';
          const productName = values['productName'] || '';
          const isCollapsed = values['collapsed'] === 'true';
          const logoPropsArr = [];
          if (size !== 'default') logoPropsArr.push(`size="${size}"`);
          if (productName) logoPropsArr.push(`productName="${productName}"`);
          if (isCollapsed) logoPropsArr.push('collapsed');
          const logoPropsStr = logoPropsArr.length > 0 ? ` ${logoPropsArr.join(' ')}` : '';
          return `import { Logo } from '${importPath}';\n\n<Logo${logoPropsStr} />`;
        }
        
        default:
          // Generic fallback
          return `import { ${componentName} } from '${importPath}';\n\n<${componentName}${propsString} />`;
      }
    };
    
    return generateComponentCode();
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
            <div key={prop.name} className="flex-1 min-w-[180px] max-w-[50%]">
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
              {prop.controlType === 'text' && (
                <Input
                  value={values[prop.name]}
                  onChange={(e) => setValues(prev => ({ ...prev, [prop.name]: e.target.value }))}
                  placeholder={prop.placeholder || `Enter ${prop.label.toLowerCase()}...`}
                />
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
          <div className="p-4 sm:p-6 lg:p-8 border rounded-lg bg-[var(--semantic-surface-overlays-level1)]/40 overflow-x-auto">
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
  'states',
  'tokens',
  'usage',
  'api',
  'changelog',
] as const;

export function DocTemplate({ 
  componentDoc, 
  renderPreview,
  renderInteractivePreview,
  renderStatesPreview,
}: DocTemplateProps): ReactNode {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrollingProgrammatically = useRef(false);
  
  // Determine which tabs to show based on available content
  const hasPlayground = !!(componentDoc.interactiveProps?.length && renderInteractivePreview);
  const hasTokens = !!(componentDoc.tokens?.length);
  const hasInteractionStates = !!(componentDoc.interactionStates?.length);
  const hasApiDocs = !!(componentDoc.apiDocs?.trim());
  const hasChangelog = !!(componentDoc.changelog?.length);
  const visibleTabs = TABS.filter(tab => {
    if (tab === 'playground') return hasPlayground;
    if (tab === 'tokens') return hasTokens;
    if (tab === 'states') return hasInteractionStates;
    if (tab === 'api') return hasApiDocs;
    if (tab === 'changelog') return hasChangelog;
    return true;
  });

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 64);
      
      // Don't update active tab during programmatic scroll
      if (isScrollingProgrammatically.current) return;
      
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
      // Disable scroll-based tab updates during programmatic scroll
      isScrollingProgrammatically.current = true;
      
      // Header (64px) + Tabs bar (~72px) + desired spacing (32px) = 168px
      const offset = 168;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Re-enable scroll-based tab updates after animation completes
      setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 500);
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

        {/* Interaction States Section (if interactionStates are defined) */}
        {hasInteractionStates && (
          <section id="states" className="mb-8 sm:mb-12 scroll-mt-[168px]">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Interaction States</h2>
            
            {/* States Playground */}
            <StatesPlayground 
              interactionStates={componentDoc.interactionStates || []}
              componentName={componentDoc.component}
              renderStatesPreview={renderStatesPreview}
            />
            
            <Card className="mt-6">
              <CardHeader>
                <CardDescription>
                  Visual states for hover, focus, press, and other interactions on the {componentDoc.component} component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 text-xs sm:text-sm font-semibold">State</th>
                          <th className="text-left p-2 text-xs sm:text-sm font-semibold">Description</th>
                          <th className="text-left p-2 text-xs sm:text-sm font-semibold">CSS Class</th>
                          <th className="text-left p-2 text-xs sm:text-sm font-semibold">Foundation Token</th>
                        </tr>
                      </thead>
                      <tbody>
                        {componentDoc.interactionStates?.map((state, index) => (
                          <tr key={`${state.state}-${index}`} className="border-b">
                            <td className="p-2">
                              <span className={cn(
                                "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize",
                                state.state === 'hover' && "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
                                state.state === 'focus' && "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
                                state.state === 'pressed' && "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
                                state.state === 'disabled' && "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
                                state.state === 'checked' && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
                                state.state === 'open' && "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
                                state.state === 'selected' && "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
                              )}>
                                {state.state}
                              </span>
                            </td>
                            <td className="p-2 text-xs sm:text-sm text-muted-foreground break-words">
                              {state.description}
                            </td>
                            <td className="p-2">
                              <code className="text-xs sm:text-sm bg-muted px-1 rounded break-all">
                                {state.cssClass}
                              </code>
                            </td>
                            <td className="p-2">
                              {state.foundationToken ? (
                                <code className="text-xs sm:text-sm text-muted-foreground break-all">
                                  {state.foundationToken}
                                </code>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

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

        {/* API Section (if apiDocs are available) - At the end for advanced users */}
        {hasApiDocs && (
          <section id="api" className="mb-8 sm:mb-12 scroll-mt-[168px]">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold">API Reference</h2>
              <Badge variant="secondary" className="text-xs">
                <MaterialSymbol name="auto_awesome" size={12} weight={300} className="mr-1" />
                Auto-generated
              </Badge>
            </div>
            <Card>
              <CardHeader>
                <CardDescription>
                  TypeScript interfaces, types, and function signatures for the {componentDoc.component} component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="api-docs-content">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({ children }) => (
                        <h2 className="text-lg font-semibold mt-8 mb-4 pb-2 border-b first:mt-0">{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-base font-semibold mt-6 mb-3 text-[var(--semantic-text-interaction-default)]">{children}</h3>
                      ),
                      h4: ({ children }) => (
                        <h4 className="text-sm font-medium mt-4 mb-2 text-muted-foreground">{children}</h4>
                      ),
                      p: ({ children }) => (
                        <p className="text-sm leading-relaxed mb-3 text-muted-foreground">{children}</p>
                      ),
                      code: ({ className, children, ...props }) => {
                        const isInline = !className;
                        if (isInline) {
                          return (
                            <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono" {...props}>
                              {children}
                            </code>
                          );
                        }
                        return (
                          <code className={cn("text-xs", className)} {...props}>
                            {children}
                          </code>
                        );
                      },
                      pre: ({ children }) => (
                        <pre className="bg-muted text-xs p-4 rounded-lg overflow-x-auto mb-4 border">
                          {children}
                        </pre>
                      ),
                      table: ({ children }) => (
                        <div className="overflow-x-auto mb-6 border rounded-lg">
                          <table className="w-full text-xs border-collapse">
                            {children}
                          </table>
                        </div>
                      ),
                      thead: ({ children }) => (
                        <thead className="bg-muted/50">{children}</thead>
                      ),
                      th: ({ children }) => (
                        <th className="text-left p-3 font-semibold border-b whitespace-nowrap">{children}</th>
                      ),
                      td: ({ children }) => (
                        <td className="p-3 border-b align-top">{children}</td>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside text-sm space-y-1 mb-4 text-muted-foreground">{children}</ul>
                      ),
                      li: ({ children }) => (
                        <li className="text-sm">{children}</li>
                      ),
                      a: ({ href, children }) => (
                        <a href={href} className="text-[var(--semantic-text-interaction-default)] hover:underline">{children}</a>
                      ),
                    }}
                  >
                    {componentDoc.apiDocs || ''}
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Changelog Section */}
        {hasChangelog && (
          <section id="changelog" className="mb-8 sm:mb-12 scroll-mt-[168px]">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold">Changelog</h2>
            </div>
            <Card>
              <CardHeader>
                <CardDescription>
                  History of changes and updates to the {componentDoc.component} component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {componentDoc.changelog?.map((entry, index) => (
                    <div key={index} className="relative pl-6 pb-6 border-l-2 border-[var(--semantic-stroke-subdued)] last:pb-0">
                      {/* Timeline dot */}
                      <div className={cn(
                        "absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-background",
                        entry.type === 'added' && "bg-[var(--semantic-surface-rag-success-strong)]",
                        entry.type === 'changed' && "bg-[var(--semantic-surface-interaction-strong)]",
                        entry.type === 'deprecated' && "bg-[var(--semantic-surface-rag-warning-strong)]",
                        entry.type === 'removed' && "bg-[var(--semantic-surface-rag-danger-strong)]",
                        entry.type === 'fixed' && "bg-[var(--semantic-tonal-violet-strong)]",
                        entry.type === 'security' && "bg-[var(--semantic-tonal-magenta-strong)]",
                      )} />
                      
                      {/* Entry header */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-semibold text-sm">v{entry.version}</span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(entry.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                        <Badge 
                          variant={
                            entry.type === 'added' ? 'success' :
                            entry.type === 'removed' || entry.type === 'security' ? 'destructive' :
                            entry.type === 'deprecated' ? 'warning' :
                            'secondary'
                          }
                          className="text-xs capitalize"
                        >
                          {entry.type}
                        </Badge>
                        {entry.breaking && (
                          <Badge variant="destructive" className="text-xs">
                            <MaterialSymbol name="warning" size={10} weight={300} className="mr-1" />
                            Breaking
                          </Badge>
                        )}
                      </div>
                      
                      {/* Entry description */}
                      <p className="text-sm text-muted-foreground">{entry.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}
        </div>{/* End content wrapper */}
      </div>
    </div>
  );
}
