'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
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
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { FoundationsSidebar } from '../foundations-sidebar';
import type { AnyFoundation, FoundationExample, UsageGuideline, TokenGroup, FoundationToken } from '../types';

// ============================================================================
// Types
// ============================================================================

export interface FoundationTemplateProps {
  /** The foundation documentation data */
  foundation: AnyFoundation;
  /** Custom renderer for token visualization (swatches, spacing vis, etc.) */
  renderTokenGroups: (tokenGroups: TokenGroup<FoundationToken>[]) => ReactNode;
}

// ============================================================================
// Sub-components
// ============================================================================

interface ExampleCardProps {
  example: FoundationExample;
}

function ExampleCard({ example }: ExampleCardProps): ReactNode {
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
          <CardTitle className="text-base">{example.title}</CardTitle>
          {example.description && (
            <CardDescription>{example.description}</CardDescription>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
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
      </CardContent>
    </Card>
  );
}

interface GuidelinesCardProps {
  guidelines: UsageGuideline[];
}

function GuidelinesCard({ guidelines }: GuidelinesCardProps): ReactNode {
  const doGuidelines = guidelines.filter(g => g.type === 'do');
  const dontGuidelines = guidelines.filter(g => g.type === 'dont');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {doGuidelines.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <MaterialSymbol 
                name="check_circle" 
                size={20} 
                weight={300} 
                className="text-[var(--semantic-icon-rag-success-default)]" 
              />
              Do
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {doGuidelines.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <MaterialSymbol 
                    name="check" 
                    size={16} 
                    weight={300} 
                    className="text-[var(--semantic-icon-rag-success-default)] shrink-0 mt-0.5" 
                  />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {dontGuidelines.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <MaterialSymbol 
                name="cancel" 
                size={20} 
                weight={300} 
                className="text-[var(--semantic-icon-rag-danger-default)]" 
              />
              Don&apos;t
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {dontGuidelines.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <MaterialSymbol 
                    name="close" 
                    size={16} 
                    weight={300} 
                    className="text-[var(--semantic-icon-rag-danger-default)] shrink-0 mt-0.5" 
                  />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

const TABS = [
  'overview',
  'tokens',
  'examples',
  'guidelines',
] as const;

export function FoundationTemplate({ 
  foundation, 
  renderTokenGroups,
}: FoundationTemplateProps): ReactNode {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrollingProgrammatically = useRef(false);
  
  // Determine which tabs to show based on available content
  const hasExamples = !!(foundation.examples?.length);
  const hasGuidelines = !!(foundation.guidelines?.length);
  const visibleTabs = TABS.filter(tab => {
    if (tab === 'examples') return hasExamples;
    if (tab === 'guidelines') return hasGuidelines;
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
      <FoundationsSidebar />
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8">
        {/* Breadcrumb */}
        <div>
          <Breadcrumb className="mb-3 sm:mb-4 overflow-x-auto">
            <BreadcrumbList className="flex-wrap">
              <BreadcrumbItem>
                <BreadcrumbLink href="/foundations">Foundations</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <MaterialSymbol name="chevron_right" size={14} weight={300} className="text-muted-foreground" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="break-words">{foundation.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Title */}
        <div className="mb-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold break-words">{foundation.title}</h1>
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
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content wrapper with max-width */}
        <div className="max-w-[1200px]">
          {/* Overview Section */}
          <section id="overview" className="mb-8 sm:mb-12 scroll-mt-[168px]">
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {foundation.longDescription || foundation.description}
            </p>
          </section>

          {/* Tokens Section */}
          <section id="tokens" className="mb-8 sm:mb-12 scroll-mt-[168px]">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Tokens</h2>
            {renderTokenGroups(foundation.tokenGroups)}
          </section>

          {/* Examples Section */}
          {hasExamples && (
            <section id="examples" className="mb-8 sm:mb-12 scroll-mt-[168px]">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Examples</h2>
              <div className="space-y-6">
                {foundation.examples?.map((example, index) => (
                  <ExampleCard key={index} example={example} />
                ))}
              </div>
            </section>
          )}

          {/* Guidelines Section */}
          {hasGuidelines && (
            <section id="guidelines" className="mb-8 sm:mb-12 scroll-mt-[168px]">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Usage Guidelines</h2>
              <GuidelinesCard guidelines={foundation.guidelines || []} />
            </section>
          )}

          {/* Related Topics */}
          {foundation.relatedTopics && foundation.relatedTopics.length > 0 && (
            <section className="mt-12 pt-8 border-t">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Related Foundations</h3>
              <div className="flex flex-wrap gap-2">
                {foundation.relatedTopics.map((topic) => (
                  <Badge key={topic} variant="outline" className="capitalize">
                    {topic}
                  </Badge>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

