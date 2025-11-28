"use client";

import * as React from "react";
import { Switch } from "./ui/switch";
import { MaterialSymbol } from "./material-symbol";
import { useFidelity } from "./fidelity-provider";
import { text } from "../foundation";

export function FidelityToggle(): React.ReactElement {
  const { fidelity, setFidelity } = useFidelity();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <MaterialSymbol name="deployed_code" size={16} />
        <Switch disabled />
        <MaterialSymbol name="frame_inspect" size={16} />
      </div>
    );
  }

  const isLofi = fidelity === "lofi";

  return (
    <div className="flex items-center gap-2">
      <MaterialSymbol name="deployed_code" size={16} className={text.subdued} />
      <Switch
        checked={isLofi}
        onCheckedChange={(checked) => {
          setFidelity(checked ? "lofi" : "alize");
        }}
        aria-label="Toggle fidelity mode"
      />
      <MaterialSymbol name="frame_inspect" size={16} className={text.subdued} />
    </div>
  );
}


