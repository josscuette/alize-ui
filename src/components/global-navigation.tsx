"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialSymbol } from "@/components/material-symbol";
import { Logo } from "@/components/ui/logo";
import { GlobalHeader } from "@/components/global-header";
import { MobileNavigation } from "@/components/mobile-navigation";
import { useNavigation } from "@/contexts/navigation-context";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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
    href: "/docs",
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
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Logo productName="Solstice" />
          </Link>
          
          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList className="gap-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href === "/docs" && pathname?.startsWith("/docs")) ||
                  (item.href === "/compliance/foundation-layer" && pathname === "/compliance/foundation-layer") ||
                  (item.href === "/compliance" && pathname?.startsWith("/compliance") && pathname !== "/compliance/foundation-layer");
                
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild active={isActive} className="flex-row items-center gap-2 p-0">
                      <Link
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
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

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

