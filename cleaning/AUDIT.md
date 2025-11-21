# Audit Tailwind CSS - Phase 1

**Date:** 2025-11-20T21:39:45.750Z

## Résumé

- **Fichiers scannés:** 65
- **Classes arbitraires trouvées:** 121
- **Tokens CSS uniques utilisés:** 19
- **Tokens définis dans theme.css:** 66
- **Tokens non utilisés:** 48

## 1. Classes arbitraires trouvées

### app/components/page.tsx

- **Ligne 63:** `[var(--semantic-text-interaction-default)]`
  ```
  <Link href="/" className="text-lg font-normal hover:text-[var(--semantic-text-interaction-default)] transition-colors">
  ```

- **Ligne 100:** `[var(--semantic-surface-interaction-default)]`
  ```
  ? "bg-[var(--semantic-surface-interaction-default)] text-[var(--semantic-text-interaction-default)] font-medium"
  ```

- **Ligne 100:** `[var(--semantic-text-interaction-default)]`
  ```
  ? "bg-[var(--semantic-surface-interaction-default)] text-[var(--semantic-text-interaction-default)] font-medium"
  ```

- **Ligne 119:** `[var(--semantic-icon-subdued)]`
  ```
  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--semantic-icon-subdued)] pointer-events-none z-10"
  ```

- **Ligne 139:** `[var(--semantic-icon-subdued)]`
  ```
  className="text-[var(--semantic-icon-subdued)] hover:text-[var(--semantic-icon-interaction-default)] cursor-pointer"
  ```

- **Ligne 139:** `[var(--semantic-icon-interaction-default)]`
  ```
  className="text-[var(--semantic-icon-subdued)] hover:text-[var(--semantic-icon-interaction-default)] cursor-pointer"
  ```

- **Ligne 186:** `[var(--semantic-surface-interaction-strong)]`
  ```
  className="size-1.5 rounded-full bg-[var(--semantic-surface-interaction-strong)]"
  ```

- **Ligne 235:** `[var(--semantic-text-interaction-default)]`
  ```
  <Link href="/" className="text-lg font-normal hover:text-[var(--semantic-text-interaction-default)] transition-colors">
  ```

### app/page.tsx

- **Ligne 34:** `[var(--semantic-icon-interaction-default)]`
  ```
  <MaterialSymbol name="widgets" size={24} weight={300} className="text-[var(--semantic-icon-interaction-default)]" />
  ```

- **Ligne 51:** `[var(--semantic-surface-subdued)]`
  ```
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-[var(--semantic-surface-subdued)] text-sm text-[var(--semantic-text-subdued)]">
  ```

- **Ligne 51:** `[var(--semantic-text-subdued)]`
  ```
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-[var(--semantic-surface-subdued)] text-sm text-[var(--semantic-text-subdued)]">
  ```

- **Ligne 58:** `[var(--semantic-text-interaction-default)]`
  ```
  <span className="text-[var(--semantic-text-interaction-default)]">Alize</span>
  ```

- **Ligne 61:** `[var(--semantic-text-subdued)]`
  ```
  <p className="text-lg md:text-xl text-[var(--semantic-text-subdued)] max-w-2xl mx-auto leading-relaxed">
  ```

- **Ligne 80:** `[var(--semantic-surface-subdued)]`
  ```
  <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 bg-[var(--semantic-surface-subdued)] rounded-t-3xl">
  ```

- **Ligne 84:** `[var(--semantic-text-subdued)]`
  ```
  <p className="text-lg text-[var(--semantic-text-subdued)]">
  ```

- **Ligne 89:** `[var(--semantic-stroke-default)]`
  ```
  <Card className="border-[var(--semantic-stroke-default)] bg-background">
  ```

- **Ligne 99:** `[var(--semantic-surface-subdued)]`
  ```
  <div className="p-4 rounded-md bg-[var(--semantic-surface-subdued)] border border-[var(--semantic-stroke-default)] font-mono text-sm overflow-x-auto">
  ```

- **Ligne 99:** `[var(--semantic-stroke-default)]`
  ```
  <div className="p-4 rounded-md bg-[var(--semantic-surface-subdued)] border border-[var(--semantic-stroke-default)] font-mono text-sm overflow-x-auto">
  ```

- **Ligne 100:** `[var(--semantic-text-default)]`
  ```
  <code className="text-[var(--semantic-text-default)]">
  ```

- **Ligne 106:** `[var(--semantic-stroke-default)]`
  ```
  <div className="pt-4 border-t border-[var(--semantic-stroke-default)]">
  ```

- **Ligne 107:** `[var(--semantic-text-subdued)]`
  ```
  <p className="text-sm text-[var(--semantic-text-subdued)] mb-4">
  ```

- **Ligne 110:** `[var(--semantic-surface-subdued)]`
  ```
  <div className="p-4 rounded-md bg-[var(--semantic-surface-subdued)] border border-[var(--semantic-stroke-default)] font-mono text-sm overflow-x-auto">
  ```

- **Ligne 110:** `[var(--semantic-stroke-default)]`
  ```
  <div className="p-4 rounded-md bg-[var(--semantic-surface-subdued)] border border-[var(--semantic-stroke-default)] font-mono text-sm overflow-x-auto">
  ```

- **Ligne 111:** `[var(--semantic-text-default)]`
  ```
  <code className="text-[var(--semantic-text-default)]">
  ```

- **Ligne 122:** `[var(--semantic-stroke-default)]`
  ```
  <footer className="container mx-auto px-4 md:px-8 py-12 border-t border-[var(--semantic-stroke-default)]">
  ```

- **Ligne 126:** `[var(--semantic-icon-subdued)]`
  ```
  <MaterialSymbol name="widgets" size={20} weight={300} className="text-[var(--semantic-icon-subdued)]" />
  ```

- **Ligne 127:** `[var(--semantic-text-subdued)]`
  ```
  <span className="text-sm text-[var(--semantic-text-subdued)]">
  ```

- **Ligne 131:** `[var(--semantic-text-subdued)]`
  ```
  <div className="flex items-center gap-6 text-sm text-[var(--semantic-text-subdued)]">
  ```

- **Ligne 134:** `[var(--semantic-text-interaction-default)]`
  ```
  className="hover:text-[var(--semantic-text-interaction-default)] transition-colors flex items-center gap-2"
  ```

- **Ligne 139:** `[var(--semantic-text-interaction-default)]`
  ```
  <Link href="/components" className="hover:text-[var(--semantic-text-interaction-default)] transition-colors">
  ```

### components/theme-toggle.tsx

- **Ligne 39:** `[var(--semantic-text-subdued)]`
  ```
  <MaterialSymbol name="light_mode" size={16} className="text-[var(--semantic-text-subdued)]" />
  ```

- **Ligne 47:** `[var(--semantic-text-subdued)]`
  ```
  <MaterialSymbol name="dark_mode" size={16} className="text-[var(--semantic-text-subdued)]" />
  ```

### components/ui/avatar.tsx

- **Ligne 100:** `[var(--semantic-surface-subdued)]`
  ```
  "bg-[var(--semantic-surface-subdued)] flex size-full items-center justify-center text-[var(--semantic-text-subdued)]",
  ```

- **Ligne 100:** `[var(--semantic-text-subdued)]`
  ```
  "bg-[var(--semantic-surface-subdued)] flex size-full items-center justify-center text-[var(--semantic-text-subdued)]",
  ```

### components/ui/button.tsx

- **Ligne 8:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "inline-flex items-center justify-center whitespace-nowrap font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
  ```

- **Ligne 8:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "inline-flex items-center justify-center whitespace-nowrap font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
  ```

- **Ligne 8:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "inline-flex items-center justify-center whitespace-nowrap font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
  ```

- **Ligne 8:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "inline-flex items-center justify-center whitespace-nowrap font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
  ```

- **Ligne 12:** `[var(--semantic-surface-primary)]`
  ```
  default: "bg-[var(--semantic-surface-primary)] text-[var(--semantic-text-reversedpersistent)] hover:opacity-90 [&_.material-symbols-outlined]:text-[var(--semantic-icon-interaction-bright)]",
  ```

- **Ligne 12:** `[var(--semantic-text-reversedpersistent)]`
  ```
  default: "bg-[var(--semantic-surface-primary)] text-[var(--semantic-text-reversedpersistent)] hover:opacity-90 [&_.material-symbols-outlined]:text-[var(--semantic-icon-interaction-bright)]",
  ```

- **Ligne 12:** `[var(--semantic-icon-interaction-bright)]`
  ```
  default: "bg-[var(--semantic-surface-primary)] text-[var(--semantic-text-reversedpersistent)] hover:opacity-90 [&_.material-symbols-outlined]:text-[var(--semantic-icon-interaction-bright)]",
  ```

- **Ligne 16:** `[var(--semantic-stroke-default)]`
  ```
  "border border-[var(--semantic-stroke-default)] text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
  ```

- **Ligne 16:** `[var(--semantic-text-subdued)]`
  ```
  "border border-[var(--semantic-stroke-default)] text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
  ```

- **Ligne 16:** `[var(--semantic-surface-overlays-level1)]`
  ```
  "border border-[var(--semantic-stroke-default)] text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
  ```

- **Ligne 16:** `[var(--semantic-icon-subdued)]`
  ```
  "border border-[var(--semantic-stroke-default)] text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
  ```

- **Ligne 18:** `[var(--semantic-surface-secondary)]`
  ```
  "bg-[var(--semantic-surface-secondary)] text-[var(--semantic-text-subdued)] hover:opacity-80 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
  ```

- **Ligne 18:** `[var(--semantic-text-subdued)]`
  ```
  "bg-[var(--semantic-surface-secondary)] text-[var(--semantic-text-subdued)] hover:opacity-80 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
  ```

- **Ligne 18:** `[var(--semantic-icon-subdued)]`
  ```
  "bg-[var(--semantic-surface-secondary)] text-[var(--semantic-text-subdued)] hover:opacity-80 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
  ```

- **Ligne 20:** `[var(--semantic-text-subdued)]`
  ```
  "text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
  ```

- **Ligne 20:** `[var(--semantic-surface-overlays-level1)]`
  ```
  "text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
  ```

- **Ligne 20:** `[var(--semantic-icon-subdued)]`
  ```
  "text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
  ```

- **Ligne 21:** `[var(--semantic-text-interaction-bright)]`
  ```
  link: "text-primary underline-offset-4 hover:underline hover:text-[var(--semantic-text-interaction-bright)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)] hover:[&_.material-symbols-outlined]:!text-[var(--semantic-icon-interaction-bright)]",
  ```

- **Ligne 21:** `[var(--semantic-icon-subdued)]`
  ```
  link: "text-primary underline-offset-4 hover:underline hover:text-[var(--semantic-text-interaction-bright)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)] hover:[&_.material-symbols-outlined]:!text-[var(--semantic-icon-interaction-bright)]",
  ```

- **Ligne 21:** `[var(--semantic-icon-interaction-bright)]`
  ```
  link: "text-primary underline-offset-4 hover:underline hover:text-[var(--semantic-text-interaction-bright)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)] hover:[&_.material-symbols-outlined]:!text-[var(--semantic-icon-interaction-bright)]",
  ```

- **Ligne 22:** `[var(--semantic-text-subdued)]`
  ```
  tertiary: "text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
  ```

- **Ligne 22:** `[var(--semantic-surface-overlays-level1)]`
  ```
  tertiary: "text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
  ```

- **Ligne 22:** `[var(--semantic-icon-subdued)]`
  ```
  tertiary: "text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
  ```

- **Ligne 72:** `[var(--semantic-text-reversedpersistent)]`
  ```
  isPrimaryIconOnly && '[&_.material-symbols-outlined]:!text-[var(--semantic-text-reversedpersistent)]',
  ```

### components/ui/checkbox.tsx

- **Ligne 17:** `[var(--semantic-stroke-default)]`
  ```
  "peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 17:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 17:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 17:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 17:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 17:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 17:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 17:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 52:** `[var(--semantic-stroke-subdued)]`
  ```
  "border-[var(--semantic-stroke-subdued)] bg-transparent",
  ```

- **Ligne 54:** `[var(--semantic-surface-whisper)]`
  ```
  "has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
  ```

- **Ligne 54:** `[var(--semantic-stroke-default)]`
  ```
  "has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
  ```

- **Ligne 63:** `[var(--semantic-stroke-default)]`
  ```
  "border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 63:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 63:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 63:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 63:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 63:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 63:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 63:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  ```

- **Ligne 78:** `[var(--semantic-text-default)]`
  ```
  "text-[var(--semantic-text-default)]",
  ```

- **Ligne 85:** `[var(--semantic-text-subdued)]`
  ```
  <span className="text-sm leading-5 text-[var(--semantic-text-subdued)]">
  ```

### components/ui/input.tsx

- **Ligne 13:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
  ```

- **Ligne 13:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
  ```

- **Ligne 13:** `[var(--semantic-stroke-rag-danger-default)]`
  ```
  "aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
  ```

### components/ui/progress.tsx

- **Ligne 17:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "bg-[var(--semantic-surface-interaction-strong)]/20 relative h-2 w-full overflow-hidden rounded-full",
  ```

- **Ligne 24:** `[var(--semantic-surface-interaction-strong)]`
  ```
  className="bg-[var(--semantic-surface-interaction-strong)] h-full w-full flex-1 transition-all"
  ```

### components/ui/radio-group.tsx

- **Ligne 33:** `[var(--semantic-stroke-default)]`
  ```
  "border border-[var(--semantic-stroke-default)] rounded-3xl",
  ```

- **Ligne 36:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
  ```

- **Ligne 38:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px]",
  ```

- **Ligne 40:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
  ```

- **Ligne 41:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20",
  ```

- **Ligne 42:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40",
  ```

- **Ligne 78:** `[var(--semantic-stroke-subdued)]`
  ```
  "border-[var(--semantic-stroke-subdued)] bg-transparent",
  ```

- **Ligne 80:** `[var(--semantic-surface-whisper)]`
  ```
  "has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
  ```

- **Ligne 80:** `[var(--semantic-stroke-default)]`
  ```
  "has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
  ```

- **Ligne 93:** `[var(--semantic-stroke-default)]`
  ```
  "border border-[var(--semantic-stroke-default)] rounded-3xl",
  ```

- **Ligne 96:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
  ```

- **Ligne 98:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px]",
  ```

- **Ligne 100:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
  ```

- **Ligne 101:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20",
  ```

- **Ligne 102:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40",
  ```

- **Ligne 118:** `[var(--semantic-text-default)]`
  ```
  "text-[var(--semantic-text-default)]",
  ```

- **Ligne 125:** `[var(--semantic-text-subdued)]`
  ```
  <span className="text-sm leading-5 text-[var(--semantic-text-subdued)]">
  ```

### components/ui/select.tsx

- **Ligne 55:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
  ```

- **Ligne 55:** `[var(--semantic-surface-rag-danger-strong)]`
  ```
  "aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
  ```

- **Ligne 55:** `[var(--semantic-stroke-rag-danger-default)]`
  ```
  "aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
  ```

- **Ligne 66:** `[var(--semantic-icon-subdued)]`
  ```
  className="text-[var(--semantic-icon-subdued)] shrink-0 pointer-events-none"
  ```

- **Ligne 195:** `[var(--semantic-icon-subdued)]`
  ```
  className="text-[var(--semantic-icon-subdued)]"
  ```

### components/ui/slider.tsx

- **Ligne 48:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "bg-[var(--semantic-surface-interaction-strong)] absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
  ```

- **Ligne 56:** `[var(--semantic-surface-interaction-strong)]`
  ```
  className="border-[var(--semantic-surface-interaction-strong)] ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
  ```

### components/ui/switch.tsx

- **Ligne 18:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
  ```

- **Ligne 20:** `[var(--semantic-surface-secondary)]`
  ```
  "data-[state=unchecked]:bg-[var(--semantic-surface-secondary)] data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
  ```

- **Ligne 20:** `[var(--semantic-stroke-default)]`
  ```
  "data-[state=unchecked]:bg-[var(--semantic-surface-secondary)] data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
  ```

- **Ligne 22:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px] focus-visible:outline-none",
  ```

- **Ligne 61:** `[var(--semantic-stroke-subdued)]`
  ```
  "border-[var(--semantic-stroke-subdued)] bg-transparent",
  ```

- **Ligne 63:** `[var(--semantic-surface-whisper)]`
  ```
  "has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
  ```

- **Ligne 63:** `[var(--semantic-stroke-default)]`
  ```
  "has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
  ```

- **Ligne 71:** `[var(--semantic-text-default)]`
  ```
  "text-[var(--semantic-text-default)]",
  ```

- **Ligne 78:** `[var(--semantic-text-subdued)]`
  ```
  <span className="text-sm leading-5 text-[var(--semantic-text-subdued)]">
  ```

- **Ligne 91:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
  ```

- **Ligne 93:** `[var(--semantic-surface-secondary)]`
  ```
  "data-[state=unchecked]:bg-[var(--semantic-surface-secondary)] data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
  ```

- **Ligne 93:** `[var(--semantic-stroke-default)]`
  ```
  "data-[state=unchecked]:bg-[var(--semantic-surface-secondary)] data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
  ```

- **Ligne 95:** `[var(--semantic-surface-interaction-strong)]`
  ```
  "focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px] focus-visible:outline-none",
  ```

## 2. Tokens CSS utilisés dans le code

**Total:** 19 tokens uniques

- `--semantic-icon-interaction-bright`
- `--semantic-icon-interaction-default`
- `--semantic-icon-subdued`
- `--semantic-stroke-default`
- `--semantic-stroke-rag-danger-default`
- `--semantic-stroke-subdued`
- `--semantic-surface-interaction-default`
- `--semantic-surface-interaction-strong`
- `--semantic-surface-overlays-level1`
- `--semantic-surface-primary`
- `--semantic-surface-rag-danger-strong`
- `--semantic-surface-secondary`
- `--semantic-surface-subdued`
- `--semantic-surface-whisper`
- `--semantic-text-default`
- `--semantic-text-interaction-bright`
- `--semantic-text-interaction-default`
- `--semantic-text-reversedpersistent`
- `--semantic-text-subdued`

## 3. Tokens par fichier

### app/components/page.tsx

- `--semantic-icon-interaction-default`
- `--semantic-icon-subdued`
- `--semantic-surface-interaction-default`
- `--semantic-surface-interaction-strong`
- `--semantic-text-interaction-default`

### app/page.tsx

- `--semantic-icon-interaction-default`
- `--semantic-icon-subdued`
- `--semantic-stroke-default`
- `--semantic-surface-subdued`
- `--semantic-text-default`
- `--semantic-text-interaction-default`
- `--semantic-text-subdued`

### components/theme-toggle.tsx

- `--semantic-text-subdued`

### components/ui/avatar.tsx

- `--semantic-surface-subdued`
- `--semantic-text-subdued`

### components/ui/button.tsx

- `--semantic-icon-interaction-bright`
- `--semantic-icon-subdued`
- `--semantic-stroke-default`
- `--semantic-surface-interaction-strong`
- `--semantic-surface-overlays-level1`
- `--semantic-surface-primary`
- `--semantic-surface-rag-danger-strong`
- `--semantic-surface-secondary`
- `--semantic-text-interaction-bright`
- `--semantic-text-reversedpersistent`
- `--semantic-text-subdued`

### components/ui/checkbox.tsx

- `--semantic-stroke-default`
- `--semantic-stroke-subdued`
- `--semantic-surface-interaction-strong`
- `--semantic-surface-rag-danger-strong`
- `--semantic-surface-whisper`
- `--semantic-text-default`
- `--semantic-text-subdued`

### components/ui/input.tsx

- `--semantic-stroke-rag-danger-default`
- `--semantic-surface-rag-danger-strong`

### components/ui/progress.tsx

- `--semantic-surface-interaction-strong`

### components/ui/radio-group.tsx

- `--semantic-stroke-default`
- `--semantic-stroke-subdued`
- `--semantic-surface-interaction-strong`
- `--semantic-surface-rag-danger-strong`
- `--semantic-surface-whisper`
- `--semantic-text-default`
- `--semantic-text-subdued`

### components/ui/select.tsx

- `--semantic-icon-subdued`
- `--semantic-stroke-rag-danger-default`
- `--semantic-surface-rag-danger-strong`

### components/ui/slider.tsx

- `--semantic-surface-interaction-strong`

### components/ui/switch.tsx

- `--semantic-stroke-default`
- `--semantic-stroke-subdued`
- `--semantic-surface-interaction-strong`
- `--semantic-surface-secondary`
- `--semantic-surface-whisper`
- `--semantic-text-default`
- `--semantic-text-subdued`

## 4. Tokens présents dans theme.css mais jamais utilisés

**Total:** 48 tokens non utilisés

- `--semantic-brand-picto`
- `--semantic-brand-text`
- `--semantic-icon-ai-default`
- `--semantic-icon-default`
- `--semantic-icon-rag-danger-default`
- `--semantic-icon-rag-success-default`
- `--semantic-icon-rag-warning-default`
- `--semantic-icon-reversed`
- `--semantic-icon-reversedpersistent`
- `--semantic-icon-tonal-science-default`
- `--semantic-stroke-ai-default`
- `--semantic-stroke-interaction-default`
- `--semantic-stroke-rag-danger-bright`
- `--semantic-stroke-rag-danger-strong`
- `--semantic-stroke-rag-success-bright`
- `--semantic-stroke-rag-success-default`
- `--semantic-stroke-rag-success-strong`
- `--semantic-stroke-rag-warning-bright`
- `--semantic-stroke-rag-warning-default`
- `--semantic-stroke-rag-warning-strong`
- `--semantic-stroke-strong`
- `--semantic-stroke-tonal-science-default`
- `--semantic-surface-ai-strong`
- `--semantic-surface-ai-subdued`
- `--semantic-surface-contrast`
- `--semantic-surface-default`
- `--semantic-surface-interaction-bright`
- `--semantic-surface-interaction-subdued`
- `--semantic-surface-overlays-level2`
- `--semantic-surface-overlays-level3`
- `--semantic-surface-overlays-ref`
- `--semantic-surface-rag-danger-bright`
- `--semantic-surface-rag-danger-subdued`
- `--semantic-surface-rag-success-bright`
- `--semantic-surface-rag-success-strong`
- `--semantic-surface-rag-success-subdued`
- `--semantic-surface-rag-warning-bright`
- `--semantic-surface-rag-warning-strong`
- `--semantic-surface-rag-warning-subdued`
- `--semantic-surface-strong`
- `--semantic-surface-tonal-science-strong`
- `--semantic-surface-tonal-science-subdued`
- `--semantic-text-ai-default`
- `--semantic-text-rag-danger-default`
- `--semantic-text-rag-success-default`
- `--semantic-text-rag-warning-default`
- `--semantic-text-reversed`
- `--semantic-text-tonal-science-default`
