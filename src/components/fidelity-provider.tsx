"use client";

import * as React from "react";

type Fidelity = "alize" | "lofi";

interface FidelityContextValue {
  fidelity: Fidelity;
  setFidelity: (fidelity: Fidelity) => void;
}

const FidelityContext = React.createContext<FidelityContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "alize-fidelity";

export function FidelityProvider({
  children,
  defaultFidelity = "alize",
}: {
  children: React.ReactNode;
  defaultFidelity?: Fidelity;
}): React.ReactElement {
  const [fidelity, setFidelityState] = React.useState<Fidelity>(defaultFidelity);
  const [mounted, setMounted] = React.useState(false);

  // Load from localStorage on mount
  React.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Fidelity | null;
    if (stored === "alize" || stored === "lofi") {
      setFidelityState(stored);
    }
    setMounted(true);
  }, []);

  // Apply class to document root
  React.useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    if (fidelity === "lofi") {
      root.classList.add("theme-lofi");
    } else {
      root.classList.remove("theme-lofi");
    }
  }, [fidelity, mounted]);

  const setFidelity = React.useCallback((newFidelity: Fidelity) => {
    setFidelityState(newFidelity);
    localStorage.setItem(STORAGE_KEY, newFidelity);
  }, []);

  const value = React.useMemo(
    () => ({ fidelity, setFidelity }),
    [fidelity, setFidelity]
  );

  return (
    <FidelityContext.Provider value={value}>
      {children}
    </FidelityContext.Provider>
  );
}

export function useFidelity(): FidelityContextValue {
  const context = React.useContext(FidelityContext);
  if (context === undefined) {
    throw new Error("useFidelity must be used within a FidelityProvider");
  }
  return context;
}


