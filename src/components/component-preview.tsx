"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";
import { Spinner } from "./ui/spinner";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Kbd, KbdGroup } from "./ui/kbd";
import { Toggle } from "./ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "./ui/button-group";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Calendar } from "./ui/calendar";
import { MaterialSymbol } from "./material-symbol";
import type { ComponentConfig } from "@/lib/components-config";

interface ComponentPreviewProps {
  componentId: ComponentConfig["id"];
  className?: string;
}

/**
 * Renders a mini preview of a component for use in component cards
 */
export function ComponentPreview({ componentId, className }: ComponentPreviewProps) {
  const previews: Partial<Record<ComponentConfig["id"], React.ReactNode>> = {
    button: (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="default">Button</Button>
        <Button size="sm" variant="outline">Outline</Button>
      </div>
    ),
    input: (
      <Input placeholder="Enter text..." className="w-full" />
    ),
    checkbox: (
      <div className="flex items-center gap-2">
        <Checkbox id="preview-check" />
        <label htmlFor="preview-check" className="text-xs">Checkbox</label>
      </div>
    ),
    switch: (
      <div className="flex items-center gap-2">
        <Switch id="preview-switch" />
        <label htmlFor="preview-switch" className="text-xs">Switch</label>
      </div>
    ),
    badge: (
      <div className="flex items-center gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
      </div>
    ),
    avatar: (
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    ),
    card: (
      <Card className="w-full">
        <CardHeader className="p-2">
          <CardTitle className="text-xs">Card Title</CardTitle>
        </CardHeader>
        <CardContent className="p-2">
          <p className="text-xs text-muted-foreground">Card content</p>
        </CardContent>
      </Card>
    ),
    progress: (
      <Progress value={60} className="w-full h-1.5" />
    ),
    "radio-group": (
      <RadioGroup defaultValue="option1" className="flex gap-2">
        <div className="flex items-center gap-1">
          <RadioGroupItem value="option1" id="r1" />
          <label htmlFor="r1" className="text-xs">Option 1</label>
        </div>
        <div className="flex items-center gap-1">
          <RadioGroupItem value="option2" id="r2" />
          <label htmlFor="r2" className="text-xs">Option 2</label>
        </div>
      </RadioGroup>
    ),
    select: (
      <Select>
        <SelectTrigger className="w-full h-7 text-xs">
          <SelectValue placeholder="Select..." />
        </SelectTrigger>
      </Select>
    ),
    slider: (
      <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
    ),
    tabs: (
      <Tabs defaultValue="tab1" className="w-full">
        <TabsList className="h-7">
          <TabsTrigger value="tab1" className="text-xs px-2">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" className="text-xs px-2">Tab 2</TabsTrigger>
        </TabsList>
      </Tabs>
    ),
    alert: (
      <Alert className="py-2">
        <AlertDescription className="text-xs">Alert message</AlertDescription>
      </Alert>
    ),
    separator: (
      <Separator />
    ),
    skeleton: (
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    ),
    spinner: (
      <Spinner className="size-4" />
    ),
    label: (
      <div className="space-y-2 w-full">
        <Label htmlFor="preview-label" className="text-xs">Label</Label>
        <Input id="preview-label" placeholder="Input..." className="w-full h-7 text-xs" />
      </div>
    ),
    textarea: (
      <Textarea placeholder="Enter text..." className="w-full h-12 text-xs resize-none" />
    ),
    kbd: (
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    ),
    toggle: (
      <div className="flex items-center gap-2">
        <Toggle size="sm" aria-label="Toggle">
          <MaterialSymbol name="format_bold" size={14} weight={300} />
        </Toggle>
        <Toggle size="sm" aria-label="Toggle">
          <MaterialSymbol name="format_italic" size={14} weight={300} />
        </Toggle>
      </div>
    ),
    "toggle-group": (
      <ToggleGroup type="multiple" size="sm">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <MaterialSymbol name="format_bold" size={14} weight={300} />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <MaterialSymbol name="format_italic" size={14} weight={300} />
        </ToggleGroupItem>
      </ToggleGroup>
    ),
    tooltip: (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    ),
    typography: (
      <div className="space-y-1 w-full">
        <h4 className="text-xs font-semibold">Heading</h4>
        <p className="text-xs text-muted-foreground">Body text</p>
      </div>
    ),
    accordion: (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-0">
          <AccordionTrigger className="py-1 text-xs">Item 1</AccordionTrigger>
          <AccordionContent className="text-xs text-muted-foreground">
            Content
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    breadcrumb: (
      <Breadcrumb className="text-xs">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><span>Home</span></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    ),
    "button-group": (
      <ButtonGroup>
        <Button size="sm">One</Button>
        <ButtonGroupSeparator />
        <Button size="sm">Two</Button>
        <ButtonGroupSeparator />
        <Button size="sm">Three</Button>
      </ButtonGroup>
    ),
    pagination: (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <span className="h-7 w-7 inline-flex items-center justify-center">
              <MaterialSymbol name="chevron_left" size={14} weight={300} />
            </span>
          </PaginationItem>
          <PaginationItem>
            <span className="h-7 w-7 inline-flex items-center justify-center rounded-md border text-xs">1</span>
          </PaginationItem>
          <PaginationItem>
            <span className="h-7 w-7 inline-flex items-center justify-center text-xs">2</span>
          </PaginationItem>
          <PaginationItem>
            <span className="h-7 w-7 inline-flex items-center justify-center">
              <MaterialSymbol name="chevron_right" size={14} weight={300} />
            </span>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    ),
    table: (
      <div className="w-full overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="h-6">
              <TableHead className="h-6 px-2 text-xs">Name</TableHead>
              <TableHead className="h-6 px-2 text-xs">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="h-6">
              <TableCell className="h-6 px-2 text-xs">Item 1</TableCell>
              <TableCell className="h-6 px-2 text-xs">100</TableCell>
            </TableRow>
            <TableRow className="h-6">
              <TableCell className="h-6 px-2 text-xs">Item 2</TableCell>
              <TableCell className="h-6 px-2 text-xs">200</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
    calendar: (
      <div className="scale-75 origin-center">
        <Calendar mode="single" className="rounded-md border p-1" />
      </div>
    ),
    "input-otp": (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-8 w-8 rounded border border-input bg-background flex items-center justify-center text-xs">
            {i}
          </div>
        ))}
      </div>
    ),
    "input-group": (
      <div className="flex w-full">
        <Input placeholder="Search..." className="rounded-r-none h-7 text-xs" />
        <Button size="sm" className="rounded-l-none h-7">
          <MaterialSymbol name="search" size={14} weight={300} />
        </Button>
      </div>
    ),
    field: (
      <div className="space-y-1 w-full">
        <Label htmlFor="preview-field" className="text-xs">Field Label</Label>
        <Input id="preview-field" placeholder="Value..." className="w-full h-7 text-xs" />
      </div>
    ),
    "native-select": (
      <select className="flex h-7 w-full rounded-md border border-input bg-background px-2 text-xs">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    ),
    combobox: (
      <div className="flex items-center gap-2 w-full">
        <Input placeholder="Search..." className="w-full h-7 text-xs" />
        <MaterialSymbol name="arrow_drop_down" size={16} weight={300} className="text-muted-foreground" />
      </div>
    ),
    "dropdown-menu": (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline">
          Menu
          <MaterialSymbol name="arrow_drop_down" size={14} weight={300} className="ml-1" />
        </Button>
      </div>
    ),
    popover: (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline">Open</Button>
      </div>
    ),
    dialog: (
      <div className="flex items-center gap-2">
        <Button size="sm">Open Dialog</Button>
      </div>
    ),
    "alert-dialog": (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="destructive">Delete</Button>
      </div>
    ),
    drawer: (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline">Open Drawer</Button>
      </div>
    ),
    sheet: (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline">Open Sheet</Button>
      </div>
    ),
    form: (
      <div className="space-y-2 w-full">
        <Input placeholder="Email..." className="w-full h-7 text-xs" />
        <Button size="sm" className="w-full">Submit</Button>
      </div>
    ),
    "date-picker": (
      <div className="flex items-center gap-2">
        <Input placeholder="Pick a date" className="w-full h-7 text-xs" />
        <MaterialSymbol name="calendar_today" size={16} weight={300} className="text-muted-foreground" />
      </div>
    ),
    carousel: (
      <div className="flex items-center gap-1 w-full">
        <div className="h-8 w-8 rounded border bg-muted flex items-center justify-center">
          <MaterialSymbol name="arrow_back" size={14} weight={300} />
        </div>
        <div className="flex-1 h-8 rounded border bg-muted flex items-center justify-center text-xs">
          Slide
        </div>
        <div className="h-8 w-8 rounded border bg-muted flex items-center justify-center">
          <MaterialSymbol name="arrow_forward" size={14} weight={300} />
        </div>
      </div>
    ),
    chart: (
      <div className="w-full h-12 flex items-end justify-center gap-1">
        {[40, 60, 45, 70, 55].map((height, i) => (
          <div
            key={i}
            className="w-3 rounded-t bg-primary"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    ),
    "scroll-area": (
      <div className="w-full h-12 rounded border bg-muted/50 flex items-center justify-center text-xs text-muted-foreground">
        Scrollable content
      </div>
    ),
    resizable: (
      <div className="w-full h-12 flex gap-1">
        <div className="flex-1 rounded border bg-muted/50" />
        <div className="w-1 bg-border" />
        <div className="flex-1 rounded border bg-muted/50" />
      </div>
    ),
    sidebar: (
      <div className="w-full h-12 rounded border bg-muted/50 flex items-center gap-2 px-2">
        <div className="h-6 w-6 rounded bg-primary/20" />
        <div className="flex-1 h-2 rounded bg-muted" />
      </div>
    ),
    "navigation-menu": (
      <div className="flex items-center gap-2 w-full">
        <Button size="sm" variant="ghost">Home</Button>
        <Button size="sm" variant="ghost">About</Button>
        <Button size="sm" variant="ghost">Contact</Button>
      </div>
    ),
    menubar: (
      <div className="flex items-center gap-1 w-full">
        <Button size="sm" variant="ghost" className="h-7 text-xs">File</Button>
        <Button size="sm" variant="ghost" className="h-7 text-xs">Edit</Button>
        <Button size="sm" variant="ghost" className="h-7 text-xs">View</Button>
      </div>
    ),
    command: (
      <div className="w-full rounded border bg-muted/50 p-2">
        <div className="flex items-center gap-2">
          <MaterialSymbol name="search" size={14} weight={300} className="text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Search...</span>
        </div>
      </div>
    ),
    "context-menu": (
      <div className="w-full h-12 rounded border bg-muted/50 flex items-center justify-center text-xs text-muted-foreground">
        Right click me
      </div>
    ),
    "hover-card": (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="link">Hover me</Button>
      </div>
    ),
    collapsible: (
      <div className="w-full">
        <Button size="sm" variant="ghost" className="w-full justify-between">
          <span className="text-xs">Toggle</span>
          <MaterialSymbol name="expand_more" size={14} weight={300} />
        </Button>
      </div>
    ),
    empty: (
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <MaterialSymbol name="inbox" size={20} weight={300} className="text-muted-foreground/40" />
        <p className="text-xs text-muted-foreground">Empty</p>
      </div>
    ),
    item: (
      <div className="flex items-center gap-2 w-full">
        <div className="h-6 w-6 rounded bg-primary/20" />
        <div className="flex-1 h-2 rounded bg-muted" />
      </div>
    ),
    "aspect-ratio": (
      <div className="w-full aspect-video rounded border bg-muted/50 flex items-center justify-center">
        <span className="text-xs text-muted-foreground">16:9</span>
      </div>
    ),
    toast: (
      <div className="w-full rounded border bg-background p-2 flex items-center gap-2">
        <MaterialSymbol name="check_circle" size={14} weight={300} className="text-green-500" />
        <span className="text-xs">Toast message</span>
      </div>
    ),
    sonner: (
      <div className="w-full rounded border bg-background p-2 flex items-center gap-2">
        <MaterialSymbol name="notifications" size={14} weight={300} />
        <span className="text-xs">Notification</span>
      </div>
    ),
    "dataviz-colors": (
      <div className="w-full space-y-2">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="flex-1 h-6 rounded"
              style={{ backgroundColor: `var(--semantic-dataviz-ct-${i})` }}
            />
          ))}
        </div>
        <div className="flex gap-1">
          <div className="flex-1 h-3 rounded" style={{ backgroundColor: "var(--semantic-dataviz-rag-dangermedium)" }} />
          <div className="flex-1 h-3 rounded" style={{ backgroundColor: "var(--semantic-dataviz-rag-warningmedium)" }} />
          <div className="flex-1 h-3 rounded" style={{ backgroundColor: "var(--semantic-dataviz-rag-successmedium)" }} />
        </div>
      </div>
    ),
    "dataviz-line-charts": (
      <div className="w-full h-16 flex items-end">
        <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke="var(--semantic-dataviz-ct-1)"
            strokeWidth="2"
            points="0,35 20,25 40,30 60,15 80,20 100,10"
          />
          <polyline
            fill="none"
            stroke="var(--semantic-dataviz-ct-2)"
            strokeWidth="2"
            points="0,30 20,32 40,20 60,25 80,12 100,18"
          />
          <polyline
            fill="none"
            stroke="var(--semantic-dataviz-ct-3)"
            strokeWidth="2"
            points="0,38 20,35 40,38 60,30 80,28 100,25"
          />
        </svg>
      </div>
    ),
    "dataviz-bar-charts": (
      <div className="w-full h-16 flex items-end justify-center gap-1">
        {[
          { h: 60, color: 1 },
          { h: 85, color: 2 },
          { h: 45, color: 3 },
          { h: 70, color: 4 },
          { h: 55, color: 5 },
          { h: 90, color: 6 },
        ].map((bar, i) => (
          <div
            key={i}
            className="w-4 rounded-t"
            style={{
              height: `${bar.h}%`,
              backgroundColor: `var(--semantic-dataviz-ct-${bar.color})`,
            }}
          />
        ))}
      </div>
    ),
    "dataviz-pie-charts": (
      <div className="w-16 h-16 relative">
        <svg viewBox="0 0 32 32" className="w-full h-full -rotate-90">
          <circle
            r="16"
            cx="16"
            cy="16"
            fill="transparent"
            stroke="var(--semantic-dataviz-ct-1)"
            strokeWidth="32"
            strokeDasharray="40 60"
          />
          <circle
            r="16"
            cx="16"
            cy="16"
            fill="transparent"
            stroke="var(--semantic-dataviz-ct-2)"
            strokeWidth="32"
            strokeDasharray="25 75"
            strokeDashoffset="-40"
          />
          <circle
            r="16"
            cx="16"
            cy="16"
            fill="transparent"
            stroke="var(--semantic-dataviz-ct-3)"
            strokeWidth="32"
            strokeDasharray="20 80"
            strokeDashoffset="-65"
          />
          <circle
            r="16"
            cx="16"
            cy="16"
            fill="transparent"
            stroke="var(--semantic-dataviz-ct-4)"
            strokeWidth="32"
            strokeDasharray="15 85"
            strokeDashoffset="-85"
          />
        </svg>
      </div>
    ),
    "dataviz-advanced": (
      <div className="w-full space-y-1">
        {/* Mini heatmap grid */}
        <div className="grid grid-cols-6 gap-0.5">
          {[
            [0.2, 0.4, 0.6, 0.3, 0.8, 0.5],
            [0.5, 0.7, 0.4, 0.9, 0.6, 0.3],
            [0.3, 0.5, 0.8, 0.6, 0.4, 0.7],
          ].flat().map((opacity, i) => (
            <div
              key={i}
              className="h-3 rounded-sm"
              style={{
                backgroundColor: `var(--semantic-dataviz-ct-1)`,
                opacity: 0.3 + opacity * 0.7,
              }}
            />
          ))}
        </div>
        <div className="text-[8px] text-center text-muted-foreground">Heatmap • Treemap • Gauge</div>
      </div>
    ),
  };

  const preview = previews[componentId];

  if (!preview) {
    // Fallback: show a generic placeholder
    return (
      <div className={className}>
        <div className="flex items-center justify-center h-32 rounded-md border border-dashed border-muted-foreground/20 bg-muted/10 overflow-hidden">
          <MaterialSymbol name="widgets" size={20} weight={300} className="text-muted-foreground/40" />
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex items-center justify-center h-32 rounded-md border border-semantic-stroke-subdued bg-semantic-surface-subdued p-3 overflow-hidden">
        {preview}
      </div>
    </div>
  );
}

