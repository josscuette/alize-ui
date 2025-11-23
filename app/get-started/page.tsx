"use client";

import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MaterialSymbol } from "@/components/material-symbol";
import { ShowcaseWrapper } from "@/components/showcase-wrapper";
import { Separator } from "@/components/ui/separator";
import { useNavigation } from "@/contexts/navigation-context";

function Section({ 
  id, 
  title, 
  description, 
  children 
}: { 
  id: string; 
  title: string; 
  description: string; 
  children: React.ReactNode;
}) {
  return (
    <section id={id} data-showcase-section className="space-y-6">
      <div className="space-y-1">
        <h3 data-section-title className="text-2xl font-normal">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="mt-6">
        {children}
      </div>
      <Separator className="bg-semantic-stroke-subdued" />
    </section>
  );
}

export default function GetStartedPage() {
  const {
    setSidebarSections,
    setShowSearch,
    setShowModifiedFilter,
  } = useNavigation();

  // Reset navigation context for pages without subpages
  useEffect(() => {
    setSidebarSections([]);
    setShowSearch(false);
    setShowModifiedFilter(false);
  }, [setSidebarSections, setShowSearch, setShowModifiedFilter]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 md:px-8 py-8">
        <ShowcaseWrapper>
          <div className="max-w-4xl mx-auto space-y-8">
            <header className="space-y-2">
              <h1 className="text-3xl font-normal text-foreground">Get Started</h1>
              <p className="text-muted-foreground max-w-3xl leading-relaxed">
                Welcome to Alize! This guide will help you get up and running with our component library.
              </p>
            </header>

            <Section
              id="introduction"
              title="Introduction"
              description="Learn about Alize and what makes it special."
            >
              <div className="space-y-4">
                <Card className="border-semantic-stroke-default">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MaterialSymbol name="auto_awesome" size={20} weight={300} />
                      What is Alize?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Alize is a comprehensive React component library based on shadcn/ui with custom design tokens 
                      and Material Symbols icons. Built for modern web applications with TypeScript and Tailwind CSS v4.
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Key Features:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-2">
                        <li><strong>Type-safe:</strong> Full TypeScript support with exported types</li>
                        <li><strong>Customizable:</strong> Built on Tailwind CSS with semantic design tokens</li>
                        <li><strong>Accessible:</strong> Built on Radix UI primitives with built-in accessibility</li>
                        <li><strong>Modern:</strong> Uses React 18+ and Next.js App Router patterns</li>
                        <li><strong>Icon System:</strong> Integrated Material Symbols icon library</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Section>

            <Section
              id="how-to-install"
              title="How to Install"
              description="Install Alize in your project and start building beautiful interfaces."
            >
              <div className="space-y-4">
                <Card className="border-semantic-stroke-default">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MaterialSymbol name="terminal" size={20} weight={300} />
                      Installation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Install via GitHub:</p>
                      <div className="p-4 rounded-md bg-semantic-surface-subdued border border-semantic-stroke-default font-mono text-sm overflow-x-auto">
                        <code className="text-semantic-text-default">
                          npm install git+https://github.com/josscuette/alize-ui.git
                        </code>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-semantic-stroke-default">
                      <p className="text-sm text-muted-foreground mb-4">
                        Then import the components and styles in your project:
                      </p>
                      <div className="p-4 rounded-md bg-semantic-surface-subdued border border-semantic-stroke-default font-mono text-sm overflow-x-auto">
                        <code className="text-semantic-text-default">
                          {`import { Button } from 'alize'\nimport 'alize/app/globals.css'`}
                        </code>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-semantic-stroke-default">
                      <p className="text-sm font-medium mb-2">Required Peer Dependencies:</p>
                      <div className="p-4 rounded-md bg-semantic-surface-subdued border border-semantic-stroke-default font-mono text-sm overflow-x-auto">
                        <code className="text-semantic-text-default">
                          {`react >= 18.0.0\nreact-dom >= 18.0.0\ntailwindcss >= 4.0.0`}
                        </code>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-semantic-stroke-default">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MaterialSymbol name="settings" size={20} weight={300} />
                      Configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">1. Configure Tailwind CSS</p>
                      <p className="text-sm text-muted-foreground">
                        Make sure your <code className="px-1 py-0.5 bg-muted rounded text-xs">tailwind.config.ts</code> includes the Alize theme configuration.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">2. Import Global Styles</p>
                      <p className="text-sm text-muted-foreground">
                        Import the global CSS file in your root layout or <code className="px-1 py-0.5 bg-muted rounded text-xs">_app.tsx</code>.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">3. Set Up Material Symbols</p>
                      <p className="text-sm text-muted-foreground">
                        The Material Symbols font is included in the global styles. No additional setup required.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Section>

            <Section
              id="feedback"
              title="Feedback"
              description="We'd love to hear from you! Share your thoughts, report issues, or contribute to the project."
            >
              <div className="space-y-4">
                <Card className="border-semantic-stroke-default">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MaterialSymbol name="feedback" size={20} weight={300} />
                      Get in Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">GitHub</h4>
                      <p className="text-sm text-muted-foreground">
                        Report issues, suggest features, or contribute to the project on our{" "}
                        <a 
                          href="https://github.com/josscuette/alize-ui" 
                          className="text-semantic-text-interaction-default hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub repository
                        </a>
                        .
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Documentation</h4>
                      <p className="text-sm text-muted-foreground">
                        Browse the component documentation to see all available components and their usage examples.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Contributing</h4>
                      <p className="text-sm text-muted-foreground">
                        We welcome contributions! Please check our contribution guidelines on GitHub before submitting a pull request.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Section>
          </div>
        </ShowcaseWrapper>
      </main>
    </div>
  );
}

