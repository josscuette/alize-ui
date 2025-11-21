"use client";

import * as React from "react";
import { useState } from "react";
import { ComponentConfig } from "../lib/components-config";
import { cn } from "../lib/utils";
import { MaterialSymbol } from "./material-symbol";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "./ui/button-group";
import { Checkbox, CheckboxCard } from "./ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "./ui/field";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem, RadioGroupCardItem } from "./ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel, SelectSeparator } from "./ui/select";
import { Slider } from "./ui/slider";
import { Switch, SwitchCard } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";
import { Spinner } from "./ui/spinner";
import { Kbd, KbdGroup } from "./ui/kbd";
import { Toggle } from "./ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyCode,
} from "./ui/typography";
import { AspectRatio } from "./ui/aspect-ratio";
import { Empty } from "./ui/empty";
import { Item } from "./ui/item";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Popover, PopoverContent, PopoverTrigger, PopoverAnchor } from "./ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuShortcut,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "./ui/context-menu";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "./ui/command";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "./ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from "./ui/native-select";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "./ui/input-otp";
import { InputGroup } from "./ui/input-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useForm } from "react-hook-form";
import { Calendar } from "./ui/calendar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./ui/sidebar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis } from "recharts";

interface ComponentShowcaseProps {
  componentId: ComponentConfig["id"] | "foundation-layer";
}

interface ShowcaseEntry {
  title: string;
  description: string;
  body: React.ReactElement;
}

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

function Section({ title, description, children }: SectionProps) {
  return (
    <>
      <section className="space-y-3" data-showcase-section>
        <div className="space-y-1">
          <h3 className="text-lg font-normal text-foreground" data-section-title>{title}</h3>
          {description && <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>}
        </div>
        <div className="mt-8">{children}</div>
      </section>
      <Separator className="bg-semantic-stroke-subdued" />
    </>
  );
}

const chartData = [
  { label: "Q1", main: 21, secondary: 16 },
  { label: "Q2", main: 28, secondary: 22 },
  { label: "Q3", main: 31, secondary: 18 },
  { label: "Q4", main: 36, secondary: 25 },
];

const showcaseRegistry: Partial<Record<ComponentConfig["id"] | "foundation-layer", ShowcaseEntry>> = {
  "foundation-layer": {
    title: "Foundation Layer",
    description: "The canonical source of truth for all semantic Tailwind classes used across the Alize design system. A professional, scalable architecture that ensures consistency and maintainability.",
    body: (
      <>
        <Section title="Introduction" description="The Foundation Layer is our design system's style architecture. It provides a centralized, type-safe, and semantic approach to styling components.">
          <div className="space-y-4">
            <div className="p-6 rounded-lg border bg-card space-y-3">
              <h4 className="text-base font-medium">Why Foundation Layer?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li><strong>Single Source of Truth:</strong> All semantic classes are defined in one place</li>
                <li><strong>Type Safety:</strong> TypeScript ensures correct usage with autocomplete</li>
                <li><strong>Consistency:</strong> Standardized naming and structure across all modules</li>
                <li><strong>Maintainability:</strong> Update styles globally by modifying one file</li>
                <li><strong>Composability:</strong> Combine classes using the <code className="px-1 py-0.5 bg-muted rounded text-xs">cn()</code> utility</li>
                <li><strong>Semantic First:</strong> All classes use semantic tokens (<code className="px-1 py-0.5 bg-muted rounded text-xs">semantic-*</code>)</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Structure" description="The Foundation Layer is organized into 9 modules, each handling a specific aspect of styling.">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg border bg-card space-y-2">
              <div className="flex items-center gap-2">
                <MaterialSymbol name="palette" size={20} weight={300} className="text-semantic-icon-subdued" />
                <h4 className="text-sm font-medium">surfaces.ts</h4>
              </div>
              <p className="text-xs text-muted-foreground">Background colors and surface tokens</p>
            </div>
            <div className="p-4 rounded-lg border bg-card space-y-2">
              <div className="flex items-center gap-2">
                <MaterialSymbol name="text_fields" size={20} weight={300} className="text-semantic-icon-subdued" />
                <h4 className="text-sm font-medium">text.ts</h4>
              </div>
              <p className="text-xs text-muted-foreground">Text color semantic classes</p>
            </div>
            <div className="p-4 rounded-lg border bg-card space-y-2">
              <div className="flex items-center gap-2">
                <MaterialSymbol name="image" size={20} weight={300} className="text-semantic-icon-subdued" />
                <h4 className="text-sm font-medium">icon.ts</h4>
              </div>
              <p className="text-xs text-muted-foreground">Icon colors for Material Symbols</p>
            </div>
            <div className="p-4 rounded-lg border bg-card space-y-2">
              <div className="flex items-center gap-2">
                <MaterialSymbol name="border_style" size={20} weight={300} className="text-semantic-icon-subdued" />
                <h4 className="text-sm font-medium">stroke.ts</h4>
              </div>
              <p className="text-xs text-muted-foreground">Border and stroke colors</p>
            </div>
            <div className="p-4 rounded-lg border bg-card space-y-2">
              <div className="flex items-center gap-2">
                <MaterialSymbol name="toggle_on" size={20} weight={300} className="text-semantic-icon-subdued" />
                <h4 className="text-sm font-medium">states.ts</h4>
              </div>
              <p className="text-xs text-muted-foreground">Interaction states (hover, focus, disabled)</p>
            </div>
            <div className="p-4 rounded-lg border bg-card space-y-2">
              <div className="flex items-center gap-2">
                <MaterialSymbol name="straighten" size={20} weight={300} className="text-semantic-icon-subdued" />
                <h4 className="text-sm font-medium">size.ts</h4>
              </div>
              <p className="text-xs text-muted-foreground">Standardized size presets</p>
            </div>
            <div className="p-4 rounded-lg border bg-card space-y-2">
              <div className="flex items-center gap-2">
                <MaterialSymbol name="radio_button_unchecked" size={20} weight={300} className="text-semantic-icon-subdued" />
                <h4 className="text-sm font-medium">radius.ts</h4>
              </div>
              <p className="text-xs text-muted-foreground">Border radius presets</p>
            </div>
            <div className="p-4 rounded-lg border bg-card space-y-2">
              <div className="flex items-center gap-2">
                <MaterialSymbol name="animation" size={20} weight={300} className="text-semantic-icon-subdued" />
                <h4 className="text-sm font-medium">animation.ts</h4>
              </div>
              <p className="text-xs text-muted-foreground">Animation and transition presets</p>
            </div>
            <div className="p-4 rounded-lg border bg-card space-y-2">
              <div className="flex items-center gap-2">
                <MaterialSymbol name="layers" size={20} weight={300} className="text-semantic-icon-subdued" />
                <h4 className="text-sm font-medium">shadow.ts</h4>
              </div>
              <p className="text-xs text-muted-foreground">Shadow presets</p>
            </div>
          </div>
        </Section>

        <Section title="Usage" description="Import the modules you need and use them in your components.">
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-muted/50">
              <pre className="text-xs overflow-x-auto">
                <code>{`import { surface, text, icon, states, radius, animation } from '@/styles'

// Use in components
className={cn(
  surface.primary,
  text.reversedPersistent,
  icon.interactionBright,
  states.hoverOverlay1,
  radius.md,
  animation.transitionAll
)}`}</code>
              </pre>
            </div>
            <div className="p-4 rounded-lg border bg-card space-y-2">
              <h4 className="text-sm font-medium">Example: Button Component</h4>
              <pre className="text-xs overflow-x-auto bg-muted/50 p-3 rounded">
                <code>{`import { surface, text, icon, states, radius, animation } from '../../styles'
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center",
    states.disabled,
    states.focusRing,
    animation.transitionAll
  ),
  {
    variants: {
      variant: {
        default: cn(
          surface.primary,
          text.reversedPersistent,
          states.hoverOpacity90
        ),
      },
    },
  }
)`}</code>
              </pre>
            </div>
          </div>
        </Section>

        <Section title="Surfaces" description="Background colors and surface tokens for components.">
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 rounded-lg border space-y-2">
                <div className="h-12 rounded-md bg-semantic-surface-primary flex items-center justify-center">
                  <span className="text-xs text-semantic-text-reversedpersistent">surface.primary</span>
                </div>
                <code className="text-xs text-muted-foreground">bg-semantic-surface-primary</code>
              </div>
              <div className="p-4 rounded-lg border space-y-2">
                <div className="h-12 rounded-md bg-semantic-surface-secondary flex items-center justify-center">
                  <span className="text-xs text-semantic-text-default">surface.secondary</span>
                </div>
                <code className="text-xs text-muted-foreground">bg-semantic-surface-secondary</code>
              </div>
              <div className="p-4 rounded-lg border space-y-2">
                <div className="h-12 rounded-md bg-semantic-surface-interaction-strong flex items-center justify-center">
                  <span className="text-xs text-white">surface.interactionStrong</span>
                </div>
                <code className="text-xs text-muted-foreground">bg-semantic-surface-interaction-strong</code>
              </div>
              <div className="p-4 rounded-lg border space-y-2">
                <div className="h-12 rounded-md bg-semantic-surface-overlays-level1 flex items-center justify-center">
                  <span className="text-xs text-semantic-text-default">surface.overlay1</span>
                </div>
                <code className="text-xs text-muted-foreground">bg-semantic-surface-overlays-level1</code>
              </div>
              <div className="p-4 rounded-lg border space-y-2">
                <div className="h-12 rounded-md bg-semantic-surface-whisper flex items-center justify-center">
                  <span className="text-xs text-semantic-text-default">surface.whisper</span>
                </div>
                <code className="text-xs text-muted-foreground">bg-semantic-surface-whisper</code>
              </div>
              <div className="p-4 rounded-lg border space-y-2">
                <div className="h-12 rounded-md bg-semantic-surface-rag-danger-strong flex items-center justify-center">
                  <span className="text-xs text-white">surface.destructive</span>
                </div>
                <code className="text-xs text-muted-foreground">bg-semantic-surface-rag-danger-strong</code>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Text Colors" description="Semantic text colors for consistent typography.">
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-4 rounded-lg border bg-card space-y-2">
                <p className="text-sm text-semantic-text-default">text.default</p>
                <code className="text-xs text-muted-foreground">text-semantic-text-default</code>
              </div>
              <div className="p-4 rounded-lg border bg-card space-y-2">
                <p className="text-sm text-semantic-text-subdued">text.subdued</p>
                <code className="text-xs text-muted-foreground">text-semantic-text-subdued</code>
              </div>
              <div className="p-4 rounded-lg border bg-card space-y-2">
                <p className="text-sm text-semantic-text-interaction-bright">text.interactionBright</p>
                <code className="text-xs text-muted-foreground">text-semantic-text-interaction-bright</code>
              </div>
              <div className="p-4 rounded-lg border bg-card space-y-2">
                <p className="text-sm text-semantic-text-rag-danger-default">text.destructive</p>
                <code className="text-xs text-muted-foreground">text-semantic-text-rag-danger-default</code>
              </div>
            </div>
          </div>
        </Section>

        <Section title="States" description="Reusable interaction state classes for consistent behavior.">
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-4 rounded-lg border bg-card space-y-3">
                <h4 className="text-sm font-medium">Hover States</h4>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">states.hoverOverlay1</Button>
                  <Button variant="ghost" className="w-full justify-start">states.hoverPrimary</Button>
                  <Button variant="ghost" className="w-full justify-start">states.hoverOpacity90</Button>
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-card space-y-3">
                <h4 className="text-sm font-medium">Focus States</h4>
                <div className="space-y-2">
                  <Input placeholder="states.focusRing" className="focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]" />
                  <code className="text-xs text-muted-foreground block">Focus ring with semantic color</code>
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-card space-y-3">
                <h4 className="text-sm font-medium">Disabled States</h4>
                <div className="space-y-2">
                  <Button disabled>states.disabled</Button>
                  <code className="text-xs text-muted-foreground block">pointer-events-none + opacity-50</code>
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-card space-y-3">
                <h4 className="text-sm font-medium">Invalid States</h4>
                <div className="space-y-2">
                  <Input aria-invalid className="aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40" />
                  <code className="text-xs text-muted-foreground block">states.invalidRing</code>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Size Presets" description="Standardized size presets that include height, padding, typography, and icon sizing.">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2 items-center">
                <Button size="xs">size.xs</Button>
                <Button size="sm">size.sm</Button>
                <Button size="default">size.md</Button>
                <Button size="lg">size.lg</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Size presets include: height, padding, font-size, icon-size selectors, and border radius
              </p>
            </div>
          </div>
        </Section>

        <Section title="Radius" description="Semantic border radius presets for consistent rounded corners.">
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
              <div className="p-4 rounded-[4px] border bg-card text-center">
                <code className="text-xs">radius.sm</code>
              </div>
              <div className="p-4 rounded-md border bg-card text-center">
                <code className="text-xs">radius.md</code>
              </div>
              <div className="p-4 rounded-lg border bg-card text-center">
                <code className="text-xs">radius.lg</code>
              </div>
              <div className="p-4 rounded-xl border bg-card text-center">
                <code className="text-xs">radius.xl</code>
              </div>
              <div className="p-4 rounded-full border bg-card text-center">
                <code className="text-xs">radius.full</code>
              </div>
              <div className="p-4 rounded-3xl border bg-card text-center">
                <code className="text-xs">radius.3xl</code>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Animation" description="System-level animation presets for consistent transitions.">
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-4 rounded-lg border bg-card space-y-2">
                <h4 className="text-sm font-medium">Transitions</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• animation.transitionAll</li>
                  <li>• animation.transitionColors</li>
                  <li>• animation.transitionFormControl</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border bg-card space-y-2">
                <h4 className="text-sm font-medium">Animations</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• animation.fadeIn / fadeOut</li>
                  <li>• animation.scaleIn / scaleOut</li>
                  <li>• animation.slideUp / slideDown</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Best Practices" description="Guidelines for using the Foundation Layer effectively.">
          <div className="space-y-4">
            <div className="p-6 rounded-lg border bg-card space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">✅ Do</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Import only what you need: <code className="px-1 py-0.5 bg-muted rounded text-xs">{`import { surface, text } from '@/styles'`}</code></li>
                  <li>Combine classes using <code className="px-1 py-0.5 bg-muted rounded text-xs">cn()</code> utility</li>
                  <li>Use semantic classes for all design tokens</li>
                  <li>Keep component-specific classes inline when they don't fit the Foundation Layer</li>
                  <li>Document why you're keeping classes inline</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">❌ Don't</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Use arbitrary classes like <code className="px-1 py-0.5 bg-muted rounded text-xs">text-[var(--semantic-XXX)]</code></li>
                  <li>Hardcode color values</li>
                  <li>Create duplicate style definitions</li>
                  <li>Modify Foundation Layer files without updating documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Migration Status" description="Current status of Foundation Layer adoption across components.">
          <div className="space-y-4">
            <div className="p-6 rounded-lg border bg-card space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Components Migrated</span>
                <span className="text-sm text-muted-foreground">9 / 10</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-semantic-surface-interaction-strong h-2 rounded-full" style={{ width: '90%' }} />
              </div>
              <div className="grid gap-2 md:grid-cols-2 text-xs text-muted-foreground">
                <div>✅ Button, Input, Checkbox, Radio Group</div>
                <div>✅ Select, Switch, Textarea, Avatar, Progress</div>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  button: {
    title: "Button",
    description: "High-signal actions tuned on the design tokens (radius, spacing, icons). Buttons communicate actions users can take and are one of the most important interactive elements in your interface.",
    body: (
      <>
        <Section title="Overview" description="Complete button system showing all variants and sizes in a grid layout.">
          <div className="flex flex-col gap-6 md:gap-6 lg:gap-[27px]">
            {/* Primary row */}
            <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-[87px] items-center">
              <div className="flex gap-2 items-center">
                <Button size="lg">Button</Button>
                <Button size="icon-lg">
                  <MaterialSymbol name="arrow_back" size={20} weight={300} />
                </Button>
              </div>
              <div className="flex gap-[7px] items-center">
                <Button size="default">Button</Button>
                <Button size="icon">
                  <MaterialSymbol name="arrow_back" size={20} weight={300} />
                </Button>
              </div>
              <div className="flex gap-[7px] items-center">
                <Button size="sm">Button</Button>
                <Button size="icon-sm">
                  <MaterialSymbol name="arrow_back" size={16} weight={300} />
                </Button>
              </div>
              <div className="flex gap-[7px] items-center">
                <Button size="xs">Button</Button>
                <Button size="icon-xs">
                  <MaterialSymbol name="arrow_back" size={12} weight={300} />
                </Button>
              </div>
            </div>
            {/* Secondary row */}
            <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-[87px] items-center">
              <div className="flex gap-2 items-center">
                <Button variant="secondary" size="lg">Button</Button>
                <Button variant="secondary" size="icon-lg">
                  <MaterialSymbol name="arrow_back" size={20} weight={300} />
                </Button>
              </div>
              <div className="flex gap-[7px] items-center">
                <Button variant="secondary" size="default">Button</Button>
                <Button variant="secondary" size="icon">
                  <MaterialSymbol name="arrow_back" size={20} weight={300} />
                </Button>
              </div>
              <div className="flex gap-[7px] items-center">
                <Button variant="secondary" size="sm">Button</Button>
                <Button variant="secondary" size="icon-sm">
                  <MaterialSymbol name="arrow_back" size={16} weight={300} />
                </Button>
              </div>
              <div className="flex gap-[7px] items-center">
                <Button variant="secondary" size="xs">Button</Button>
                <Button variant="secondary" size="icon-xs">
                  <MaterialSymbol name="arrow_back" size={12} weight={300} />
                </Button>
              </div>
            </div>
            {/* Outline row */}
            <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-[87px] items-center">
              <div className="flex gap-2 items-center">
                <Button variant="outline" size="lg">Button</Button>
                <Button variant="outline" size="icon-lg">
                  <MaterialSymbol name="arrow_back" size={20} weight={300} />
                </Button>
              </div>
              <div className="flex gap-[7px] items-center">
                <Button variant="outline" size="default">Button</Button>
                <Button variant="outline" size="icon">
                  <MaterialSymbol name="arrow_back" size={20} weight={300} />
                </Button>
              </div>
              <div className="flex gap-[7px] items-center">
                <Button variant="outline" size="sm">Button</Button>
                <Button variant="outline" size="icon-sm">
                  <MaterialSymbol name="arrow_back" size={16} weight={300} />
                </Button>
              </div>
              <div className="flex gap-[7px] items-center">
                <Button variant="outline" size="xs">Button</Button>
                <Button variant="outline" size="icon-xs">
                  <MaterialSymbol name="arrow_back" size={12} weight={300} />
                </Button>
              </div>
            </div>
            {/* Tertiary row */}
            <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-[87px] items-center">
              <div className="flex gap-2 items-center">
                <Button variant="tertiary" size="lg">Button</Button>
                <Button variant="tertiary" size="icon-lg">
                  <MaterialSymbol name="arrow_back" size={20} weight={300} />
                </Button>
              </div>
              <div className="flex gap-[7px] items-center">
                <Button variant="tertiary" size="default">Button</Button>
                <Button variant="tertiary" size="icon">
                  <MaterialSymbol name="arrow_back" size={20} weight={300} />
                </Button>
              </div>
              <div className="flex gap-[7px] items-center">
                <Button variant="tertiary" size="sm">Button</Button>
                <Button variant="tertiary" size="icon-sm">
                  <MaterialSymbol name="arrow_back" size={16} weight={300} />
                </Button>
              </div>
              <div className="flex gap-[7px] items-center">
                <Button variant="tertiary" size="xs">Button</Button>
                <Button variant="tertiary" size="icon-xs">
                  <MaterialSymbol name="arrow_back" size={12} weight={300} />
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Variants" description="Different button styles to communicate hierarchy and importance. Each variant uses semantic design tokens for consistent theming.">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="tertiary">Tertiary</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Use <strong>Primary</strong> for the main action, <strong>Secondary</strong> for supporting actions, <strong>Outline</strong> for less emphasis, <strong>Ghost</strong> for subtle actions, and <strong>Destructive</strong> for dangerous actions.
            </p>
          </div>
        </Section>

        <Section title="Sizes" description="Button sizes adapt to different contexts and density requirements. Icon sizes scale proportionally.">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="xs" variant="secondary">Extra Small</Button>
              <Button size="sm" variant="secondary">Small</Button>
              <Button size="default" variant="secondary">Default</Button>
              <Button size="lg" variant="secondary">Large</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Default size (36px) is recommended for most use cases. Use smaller sizes for dense interfaces and larger sizes for prominent CTAs.
            </p>
          </div>
        </Section>

        <Section title="With Icons" description="Icons enhance button clarity and visual hierarchy. Icon colors adapt based on variant and context.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Icons on the left</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button>
                  <MaterialSymbol name="add" size={20} weight={300} />
                  Add Item
                </Button>
                <Button variant="secondary">
                  <MaterialSymbol name="download" size={16} weight={300} />
                  Download
                </Button>
                <Button variant="outline">
                  <MaterialSymbol name="settings" size={20} weight={300} />
                  Settings
                </Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Icons on the right</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button>
                  Continue
                  <MaterialSymbol name="arrow_forward" size={20} weight={300} />
                </Button>
                <Button variant="secondary">
                  Next
                  <MaterialSymbol name="chevron_right" size={16} weight={300} />
                </Button>
                <Button variant="outline">
                  Learn More
                  <MaterialSymbol name="open_in_new" size={20} weight={300} />
                </Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Both sides</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button>
                  <MaterialSymbol name="save" size={20} weight={300} />
                  Save Changes
                  <MaterialSymbol name="check" size={20} weight={300} />
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Primary buttons with labels use bright teal icons. All other variants use subdued icons. Icon sizes automatically scale with button size.
            </p>
          </div>
        </Section>

        <Section title="Icon Only" description="Icon-only buttons save space and are ideal for toolbars, action menus, and compact interfaces.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2">All sizes</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="icon-xs" variant="default">
                  <MaterialSymbol name="close" size={12} weight={300} />
                </Button>
                <Button size="icon-sm" variant="default">
                  <MaterialSymbol name="edit" size={16} weight={300} />
                </Button>
                <Button size="icon" variant="default">
                  <MaterialSymbol name="delete" size={20} weight={300} />
                </Button>
                <Button size="icon-lg" variant="default">
                  <MaterialSymbol name="favorite" size={20} weight={300} />
                </Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Other variants</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="icon" variant="secondary">
                  <MaterialSymbol name="more_vert" size={20} weight={300} />
                </Button>
                <Button size="icon" variant="outline">
                  <MaterialSymbol name="share" size={20} weight={300} />
                </Button>
                <Button size="icon" variant="ghost">
                  <MaterialSymbol name="favorite" size={20} weight={300} />
                </Button>
                <Button size="icon" variant="destructive">
                  <MaterialSymbol name="delete" size={20} weight={300} />
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Primary icon-only buttons use white icons. All other variants use subdued icons matching their text color.
            </p>
          </div>
        </Section>

        <Section title="States" description="Button states communicate interactivity and provide feedback to users.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Default state</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button>Enabled</Button>
                <Button variant="secondary">Enabled</Button>
                <Button variant="outline">Enabled</Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Disabled state</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button disabled>Disabled</Button>
                <Button variant="secondary" disabled>Disabled</Button>
                <Button variant="outline" disabled>Disabled</Button>
                <Button size="icon" disabled>
                  <MaterialSymbol name="close" size={20} weight={300} />
                </Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">With icons (disabled)</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button disabled>
                  <MaterialSymbol name="save" size={20} weight={300} />
                  Save
                </Button>
                <Button variant="secondary" disabled>
                  <MaterialSymbol name="download" size={16} weight={300} />
                  Download
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Disabled buttons reduce opacity and prevent interaction. Always provide clear feedback about why an action is unavailable.
            </p>
          </div>
        </Section>

        <Section title="Usage Examples" description="Real-world examples showing buttons in different contexts and interfaces.">
          <div className="space-y-8">
            {/* Data table toolbar - Full width */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Data table toolbar</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 border rounded-lg">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <Input placeholder="Search..." className="w-full sm:w-64" />
                  <Button size="sm" variant="outline" className="shrink-0">
                    <MaterialSymbol name="filter_list" size={16} weight={300} />
                    Filter
                  </Button>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button size="sm" variant="outline">
                    <MaterialSymbol name="file_download" size={16} weight={300} />
                    Export
                  </Button>
                  <Button size="sm">
                    <MaterialSymbol name="add" size={16} weight={300} />
                    New Item
                  </Button>
                </div>
              </div>
            </div>

            {/* Masonry grid for other examples */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {/* Card with actions */}
              <div className="break-inside-avoid mb-6">
                <p className="text-xs text-muted-foreground mb-3">Card with actions</p>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Settings</CardTitle>
                    <CardDescription>Manage your project configuration and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-name">Project Name</Label>
                      <Input id="project-name" defaultValue="My Project" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project-description">Description</Label>
                      <Input id="project-description" placeholder="Enter project description" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center gap-2 justify-end">
                    <Button variant="ghost">Cancel</Button>
                    <Button>
                      <MaterialSymbol name="save" size={20} weight={300} />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Notification with actions */}
              <div className="break-inside-avoid mb-6">
                <p className="text-xs text-muted-foreground mb-3">Notification with actions</p>
                <Alert>
                  <MaterialSymbol name="info" size={16} weight={300} />
                  <AlertTitle>New feature available</AlertTitle>
                  <AlertDescription>
                    <p className="mb-3">We've added new collaboration tools to help your team work better together.</p>
                    <div className="flex items-center gap-2">
                      <Button size="sm">
                        Learn More
                        <MaterialSymbol name="arrow_forward" size={16} weight={300} />
                      </Button>
                      <Button size="sm" variant="ghost">
                        Dismiss
                      </Button>
                    </div>
                  </AlertDescription>
                </Alert>
              </div>

              {/* List items with actions */}
              <div className="break-inside-avoid mb-6">
                <p className="text-xs text-muted-foreground mb-3">List items with actions</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Avatar size="sm" shape="rounded">
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120" alt="User" />
                        <AvatarFallback size="sm">JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-normal">John Doe</p>
                        <p className="text-xs text-muted-foreground">Product Designer</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="icon-sm" variant="ghost">
                        <MaterialSymbol name="more_vert" size={16} weight={300} />
                      </Button>
                      <Button size="sm" variant="outline">
                        Message
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Avatar size="sm" shape="rounded">
                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120" alt="User" />
                        <AvatarFallback size="sm">JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-normal">Jane Smith</p>
                        <p className="text-xs text-muted-foreground">Engineering Lead</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="icon-sm" variant="ghost">
                        <MaterialSymbol name="more_vert" size={16} weight={300} />
                      </Button>
                      <Button size="sm" variant="outline">
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form actions */}
              <div className="break-inside-avoid mb-6">
                <p className="text-xs text-muted-foreground mb-3">Form actions</p>
                <div className="space-y-4 p-4 border rounded-lg">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <div className="flex items-center gap-3 justify-end pt-2">
                    <Button variant="ghost">Cancel</Button>
                    <Button variant="outline">Save Draft</Button>
                    <Button>
                      <MaterialSymbol name="check" size={20} weight={300} />
                      Submit
                    </Button>
                  </div>
                </div>
              </div>

              {/* Destructive action dialog */}
              <div className="break-inside-avoid mb-6">
                <p className="text-xs text-muted-foreground mb-3">Destructive action confirmation</p>
                <Card>
                  <CardHeader>
                    <CardTitle>Delete Account</CardTitle>
                    <CardDescription>This action cannot be undone. This will permanently delete your account and remove all your data.</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center gap-3 justify-end">
                    <Button variant="outline">Cancel</Button>
                    <Button variant="destructive">
                      <MaterialSymbol name="delete" size={20} weight={300} />
                      Delete Account
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Compact toolbar */}
              <div className="break-inside-avoid mb-6">
                <p className="text-xs text-muted-foreground mb-3">Compact toolbar</p>
                <div className="flex items-center gap-1 p-2 border rounded-lg w-fit">
                  <Button size="icon-sm" variant="ghost">
                    <MaterialSymbol name="format_bold" size={16} weight={300} />
                  </Button>
                  <Button size="icon-sm" variant="ghost">
                    <MaterialSymbol name="format_italic" size={16} weight={300} />
                  </Button>
                  <Button size="icon-sm" variant="ghost">
                    <MaterialSymbol name="format_underlined" size={16} weight={300} />
                  </Button>
                  <Separator orientation="vertical" className="h-4 mx-1" />
                  <Button size="icon-sm" variant="ghost">
                    <MaterialSymbol name="link" size={16} weight={300} />
                  </Button>
                  <Button size="icon-sm" variant="ghost">
                    <MaterialSymbol name="image" size={16} weight={300} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  input: {
    title: "Input",
    description: "Form controls aligned on the typography and focus ring tokens.",
    body: (
      <>
        <Section title="Overview" description="Complete input system showing different types, states, and use cases.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="overview-text">Text input</Label>
              <Input id="overview-text" placeholder="Enter text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="overview-email">Email input</Label>
              <Input id="overview-email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="overview-password">Password input</Label>
              <Input id="overview-password" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="overview-icon-left">With icon (left)</Label>
              <div className="relative">
                <MaterialSymbol
                  name="search"
                  size={16}
                  weight={300}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-semantic-icon-subdued"
                />
                <Input id="overview-icon-left" placeholder="Search..." className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="overview-icon-right">With icon (right)</Label>
              <div className="relative">
                <Input id="overview-icon-right" placeholder="Enter value" className="pr-9" />
                <MaterialSymbol
                  name="check_circle"
                  size={16}
                  weight={300}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="overview-disabled">Disabled state</Label>
              <Input id="overview-disabled" disabled value="Disabled input" />
            </div>
          </div>
        </Section>

        <Section title="Basic Usage" description="Standard input fields with labels and helper text. Maintains consistent spacing and typography.">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="basic-name">Full name</Label>
              <Input id="basic-name" placeholder="John Doe" />
              <p className="text-xs text-muted-foreground">Enter your first and last name</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="basic-email">Email address</Label>
              <Input id="basic-email" type="email" placeholder="you@example.com" />
              <p className="text-xs text-muted-foreground">We'll never share your email with anyone else</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="basic-password">Password</Label>
              <Input id="basic-password" type="password" placeholder="••••••••" />
              <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
            </div>
          </div>
        </Section>

        <Section title="States" description="Input states communicate interactivity, validation, and provide feedback to users.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Default states</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="state-placeholder">Placeholder</Label>
                  <Input id="state-placeholder" placeholder="Enter text..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state-filled">Filled</Label>
                  <Input id="state-filled" defaultValue="Sample text value" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Interactive states</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="state-disabled">Disabled</Label>
                  <Input id="state-disabled" disabled value="Cannot edit this field" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state-readonly">Read-only</Label>
                  <Input id="state-readonly" readOnly value="Read-only value" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Validation states</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="state-error">Error state</Label>
                  <Input 
                    id="state-error" 
                    defaultValue="invalid@email" 
                    aria-invalid="true"
                    className="border-semantic-stroke-rag-danger-default"
                  />
                  <p className="text-xs text-semantic-text-rag-danger-default">Please enter a valid email address</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state-success">Success state</Label>
                  <div className="relative">
                    <Input 
                      id="state-success" 
                      defaultValue="user@example.com"
                      className="pr-9 border-semantic-stroke-rag-success-default"
                    />
                    <MaterialSymbol
                      name="check_circle"
                      size={16}
                      weight={300}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-semantic-icon-rag-success-default"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="With Icons" description="Icons enhance input clarity and provide visual context. Icons can be placed on the left or right side.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Left icon</p>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="icon-left-search">Search</Label>
                  <div className="relative">
                    <MaterialSymbol
                      name="search"
                      size={16}
                      weight={300}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-semantic-icon-subdued"
                    />
                    <Input id="icon-left-search" placeholder="Search..." className="pl-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="icon-left-email">Email</Label>
                  <div className="relative">
                    <MaterialSymbol
                      name="mail"
                      size={16}
                      weight={300}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-semantic-icon-subdued"
                    />
                    <Input id="icon-left-email" type="email" placeholder="you@example.com" className="pl-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="icon-left-lock">Password</Label>
                  <div className="relative">
                    <MaterialSymbol
                      name="lock"
                      size={16}
                      weight={300}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-semantic-icon-subdued"
                    />
                    <Input id="icon-left-lock" type="password" placeholder="••••••••" className="pl-9" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Right icon</p>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="icon-right-clear">With clear button</Label>
                  <div className="relative">
                    <Input id="icon-right-clear" defaultValue="Sample text" className="pr-9" />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground hover:opacity-70"
                    >
                      <MaterialSymbol name="close" size={16} weight={300} />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="icon-right-valid">Validation indicator</Label>
                  <div className="relative">
                    <Input id="icon-right-valid" defaultValue="Valid input" className="pr-9" />
                    <MaterialSymbol
                      name="check_circle"
                      size={16}
                      weight={300}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Both sides</p>
              <div className="space-y-2">
                <Label htmlFor="icon-both">Search with actions</Label>
                <div className="relative">
                  <MaterialSymbol
                    name="search"
                    size={16}
                    weight={300}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-semantic-icon-subdued"
                  />
                  <Input id="icon-both" placeholder="Search..." className="pl-9 pr-9" />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground hover:opacity-70"
                  >
                    <MaterialSymbol name="filter_list" size={16} weight={300} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Input Types" description="Different input types provide appropriate keyboards and validation for various data formats.">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="type-text">Text</Label>
              <Input id="type-text" type="text" placeholder="Enter text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type-email">Email</Label>
              <Input id="type-email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type-password">Password</Label>
              <Input id="type-password" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type-number">Number</Label>
              <Input id="type-number" type="number" placeholder="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type-tel">Phone</Label>
              <Input id="type-tel" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type-url">URL</Label>
              <Input id="type-url" type="url" placeholder="https://example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type-date">Date</Label>
              <Input id="type-date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type-time">Time</Label>
              <Input id="type-time" type="time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type-search">Search</Label>
              <Input id="type-search" type="search" placeholder="Search..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type-file">File</Label>
              <Input id="type-file" type="file" />
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Real-world examples showing inputs in different contexts and interfaces.">
          <div className="space-y-8">
            {/* Login form */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Login form</p>
              <div className="max-w-md space-y-4 p-4 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input id="login-password" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full">
                  Sign in
                </Button>
              </div>
            </div>

            {/* Search bar */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Search bar</p>
              <div className="max-w-md">
                <div className="relative">
                  <MaterialSymbol
                    name="search"
                    size={16}
                    weight={300}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-semantic-icon-subdued"
                  />
                  <Input placeholder="Search..." className="pl-9" />
                </div>
              </div>
            </div>

            {/* Profile form */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Profile form</p>
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Edit Profile</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="profile-name">Full name</Label>
                    <Input id="profile-name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-email">Email</Label>
                    <Input id="profile-email" type="email" defaultValue="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-phone">Phone</Label>
                    <Input id="profile-phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-2 justify-end">
                  <Button variant="ghost">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Settings form */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Settings form</p>
              <div className="max-w-md space-y-4 p-4 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="settings-api-key">API Key</Label>
                  <div className="relative">
                    <Input id="settings-api-key" type="password" defaultValue="sk_live_••••••••" className="pr-9" />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground hover:opacity-70"
                    >
                      <MaterialSymbol name="visibility" size={16} weight={300} />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">Your API key is encrypted and secure</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="settings-webhook">Webhook URL</Label>
                  <Input id="settings-webhook" type="url" placeholder="https://example.com/webhook" />
                </div>
              </div>
            </div>

            {/* Data table filter */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Data table filter</p>
              <div className="flex items-center gap-2 p-3 border rounded-lg">
                <div className="relative flex-1">
                  <MaterialSymbol
                    name="search"
                    size={16}
                    weight={300}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-semantic-icon-subdued"
                  />
                  <Input placeholder="Search..." className="pl-9" />
                </div>
                <Button size="sm" variant="outline">
                  <MaterialSymbol name="filter_list" size={16} weight={300} />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  label: {
    title: "Label",
    description: "Type ramp, spacing and accessibility baked in.",
    body: (
      <>
        <Section title="Overview" description="Label component provides accessible form labels with consistent typography and spacing.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="overview-input">Input field</Label>
              <Input id="overview-input" placeholder="Enter text" />
            </div>
            <div className="flex items-start gap-2">
              <Checkbox id="overview-checkbox" />
              <Label htmlFor="overview-checkbox">Checkbox option</Label>
            </div>
            <div className="flex items-start gap-2">
              <Switch id="overview-switch" />
              <Label htmlFor="overview-switch">Switch option</Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="overview-select">Select dropdown</Label>
              <Select>
                <SelectTrigger id="overview-select">
                  <SelectValue placeholder="Choose..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="overview-required">
                Required field
                <span className="text-semantic-text-rag-danger-default ml-1">*</span>
              </Label>
              <Input id="overview-required" placeholder="Required" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="overview-disabled" className="opacity-50">
                Disabled field
              </Label>
              <Input id="overview-disabled" disabled value="Disabled" />
            </div>
          </div>
        </Section>

        <Section title="Basic Usage" description="Labels provide clear identification for form controls and maintain consistent spacing.">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="basic-text">Text input</Label>
              <Input id="basic-text" placeholder="Enter text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="basic-email">Email address</Label>
              <Input id="basic-email" type="email" placeholder="you@example.com" />
              <p className="text-xs text-muted-foreground">We'll never share your email</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="basic-select">Select option</Label>
              <Select>
                <SelectTrigger id="basic-select">
                  <SelectValue placeholder="Choose an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Section>

        <Section title="With Form Controls" description="Labels work seamlessly with input fields, selects, and textareas.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Input fields</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="form-name">Full name</Label>
                  <Input id="form-name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="form-phone">Phone number</Label>
                  <Input id="form-phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Select dropdowns</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="form-country">Country</Label>
                  <Select>
                    <SelectTrigger id="form-country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="form-language">Language</Label>
                  <Select>
                    <SelectTrigger id="form-language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="With Checkable Controls" description="Labels enhance accessibility for checkboxes, switches, and radio buttons by providing clickable areas.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Checkboxes</p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Checkbox id="label-checkbox-1" defaultChecked />
                  <Label htmlFor="label-checkbox-1" className="leading-snug">
                    Accept terms and conditions
                    <span className="block text-sm text-muted-foreground font-normal">You must agree to continue</span>
                  </Label>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="label-checkbox-2" />
                  <Label htmlFor="label-checkbox-2" className="leading-snug">
                    Subscribe to newsletter
                    <span className="block text-sm text-muted-foreground font-normal">Receive updates via email</span>
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Switches</p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Switch id="label-switch-1" defaultChecked />
                  <Label htmlFor="label-switch-1" className="leading-snug">
                    Enable notifications
                    <span className="block text-sm text-muted-foreground font-normal">Get notified about important updates</span>
                  </Label>
                </div>
                <div className="flex items-start gap-2">
                  <Switch id="label-switch-2" />
                  <Label htmlFor="label-switch-2" className="leading-snug">
                    Dark mode
                    <span className="block text-sm text-muted-foreground font-normal">Switch to dark theme</span>
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Radio groups</p>
              <RadioGroup defaultValue="option1">
                <div className="flex items-start gap-2">
                  <RadioGroupItem value="option1" id="label-radio-1" />
                  <Label htmlFor="label-radio-1" className="leading-snug cursor-pointer">
                    Option 1
                    <span className="block text-sm text-muted-foreground font-normal">First choice</span>
                  </Label>
                </div>
                <div className="flex items-start gap-2 mt-3">
                  <RadioGroupItem value="option2" id="label-radio-2" />
                  <Label htmlFor="label-radio-2" className="leading-snug cursor-pointer">
                    Option 2
                    <span className="block text-sm text-muted-foreground font-normal">Second choice</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Section>

        <Section title="States" description="Labels adapt to different states including required fields, disabled controls, and error states.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Required fields</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="state-required">
                    Email address
                    <span className="text-semantic-text-rag-danger-default ml-1">*</span>
                  </Label>
                  <Input id="state-required" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state-required-2">
                    Password
                    <span className="text-semantic-text-rag-danger-default ml-1">*</span>
                  </Label>
                  <Input id="state-required-2" type="password" placeholder="••••••••" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Disabled state</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="state-disabled" className="opacity-50">
                    Disabled field
                  </Label>
                  <Input id="state-disabled" disabled value="Cannot edit" />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="state-disabled-checkbox" disabled />
                  <Label htmlFor="state-disabled-checkbox" className="opacity-50 leading-snug">
                    Disabled checkbox
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Error state</p>
              <div className="space-y-2">
                <Label htmlFor="state-error" className="text-semantic-text-rag-danger-default">
                  Invalid email
                </Label>
                <Input 
                  id="state-error" 
                  defaultValue="invalid@email" 
                  aria-invalid="true"
                  className="border-semantic-stroke-rag-danger-default"
                />
                <p className="text-xs text-semantic-text-rag-danger-default">Please enter a valid email address</p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Real-world examples showing labels in different contexts and form layouts.">
          <div className="space-y-8">
            {/* Registration form */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Registration form</p>
              <div className="max-w-md space-y-4 p-4 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="register-name">
                    Full name
                    <span className="text-semantic-text-rag-danger-default ml-1">*</span>
                  </Label>
                  <Input id="register-name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">
                    Email
                    <span className="text-semantic-text-rag-danger-default ml-1">*</span>
                  </Label>
                  <Input id="register-email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">
                    Password
                    <span className="text-semantic-text-rag-danger-default ml-1">*</span>
                  </Label>
                  <Input id="register-password" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="register-terms" />
                  <Label htmlFor="register-terms" className="leading-snug">
                    I agree to the terms and conditions
                  </Label>
                </div>
                <Button className="w-full">Create Account</Button>
              </div>
            </div>

            {/* Settings form */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Settings form</p>
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="settings-name">Display name</Label>
                    <Input id="settings-name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="settings-timezone">Timezone</Label>
                    <Select defaultValue="utc">
                      <SelectTrigger id="settings-timezone">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="est">EST</SelectItem>
                        <SelectItem value="pst">PST</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-start gap-2">
                    <Switch id="settings-notifications" defaultChecked />
                    <Label htmlFor="settings-notifications" className="leading-snug">
                      Email notifications
                      <span className="block text-sm text-muted-foreground font-normal">Receive email updates</span>
                    </Label>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-2 justify-end">
                  <Button variant="ghost">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Preferences */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">User preferences</p>
              <div className="max-w-md space-y-4 p-4 border rounded-lg">
                <div className="flex items-start gap-2">
                  <Checkbox id="pref-newsletter" defaultChecked />
                  <Label htmlFor="pref-newsletter" className="leading-snug">
                    Newsletter
                    <span className="block text-sm text-muted-foreground font-normal">Weekly product updates</span>
                  </Label>
                </div>
                <div className="flex items-start gap-2">
                  <Switch id="pref-marketing" />
                  <Label htmlFor="pref-marketing" className="leading-snug">
                    Marketing emails
                    <span className="block text-sm text-muted-foreground font-normal">Promotional content and offers</span>
                  </Label>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="pref-security" defaultChecked />
                  <Label htmlFor="pref-security" className="leading-snug">
                    Security alerts
                    <span className="block text-sm text-muted-foreground font-normal">Important security notifications</span>
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  badge: {
    title: "Badge",
    description: "Compact statuses using semantic color ramp only.",
    body: (
      <>
        <Section title="Overview" description="Badge component provides compact status indicators and labels with semantic color tokens.">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge>
              <MaterialSymbol name="check_circle" size={12} weight={300} />
              With icon
            </Badge>
            <Badge variant="outline">
              <MaterialSymbol name="bolt" size={12} weight={300} />
              Token aligned
            </Badge>
          </div>
        </Section>

        <Section title="Variants" description="Different badge styles communicate different types of information and status levels.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Default variant</p>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>New</Badge>
                <Badge>Active</Badge>
                <Badge>Published</Badge>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Secondary variant</p>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">Draft</Badge>
                <Badge variant="secondary">Pending</Badge>
                <Badge variant="secondary">Neutral</Badge>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Outline variant</p>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">Tag</Badge>
                <Badge variant="outline">Category</Badge>
                <Badge variant="outline">Label</Badge>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Destructive variant</p>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="destructive">Error</Badge>
                <Badge variant="destructive">Failed</Badge>
                <Badge variant="destructive">Deleted</Badge>
              </div>
            </div>
          </div>
        </Section>

        <Section title="With Icons" description="Icons enhance badge clarity and provide visual context. Icons are always 12x12px.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Default badges</p>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>
                  <MaterialSymbol name="check_circle" size={12} weight={300} />
                  Success
                </Badge>
                <Badge>
                  <MaterialSymbol name="info" size={12} weight={300} />
                  Info
                </Badge>
                <Badge>
                  <MaterialSymbol name="warning" size={12} weight={300} />
                  Warning
                </Badge>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Outline badges</p>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">
                  <MaterialSymbol name="bolt" size={12} weight={300} />
                  Pro
                </Badge>
                <Badge variant="outline">
                  <MaterialSymbol name="star" size={12} weight={300} />
                  Featured
                </Badge>
                <Badge variant="outline">
                  <MaterialSymbol name="lock" size={12} weight={300} />
                  Private
                </Badge>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Icon only</p>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>
                  <MaterialSymbol name="check" size={12} weight={300} />
                </Badge>
                <Badge variant="secondary">
                  <MaterialSymbol name="more_horiz" size={12} weight={300} />
                </Badge>
                <Badge variant="outline">
                  <MaterialSymbol name="close" size={12} weight={300} />
                </Badge>
              </div>
            </div>
          </div>
        </Section>

        <Section title="In Cards" description="Badges are commonly used in cards to indicate status, categories, or metadata.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Product card</p>
              <Card className="max-w-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle>Premium Plan</CardTitle>
                    <Badge>
                      <MaterialSymbol name="star" size={12} weight={300} />
                      Featured
                    </Badge>
                  </div>
                  <CardDescription>Advanced features for teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Includes all features plus priority support</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Popular</Badge>
                    <Badge variant="outline">New</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Task card</p>
              <Card className="max-w-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Design System Update</CardTitle>
                    <Badge variant="secondary">In Progress</Badge>
                  </div>
                  <CardDescription>Update component library</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      <MaterialSymbol name="label" size={12} weight={300} />
                      Design
                    </Badge>
                    <Badge variant="outline">
                      <MaterialSymbol name="person" size={12} weight={300} />
                      Assigned
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Notification card</p>
              <Card className="max-w-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>System Alert</CardTitle>
                    <Badge variant="destructive">Critical</Badge>
                  </div>
                  <CardDescription>Server maintenance required</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Immediate action needed to resolve the issue.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        <Section title="In Data Tables" description="Badges provide status indicators and metadata in table rows for quick scanning.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">User table</p>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 text-sm font-normal">Name</th>
                      <th className="text-left p-3 text-sm font-normal">Email</th>
                      <th className="text-left p-3 text-sm font-normal">Status</th>
                      <th className="text-left p-3 text-sm font-normal">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 text-sm">John Doe</td>
                      <td className="p-3 text-sm text-muted-foreground">john@example.com</td>
                      <td className="p-3">
                        <Badge>
                          <MaterialSymbol name="check_circle" size={12} weight={300} />
                          Active
                        </Badge>
                      </td>
                      <td className="p-3">
                        <Badge variant="outline">Admin</Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 text-sm">Jane Smith</td>
                      <td className="p-3 text-sm text-muted-foreground">jane@example.com</td>
                      <td className="p-3">
                        <Badge variant="secondary">Pending</Badge>
                      </td>
                      <td className="p-3">
                        <Badge variant="outline">Member</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 text-sm">Bob Johnson</td>
                      <td className="p-3 text-sm text-muted-foreground">bob@example.com</td>
                      <td className="p-3">
                        <Badge variant="destructive">Suspended</Badge>
                      </td>
                      <td className="p-3">
                        <Badge variant="outline">Member</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Order table</p>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 text-sm font-normal">Order ID</th>
                      <th className="text-left p-3 text-sm font-normal">Customer</th>
                      <th className="text-left p-3 text-sm font-normal">Status</th>
                      <th className="text-left p-3 text-sm font-normal">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 text-sm font-mono text-xs">#12345</td>
                      <td className="p-3 text-sm">Acme Corp</td>
                      <td className="p-3">
                        <Badge>
                          <MaterialSymbol name="check_circle" size={12} weight={300} />
                          Completed
                        </Badge>
                      </td>
                      <td className="p-3">
                        <Badge variant="outline">Normal</Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 text-sm font-mono text-xs">#12346</td>
                      <td className="p-3 text-sm">Tech Inc</td>
                      <td className="p-3">
                        <Badge variant="secondary">Processing</Badge>
                      </td>
                      <td className="p-3">
                        <Badge variant="outline">
                          <MaterialSymbol name="bolt" size={12} weight={300} />
                          High
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 text-sm font-mono text-xs">#12347</td>
                      <td className="p-3 text-sm">Startup Co</td>
                      <td className="p-3">
                        <Badge variant="destructive">Failed</Badge>
                      </td>
                      <td className="p-3">
                        <Badge variant="outline">Low</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Status Indicators" description="Badges serve as visual status indicators for various states and conditions.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-3">System status</p>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>
                  <MaterialSymbol name="check_circle" size={12} weight={300} />
                  Online
                </Badge>
                <Badge variant="secondary">
                  <MaterialSymbol name="schedule" size={12} weight={300} />
                  Maintenance
                </Badge>
                <Badge variant="destructive">
                  <MaterialSymbol name="error" size={12} weight={300} />
                  Offline
                </Badge>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Content status</p>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Published</Badge>
                <Badge variant="secondary">Draft</Badge>
                <Badge variant="outline">Archived</Badge>
                <Badge variant="destructive">Deleted</Badge>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Payment status</p>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>
                  <MaterialSymbol name="check_circle" size={12} weight={300} />
                  Paid
                </Badge>
                <Badge variant="secondary">Pending</Badge>
                <Badge variant="destructive">Failed</Badge>
                <Badge variant="outline">Refunded</Badge>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Real-world examples showing badges in different contexts and interfaces.">
          <div className="space-y-8">
            {/* Project dashboard */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Project dashboard</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle>Website Redesign</CardTitle>
                      <Badge>Active</Badge>
                    </div>
                    <CardDescription>UI/UX improvements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline">
                        <MaterialSymbol name="label" size={12} weight={300} />
                        Design
                      </Badge>
                      <Badge variant="outline">High Priority</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle>Mobile App</CardTitle>
                      <Badge variant="secondary">Planning</Badge>
                    </div>
                    <CardDescription>iOS and Android development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline">
                        <MaterialSymbol name="code" size={12} weight={300} />
                        Development
                      </Badge>
                      <Badge variant="outline">Medium Priority</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle>API Integration</CardTitle>
                      <Badge variant="destructive">Blocked</Badge>
                    </div>
                    <CardDescription>Third-party service connection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline">
                        <MaterialSymbol name="settings" size={12} weight={300} />
                        Backend
                      </Badge>
                      <Badge variant="outline">Low Priority</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Data table with badges */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Issues table</p>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 text-sm font-normal">Issue</th>
                      <th className="text-left p-3 text-sm font-normal">Assignee</th>
                      <th className="text-left p-3 text-sm font-normal">Status</th>
                      <th className="text-left p-3 text-sm font-normal">Tags</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 text-sm">Fix login bug</td>
                      <td className="p-3 text-sm text-muted-foreground">John Doe</td>
                      <td className="p-3">
                        <Badge>
                          <MaterialSymbol name="check_circle" size={12} weight={300} />
                          Resolved
                        </Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap items-center gap-1">
                          <Badge variant="outline">Bug</Badge>
                          <Badge variant="outline">Critical</Badge>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 text-sm">Add dark mode</td>
                      <td className="p-3 text-sm text-muted-foreground">Jane Smith</td>
                      <td className="p-3">
                        <Badge variant="secondary">In Progress</Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap items-center gap-1">
                          <Badge variant="outline">Feature</Badge>
                          <Badge variant="outline">UI</Badge>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 text-sm">Performance optimization</td>
                      <td className="p-3 text-sm text-muted-foreground">Bob Johnson</td>
                      <td className="p-3">
                        <Badge variant="outline">Todo</Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap items-center gap-1">
                          <Badge variant="outline">Performance</Badge>
                          <Badge variant="outline">Backend</Badge>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  avatar: {
    title: "Avatar",
    description: "Sizing scale and fallback tokenized for product surfaces.",
    body: (
      <>
        <Section title="Overview" description="Avatar component displays user images, monograms, or pictograms with consistent sizing and fallback handling.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Image</p>
              <Avatar size="md">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces" alt="User" />
                <AvatarFallback size="md">JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Monogram</p>
              <Avatar size="md">
                <AvatarFallback size="md">JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Pictogram</p>
              <Avatar size="md">
                <AvatarFallback size="md">
                  <MaterialSymbol name="person" size={20} weight={300} />
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Square shape</p>
              <Avatar size="md" shape="square">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces" alt="User" />
                <AvatarFallback size="md">JS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </Section>

        <Section title="Sizes" description="Avatar sizes adapt to different contexts and density requirements. Text sizes scale proportionally in fallbacks.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Rounded avatars</p>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Avatar size="xs">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="xs">JD</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">xs (20px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar size="sm">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="sm">JD</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">sm (28px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar size="md">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="md">JD</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">md (36px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar size="lg">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="lg">JD</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">lg (44px)</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Square avatars</p>
              <div className="flex items-center gap-4">
                <Avatar size="xs" shape="square">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="xs">JD</AvatarFallback>
                </Avatar>
                <Avatar size="sm" shape="square">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="sm">JD</AvatarFallback>
                </Avatar>
                <Avatar size="md" shape="square">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="md">JD</AvatarFallback>
                </Avatar>
                <Avatar size="lg" shape="square">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="lg">JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Types" description="Avatars can display images, monograms (initials), or pictograms (icons) as fallbacks.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Image</p>
              <div className="flex items-center gap-4">
                <Avatar size="md">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces" alt="Jane Doe" />
                  <AvatarFallback size="md">JD</AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces" alt="John Smith" />
                  <AvatarFallback size="md">JS</AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces" alt="Sarah Johnson" />
                  <AvatarFallback size="md">SJ</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Images display when available, with fallback to monogram or pictogram.</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Monogram</p>
              <div className="flex items-center gap-4">
                <Avatar size="md">
                  <AvatarFallback size="md">JD</AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarFallback size="md">JS</AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarFallback size="md">SJ</AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarFallback size="md">AB</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Monograms use initials when no image is available. Text size scales with avatar size.</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Pictogram</p>
              <div className="flex items-center gap-4">
                <Avatar size="md">
                  <AvatarFallback size="md">
                    <MaterialSymbol name="person" size={20} weight={300} />
                  </AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarFallback size="md">
                    <MaterialSymbol name="business" size={20} weight={300} />
                  </AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarFallback size="md">
                    <MaterialSymbol name="group" size={20} weight={300} />
                  </AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarFallback size="md">
                    <MaterialSymbol name="account_circle" size={20} weight={300} />
                  </AvatarFallback>
                </Avatar>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Pictograms use icons for generic or system avatars. Icon size adapts to avatar size.</p>
            </div>
          </div>
        </Section>

        <Section title="Shapes" description="Avatars can be rounded (circular) or square, with radius scaling based on size for square variants.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Rounded (default)</p>
              <div className="flex items-center gap-4">
                <Avatar size="xs">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="xs">JD</AvatarFallback>
                </Avatar>
                <Avatar size="sm">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="sm">JD</AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="md">JD</AvatarFallback>
                </Avatar>
                <Avatar size="lg">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="lg">JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Square</p>
              <div className="flex items-center gap-4">
                <Avatar size="xs" shape="square">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="xs">JD</AvatarFallback>
                </Avatar>
                <Avatar size="sm" shape="square">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="sm">JD</AvatarFallback>
                </Avatar>
                <Avatar size="md" shape="square">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="md">JD</AvatarFallback>
                </Avatar>
                <Avatar size="lg" shape="square">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="lg">JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Fallback Only" description="Avatars gracefully fall back to monograms or pictograms when images fail to load or are unavailable.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Monogram fallback</p>
              <div className="flex items-center gap-4">
                <Avatar size="md">
                  <AvatarImage src="/invalid-image.jpg" alt="User" />
                  <AvatarFallback size="md">JD</AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarImage src="/invalid-image.jpg" alt="User" />
                  <AvatarFallback size="md">AB</AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarImage src="/invalid-image.jpg" alt="User" />
                  <AvatarFallback size="md">CD</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-xs text-muted-foreground mt-3">When image fails to load, monogram displays automatically.</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Pictogram fallback</p>
              <div className="flex items-center gap-4">
                <Avatar size="md">
                  <AvatarImage src="/invalid-image.jpg" alt="User" />
                  <AvatarFallback size="md">
                    <MaterialSymbol name="person" size={20} weight={300} />
                  </AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarImage src="/invalid-image.jpg" alt="Company" />
                  <AvatarFallback size="md">
                    <MaterialSymbol name="business" size={20} weight={300} />
                  </AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarImage src="/invalid-image.jpg" alt="Team" />
                  <AvatarFallback size="md">
                    <MaterialSymbol name="group" size={20} weight={300} />
                  </AvatarFallback>
                </Avatar>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Pictograms provide visual context when no image or initials are available.</p>
            </div>
          </div>
        </Section>

        <Section title="In Lists" description="Avatars are commonly used in lists to identify users, team members, or entities.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">User list</p>
              <div className="space-y-2 max-w-md">
                <div className="flex items-center gap-3 p-3 rounded-lg border">
                  <Avatar size="sm" shape="rounded">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="Jane Doe" />
                    <AvatarFallback size="sm">JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-normal">Jane Doe</p>
                    <p className="text-xs text-muted-foreground">Product Designer</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border">
                  <Avatar size="sm" shape="rounded">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces" alt="John Smith" />
                    <AvatarFallback size="sm">JS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-normal">John Smith</p>
                    <p className="text-xs text-muted-foreground">Engineering Lead</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border">
                  <Avatar size="sm" shape="rounded">
                    <AvatarFallback size="sm">AB</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-normal">Alex Brown</p>
                    <p className="text-xs text-muted-foreground">Marketing Manager</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Comment list</p>
              <div className="space-y-4 max-w-md">
                <div className="flex gap-3">
                  <Avatar size="sm" shape="rounded">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="sm">JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-normal">Jane Doe</p>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Great work on the design system update!</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Avatar size="sm" shape="rounded">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="sm">JS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-normal">John Smith</p>
                      <span className="text-xs text-muted-foreground">3 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Thanks! Looking forward to implementing these changes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="With Status Badge" description="Avatars can display status indicators to show online presence, availability, or other states.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Online status</p>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar size="md">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="md">JD</AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-semantic-surface-rag-success-bright" />
                </div>
                <div className="relative">
                  <Avatar size="md">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="md">JS</AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-semantic-surface-rag-warning-bright" />
                </div>
                <div className="relative">
                  <Avatar size="md">
                    <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="md">SJ</AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-semantic-surface-rag-danger-bright" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">With badge component</p>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar size="lg">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="lg">JD</AvatarFallback>
                  </Avatar>
                  <Badge className="absolute -bottom-1 -right-1 size-5 p-0 flex items-center justify-center">
                    <MaterialSymbol name="check" size={12} weight={300} />
                  </Badge>
                </div>
                <div className="relative">
                  <Avatar size="lg">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="lg">JS</AvatarFallback>
                  </Avatar>
                  <Badge variant="destructive" className="absolute -bottom-1 -right-1 size-5 p-0 flex items-center justify-center">
                    <MaterialSymbol name="close" size={12} weight={300} />
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Grouped Avatars" description="Multiple avatars can be grouped together to show team members, collaborators, or related entities.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Overlapping avatars</p>
              <div className="flex items-center -space-x-2">
                <Avatar size="sm" shape="rounded">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="sm">JD</AvatarFallback>
                </Avatar>
                <Avatar size="sm" shape="rounded">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="sm">JS</AvatarFallback>
                </Avatar>
                <Avatar size="sm" shape="rounded">
                  <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=faces" alt="User" />
                  <AvatarFallback size="sm">SJ</AvatarFallback>
                </Avatar>
                <Avatar size="sm" shape="rounded">
                  <AvatarFallback size="sm">+5</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Team members</p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <Avatar size="sm" shape="rounded">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="sm">JD</AvatarFallback>
                  </Avatar>
                  <Avatar size="sm" shape="rounded">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="sm">JS</AvatarFallback>
                  </Avatar>
                  <Avatar size="sm" shape="rounded">
                    <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=faces" alt="User" />
                    <AvatarFallback size="sm">SJ</AvatarFallback>
                  </Avatar>
                </div>
                <span className="text-sm text-muted-foreground">3 team members</span>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Real-world examples showing avatars in different contexts and interfaces.">
          <div className="space-y-8">
            {/* User profile card */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">User profile card</p>
              <Card className="max-w-sm">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center gap-4">
                    <Avatar size="lg">
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop&crop=faces" alt="Jane Doe" />
                      <AvatarFallback size="lg">JD</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <p className="text-base font-normal">Jane Doe</p>
                      <p className="text-sm text-muted-foreground">Product Designer</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Active</Badge>
                      <Badge variant="outline">Premium</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Team member list */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Team member list</p>
              <div className="max-w-md space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar size="sm" shape="rounded">
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                        <AvatarFallback size="sm">JD</AvatarFallback>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-background bg-semantic-surface-rag-success-bright" />
                    </div>
                    <div>
                      <p className="text-sm font-normal">Jane Doe</p>
                      <p className="text-xs text-muted-foreground">Product Designer</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Message</Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar size="sm" shape="rounded">
                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces" alt="User" />
                        <AvatarFallback size="sm">JS</AvatarFallback>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-background bg-semantic-surface-rag-warning-bright" />
                    </div>
                    <div>
                      <p className="text-sm font-normal">John Smith</p>
                      <p className="text-xs text-muted-foreground">Engineering Lead</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Message</Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <Avatar size="sm" shape="rounded">
                      <AvatarFallback size="sm">AB</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-normal">Alex Brown</p>
                      <p className="text-xs text-muted-foreground">Marketing Manager</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Message</Button>
                </div>
              </div>
            </div>

            {/* Project collaborators */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Project collaborators</p>
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Collaborators</CardTitle>
                  <CardDescription>Team members working on this project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex -space-x-2">
                      <Avatar size="sm" shape="rounded">
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                        <AvatarFallback size="sm">JD</AvatarFallback>
                      </Avatar>
                      <Avatar size="sm" shape="rounded">
                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces" alt="User" />
                        <AvatarFallback size="sm">JS</AvatarFallback>
                      </Avatar>
                      <Avatar size="sm" shape="rounded">
                        <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=faces" alt="User" />
                        <AvatarFallback size="sm">SJ</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="text-sm text-muted-foreground">3 collaborators</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <MaterialSymbol name="person_add" size={16} weight={300} />
                    Add collaborator
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  skeleton: {
    title: "Skeleton",
    description: "Loading placeholders that pulse to indicate content is being fetched.",
    body: (
      <>
        <Section title="Overview" description="Skeleton component provides animated loading placeholders that match the shape and size of content being loaded.">
          <div className="space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Basic Usage" description="Simple skeleton loaders for text, images, and other content shapes.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Text lines</p>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Paragraph</p>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Image placeholder</p>
              <Skeleton className="h-[200px] w-full rounded-lg" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Avatar placeholder</p>
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Button placeholder</p>
              <Skeleton className="h-9 w-24 rounded-md" />
            </div>
          </div>
        </Section>

        <Section title="With Avatar" description="Skeleton loaders combined with Avatar components for user-related loading states.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">User card skeleton</p>
              <div className="flex items-center gap-3 p-3 border rounded-lg max-w-md">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-3 w-[100px]" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Comment skeleton</p>
              <div className="space-y-4 max-w-md">
                <div className="flex gap-3">
                  <Skeleton className="h-8 w-8 rounded-full shrink-0" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-[120px]" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <Skeleton className="h-8 w-8 rounded-full shrink-0" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Card Skeletons" description="Skeleton loaders for card components and complex layouts.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Product card skeleton</p>
              <Card className="max-w-sm">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-[200px] w-full rounded-lg mb-4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-9 w-full" />
                </CardFooter>
              </Card>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Article card skeleton</p>
              <Card className="max-w-md">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <Skeleton className="h-20 w-20 rounded-lg shrink-0" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <div className="flex items-center gap-2 mt-2">
                        <Skeleton className="h-6 w-6 rounded-full" />
                        <Skeleton className="h-4 w-[100px]" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        <Section title="Form Skeletons" description="Skeleton loaders for form elements and input fields.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Input field skeleton</p>
              <div className="space-y-2 max-w-md">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-9 w-full rounded-md" />
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Form skeleton</p>
              <div className="space-y-4 max-w-md p-4 border rounded-lg">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-9 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-9 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-20 w-full rounded-md" />
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <Skeleton className="h-9 w-20 rounded-md" />
                  <Skeleton className="h-9 w-24 rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Table Skeletons" description="Skeleton loaders for data tables and list views.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Table row skeleton</p>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 text-sm font-normal">
                        <Skeleton className="h-4 w-20" />
                      </th>
                      <th className="text-left p-3 text-sm font-normal">
                        <Skeleton className="h-4 w-24" />
                      </th>
                      <th className="text-left p-3 text-sm font-normal">
                        <Skeleton className="h-4 w-16" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3].map((i) => (
                      <tr key={i} className="border-b">
                        <td className="p-3">
                          <Skeleton className="h-4 w-32" />
                        </td>
                        <td className="p-3">
                          <Skeleton className="h-4 w-40" />
                        </td>
                        <td className="p-3">
                          <Skeleton className="h-6 w-16 rounded-full" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">List skeleton</p>
              <div className="space-y-2 max-w-md">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-3 border rounded-lg">
                    <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Real-world examples showing skeleton loaders in different contexts and interfaces.">
          <div className="space-y-8">
            {/* Dashboard skeleton */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Dashboard skeleton</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-8 w-20 mb-2" />
                      <Skeleton className="h-4 w-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Profile skeleton */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Profile page skeleton</p>
              <Card className="max-w-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center gap-4">
                    <Skeleton className="h-24 w-24 rounded-full" />
                    <div className="space-y-2 text-center w-full">
                      <Skeleton className="h-5 w-32 mx-auto" />
                      <Skeleton className="h-4 w-40 mx-auto" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-6 w-20 rounded-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feed skeleton */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Feed skeleton</p>
              <div className="space-y-4 max-w-2xl">
                {[1, 2].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="space-y-2 flex-1">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-3 w-24" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                      <Skeleton className="h-48 w-full rounded-lg" />
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center gap-4 w-full">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  spinner: {
    title: "Spinner",
    description: "Animated loading indicator for asynchronous operations and data fetching.",
    body: (
      <>
        <Section title="Overview" description="Spinner component provides a visual indicator that content is loading or an operation is in progress.">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <Spinner className="size-4" />
              <span className="text-xs text-muted-foreground">Default (16px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="size-6" />
              <span className="text-xs text-muted-foreground">Medium (24px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="size-8" />
              <span className="text-xs text-muted-foreground">Large (32px)</span>
            </div>
          </div>
        </Section>

        <Section title="Sizes" description="Spinner sizes adapt to different contexts and density requirements.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Small sizes</p>
              <div className="flex items-center gap-4">
                <Spinner className="size-3" />
                <Spinner className="size-4" />
                <Spinner className="size-5" />
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Medium sizes</p>
              <div className="flex items-center gap-4">
                <Spinner className="size-6" />
                <Spinner className="size-8" />
                <Spinner className="size-10" />
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Large sizes</p>
              <div className="flex items-center gap-4">
                <Spinner className="size-12" />
                <Spinner className="size-16" />
                <Spinner className="size-20" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Basic Usage" description="Simple spinner loaders for buttons, inline content, and standalone loading states.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Standalone spinner</p>
              <div className="flex items-center justify-center p-8 border rounded-lg">
                <Spinner className="size-8" />
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">With text</p>
              <div className="flex flex-col items-center justify-center gap-3 p-8 border rounded-lg">
                <Spinner className="size-8" />
                <p className="text-sm font-normal">Loading...</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Inline spinner</p>
              <div className="flex items-center gap-2">
                <span className="text-sm">Processing</span>
                <Spinner className="size-4" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="In Buttons" description="Spinners are commonly used in buttons to indicate loading states during form submissions and async actions.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Button with spinner</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button disabled>
                  <Spinner className="size-4 mr-2" />
                  Loading
                </Button>
                <Button variant="secondary" disabled>
                  <Spinner className="size-4 mr-2" />
                  Saving
                </Button>
                <Button variant="outline" disabled>
                  <Spinner className="size-4 mr-2" />
                  Processing
                </Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Icon-only button</p>
              <div className="flex items-center gap-3">
                <Button size="icon" disabled>
                  <Spinner className="size-4" />
                </Button>
                <Button size="icon-sm" variant="secondary" disabled>
                  <Spinner className="size-3" />
                </Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Full width button</p>
              <Button className="w-full" disabled>
                <Spinner className="size-4 mr-2" />
                Submitting form...
              </Button>
            </div>
          </div>
        </Section>

        <Section title="In Forms" description="Spinners indicate form submission and validation states.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Form submission</p>
              <div className="max-w-md space-y-4 p-4 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="spinner-email">Email</Label>
                  <Input id="spinner-email" type="email" placeholder="you@example.com" />
                </div>
                <div className="flex items-center gap-3 justify-end">
                  <Button variant="ghost">Cancel</Button>
                  <Button disabled>
                    <Spinner className="size-4 mr-2" />
                    Submitting
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Inline validation</p>
              <div className="max-w-md space-y-2">
                <Label htmlFor="spinner-username">Username</Label>
                <div className="relative">
                  <Input id="spinner-username" placeholder="Choose a username" className="pr-9" />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Spinner className="size-4 text-foreground" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Checking availability...</p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="In Cards" description="Spinners provide loading feedback for card content and data fetching.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Card loading state</p>
              <Card className="max-w-sm">
                <CardHeader>
                  <CardTitle>Loading Data</CardTitle>
                  <CardDescription>Fetching information...</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center py-8">
                    <Spinner className="size-8" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Content loading</p>
              <Card className="max-w-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center py-4">
                    <Spinner className="size-6" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        <Section title="In Tables" description="Spinners indicate data loading in table rows and cells.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Table loading state</p>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 text-sm font-normal">Name</th>
                      <th className="text-left p-3 text-sm font-normal">Status</th>
                      <th className="text-left p-3 text-sm font-normal">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <Skeleton className="h-8 w-8 rounded-full" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <Spinner className="size-4" />
                          <span className="text-sm text-muted-foreground">Loading...</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <Button size="sm" variant="ghost" disabled>
                          <Spinner className="size-3" />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Empty state loading</p>
              <div className="border rounded-lg p-8">
                <div className="flex flex-col items-center justify-center gap-3">
                  <Spinner className="size-8" />
                  <p className="text-sm font-normal">Loading data...</p>
                  <p className="text-xs text-muted-foreground">Please wait while we fetch your information</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Real-world examples showing spinners in different contexts and interfaces.">
          <div className="space-y-8">
            {/* Page loading */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Page loading</p>
              <div className="flex flex-col items-center justify-center gap-4 p-12 border rounded-lg">
                <Spinner className="size-12" />
                <div className="text-center space-y-2">
                  <p className="text-base font-normal">Loading page</p>
                  <p className="text-sm text-muted-foreground">Please wait while we load your content</p>
                </div>
              </div>
            </div>

            {/* Form submission */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Form submission</p>
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>Sign up to get started</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="spinner-form-email">Email</Label>
                    <Input id="spinner-form-email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spinner-form-password">Password</Label>
                    <Input id="spinner-form-password" type="password" placeholder="••••••••" />
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-2 justify-end">
                  <Button variant="ghost">Cancel</Button>
                  <Button disabled>
                    <Spinner className="size-4 mr-2" />
                    Creating Account
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Data fetching */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Data fetching</p>
              <div className="max-w-md space-y-4 p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-normal">User Profile</p>
                    <p className="text-xs text-muted-foreground">Fetching user data...</p>
                  </div>
                  <Spinner className="size-6" />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-normal">Settings</p>
                    <p className="text-xs text-muted-foreground">Loading preferences...</p>
                  </div>
                  <Spinner className="size-6" />
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Action buttons</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button disabled>
                  <Spinner className="size-4 mr-2" />
                  Save Changes
                </Button>
                <Button variant="secondary" disabled>
                  <Spinner className="size-4 mr-2" />
                  Uploading
                </Button>
                <Button variant="outline" disabled>
                  <Spinner className="size-4 mr-2" />
                  Processing
                </Button>
                <Button variant="destructive" disabled>
                  <Spinner className="size-4 mr-2" />
                  Deleting
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  separator: {
    title: "Separator",
    description: "Visual divider for organizing content into distinct sections.",
    body: (
      <>
        <Section title="Overview" description="Separator component provides visual dividers to organize content and create clear section boundaries.">
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-normal mb-2">Horizontal separator</p>
                <p className="text-sm text-muted-foreground mb-4">Divides content vertically</p>
                <Separator />
              </div>
              <div>
                <p className="text-sm font-normal mb-2">Vertical separator</p>
                <p className="text-sm text-muted-foreground mb-4">Divides content horizontally</p>
                <div className="flex items-center gap-4 h-8">
                  <span className="text-sm">Left</span>
                  <Separator orientation="vertical" />
                  <span className="text-sm">Right</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Orientations" description="Separators can be horizontal or vertical depending on the layout direction.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Horizontal (default)</p>
              <div className="space-y-4 max-w-md">
                <div>
                  <p className="text-sm font-normal">Section 1</p>
                  <p className="text-sm text-muted-foreground">Content above the separator</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-normal">Section 2</p>
                  <p className="text-sm text-muted-foreground">Content below the separator</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Vertical</p>
              <div className="flex items-center gap-4 h-16">
                <div className="flex-1">
                  <p className="text-sm font-normal">Left content</p>
                  <p className="text-sm text-muted-foreground">Text on the left side</p>
                </div>
                <Separator orientation="vertical" />
                <div className="flex-1">
                  <p className="text-sm font-normal">Right content</p>
                  <p className="text-sm text-muted-foreground">Text on the right side</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="In Lists" description="Separators organize list items and create visual hierarchy.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">List items</p>
              <div className="max-w-md space-y-0 border rounded-lg">
                <div className="p-3">
                  <p className="text-sm font-normal">Item 1</p>
                  <p className="text-xs text-muted-foreground">Description for item 1</p>
                </div>
                <Separator />
                <div className="p-3">
                  <p className="text-sm font-normal">Item 2</p>
                  <p className="text-xs text-muted-foreground">Description for item 2</p>
                </div>
                <Separator />
                <div className="p-3">
                  <p className="text-sm font-normal">Item 3</p>
                  <p className="text-xs text-muted-foreground">Description for item 3</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Navigation menu</p>
              <div className="max-w-xs space-y-0 border rounded-lg">
                <button className="w-full p-3 text-left hover:bg-accent">
                  <p className="text-sm font-normal">Dashboard</p>
                </button>
                <Separator />
                <button className="w-full p-3 text-left hover:bg-accent">
                  <p className="text-sm font-normal">Projects</p>
                </button>
                <button className="w-full p-3 text-left hover:bg-accent">
                  <p className="text-sm font-normal">Team</p>
                </button>
                <Separator />
                <button className="w-full p-3 text-left hover:bg-accent">
                  <p className="text-sm font-normal">Settings</p>
                </button>
              </div>
            </div>
          </div>
        </Section>

        <Section title="In Cards" description="Separators divide card sections and organize card content.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Card with separator</p>
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description</CardDescription>
                </CardHeader>
                <Separator />
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">Content separated from header</p>
                </CardContent>
                <Separator />
                <CardFooter>
                  <Button variant="outline" className="w-full">Action</Button>
                </CardFooter>
              </Card>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Card sections</p>
              <Card className="max-w-md">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-normal mb-1">Section A</p>
                      <p className="text-xs text-muted-foreground">Content for section A</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm font-normal mb-1">Section B</p>
                      <p className="text-xs text-muted-foreground">Content for section B</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm font-normal mb-1">Section C</p>
                      <p className="text-xs text-muted-foreground">Content for section C</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        <Section title="In Toolbars" description="Vertical separators organize toolbar buttons and actions.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Button groups</p>
              <div className="flex items-center gap-2 p-2 border rounded-lg w-fit">
                <Button size="icon-sm" variant="ghost">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                </Button>
                <Button size="icon-sm" variant="ghost">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                </Button>
                <Button size="icon-sm" variant="ghost">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                </Button>
                <Separator orientation="vertical" className="h-4 mx-1" />
                <Button size="icon-sm" variant="ghost">
                  <MaterialSymbol name="link" size={16} weight={300} />
                </Button>
                <Button size="icon-sm" variant="ghost">
                  <MaterialSymbol name="image" size={16} weight={300} />
                </Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Action toolbar</p>
              <div className="flex items-center gap-2 p-3 border rounded-lg">
                <Button size="sm" variant="outline">
                  <MaterialSymbol name="filter_list" size={16} weight={300} />
                  Filter
                </Button>
                <Separator orientation="vertical" className="h-4" />
                <Button size="sm" variant="outline">
                  <MaterialSymbol name="file_download" size={16} weight={300} />
                  Export
                </Button>
                <Separator orientation="vertical" className="h-4" />
                <Button size="sm">
                  <MaterialSymbol name="add" size={16} weight={300} />
                  New
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section title="In Forms" description="Separators organize form sections and group related fields.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Form sections</p>
              <div className="max-w-md space-y-4 p-4 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="separator-name">Full name</Label>
                  <Input id="separator-name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="separator-email">Email</Label>
                  <Input id="separator-email" type="email" placeholder="you@example.com" />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="separator-phone">Phone</Label>
                  <Input id="separator-phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="separator-address">Address</Label>
                  <Input id="separator-address" placeholder="123 Main St" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3">Field groups</p>
              <FieldSet className="max-w-md">
                <FieldLegend>Personal Information</FieldLegend>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="separator-first">
                      <FieldTitle>First name</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="separator-first" placeholder="John" />
                    </FieldContent>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="separator-last">
                      <FieldTitle>Last name</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="separator-last" placeholder="Doe" />
                    </FieldContent>
                  </Field>
                </FieldGroup>
                <FieldSeparator>Contact Information</FieldSeparator>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="separator-contact-email">
                      <FieldTitle>Email</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="separator-contact-email" type="email" placeholder="you@example.com" />
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Real-world examples showing separators in different contexts and interfaces.">
          <div className="space-y-8">
            {/* Settings page */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Settings page</p>
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="settings-display">Display name</Label>
                    <Input id="settings-display" defaultValue="John Doe" />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="settings-email">Email</Label>
                    <Input id="settings-email" type="email" defaultValue="john@example.com" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-normal">Notifications</p>
                      <p className="text-xs text-muted-foreground">Email and push notifications</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
                <Separator />
                <CardFooter className="flex items-center gap-2 justify-end">
                  <Button variant="ghost">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Menu with separators */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Context menu</p>
              <div className="max-w-xs space-y-0 border rounded-lg overflow-hidden">
                <button className="w-full p-3 text-left hover:bg-accent flex items-center gap-2">
                  <MaterialSymbol name="edit" size={16} weight={300} />
                  <span className="text-sm">Edit</span>
                </button>
                <button className="w-full p-3 text-left hover:bg-accent flex items-center gap-2">
                  <MaterialSymbol name="content_copy" size={16} weight={300} />
                  <span className="text-sm">Copy</span>
                </button>
                <button className="w-full p-3 text-left hover:bg-accent flex items-center gap-2">
                  <MaterialSymbol name="share" size={16} weight={300} />
                  <span className="text-sm">Share</span>
                </button>
                <Separator />
                <button className="w-full p-3 text-left hover:bg-accent flex items-center gap-2 text-[var(--destructive-foreground)]">
                  <MaterialSymbol name="delete" size={16} weight={300} />
                  <span className="text-sm">Delete</span>
                </button>
              </div>
            </div>

            {/* Data table toolbar */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Table toolbar</p>
              <div className="flex items-center gap-2 p-3 border rounded-lg">
                <Input placeholder="Search..." className="w-64" />
                <Separator orientation="vertical" className="h-4" />
                <Button size="sm" variant="outline">
                  <MaterialSymbol name="filter_list" size={16} weight={300} />
                  Filter
                </Button>
                <Button size="sm" variant="outline">
                  <MaterialSymbol name="sort" size={16} weight={300} />
                  Sort
                </Button>
                <Separator orientation="vertical" className="h-4" />
                <Button size="sm">
                  <MaterialSymbol name="add" size={16} weight={300} />
                  New
                </Button>
              </div>
            </div>

            {/* List with separators */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">User list</p>
              <div className="max-w-md space-y-0 border rounded-lg">
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-3">
                    <Avatar size="sm" shape="rounded">
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces" alt="User" />
                      <AvatarFallback size="sm">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-normal">Jane Doe</p>
                      <p className="text-xs text-muted-foreground">Product Designer</p>
                    </div>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-3">
                    <Avatar size="sm" shape="rounded">
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces" alt="User" />
                      <AvatarFallback size="sm">JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-normal">John Smith</p>
                      <p className="text-xs text-muted-foreground">Engineering Lead</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Pending</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-3">
                    <Avatar size="sm" shape="rounded">
                      <AvatarFallback size="sm">AB</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-normal">Alex Brown</p>
                      <p className="text-xs text-muted-foreground">Marketing Manager</p>
                    </div>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  checkbox: {
    title: "Checkbox",
    description: "Allow users to select one or more options from a list. Checkboxes are ideal for multiple selections and provide clear visual feedback for selected states.",
    body: (
      <>
        <Section title="Overview" description="Checkboxes allow users to select multiple options. They provide clear visual feedback and are essential for forms, filters, and settings.">
          <div className="space-y-3">
            <label htmlFor="overview-checkbox-1" className="flex items-center gap-2 cursor-pointer">
              <Checkbox id="overview-checkbox-1" />
              <span className="text-sm">Unchecked</span>
            </label>
            <label htmlFor="overview-checkbox-2" className="flex items-center gap-2 cursor-pointer">
              <Checkbox id="overview-checkbox-2" defaultChecked />
              <span className="text-sm">Checked</span>
            </label>
            <label htmlFor="overview-checkbox-3" className="flex items-center gap-2 cursor-pointer">
              <Checkbox id="overview-checkbox-3" disabled />
              <span className="text-sm opacity-50">Disabled</span>
            </label>
          </div>
        </Section>

        <Section title="Basic Usage" description="Simple checkboxes with labels. Always pair checkboxes with labels for accessibility.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Single checkbox</p>
              <label htmlFor="basic-checkbox" className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="basic-checkbox" />
                <span className="text-sm">I agree to the terms and conditions</span>
              </label>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Multiple options</p>
              <div className="space-y-2">
                <label htmlFor="option-1" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="option-1" />
                  <span className="text-sm">Option 1</span>
                </label>
                <label htmlFor="option-2" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="option-2" defaultChecked />
                  <span className="text-sm">Option 2</span>
                </label>
                <label htmlFor="option-3" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="option-3" />
                  <span className="text-sm">Option 3</span>
                </label>
              </div>
            </div>
          </div>
        </Section>

        <Section title="States" description="Checkboxes support checked, unchecked, and disabled states. The checked state uses accent colors for clear visual feedback.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Unchecked</p>
              <label htmlFor="state-unchecked" className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="state-unchecked" />
                <span className="text-sm">Unchecked checkbox</span>
              </label>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Checked</p>
              <label htmlFor="state-checked" className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="state-checked" defaultChecked />
                <span className="text-sm">Checked checkbox</span>
              </label>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Disabled</p>
              <label htmlFor="state-disabled" className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="state-disabled" disabled />
                <span className="text-sm opacity-50">Disabled checkbox</span>
              </label>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Disabled checked</p>
              <label htmlFor="state-disabled-checked" className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="state-disabled-checked" defaultChecked disabled />
                <span className="text-sm opacity-50">Disabled checked checkbox</span>
              </label>
            </div>
          </div>
        </Section>

        <Section title="With Labels" description="Labels enhance accessibility and provide larger click areas. Use descriptive labels that clearly indicate what the checkbox controls.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Simple label</p>
              <label htmlFor="label-simple" className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="label-simple" />
                <span className="text-sm">Enable notifications</span>
              </label>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With description</p>
              <label htmlFor="label-description" className="flex items-start gap-2 cursor-pointer">
                <Checkbox id="label-description" className="mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm">Email notifications</span>
                  <span className="text-sm text-muted-foreground">Receive email updates about your account activity</span>
                </div>
              </label>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Multiple with descriptions</p>
              <div className="space-y-3">
                <label htmlFor="label-1" className="flex items-start gap-2 cursor-pointer">
                  <Checkbox id="label-1" defaultChecked className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm">Marketing emails</span>
                    <span className="text-sm text-muted-foreground">Receive updates about new features and products</span>
                  </div>
                </label>
                <label htmlFor="label-2" className="flex items-start gap-2 cursor-pointer">
                  <Checkbox id="label-2" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm">Security alerts</span>
                    <span className="text-sm text-muted-foreground">Get notified about important security events</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Checkbox Cards" description="CheckboxCard provides a card-style checkbox with enhanced visual feedback. Perfect for selecting items with descriptions or additional context.">
          <div className="space-y-3">
            <CheckboxCard
              id="card-1"
              label="Basic plan"
              description="Perfect for individuals and small teams"
              defaultChecked
            />
            <CheckboxCard
              id="card-2"
              label="Pro plan"
              description="Advanced features for growing businesses"
            />
            <CheckboxCard
              id="card-3"
              label="Enterprise plan"
              description="Custom solutions for large organizations"
            />
          </div>
        </Section>

        <Section title="Usage Examples" description="Checkboxes integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Form preferences */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Preferences</TypographyH4>
              <div className="space-y-3">
                <label htmlFor="pref-email" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="pref-email" defaultChecked />
                  <span className="text-sm">Email notifications</span>
                </label>
                <label htmlFor="pref-sms" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="pref-sms" />
                  <span className="text-sm">SMS notifications</span>
                </label>
                <label htmlFor="pref-push" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="pref-push" defaultChecked />
                  <span className="text-sm">Push notifications</span>
                </label>
              </div>
            </div>

            {/* Filter options */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Filter by type</TypographyH4>
              <div className="space-y-2">
                <label htmlFor="filter-documents" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="filter-documents" defaultChecked />
                  <span className="text-sm">Documents</span>
                </label>
                <label htmlFor="filter-images" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="filter-images" defaultChecked />
                  <span className="text-sm">Images</span>
                </label>
                <label htmlFor="filter-videos" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="filter-videos" />
                  <span className="text-sm">Videos</span>
                </label>
                <label htmlFor="filter-audio" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="filter-audio" />
                  <span className="text-sm">Audio</span>
                </label>
              </div>
            </div>

            {/* Terms and conditions */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Registration</TypographyH4>
              <label htmlFor="terms" className="flex items-start gap-2 cursor-pointer">
                <Checkbox id="terms" className="mt-0.5" />
                <span className="text-sm">
                  I agree to the <a href="#" className="underline">terms and conditions</a> and <a href="#" className="underline">privacy policy</a>
                </span>
              </label>
            </div>

            {/* Plan selection */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Select plan</TypographyH4>
              <div className="space-y-2">
                <CheckboxCard
                  id="plan-basic"
                  label="Basic"
                  description="$9/month"
                />
                <CheckboxCard
                  id="plan-pro"
                  label="Pro"
                  description="$29/month"
                  defaultChecked
                />
                <CheckboxCard
                  id="plan-enterprise"
                  label="Enterprise"
                  description="Custom pricing"
                />
              </div>
            </div>

            {/* List selection */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Select countries</TypographyH4>
              <div className="space-y-2">
                <label htmlFor="country-fr" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="country-fr" />
                  <span className="text-sm">France</span>
                </label>
                <label htmlFor="country-de" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="country-de" />
                  <span className="text-sm">Germany</span>
                </label>
                <label htmlFor="country-it" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="country-it" defaultChecked />
                  <span className="text-sm">Italy</span>
                </label>
                <label htmlFor="country-es" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="country-es" />
                  <span className="text-sm">Spain</span>
                </label>
              </div>
            </div>

            {/* Settings panel */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Account settings</TypographyH4>
              <div className="space-y-3">
                <label htmlFor="setting-profile" className="flex items-start gap-2 cursor-pointer">
                  <Checkbox id="setting-profile" defaultChecked className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm">Public profile</span>
                    <span className="text-sm text-muted-foreground">Make your profile visible to everyone</span>
                  </div>
                </label>
                <label htmlFor="setting-activity" className="flex items-start gap-2 cursor-pointer">
                  <Checkbox id="setting-activity" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm">Show activity status</span>
                    <span className="text-sm text-muted-foreground">Let others see when you're online</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  switch: {
    title: "Switch",
    description: "Toggle switches for binary on/off states. Switches provide immediate visual feedback and are ideal for settings and preferences that can be enabled or disabled.",
    body: (
      <>
        <Section title="Overview" description="Switches allow users to toggle a single option on or off. They provide clear visual feedback with smooth animations and are perfect for settings and preferences.">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Switch id="overview-switch-off" />
              <label htmlFor="overview-switch-off" className="text-sm cursor-pointer">Off</label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="overview-switch-on" defaultChecked />
              <label htmlFor="overview-switch-on" className="text-sm cursor-pointer">On</label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="overview-switch-disabled" disabled />
              <label htmlFor="overview-switch-disabled" className="text-sm opacity-50 cursor-pointer">Disabled</label>
            </div>
          </div>
        </Section>

        <Section title="Basic Usage" description="Simple switches with labels. Always pair switches with labels for accessibility and clarity.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Single switch</p>
              <div className="flex items-center justify-between gap-3">
                <label htmlFor="basic-switch" className="text-sm cursor-pointer">
                  Enable notifications
                </label>
                <Switch id="basic-switch" />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With description</p>
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <label htmlFor="switch-with-desc" className="text-sm cursor-pointer">
                    Email notifications
                  </label>
                  <span className="text-sm text-muted-foreground">Receive email updates</span>
                </div>
                <Switch id="switch-with-desc" defaultChecked />
              </div>
            </div>
          </div>
        </Section>

        <Section title="States" description="Switches support checked, unchecked, and disabled states. The checked state uses accent colors for clear visual feedback.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Unchecked</p>
              <div className="flex items-center justify-between gap-3">
                <label htmlFor="state-unchecked-switch" className="text-sm cursor-pointer">
                  Unchecked switch
                </label>
                <Switch id="state-unchecked-switch" />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Checked</p>
              <div className="flex items-center justify-between gap-3">
                <label htmlFor="state-checked-switch" className="text-sm cursor-pointer">
                  Checked switch
                </label>
                <Switch id="state-checked-switch" defaultChecked />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Disabled</p>
              <div className="flex items-center justify-between gap-3">
                <label htmlFor="state-disabled-switch" className="text-sm opacity-50 cursor-pointer">
                  Disabled switch
                </label>
                <Switch id="state-disabled-switch" disabled />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Disabled checked</p>
              <div className="flex items-center justify-between gap-3">
                <label htmlFor="state-disabled-checked-switch" className="text-sm opacity-50 cursor-pointer">
                  Disabled checked switch
                </label>
                <Switch id="state-disabled-checked-switch" defaultChecked disabled />
              </div>
            </div>
          </div>
        </Section>

        <Section title="With Labels" description="Labels help users understand what the switch controls. Use descriptive labels and optional descriptions for clarity.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Simple label</p>
              <div className="flex items-center justify-between gap-3">
                <label htmlFor="label-simple-switch" className="text-sm cursor-pointer">
                  Dark mode
                </label>
                <Switch id="label-simple-switch" />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With description</p>
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <label htmlFor="label-desc-switch" className="text-sm cursor-pointer">
                    Auto-save
                  </label>
                  <span className="text-sm text-muted-foreground">Automatically save your work</span>
                </div>
                <Switch id="label-desc-switch" defaultChecked />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Multiple switches</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="switch-1" className="text-sm cursor-pointer">
                      Email notifications
                    </label>
                    <span className="text-sm text-muted-foreground">Receive email updates</span>
                  </div>
                  <Switch id="switch-1" defaultChecked />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="switch-2" className="text-sm cursor-pointer">
                      Push notifications
                    </label>
                    <span className="text-sm text-muted-foreground">Get push notifications on mobile</span>
                  </div>
                  <Switch id="switch-2" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="switch-3" className="text-sm cursor-pointer">
                      SMS notifications
                    </label>
                    <span className="text-sm text-muted-foreground">Receive text messages</span>
                  </div>
                  <Switch id="switch-3" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Switch Cards" description="SwitchCard provides a card-style switch with enhanced visual feedback. Perfect for settings with descriptions or additional context.">
          <div className="space-y-3">
            <SwitchCard
              id="card-switch-1"
              label="Email notifications"
              description="Receive email updates about your account"
              defaultChecked
            />
            <SwitchCard
              id="card-switch-2"
              label="Push notifications"
              description="Get notified on your mobile device"
            />
            <SwitchCard
              id="card-switch-3"
              label="SMS notifications"
              description="Receive text message alerts"
            />
          </div>
        </Section>

        <Section title="Usage Examples" description="Switches integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Settings panel */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Notification settings</TypographyH4>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="notif-email" className="text-sm cursor-pointer">
                      Email notifications
                    </label>
                    <span className="text-sm text-muted-foreground">Desktop and mobile</span>
                  </div>
                  <Switch id="notif-email" defaultChecked />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="notif-push" className="text-sm cursor-pointer">
                      Push notifications
                    </label>
                    <span className="text-sm text-muted-foreground">Mobile devices only</span>
                  </div>
                  <Switch id="notif-push" />
                </div>
              </div>
            </div>

            {/* Privacy settings */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Privacy</TypographyH4>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="privacy-profile" className="text-sm cursor-pointer">
                      Public profile
                    </label>
                    <span className="text-sm text-muted-foreground">Make your profile visible to everyone</span>
                  </div>
                  <Switch id="privacy-profile" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="privacy-activity" className="text-sm cursor-pointer">
                      Show activity status
                    </label>
                    <span className="text-sm text-muted-foreground">Let others see when you're online</span>
                  </div>
                  <Switch id="privacy-activity" defaultChecked />
                </div>
              </div>
            </div>

            {/* Theme toggle */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Appearance</TypographyH4>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <MaterialSymbol name="light_mode" size={16} weight={300} className="text-semantic-icon-subdued" />
                  <label htmlFor="theme-switch" className="text-sm cursor-pointer">
                    Dark mode
                  </label>
                </div>
                <Switch id="theme-switch" />
              </div>
            </div>

            {/* Feature flags */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Feature flags</TypographyH4>
              <div className="space-y-3">
                <SwitchCard
                  id="feature-beta"
                  label="Beta features"
                  description="Enable experimental features"
                />
                <SwitchCard
                  id="feature-analytics"
                  label="Analytics"
                  description="Help us improve by sharing usage data"
                  defaultChecked
                />
              </div>
            </div>

            {/* Account settings */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Account</TypographyH4>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="account-2fa" className="text-sm cursor-pointer">
                    Two-factor authentication
                  </label>
                  <Switch id="account-2fa" defaultChecked />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="account-backup" className="text-sm cursor-pointer">
                    Automatic backup
                  </label>
                  <Switch id="account-backup" defaultChecked />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="account-sync" className="text-sm cursor-pointer">
                    Sync across devices
                  </label>
                  <Switch id="account-sync" />
                </div>
              </div>
            </div>

            {/* Content preferences */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Content preferences</TypographyH4>
              <div className="space-y-3">
                <SwitchCard
                  id="content-mature"
                  label="Show mature content"
                  description="Display content rated for mature audiences"
                />
                <SwitchCard
                  id="content-recommendations"
                  label="Personalized recommendations"
                  description="Get content suggestions based on your activity"
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "radio-group": {
    title: "Radio Group",
    description: "Allow users to select a single option from a list. Radio groups ensure only one option can be selected at a time, making them ideal for mutually exclusive choices.",
    body: (
      <>
        <Section title="Overview" description="Radio groups allow users to select one option from multiple choices. Only one option can be selected at a time, making them perfect for mutually exclusive selections.">
          <RadioGroup defaultValue="option2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option1" id="overview-radio-1" />
              <Label htmlFor="overview-radio-1" className="text-sm">Option 1</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option2" id="overview-radio-2" />
              <Label htmlFor="overview-radio-2" className="text-sm">Option 2</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option3" id="overview-radio-3" />
              <Label htmlFor="overview-radio-3" className="text-sm">Option 3</Label>
            </div>
          </RadioGroup>
        </Section>

        <Section title="Basic Usage" description="Simple radio groups with labels. Always pair radio buttons with labels for accessibility.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Simple selection</p>
              <RadioGroup defaultValue="small">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="small" id="size-small" />
                  <Label htmlFor="size-small" className="text-sm">Small</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="medium" id="size-medium" />
                  <Label htmlFor="size-medium" className="text-sm">Medium</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="large" id="size-large" />
                  <Label htmlFor="size-large" className="text-sm">Large</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With descriptions</p>
              <RadioGroup defaultValue="email">
                <div className="flex items-start gap-2">
                  <RadioGroupItem value="email" id="contact-email" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="contact-email" className="text-sm">Email</Label>
                    <span className="text-sm text-muted-foreground">Receive updates via email</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <RadioGroupItem value="phone" id="contact-phone" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="contact-phone" className="text-sm">Phone</Label>
                    <span className="text-sm text-muted-foreground">Receive updates via SMS</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <RadioGroupItem value="none" id="contact-none" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="contact-none" className="text-sm">None</Label>
                    <span className="text-sm text-muted-foreground">Don't send notifications</span>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Section>

        <Section title="States" description="Radio buttons support checked, unchecked, and disabled states. Only one option can be selected at a time.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Unchecked</p>
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unchecked" id="state-unchecked" />
                  <Label htmlFor="state-unchecked" className="text-sm">Unchecked option</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Checked</p>
              <RadioGroup defaultValue="checked">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="checked" id="state-checked" />
                  <Label htmlFor="state-checked" className="text-sm">Checked option</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Disabled</p>
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="disabled" id="state-disabled" disabled />
                  <Label htmlFor="state-disabled" className="text-sm opacity-50">Disabled option</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Disabled checked</p>
              <RadioGroup defaultValue="disabled-checked">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="disabled-checked" id="state-disabled-checked" disabled />
                  <Label htmlFor="state-disabled-checked" className="text-sm opacity-50">Disabled checked option</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Section>

        <Section title="With Labels" description="Labels enhance accessibility and provide larger click areas. Use descriptive labels that clearly indicate what each option represents.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Simple labels</p>
              <RadioGroup defaultValue="option2">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option1" id="label-radio-1" />
                  <Label htmlFor="label-radio-1" className="text-sm">Option 1</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option2" id="label-radio-2" />
                  <Label htmlFor="label-radio-2" className="text-sm">Option 2</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option3" id="label-radio-3" />
                  <Label htmlFor="label-radio-3" className="text-sm">Option 3</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With descriptions</p>
              <RadioGroup defaultValue="standard">
                <div className="flex items-start gap-2">
                  <RadioGroupItem value="standard" id="desc-radio-1" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="desc-radio-1" className="text-sm">Standard shipping</Label>
                    <span className="text-sm text-muted-foreground">5-7 business days</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <RadioGroupItem value="express" id="desc-radio-2" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="desc-radio-2" className="text-sm">Express shipping</Label>
                    <span className="text-sm text-muted-foreground">2-3 business days</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <RadioGroupItem value="overnight" id="desc-radio-3" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="desc-radio-3" className="text-sm">Overnight shipping</Label>
                    <span className="text-sm text-muted-foreground">Next business day</span>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Section>

        <Section title="Radio Card Items" description="RadioGroupCardItem provides a card-style radio button with enhanced visual feedback. Perfect for selecting options with descriptions or additional context.">
          <RadioGroup defaultValue="plan-pro">
            <RadioGroupCardItem
              id="plan-starter"
              value="plan-starter"
              label="Starter plan"
              description="Perfect for individuals and small teams"
            />
            <RadioGroupCardItem
              id="plan-pro"
              value="plan-pro"
              label="Pro plan"
              description="Advanced features for growing businesses"
            />
            <RadioGroupCardItem
              id="plan-enterprise"
              value="plan-enterprise"
              label="Enterprise plan"
              description="Custom solutions for large organizations"
            />
          </RadioGroup>
        </Section>

        <Section title="Usage Examples" description="Radio groups integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Plan selection */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Select plan</TypographyH4>
              <RadioGroup defaultValue="pro">
                <RadioGroupCardItem
                  id="plan-starter-ex"
                  value="starter"
                  label="Starter"
                  description="Up to 3 users"
                />
                <RadioGroupCardItem
                  id="plan-pro-ex"
                  value="pro"
                  label="Pro"
                  description="Team ready"
                />
                <RadioGroupCardItem
                  id="plan-enterprise-ex"
                  value="enterprise"
                  label="Enterprise"
                  description="Custom"
                />
              </RadioGroup>
            </div>

            {/* Payment method */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Payment method</TypographyH4>
              <RadioGroup defaultValue="card">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="card" id="payment-card" />
                  <Label htmlFor="payment-card" className="text-sm">Credit card</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="paypal" id="payment-paypal" />
                  <Label htmlFor="payment-paypal" className="text-sm">PayPal</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="bank" id="payment-bank" />
                  <Label htmlFor="payment-bank" className="text-sm">Bank transfer</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Shipping options */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Shipping options</TypographyH4>
              <RadioGroup defaultValue="standard">
                <div className="flex items-start gap-2">
                  <RadioGroupItem value="standard" id="shipping-standard" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="shipping-standard" className="text-sm">Standard</Label>
                    <span className="text-sm text-muted-foreground">5-7 business days - Free</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <RadioGroupItem value="express" id="shipping-express" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="shipping-express" className="text-sm">Express</Label>
                    <span className="text-sm text-muted-foreground">2-3 business days - $10</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <RadioGroupItem value="overnight" id="shipping-overnight" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="shipping-overnight" className="text-sm">Overnight</Label>
                    <span className="text-sm text-muted-foreground">Next business day - $25</span>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Notification frequency */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Notification frequency</TypographyH4>
              <RadioGroup defaultValue="daily">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="realtime" id="notif-realtime" />
                  <Label htmlFor="notif-realtime" className="text-sm">Real-time</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="daily" id="notif-daily" />
                  <Label htmlFor="notif-daily" className="text-sm">Daily digest</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="weekly" id="notif-weekly" />
                  <Label htmlFor="notif-weekly" className="text-sm">Weekly summary</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Theme selection */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Theme</TypographyH4>
              <RadioGroup defaultValue="system">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="light" id="theme-light" />
                  <Label htmlFor="theme-light" className="text-sm">Light</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="dark" id="theme-dark" />
                  <Label htmlFor="theme-dark" className="text-sm">Dark</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="system" id="theme-system" />
                  <Label htmlFor="theme-system" className="text-sm">System</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Language selection */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Language</TypographyH4>
              <RadioGroup defaultValue="en">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="en" id="lang-en" />
                  <Label htmlFor="lang-en" className="text-sm">English</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="fr" id="lang-fr" />
                  <Label htmlFor="lang-fr" className="text-sm">Français</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="es" id="lang-es" />
                  <Label htmlFor="lang-es" className="text-sm">Español</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  select: {
    title: "Select",
    description: "A dropdown menu component that allows users to select a single option from a list. Perfect for forms, filters, and settings where space is limited.",
    body: (
      <>
        <Section title="Overview" description="Select components provide a compact way to choose from multiple options. They open a dropdown menu when clicked, displaying all available choices.">
          <div className="space-y-3">
            <Label htmlFor="overview-select" className="text-sm">Select dropdown</Label>
            <Select defaultValue="option2">
              <SelectTrigger id="overview-select" className="w-64">
                <SelectValue placeholder="Choose..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Section>

        <Section title="Basic Usage" description="Simple select dropdowns with placeholder text and selected values. Always provide clear labels and meaningful option text.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With placeholder</p>
              <Select>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Choose an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With default value</p>
              <Select defaultValue="option2">
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Choose an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With label</p>
              <div className="space-y-3">
                <Label htmlFor="basic-select" className="text-sm">Country</Label>
                <Select defaultValue="fr">
                  <SelectTrigger id="basic-select" className="w-64">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="it">Italy</SelectItem>
                    <SelectItem value="es">Spain</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Sizes" description="Select components support different sizes to match your layout needs. Use smaller sizes in compact spaces or larger sizes for better touch targets.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Small</p>
              <Select>
                <SelectTrigger size="sm" className="w-64">
                  <SelectValue placeholder="Small select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Default</p>
              <Select>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Default select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Section>

        <Section title="States" description="Select components support various states including placeholder, selected, disabled, and error states. Use appropriate states to guide user interaction.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Placeholder</p>
              <Select>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Selected</p>
              <Select defaultValue="option2">
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Disabled</p>
              <Select disabled>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Disabled select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Error state</p>
              <Select>
                <SelectTrigger className="w-64" aria-invalid>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-semantic-text-rag-danger-default">Please select an option</p>
            </div>
          </div>
        </Section>

        <Section title="With Labels" description="Always pair select components with labels for accessibility. Labels help users understand what they're selecting and provide context.">
          <div className="space-y-4">
            <div className="space-y-3">
              <Label htmlFor="country-select" className="text-sm">Country</Label>
              <Select defaultValue="fr">
                <SelectTrigger id="country-select" className="w-64">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fr">France</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="it">Italy</SelectItem>
                  <SelectItem value="es">Spain</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label htmlFor="language-select" className="text-sm">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language-select" className="w-64">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label htmlFor="timezone-select" className="text-sm">Timezone</Label>
              <Select defaultValue="utc">
                <SelectTrigger id="timezone-select" className="w-64">
                  <SelectValue placeholder="Select a timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                  <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                  <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                  <SelectItem value="cet">CET (Central European Time)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Section>

        <Section title="Grouped Items" description="Organize related options into groups with labels and separators. This helps users find options more easily in long lists.">
          <Select defaultValue="apple">
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Citrus</SelectLabel>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="lemon">Lemon</SelectItem>
                <SelectItem value="lime">Lime</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Berries</SelectLabel>
                <SelectItem value="strawberry">Strawberry</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="raspberry">Raspberry</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Other</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Section>

        <Section title="Usage Examples" description="Select components integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Form field */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Contact form</TypographyH4>
              <div className="space-y-3">
                <Label htmlFor="form-country" className="text-sm">Country</Label>
                <Select>
                  <SelectTrigger id="form-country">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Filter */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Filter by status</TypographyH4>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Settings */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Settings</TypographyH4>
              <div className="space-y-3">
                <Label htmlFor="settings-theme" className="text-sm">Theme</Label>
                <Select defaultValue="system">
                  <SelectTrigger id="settings-theme">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label htmlFor="settings-language" className="text-sm">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="settings-language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Data table filter */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Data table filter</TypographyH4>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger size="sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="recent">
                  <SelectTrigger size="sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Recent</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="alphabetical">Alphabetical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Grouped options */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Grouped options</TypographyH4>
              <Select defaultValue="apple">
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Citrus</SelectLabel>
                    <SelectItem value="orange">Orange</SelectItem>
                    <SelectItem value="lemon">Lemon</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Berries</SelectLabel>
                    <SelectItem value="strawberry">Strawberry</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Other</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Error state */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Form validation</TypographyH4>
              <div className="space-y-3">
                <Label htmlFor="error-select" className="text-sm">Required field</Label>
                <Select>
                  <SelectTrigger id="error-select" aria-invalid>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-semantic-text-rag-danger-default">This field is required</p>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  textarea: {
    title: "Textarea",
    description: "A multi-line text input component for longer content. Perfect for comments, descriptions, and messages that require more space than a single-line input.",
    body: (
      <>
        <Section title="Overview" description="Textarea components provide a multi-line text input for longer content. They automatically resize based on content and support all standard form states.">
          <div className="space-y-3">
            <Label htmlFor="overview-textarea" className="text-sm">Message</Label>
            <Textarea
              id="overview-textarea"
              placeholder="Enter your message here..."
              rows={4}
            />
          </div>
        </Section>

        <Section title="Basic Usage" description="Simple textarea components with placeholder text. Always pair textareas with labels for accessibility.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With placeholder</p>
              <Textarea placeholder="Enter your message..." rows={4} />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With label</p>
              <div className="space-y-3">
                <Label htmlFor="basic-textarea" className="text-sm">Description</Label>
                <Textarea
                  id="basic-textarea"
                  placeholder="Enter a description..."
                  rows={4}
                />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With default value</p>
              <Textarea
                defaultValue="This is a pre-filled textarea with some content."
                rows={4}
              />
            </div>
          </div>
        </Section>

        <Section title="Sizes" description="Textareas automatically adjust their height based on content. You can control the initial height with the rows attribute.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Small (3 rows)</p>
              <Textarea placeholder="Short message..." rows={3} />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Default (4 rows)</p>
              <Textarea placeholder="Standard message..." rows={4} />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Large (6 rows)</p>
              <Textarea placeholder="Long message..." rows={6} />
            </div>
          </div>
        </Section>

        <Section title="States" description="Textareas support various states including placeholder, filled, disabled, and error states. Use appropriate states to guide user interaction.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Placeholder</p>
              <Textarea placeholder="Enter your message..." rows={4} />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Filled</p>
              <Textarea
                defaultValue="This textarea contains some content. Users can edit this text to provide their input."
                rows={4}
              />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Disabled</p>
              <Textarea
                placeholder="Disabled textarea"
                rows={4}
                disabled
              />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Disabled with content</p>
              <Textarea
                defaultValue="This textarea is disabled and contains content."
                rows={4}
                disabled
              />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Error state</p>
              <Textarea
                placeholder="Enter your message..."
                rows={4}
                aria-invalid
              />
              <p className="text-xs text-semantic-text-rag-danger-default">Please enter a valid message</p>
            </div>
          </div>
        </Section>

        <Section title="With Labels" description="Always pair textarea components with labels for accessibility. Labels help users understand what content is expected.">
          <div className="space-y-4">
            <div className="space-y-3">
              <Label htmlFor="label-textarea-1" className="text-sm">Comments</Label>
              <Textarea
                id="label-textarea-1"
                placeholder="Add your comments here..."
                rows={4}
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="label-textarea-2" className="text-sm">Description</Label>
              <Textarea
                id="label-textarea-2"
                placeholder="Provide a detailed description..."
                rows={5}
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="label-textarea-3" className="text-sm">Notes</Label>
              <Textarea
                id="label-textarea-3"
                placeholder="Add any additional notes..."
                rows={3}
              />
            </div>
          </div>
        </Section>

        <Section title="With Field Component" description="Textareas work seamlessly with the Field component, providing consistent spacing and error handling.">
          <div className="space-y-4">
            <Field>
              <FieldLabel>Message</FieldLabel>
              <FieldContent>
                <Textarea placeholder="Enter your message..." rows={4} />
              </FieldContent>
              <FieldDescription>Please provide a detailed message.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel>Feedback</FieldLabel>
              <FieldContent>
                <Textarea placeholder="Share your feedback..." rows={4} aria-invalid />
              </FieldContent>
              <FieldError>This field is required</FieldError>
            </Field>
          </div>
        </Section>

        <Section title="Usage Examples" description="Textareas integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Contact form */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Contact form</TypographyH4>
              <div className="space-y-3">
                <Label htmlFor="contact-message" className="text-sm">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Enter your message..."
                  rows={4}
                />
              </div>
            </div>

            {/* Feedback form */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Feedback</TypographyH4>
              <Field>
                <FieldLabel>Your feedback</FieldLabel>
                <FieldContent>
                  <Textarea
                    placeholder="Tell us what you think..."
                    rows={5}
                  />
                </FieldContent>
                <FieldDescription>Help us improve by sharing your thoughts.</FieldDescription>
              </Field>
            </div>

            {/* Comment section */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Add comment</TypographyH4>
              <div className="space-y-3">
                <Textarea
                  placeholder="Write a comment..."
                  rows={3}
                />
                <div className="flex justify-end">
                  <Button size="sm">Post comment</Button>
                </div>
              </div>
            </div>

            {/* Description editor */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Product description</TypographyH4>
              <Field>
                <FieldLabel>Description</FieldLabel>
                <FieldContent>
                  <Textarea
                    placeholder="Enter product description..."
                    rows={6}
                  />
                </FieldContent>
                <FieldDescription>Provide a detailed description of the product.</FieldDescription>
              </Field>
            </div>

            {/* Error state */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Form validation</TypographyH4>
              <Field>
                <FieldLabel>Required field</FieldLabel>
                <FieldContent>
                  <Textarea
                    placeholder="Enter your message..."
                    rows={4}
                    aria-invalid
                  />
                </FieldContent>
                <FieldError>This field is required</FieldError>
              </Field>
            </div>

            {/* Notes section */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Additional notes</TypographyH4>
              <div className="space-y-3">
                <Label htmlFor="notes-textarea" className="text-sm">Notes</Label>
                <Textarea
                  id="notes-textarea"
                  placeholder="Add any additional notes..."
                  rows={4}
                />
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  slider: {
    title: "Slider",
    description: "An interactive control for selecting a value or range of values by dragging. Perfect for volume controls, filters, and any numeric input where precise values aren't critical.",
    body: (
      <>
        <Section title="Overview" description="Slider components allow users to select a value or range by dragging a thumb along a track. They provide visual feedback and are ideal for continuous numeric inputs.">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span>Volume</span>
              <span className="text-muted-foreground">50%</span>
            </div>
            <Slider defaultValue={[50]} max={100} />
          </div>
        </Section>

        <Section title="Basic Usage" description="Simple slider controls with default values. Sliders can be controlled or uncontrolled, and support custom min/max ranges.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Default (0-100)</p>
              <Slider defaultValue={[50]} />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With value display</p>
              <SliderDemo />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Custom range (0-200)</p>
              <Slider defaultValue={[100]} max={200} />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With step (step: 10)</p>
              <Slider defaultValue={[30]} step={10} />
            </div>
          </div>
        </Section>

        <Section title="States" description="Sliders support various states including default, disabled, and controlled states. Use appropriate states to guide user interaction.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Default</p>
              <Slider defaultValue={[50]} />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Disabled</p>
              <Slider defaultValue={[50]} disabled />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Controlled</p>
              <SliderControlledDemo />
            </div>
          </div>
        </Section>

        <Section title="Range Sliders" description="Sliders can support multiple thumbs for selecting ranges. Perfect for price filters, date ranges, or any dual-value selection.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Price range</p>
              <div className="space-y-3">
                <Slider defaultValue={[25, 75]} max={100} />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>$0</span>
                  <span>$100</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With labels</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Range</span>
                  <span className="text-muted-foreground">25% - 75%</span>
                </div>
                <Slider defaultValue={[25, 75]} max={100} />
              </div>
            </div>
          </div>
        </Section>

        <Section title="With Labels" description="Always provide context for sliders with labels and value displays. This helps users understand what they're adjusting and the current value.">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <Label>Volume</Label>
                <span className="text-muted-foreground">65%</span>
              </div>
              <Slider defaultValue={[65]} max={100} />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <Label>Brightness</Label>
                <span className="text-muted-foreground">80%</span>
              </div>
              <Slider defaultValue={[80]} max={100} />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <Label>Opacity</Label>
                <span className="text-muted-foreground">45%</span>
              </div>
              <Slider defaultValue={[45]} max={100} />
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Sliders integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Volume control */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Volume control</TypographyH4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <MaterialSymbol name="volume_up" size={16} />
                    <span>Volume</span>
                  </div>
                  <span className="text-muted-foreground">35%</span>
                </div>
                <Slider defaultValue={[35]} max={100} step={5} />
              </div>
            </div>

            {/* Price filter */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Price filter</TypographyH4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Price range</span>
                  <span className="text-muted-foreground">$25 - $75</span>
                </div>
                <Slider defaultValue={[25, 75]} max={100} />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>$0</span>
                  <span>$100</span>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Display settings</TypographyH4>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <Label>Brightness</Label>
                    <span className="text-muted-foreground">80%</span>
                  </div>
                  <Slider defaultValue={[80]} max={100} />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <Label>Contrast</Label>
                    <span className="text-muted-foreground">60%</span>
                  </div>
                  <Slider defaultValue={[60]} max={100} />
                </div>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Video progress</TypographyH4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>00:45</span>
                  <span className="text-muted-foreground">03:20</span>
                </div>
                <Slider defaultValue={[45]} max={200} />
              </div>
            </div>

            {/* Rating filter */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Rating filter</TypographyH4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Minimum rating</span>
                  <span className="text-muted-foreground">3.5</span>
                </div>
                <Slider defaultValue={[35]} max={50} step={5} />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>0</span>
                  <span>5</span>
                </div>
              </div>
            </div>

            {/* Opacity control */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Layer opacity</TypographyH4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <Label>Opacity</Label>
                  <span className="text-muted-foreground">45%</span>
                </div>
                <Slider defaultValue={[45]} max={100} />
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  progress: {
    title: "Progress",
    description: "A visual indicator showing the completion status of a task or process. Perfect for file uploads, form completion, and any operation that takes time.",
    body: (
      <>
        <Section title="Overview" description="Progress components provide visual feedback about the completion status of a task. They display a percentage-based indicator that fills from left to right.">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Upload progress</span>
              <span className="text-muted-foreground">45%</span>
            </div>
            <Progress value={45} />
          </div>
        </Section>

        <Section title="Basic Usage" description="Simple progress bars with different values. Progress bars range from 0 to 100 and automatically animate when the value changes.">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">25%</p>
              <Progress value={25} />
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">50%</p>
              <Progress value={50} />
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">75%</p>
              <Progress value={75} />
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">100%</p>
              <Progress value={100} />
            </div>
          </div>
        </Section>

        <Section title="States" description="Progress bars support different states including loading, completed, and indeterminate states. Use appropriate states to communicate task status.">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">In progress (30%)</p>
              <Progress value={30} />
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Almost complete (90%)</p>
              <Progress value={90} />
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Completed (100%)</p>
              <Progress value={100} />
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Not started (0%)</p>
              <Progress value={0} />
            </div>
          </div>
        </Section>

        <Section title="With Labels" description="Always provide context for progress bars with labels and percentage displays. This helps users understand what task is being tracked and how much is completed.">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>File upload</span>
                <span className="text-muted-foreground">62%</span>
              </div>
              <Progress value={62} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Processing files</span>
                <span className="text-muted-foreground">45%</span>
              </div>
              <Progress value={45} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Installation</span>
                <span className="text-muted-foreground">78%</span>
              </div>
              <Progress value={78} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Form completion</span>
                <span className="text-muted-foreground">3 of 5 steps</span>
              </div>
              <Progress value={60} />
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Progress bars integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* File upload */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">File upload</TypographyH4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>document.pdf</span>
                  <span className="text-muted-foreground">62%</span>
                </div>
                <Progress value={62} />
              </div>
            </div>

            {/* Form completion */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Form completion</TypographyH4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span className="text-muted-foreground">3 of 5 steps</span>
                </div>
                <Progress value={60} />
              </div>
            </div>

            {/* Installation */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Installation</TypographyH4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Installing updates</span>
                  <span className="text-muted-foreground">78%</span>
                </div>
                <Progress value={78} />
              </div>
            </div>

            {/* Processing */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Processing</TypographyH4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Processing files</span>
                  <span className="text-muted-foreground">45%</span>
                </div>
                <Progress value={45} />
              </div>
            </div>

            {/* Multiple uploads */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Multiple uploads</TypographyH4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>image1.jpg</span>
                    <span className="text-muted-foreground">100%</span>
                  </div>
                  <Progress value={100} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>image2.jpg</span>
                    <span className="text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>image3.jpg</span>
                    <span className="text-muted-foreground">30%</span>
                  </div>
                  <Progress value={30} />
                </div>
              </div>
            </div>

            {/* Profile completion */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Profile completion</TypographyH4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Complete your profile</span>
                  <span className="text-muted-foreground">80%</span>
                </div>
                <Progress value={80} />
                <p className="text-xs text-muted-foreground">Add a profile picture to complete your profile</p>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  alert: {
    title: "Alert",
    description: "A component for displaying important messages and notifications to users. Perfect for success messages, warnings, errors, and informational updates.",
    body: (
      <>
        <Section title="Overview" description="Alert components provide contextual feedback about important information, actions, or system status. They use semantic variants to communicate different message types.">
          <Alert>
            <MaterialSymbol name="info" size={16} weight={300} />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational alert message. Use alerts to communicate important information to users.
            </AlertDescription>
          </Alert>
        </Section>

        <Section title="Basic Usage" description="Simple alert components with titles and descriptions. Alerts can include icons to enhance visual communication.">
          <div className="space-y-4">
            <Alert>
              <MaterialSymbol name="check_circle" size={16} weight={300} />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>
            <Alert>
              <MaterialSymbol name="info" size={16} weight={300} />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                A new feature is now available. Check it out in the settings.
              </AlertDescription>
            </Alert>
            <Alert>
              <MaterialSymbol name="schedule" size={16} weight={300} />
              <AlertTitle>Deployment queued</AlertTitle>
              <AlertDescription>
                Your deployment has been queued and will start shortly.
              </AlertDescription>
            </Alert>
          </div>
        </Section>

        <Section title="Variants" description="Alert components support different variants to communicate different message types. Use the appropriate variant to match the message severity.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Default</p>
              <Alert>
                <MaterialSymbol name="info" size={16} weight={300} />
                <AlertTitle>Default alert</AlertTitle>
                <AlertDescription>
                  This is a default alert message for general information.
                </AlertDescription>
              </Alert>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Destructive</p>
              <Alert variant="destructive">
                <MaterialSymbol name="error" size={16} weight={300} />
                <AlertTitle>Error occurred</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please try again or contact support.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </Section>

        <Section title="With Icons" description="Icons enhance alert messages by providing visual context. Use Material Symbols icons that match the alert type and message.">
          <div className="space-y-4">
            <Alert>
              <MaterialSymbol name="check_circle" size={16} weight={300} />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Operation completed successfully.
              </AlertDescription>
            </Alert>
            <Alert>
              <MaterialSymbol name="info" size={16} weight={300} />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                Here's some important information you should know.
              </AlertDescription>
            </Alert>
            <Alert>
              <MaterialSymbol name="warning" size={16} weight={300} />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Please review this action before proceeding.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <MaterialSymbol name="error" size={16} weight={300} />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                An error occurred while processing your request.
              </AlertDescription>
            </Alert>
          </div>
        </Section>

        <Section title="Title Only" description="Alerts can display just a title without a description for concise messages.">
          <div className="space-y-4">
            <Alert>
              <MaterialSymbol name="check_circle" size={16} weight={300} />
              <AlertTitle>Changes saved</AlertTitle>
            </Alert>
            <Alert>
              <MaterialSymbol name="info" size={16} weight={300} />
              <AlertTitle>New update available</AlertTitle>
            </Alert>
            <Alert variant="destructive">
              <MaterialSymbol name="error" size={16} weight={300} />
              <AlertTitle>Failed to save</AlertTitle>
            </Alert>
          </div>
        </Section>

        <Section title="Usage Examples" description="Alerts integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Success message */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Success notification</TypographyH4>
              <Alert>
                <MaterialSymbol name="check_circle" size={16} weight={300} />
                <AlertTitle>Profile updated</AlertTitle>
                <AlertDescription>
                  Your profile information has been successfully updated.
                </AlertDescription>
              </Alert>
            </div>

            {/* Error message */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Error notification</TypographyH4>
              <Alert variant="destructive">
                <MaterialSymbol name="error" size={16} weight={300} />
                <AlertTitle>Upload failed</AlertTitle>
                <AlertDescription>
                  The file could not be uploaded. Please check your connection and try again.
                </AlertDescription>
              </Alert>
            </div>

            {/* Information message */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Information alert</TypographyH4>
              <Alert>
                <MaterialSymbol name="info" size={16} weight={300} />
                <AlertTitle>Maintenance scheduled</AlertTitle>
                <AlertDescription>
                  System maintenance will occur on Friday, March 15th from 2:00 AM to 4:00 AM EST.
                </AlertDescription>
              </Alert>
            </div>

            {/* Warning message */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Warning alert</TypographyH4>
              <Alert>
                <MaterialSymbol name="warning" size={16} weight={300} />
                <AlertTitle>Action required</AlertTitle>
                <AlertDescription>
                  Please verify your email address to continue using this feature.
                </AlertDescription>
              </Alert>
            </div>

            {/* Deployment status */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Deployment status</TypographyH4>
              <Alert>
                <MaterialSymbol name="schedule" size={16} weight={300} />
                <AlertTitle>Deployment queued</AlertTitle>
                <AlertDescription>
                  Your deployment has been queued and will start in approximately 5 minutes.
                </AlertDescription>
              </Alert>
            </div>

            {/* System update */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">System update</TypographyH4>
              <Alert>
                <MaterialSymbol name="system_update" size={16} weight={300} />
                <AlertTitle>Update available</AlertTitle>
                <AlertDescription>
                  A new version is available. Restart the application to install updates.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  card: {
    title: "Card",
    description: "A flexible container component for grouping related content. Perfect for displaying information, forms, and interactive content in a structured layout.",
    body: (
      <>
        <Section title="Overview" description="Card components provide a container for grouping related content. They include optional header, content, and footer sections for flexible layouts.">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>This is a card description that provides context.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Card content goes here. You can add any content you need.</p>
            </CardContent>
          </Card>
        </Section>

        <Section title="Basic Usage" description="Simple card components with header, content, and optional footer sections.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Basic card</p>
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>A simple card with header and content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">This is the card content area.</p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With footer</p>
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Card with Footer</CardTitle>
                  <CardDescription>Cards can include footer sections</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Main content area</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Action</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Content only</p>
              <Card className="max-w-md">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">Cards can contain just content without headers or footers.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        <Section title="With Actions" description="Cards can include action buttons in the header using CardAction. This is useful for settings, menus, or other interactive elements.">
          <div className="space-y-4">
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your preferences</CardDescription>
                <CardAction>
                  <Button variant="ghost" size="icon">
                    <MaterialSymbol name="more_vert" size={16} weight={300} />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Card content with action button in header</p>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section title="With Separators" description="Use Separator components to visually divide card sections and organize content.">
          <div className="space-y-4">
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Card with Separators</CardTitle>
                <CardDescription>Separators help organize content</CardDescription>
              </CardHeader>
              <Separator />
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">Content separated from header</p>
              </CardContent>
              <Separator />
              <CardFooter>
                <Button variant="outline" className="w-full">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </Section>

        <Section title="Usage Examples" description="Cards integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Project card */}
            <Card className="break-inside-avoid">
              <CardHeader>
                <CardTitle>Project Settings</CardTitle>
                <CardDescription>Manage your project configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-name" className="text-sm">Project name</Label>
                  <Input id="project-name" placeholder="My project" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-description" className="text-sm">Description</Label>
                  <Textarea id="project-description" placeholder="Project description" rows={3} />
                </div>
              </CardContent>
              <CardFooter className="flex items-center gap-2 justify-end">
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm">Save</Button>
              </CardFooter>
            </Card>

            {/* User profile card */}
            <Card className="break-inside-avoid">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>John Doe</CardTitle>
                    <CardDescription>Software Engineer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MaterialSymbol name="email" size={16} weight={300} className="text-semantic-icon-subdued" />
                    <span className="text-muted-foreground">john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MaterialSymbol name="location_on" size={16} weight={300} className="text-semantic-icon-subdued" />
                    <span className="text-muted-foreground">San Francisco, CA</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">View Profile</Button>
              </CardFooter>
            </Card>

            {/* Stats card */}
            <Card className="break-inside-avoid">
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Total views</span>
                    <span className="font-normal">12,345</span>
                  </div>
                  <Progress value={75} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Engagement</span>
                    <span className="font-normal">8,901</span>
                  </div>
                  <Progress value={60} />
                </div>
              </CardContent>
            </Card>

            {/* Notification card */}
            <Card className="break-inside-avoid">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardAction>
                  <Button variant="ghost" size="icon">
                    <MaterialSymbol name="more_vert" size={16} weight={300} />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Avatar size="sm">
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-normal">New comment</p>
                    <p className="text-xs text-muted-foreground">Someone commented on your post</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Avatar size="sm">
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-normal">Mention</p>
                    <p className="text-xs text-muted-foreground">You were mentioned in a discussion</p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature card */}
            <Card className="break-inside-avoid">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MaterialSymbol name="star" size={20} weight={300} className="text-semantic-icon-interaction-default" />
                  <CardTitle>Premium Feature</CardTitle>
                </div>
                <CardDescription>Unlock advanced capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <MaterialSymbol name="check" size={16} weight={300} />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MaterialSymbol name="check" size={16} weight={300} />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MaterialSymbol name="check" size={16} weight={300} />
                    <span>Custom integrations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Upgrade</Button>
              </CardFooter>
            </Card>

            {/* Form card */}
            <Card className="break-inside-avoid">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Send us a message</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-sm">Name</Label>
                  <Input id="contact-name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-sm">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-sm">Message</Label>
                  <Textarea id="contact-message" placeholder="Your message" rows={4} />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Send Message</Button>
              </CardFooter>
            </Card>
          </div>
        </Section>
      </>
    ),
  },
  tabs: {
    title: "Tabs",
    description: "A set of layered sections of content that are displayed one at a time. Perfect for organizing related content and reducing visual clutter.",
    body: (
      <>
        <Section title="Overview" description="Tabs allow users to switch between different views or sections of content. They provide a clean way to organize related information without overwhelming the interface.">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <p className="text-sm text-muted-foreground">Overview content goes here.</p>
            </TabsContent>
            <TabsContent value="settings" className="mt-4">
              <p className="text-sm text-muted-foreground">Settings content goes here.</p>
            </TabsContent>
            <TabsContent value="billing" className="mt-4">
              <p className="text-sm text-muted-foreground">Billing content goes here.</p>
            </TabsContent>
          </Tabs>
        </Section>

        <Section title="Basic Usage" description="Simple tab components with multiple tabs and content panels. Use descriptive labels for each tab to help users understand the content.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Simple tabs</p>
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4">
                  <p className="text-sm text-muted-foreground">Content for tab 1</p>
                </TabsContent>
                <TabsContent value="tab2" className="mt-4">
                  <p className="text-sm text-muted-foreground">Content for tab 2</p>
                </TabsContent>
                <TabsContent value="tab3" className="mt-4">
                  <p className="text-sm text-muted-foreground">Content for tab 3</p>
                </TabsContent>
              </Tabs>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With descriptive labels</p>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <p className="text-sm text-muted-foreground">Overview content with detailed information.</p>
                </TabsContent>
                <TabsContent value="analytics" className="mt-4">
                  <p className="text-sm text-muted-foreground">Analytics data and charts.</p>
                </TabsContent>
                <TabsContent value="reports" className="mt-4">
                  <p className="text-sm text-muted-foreground">Generated reports and exports.</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </Section>

        <Section title="States" description="Tabs support different states including active, inactive, and disabled. Use disabled state when a tab is temporarily unavailable.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Active and inactive</p>
              <Tabs defaultValue="active">
                <TabsList>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="inactive">Inactive</TabsTrigger>
                </TabsList>
                <TabsContent value="active" className="mt-4">
                  <p className="text-sm text-muted-foreground">This is the active tab content.</p>
                </TabsContent>
                <TabsContent value="inactive" className="mt-4">
                  <p className="text-sm text-muted-foreground">This is the inactive tab content.</p>
                </TabsContent>
              </Tabs>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With disabled tab</p>
              <Tabs defaultValue="available">
                <TabsList>
                  <TabsTrigger value="available">Available</TabsTrigger>
                  <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
                  <TabsTrigger value="another">Another</TabsTrigger>
                </TabsList>
                <TabsContent value="available" className="mt-4">
                  <p className="text-sm text-muted-foreground">Available tab content.</p>
                </TabsContent>
                <TabsContent value="disabled" className="mt-4">
                  <p className="text-sm text-muted-foreground">This tab is disabled.</p>
                </TabsContent>
                <TabsContent value="another" className="mt-4">
                  <p className="text-sm text-muted-foreground">Another tab content.</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </Section>

        <Section title="With Icons" description="Icons can enhance tab labels by providing visual context. Use Material Symbols icons that match the tab's purpose.">
          <div className="space-y-4">
            <Tabs defaultValue="dashboard">
              <TabsList>
                <TabsTrigger value="dashboard">
                  <MaterialSymbol name="dashboard" size={16} weight={300} />
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="analytics">
                  <MaterialSymbol name="analytics" size={16} weight={300} />
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <MaterialSymbol name="settings" size={16} weight={300} />
                  Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent value="dashboard" className="mt-4">
                <p className="text-sm text-muted-foreground">Dashboard overview with key metrics.</p>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <p className="text-sm text-muted-foreground">Detailed analytics and insights.</p>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <p className="text-sm text-muted-foreground">Application settings and preferences.</p>
              </TabsContent>
            </Tabs>
          </div>
        </Section>

        <Section title="Usage Examples" description="Tabs integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Settings tabs */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Settings</TypographyH4>
              <Tabs defaultValue="general">
                <TabsList className="w-full">
                  <TabsTrigger value="general" className="flex-1">General</TabsTrigger>
                  <TabsTrigger value="security" className="flex-1">Security</TabsTrigger>
                  <TabsTrigger value="notifications" className="flex-1">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="mt-4">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-sm">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                </TabsContent>
                <TabsContent value="security" className="mt-4">
                  <div className="space-y-3">
                    <Label htmlFor="password" className="text-sm">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" />
                  </div>
                </TabsContent>
                <TabsContent value="notifications" className="mt-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-notif" className="text-sm">Email notifications</Label>
                      <Switch id="email-notif" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Product tabs */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Product details</TypographyH4>
              <Tabs defaultValue="description">
                <TabsList>
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="specs">Specs</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                  <p className="text-sm text-muted-foreground">Product description and details.</p>
                </TabsContent>
                <TabsContent value="specs" className="mt-4">
                  <p className="text-sm text-muted-foreground">Technical specifications.</p>
                </TabsContent>
                <TabsContent value="reviews" className="mt-4">
                  <p className="text-sm text-muted-foreground">Customer reviews and ratings.</p>
                </TabsContent>
              </Tabs>
            </div>

            {/* Dashboard tabs */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Dashboard</TypographyH4>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">
                    <MaterialSymbol name="dashboard" size={16} weight={300} />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="analytics">
                    <MaterialSymbol name="analytics" size={16} weight={300} />
                    Analytics
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Total users</span>
                      <span className="font-normal">1,234</span>
                    </div>
                    <Progress value={65} />
                  </div>
                </TabsContent>
                <TabsContent value="analytics" className="mt-4">
                  <p className="text-sm text-muted-foreground">Analytics charts and data.</p>
                </TabsContent>
              </Tabs>
            </div>

            {/* Account tabs */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Account</TypographyH4>
              <Tabs defaultValue="profile">
                <TabsList>
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="billing">Billing</TabsTrigger>
                  <TabsTrigger value="team" disabled>Team</TabsTrigger>
                </TabsList>
                <TabsContent value="profile" className="mt-4">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </TabsContent>
                <TabsContent value="billing" className="mt-4">
                  <p className="text-sm text-muted-foreground">Billing information and payment methods.</p>
                </TabsContent>
                <TabsContent value="team" className="mt-4">
                  <p className="text-sm text-muted-foreground">Team management (coming soon).</p>
                </TabsContent>
              </Tabs>
            </div>

            {/* Content tabs */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Content editor</TypographyH4>
              <Tabs defaultValue="edit">
                <TabsList>
                  <TabsTrigger value="edit">Edit</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="edit" className="mt-4">
                  <Textarea placeholder="Start editing..." rows={4} />
                </TabsContent>
                <TabsContent value="preview" className="mt-4">
                  <p className="text-sm text-muted-foreground">Preview of your content.</p>
                </TabsContent>
                <TabsContent value="history" className="mt-4">
                  <p className="text-sm text-muted-foreground">Version history and changes.</p>
                </TabsContent>
              </Tabs>
            </div>

            {/* Navigation tabs */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Navigation</TypographyH4>
              <Tabs defaultValue="home">
                <TabsList>
                  <TabsTrigger value="home">
                    <MaterialSymbol name="home" size={16} weight={300} />
                    Home
                  </TabsTrigger>
                  <TabsTrigger value="explore">
                    <MaterialSymbol name="explore" size={16} weight={300} />
                    Explore
                  </TabsTrigger>
                  <TabsTrigger value="library">
                    <MaterialSymbol name="library_books" size={16} weight={300} />
                    Library
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="home" className="mt-4">
                  <p className="text-sm text-muted-foreground">Home feed content.</p>
                </TabsContent>
                <TabsContent value="explore" className="mt-4">
                  <p className="text-sm text-muted-foreground">Discover new content.</p>
                </TabsContent>
                <TabsContent value="library" className="mt-4">
                  <p className="text-sm text-muted-foreground">Your saved items.</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  accordion: {
    title: "Accordion",
    description: "A vertically stacked set of interactive headings that each reveal a section of content. Perfect for FAQs, collapsible content, and organizing information hierarchically.",
    body: (
      <>
        <Section title="Overview" description="Accordion components allow users to expand and collapse sections of content. They help organize information while keeping the interface clean and scannable.">
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="accordion-overview-1">
              <AccordionTrigger>What is an accordion?</AccordionTrigger>
              <AccordionContent>
                An accordion is a vertically stacked set of interactive headings that each reveal a section of content.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="accordion-overview-2">
              <AccordionTrigger>How does it work?</AccordionTrigger>
              <AccordionContent>
                Users can click on a heading to expand or collapse the associated content section.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        <Section title="Basic Usage" description="Simple accordion components with multiple items. Use descriptive headings that clearly indicate what content will be revealed.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Single item</p>
              <Accordion type="single" collapsible className="w-full max-w-md">
                <AccordionItem value="accordion-basic-1">
                  <AccordionTrigger>Section 1</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Content for section 1 goes here.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Multiple items</p>
              <Accordion type="single" collapsible className="w-full max-w-md">
                <AccordionItem value="accordion-basic-multi-1">
                  <AccordionTrigger>First section</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Content for the first section.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-basic-multi-2">
                  <AccordionTrigger>Second section</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Content for the second section.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-basic-multi-3">
                  <AccordionTrigger>Third section</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Content for the third section.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Section>

        <Section title="Types" description="Accordions support single and multiple selection modes. Single mode allows only one item to be open at a time, while multiple mode allows several items to be open simultaneously.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Single (collapsible)</p>
              <Accordion type="single" collapsible className="w-full max-w-md">
                <AccordionItem value="accordion-types-single-1">
                  <AccordionTrigger>Item 1</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Only one item can be open at a time.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-types-single-2">
                  <AccordionTrigger>Item 2</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Opening this will close the other.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Multiple</p>
              <Accordion type="multiple" className="w-full max-w-md">
                <AccordionItem value="accordion-types-multiple-1">
                  <AccordionTrigger>Item 1</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Multiple items can be open simultaneously.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-types-multiple-2">
                  <AccordionTrigger>Item 2</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">This can stay open with others.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-types-multiple-3">
                  <AccordionTrigger>Item 3</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">All items can be expanded at once.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Section>

        <Section title="With Icons" description="Icons can enhance accordion triggers by providing visual context. Use Material Symbols icons that match the content type.">
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="accordion-icons-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <MaterialSymbol name="info" size={16} weight={300} />
                  <span>Information</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">Content with an icon in the trigger.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="accordion-icons-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <MaterialSymbol name="settings" size={16} weight={300} />
                  <span>Settings</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">Settings and configuration options.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="accordion-icons-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <MaterialSymbol name="help" size={16} weight={300} />
                  <span>Help</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">Help and support information.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        <Section title="Usage Examples" description="Accordions integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* FAQ */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Frequently asked questions</TypographyH4>
              <Accordion type="single" collapsible>
                <AccordionItem value="accordion-example-faq-1">
                  <AccordionTrigger>How do I get started?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Create an account and follow the onboarding process to get started.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-example-faq-2">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">We accept credit cards, PayPal, and bank transfers.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-example-faq-3">
                  <AccordionTrigger>Can I cancel my subscription?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Yes, you can cancel your subscription at any time from your account settings.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Settings */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Settings</TypographyH4>
              <Accordion type="multiple">
                <AccordionItem value="accordion-example-settings-general">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <MaterialSymbol name="settings" size={16} weight={300} />
                      <span>General</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <Label htmlFor="accordion-settings-name" className="text-sm">Name</Label>
                      <Input id="accordion-settings-name" placeholder="Your name" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-example-settings-notifications">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <MaterialSymbol name="notifications" size={16} weight={300} />
                      <span>Notifications</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="accordion-settings-email-notif" className="text-sm">Email notifications</Label>
                        <Switch id="accordion-settings-email-notif" />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Documentation */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Documentation</TypographyH4>
              <Accordion type="single" collapsible>
                <AccordionItem value="accordion-example-docs-getting-started">
                  <AccordionTrigger>Getting started</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Learn the basics of using our platform.</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Create an account</li>
                        <li>Complete your profile</li>
                        <li>Explore features</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-example-docs-api">
                  <AccordionTrigger>API reference</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Complete API documentation and examples.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-example-docs-troubleshooting">
                  <AccordionTrigger>Troubleshooting</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Common issues and their solutions.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Product features */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Product features</TypographyH4>
              <Accordion type="single" collapsible>
                <AccordionItem value="accordion-example-features-performance">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <MaterialSymbol name="speed" size={16} weight={300} />
                      <span>Performance</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Lightning-fast performance with optimized algorithms.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-example-features-security">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <MaterialSymbol name="security" size={16} weight={300} />
                      <span>Security</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Enterprise-grade security with end-to-end encryption.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-example-features-support">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <MaterialSymbol name="support" size={16} weight={300} />
                      <span>Support</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">24/7 customer support with dedicated account managers.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Navigation menu */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Navigation</TypographyH4>
              <Accordion type="multiple">
                <AccordionItem value="accordion-example-nav-products">
                  <AccordionTrigger>Products</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <Item>Product A</Item>
                      <Item>Product B</Item>
                      <Item>Product C</Item>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-example-nav-solutions">
                  <AccordionTrigger>Solutions</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <Item>Solution 1</Item>
                      <Item>Solution 2</Item>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Release notes */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Release notes</TypographyH4>
              <Accordion type="single" collapsible>
                <AccordionItem value="accordion-example-release-v2">
                  <AccordionTrigger>Version 2.0</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-normal">Major updates:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>New dashboard design</li>
                        <li>Improved performance</li>
                        <li>Enhanced security</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-example-release-v1">
                  <AccordionTrigger>Version 1.5</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">Bug fixes and minor improvements.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  collapsible: {
    title: "Collapsible",
    description: "An interactive component that can expand and collapse to reveal or hide content. Perfect for single sections of collapsible content, details, and progressive disclosure.",
    body: (
      <>
        <Section title="Overview" description="Collapsible components allow users to toggle the visibility of content. Unlike accordions, collapsibles work independently and can be used for single expandable sections.">
          <Collapsible className="w-full max-w-md">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span>Click to expand</span>
                <MaterialSymbol name="expand_more" size={16} weight={300} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-4 rounded-md border bg-card">
              <p className="text-sm text-muted-foreground">
                This is the collapsible content. It can contain any content you need.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </Section>

        <Section title="Basic Usage" description="Simple collapsible components with a trigger button and content. Use descriptive labels to indicate what content will be revealed.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With button trigger</p>
              <Collapsible className="w-full max-w-md">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <span>Show details</span>
                    <MaterialSymbol name="expand_more" size={16} weight={300} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 p-4 rounded-md border bg-card">
                  <p className="text-sm text-muted-foreground">Additional details and information.</p>
                </CollapsibleContent>
              </Collapsible>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">With text trigger</p>
              <Collapsible className="w-full max-w-md">
                <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-2 hover:underline">
                  <span className="text-sm font-normal">More information</span>
                  <MaterialSymbol name="expand_more" size={16} weight={300} className="text-semantic-icon-subdued" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 p-4 rounded-md border bg-card">
                  <p className="text-sm text-muted-foreground">Here's some additional information that can be expanded.</p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </Section>

        <Section title="States" description="Collapsible components support open and closed states. Use controlled state to manage the visibility programmatically.">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Closed (default)</p>
              <Collapsible className="w-full max-w-md">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <span>Click to expand</span>
                    <MaterialSymbol name="expand_more" size={16} weight={300} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 p-4 rounded-md border bg-card">
                  <p className="text-sm text-muted-foreground">This content is hidden by default.</p>
                </CollapsibleContent>
              </Collapsible>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Open (defaultOpen)</p>
              <Collapsible defaultOpen className="w-full max-w-md">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <span>Click to collapse</span>
                    <MaterialSymbol name="expand_less" size={16} weight={300} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 p-4 rounded-md border bg-card">
                  <p className="text-sm text-muted-foreground">This content is visible by default.</p>
                </CollapsibleContent>
              </Collapsible>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Controlled</p>
              <CollapsibleControlledDemo />
            </div>
          </div>
        </Section>

        <Section title="With Icons" description="Icons enhance collapsible triggers by providing visual feedback. Use Material Symbols icons that rotate or change based on the open state.">
          <div className="space-y-4">
            <Collapsible className="w-full max-w-md">
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <MaterialSymbol name="info" size={16} weight={300} />
                    <span>Information</span>
                  </div>
                  <MaterialSymbol name="expand_more" size={16} weight={300} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 p-4 rounded-md border bg-card">
                <p className="text-sm text-muted-foreground">Additional information about this topic.</p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="w-full max-w-md">
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <MaterialSymbol name="settings" size={16} weight={300} />
                    <span>Settings</span>
                  </div>
                  <MaterialSymbol name="expand_more" size={16} weight={300} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 p-4 rounded-md border bg-card">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="collapsible-setting-1" className="text-sm">Setting 1</Label>
                    <Switch id="collapsible-setting-1" />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </Section>

        <Section title="Usage Examples" description="Collapsibles integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Details section */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Product details</TypographyH4>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span>Show specifications</span>
                    <MaterialSymbol name="expand_more" size={16} weight={300} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Weight</span>
                    <span>2.5 kg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Dimensions</span>
                    <span>30 x 20 x 15 cm</span>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* FAQ item */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">FAQ item</TypographyH4>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-2 hover:underline">
                  <span className="text-sm font-normal">How do I get started?</span>
                  <MaterialSymbol name="expand_more" size={16} weight={300} className="text-semantic-icon-subdued" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <p className="text-sm text-muted-foreground">Create an account and follow the onboarding process to get started.</p>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Settings panel */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Advanced settings</TypographyH4>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <div className="flex items-center gap-2">
                      <MaterialSymbol name="tune" size={16} weight={300} />
                      <span>Advanced</span>
                    </div>
                    <MaterialSymbol name="expand_more" size={16} weight={300} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="collapsible-advanced-1" className="text-sm">Option 1</Label>
                    <Switch id="collapsible-advanced-1" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="collapsible-advanced-2" className="text-sm">Option 2</Label>
                    <Switch id="collapsible-advanced-2" />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Code example */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Code example</TypographyH4>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span>View code</span>
                    <MaterialSymbol name="expand_more" size={16} weight={300} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <pre className="p-3 rounded-md bg-muted text-xs overflow-x-auto">
                    <code>const example = "Hello, world!";</code>
                  </pre>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Filter panel */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Filters</TypographyH4>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span>More filters</span>
                    <MaterialSymbol name="expand_more" size={16} weight={300} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="collapsible-filter-1" className="text-sm">Category</Label>
                    <Select>
                      <SelectTrigger id="collapsible-filter-1" size="sm">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cat1">Category 1</SelectItem>
                        <SelectItem value="cat2">Category 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Help section */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Help</TypographyH4>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-2 hover:underline">
                  <div className="flex items-center gap-2">
                    <MaterialSymbol name="help" size={16} weight={300} className="text-semantic-icon-subdued" />
                    <span className="text-sm font-normal">Need help?</span>
                  </div>
                  <MaterialSymbol name="expand_more" size={16} weight={300} className="text-semantic-icon-subdued" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <p className="text-sm text-muted-foreground">Contact our support team for assistance.</p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  popover: {
    title: "Popover",
    description: "A floating panel that appears on top of the content, triggered by a button or other interactive element. Perfect for displaying additional information, actions, or forms without navigating away.",
    body: (
      <>
        <Section title="Overview" description="Popover components display floating content that appears above other elements. They're triggered by user interaction and can contain any content, from simple text to complex forms.">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <TypographyH4 className="text-base">Popover title</TypographyH4>
                <p className="text-sm text-muted-foreground">
                  This is a popover. It appears when you click the trigger button.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </Section>

        <Section title="Basic Usage" description="Simple popovers with different content types. Use clear triggers and concise content for best user experience.">
          <div className="flex flex-wrap gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Simple text</Button>
              </PopoverTrigger>
              <PopoverContent>
                <p className="text-sm">This is a simple text popover.</p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">With title</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <TypographyH4 className="text-base">Popover title</TypographyH4>
                  <p className="text-sm text-muted-foreground">
                    This popover has a title and description.
                  </p>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">With actions</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <TypographyH4 className="text-base">Confirm action</TypographyH4>
                    <p className="text-sm text-muted-foreground">
                      Are you sure you want to proceed?
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">Cancel</Button>
                    <Button size="sm">Confirm</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </Section>

        <Section title="Placement" description="Popovers can be positioned relative to their trigger. Choose the placement that best fits your layout and content.">
          <div className="flex flex-wrap gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Top</Button>
              </PopoverTrigger>
              <PopoverContent side="top" className="w-64">
                <p className="text-sm">Popover appears above the trigger.</p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Right</Button>
              </PopoverTrigger>
              <PopoverContent side="right" className="w-64">
                <p className="text-sm">Popover appears to the right of the trigger.</p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom" className="w-64">
                <p className="text-sm">Popover appears below the trigger.</p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Left</Button>
              </PopoverTrigger>
              <PopoverContent side="left" className="w-64">
                <p className="text-sm">Popover appears to the left of the trigger.</p>
              </PopoverContent>
            </Popover>
          </div>
        </Section>

        <Section title="With Icons" description="Icons help identify the purpose of popovers and make triggers more visually distinct.">
          <div className="flex flex-wrap gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <MaterialSymbol name="info" size={16} weight={300} />
                  Information
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MaterialSymbol name="info" size={16} weight={300} className="text-semantic-icon-interaction-default" />
                    <TypographyH4 className="text-base">Information</TypographyH4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This popover provides additional information about the action.
                  </p>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <MaterialSymbol name="settings" size={16} weight={300} />
                  Settings
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <TypographyH4 className="text-base">Settings</TypographyH4>
                    <p className="text-sm text-muted-foreground">Configure your preferences.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="popover-setting-1" className="text-sm">Option 1</Label>
                      <Switch id="popover-setting-1" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="popover-setting-2" className="text-sm">Option 2</Label>
                      <Switch id="popover-setting-2" />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <MaterialSymbol name="more_vert" size={16} weight={300} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56">
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <MaterialSymbol name="edit" size={16} weight={300} />
                    Edit
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <MaterialSymbol name="delete" size={16} weight={300} />
                    Delete
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <MaterialSymbol name="share" size={16} weight={300} />
                    Share
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </Section>

        <Section title="Usage Examples" description="Popovers integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Date picker */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Date picker</TypographyH4>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <MaterialSymbol name="calendar_today" size={16} weight={300} />
                    <span className="ml-2">Pick a date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <div className="p-4 space-y-3">
                    <div className="space-y-2">
                      <TypographyH4 className="text-base">Select date</TypographyH4>
                      <p className="text-sm text-muted-foreground">Choose a date from the calendar.</p>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-xs">
                      {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                        <div key={i} className="p-2 text-muted-foreground">{day}</div>
                      ))}
                      {Array.from({ length: 28 }, (_, i) => (
                        <Button key={i} variant="ghost" size="sm" className="h-8 w-8 p-0">
                          {i + 1}
                        </Button>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Color picker */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Color picker</TypographyH4>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <div className="w-4 h-4 rounded border bg-semantic-surface-interaction-strong" />
                    <span className="ml-2">Choose color</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="space-y-3">
                    <TypographyH4 className="text-base">Select color</TypographyH4>
                    <div className="grid grid-cols-6 gap-2">
                      {["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"].map((color) => (
                        <button
                          key={color}
                          className="w-8 h-8 rounded border-2 border-transparent hover:border-foreground transition-colors"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Filter popover */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Filter options</TypographyH4>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    <MaterialSymbol name="tune" size={16} weight={300} />
                    Filters
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <TypographyH4 className="text-base">Filter by</TypographyH4>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="popover-filter-category" className="text-sm">Category</Label>
                        <Select>
                          <SelectTrigger id="popover-filter-category" size="sm">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cat1">Category 1</SelectItem>
                            <SelectItem value="cat2">Category 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="popover-filter-status" className="text-sm">Status</Label>
                        <Select>
                          <SelectTrigger id="popover-filter-status" size="sm">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">Reset</Button>
                      <Button size="sm">Apply</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* User menu */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">User menu</TypographyH4>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <Avatar size="sm">
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="ml-2">John Doe</span>
                    <MaterialSymbol name="expand_more" size={16} weight={300} className="ml-auto" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <MaterialSymbol name="person" size={16} weight={300} />
                      Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <MaterialSymbol name="settings" size={16} weight={300} />
                      Settings
                    </Button>
                    <Separator />
                    <Button variant="ghost" className="w-full justify-start text-[var(--destructive-foreground)]" size="sm">
                      <MaterialSymbol name="logout" size={16} weight={300} />
                      Sign out
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Notification popover */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Notifications</TypographyH4>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <MaterialSymbol name="notifications" size={16} weight={300} />
                    <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">3</Badge>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <TypographyH4 className="text-base">Notifications</TypographyH4>
                      <Button variant="ghost" size="sm">Mark all read</Button>
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-2 rounded-md border bg-card hover:bg-accent/50 cursor-pointer">
                          <p className="text-sm font-normal">New notification {i}</p>
                          <p className="text-xs text-muted-foreground">2 minutes ago</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Help popover */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Help & support</TypographyH4>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <MaterialSymbol name="help" size={16} weight={300} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <TypographyH4 className="text-base">Need help?</TypographyH4>
                      <p className="text-sm text-muted-foreground">
                        Check our documentation or contact support for assistance.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start" size="sm">
                        <MaterialSymbol name="description" size={16} weight={300} />
                        Documentation
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" size="sm">
                        <MaterialSymbol name="support_agent" size={16} weight={300} />
                        Contact support
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "hover-card": {
    title: "Hover Card",
    description: "A card that appears on hover, displaying additional information or content. Perfect for showing user profiles, previews, or contextual details without requiring a click.",
    body: (
      <>
        <Section title="Overview" description="Hover Card components display floating content when users hover over a trigger element. They're ideal for showing previews, additional information, or quick details without interrupting the user's workflow.">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="underline">
                Hover over me
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <TypographyH4 className="text-base">Hover Card</TypographyH4>
                <p className="text-sm text-muted-foreground">
                  This card appears when you hover over the trigger element.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Section>

        <Section title="Basic Usage" description="Simple hover cards with different content types. Use clear triggers and concise content for best user experience.">
          <div className="flex flex-wrap gap-3">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="underline">
                  Simple text
                </Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-sm">This is a simple text hover card.</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="underline">
                  With title
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <TypographyH4 className="text-base">Hover Card title</TypographyH4>
                  <p className="text-sm text-muted-foreground">
                    This hover card has a title and description.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="text-sm text-muted-foreground underline cursor-pointer">
                  Hover for details
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <TypographyH4 className="text-base">Additional details</TypographyH4>
                  <p className="text-sm text-muted-foreground">
                    More information appears on hover.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </Section>

        <Section title="Placement" description="Hover cards can be positioned relative to their trigger. Choose the placement that best fits your layout and content.">
          <div className="flex flex-wrap gap-3">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="underline">Top</Button>
              </HoverCardTrigger>
              <HoverCardContent side="top" className="w-64">
                <p className="text-sm">Hover card appears above the trigger.</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="underline">Right</Button>
              </HoverCardTrigger>
              <HoverCardContent side="right" className="w-64">
                <p className="text-sm">Hover card appears to the right of the trigger.</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="underline">Bottom</Button>
              </HoverCardTrigger>
              <HoverCardContent side="bottom" className="w-64">
                <p className="text-sm">Hover card appears below the trigger.</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="underline">Left</Button>
              </HoverCardTrigger>
              <HoverCardContent side="left" className="w-64">
                <p className="text-sm">Hover card appears to the left of the trigger.</p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </Section>

        <Section title="With Icons" description="Icons help identify the purpose of hover cards and make triggers more visually distinct.">
          <div className="flex flex-wrap gap-3">
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="inline-flex items-center gap-2 text-sm text-foreground hover:text-semantic-text-interaction-bright cursor-pointer transition-colors">
                  <MaterialSymbol name="info" size={16} weight={300} className="text-semantic-icon-interaction-default hover:text-semantic-icon-interaction-bright" />
                  <span className="underline decoration-semantic-text-interaction-bright underline-offset-4">Information</span>
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MaterialSymbol name="info" size={16} weight={300} className="text-semantic-icon-interaction-default" />
                    <TypographyH4 className="text-base">Information</TypographyH4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This hover card provides additional information about the element.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="inline-flex items-center gap-2 text-sm text-foreground hover:text-semantic-text-interaction-bright cursor-pointer transition-colors">
                  <MaterialSymbol name="help" size={16} weight={300} className="text-semantic-icon-interaction-default hover:text-semantic-icon-interaction-bright" />
                  <span className="underline decoration-semantic-text-interaction-bright underline-offset-4">Help</span>
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MaterialSymbol name="help" size={16} weight={300} className="text-semantic-icon-interaction-default" />
                    <TypographyH4 className="text-base">Help & Support</TypographyH4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Hover over elements to see helpful tooltips and explanations.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </Section>

        <Section title="Usage Examples" description="Hover cards integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* User profile */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">User profile</TypographyH4>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="underline">
                    @johndoe
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar size="sm">
                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" alt="John Doe" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <TypographyH4 className="text-base">John Doe</TypographyH4>
                        <p className="text-xs text-muted-foreground">@johndoe</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Software engineer passionate about building great user experiences.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MaterialSymbol name="people" size={14} weight={300} />
                        <span>1,234 followers</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MaterialSymbol name="person_add" size={14} weight={300} />
                        <span>567 following</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Link preview */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Link preview</TypographyH4>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="underline">
                    https://example.com/article
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-3">
                    <div className="aspect-video rounded-md bg-muted" />
                    <div className="space-y-2">
                      <TypographyH4 className="text-base">Article Title</TypographyH4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        This is a preview of the article content. It provides a brief summary of what users can expect when they click the link.
                      </p>
                      <p className="text-xs text-muted-foreground">example.com</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Product preview */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Product preview</TypographyH4>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="underline">
                    Product Name
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-3">
                    <div className="aspect-square rounded-md bg-muted" />
                    <div className="space-y-2">
                      <TypographyH4 className="text-base">Product Name</TypographyH4>
                      <p className="text-sm font-normal">$99.99</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Brief product description and key features.
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">In Stock</Badge>
                        <Badge variant="outline">4.5★</Badge>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Status indicator */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Status indicator</TypographyH4>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-semantic-icon-rag-success-default" />
                    <span className="text-sm">Online</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-semantic-icon-rag-success-default" />
                      <TypographyH4 className="text-base">Status: Online</TypographyH4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Last seen: 2 minutes ago
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Tooltip alternative */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Rich tooltip</TypographyH4>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="icon">
                    <MaterialSymbol name="info" size={16} weight={300} />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-72">
                  <div className="space-y-2">
                    <TypographyH4 className="text-base">Feature explanation</TypographyH4>
                    <p className="text-sm text-muted-foreground">
                      This feature allows you to perform advanced actions. Hover over the icon to learn more.
                    </p>
                    <div className="pt-2 border-t">
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                        Learn more →
                      </Button>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Code reference */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Code reference</TypographyH4>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <code className="text-sm bg-muted px-2 py-1 rounded cursor-pointer hover:bg-accent">
                    useState
                  </code>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <TypographyH4 className="text-base">React.useState</TypographyH4>
                    <p className="text-sm text-muted-foreground">
                      A React Hook that lets you add state to a component.
                    </p>
                    <pre className="p-2 rounded-md bg-muted text-xs overflow-x-auto">
                      <code>const [state, setState] = useState(initialValue)</code>
                    </pre>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "dropdown-menu": {
    title: "Dropdown Menu",
    description: "A menu that appears when clicking a trigger button, displaying a list of actions or options. Perfect for context menus, action buttons, and navigation menus.",
    body: (
      <>
        <Section title="Overview" description="Dropdown Menu components display a floating menu when triggered. They're ideal for organizing actions, providing context menus, and creating navigation hierarchies.">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <MaterialSymbol name="edit" size={16} weight={300} />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MaterialSymbol name="content_copy" size={16} weight={300} />
                Copy
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <MaterialSymbol name="delete" size={16} weight={300} />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Section>

        <Section title="Basic Usage" description="Simple dropdown menus with different item types. Use clear labels and appropriate icons to guide user actions.">
          <div className="flex flex-wrap gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Actions</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <MaterialSymbol name="edit" size={16} weight={300} />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MaterialSymbol name="content_copy" size={16} weight={300} />
                  Copy
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MaterialSymbol name="share" size={16} weight={300} />
                  Share
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">With separator</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <MaterialSymbol name="settings" size={16} weight={300} />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MaterialSymbol name="person" size={16} weight={300} />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <MaterialSymbol name="logout" size={16} weight={300} />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MaterialSymbol name="more_vert" size={16} weight={300} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <MaterialSymbol name="edit" size={16} weight={300} />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MaterialSymbol name="delete" size={16} weight={300} />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Section>

        <Section title="With Labels" description="Use labels to group related menu items and improve organization.">
          <div className="flex flex-wrap gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Grouped items</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <MaterialSymbol name="person" size={16} weight={300} />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MaterialSymbol name="credit_card" size={16} weight={300} />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <MaterialSymbol name="settings" size={16} weight={300} />
                  Preferences
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MaterialSymbol name="notifications" size={16} weight={300} />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Section>

        <Section title="With Shortcuts" description="Display keyboard shortcuts to help users learn faster ways to perform actions.">
          <div className="flex flex-wrap gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Actions with shortcuts</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <MaterialSymbol name="content_copy" size={16} weight={300} />
                  Copy
                  <DropdownMenuShortcut>
                    <KbdGroup>
                      <Kbd>⌘</Kbd>
                      <Kbd>C</Kbd>
                    </KbdGroup>
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MaterialSymbol name="content_paste" size={16} weight={300} />
                  Paste
                  <DropdownMenuShortcut>
                    <KbdGroup>
                      <Kbd>⌘</Kbd>
                      <Kbd>V</Kbd>
                    </KbdGroup>
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MaterialSymbol name="cut" size={16} weight={300} />
                  Cut
                  <DropdownMenuShortcut>
                    <KbdGroup>
                      <Kbd>⌘</Kbd>
                      <Kbd>X</Kbd>
                    </KbdGroup>
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Section>

        <Section title="Checkbox Items" description="Use checkbox items for toggleable options that can have multiple selections.">
          <div className="flex flex-wrap gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">View options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>View</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  <MaterialSymbol name="visibility" size={16} weight={300} />
                  Show grid
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>
                  <MaterialSymbol name="label" size={16} weight={300} />
                  Show labels
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  <MaterialSymbol name="view_compact" size={16} weight={300} />
                  Compact mode
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Section>

        <Section title="Radio Items" description="Use radio items for mutually exclusive options where only one selection is allowed.">
          <div className="flex flex-wrap gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Sort by</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="name">
                  <DropdownMenuRadioItem value="name">
                    <MaterialSymbol name="sort_by_alpha" size={16} weight={300} />
                    Name
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="date">
                    <MaterialSymbol name="event" size={16} weight={300} />
                    Date
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="size">
                    <MaterialSymbol name="storage" size={16} weight={300} />
                    Size
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Section>

        <Section title="Submenus" description="Nested menus allow for hierarchical organization of actions and options.">
          <div className="flex flex-wrap gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">More options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <MaterialSymbol name="edit" size={16} weight={300} />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MaterialSymbol name="content_copy" size={16} weight={300} />
                  Copy
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <MaterialSymbol name="share" size={16} weight={300} />
                    Share
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <MaterialSymbol name="email" size={16} weight={300} />
                      Email
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MaterialSymbol name="message" size={16} weight={300} />
                      Message
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MaterialSymbol name="link" size={16} weight={300} />
                      Copy link
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <MaterialSymbol name="delete" size={16} weight={300} />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Section>

        <Section title="Destructive Actions" description="Use the destructive variant to indicate dangerous or irreversible actions.">
          <div className="flex flex-wrap gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Actions</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <MaterialSymbol name="edit" size={16} weight={300} />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MaterialSymbol name="content_copy" size={16} weight={300} />
                  Copy
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <MaterialSymbol name="delete" size={16} weight={300} />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Section>

        <Section title="Usage Examples" description="Dropdown menus integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Table row actions */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Table row actions</TypographyH4>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <MaterialSymbol name="more_vert" size={16} weight={300} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <MaterialSymbol name="edit" size={16} weight={300} />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MaterialSymbol name="content_copy" size={16} weight={300} />
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <MaterialSymbol name="delete" size={16} weight={300} />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* User menu */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">User menu</TypographyH4>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <Avatar size="sm">
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="ml-2">John Doe</span>
                    <MaterialSymbol name="expand_more" size={16} weight={300} className="ml-auto" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <MaterialSymbol name="person" size={16} weight={300} />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MaterialSymbol name="credit_card" size={16} weight={300} />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <MaterialSymbol name="settings" size={16} weight={300} />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <MaterialSymbol name="logout" size={16} weight={300} />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* File actions */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">File actions</TypographyH4>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <MaterialSymbol name="more_vert" size={16} weight={300} />
                    Actions
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <MaterialSymbol name="download" size={16} weight={300} />
                    Download
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MaterialSymbol name="share" size={16} weight={300} />
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <MaterialSymbol name="edit" size={16} weight={300} />
                    Rename
                  </DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">
                    <MaterialSymbol name="delete" size={16} weight={300} />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Filter menu */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Filter menu</TypographyH4>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <MaterialSymbol name="tune" size={16} weight={300} />
                    Filters
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Active
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Inactive
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Pending
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Sort menu */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Sort menu</TypographyH4>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <MaterialSymbol name="sort" size={16} weight={300} />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value="name">
                    <DropdownMenuRadioItem value="name">
                      Name
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="date">
                      Date
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="size">
                      Size
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Context menu example */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Context menu</TypographyH4>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="p-4 rounded-md border bg-muted/50 cursor-pointer hover:bg-muted transition-colors">
                    <p className="text-sm font-normal">Right-click or click to open menu</p>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <MaterialSymbol name="open_in_new" size={16} weight={300} />
                    Open
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MaterialSymbol name="content_copy" size={16} weight={300} />
                    Copy
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <MaterialSymbol name="delete" size={16} weight={300} />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "context-menu": {
    title: "Context Menu",
    description: "A menu that appears on right-click, providing contextual actions. Perfect for file browsers, tables, and any element that benefits from contextual actions.",
    body: (
      <>
        <Section title="Overview" description="Context Menu components display a menu when users right-click on an element. They're similar to dropdown menus but triggered by right-click instead of click.">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
              Right-click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                <MaterialSymbol name="edit" size={16} weight={300} />
                Edit
              </ContextMenuItem>
              <ContextMenuItem>
                <MaterialSymbol name="content_copy" size={16} weight={300} />
                Copy
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <MaterialSymbol name="delete" size={16} weight={300} />
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Section>

        <Section title="Basic Usage" description="Simple context menus with different item types and actions.">
          <div className="flex flex-wrap gap-3">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-24 w-48 items-center justify-center rounded-md border bg-card text-sm">
                Right-click me
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>
                  <MaterialSymbol name="open_in_new" size={16} weight={300} />
                  Open
                </ContextMenuItem>
                <ContextMenuItem>
                  <MaterialSymbol name="content_copy" size={16} weight={300} />
                  Copy
                </ContextMenuItem>
                <ContextMenuItem>
                  <MaterialSymbol name="share" size={16} weight={300} />
                  Share
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </Section>

        <Section title="With Shortcuts" description="Display keyboard shortcuts to help users learn faster ways to perform actions.">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-24 w-48 items-center justify-center rounded-md border bg-card text-sm">
              Right-click for shortcuts
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                <MaterialSymbol name="content_copy" size={16} weight={300} />
                Copy
                <ContextMenuShortcut>
                  <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <Kbd>C</Kbd>
                  </KbdGroup>
                </ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <MaterialSymbol name="content_paste" size={16} weight={300} />
                Paste
                <ContextMenuShortcut>
                  <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <Kbd>V</Kbd>
                  </KbdGroup>
                </ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Section>

        <Section title="Usage Examples" description="Context menus integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">File browser</TypographyH4>
              <ContextMenu>
                <ContextMenuTrigger className="flex h-20 w-full items-center gap-3 rounded-md border bg-muted/50 p-3 cursor-pointer">
                  <MaterialSymbol name="description" size={20} weight={300} />
                  <div className="flex-1">
                    <p className="text-sm font-normal">document.pdf</p>
                    <p className="text-xs text-muted-foreground">2.4 MB</p>
                  </div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>
                    <MaterialSymbol name="open_in_new" size={16} weight={300} />
                    Open
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <MaterialSymbol name="download" size={16} weight={300} />
                    Download
                  </ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>
                    <MaterialSymbol name="edit" size={16} weight={300} />
                    Rename
                  </ContextMenuItem>
                  <ContextMenuItem variant="destructive">
                    <MaterialSymbol name="delete" size={16} weight={300} />
                    Delete
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  command: {
    title: "Command",
    description: "A command palette component for quick actions and navigation. Perfect for keyboard-driven interfaces, search functionality, and command palettes.",
    body: (
      <>
        <Section title="Overview" description="Command components provide a searchable list of commands and actions. They're ideal for command palettes, search interfaces, and keyboard-driven navigation.">
          <div className="max-w-md">
            <Command className="rounded-lg border">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <MaterialSymbol name="calendar_today" size={16} weight={300} />
                    Calendar
                  </CommandItem>
                  <CommandItem>
                    <MaterialSymbol name="emoji_emotions" size={16} weight={300} />
                    Search Emoji
                  </CommandItem>
                  <CommandItem>
                    <MaterialSymbol name="calculate" size={16} weight={300} />
                    Calculator
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </Section>

        <Section title="Basic Usage" description="Simple command palettes with search functionality and grouped items.">
          <div className="max-w-md">
            <Command className="rounded-lg border">
              <CommandInput placeholder="Search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Files">
                  <CommandItem>
                    <MaterialSymbol name="description" size={16} weight={300} />
                    Document.pdf
                  </CommandItem>
                  <CommandItem>
                    <MaterialSymbol name="image" size={16} weight={300} />
                    Image.jpg
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Actions">
                  <CommandItem>
                    <MaterialSymbol name="add" size={16} weight={300} />
                    New file
                  </CommandItem>
                  <CommandItem>
                    <MaterialSymbol name="folder" size={16} weight={300} />
                    New folder
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </Section>

        <Section title="With Shortcuts" description="Display keyboard shortcuts for quick access to commands.">
          <div className="max-w-md">
            <Command className="rounded-lg border">
              <CommandInput placeholder="Type a command..." />
              <CommandList>
                <CommandGroup heading="Commands">
                  <CommandItem>
                    <MaterialSymbol name="content_copy" size={16} weight={300} />
                    Copy
                    <CommandShortcut>
                      <KbdGroup>
                        <Kbd>⌘</Kbd>
                        <Kbd>C</Kbd>
                      </KbdGroup>
                    </CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <MaterialSymbol name="content_paste" size={16} weight={300} />
                    Paste
                    <CommandShortcut>
                      <KbdGroup>
                        <Kbd>⌘</Kbd>
                        <Kbd>V</Kbd>
                      </KbdGroup>
                    </CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </Section>
      </>
    ),
  },
  combobox: {
    title: "Combobox",
    description: "An autocomplete input component that combines a text input with a dropdown menu. Perfect for searchable select inputs and autocomplete functionality.",
    body: (
      <>
        <Section title="Overview" description="Combobox components combine an input field with a searchable dropdown menu. They allow users to type to filter options and select from a list, providing a better experience than traditional select inputs.">
          <ComboboxControlledDemo />
        </Section>

        <Section title="Basic Usage" description="Simple comboboxes with different content types. Use clear placeholders and organize options logically.">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label className="text-sm">Framework</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" className="w-full justify-between">
                    Select framework...
                    <MaterialSymbol name="expand_more" size={16} weight={300} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem value="react">React</CommandItem>
                        <CommandItem value="vue">Vue</CommandItem>
                        <CommandItem value="angular">Angular</CommandItem>
                        <CommandItem value="svelte">Svelte</CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Country</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" className="w-full justify-between">
                    Select country...
                    <MaterialSymbol name="expand_more" size={16} weight={300} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandList>
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem value="us">United States</CommandItem>
                        <CommandItem value="uk">United Kingdom</CommandItem>
                        <CommandItem value="fr">France</CommandItem>
                        <CommandItem value="de">Germany</CommandItem>
                        <CommandItem value="ca">Canada</CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </Section>

        <Section title="With Icons" description="Icons help identify options and make the combobox more visually distinct. Use Material Symbols icons consistently.">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label className="text-sm">Language</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" className="w-full justify-between">
                    <span className="flex items-center gap-2">
                      <MaterialSymbol name="language" size={16} weight={300} />
                      Select language...
                    </span>
                    <MaterialSymbol name="expand_more" size={16} weight={300} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandList>
                      <CommandEmpty>No language found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem value="en">
                          <MaterialSymbol name="language" size={16} weight={300} />
                          English
                        </CommandItem>
                        <CommandItem value="fr">
                          <MaterialSymbol name="language" size={16} weight={300} />
                          Français
                        </CommandItem>
                        <CommandItem value="es">
                          <MaterialSymbol name="language" size={16} weight={300} />
                          Español
                        </CommandItem>
                        <CommandItem value="de">
                          <MaterialSymbol name="language" size={16} weight={300} />
                          Deutsch
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Category</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" className="w-full justify-between">
                    <span className="flex items-center gap-2">
                      <MaterialSymbol name="category" size={16} weight={300} />
                      Select category...
                    </span>
                    <MaterialSymbol name="expand_more" size={16} weight={300} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Search category..." />
                    <CommandList>
                      <CommandEmpty>No category found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem value="electronics">
                          <MaterialSymbol name="devices" size={16} weight={300} />
                          Electronics
                        </CommandItem>
                        <CommandItem value="clothing">
                          <MaterialSymbol name="checkroom" size={16} weight={300} />
                          Clothing
                        </CommandItem>
                        <CommandItem value="books">
                          <MaterialSymbol name="menu_book" size={16} weight={300} />
                          Books
                        </CommandItem>
                        <CommandItem value="food">
                          <MaterialSymbol name="restaurant" size={16} weight={300} />
                          Food
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </Section>

        <Section title="Grouped Options" description="Organize related options into groups for better navigation and clarity.">
          <div className="max-w-md">
            <div className="space-y-2">
              <Label className="text-sm">Framework</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" className="w-full justify-between">
                    Select framework...
                    <MaterialSymbol name="expand_more" size={16} weight={300} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup heading="Frontend">
                        <CommandItem value="react">React</CommandItem>
                        <CommandItem value="vue">Vue</CommandItem>
                        <CommandItem value="angular">Angular</CommandItem>
                        <CommandItem value="svelte">Svelte</CommandItem>
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="Backend">
                        <CommandItem value="node">Node.js</CommandItem>
                        <CommandItem value="python">Python</CommandItem>
                        <CommandItem value="java">Java</CommandItem>
                        <CommandItem value="go">Go</CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Comboboxes integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Form example */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Form field</TypographyH4>
              <div className="space-y-2">
                <Label htmlFor="combobox-form-country" className="text-sm">Country</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" id="combobox-form-country" className="w-full justify-between">
                      Select country...
                      <MaterialSymbol name="expand_more" size={16} weight={300} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[300px] p-0">
                    <Command>
                      <CommandInput placeholder="Search country..." />
                      <CommandList>
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup>
                          <CommandItem value="us">United States</CommandItem>
                          <CommandItem value="uk">United Kingdom</CommandItem>
                          <CommandItem value="fr">France</CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Filter example */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Filter dropdown</TypographyH4>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span className="flex items-center gap-2">
                      <MaterialSymbol name="filter_list" size={16} weight={300} />
                      Filter by status
                    </span>
                    <MaterialSymbol name="expand_more" size={16} weight={300} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[250px] p-0">
                  <Command>
                    <CommandInput placeholder="Search status..." />
                    <CommandList>
                      <CommandEmpty>No status found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem value="active">Active</CommandItem>
                        <CommandItem value="inactive">Inactive</CommandItem>
                        <CommandItem value="pending">Pending</CommandItem>
                        <CommandItem value="archived">Archived</CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Search example */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Search autocomplete</TypographyH4>
              <Popover>
                <PopoverTrigger asChild>
                  <div className="relative">
                    <Input placeholder="Search users..." className="pr-10" />
                    <MaterialSymbol name="search" size={16} weight={300} className="absolute right-3 top-1/2 -translate-y-1/2 text-semantic-icon-subdued" />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandList>
                      <CommandGroup>
                        <CommandItem>
                          <Avatar size="sm">
                            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" alt="User" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          John Doe
                        </CommandItem>
                        <CommandItem>
                          <Avatar size="sm">
                            <AvatarFallback>JS</AvatarFallback>
                          </Avatar>
                          Jane Smith
                        </CommandItem>
                        <CommandItem>
                          <Avatar size="sm">
                            <AvatarFallback>AB</AvatarFallback>
                          </Avatar>
                          Alice Brown
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Settings example */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Settings</TypographyH4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label className="text-sm">Theme</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" role="combobox" className="w-full justify-between">
                        <span className="flex items-center gap-2">
                          <MaterialSymbol name="palette" size={16} weight={300} />
                          Select theme...
                        </span>
                        <MaterialSymbol name="expand_more" size={16} weight={300} />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[250px] p-0">
                      <Command>
                        <CommandInput placeholder="Search theme..." />
                        <CommandList>
                          <CommandEmpty>No theme found.</CommandEmpty>
                          <CommandGroup>
                            <CommandItem value="light">Light</CommandItem>
                            <CommandItem value="dark">Dark</CommandItem>
                            <CommandItem value="auto">Auto</CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "input-otp": {
    title: "Input OTP",
    description: "A one-time password input component for verification codes. Perfect for two-factor authentication, email verification, and security codes.",
    body: (
      <>
        <Section title="Overview" description="Input OTP components display multiple input fields for entering verification codes. They're commonly used for two-factor authentication, email verification, and security code entry.">
          <InputOTPControlledDemo />
        </Section>

        <Section title="Basic Usage" description="Simple OTP inputs with different code lengths. Choose the length that matches your verification system requirements.">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm">6-digit code</Label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <InputOTPSlot key={i} index={i} />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">4-digit code</Label>
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <InputOTPSlot key={i} index={i} />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">8-digit code</Label>
              <InputOTP maxLength={8}>
                <InputOTPGroup>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <InputOTPSlot key={i} index={i} />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </Section>

        <Section title="With Separator" description="Use separators to visually group digits, making longer codes easier to read and enter.">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm">6-digit code with separator</Label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">8-digit code with separator</Label>
              <InputOTP maxLength={8}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </Section>

        <Section title="States" description="OTP inputs support different states including disabled and error states for better user feedback.">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm">Disabled</Label>
              <InputOTP maxLength={6} disabled>
                <InputOTPGroup>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <InputOTPSlot key={i} index={i} />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">With error</Label>
              <InputOTP maxLength={6} aria-invalid>
                <InputOTPGroup>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <InputOTPSlot key={i} index={i} />
                  ))}
                </InputOTPGroup>
              </InputOTP>
              <p className="text-xs text-semantic-text-rag-danger-default">Invalid code. Please try again.</p>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="OTP inputs integrated into common authentication and verification flows.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Two-factor authentication */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Two-factor authentication</TypographyH4>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Enter the 6-digit code from your authenticator app.</p>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
                <Button className="w-full">Verify</Button>
              </div>
            </div>

            {/* Email verification */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Email verification</TypographyH4>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">We sent a verification code to your email address.</p>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <div className="flex items-center justify-between text-xs">
                  <Button variant="link" className="h-auto p-0 text-xs">Resend code</Button>
                  <span className="text-muted-foreground">2:34</span>
                </div>
              </div>
            </div>

            {/* Phone verification */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Phone verification</TypographyH4>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Enter the 4-digit code sent to your phone.</p>
                <InputOTP maxLength={4}>
                  <InputOTPGroup>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
                <Button className="w-full">Confirm</Button>
              </div>
            </div>

            {/* Password reset */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Password reset</TypographyH4>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Enter the verification code to reset your password.</p>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">Cancel</Button>
                  <Button className="flex-1">Continue</Button>
                </div>
              </div>
            </div>

            {/* Account recovery */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Account recovery</TypographyH4>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Enter your recovery code.</p>
                <InputOTP maxLength={8}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                    <InputOTPSlot index={6} />
                    <InputOTPSlot index={7} />
                  </InputOTPGroup>
                </InputOTP>
                <Button className="w-full">Recover account</Button>
              </div>
            </div>

            {/* Error state example */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Error state</TypographyH4>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Enter the verification code.</p>
                <InputOTP maxLength={6} aria-invalid>
                  <InputOTPGroup>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
                <p className="text-xs text-semantic-text-rag-danger-default">Invalid code. Please try again.</p>
                <Button variant="outline" className="w-full">Resend code</Button>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "input-group": {
    title: "Input Group",
    description: "A container component for grouping multiple input elements together. Perfect for combining inputs, buttons, icons, and other form elements into cohesive controls.",
    body: (
      <>
        <Section title="Overview" description="Input Group components provide a flexible way to group related input elements together, creating cohesive form controls. They're ideal for search bars, input fields with actions, and complex form layouts.">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label className="text-sm">Search</Label>
              <InputGroup className="gap-2">
                <Input placeholder="Search..." />
                <Button>
                  <MaterialSymbol name="search" size={16} weight={300} />
                </Button>
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">With icon</Label>
              <InputGroup className="gap-2">
                <MaterialSymbol name="search" size={16} weight={300} className="text-semantic-icon-subdued" />
                <Input placeholder="Search..." />
              </InputGroup>
            </div>
          </div>
        </Section>

        <Section title="Basic Usage" description="Common patterns for grouping input elements with icons, buttons, and other controls.">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label className="text-sm">Icon on left</Label>
              <InputGroup className="gap-2">
                <MaterialSymbol name="search" size={16} weight={300} className="text-semantic-icon-subdued" />
                <Input placeholder="Search..." />
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Button on right</Label>
              <InputGroup className="gap-2">
                <Input placeholder="Enter email..." />
                <Button>Subscribe</Button>
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Icon and button</Label>
              <InputGroup className="gap-2">
                <MaterialSymbol name="search" size={16} weight={300} className="text-semantic-icon-subdued" />
                <Input placeholder="Search..." />
                <Button>
                  <MaterialSymbol name="search" size={16} weight={300} />
                </Button>
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Icon on right</Label>
              <InputGroup className="gap-2">
                <Input placeholder="Search..." />
                <MaterialSymbol name="search" size={16} weight={300} className="text-semantic-icon-subdued" />
              </InputGroup>
            </div>
          </div>
        </Section>

        <Section title="With Select" description="Combine inputs with select dropdowns for more complex form controls.">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label className="text-sm">Domain selector</Label>
              <InputGroup className="gap-2">
                <Input placeholder="username" />
                <Select defaultValue="@example.com">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="@example.com">@example.com</SelectItem>
                    <SelectItem value="@test.com">@test.com</SelectItem>
                    <SelectItem value="@demo.com">@demo.com</SelectItem>
                  </SelectContent>
                </Select>
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Currency input</Label>
              <InputGroup className="gap-2">
                <Select defaultValue="USD">
                  <SelectTrigger className="w-[80px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="GBP">GBP</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="number" placeholder="0.00" />
              </InputGroup>
            </div>
          </div>
        </Section>

        <Section title="With Badge" description="Combine inputs with badges to show additional information or status.">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label className="text-sm">With status badge</Label>
              <InputGroup className="gap-2">
                <Input placeholder="Enter value..." />
                <Badge variant="secondary">Active</Badge>
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">With count badge</Label>
              <InputGroup className="gap-2">
                <Input placeholder="Search..." />
                <Badge variant="outline">12 results</Badge>
              </InputGroup>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Input groups integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Search bar */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Search bar</TypographyH4>
              <InputGroup className="gap-2">
                <MaterialSymbol name="search" size={16} weight={300} className="text-semantic-icon-subdued" />
                <Input placeholder="Search products..." />
                <Button size="icon">
                  <MaterialSymbol name="tune" size={16} weight={300} />
                </Button>
              </InputGroup>
            </div>

            {/* Email input */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Email input</TypographyH4>
              <div className="space-y-2">
                <Label className="text-sm">Email address</Label>
                <InputGroup className="gap-2">
                  <MaterialSymbol name="email" size={16} weight={300} className="text-semantic-icon-subdued" />
                  <Input type="email" placeholder="your@email.com" />
                </InputGroup>
              </div>
            </div>

            {/* URL input */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">URL input</TypographyH4>
              <div className="space-y-2">
                <Label className="text-sm">Website URL</Label>
                <InputGroup className="gap-2">
                  <Select defaultValue="https://">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="https://">https://</SelectItem>
                      <SelectItem value="http://">http://</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="example.com" />
                </InputGroup>
              </div>
            </div>

            {/* Price input */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Price input</TypographyH4>
              <div className="space-y-2">
                <Label className="text-sm">Price</Label>
                <InputGroup className="gap-2">
                  <Select defaultValue="USD">
                    <SelectTrigger className="w-[80px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input type="number" placeholder="0.00" />
                  <Button variant="outline">Apply</Button>
                </InputGroup>
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Newsletter signup</TypographyH4>
              <InputGroup className="gap-2">
                <Input type="email" placeholder="Enter your email" />
                <Button>Subscribe</Button>
              </InputGroup>
            </div>

            {/* Filter input */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Filter input</TypographyH4>
              <InputGroup className="gap-2">
                <MaterialSymbol name="filter_list" size={16} weight={300} className="text-semantic-icon-subdued" />
                <Input placeholder="Filter by name..." />
                <Badge variant="secondary">5</Badge>
              </InputGroup>
            </div>

            {/* Copy input */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Copy input</TypographyH4>
              <div className="space-y-2">
                <Label className="text-sm">API Key</Label>
                <InputGroup className="gap-2">
                  <Input value="sk_live_1234567890abcdef" readOnly />
                  <Button variant="outline" size="icon">
                    <MaterialSymbol name="content_copy" size={16} weight={300} />
                  </Button>
                </InputGroup>
              </div>
            </div>

            {/* Password input */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Password input</TypographyH4>
              <div className="space-y-2">
                <Label className="text-sm">Password</Label>
                <InputGroup className="gap-2">
                  <Input type="password" placeholder="Enter password" />
                  <Button variant="outline" size="icon">
                    <MaterialSymbol name="visibility" size={16} weight={300} />
                  </Button>
                </InputGroup>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  breadcrumb: {
    title: "Breadcrumb",
    description: "A navigation component that shows the current page's location within a hierarchy. Perfect for navigation trails and showing user location.",
    body: (
      <>
        <Section title="Overview" description="Breadcrumb components display a navigation trail showing the user's current location within a hierarchy. They help users understand where they are and navigate back to previous levels.">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <MaterialSymbol name="chevron_right" size={14} weight={300} />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <MaterialSymbol name="chevron_right" size={14} weight={300} />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Section>

        <Section title="Basic Usage" description="Simple breadcrumb trails for different navigation depths.">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm">2 levels</Label>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Current Page</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">3 levels</Label>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Category</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Item</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">4 levels</Label>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Products</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Electronics</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Smartphones</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </Section>

        <Section title="With Ellipsis" description="Use ellipsis to collapse long breadcrumb trails while maintaining navigation. This is especially useful for deep hierarchies.">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm">Collapsed middle</Label>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Current Page</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Long trail</Label>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Products</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Details</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Settings</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Breadcrumbs integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* File browser */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">File browser</TypographyH4>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">
                      <MaterialSymbol name="home" size={14} weight={300} />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Documents</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Projects</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* E-commerce */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">E-commerce</TypographyH4>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Shop</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Electronics</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Smartphones</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Settings */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Settings navigation</TypographyH4>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Account</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <MaterialSymbol name="chevron_right" size={14} weight={300} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Security</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  pagination: {
    title: "Pagination",
    description: "A component for navigating through pages of content. Perfect for tables, lists, and any paginated data.",
    body: (
      <>
        <Section title="Overview" description="Pagination components help users navigate through multiple pages of content. They display page numbers, navigation controls, and ellipsis for long page lists.">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Section>

        <Section title="Basic Usage" description="Different pagination layouts for various use cases and content types.">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm">Simple navigation</Label>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">With page numbers</Label>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">With ellipsis</Label>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">10</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Pagination integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Table pagination */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Table pagination</TypographyH4>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Showing 1-10 of 50 results</p>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            {/* Compact pagination */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Compact pagination</TypographyH4>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            {/* Long pagination */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Long pagination</TypographyH4>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>5</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">10</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "native-select": {
    title: "Native Select",
    description: "A native HTML select element with custom styling. Perfect for simple dropdown selections that don't require complex interactions or search functionality.",
    body: (
      <>
        <Section title="Overview" description="Native Select components use the browser's native select element with custom styling. They're simpler than custom Select components but offer native browser behavior and accessibility.">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label className="text-sm">Select option</Label>
              <NativeSelect>
                <NativeSelectOption value="">Select an option</NativeSelectOption>
                <NativeSelectOption value="option1">Option 1</NativeSelectOption>
                <NativeSelectOption value="option2">Option 2</NativeSelectOption>
                <NativeSelectOption value="option3">Option 3</NativeSelectOption>
              </NativeSelect>
            </div>
          </div>
        </Section>

        <Section title="Basic Usage" description="Simple native selects for different use cases.">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label className="text-sm">Country</Label>
              <NativeSelect>
                <NativeSelectOption value="">Select country</NativeSelectOption>
                <NativeSelectOption value="us">United States</NativeSelectOption>
                <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
                <NativeSelectOption value="fr">France</NativeSelectOption>
                <NativeSelectOption value="de">Germany</NativeSelectOption>
              </NativeSelect>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Language</Label>
              <NativeSelect>
                <NativeSelectOption value="">Select language</NativeSelectOption>
                <NativeSelectOption value="en">English</NativeSelectOption>
                <NativeSelectOption value="fr">Français</NativeSelectOption>
                <NativeSelectOption value="es">Español</NativeSelectOption>
                <NativeSelectOption value="de">Deutsch</NativeSelectOption>
              </NativeSelect>
            </div>
          </div>
        </Section>

        <Section title="With Groups" description="Group related options together for better organization and easier navigation.">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label className="text-sm">Category</Label>
              <NativeSelect>
                <NativeSelectOptGroup label="Fruits">
                  <NativeSelectOption value="apple">Apple</NativeSelectOption>
                  <NativeSelectOption value="banana">Banana</NativeSelectOption>
                  <NativeSelectOption value="orange">Orange</NativeSelectOption>
                </NativeSelectOptGroup>
                <NativeSelectOptGroup label="Vegetables">
                  <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
                  <NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
                  <NativeSelectOption value="spinach">Spinach</NativeSelectOption>
                </NativeSelectOptGroup>
              </NativeSelect>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Region</Label>
              <NativeSelect>
                <NativeSelectOptGroup label="North America">
                  <NativeSelectOption value="us">United States</NativeSelectOption>
                  <NativeSelectOption value="ca">Canada</NativeSelectOption>
                  <NativeSelectOption value="mx">Mexico</NativeSelectOption>
                </NativeSelectOptGroup>
                <NativeSelectOptGroup label="Europe">
                  <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
                  <NativeSelectOption value="fr">France</NativeSelectOption>
                  <NativeSelectOption value="de">Germany</NativeSelectOption>
                </NativeSelectOptGroup>
              </NativeSelect>
            </div>
          </div>
        </Section>

        <Section title="States" description="Native selects support disabled and error states for better user feedback.">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label className="text-sm">Disabled</Label>
              <NativeSelect disabled>
                <NativeSelectOption value="">Select option</NativeSelectOption>
                <NativeSelectOption value="option1">Option 1</NativeSelectOption>
                <NativeSelectOption value="option2">Option 2</NativeSelectOption>
              </NativeSelect>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">With error</Label>
              <NativeSelect aria-invalid>
                <NativeSelectOption value="">Select option</NativeSelectOption>
                <NativeSelectOption value="option1">Option 1</NativeSelectOption>
                <NativeSelectOption value="option2">Option 2</NativeSelectOption>
              </NativeSelect>
              <p className="text-xs text-semantic-text-rag-danger-default">Please select an option</p>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Native selects integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Form field */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Form field</TypographyH4>
              <div className="space-y-2">
                <Label htmlFor="native-select-country" className="text-sm">Country</Label>
                <NativeSelect id="native-select-country">
                  <NativeSelectOption value="">Select country</NativeSelectOption>
                  <NativeSelectOption value="us">United States</NativeSelectOption>
                  <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
                  <NativeSelectOption value="fr">France</NativeSelectOption>
                </NativeSelect>
              </div>
            </div>

            {/* Settings */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Settings</TypographyH4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label className="text-sm">Language</Label>
                  <NativeSelect>
                    <NativeSelectOption value="en">English</NativeSelectOption>
                    <NativeSelectOption value="fr">Français</NativeSelectOption>
                    <NativeSelectOption value="es">Español</NativeSelectOption>
                  </NativeSelect>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Timezone</Label>
                  <NativeSelect>
                    <NativeSelectOption value="utc">UTC</NativeSelectOption>
                    <NativeSelectOption value="est">EST</NativeSelectOption>
                    <NativeSelectOption value="pst">PST</NativeSelectOption>
                  </NativeSelect>
                </div>
              </div>
            </div>

            {/* Filter */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Filter</TypographyH4>
              <div className="space-y-2">
                <Label className="text-sm">Status</Label>
                <NativeSelect>
                  <NativeSelectOption value="">All statuses</NativeSelectOption>
                  <NativeSelectOption value="active">Active</NativeSelectOption>
                  <NativeSelectOption value="inactive">Inactive</NativeSelectOption>
                  <NativeSelectOption value="pending">Pending</NativeSelectOption>
                </NativeSelect>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "button-group": {
    title: "Button Group",
    description: "A container component for grouping buttons together with consistent spacing and separators. Perfect for toolbars, action groups, and related button sets.",
    body: (
      <>
        <Section title="Overview" description="Button Group components provide a way to group related buttons together, creating cohesive action sets. They support horizontal and vertical orientations with automatic border handling.">
          <ButtonGroup>
            <Button variant="outline">First</Button>
            <Button variant="outline">Second</Button>
            <Button variant="outline">Third</Button>
          </ButtonGroup>
        </Section>

        <Section title="Basic Usage" description="Simple button groups with different variants and orientations.">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm">Horizontal</Label>
              <ButtonGroup orientation="horizontal">
                <Button variant="outline">Left</Button>
                <Button variant="outline">Center</Button>
                <Button variant="outline">Right</Button>
              </ButtonGroup>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Vertical</Label>
              <ButtonGroup orientation="vertical">
                <Button variant="outline">Top</Button>
                <Button variant="outline">Middle</Button>
                <Button variant="outline">Bottom</Button>
              </ButtonGroup>
            </div>
          </div>
        </Section>

        <Section title="With Separators" description="Use separators to visually distinguish different groups of actions within a button group.">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm">With text and separators</Label>
              <ButtonGroup>
                <ButtonGroupText>
                  <MaterialSymbol name="table" size={16} weight={300} />
                  View
                </ButtonGroupText>
                <ButtonGroupSeparator />
                <Button size="sm" variant="outline">
                  <MaterialSymbol name="file_download" size={16} weight={300} />
                  CSV
                </Button>
                <Button size="sm" variant="outline">
                  <MaterialSymbol name="ios_share" size={16} weight={300} />
                  Share
                </Button>
              </ButtonGroup>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Multiple groups</Label>
              <ButtonGroup>
                <Button variant="outline">
                  <MaterialSymbol name="edit" size={16} weight={300} />
                  Edit
                </Button>
                <Button variant="outline">
                  <MaterialSymbol name="content_copy" size={16} weight={300} />
                  Copy
                </Button>
                <ButtonGroupSeparator />
                <Button variant="outline">
                  <MaterialSymbol name="delete" size={16} weight={300} />
                  Delete
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Section>

        <Section title="With Active State" description="Button groups can contain buttons with active states, useful for toggle groups and filters.">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm">Filter buttons</Label>
              <ButtonGroup>
                <Button variant="outline" size="sm">All</Button>
                <Button variant="outline" size="sm" className="bg-accent">Active</Button>
                <Button variant="outline" size="sm">Inactive</Button>
              </ButtonGroup>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">View options</Label>
              <ButtonGroup>
                <Button variant="outline" size="sm">
                  <MaterialSymbol name="view_list" size={16} weight={300} />
                </Button>
                <Button variant="outline" size="sm" className="bg-accent">
                  <MaterialSymbol name="view_module" size={16} weight={300} />
                </Button>
                <Button variant="outline" size="sm">
                  <MaterialSymbol name="view_quilt" size={16} weight={300} />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Button groups integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Toolbar */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Toolbar</TypographyH4>
              <ButtonGroup>
                <ButtonGroupText>
                  <MaterialSymbol name="table" size={16} weight={300} />
                  View
                </ButtonGroupText>
                <ButtonGroupSeparator />
                <Button size="sm" variant="outline">
                  <MaterialSymbol name="file_download" size={16} weight={300} />
                  Export
                </Button>
                <Button size="sm" variant="outline">
                  <MaterialSymbol name="ios_share" size={16} weight={300} />
                  Share
                </Button>
              </ButtonGroup>
            </div>

            {/* Filter group */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Filter group</TypographyH4>
              <ButtonGroup>
                <Button variant="outline" size="sm">All</Button>
                <Button variant="outline" size="sm" className="bg-accent">Active</Button>
                <Button variant="outline" size="sm">Pending</Button>
                <Button variant="outline" size="sm">Archived</Button>
              </ButtonGroup>
            </div>

            {/* Action group */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Action group</TypographyH4>
              <ButtonGroup>
                <Button variant="outline" size="sm">
                  <MaterialSymbol name="edit" size={16} weight={300} />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <MaterialSymbol name="content_copy" size={16} weight={300} />
                  Duplicate
                </Button>
                <ButtonGroupSeparator />
                <Button variant="outline" size="sm" className="text-[var(--destructive-foreground)]">
                  <MaterialSymbol name="delete" size={16} weight={300} />
                  Delete
                </Button>
              </ButtonGroup>
            </div>

            {/* View switcher */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">View switcher</TypographyH4>
              <ButtonGroup>
                <Button variant="outline" size="icon">
                  <MaterialSymbol name="view_list" size={16} weight={300} />
                </Button>
                <Button variant="outline" size="icon" className="bg-accent">
                  <MaterialSymbol name="view_module" size={16} weight={300} />
                </Button>
                <Button variant="outline" size="icon">
                  <MaterialSymbol name="view_quilt" size={16} weight={300} />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  field: {
    title: "Field",
    description: "A composable field wrapper component system for building accessible forms with predictable spacing and consistent layouts. Perfect for creating forms with proper label associations, descriptions, error handling, and responsive behavior.",
    body: (
      <>
        <Section title="Overview" description="The Field component system provides a structured way to build form fields. It consists of FieldSet (container), FieldGroup (field collection), Field (individual field), FieldLabel (label wrapper), FieldTitle (field title), FieldDescription (help text), FieldContent (input container), and FieldError (error messages). All components work together to ensure consistent 12px spacing throughout forms.">
          <div className="space-y-6 max-w-2xl">
            <FieldSet>
              <FieldLegend>Profile information</FieldLegend>
              <FieldGroup>
                <Field orientation="responsive">
                  <FieldLabel htmlFor="field-overview-name">
                    <FieldTitle>Full name</FieldTitle>
                    <FieldDescription>This will be displayed on your profile</FieldDescription>
                  </FieldLabel>
                  <FieldContent>
                    <Input id="field-overview-name" placeholder="John Doe" />
                  </FieldContent>
                </Field>
                <Field orientation="responsive">
                  <FieldLabel htmlFor="field-overview-email">
                    <FieldTitle>Email address</FieldTitle>
                    <FieldDescription>We'll never share your email</FieldDescription>
                  </FieldLabel>
                  <FieldContent>
                    <Input id="field-overview-email" type="email" placeholder="your@email.com" />
                  </FieldContent>
                </Field>
                <Field orientation="responsive">
                  <FieldLabel htmlFor="field-overview-timezone">
                    <FieldTitle>Timezone</FieldTitle>
                  </FieldLabel>
                  <FieldContent>
                    <Select defaultValue="europe-paris">
                      <SelectTrigger id="field-overview-timezone">
                        <SelectValue placeholder="Pick a timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="europe-paris">Europe / Paris</SelectItem>
                        <SelectItem value="americas-nyc">Americas / New York</SelectItem>
                        <SelectItem value="asia-singapore">Asia / Singapore</SelectItem>
                      </SelectContent>
                    </Select>
                  </FieldContent>
                </Field>
              </FieldGroup>
            </FieldSet>
          </div>
        </Section>

        <Section title="Component Structure" description="Understanding how Field components work together. FieldSet groups related fields, FieldGroup maintains consistent spacing between fields, and Field wraps individual form controls with their labels and descriptions.">
          <div className="space-y-4 max-w-2xl">
            <div className="space-y-2">
              <Label className="text-sm">Basic structure</Label>
              <div className="p-4 rounded-lg border bg-muted/30 text-sm font-mono space-y-2">
                <div className="text-muted-foreground">&lt;FieldSet&gt;</div>
                <div className="ml-4 text-muted-foreground">&lt;FieldLegend&gt;Section title&lt;/FieldLegend&gt;</div>
                <div className="ml-4 text-muted-foreground">&lt;FieldGroup&gt;</div>
                <div className="ml-8 text-foreground">&lt;Field orientation="responsive"&gt;</div>
                <div className="ml-12 text-muted-foreground">&lt;FieldLabel htmlFor="..."&gt;</div>
                <div className="ml-16 text-foreground">&lt;FieldTitle&gt;Label&lt;/FieldTitle&gt;</div>
                <div className="ml-16 text-foreground">&lt;FieldDescription&gt;Help text&lt;/FieldDescription&gt;</div>
                <div className="ml-12 text-muted-foreground">&lt;/FieldLabel&gt;</div>
                <div className="ml-12 text-muted-foreground">&lt;FieldContent&gt;</div>
                <div className="ml-16 text-foreground">&lt;Input /&gt;</div>
                <div className="ml-12 text-muted-foreground">&lt;/FieldContent&gt;</div>
                <div className="ml-8 text-foreground">&lt;/Field&gt;</div>
                <div className="ml-4 text-muted-foreground">&lt;/FieldGroup&gt;</div>
                <div className="text-muted-foreground">&lt;/FieldSet&gt;</div>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">With error handling</Label>
              <FieldSet>
                <FieldGroup>
                  <Field orientation="responsive" data-invalid>
                    <FieldLabel htmlFor="field-structure-email">
                      <FieldTitle>Email</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-structure-email" type="email" placeholder="your@email.com" aria-invalid />
                    </FieldContent>
                    <FieldError errors={[{ message: "Please enter a valid email" }]} />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
          </div>
        </Section>

        <Section title="Orientations" description="Field components support three orientations. Choose based on your layout needs and available screen space.">
          <div className="space-y-6 max-w-2xl">
            <div className="space-y-2">
              <Label className="text-sm">Vertical</Label>
              <p className="text-xs text-muted-foreground">Labels and inputs stack vertically. Best for mobile-first designs.</p>
              <FieldSet>
                <FieldGroup>
                  <Field orientation="vertical">
                    <FieldLabel htmlFor="field-vertical-name">
                      <FieldTitle>Name</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-vertical-name" placeholder="John Doe" />
                    </FieldContent>
                  </Field>
                  <Field orientation="vertical">
                    <FieldLabel htmlFor="field-vertical-email">
                      <FieldTitle>Email</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-vertical-email" type="email" placeholder="your@email.com" />
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Horizontal</Label>
              <p className="text-xs text-muted-foreground">Labels and inputs sit side-by-side. Best for desktop forms.</p>
              <FieldSet>
                <FieldGroup>
                  <Field orientation="horizontal">
                    <FieldLabel htmlFor="field-horizontal-name">
                      <FieldTitle>Name</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-horizontal-name" placeholder="John Doe" />
                    </FieldContent>
                  </Field>
                  <Field orientation="horizontal">
                    <FieldLabel htmlFor="field-horizontal-email">
                      <FieldTitle>Email</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-horizontal-email" type="email" placeholder="your@email.com" />
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Responsive</Label>
              <p className="text-xs text-muted-foreground">Vertical on mobile, horizontal on desktop. Recommended for most cases.</p>
              <FieldSet>
                <FieldGroup>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-responsive-name">
                      <FieldTitle>Name</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-responsive-name" placeholder="John Doe" />
                    </FieldContent>
                  </Field>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-responsive-email">
                      <FieldTitle>Email</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-responsive-email" type="email" placeholder="your@email.com" />
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
          </div>
        </Section>

        <Section title="With Descriptions" description="FieldDescription provides helpful context, instructions, or additional information about form fields. It appears below the FieldTitle and uses muted text styling.">
          <FieldSet>
            <FieldGroup>
              <Field orientation="responsive">
                <FieldLabel htmlFor="field-desc-username">
                  <FieldTitle>Username</FieldTitle>
                  <FieldDescription>Choose a unique username. This can be changed later.</FieldDescription>
                </FieldLabel>
                <FieldContent>
                  <Input id="field-desc-username" placeholder="johndoe" />
                </FieldContent>
              </Field>
              <Field orientation="responsive">
                <FieldLabel htmlFor="field-desc-bio">
                  <FieldTitle>Bio</FieldTitle>
                  <FieldDescription>Tell us a little about yourself. This will be visible on your public profile.</FieldDescription>
                </FieldLabel>
                <FieldContent>
                  <Textarea id="field-desc-bio" placeholder="I'm a designer passionate about..." />
                </FieldContent>
              </Field>
              <Field orientation="responsive">
                <FieldLabel htmlFor="field-desc-website">
                  <FieldTitle>Website</FieldTitle>
                  <FieldDescription>Optional. Include your personal website or portfolio.</FieldDescription>
                </FieldLabel>
                <FieldContent>
                  <Input id="field-desc-website" type="url" placeholder="https://example.com" />
                </FieldContent>
              </Field>
            </FieldGroup>
          </FieldSet>
        </Section>

        <Section title="With Errors" description="FieldError displays validation errors below form fields. Use data-invalid on Field and aria-invalid on inputs to trigger error styling. Errors automatically use destructive-foreground color.">
          <FieldSet>
            <FieldGroup>
              <Field orientation="responsive" data-invalid>
                <FieldLabel htmlFor="field-error-email">
                  <FieldTitle>Email address</FieldTitle>
                </FieldLabel>
                <FieldContent>
                  <Input id="field-error-email" type="email" placeholder="your@email.com" aria-invalid />
                </FieldContent>
                <FieldError errors={[{ message: "Please enter a valid email address" }]} />
              </Field>
              <Field orientation="responsive" data-invalid>
                <FieldLabel htmlFor="field-error-password">
                  <FieldTitle>Password</FieldTitle>
                  <FieldDescription>Must be at least 8 characters with uppercase, lowercase, and numbers</FieldDescription>
                </FieldLabel>
                <FieldContent>
                  <Input id="field-error-password" type="password" aria-invalid />
                </FieldContent>
                <FieldError errors={[{ message: "Password must be at least 8 characters" }]} />
              </Field>
              <Field orientation="responsive" data-invalid>
                <FieldLabel htmlFor="field-error-confirm">
                  <FieldTitle>Confirm password</FieldTitle>
                </FieldLabel>
                <FieldContent>
                  <Input id="field-error-confirm" type="password" aria-invalid />
                </FieldContent>
                <FieldError errors={[
                  { message: "Passwords do not match" },
                  { message: "Password is required" }
                ]} />
              </Field>
            </FieldGroup>
          </FieldSet>
        </Section>

        <Section title="With Checkboxes and Radios" description="Field components work seamlessly with checkboxes and radio buttons. The FieldLabel wraps both the FieldTitle and the control, maintaining proper spacing and alignment regardless of orientation.">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm">Checkboxes</Label>
              <FieldSet>
                <FieldGroup>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-checkbox-newsletter">
                      <FieldTitle>Subscribe to newsletter</FieldTitle>
                      <FieldDescription>Receive weekly updates about new features and tips</FieldDescription>
                    </FieldLabel>
                    <FieldContent>
                      <Checkbox id="field-checkbox-newsletter" />
                    </FieldContent>
                  </Field>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-checkbox-marketing">
                      <FieldTitle>Receive marketing emails</FieldTitle>
                      <FieldDescription>Get notified about special offers and promotions</FieldDescription>
                    </FieldLabel>
                    <FieldContent>
                      <Checkbox id="field-checkbox-marketing" />
                    </FieldContent>
                  </Field>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-checkbox-terms">
                      <FieldTitle>I agree to the terms and conditions</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Checkbox id="field-checkbox-terms" />
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Radio buttons</Label>
              <FieldSet>
                <FieldLegend variant="label">Notification preferences</FieldLegend>
                <FieldGroup>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-radio-all">
                      <FieldTitle>All notifications</FieldTitle>
                      <FieldDescription>Receive all notifications</FieldDescription>
                    </FieldLabel>
                    <FieldContent>
                      <RadioGroup defaultValue="all">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="all" id="field-radio-all" />
                          <Label htmlFor="field-radio-all">All</Label>
                        </div>
                      </RadioGroup>
                    </FieldContent>
                  </Field>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-radio-important">
                      <FieldTitle>Important only</FieldTitle>
                      <FieldDescription>Only receive important notifications</FieldDescription>
                    </FieldLabel>
                    <FieldContent>
                      <RadioGroup defaultValue="all">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="important" id="field-radio-important" />
                          <Label htmlFor="field-radio-important">Important</Label>
                        </div>
                      </RadioGroup>
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
          </div>
        </Section>

        <Section title="With Separators" description="FieldSeparator adds visual separation between groups of fields within a FieldGroup. Useful for organizing long forms into logical sections.">
          <FieldSet>
            <FieldLegend>Account settings</FieldLegend>
            <FieldGroup>
              <Field orientation="responsive">
                <FieldLabel htmlFor="field-sep-email">
                  <FieldTitle>Email</FieldTitle>
                </FieldLabel>
                <FieldContent>
                  <Input id="field-sep-email" type="email" placeholder="your@email.com" />
                </FieldContent>
              </Field>
              <Field orientation="responsive">
                <FieldLabel htmlFor="field-sep-password">
                  <FieldTitle>Password</FieldTitle>
                </FieldLabel>
                <FieldContent>
                  <Input id="field-sep-password" type="password" />
                </FieldContent>
              </Field>
              <FieldSeparator>Security</FieldSeparator>
              <Field orientation="responsive">
                <FieldLabel htmlFor="field-sep-2fa">
                  <FieldTitle>Two-factor authentication</FieldTitle>
                  <FieldDescription>Add an extra layer of security to your account</FieldDescription>
                </FieldLabel>
                <FieldContent>
                  <Switch id="field-sep-2fa" />
                </FieldContent>
              </Field>
            </FieldGroup>
          </FieldSet>
        </Section>

        <Section title="Usage Examples" description="Field components integrated into common form patterns and real-world scenarios.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Sign up form */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Sign up form</TypographyH4>
              <FieldSet>
                <FieldGroup>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-example-signup-name">
                      <FieldTitle>Full name</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-example-signup-name" placeholder="John Doe" />
                    </FieldContent>
                  </Field>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-example-signup-email">
                      <FieldTitle>Email</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-example-signup-email" type="email" placeholder="your@email.com" />
                    </FieldContent>
                  </Field>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-example-signup-password">
                      <FieldTitle>Password</FieldTitle>
                      <FieldDescription>At least 8 characters</FieldDescription>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-example-signup-password" type="password" />
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>

            {/* Profile settings */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Profile settings</TypographyH4>
              <FieldSet>
                <FieldLegend variant="label">Personal information</FieldLegend>
                <FieldGroup>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-example-profile-name">
                      <FieldTitle>Display name</FieldTitle>
                      <FieldDescription>This is how your name appears to others</FieldDescription>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-example-profile-name" placeholder="John Doe" />
                    </FieldContent>
                  </Field>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-example-profile-bio">
                      <FieldTitle>Bio</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Textarea id="field-example-profile-bio" placeholder="Tell us about yourself..." />
                    </FieldContent>
                  </Field>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-example-profile-location">
                      <FieldTitle>Location</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-example-profile-location" placeholder="City, Country" />
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>

            {/* Preferences */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Preferences</TypographyH4>
              <FieldSet>
                <FieldLegend variant="label">Notifications</FieldLegend>
                <FieldGroup>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-example-notif-email">
                      <FieldTitle>Email notifications</FieldTitle>
                      <FieldDescription>Receive notifications via email</FieldDescription>
                    </FieldLabel>
                    <FieldContent>
                      <Switch id="field-example-notif-email" />
                    </FieldContent>
                  </Field>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-example-notif-push">
                      <FieldTitle>Push notifications</FieldTitle>
                      <FieldDescription>Receive push notifications on your device</FieldDescription>
                    </FieldLabel>
                    <FieldContent>
                      <Switch id="field-example-notif-push" />
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>

            {/* Billing form */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Billing information</TypographyH4>
              <FieldSet>
                <FieldGroup>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-example-billing-name">
                      <FieldTitle>Cardholder name</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-example-billing-name" placeholder="John Doe" />
                    </FieldContent>
                  </Field>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-example-billing-card">
                      <FieldTitle>Card number</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-example-billing-card" placeholder="1234 5678 9012 3456" />
                    </FieldContent>
                  </Field>
                  <div className="grid grid-cols-2 gap-3">
                    <Field orientation="responsive">
                      <FieldLabel htmlFor="field-example-billing-expiry">
                        <FieldTitle>Expiry</FieldTitle>
                      </FieldLabel>
                      <FieldContent>
                        <Input id="field-example-billing-expiry" placeholder="MM/YY" />
                      </FieldContent>
                    </Field>
                    <Field orientation="responsive">
                      <FieldLabel htmlFor="field-example-billing-cvv">
                        <FieldTitle>CVV</FieldTitle>
                      </FieldLabel>
                      <FieldContent>
                        <Input id="field-example-billing-cvv" placeholder="123" />
                      </FieldContent>
                    </Field>
                  </div>
                </FieldGroup>
              </FieldSet>
            </div>

            {/* Contact form */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Contact form</TypographyH4>
              <FieldSet>
                <FieldGroup>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-example-contact-subject">
                      <FieldTitle>Subject</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-example-contact-subject" placeholder="How can we help?" />
                    </FieldContent>
                  </Field>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-example-contact-message">
                      <FieldTitle>Message</FieldTitle>
                      <FieldDescription>Please provide as much detail as possible</FieldDescription>
                    </FieldLabel>
                    <FieldContent>
                      <Textarea id="field-example-contact-message" placeholder="Your message..." rows={4} />
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>

            {/* Form with errors */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Form validation</TypographyH4>
              <FieldSet>
                <FieldGroup>
                  <Field orientation="responsive" data-invalid>
                    <FieldLabel htmlFor="field-example-error-email">
                      <FieldTitle>Email</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-example-error-email" type="email" placeholder="your@email.com" aria-invalid />
                    </FieldContent>
                    <FieldError errors={[{ message: "Please enter a valid email address" }]} />
                  </Field>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="field-example-error-phone">
                      <FieldTitle>Phone number</FieldTitle>
                      <FieldDescription>Optional</FieldDescription>
                    </FieldLabel>
                    <FieldContent>
                      <Input id="field-example-error-phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  chart: {
    title: "Chart",
    description: "Recharts primitives styled with the same semantic palette.",
    body: (
      <Section title="Quarterly view">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barGap={6}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis dataKey="label" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <RechartsTooltip cursor={{ fill: "var(--semantic-surface-subdued)" }} />
              <Bar dataKey="main" radius={[6, 6, 0, 0]} fill="var(--semantic-surface-interaction-strong)" />
              <Bar dataKey="secondary" radius={[6, 6, 0, 0]} fill="var(--semantic-surface-interaction-subtle)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Section>
    ),
  },
  kbd: {
    title: "Kbd",
    description: "Display keyboard shortcuts and key combinations in your interface. The Kbd component provides a consistent way to show users which keys to press.",
    body: (
      <>
        <Section title="Overview" description="The Kbd component displays keyboard shortcuts with a subtle background and rounded corners. Use KbdGroup to combine multiple keys into a single shortcut.">
          <div className="flex flex-wrap items-center gap-4">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <span>+</span>
              <Kbd>K</Kbd>
            </KbdGroup>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <span>+</span>
              <Kbd>⇧</Kbd>
              <span>+</span>
              <Kbd>P</Kbd>
            </KbdGroup>
          </div>
        </Section>

        <Section title="Basic Usage" description="Simple keyboard shortcuts for common actions.">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Search:</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <span>+</span>
                <Kbd>K</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">New file:</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <span>+</span>
                <Kbd>N</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Save:</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <span>+</span>
                <Kbd>S</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Undo:</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <span>+</span>
                <Kbd>Z</Kbd>
              </KbdGroup>
            </div>
          </div>
        </Section>

        <Section title="Key Combinations" description="Complex shortcuts with multiple modifier keys.">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground w-32">Command palette:</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <span>+</span>
                <Kbd>⇧</Kbd>
                <span>+</span>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground w-32">Find in files:</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <span>+</span>
                <Kbd>⇧</Kbd>
                <span>+</span>
                <Kbd>F</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground w-32">Toggle sidebar:</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <span>+</span>
                <Kbd>B</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground w-32">Close tab:</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <span>+</span>
                <Kbd>W</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground w-32">Delete line:</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <span>+</span>
                <Kbd>⇧</Kbd>
                <span>+</span>
                <Kbd>K</Kbd>
              </KbdGroup>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Keyboard shortcuts integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Menu item with shortcut */}
            <div className="flex items-center justify-between p-3 rounded-lg border bg-card break-inside-avoid">
              <div className="flex items-center gap-2">
                <MaterialSymbol name="search" size={16} weight={300} className="text-semantic-icon-subdued" />
                <span className="text-sm">Search</span>
              </div>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <span>+</span>
                <Kbd>K</Kbd>
              </KbdGroup>
            </div>

            {/* Command palette item */}
            <div className="flex items-center justify-between p-3 rounded-lg border bg-card break-inside-avoid">
              <div className="flex items-center gap-2">
                <MaterialSymbol name="code" size={16} weight={300} className="text-semantic-icon-subdued" />
                <span className="text-sm">Open command palette</span>
              </div>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <span>+</span>
                <Kbd>⇧</Kbd>
                <span>+</span>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>

            {/* Tooltip with shortcut */}
            <div className="p-4 rounded-lg border bg-card space-y-2 break-inside-avoid">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <MaterialSymbol name="settings" size={16} weight={300} />
                </Button>
                <span className="text-sm text-muted-foreground">Hover to see shortcut</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Press</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <span>+</span>
                  <Kbd>,</Kbd>
                </KbdGroup>
                <span>to open settings</span>
              </div>
            </div>

            {/* Help text with shortcuts */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Keyboard shortcuts</h4>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Save file</span>
                  <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <span>+</span>
                    <Kbd>S</Kbd>
                  </KbdGroup>
                </div>
                <div className="flex items-center justify-between">
                  <span>New file</span>
                  <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <span>+</span>
                    <Kbd>N</Kbd>
                  </KbdGroup>
                </div>
                <div className="flex items-center justify-between">
                  <span>Find and replace</span>
                  <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <span>+</span>
                    <Kbd>⇧</Kbd>
                    <span>+</span>
                    <Kbd>H</Kbd>
                  </KbdGroup>
                </div>
              </div>
            </div>

            {/* Search bar hint */}
            <div className="p-3 rounded-lg border bg-card break-inside-avoid">
              <div className="flex items-center gap-2">
                <MaterialSymbol name="search" size={16} weight={300} className="text-semantic-icon-subdued" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"
                />
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <span>+</span>
                  <Kbd>K</Kbd>
                </KbdGroup>
              </div>
            </div>

            {/* Context menu item */}
            <div className="p-3 rounded-lg border bg-card break-inside-avoid">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MaterialSymbol name="content_copy" size={16} weight={300} className="text-semantic-icon-subdued" />
                  <span className="text-sm">Copy</span>
                </div>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <span>+</span>
                  <Kbd>C</Kbd>
                </KbdGroup>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  toggle: {
    title: "Toggle",
    description: "A two-state button that can be toggled on or off. Toggle buttons are useful for actions that can be turned on or off, like bold text or grid view.",
    body: (
      <>
        <Section title="Overview" description="Toggle buttons provide a way to switch between two states. They maintain their pressed state until clicked again, making them ideal for persistent settings.">
          <div className="flex flex-wrap items-center gap-3">
            <Toggle aria-label="Toggle bold">
              <MaterialSymbol name="format_bold" size={16} weight={300} />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <MaterialSymbol name="format_italic" size={16} weight={300} />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <MaterialSymbol name="format_underlined" size={16} weight={300} />
            </Toggle>
          </div>
        </Section>

        <Section title="Variants" description="Toggle buttons come in two variants: default (transparent) and outline (with border).">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">Default</span>
              <Toggle aria-label="Toggle bold">
                <MaterialSymbol name="format_bold" size={16} weight={300} />
                Bold
              </Toggle>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">Outline</span>
              <Toggle variant="outline" aria-label="Toggle italic">
                <MaterialSymbol name="format_italic" size={16} weight={300} />
                Italic
              </Toggle>
            </div>
          </div>
        </Section>

        <Section title="Sizes" description="Toggle buttons are available in three sizes: small, default, and large.">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">Small</span>
              <Toggle size="sm" aria-label="Toggle small">
                <MaterialSymbol name="format_bold" size={16} weight={300} />
              </Toggle>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">Default</span>
              <Toggle aria-label="Toggle default">
                <MaterialSymbol name="format_bold" size={16} weight={300} />
              </Toggle>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">Large</span>
              <Toggle size="lg" aria-label="Toggle large">
                <MaterialSymbol name="format_bold" size={16} weight={300} />
              </Toggle>
            </div>
          </div>
        </Section>

        <Section title="States" description="Toggle buttons support various states including pressed, disabled, and with text labels.">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">Unpressed</span>
              <Toggle aria-label="Toggle unpressed">
                <MaterialSymbol name="format_bold" size={16} weight={300} />
                Bold
              </Toggle>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">Pressed</span>
              <Toggle pressed aria-label="Toggle pressed">
                <MaterialSymbol name="format_bold" size={16} weight={300} />
                Bold
              </Toggle>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">Disabled</span>
              <Toggle disabled aria-label="Toggle disabled">
                <MaterialSymbol name="format_bold" size={16} weight={300} />
                Bold
              </Toggle>
            </div>
          </div>
        </Section>

        <Section title="With Icons" description="Toggle buttons can display icons alone or combined with text labels.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Icon only</p>
              <div className="flex flex-wrap items-center gap-3">
                <Toggle aria-label="Toggle bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                </Toggle>
                <Toggle aria-label="Toggle underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                </Toggle>
                <Toggle aria-label="Toggle strikethrough">
                  <MaterialSymbol name="strikethrough_s" size={16} weight={300} />
                </Toggle>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">With labels</p>
              <div className="flex flex-wrap items-center gap-3">
                <Toggle aria-label="Toggle bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                  Bold
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                  Italic
                </Toggle>
                <Toggle aria-label="Toggle underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                  Underline
                </Toggle>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Toggle Groups" description="Group multiple toggle buttons together for related actions. Toggle groups can be single-select or multi-select.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Single select (default)</p>
              <ToggleGroup type="single" defaultValue="bold">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Multiple select</p>
              <ToggleGroup type="multiple" defaultValue={["bold"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">With spacing</p>
              <ToggleGroup type="multiple" spacing={8}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                  Bold
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                  Italic
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                  Underline
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Outline variant</p>
              <ToggleGroup type="multiple" variant="outline">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                  Bold
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                  Italic
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                  Underline
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Toggle buttons integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Text editor toolbar */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Text formatting</h4>
              <ToggleGroup type="multiple" variant="outline">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
                  <MaterialSymbol name="strikethrough_s" size={16} weight={300} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* View options */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">View options</h4>
              <div className="flex flex-wrap gap-2">
                <Toggle pressed aria-label="Grid view">
                  <MaterialSymbol name="grid_view" size={16} weight={300} />
                  Grid
                </Toggle>
                <Toggle aria-label="List view">
                  <MaterialSymbol name="view_list" size={16} weight={300} />
                  List
                </Toggle>
                <Toggle aria-label="Compact view">
                  <MaterialSymbol name="view_compact" size={16} weight={300} />
                  Compact
                </Toggle>
              </div>
            </div>

            {/* Filter options */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Filter by</h4>
              <ToggleGroup type="multiple" variant="outline">
                <ToggleGroupItem value="active" aria-label="Active">
                  Active
                </ToggleGroupItem>
                <ToggleGroupItem value="completed" aria-label="Completed">
                  Completed
                </ToggleGroupItem>
                <ToggleGroupItem value="archived" aria-label="Archived">
                  Archived
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Sort options */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Sort by</h4>
              <ToggleGroup type="single" defaultValue="date">
                <ToggleGroupItem value="date" aria-label="Date">
                  Date
                </ToggleGroupItem>
                <ToggleGroupItem value="name" aria-label="Name">
                  Name
                </ToggleGroupItem>
                <ToggleGroupItem value="size" aria-label="Size">
                  Size
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Alignment options */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Text alignment</h4>
              <ToggleGroup type="single" variant="outline">
                <ToggleGroupItem value="left" aria-label="Align left">
                  <MaterialSymbol name="format_align_left" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <MaterialSymbol name="format_align_center" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <MaterialSymbol name="format_align_right" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="justify" aria-label="Justify">
                  <MaterialSymbol name="format_align_justify" size={16} weight={300} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Settings panel */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Display settings</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Show grid</span>
                  <Toggle pressed aria-label="Show grid">
                    <MaterialSymbol name="grid_view" size={16} weight={300} />
                  </Toggle>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Show labels</span>
                  <Toggle aria-label="Show labels">
                    <MaterialSymbol name="label" size={16} weight={300} />
                  </Toggle>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Compact mode</span>
                  <Toggle aria-label="Compact mode">
                    <MaterialSymbol name="view_compact" size={16} weight={300} />
                  </Toggle>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "toggle-group": {
    title: "Toggle Group",
    description: "Group multiple toggle buttons together for related actions. Toggle groups provide a cohesive way to manage multiple toggle states, supporting both single-select and multi-select modes.",
    body: (
      <>
        <Section title="Overview" description="Toggle groups combine multiple toggle buttons into a single interactive unit. They maintain visual consistency and provide better UX for related options.">
          <div className="flex flex-wrap items-center gap-4">
            <ToggleGroup type="single" defaultValue="bold">
              <ToggleGroupItem value="bold" aria-label="Bold">
                <MaterialSymbol name="format_bold" size={16} weight={300} />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <MaterialSymbol name="format_italic" size={16} weight={300} />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <MaterialSymbol name="format_underlined" size={16} weight={300} />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </Section>

        <Section title="Selection Modes" description="Toggle groups support two selection modes: single-select (one active at a time) and multi-select (multiple active simultaneously).">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Single select</p>
              <p className="text-sm text-muted-foreground mb-3">Only one option can be active at a time. Useful for mutually exclusive choices like view modes or sort options.</p>
              <ToggleGroup type="single" defaultValue="grid">
                <ToggleGroupItem value="grid" aria-label="Grid view">
                  <MaterialSymbol name="grid_view" size={16} weight={300} />
                  Grid
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="List view">
                  <MaterialSymbol name="view_list" size={16} weight={300} />
                  List
                </ToggleGroupItem>
                <ToggleGroupItem value="compact" aria-label="Compact view">
                  <MaterialSymbol name="view_compact" size={16} weight={300} />
                  Compact
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Multiple select</p>
              <p className="text-sm text-muted-foreground mb-3">Multiple options can be active simultaneously. Perfect for filters or formatting options that can be combined.</p>
              <ToggleGroup type="multiple" defaultValue={["bold"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </Section>

        <Section title="Variants" description="Toggle groups support the same variants as individual toggles: default (transparent) and outline (with border).">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Default variant</p>
              <ToggleGroup type="multiple" defaultValue={["bold"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Outline variant</p>
              <ToggleGroup type="multiple" variant="outline" defaultValue={["bold"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </Section>

        <Section title="Spacing" description="Control the spacing between toggle items. Use spacing=0 for seamless groups, or a custom value for separated items.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2">No spacing (default)</p>
              <p className="text-sm text-muted-foreground mb-3">Items are seamlessly connected, creating a unified group appearance.</p>
              <ToggleGroup type="multiple" defaultValue={["bold"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">With spacing</p>
              <p className="text-sm text-muted-foreground mb-3">Items have visible gaps between them, useful when you want to emphasize individual options.</p>
              <ToggleGroup type="multiple" spacing={8} defaultValue={["bold"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                  Bold
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                  Italic
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                  Underline
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </Section>

        <Section title="Sizes" description="Toggle groups inherit size from their items. All items in a group share the same size for visual consistency.">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Small</p>
              <ToggleGroup type="multiple" size="sm" defaultValue={["bold"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Default</p>
              <ToggleGroup type="multiple" defaultValue={["bold"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Large</p>
              <ToggleGroup type="multiple" size="lg" defaultValue={["bold"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Toggle groups integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Text editor toolbar */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Text formatting toolbar</h4>
              <ToggleGroup type="multiple" variant="outline" defaultValue={["bold"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <MaterialSymbol name="format_bold" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <MaterialSymbol name="format_italic" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <MaterialSymbol name="format_underlined" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
                  <MaterialSymbol name="strikethrough_s" size={16} weight={300} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* View mode selector */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">View mode selector</h4>
              <ToggleGroup type="single" defaultValue="grid">
                <ToggleGroupItem value="grid" aria-label="Grid view">
                  <MaterialSymbol name="grid_view" size={16} weight={300} />
                  Grid
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="List view">
                  <MaterialSymbol name="view_list" size={16} weight={300} />
                  List
                </ToggleGroupItem>
                <ToggleGroupItem value="compact" aria-label="Compact view">
                  <MaterialSymbol name="view_compact" size={16} weight={300} />
                  Compact
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Filter options */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Filter by status</h4>
              <ToggleGroup type="multiple" variant="outline">
                <ToggleGroupItem value="active" aria-label="Active">
                  Active
                </ToggleGroupItem>
                <ToggleGroupItem value="completed" aria-label="Completed">
                  Completed
                </ToggleGroupItem>
                <ToggleGroupItem value="archived" aria-label="Archived">
                  Archived
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Sort options */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Sort by</h4>
              <ToggleGroup type="single" defaultValue="date">
                <ToggleGroupItem value="date" aria-label="Date">
                  Date
                </ToggleGroupItem>
                <ToggleGroupItem value="name" aria-label="Name">
                  Name
                </ToggleGroupItem>
                <ToggleGroupItem value="size" aria-label="Size">
                  Size
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Text alignment */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Text alignment</h4>
              <ToggleGroup type="single" variant="outline" defaultValue="left">
                <ToggleGroupItem value="left" aria-label="Align left">
                  <MaterialSymbol name="format_align_left" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <MaterialSymbol name="format_align_center" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <MaterialSymbol name="format_align_right" size={16} weight={300} />
                </ToggleGroupItem>
                <ToggleGroupItem value="justify" aria-label="Justify">
                  <MaterialSymbol name="format_align_justify" size={16} weight={300} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Color picker */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Text color</h4>
              <ToggleGroup type="single" variant="outline" spacing={4}>
                <ToggleGroupItem value="black" aria-label="Black" className="w-8 h-8 p-0">
                  <div className="w-4 h-4 rounded bg-black" />
                </ToggleGroupItem>
                <ToggleGroupItem value="red" aria-label="Red" className="w-8 h-8 p-0">
                  <div className="w-4 h-4 rounded bg-red-500" />
                </ToggleGroupItem>
                <ToggleGroupItem value="blue" aria-label="Blue" className="w-8 h-8 p-0">
                  <div className="w-4 h-4 rounded bg-blue-500" />
                </ToggleGroupItem>
                <ToggleGroupItem value="green" aria-label="Green" className="w-8 h-8 p-0">
                  <div className="w-4 h-4 rounded bg-green-500" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  tooltip: {
    title: "Tooltip",
    description: "Display contextual information when users hover over or focus on an element. Tooltips provide helpful hints and additional details without cluttering the interface.",
    body: (
      <>
        <Section title="Overview" description="Tooltips appear on hover or focus to provide additional context. They automatically position themselves relative to their trigger element.">
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <MaterialSymbol name="info" size={16} weight={300} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More information</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" disabled>
                  Disabled button
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This button is disabled</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </Section>

        <Section title="Placement" description="Tooltips can be positioned on any side of their trigger element. They automatically adjust to stay within the viewport.">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground">Top</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    <MaterialSymbol name="arrow_upward" size={16} weight={300} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Tooltip on top</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground">Right</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    <MaterialSymbol name="arrow_forward" size={16} weight={300} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Tooltip on right</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground">Bottom</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    <MaterialSymbol name="arrow_downward" size={16} weight={300} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Tooltip on bottom</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground">Left</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    <MaterialSymbol name="arrow_back" size={16} weight={300} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Tooltip on left</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Section>

        <Section title="With Icons" description="Tooltips work seamlessly with icon-only buttons and other icon elements to provide context.">
          <div className="flex flex-wrap items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MaterialSymbol name="settings" size={20} weight={300} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MaterialSymbol name="delete" size={20} weight={300} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete item</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MaterialSymbol name="edit" size={20} weight={300} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MaterialSymbol name="share" size={20} weight={300} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MaterialSymbol name="download" size={20} weight={300} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </Section>

        <Section title="With Keyboard Shortcuts" description="Tooltips can display keyboard shortcuts to help users learn efficient navigation.">
          <div className="flex flex-wrap items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <MaterialSymbol name="search" size={16} weight={300} />
                  Search
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center gap-2">
                  <span>Search</span>
                  <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <span>+</span>
                    <Kbd>K</Kbd>
                  </KbdGroup>
                </div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <MaterialSymbol name="settings" size={16} weight={300} />
                  Settings
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center gap-2">
                  <span>Open settings</span>
                  <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <span>+</span>
                    <Kbd>,</Kbd>
                  </KbdGroup>
                </div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <MaterialSymbol name="content_copy" size={16} weight={300} />
                  Copy
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center gap-2">
                  <span>Copy</span>
                  <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <span>+</span>
                    <Kbd>C</Kbd>
                  </KbdGroup>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </Section>

        <Section title="Rich Content" description="Tooltips can contain formatted text, multiple lines, and even interactive elements.">
          <div className="flex flex-wrap items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Multi-line tooltip</Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-normal">This is a longer tooltip that spans multiple lines to provide more detailed information.</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">With description</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="space-y-1">
                  <p className="font-normal">Tooltip title</p>
                  <p className="text-xs opacity-90">Additional description text</p>
                </div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary">Status badge</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-green-500" />
                  <span>Active status</span>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </Section>

        <Section title="Usage Examples" description="Tooltips integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Toolbar with tooltips */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Toolbar</h4>
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MaterialSymbol name="format_bold" size={16} weight={300} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex items-center gap-2">
                      <span>Bold</span>
                      <KbdGroup>
                        <Kbd>⌘</Kbd>
                        <span>+</span>
                        <Kbd>B</Kbd>
                      </KbdGroup>
                    </div>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MaterialSymbol name="format_italic" size={16} weight={300} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex items-center gap-2">
                      <span>Italic</span>
                      <KbdGroup>
                        <Kbd>⌘</Kbd>
                        <span>+</span>
                        <Kbd>I</Kbd>
                      </KbdGroup>
                    </div>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MaterialSymbol name="format_underlined" size={16} weight={300} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex items-center gap-2">
                      <span>Underline</span>
                      <KbdGroup>
                        <Kbd>⌘</Kbd>
                        <span>+</span>
                        <Kbd>U</Kbd>
                      </KbdGroup>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            {/* Action buttons with tooltips */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Actions</h4>
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MaterialSymbol name="edit" size={16} weight={300} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit item</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MaterialSymbol name="content_copy" size={16} weight={300} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Duplicate</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-[var(--destructive-foreground)]">
                      <MaterialSymbol name="delete" size={16} weight={300} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete permanently</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            {/* Status indicators */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Status indicators</h4>
              <div className="flex items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-green-500" />
                      <span className="text-sm">Active</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This item is currently active</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-yellow-500" />
                      <span className="text-sm">Pending</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Waiting for approval</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            {/* Disabled button tooltip */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Disabled state</h4>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Button variant="outline" disabled>
                      Save changes
                    </Button>
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>You need to make changes first</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Form field help */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Form help</h4>
              <div className="flex items-center gap-2">
                <Label htmlFor="password">Password</Label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-4 w-4">
                      <MaterialSymbol name="help" size={14} weight={300} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Password must be at least 8 characters long and include uppercase, lowercase, and numbers.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Input id="password" type="password" placeholder="Enter password" />
            </div>

            {/* Navigation item */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <h4 className="text-sm font-normal">Collapsed sidebar</h4>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    <MaterialSymbol name="dashboard" size={16} weight={300} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Dashboard</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  typography: {
    title: "Typography",
    description: "Consistent typography components for headings, paragraphs, blockquotes, and code. These components ensure proper semantic HTML and consistent styling across your application.",
    body: (
      <>
        <Section title="Overview" description="Typography components provide semantic HTML elements with consistent styling. Use them to maintain visual hierarchy and accessibility.">
          <div className="space-y-4">
            <TypographyH1>Heading 1</TypographyH1>
            <TypographyH2>Heading 2</TypographyH2>
            <TypographyH3>Heading 3</TypographyH3>
            <TypographyH4>Heading 4</TypographyH4>
            <TypographyP>
              This is a paragraph. It provides body text with comfortable line height for readability.
            </TypographyP>
          </div>
        </Section>

        <Section title="Headings" description="Six levels of headings to create a clear information hierarchy. Each heading has appropriate sizing and weight.">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-2">H1 - Page title</p>
              <TypographyH1>The quick brown fox jumps over the lazy dog</TypographyH1>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">H2 - Section title</p>
              <TypographyH2>The quick brown fox jumps over the lazy dog</TypographyH2>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">H3 - Subsection title</p>
              <TypographyH3>The quick brown fox jumps over the lazy dog</TypographyH3>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">H4 - Minor heading</p>
              <TypographyH4>The quick brown fox jumps over the lazy dog</TypographyH4>
            </div>
          </div>
        </Section>

        <Section title="Paragraph" description="Body text component with optimal line height for readability. Use for main content and descriptions.">
          <div className="space-y-4">
            <TypographyP>
              This is a paragraph of text. It demonstrates how body text appears with comfortable line height
              for optimal readability. Paragraphs should be used for main content and descriptions.
            </TypographyP>
            <TypographyP>
              Multiple paragraphs create natural spacing between blocks of text. This helps readers
              distinguish between different ideas and maintain focus while reading.
            </TypographyP>
          </div>
        </Section>

        <Section title="Blockquote" description="Use blockquotes to highlight quotes, testimonials, or important excerpts from other sources.">
          <div className="space-y-4">
            <TypographyBlockquote>
              "The best way to predict the future is to invent it."
            </TypographyBlockquote>
            <TypographyBlockquote>
              This is a longer blockquote that spans multiple lines. It demonstrates how blockquotes
              can be used to highlight important quotes or excerpts from other sources. The left border
              and italic styling help distinguish it from regular paragraphs.
            </TypographyBlockquote>
          </div>
        </Section>

        <Section title="Code" description="Inline code component for displaying code snippets, variable names, or technical terms within text.">
          <div className="space-y-4">
            <TypographyP>
              Use <TypographyCode>TypographyCode</TypographyCode> for inline code snippets like
              variable names, function names, or <TypographyCode>className</TypographyCode> attributes.
            </TypographyP>
            <TypographyP>
              You can also use it for technical terms like <TypographyCode>npm install</TypographyCode> or
              <TypographyCode>git commit</TypographyCode> to distinguish them from regular text.
            </TypographyP>
          </div>
        </Section>

        <Section title="Combined Example" description="A complete example showing how typography components work together to create a well-structured document.">
          <div className="space-y-6 max-w-3xl">
            <TypographyH1>Document Title</TypographyH1>
            <TypographyP>
              This is the introduction paragraph. It provides context and sets up the main content
              that follows. Good typography helps guide readers through your content.
            </TypographyP>
            
            <TypographyH2>First Section</TypographyH2>
            <TypographyP>
              Sections help organize content into logical groups. Each section can have its own
              heading and multiple paragraphs.
            </TypographyP>
            
            <TypographyH3>Subsection</TypographyH3>
            <TypographyP>
              Subsections provide additional structure within sections. They help break down
              complex topics into manageable pieces.
            </TypographyP>
            
            <TypographyH4>Minor Point</TypographyH4>
            <TypographyP>
              Minor headings are useful for highlighting specific points or details within
              a subsection.
            </TypographyP>
            
            <TypographyBlockquote>
              "Typography is the craft of endowing human language with a durable visual form."
            </TypographyBlockquote>
            
            <TypographyP>
              When you need to reference code, use <TypographyCode>TypographyCode</TypographyCode> for
              inline references. For example, the component <TypographyCode>TypographyH1</TypographyCode> renders
              an H1 heading element.
            </TypographyP>
          </div>
        </Section>

        <Section title="Usage Examples" description="Typography components integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Article preview */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH3 className="text-lg">Article Preview</TypographyH3>
              <TypographyP className="text-sm">
                This is a preview of an article. The heading draws attention while the paragraph
                provides a brief summary of the content.
              </TypographyP>
            </div>

            {/* Code documentation */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Component API</TypographyH4>
              <TypographyP className="text-sm">
                Use <TypographyCode>TypographyH1</TypographyCode> for main page titles.
                The component accepts standard HTML attributes.
              </TypographyP>
            </div>

            {/* Quote card */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyBlockquote className="text-sm">
                "Good design is as little design as possible."
              </TypographyBlockquote>
              <TypographyP className="text-xs text-muted-foreground">— Dieter Rams</TypographyP>
            </div>

            {/* Blog post excerpt */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH3 className="text-lg">Getting Started</TypographyH3>
              <TypographyP className="text-sm">
                Learn how to use typography components in your project. Start by importing
                the components you need from <TypographyCode>@/components/ui/typography</TypographyCode>.
              </TypographyP>
            </div>

            {/* Documentation section */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Props</TypographyH4>
              <div className="space-y-2 text-sm">
                <div>
                  <TypographyCode>className</TypographyCode> - Additional CSS classes
                </div>
                <div>
                  <TypographyCode>children</TypographyCode> - Content to display
                </div>
              </div>
            </div>

            {/* Feature description */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Accessibility</TypographyH4>
              <TypographyP className="text-sm">
                All typography components use semantic HTML elements, ensuring proper screen reader
                support and maintaining document structure.
              </TypographyP>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "aspect-ratio": {
    title: "Aspect Ratio",
    description: "Maintain a consistent aspect ratio for images, videos, and other content. The AspectRatio component ensures your content displays correctly regardless of its natural dimensions.",
    body: (
      <>
        <Section title="Overview" description="AspectRatio maintains a specific width-to-height ratio for its content, preventing layout shifts and ensuring consistent display across different screen sizes.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">16:9 (Video)</p>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
                  16:9
                </div>
              </AspectRatio>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">4:3 (Classic)</p>
              <AspectRatio ratio={4 / 3} className="bg-muted rounded-md overflow-hidden">
                <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
                  4:3
                </div>
              </AspectRatio>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">1:1 (Square)</p>
              <AspectRatio ratio={1} className="bg-muted rounded-md overflow-hidden">
                <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
                  1:1
                </div>
              </AspectRatio>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">21:9 (Ultrawide)</p>
              <AspectRatio ratio={21 / 9} className="bg-muted rounded-md overflow-hidden">
                <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
                  21:9
                </div>
              </AspectRatio>
            </div>
          </div>
        </Section>

        <Section title="Common Ratios" description="Standard aspect ratios for different types of content. Choose the ratio that matches your content type.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">16:9 - Video & Widescreen</p>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden border">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
                  alt="Landscape"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">4:3 - Classic Display</p>
              <AspectRatio ratio={4 / 3} className="bg-muted rounded-md overflow-hidden border">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
                  alt="Forest"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">1:1 - Square</p>
              <AspectRatio ratio={1} className="bg-muted rounded-md overflow-hidden border">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
                  alt="Portrait"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </Section>

        <Section title="With Images" description="Use AspectRatio to ensure images maintain their intended proportions and prevent layout shifts.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Landscape image (16:9)</p>
              <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden border">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
                  alt="Mountain landscape"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Portrait image (3:4)</p>
              <AspectRatio ratio={3 / 4} className="rounded-lg overflow-hidden border">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=faces"
                  alt="Portrait"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </Section>

        <Section title="With Video" description="AspectRatio is essential for video embeds to maintain proper proportions and prevent layout shifts.">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Video embed (16:9)</p>
              <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden border bg-muted">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-2">
                    <MaterialSymbol name="play_circle" size={48} weight={300} className="text-muted-foreground mx-auto" />
                    <p className="text-sm text-muted-foreground">Video player</p>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </Section>

        <Section title="In Cards" description="AspectRatio works seamlessly with Card components to create consistent image cards.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
                  alt="Card image"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle className="text-base">Card with image</CardTitle>
                <CardDescription>Image maintains 16:9 ratio</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <AspectRatio ratio={1} className="overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
                  alt="Square image"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle className="text-base">Square image card</CardTitle>
                <CardDescription>Perfect for avatars or thumbnails</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
                  alt="Classic ratio"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle className="text-base">Classic ratio</CardTitle>
                <CardDescription>4:3 aspect ratio</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Section>

        <Section title="Usage Examples" description="AspectRatio integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Image gallery */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Image gallery</TypographyH4>
              <div className="grid grid-cols-2 gap-2">
                <AspectRatio ratio={1} className="rounded overflow-hidden border">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
                    alt="Thumbnail"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <AspectRatio ratio={1} className="rounded overflow-hidden border">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
                    alt="Thumbnail"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <AspectRatio ratio={1} className="rounded overflow-hidden border">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
                    alt="Thumbnail"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <AspectRatio ratio={1} className="rounded overflow-hidden border">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
                    alt="Thumbnail"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>

            {/* Hero image */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Hero section</TypographyH4>
              <AspectRatio ratio={21 / 9} className="rounded overflow-hidden border">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=514&fit=crop"
                  alt="Hero"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>

            {/* Product card */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <AspectRatio ratio={1} className="rounded overflow-hidden border mb-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
                  alt="Product"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <TypographyH4 className="text-base">Product name</TypographyH4>
              <TypographyP className="text-sm text-muted-foreground">Product description</TypographyP>
            </div>

            {/* Video thumbnail */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Video thumbnail</TypographyH4>
              <AspectRatio ratio={16 / 9} className="rounded overflow-hidden border bg-muted relative">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
                  alt="Video thumbnail"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MaterialSymbol name="play_circle" size={48} weight={300} className="text-white drop-shadow-lg" />
                </div>
              </AspectRatio>
            </div>

            {/* Banner */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Banner image</TypographyH4>
              <AspectRatio ratio={3 / 1} className="rounded overflow-hidden border">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop"
                  alt="Banner"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>

            {/* Avatar grid */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Avatar grid</TypographyH4>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <AspectRatio key={i} ratio={1} className="rounded-full overflow-hidden border">
                    <img
                      src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces`}
                      alt={`Avatar ${i}`}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  empty: {
    title: "Empty",
    description: "Display empty states when there's no content to show. Empty states help users understand what's missing and guide them toward next actions.",
    body: (
      <>
        <Section title="Overview" description="Empty states provide helpful feedback when lists, search results, or content areas are empty. They guide users and suggest actions.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Empty
              title="No results found"
              description="Try adjusting your search or filter criteria."
              icon={<MaterialSymbol name="search_off" size={48} weight={300} className="text-muted-foreground" />}
            />
            <Empty
              title="No items yet"
              description="Get started by creating your first item."
              icon={<MaterialSymbol name="inbox" size={48} weight={300} className="text-muted-foreground" />}
            />
          </div>
        </Section>

        <Section title="Basic Usage" description="Simple empty states with title and optional description.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Title only</p>
              <Empty title="Nothing here" />
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">With description</p>
              <Empty
                title="No data available"
                description="There's nothing to display at the moment."
              />
            </div>
          </div>
        </Section>

        <Section title="With Icons" description="Icons help communicate the empty state more effectively. Use Material Symbols with appropriate semantic meaning.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Empty
              title="No search results"
              description="We couldn't find anything matching your search."
              icon={<MaterialSymbol name="search_off" size={48} weight={300} className="text-muted-foreground" />}
            />
            <Empty
              title="No items"
              description="Your list is empty. Add items to get started."
              icon={<MaterialSymbol name="inbox" size={48} weight={300} className="text-muted-foreground" />}
            />
            <Empty
              title="No notifications"
              description="You're all caught up! No new notifications."
              icon={<MaterialSymbol name="notifications_off" size={48} weight={300} className="text-muted-foreground" />}
            />
            <Empty
              title="No favorites"
              description="Items you favorite will appear here."
              icon={<MaterialSymbol name="favorite_border" size={48} weight={300} className="text-muted-foreground" />}
            />
            <Empty
              title="No files"
              description="Upload files to get started."
              icon={<MaterialSymbol name="folder_off" size={48} weight={300} className="text-muted-foreground" />}
            />
            <Empty
              title="No connections"
              description="Connect with others to see activity here."
              icon={<MaterialSymbol name="people_outline" size={48} weight={300} className="text-muted-foreground" />}
            />
          </div>
        </Section>

        <Section title="With Actions" description="Add action buttons to guide users toward next steps when content is empty.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Empty
              title="No projects yet"
              description="Create your first project to get started."
              icon={<MaterialSymbol name="folder_add" size={48} weight={300} className="text-muted-foreground" />}
            >
              <Button>
                <MaterialSymbol name="add" size={16} weight={300} />
                Create project
              </Button>
            </Empty>
            <Empty
              title="No tasks"
              description="Add tasks to organize your work."
              icon={<MaterialSymbol name="task_alt" size={48} weight={300} className="text-muted-foreground" />}
            >
              <div className="flex gap-2">
                <Button variant="outline">Import tasks</Button>
                <Button>
                  <MaterialSymbol name="add" size={16} weight={300} />
                  Add task
                </Button>
              </div>
            </Empty>
          </div>
        </Section>

        <Section title="Different States" description="Empty states for various scenarios and contexts.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Search empty</p>
              <Empty
                title="No results found"
                description="Try different keywords or remove filters."
                icon={<MaterialSymbol name="search_off" size={48} weight={300} className="text-muted-foreground" />}
              />
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Filter empty</p>
              <Empty
                title="No items match"
                description="Clear filters to see all items."
                icon={<MaterialSymbol name="filter_alt_off" size={48} weight={300} className="text-muted-foreground" />}
              >
                <Button variant="outline">Clear filters</Button>
              </Empty>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Error state</p>
              <Empty
                title="Something went wrong"
                description="We couldn't load the content. Please try again."
                icon={<MaterialSymbol name="error_outline" size={48} weight={300} className="text-[var(--destructive-foreground)]" />}
              >
                <Button variant="outline">Retry</Button>
              </Empty>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Permission empty</p>
              <Empty
                title="Access restricted"
                description="You don't have permission to view this content."
                icon={<MaterialSymbol name="lock_outline" size={48} weight={300} className="text-muted-foreground" />}
              />
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Empty states integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Search results */}
            <div className="p-4 rounded-lg border bg-card break-inside-avoid">
              <TypographyH4 className="text-base mb-3">Search results</TypographyH4>
              <Empty
                title="No matches"
                description="We couldn't find anything matching 'example search'."
                icon={<MaterialSymbol name="search_off" size={40} weight={300} className="text-muted-foreground" />}
              />
            </div>

            {/* Task list */}
            <div className="p-4 rounded-lg border bg-card break-inside-avoid">
              <TypographyH4 className="text-base mb-3">Tasks</TypographyH4>
              <Empty
                title="No tasks"
                description="Create your first task to get started."
                icon={<MaterialSymbol name="task_alt" size={40} weight={300} className="text-muted-foreground" />}
              >
                <Button size="sm">
                  <MaterialSymbol name="add" size={16} weight={300} />
                  Add task
                </Button>
              </Empty>
            </div>

            {/* File browser */}
            <div className="p-4 rounded-lg border bg-card break-inside-avoid">
              <TypographyH4 className="text-base mb-3">Files</TypographyH4>
              <Empty
                title="No files"
                description="Upload or create files to get started."
                icon={<MaterialSymbol name="folder_off" size={40} weight={300} className="text-muted-foreground" />}
              >
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <MaterialSymbol name="upload" size={16} weight={300} />
                    Upload
                  </Button>
                  <Button size="sm">
                    <MaterialSymbol name="add" size={16} weight={300} />
                    New file
                  </Button>
                </div>
              </Empty>
            </div>

            {/* Notifications */}
            <div className="p-4 rounded-lg border bg-card break-inside-avoid">
              <TypographyH4 className="text-base mb-3">Notifications</TypographyH4>
              <Empty
                title="All caught up"
                description="You don't have any notifications right now."
                icon={<MaterialSymbol name="notifications_off" size={40} weight={300} className="text-muted-foreground" />}
              />
            </div>

            {/* Favorites */}
            <div className="p-4 rounded-lg border bg-card break-inside-avoid">
              <TypographyH4 className="text-base mb-3">Favorites</TypographyH4>
              <Empty
                title="No favorites yet"
                description="Items you favorite will appear here."
                icon={<MaterialSymbol name="favorite_border" size={40} weight={300} className="text-muted-foreground" />}
              />
            </div>

            {/* Error state */}
            <div className="p-4 rounded-lg border bg-card break-inside-avoid">
              <TypographyH4 className="text-base mb-3">Error</TypographyH4>
              <Empty
                title="Failed to load"
                description="Something went wrong. Please try again."
                icon={<MaterialSymbol name="error_outline" size={40} weight={300} className="text-[var(--destructive-foreground)]" />}
              >
                <Button size="sm" variant="outline">Retry</Button>
              </Empty>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  item: {
    title: "Item",
    description: "A reusable list item component with hover and selected states. Use Item to create consistent, interactive list elements in menus, sidebars, and navigation.",
    body: (
      <>
        <Section title="Overview" description="Item provides a consistent way to display list items with hover effects and selection states. It's perfect for menus, sidebars, and navigation lists.">
          <div className="max-w-xs space-y-1 rounded-lg border p-2">
            <Item>Dashboard</Item>
            <Item selected>Projects</Item>
            <Item>Settings</Item>
            <Item>Profile</Item>
          </div>
        </Section>

        <Section title="States" description="Item supports default, hover, and selected states. The selected state uses accent colors to indicate the active item.">
          <div className="max-w-xs space-y-1 rounded-lg border p-2">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Default state</p>
              <Item>Default item</Item>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Selected state</p>
              <Item selected>Selected item</Item>
            </div>
          </div>
        </Section>

        <Section title="With Icons" description="Add icons to items to enhance visual clarity and improve navigation.">
          <div className="max-w-xs space-y-1 rounded-lg border p-2">
            <Item>
              <MaterialSymbol name="dashboard" size={16} weight={300} className="text-semantic-icon-subdued" />
              Dashboard
            </Item>
            <Item selected>
              <MaterialSymbol name="folder" size={16} weight={300} className="text-semantic-icon-subdued" />
              Projects
            </Item>
            <Item>
              <MaterialSymbol name="settings" size={16} weight={300} className="text-semantic-icon-subdued" />
              Settings
            </Item>
            <Item>
              <MaterialSymbol name="person" size={16} weight={300} className="text-semantic-icon-subdued" />
              Profile
            </Item>
          </div>
        </Section>

        <Section title="In Lists" description="Use Item components to create consistent list interfaces with proper spacing and interaction states.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Navigation menu</p>
              <div className="max-w-xs space-y-1 rounded-lg border p-2">
                <Item>
                  <MaterialSymbol name="home" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Home
                </Item>
                <Item selected>
                  <MaterialSymbol name="inbox" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Inbox
                </Item>
                <Item>
                  <MaterialSymbol name="star" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Favorites
                </Item>
                <Item>
                  <MaterialSymbol name="archive" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Archive
                </Item>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">File list</p>
              <div className="max-w-xs space-y-1 rounded-lg border p-2">
                <Item>
                  <MaterialSymbol name="description" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Document.pdf
                </Item>
                <Item>
                  <MaterialSymbol name="image" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Image.jpg
                </Item>
                <Item selected>
                  <MaterialSymbol name="video_file" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Video.mp4
                </Item>
                <Item>
                  <MaterialSymbol name="audio_file" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Audio.mp3
                </Item>
              </div>
            </div>
          </div>
        </Section>

        <Section title="With Badges" description="Combine Item with badges to show additional information like counts or status.">
          <div className="max-w-xs space-y-1 rounded-lg border p-2">
            <Item>
              <MaterialSymbol name="inbox" size={16} weight={300} className="text-semantic-icon-subdued" />
              Inbox
              <Badge variant="secondary" className="ml-auto">12</Badge>
            </Item>
            <Item>
              <MaterialSymbol name="star" size={16} weight={300} className="text-semantic-icon-subdued" />
              Favorites
              <Badge variant="secondary" className="ml-auto">5</Badge>
            </Item>
            <Item selected>
              <MaterialSymbol name="notifications" size={16} weight={300} className="text-semantic-icon-subdued" />
              Notifications
              <Badge variant="destructive" className="ml-auto">3</Badge>
            </Item>
            <Item>
              <MaterialSymbol name="archive" size={16} weight={300} className="text-semantic-icon-subdued" />
              Archive
            </Item>
          </div>
        </Section>

        <Section title="Usage Examples" description="Item components integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Sidebar navigation */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Sidebar navigation</TypographyH4>
              <div className="space-y-1">
                <Item>
                  <MaterialSymbol name="dashboard" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Dashboard
                </Item>
                <Item selected>
                  <MaterialSymbol name="folder" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Projects
                </Item>
                <Item>
                  <MaterialSymbol name="people" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Team
                </Item>
                <Item>
                  <MaterialSymbol name="settings" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Settings
                </Item>
              </div>
            </div>

            {/* File browser */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">File browser</TypographyH4>
              <div className="space-y-1">
                <Item>
                  <MaterialSymbol name="folder" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Documents
                </Item>
                <Item>
                  <MaterialSymbol name="folder" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Images
                </Item>
                <Item selected>
                  <MaterialSymbol name="folder" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Videos
                </Item>
                <Item>
                  <MaterialSymbol name="folder" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Downloads
                </Item>
              </div>
            </div>

            {/* Menu with counts */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Menu with counts</TypographyH4>
              <div className="space-y-1">
                <Item>
                  <MaterialSymbol name="inbox" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Inbox
                  <Badge variant="secondary" className="ml-auto text-xs">24</Badge>
                </Item>
                <Item>
                  <MaterialSymbol name="send" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Sent
                </Item>
                <Item selected>
                  <MaterialSymbol name="drafts" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Drafts
                  <Badge variant="secondary" className="ml-auto text-xs">3</Badge>
                </Item>
                <Item>
                  <MaterialSymbol name="delete" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Trash
                </Item>
              </div>
            </div>

            {/* Settings categories */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Settings categories</TypographyH4>
              <div className="space-y-1">
                <Item>
                  <MaterialSymbol name="person" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Account
                </Item>
                <Item selected>
                  <MaterialSymbol name="notifications" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Notifications
                </Item>
                <Item>
                  <MaterialSymbol name="security" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Security
                </Item>
                <Item>
                  <MaterialSymbol name="palette" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Appearance
                </Item>
              </div>
            </div>

            {/* Project list */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Project list</TypographyH4>
              <div className="space-y-1">
                <Item>
                  <MaterialSymbol name="folder" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Website Redesign
                </Item>
                <Item>
                  <MaterialSymbol name="folder" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Mobile App
                </Item>
                <Item selected>
                  <MaterialSymbol name="folder" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Marketing Campaign
                </Item>
                <Item>
                  <MaterialSymbol name="folder" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Documentation
                </Item>
              </div>
            </div>

            {/* Command menu */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Command menu</TypographyH4>
              <div className="space-y-1">
                <Item>
                  <MaterialSymbol name="create" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Create new file
                </Item>
                <Item selected>
                  <MaterialSymbol name="folder" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Open folder
                </Item>
                <Item>
                  <MaterialSymbol name="search" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Search files
                </Item>
                <Item>
                  <MaterialSymbol name="settings" size={16} weight={300} className="text-semantic-icon-subdued" />
                  Preferences
                </Item>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  dialog: {
    title: "Dialog",
    description: "A modal dialog component that overlays the main content. Perfect for forms, confirmations, and focused interactions that require user attention.",
    body: (
      <>
        <Section title="Overview" description="Dialog components display modal content in an overlay. They block interaction with the rest of the page until dismissed, making them ideal for important actions, forms, and confirmations.">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="dialog-name">Name</Label>
                  <Input id="dialog-name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dialog-email">Email</Label>
                  <Input id="dialog-email" type="email" defaultValue="john@example.com" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Section>

        <Section title="Basic Usage" description="Simple dialog examples with different content types and layouts.">
          <div className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Simple dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Delete</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Dialog with form</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create new project</DialogTitle>
                  <DialogDescription>
                    Start a new project by filling out the form below.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="dialog-project-name">Project name</Label>
                    <Input id="dialog-project-name" placeholder="My awesome project" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dialog-project-desc">Description</Label>
                    <Textarea id="dialog-project-desc" placeholder="Project description..." />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Create project</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Dialog without footer</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Information</DialogTitle>
                  <DialogDescription>
                    This dialog doesn't have a footer. Use this pattern for informational content.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    You can include any content here. Dialogs are flexible containers that adapt to their content.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </Section>

        <Section title="Usage Examples" description="Dialog components integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Settings dialog */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Settings dialog</TypographyH4>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">Open settings</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Settings</DialogTitle>
                    <DialogDescription>Manage your account settings and preferences.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label>Notifications</Label>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Email notifications</span>
                        <Switch />
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label>Privacy</Label>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Make profile public</span>
                        <Switch />
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Confirmation dialog */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Confirmation dialog</TypographyH4>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive" className="w-full">Delete item</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Delete item</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to delete this item? This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="destructive">Delete</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Form dialog */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Form dialog</TypographyH4>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">Add new item</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add new item</DialogTitle>
                    <DialogDescription>Fill out the form to create a new item.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="dialog-form-title">Title</Label>
                      <Input id="dialog-form-title" placeholder="Item title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dialog-form-category">Category</Label>
                      <Select>
                        <SelectTrigger id="dialog-form-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Create</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "alert-dialog": {
    title: "Alert Dialog",
    description: "A modal dialog component specifically designed for confirmations and destructive actions. Ensures users understand the consequences of their actions.",
    body: (
      <>
        <Section title="Overview" description="Alert Dialog components are specialized dialogs for critical actions that require explicit user confirmation. They're ideal for destructive actions, important decisions, and scenarios where users need to understand consequences.">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Section>

        <Section title="Basic Usage" description="Alert dialogs for different types of confirmations and critical actions.">
          <div className="flex flex-wrap gap-3">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete item</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete item</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete this item? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Leave page</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Leave this page?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You have unsaved changes. Are you sure you want to leave? Your changes will be lost.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Stay</AlertDialogCancel>
                  <AlertDialogAction>Leave</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Reset settings</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Reset all settings?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will reset all your preferences to their default values. You can't undo this action.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Reset</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </Section>

        <Section title="Usage Examples" description="Alert dialogs integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Destructive action */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Destructive action</TypographyH4>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="w-full">Delete account</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete account</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will permanently delete your account and all associated data. This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                      Delete account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            {/* Unsaved changes */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Unsaved changes</TypographyH4>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full">Discard changes</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Discard changes?</AlertDialogTitle>
                    <AlertDialogDescription>
                      You have unsaved changes. Are you sure you want to discard them?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Keep editing</AlertDialogCancel>
                    <AlertDialogAction>Discard</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            {/* Logout confirmation */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Logout confirmation</TypographyH4>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full">Log out</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Log out?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to log out? You'll need to sign in again to access your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Log out</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  drawer: {
    title: "Drawer",
    description: "A bottom drawer component that slides up from the bottom of the screen. Perfect for mobile interfaces and quick actions that don't require full-screen dialogs.",
    body: (
      <>
        <Section title="Overview" description="Drawer components slide in from the bottom (or other directions) and are ideal for mobile-first interfaces. They provide a native mobile feel while maintaining accessibility and smooth animations.">
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <p className="text-sm text-muted-foreground">
                  This will permanently delete your account and remove your data from our servers.
                </p>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Section>

        <Section title="Basic Usage" description="Simple drawer examples with different content types.">
          <div className="flex flex-wrap gap-3">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Simple drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Edit profile</DrawerTitle>
                  <DrawerDescription>Make changes to your profile.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="drawer-name">Name</Label>
                    <Input id="drawer-name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="drawer-email">Email</Label>
                    <Input id="drawer-email" type="email" defaultValue="john@example.com" />
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Save changes</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Drawer with form</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Create new project</DrawerTitle>
                  <DrawerDescription>Start a new project by filling out the form.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="drawer-project-name">Project name</Label>
                    <Input id="drawer-project-name" placeholder="My awesome project" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="drawer-project-desc">Description</Label>
                    <Textarea id="drawer-project-desc" placeholder="Project description..." />
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Create</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </Section>

        <Section title="Usage Examples" description="Drawer components integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Settings drawer */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Settings drawer</TypographyH4>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" className="w-full">Open settings</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Settings</DrawerTitle>
                    <DrawerDescription>Manage your preferences.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Notifications</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Dark mode</span>
                      <Switch />
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Save</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>

            {/* Confirmation drawer */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Confirmation drawer</TypographyH4>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="destructive" className="w-full">Delete item</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Delete item?</DrawerTitle>
                    <DrawerDescription>
                      This action cannot be undone. This will permanently delete the item.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button variant="destructive">Delete</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  sheet: {
    title: "Sheet",
    description: "A slide-over panel component that appears from the side of the screen. Perfect for navigation menus, filters, and secondary content that doesn't require full-screen attention.",
    body: (
      <>
        <Section title="Overview" description="Sheet components slide in from the side (right, left, top, or bottom) and are perfect for navigation menus, filters, settings panels, and secondary content. They maintain context while providing focused interactions.">
          <Sheet>
            <SheetTrigger asChild>
              <Button>Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-4 px-4">
                <div className="space-y-2">
                  <Label htmlFor="sheet-name">Name</Label>
                  <Input id="sheet-name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sheet-email">Email</Label>
                  <Input id="sheet-email" type="email" defaultValue="john@example.com" />
                </div>
              </div>
              <SheetFooter>
                <Button>Save changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </Section>

        <Section title="Sides" description="Sheets can slide in from different sides of the screen. Choose the side that best fits your layout and use case.">
          <div className="flex flex-wrap gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Right side</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Right side sheet</SheetTitle>
                  <SheetDescription>This sheet slides in from the right.</SheetDescription>
                </SheetHeader>
                <div className="px-4">
                  <p className="text-sm text-muted-foreground">Content goes here.</p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Left side</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Left side sheet</SheetTitle>
                  <SheetDescription>This sheet slides in from the left.</SheetDescription>
                </SheetHeader>
                <div className="px-4">
                  <p className="text-sm text-muted-foreground">Content goes here.</p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Top side</Button>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>Top side sheet</SheetTitle>
                  <SheetDescription>This sheet slides in from the top.</SheetDescription>
                </SheetHeader>
                <div className="px-4">
                  <p className="text-sm text-muted-foreground">Content goes here.</p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Bottom side</Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Bottom side sheet</SheetTitle>
                  <SheetDescription>This sheet slides in from the bottom.</SheetDescription>
                </SheetHeader>
                <div className="px-4">
                  <p className="text-sm text-muted-foreground">Content goes here.</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Section>

        <Section title="Usage Examples" description="Sheet components integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Navigation sheet */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Navigation sheet</TypographyH4>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">Open menu</Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="px-4 space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <MaterialSymbol name="dashboard" size={16} weight={300} className="mr-2" />
                      Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <MaterialSymbol name="folder" size={16} weight={300} className="mr-2" />
                      Projects
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <MaterialSymbol name="settings" size={16} weight={300} className="mr-2" />
                      Settings
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Filter sheet */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Filter sheet</TypographyH4>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <MaterialSymbol name="filter_list" size={16} weight={300} className="mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Apply filters to refine your results.</SheetDescription>
                  </SheetHeader>
                  <div className="space-y-4 px-4">
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Status</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <SheetFooter>
                    <Button>Apply filters</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>

            {/* Settings sheet */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Settings sheet</TypographyH4>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">Open settings</Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Settings</SheetTitle>
                    <SheetDescription>Manage your account settings.</SheetDescription>
                  </SheetHeader>
                  <div className="space-y-4 px-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Email notifications</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Push notifications</span>
                      <Switch />
                    </div>
                  </div>
                  <SheetFooter>
                    <Button>Save changes</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  form: {
    title: "Form",
    description: "A form component built on react-hook-form that provides form state management, validation, and error handling. Perfect for building complex forms with proper accessibility and user feedback.",
    body: (
      <>
        <Section title="Overview" description="Form components integrate react-hook-form for powerful form state management. They provide automatic validation, error handling, and accessibility features. FormField connects form controls to the form state, while FormItem, FormLabel, FormControl, FormDescription, and FormMessage handle layout and feedback.">
          <FormDemo />
        </Section>

        <Section title="Basic Usage" description="Simple form examples with different field types and validation.">
          <div className="space-y-6 max-w-md">
            <div className="space-y-2">
              <Label className="text-sm">Simple form</Label>
              <FormDemo />
            </div>
          </div>
        </Section>

        <Section title="With Validation" description="Forms support validation through react-hook-form. Error messages are automatically displayed using FormMessage.">
          <FormValidationDemo />
        </Section>

        <Section title="Usage Examples" description="Form components integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Contact form */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Contact form</TypographyH4>
              <FormContactDemo />
            </div>

            {/* Sign up form */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Sign up form</TypographyH4>
              <FormSignupDemo />
            </div>
          </div>
        </Section>
      </>
    ),
  },
  table: {
    title: "Table",
    description: "A table component for displaying structured data in rows and columns. Perfect for data tables, lists, and any tabular information that needs clear organization.",
    body: (
      <>
        <Section title="Overview" description="Table components provide a structured way to display data in rows and columns. They include TableHeader for column headers, TableBody for data rows, TableFooter for summary information, and TableCaption for descriptions.">
          <Table>
            <TableCaption>A list of recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>PayPal</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV003</TableCell>
                <TableCell>Unpaid</TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell className="text-right">$350.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Section>

        <Section title="Basic Usage" description="Simple table examples with different data types and layouts.">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm">Simple table</Label>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>john@example.com</TableCell>
                    <TableCell>Admin</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>jane@example.com</TableCell>
                    <TableCell>User</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">With footer</Label>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Product A</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell className="text-right">$100.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Product B</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell className="text-right">$50.00</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Table components integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* User table */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">User table</TypographyH4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar size="sm">
                          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" alt="John" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm">John Doe</div>
                          <div className="text-xs text-muted-foreground">john@example.com</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">Active</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar size="sm">
                          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces" alt="Jane" />
                          <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm">Jane Smith</div>
                          <div className="text-xs text-muted-foreground">jane@example.com</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Inactive</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Invoice table */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Invoice table</TypographyH4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>$250.00</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Paid</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV002</TableCell>
                    <TableCell>$150.00</TableCell>
                    <TableCell>
                      <Badge variant="outline">Pending</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "data-table": {
    title: "Data Table",
    description: "An advanced table component with sorting, filtering, and pagination capabilities. Perfect for displaying large datasets with interactive features.",
    body: (
      <>
        <Section title="Overview" description="Data Table components extend the basic Table component with advanced features like sorting, filtering, pagination, and row selection. They're ideal for displaying large datasets with interactive capabilities.">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1">
                <div className="relative flex-1 max-w-sm">
                  <MaterialSymbol
                    name="search"
                    size={16}
                    weight={300}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-semantic-icon-subdued"
                  />
                  <Input placeholder="Search users..." className="pl-9" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All roles</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="guest">Guest</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <MaterialSymbol name="file_download" size={16} weight={300} />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <MaterialSymbol name="filter_list" size={16} weight={300} />
                  Filter
                </Button>
                <Button size="sm">
                  <MaterialSymbol name="add" size={16} weight={300} />
                  Add user
                </Button>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <span>User</span>
                      <MaterialSymbol name="unfold_more" size={14} weight={300} className="text-semantic-icon-subdued" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <span>Role</span>
                      <MaterialSymbol name="unfold_more" size={14} weight={300} className="text-semantic-icon-subdued" />
                    </div>
                  </TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <span>Status</span>
                      <MaterialSymbol name="unfold_more" size={14} weight={300} className="text-semantic-icon-subdued" />
                    </div>
                  </TableHead>
                  <TableHead>Last active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar size="sm">
                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" alt="John Doe" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-xs text-muted-foreground">ID: USR-001</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">Admin</Badge>
                  </TableCell>
                  <TableCell>john.doe@example.com</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Active</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">2 hours ago</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MaterialSymbol name="more_vert" size={16} weight={300} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <MaterialSymbol name="edit" size={16} weight={300} className="mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MaterialSymbol name="content_copy" size={16} weight={300} className="mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          <MaterialSymbol name="delete" size={16} weight={300} className="mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar size="sm">
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces" alt="Jane Smith" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Jane Smith</div>
                        <div className="text-xs text-muted-foreground">ID: USR-002</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">User</Badge>
                  </TableCell>
                  <TableCell>jane.smith@example.com</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Active</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">1 day ago</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MaterialSymbol name="more_vert" size={16} weight={300} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <MaterialSymbol name="edit" size={16} weight={300} className="mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MaterialSymbol name="content_copy" size={16} weight={300} className="mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          <MaterialSymbol name="delete" size={16} weight={300} className="mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar size="sm">
                        <AvatarFallback>RB</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Robert Brown</div>
                        <div className="text-xs text-muted-foreground">ID: USR-003</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">User</Badge>
                  </TableCell>
                  <TableCell>robert.brown@example.com</TableCell>
                  <TableCell>
                    <Badge variant="outline">Inactive</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">3 days ago</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MaterialSymbol name="more_vert" size={16} weight={300} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <MaterialSymbol name="edit" size={16} weight={300} className="mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MaterialSymbol name="content_copy" size={16} weight={300} className="mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          <MaterialSymbol name="delete" size={16} weight={300} className="mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar size="sm">
                        <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces" alt="Emily Johnson" />
                        <AvatarFallback>EJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Emily Johnson</div>
                        <div className="text-xs text-muted-foreground">ID: USR-004</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Guest</Badge>
                  </TableCell>
                  <TableCell>emily.johnson@example.com</TableCell>
                  <TableCell>
                    <Badge variant="outline">Pending</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">Never</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MaterialSymbol name="more_vert" size={16} weight={300} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <MaterialSymbol name="edit" size={16} weight={300} className="mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MaterialSymbol name="content_copy" size={16} weight={300} className="mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          <MaterialSymbol name="delete" size={16} weight={300} className="mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar size="sm">
                        <AvatarFallback>MW</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Michael Wilson</div>
                        <div className="text-xs text-muted-foreground">ID: USR-005</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">Admin</Badge>
                  </TableCell>
                  <TableCell>michael.wilson@example.com</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Active</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">5 minutes ago</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MaterialSymbol name="more_vert" size={16} weight={300} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <MaterialSymbol name="edit" size={16} weight={300} className="mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MaterialSymbol name="content_copy" size={16} weight={300} className="mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          <MaterialSymbol name="delete" size={16} weight={300} className="mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">Showing 1-5 of 47 results</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Rows per page:</span>
                  <Select defaultValue="10">
                    <SelectTrigger className="w-[70px] h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">10</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Data tables integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* User management */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">User management</TypographyH4>
              <div className="space-y-3">
                <Input placeholder="Search users..." className="w-full" />
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar size="sm">
                            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" alt="John" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-sm font-medium">John Doe</div>
                            <div className="text-xs text-muted-foreground">john@example.com</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>Admin</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Active</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  calendar: {
    title: "Calendar",
    description: "A calendar component for date selection and display. Perfect for date pickers, scheduling interfaces, and any feature that requires date input or visualization.",
    body: (
      <>
        <Section title="Overview" description="Calendar components provide a visual way to select dates. They display a month view with navigation controls and support single date selection, date ranges, and multiple date selections.">
          <div className="flex justify-center">
            <Calendar />
          </div>
        </Section>

        <Section title="Basic Usage" description="Simple calendar examples for different use cases.">
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="space-y-2">
                <Label className="text-sm">Default calendar</Label>
                <Calendar />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">With default month</Label>
                <Calendar defaultMonth={new Date(2024, 0, 1)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Controlled calendar</Label>
              <CalendarDemo />
            </div>
          </div>
        </Section>

        <Section title="Selection Modes" description="Calendar supports different selection modes: single date, date range, and multiple dates.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label className="text-sm">Single date selection</Label>
              <p className="text-xs text-muted-foreground">Select one date at a time.</p>
              <CalendarDemo />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Date range selection</Label>
              <p className="text-xs text-muted-foreground">Select a start and end date.</p>
              <CalendarRangeDemo />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Multiple dates selection</Label>
              <p className="text-xs text-muted-foreground">Select multiple individual dates.</p>
              <CalendarMultipleDemo />
            </div>
          </div>
        </Section>

        <Section title="Configurations" description="Calendar components can be configured with different options and layouts.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label className="text-sm">With month/year dropdowns</Label>
              <p className="text-xs text-muted-foreground">Use dropdowns for quick navigation.</p>
              <Calendar captionLayout="dropdown" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Without outside days</Label>
              <p className="text-xs text-muted-foreground">Hide days from previous/next month.</p>
              <Calendar showOutsideDays={false} />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">With week numbers</Label>
              <p className="text-xs text-muted-foreground">Display week numbers for reference.</p>
              <Calendar showWeekNumber />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">With disabled dates</Label>
              <p className="text-xs text-muted-foreground">Disable specific dates from selection.</p>
              <CalendarDisabledDemo />
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Calendar components integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Date picker */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Date picker</TypographyH4>
              <DatePickerDemo />
            </div>

            {/* Event calendar */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Event calendar</TypographyH4>
              <Calendar />
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-semantic-surface-interaction-strong" />
                  <span>Event scheduled</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-semantic-surface-rag-success-subdued" />
                  <span>Available</span>
                </div>
              </div>
            </div>

            {/* Booking calendar */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Booking calendar</TypographyH4>
              <CalendarRangeDemo />
              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Check-in</span>
                  <span className="font-medium">Jan 15, 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Check-out</span>
                  <span className="font-medium">Jan 20, 2024</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Nights</span>
                  <span className="font-medium">5</span>
                </div>
              </div>
            </div>

            {/* Schedule picker */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Schedule picker</TypographyH4>
              <CalendarMultipleDemo />
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">Select multiple dates for your schedule.</p>
              </div>
            </div>

            {/* Form with calendar */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Form with calendar</TypographyH4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label className="text-sm">Event date</Label>
                  <DatePickerDemo />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Time</Label>
                  <Input type="time" />
                </div>
              </div>
            </div>

            {/* Availability calendar */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Availability calendar</TypographyH4>
              <CalendarDisabledDemo />
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">Gray dates are unavailable.</p>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "date-picker": {
    title: "Date Picker",
    description: "A date picker component that combines a calendar with an input field. Perfect for forms and interfaces where users need to select dates with a visual calendar interface.",
    body: (
      <>
        <Section title="Overview" description="Date Picker components combine an input field with a calendar popover, providing both text input and visual date selection. They're ideal for forms and any interface requiring date selection.">
          <div className="max-w-md space-y-4">
            <div className="space-y-2">
              <Label>Select date</Label>
              <DatePickerDemo />
            </div>
          </div>
        </Section>

        <Section title="Basic Usage" description="Date picker examples with different configurations.">
          <div className="space-y-6 max-w-md">
            <div className="space-y-2">
              <Label className="text-sm">With button</Label>
              <DatePickerDemo />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">With input</Label>
              <DatePickerWithInputDemo />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">With field</Label>
              <FieldSet>
                <FieldGroup>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="date-picker-field">
                      <FieldTitle>Event date</FieldTitle>
                    </FieldLabel>
                    <FieldContent>
                      <DatePickerDemo />
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Date pickers integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Event form */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Event form</TypographyH4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label className="text-sm">Event name</Label>
                  <Input placeholder="My event" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <MaterialSymbol name="calendar_today" size={14} weight={300} className="mr-2" />
                        Select date
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {/* Booking form */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Booking form</TypographyH4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label className="text-sm">Check-in</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <MaterialSymbol name="calendar_today" size={14} weight={300} className="mr-2" />
                        Select check-in date
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Check-out</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <MaterialSymbol name="calendar_today" size={14} weight={300} className="mr-2" />
                        Select check-out date
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  carousel: {
    title: "Carousel",
    description: "A carousel component for displaying multiple items in a scrollable container. Perfect for image galleries, testimonials, product showcases, and any content that benefits from horizontal or vertical scrolling.",
    body: (
      <>
        <Section title="Overview" description="Carousel components display multiple items in a scrollable container with navigation controls. They support both horizontal and vertical orientations and provide smooth scrolling animations.">
          <div className="max-w-md mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Section>

        <Section title="Basic Usage" description="Carousel examples with different configurations and content types.">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm">Horizontal carousel</Label>
              <Carousel className="w-full max-w-md mx-auto">
                <CarouselContent>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-2xl">Slide {index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Multiple items per view</Label>
              <Carousel className="w-full max-w-md mx-auto" opts={{ slidesToScroll: 2 }}>
                <CarouselContent>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/2">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-xl">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Carousel components integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Image gallery */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Image gallery</TypographyH4>
              <Carousel className="w-full">
                <CarouselContent>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <AspectRatio ratio={16 / 9}>
                          <div className="flex items-center justify-center rounded-md border bg-muted">
                            <span className="text-sm text-muted-foreground">Image {index + 1}</span>
                          </div>
                        </AspectRatio>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Testimonials */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Testimonials</TypographyH4>
              <Carousel className="w-full">
                <CarouselContent>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <Card>
                        <CardContent className="p-6">
                          <TypographyBlockquote className="mb-4">
                            "This is an amazing product. I highly recommend it!"
                          </TypographyBlockquote>
                          <div className="flex items-center gap-2">
                            <Avatar size="sm">
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-sm font-medium">John Doe</div>
                              <div className="text-xs text-muted-foreground">Customer</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "scroll-area": {
    title: "Scroll Area",
    description: "A customizable scroll area component that provides consistent scrolling behavior across different browsers. Perfect for scrollable content areas, sidebars, and any container that needs custom scrollbars.",
    body: (
      <>
        <Section title="Overview" description="Scroll Area components provide customizable scrollbars and consistent scrolling behavior. They're ideal for creating scrollable content areas with custom styling and better cross-browser compatibility.">
          <ScrollArea className="h-48 w-full rounded-md border p-4">
            <div className="space-y-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="text-sm">
                  Item {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea>
        </Section>

        <Section title="Basic Usage" description="Scroll area examples with different content types and heights.">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm">Vertical scroll</Label>
              <ScrollArea className="h-32 w-full rounded-md border p-4">
                <div className="space-y-2">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="text-sm">Scrollable item {i + 1}</div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">With code</Label>
              <ScrollArea className="h-32 w-full rounded-md border">
                <div className="p-4">
                  <pre className="text-sm">
                    <code>{`function example() {
  return "Hello, World!";
}`}</code>
                  </pre>
                </div>
              </ScrollArea>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Scroll area components integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Sidebar navigation */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Sidebar navigation</TypographyH4>
              <ScrollArea className="h-48 w-full">
                <div className="space-y-1 pr-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <Button key={i} variant="ghost" className="w-full justify-start">
                      <MaterialSymbol name="folder" size={16} weight={300} className="mr-2" />
                      Item {i + 1}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Code editor */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Code editor</TypographyH4>
              <ScrollArea className="h-48 w-full rounded-md border bg-muted">
                <div className="p-4">
                  <pre className="text-sm font-mono">
                    <code>{`import { useState } from 'react';

function Component() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</code>
                  </pre>
                </div>
              </ScrollArea>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  resizable: {
    title: "Resizable",
    description: "A resizable panel component that allows users to adjust the size of panels by dragging. Perfect for split views, sidebars, and any interface that benefits from adjustable panel sizes.",
    body: (
      <>
        <Section title="Overview" description="Resizable components allow users to adjust panel sizes by dragging handles. They support both horizontal and vertical layouts and provide smooth resizing interactions.">
          <div className="h-[300px] w-full">
            <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="text-sm text-muted-foreground">Panel 1</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="text-sm text-muted-foreground">Panel 2</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </Section>

        <Section title="Orientations" description="Resizable panels support both horizontal and vertical orientations.">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm">Horizontal</Label>
              <div className="h-[200px] w-full">
                <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
                  <ResizablePanel defaultSize={33}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="text-sm">Left</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={34}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="text-sm">Center</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={33}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="text-sm">Right</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Vertical</Label>
              <div className="h-[200px] w-full">
                <ResizablePanelGroup direction="vertical" className="rounded-lg border">
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="text-sm">Top</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="text-sm">Bottom</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Resizable components integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Code editor split */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Code editor split</TypographyH4>
              <div className="h-[200px] w-full">
                <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-4 bg-muted/50">
                      <span className="text-xs text-muted-foreground">Editor</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-4 bg-muted/50">
                      <span className="text-xs text-muted-foreground">Preview</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>

            {/* Sidebar layout */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Sidebar layout</TypographyH4>
              <div className="h-[200px] w-full">
                <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
                  <ResizablePanel defaultSize={25} minSize={15}>
                    <div className="flex h-full items-center justify-center p-4 bg-muted/50">
                      <span className="text-xs text-muted-foreground">Sidebar</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={75}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="text-xs text-muted-foreground">Main content</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  toast: {
    title: "Toast",
    description: "A toast notification component for displaying temporary messages to users. Perfect for success messages, error notifications, and any feedback that should appear temporarily.",
    body: (
      <>
        <Section title="Overview" description="Toast components display temporary notifications that appear at the edge of the screen. They automatically dismiss after a set duration and can be manually dismissed by users.">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => toast("Event has been created")}
            >
              Show toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.success("Profile updated successfully")}
            >
              Success toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error("Something went wrong")}
            >
              Error toast
            </Button>
          </div>
          <Toaster />
        </Section>

        <Section title="Basic Usage" description="Toast examples with different types and configurations.">
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => toast("Default toast message")}
            >
              Default
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.success("Operation completed successfully")}
            >
              Success
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error("An error occurred")}
            >
              Error
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.warning("Please review your changes")}
            >
              Warning
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info("New update available")}
            >
              Info
            </Button>
          </div>
        </Section>

        <Section title="Usage Examples" description="Toast notifications integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Form submission */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Form submission</TypographyH4>
              <Button
                className="w-full"
                onClick={() => {
                  toast.success("Form submitted successfully");
                }}
              >
                Submit form
              </Button>
            </div>

            {/* Action confirmation */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Action confirmation</TypographyH4>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  toast("Item deleted", {
                    description: "The item has been permanently removed.",
                  });
                }}
              >
                Delete item
              </Button>
            </div>

            {/* Error handling */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Error handling</TypographyH4>
              <Button
                variant="destructive"
                className="w-full"
                onClick={() => {
                  toast.error("Failed to save changes", {
                    description: "Please check your connection and try again.",
                  });
                }}
              >
                Save changes
              </Button>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  sonner: {
    title: "Sonner",
    description: "An elegant toast notification component built on Sonner. Provides beautiful, accessible toast notifications with support for actions, promises, and custom content.",
    body: (
      <>
        <Section title="Overview" description="Sonner is a powerful toast notification library that provides elegant, accessible notifications. It supports actions, promises, loading states, and custom content.">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => toast("Hello from Sonner!")}
            >
              Show toast
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                toast.promise(
                  new Promise((resolve) => setTimeout(resolve, 2000)),
                  {
                    loading: "Loading...",
                    success: "Data loaded successfully",
                    error: "Failed to load data",
                  }
                );
              }}
            >
              Promise toast
            </Button>
          </div>
          <Toaster />
        </Section>

        <Section title="Basic Usage" description="Sonner toast examples with different types and features.">
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => toast("Simple toast message")}
            >
              Simple
            </Button>
            <Button
              variant="outline"
              onClick={() => toast("Toast with description", {
                description: "This is a longer description that provides more context.",
              })}
            >
              With description
            </Button>
            <Button
              variant="outline"
              onClick={() => toast("Toast with action", {
                action: {
                  label: "Undo",
                  onClick: () => toast("Action clicked"),
                },
              })}
            >
              With action
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const toastId = toast.loading("Processing...");
                setTimeout(() => {
                  toast.success("Done!", { id: toastId });
                }, 2000);
              }}
            >
              Loading state
            </Button>
          </div>
        </Section>

        <Section title="Usage Examples" description="Sonner toasts integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* File upload */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">File upload</TypographyH4>
              <Button
                className="w-full"
                onClick={() => {
                  const toastId = toast.loading("Uploading file...");
                  setTimeout(() => {
                    toast.success("File uploaded successfully", { id: toastId });
                  }, 2000);
                }}
              >
                Upload file
              </Button>
            </div>

            {/* Async operation */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Async operation</TypographyH4>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  toast.promise(
                    fetch("/api/data").then(() => new Promise((resolve) => setTimeout(resolve, 2000))),
                    {
                      loading: "Fetching data...",
                      success: "Data fetched successfully",
                      error: "Failed to fetch data",
                    }
                  );
                }}
              >
                Fetch data
              </Button>
            </div>

            {/* Undo action */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Undo action</TypographyH4>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  toast("Item deleted", {
                    description: "The item has been removed.",
                    action: {
                      label: "Undo",
                      onClick: () => toast("Item restored"),
                    },
                  });
                }}
              >
                Delete item
              </Button>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  sidebar: {
    title: "Sidebar",
    description: "A sidebar component for navigation and secondary content. Perfect for application layouts, dashboards, and any interface that needs persistent navigation alongside main content.",
    body: (
      <>
        <Section title="Overview" description="Sidebar components provide persistent navigation and secondary content alongside your main content area. They support collapsible states, mobile responsiveness, and can contain menus, groups, and various content types.">
          <div className="h-[500px] w-full rounded-lg border overflow-hidden bg-background">
            <div className="flex h-full">
              <SidebarProvider>
                <Sidebar collapsible="none" className="border-r">
                  <SidebarHeader>
                    <div className="flex items-center gap-2 px-4 py-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-semantic-surface-interaction-strong text-semantic-text-reversedpersistent">
                        <MaterialSymbol name="apps" size={16} weight={300} />
                      </div>
                      <span className="font-medium">App</span>
                    </div>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <MaterialSymbol name="dashboard" size={16} weight={300} />
                              <span>Dashboard</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <MaterialSymbol name="folder" size={16} weight={300} />
                              <span>Projects</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <MaterialSymbol name="people" size={16} weight={300} />
                              <span>Team</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                  <SidebarFooter>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <MaterialSymbol name="settings" size={16} weight={300} />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarFooter>
                </Sidebar>
                <div className="flex-1 p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-normal">Main Content</h3>
                    <p className="text-sm text-muted-foreground">
                      This is the main content area that sits alongside the sidebar. The sidebar provides navigation while this area displays the primary content.
                    </p>
                    <div className="space-y-2">
                      <div className="h-20 rounded-md border bg-muted/50" />
                      <div className="h-20 rounded-md border bg-muted/50" />
                      <div className="h-20 rounded-md border bg-muted/50" />
                    </div>
                  </div>
                </div>
              </SidebarProvider>
            </div>
          </div>
        </Section>

        <Section title="Basic Usage" description="Sidebar examples with different configurations and content types.">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm">Simple sidebar</Label>
              <div className="h-[300px] w-full rounded-lg border overflow-hidden bg-background">
                <div className="flex h-full">
                  <SidebarProvider>
                    <Sidebar collapsible="none" className="border-r w-64">
                      <SidebarHeader>
                        <div className="px-4 py-4">
                          <span className="font-medium">Menu</span>
                        </div>
                      </SidebarHeader>
                      <SidebarContent>
                        <SidebarGroup>
                          <SidebarGroupContent>
                            <SidebarMenu>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <MaterialSymbol name="dashboard" size={16} weight={300} />
                                  <span>Dashboard</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <MaterialSymbol name="folder" size={16} weight={300} />
                                  <span>Projects</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            </SidebarMenu>
                          </SidebarGroupContent>
                        </SidebarGroup>
                      </SidebarContent>
                    </Sidebar>
                    <div className="flex-1 p-4">
                      <p className="text-sm text-muted-foreground">Content area</p>
                    </div>
                  </SidebarProvider>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Usage Examples" description="Sidebar components integrated into common UI patterns.">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Dashboard layout */}
            <div className="p-4 rounded-lg border bg-card space-y-3 break-inside-avoid">
              <TypographyH4 className="text-base">Dashboard layout</TypographyH4>
              <div className="h-[250px] w-full rounded-md border overflow-hidden bg-background">
                <div className="flex h-full">
                  <SidebarProvider>
                    <Sidebar collapsible="none" className="border-r w-48">
                      <SidebarContent>
                        <SidebarGroup>
                          <SidebarGroupContent>
                            <SidebarMenu>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <MaterialSymbol name="dashboard" size={16} weight={300} />
                                  <span>Dashboard</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <MaterialSymbol name="analytics" size={16} weight={300} />
                                  <span>Analytics</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            </SidebarMenu>
                          </SidebarGroupContent>
                        </SidebarGroup>
                      </SidebarContent>
                    </Sidebar>
                    <div className="flex-1 p-3">
                      <div className="h-full rounded bg-muted/50 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Dashboard content</span>
                      </div>
                    </div>
                  </SidebarProvider>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  "navigation-menu": {
    title: "Navigation Menu",
    description: "A navigation menu component with support for dropdowns, links, and complex navigation structures. Perfect for main navigation bars and header menus.",
    body: (
      <>
        <Section title="Overview" description="Navigation Menu components provide flexible navigation structures with support for dropdowns, links, and complex menu hierarchies. They're ideal for main navigation bars and header menus.">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Product 1</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Description of product 1
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Product 2</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Description of product 2
                      </p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Solution 1</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Description of solution 1
                      </p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Section>

        <Section title="Basic Usage" description="Navigation menu examples with different configurations.">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm">Simple navigation</Label>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </Section>
      </>
    ),
  },
  menubar: {
    title: "Menubar",
    description: "A menubar component for application menus, similar to desktop application menu bars. Perfect for desktop-style interfaces and applications that need traditional menu structures.",
    body: (
      <>
        <Section title="Overview" description="Menubar components provide desktop-style menu bars with support for dropdowns, shortcuts, checkboxes, radio groups, and submenus. They're ideal for desktop applications and interfaces that need traditional menu structures.">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New File
                  <KbdGroup className="ml-auto">
                    <Kbd>⌘</Kbd>
                    <span>+</span>
                    <Kbd>N</Kbd>
                  </KbdGroup>
                </MenubarItem>
                <MenubarItem>
                  Open
                  <KbdGroup className="ml-auto">
                    <Kbd>⌘</Kbd>
                    <span>+</span>
                    <Kbd>O</Kbd>
                  </KbdGroup>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Save</MenubarItem>
                <MenubarItem>Save As...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem>Redo</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Zoom In</MenubarItem>
                <MenubarItem>Zoom Out</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Full Screen</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Section>

        <Section title="Basic Usage" description="Menubar examples with different menu configurations.">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm">Simple menubar</Label>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Menu</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Item 1</MenubarItem>
                    <MenubarItem>Item 2</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Item 3</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
        </Section>
      </>
    ),
  },
};

function SliderDemo() {
  const [value, setValue] = useState<number[]>([35]);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <MaterialSymbol name="volume_up" size={16} />
          Volume
        </div>
        <span className="text-muted-foreground">{value[0]}%</span>
      </div>
      <Slider value={value} onValueChange={setValue} max={100} step={5} />
    </div>
  );
}

function SliderControlledDemo() {
  const [value, setValue] = useState<number[]>([30]);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span>Controlled slider</span>
        <span className="text-muted-foreground">{value[0]}%</span>
      </div>
      <Slider value={value} onValueChange={setValue} max={100} />
    </div>
  );
}

function CollapsibleControlledDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full max-w-md">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <span>Controlled collapsible</span>
          <MaterialSymbol name={isOpen ? "expand_less" : "expand_more"} size={16} weight={300} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 p-4 rounded-md border bg-card">
        <p className="text-sm text-muted-foreground">This collapsible is controlled by React state.</p>
      </CollapsibleContent>
    </Collapsible>
  );
}

function ComboboxControlledDemo() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const frameworks = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];

  const selectedFramework = frameworks.find((f) => f.value === value);

  return (
    <div className="max-w-md space-y-2">
      <Label className="text-sm">Framework</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" className="w-full justify-between">
            {selectedFramework ? selectedFramework.label : "Select framework..."}
            <MaterialSymbol name="expand_more" size={16} weight={300} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {selectedFramework && (
        <p className="text-xs text-muted-foreground">Selected: {selectedFramework.label}</p>
      )}
    </div>
  );
}

function InputOTPControlledDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-2">
      <Label className="text-sm">Verification code</Label>
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          {Array.from({ length: 6 }).map((_, i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      {value && (
        <p className="text-xs text-muted-foreground">Entered: {value}</p>
      )}
    </div>
  );
}

function FormDemo() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormDescription>
                We'll never share your email.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

function FormValidationDemo() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => {
        console.log(data);
      })} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormDescription>
                Enter a valid email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription>
                Must be at least 8 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

function FormContactDemo() {
  const form = useForm({
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-4">
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="How can we help?" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Send</Button>
      </form>
    </Form>
  );
}

function FormSignupDemo() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription>
                At least 8 characters.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Sign up</Button>
      </form>
    </Form>
  );
}

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}

function CalendarRangeDemo() {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to?: Date | undefined }>({
    from: new Date(2024, 0, 15),
    to: new Date(2024, 0, 20),
  });

  return (
    <Calendar
      mode="range"
      selected={dateRange}
      onSelect={(range) => setDateRange(range || { from: undefined })}
      className="rounded-md border"
    />
  );
}

function CalendarMultipleDemo() {
  const [dates, setDates] = useState<Date[] | undefined>([
    new Date(2024, 0, 10),
    new Date(2024, 0, 15),
    new Date(2024, 0, 22),
  ]);

  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      className="rounded-md border"
    />
  );
}

function CalendarDisabledDemo() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const disabledDates = [
    new Date(2024, 0, 5),
    new Date(2024, 0, 12),
    new Date(2024, 0, 19),
    new Date(2024, 0, 26),
  ].map(date => {
    date.setHours(0, 0, 0, 0);
    return date;
  });

  return (
    <Calendar
      disabled={(date) => {
        const dateToCheck = new Date(date);
        dateToCheck.setHours(0, 0, 0, 0);
        // Disable past dates and specific dates
        return dateToCheck < today || disabledDates.some(disabledDate => 
          dateToCheck.getTime() === disabledDate.getTime()
        );
      }}
      className="rounded-md border"
    />
  );
}

function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false);

  const formatDate = (date: Date | undefined) => {
    if (!date) return "Pick a date";
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <MaterialSymbol name="calendar_today" size={14} weight={300} className="mr-2" />
          {formatDate(date)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            setDate(selectedDate);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

function DatePickerWithInputDemo() {
  const [date, setDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false);

  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className="relative">
        <Input
          placeholder="Select date"
          value={formatDate(date)}
          readOnly
          className="pr-10"
        />
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full"
            onClick={() => setOpen(!open)}
          >
            <MaterialSymbol name="calendar_today" size={14} weight={300} />
          </Button>
        </PopoverTrigger>
      </div>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            setDate(selectedDate);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

function ComponentShowcase({ componentId }: ComponentShowcaseProps) {
  const showcase = showcaseRegistry[componentId as keyof typeof showcaseRegistry];

  if (!showcase) {
    return (
      <div className="p-8 space-y-3">
        <h2 className="text-2xl font-normal">Work in progress</h2>
        <p className="text-muted-foreground text-sm">
          This component documentation is coming soon.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8 max-w-6xl">
      <header className="space-y-2">
        <h2 className="text-3xl font-normal text-foreground">{showcase.title}</h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">{showcase.description}</p>
      </header>
      <div className="space-y-8">
        {showcase.body}
      </div>
    </div>
  );
}

export { ComponentShowcase };
