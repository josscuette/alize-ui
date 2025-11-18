# Usage Examples

This document provides practical examples of how to use Alize components in your project.

## Basic Setup

```tsx
// app/layout.tsx (Next.js) or your root component
import "alize/app/globals.css";
import "alize/app/theme.css";

export default function RootLayout({ children }) {
  return <>{children}</>;
}
```

## Component Examples

### Button

```tsx
import { Button } from "alize";
import { MaterialSymbol } from "alize/components/material-symbol";

function ButtonExample() {
  return (
    <div className="space-x-2">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Delete</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button>
        <MaterialSymbol name="add" size={16} weight={300} />
        Add Item
      </Button>
    </div>
  );
}
```

### Form with Input and Field

```tsx
import { Input, Label, Field, FieldLabel, FieldContent, FieldError } from "alize";
import { MaterialSymbol } from "alize/components/material-symbol";

function FormExample() {
  return (
    <form className="space-y-4">
      <Field>
        <FieldLabel>Email</FieldLabel>
        <FieldContent>
          <Input type="email" placeholder="you@example.com" />
        </FieldContent>
        <FieldError>Please enter a valid email</FieldError>
      </Field>

      <Field>
        <FieldLabel>Password</FieldLabel>
        <FieldContent>
          <Input type="password" placeholder="••••••••" />
        </FieldContent>
      </Field>

      <Button type="submit">Sign In</Button>
    </form>
  );
}
```

### Card with Content

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "alize";
import { Button } from "alize";

function CardExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
```

### Dialog

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "alize";
import { Button } from "alize";

function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Data Table

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "alize";

function TableExample() {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Using Material Symbols

```tsx
import { MaterialSymbol } from "alize/components/material-symbol";

function IconExample() {
  return (
    <div className="flex items-center gap-2">
      <MaterialSymbol name="home" size={24} weight={300} />
      <MaterialSymbol name="settings" size={20} weight={300} fill={1} />
      <MaterialSymbol name="favorite" size={16} weight={300} />
    </div>
  );
}
```

### Using the `cn` Utility

```tsx
import { cn } from "alize/lib/utils";

function UtilityExample({ className, isActive }) {
  return (
    <div
      className={cn(
        "base-classes",
        isActive && "active-classes",
        className
      )}
    >
      Content
    </div>
  );
}
```

## Advanced: Custom Component with Alize

```tsx
import { Button } from "alize";
import { Card, CardContent } from "alize";
import { MaterialSymbol } from "alize/components/material-symbol";
import { cn } from "alize/lib/utils";

interface CustomCardProps {
  title: string;
  description?: string;
  icon?: string;
  onAction?: () => void;
}

function CustomCard({ title, description, icon, onAction }: CustomCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {icon && (
            <MaterialSymbol
              name={icon}
              size={24}
              weight={300}
              className="text-[var(--semantic-icon-subdued)]"
            />
          )}
          <div className="flex-1">
            <h3 className="font-normal text-lg">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
          {onAction && (
            <Button variant="ghost" size="icon-sm" onClick={onAction}>
              <MaterialSymbol name="more_vert" size={16} weight={300} />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
```

## TypeScript Support

All components are fully typed. You can import types directly:

```tsx
import type { ButtonProps } from "alize/components/ui/button";

function MyButton(props: ButtonProps) {
  return <Button {...props} />;
}
```

## Styling with Design Tokens

Alize uses semantic design tokens. Use them in your custom components:

```tsx
function CustomComponent() {
  return (
    <div
      className="bg-[var(--semantic-surface-subdued)] text-[var(--semantic-text-default)]"
      style={{
        borderColor: "var(--semantic-stroke-default)",
      }}
    >
      Content using design tokens
    </div>
  );
}
```

## Next Steps

- Explore all components in the [Component Showcase](./components/DOCUMENTATION.md)
- Check [Conventions](./CONVENTIONS.md) for styling guidelines
- Review [Installation Guide](./INSTALLATION.md) for setup details

