"use client";

import { Button } from "alize";
import { Input } from "alize";
import { Checkbox } from "alize";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "alize";
import { MaterialSymbol } from "alize";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-semantic-surface-default">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-semantic-text-default">
            Alize Next.js Boilerplate
          </h1>
          <p className="text-lg text-semantic-text-subdued">
            Complete integration example with Tailwind v4, preset, plugin, and CSS
          </p>
        </div>

        {/* Buttons Section */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>All button variants and sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="icon" aria-label="Settings">
                <MaterialSymbol name="settings" size={20} />
              </Button>
              <Button size="icon-sm" aria-label="Close">
                <MaterialSymbol name="close" size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Form Elements Section */}
        <Card>
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
            <CardDescription>Input, Checkbox, and other form controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Enter your name..." />
            <Input type="email" placeholder="Enter your email..." />
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm text-semantic-text-default">
                Accept terms and conditions
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Semantic Tokens Section */}
        <Card>
          <CardHeader>
            <CardTitle>Semantic Tokens</CardTitle>
            <CardDescription>Demonstrating semantic color tokens</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-md bg-semantic-surface-primary text-semantic-text-reversedpersistent">
                Primary Surface
              </div>
              <div className="p-4 rounded-md bg-semantic-surface-secondary text-semantic-text-default">
                Secondary Surface
              </div>
              <div className="p-4 rounded-md bg-semantic-surface-subdued text-semantic-text-default">
                Subdued Surface
              </div>
              <div className="p-4 rounded-md bg-semantic-surface-interaction-strong text-semantic-text-reversedpersistent">
                Interaction Strong
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-md border border-semantic-stroke-default text-semantic-text-default">
                Default Stroke
              </div>
              <div className="p-4 rounded-md border border-semantic-stroke-interaction-default text-semantic-text-interaction-default">
                Interaction Stroke
              </div>
              <div className="p-4 rounded-md border border-semantic-stroke-rag-danger-default text-semantic-text-rag-danger-default">
                Danger Stroke
              </div>
              <div className="p-4 rounded-md border border-semantic-stroke-rag-success-default text-semantic-text-rag-success-default">
                Success Stroke
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography Section */}
        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>Text styles using semantic tokens</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <h2 className="text-2xl font-bold text-semantic-text-default">Heading</h2>
            <p className="text-base text-semantic-text-default">Default text</p>
            <p className="text-sm text-semantic-text-subdued">Subdued text</p>
            <p className="text-sm text-semantic-text-interaction-default">Interaction text</p>
            <p className="text-sm text-semantic-text-rag-danger-default">Danger text</p>
            <p className="text-sm text-semantic-text-rag-success-default">Success text</p>
          </CardContent>
        </Card>

        {/* Radius and Spacing Section */}
        <Card>
          <CardHeader>
            <CardTitle>Radius & Spacing</CardTitle>
            <CardDescription>Border radius and spacing tokens</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-sm bg-semantic-surface-primary"></div>
              <div className="w-16 h-16 rounded-md bg-semantic-surface-primary"></div>
              <div className="w-16 h-16 rounded-lg bg-semantic-surface-primary"></div>
              <div className="w-16 h-16 rounded-xl bg-semantic-surface-primary"></div>
              <div className="w-16 h-16 rounded-full bg-semantic-surface-primary"></div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive States Section */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive States</CardTitle>
            <CardDescription>Hover, focus, and disabled states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button>Hover me</Button>
              <Button disabled>Disabled</Button>
              <Button className="focus-ring">Focus me</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

