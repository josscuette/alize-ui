"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialSymbol } from "@/components/material-symbol";
import { GlobalHeader } from "@/components/global-header";
import { MobileNavigation } from "@/components/mobile-navigation";
import { useNavigation } from "@/contexts/navigation-context";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    href: "/get-started",
    label: "Get started",
    icon: "rocket_launch",
  },
  {
    href: "/compliance/foundation-layer",
    label: "Foundation layer",
    icon: "layers",
  },
  {
    href: "/components",
    label: "Components",
    icon: "apps",
  },
  {
    href: "/compliance",
    label: "Engineering Compliance",
    icon: "verified",
  },
] as const;

export function GlobalNavigation() {
  const pathname = usePathname();
  const {
    sidebarSections,
    showSearch,
    searchPlaceholder,
    showModifiedFilter,
    modifiedCount,
    onModifiedToggle,
    showModifiedOnly,
  } = useNavigation();

  return (
    <header className="border-b bg-background">
      <div className="w-full flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <MaterialSymbol 
            name="widgets" 
            size={24} 
            weight={300} 
            className="text-[var(--semantic-icon-interaction-default)]" 
          />
          <h1 className="text-xl font-normal">Alize</h1>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-1 flex-nowrap whitespace-nowrap">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href === "/components" && pathname?.startsWith("/components")) ||
              (item.href === "/compliance/foundation-layer" && pathname === "/compliance/foundation-layer") ||
              (item.href === "/compliance" && pathname?.startsWith("/compliance") && pathname !== "/compliance/foundation-layer");
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                <MaterialSymbol name={item.icon} size={16} weight={300} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <GlobalHeader />
          <MobileNavigation
            sidebarSections={sidebarSections}
            showSearch={showSearch}
            searchPlaceholder={searchPlaceholder}
            showModifiedFilter={showModifiedFilter}
            modifiedCount={modifiedCount}
            onModifiedToggle={onModifiedToggle}
            showModifiedOnly={showModifiedOnly}
          />
        </div>
      </div>
    </header>
  );
}

