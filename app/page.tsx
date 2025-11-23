"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MaterialSymbol } from "@/components/material-symbol";
import { useNavigation } from "@/contexts/navigation-context";

export default function Home() {
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

  const quickLinks = [
    {
      title: "Browse Components",
      description: "Explore all available components",
      href: "/components",
      icon: "widgets",
      variant: "default" as const,
    },
    {
      title: "Installation Guide",
      description: "Get started with Alize in your project",
      href: "https://github.com/josscuette/alize-ui#getting-started",
      icon: "download",
      variant: "outline" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-semantic-surface-subdued text-sm text-semantic-text-subdued">
            <MaterialSymbol name="auto_awesome" size={16} weight={300} />
            <span>Component Library v0.1.1</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
            Build beautiful interfaces with{" "}
            <span className="text-semantic-text-interaction-default">Alize</span>
          </h1>
          
          <p className="text-lg md:text-xl text-semantic-text-subdued max-w-2xl mx-auto leading-relaxed">
            A comprehensive React component library based on shadcn/ui with custom design tokens 
            and Material Symbols icons. Built for modern web applications with TypeScript and Tailwind CSS v4.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant={link.variant} size="lg" className="w-full sm:w-auto">
                  <MaterialSymbol name={link.icon} size={20} weight={300} />
                  {link.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 bg-semantic-surface-subdued rounded-t-3xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal">Get started</h2>
            <p className="text-lg text-semantic-text-subdued">
              Install Alize in your project and start building beautiful interfaces in minutes.
            </p>
          </div>

          <Card className="border-semantic-stroke-default bg-background">
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
                <p className="text-sm text-semantic-text-subdued mb-4">
                  Then import the components and styles in your project:
                </p>
                <div className="p-4 rounded-md bg-semantic-surface-subdued border border-semantic-stroke-default font-mono text-sm overflow-x-auto">
                  <code className="text-semantic-text-default">
                    {`import { Button } from 'alize'\nimport 'alize/app/globals.css'`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 md:px-8 py-12 border-t border-semantic-stroke-default">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MaterialSymbol name="widgets" size={20} weight={300} className="text-semantic-icon-subdued" />
              <span className="text-sm text-semantic-text-subdued">
                Alize Component Library
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-semantic-text-subdued">
              <a 
                href="https://github.com/josscuette/alize-ui" 
                className="hover:text-semantic-text-interaction-default transition-colors flex items-center gap-2"
              >
                <MaterialSymbol name="code" size={16} weight={300} />
                GitHub
              </a>
              <Link href="/components" className="hover:text-semantic-text-interaction-default transition-colors">
                Components
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
