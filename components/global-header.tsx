"use client";

import { ThemeToggle } from "./theme-toggle";

export function GlobalHeader() {
  return (
    <header className="fixed top-0 right-0 z-40 p-4">
      <ThemeToggle />
    </header>
  );
}

