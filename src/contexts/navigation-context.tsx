"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { SidebarSection } from "@/components/documentation-sidebar";

interface NavigationContextValue {
  sidebarSections: SidebarSection[];
  setSidebarSections: (sections: SidebarSection[]) => void;
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
  searchPlaceholder?: string;
  setSearchPlaceholder: (placeholder: string) => void;
  showModifiedFilter: boolean;
  setShowModifiedFilter: (show: boolean) => void;
  modifiedCount: number;
  setModifiedCount: (count: number) => void;
  onModifiedToggle?: () => void;
  setOnModifiedToggle: (handler: (() => void) | undefined) => void;
  showModifiedOnly: boolean;
  setShowModifiedOnly: (show: boolean) => void;
}

const NavigationContext = createContext<NavigationContextValue | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [sidebarSections, setSidebarSections] = useState<SidebarSection[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchPlaceholder, setSearchPlaceholder] = useState<string>("Search...");
  const [showModifiedFilter, setShowModifiedFilter] = useState(false);
  const [modifiedCount, setModifiedCount] = useState(0);
  const [onModifiedToggle, setOnModifiedToggle] = useState<(() => void) | undefined>(undefined);
  const [showModifiedOnly, setShowModifiedOnly] = useState(false);

  return (
    <NavigationContext.Provider
      value={{
        sidebarSections,
        setSidebarSections,
        showSearch,
        setShowSearch,
        searchPlaceholder,
        setSearchPlaceholder,
        showModifiedFilter,
        setShowModifiedFilter,
        modifiedCount,
        setModifiedCount,
        onModifiedToggle,
        setOnModifiedToggle,
        showModifiedOnly,
        setShowModifiedOnly,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}

