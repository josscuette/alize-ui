"use client";

import { ThemeProvider } from "next-themes";
import { MaterialSymbolsProvider } from "alize-ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MaterialSymbolsProvider />
      <ThemeProvider 
        attribute="class" 
        defaultTheme="system" 
        enableSystem 
        value={{ light: "theme-light", dark: "theme-dark" }}
      >
        {children}
      </ThemeProvider>
    </>
  );
}

