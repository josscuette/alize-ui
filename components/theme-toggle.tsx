"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { MaterialSymbol } from "./material-symbol";
import { text } from "../styles";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Debug: log theme changes
  React.useEffect(() => {
    if (mounted) {
      console.log("Theme:", theme, "Resolved:", resolvedTheme);
      console.log("HTML class:", document.documentElement.className);
    }
  }, [theme, resolvedTheme, mounted]);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <MaterialSymbol name="light_mode" size={16} />
        <Switch disabled />
        <MaterialSymbol name="dark_mode" size={16} />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2">
      <MaterialSymbol name="light_mode" size={16} className={text.subdued} />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => {
          setTheme(checked ? "dark" : "light");
        }}
        aria-label="Toggle theme"
      />
      <MaterialSymbol name="dark_mode" size={16} className={text.subdued} />
    </div>
  );
}

