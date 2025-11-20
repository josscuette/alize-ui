"use client";

import { ThemeToggle } from "./theme-toggle";

export function GlobalHeader() {
  return (
    <header className="fixed top-0 right-0 z-40 px-4 py-4 flex items-center h-16">
      <ThemeToggle />
    </header>
  );
}

