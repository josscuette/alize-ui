"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MaterialSymbol } from "@/components/material-symbol";
import { ShowcaseWrapper } from "@/components/showcase-wrapper";
import { Separator } from "@/components/ui/separator";
import { useNavigation } from "@/contexts/navigation-context";
import { Badge } from "@/components/ui/badge";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleCopy}
      title="Copy to clipboard"
      className="h-8 w-8 flex-shrink-0"
    >
      <MaterialSymbol 
        name={copied ? "check" : "content_copy"} 
        size={16} 
        weight={300}
        className={copied ? "text-semantic-icon-rag-success-default" : ""}
      />
    </Button>
  );
}

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
}): React.ReactElement {
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

function CodeBlock({ children, title, copyable = true }: { children: string; title?: string; copyable?: boolean }): React.ReactElement {
  return (
    <div className="space-y-2">
      {title && <p className="text-sm font-medium">{title}</p>}
      <div className="flex items-start justify-between gap-2 p-4 rounded-md bg-semantic-surface-subdued border border-semantic-stroke-default font-mono text-sm overflow-x-auto">
        <pre className="text-semantic-text-default whitespace-pre-wrap flex-1">{children}</pre>
        {copyable && <CopyButton text={children} />}
      </div>
    </div>
  );
}

export default function GetStartedPage(): React.ReactElement {
  const {
    setSidebarSections,
    setShowSearch,
    setShowModifiedFilter,
  } = useNavigation();

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
                Welcome to Alizé! This guide will help you get up and running with our component library.
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
                        <li><strong>Modern:</strong> Uses React 18/19 and Next.js App Router patterns</li>
                        <li><strong>Icon System:</strong> Integrated Material Symbols icon library</li>
                        <li><strong>Data Visualization:</strong> Highcharts integration with theme support</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Section>

            <Section
              id="quick-install"
              title="Quick Installation"
              description="The fastest way to get started with Alize."
            >
              <div className="space-y-4">
                <Card className="border-semantic-stroke-default bg-gradient-to-br from-semantic-surface-default to-semantic-surface-subdued">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <MaterialSymbol name="terminal" size={20} weight={300} />
                        Interactive Installation
                      </CardTitle>
                      <Badge variant="secondary">Recommended</Badge>
                    </div>
                    <CardDescription>
                      Run this command and select the dependencies you need. All options are selected by default.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CodeBlock>npx -y github:Josselin-Cuette_JLLT/alize-ui</CodeBlock>
                    <p className="text-sm text-muted-foreground">
                      Press <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-mono">Enter</kbd> to install everything, 
                      or <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-mono">Space</kbd> to deselect 
                      what you don&apos;t need.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Section>

            <Section
              id="manual-install"
              title="Manual Installation"
              description="Install Alize step by step if you prefer more control."
            >
              <div className="space-y-4">
                <Card className="border-semantic-stroke-default">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MaterialSymbol name="package_2" size={20} weight={300} />
                      Step 1: Install Base Package
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CodeBlock>{`npm install github:Josselin-Cuette_JLLT/alize-ui react react-dom next tailwindcss @tailwindcss/postcss typescript @types/react @types/react-dom @types/node`}</CodeBlock>
                  </CardContent>
                </Card>

                <Card className="border-semantic-stroke-default">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MaterialSymbol name="add_circle" size={20} weight={300} />
                      Step 2: Install Dependencies (as needed)
                    </CardTitle>
                    <CardDescription>
                      Install only what you need for your project.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Core UI</Badge>
                        <span className="text-xs text-muted-foreground">Dialogs, menus, tooltips...</span>
                      </div>
                      <CodeBlock>{`npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip @radix-ui/react-popover @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-accordion @radix-ui/react-checkbox @radix-ui/react-radio-group @radix-ui/react-switch @radix-ui/react-slider @radix-ui/react-progress @radix-ui/react-avatar @radix-ui/react-label @radix-ui/react-separator @radix-ui/react-scroll-area @radix-ui/react-slot @radix-ui/react-toggle @radix-ui/react-toggle-group`}</CodeBlock>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Forms</Badge>
                        <span className="text-xs text-muted-foreground">Form handling with validation</span>
                      </div>
                      <CodeBlock>{`npm install react-hook-form @hookform/resolvers zod`}</CodeBlock>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Charts</Badge>
                        <span className="text-xs text-muted-foreground">Data visualization</span>
                      </div>
                      <CodeBlock>{`npm install highcharts highcharts-react-official`}</CodeBlock>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Calendar</Badge>
                        <span className="text-xs text-muted-foreground">Date picker components</span>
                      </div>
                      <CodeBlock>{`npm install date-fns react-day-picker`}</CodeBlock>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Advanced UI</Badge>
                        <span className="text-xs text-muted-foreground">Carousel, drawers, toasts...</span>
                      </div>
                      <CodeBlock>{`npm install embla-carousel-react react-resizable-panels vaul sonner cmdk input-otp lucide-react`}</CodeBlock>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Theming</Badge>
                        <span className="text-xs text-muted-foreground">Dark/light mode</span>
                      </div>
                      <CodeBlock>{`npm install next-themes`}</CodeBlock>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Section>

            <Section
              id="configuration"
              title="Configuration"
              description="Set up Alize in your project."
            >
              <div className="space-y-4">
                <Card className="border-semantic-stroke-default">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MaterialSymbol name="css" size={20} weight={300} />
                      Import Styles
                    </CardTitle>
                    <CardDescription>
                      Add the Alize CSS to your root layout or app entry point.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CodeBlock title="app/layout.tsx (Next.js)">{`import "alize-ui/dist/alize.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}</CodeBlock>
                  </CardContent>
                </Card>

                <Card className="border-semantic-stroke-default">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MaterialSymbol name="code" size={20} weight={300} />
                      Use Components
                    </CardTitle>
                    <CardDescription>
                      Import and use any component from Alize.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CodeBlock>{`import { Button, Card, Input, Badge } from "alize-ui";
import { MaterialSymbol } from "alize-ui";

export function MyComponent() {
  return (
    <Card>
      <Button>
        <MaterialSymbol name="check" size={16} weight={300} />
        Click me
      </Button>
    </Card>
  );
}`}</CodeBlock>
                  </CardContent>
                </Card>

                <Card className="border-semantic-stroke-default">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MaterialSymbol name="palette" size={20} weight={300} />
                      Theme Setup (Optional)
                    </CardTitle>
                    <CardDescription>
                      Enable dark/light mode switching with next-themes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CodeBlock title="app/layout.tsx">{`import { ThemeProvider } from "next-themes";
import "alize-ui/dist/alize.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          value={{ light: "theme-light", dark: "theme-dark" }}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}</CodeBlock>
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
                          href="https://github.com/Josselin-Cuette_JLLT/alize-ui" 
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
