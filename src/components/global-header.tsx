"use client";

import { FidelityToggle } from "./fidelity-toggle";
import { ThemeToggle } from "./theme-toggle";

export function GlobalHeader(): React.ReactElement {
  return (
    <div className="flex items-center gap-4">
      <FidelityToggle />
      <ThemeToggle />
    </div>
  );
}
