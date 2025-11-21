# Diffs Complets - Migration Phase 3

**Date:** 2025-11-20T22:08:12.614Z

## Résumé

- **Fichiers à modifier:** 12
- **Remplacements totaux:** 104

---

# Diff pour app/components/page.tsx

**Total:** 7 remplacements

---

## Ligne 235

**Contexte:** text

**Ancien:**
```
<Link href="/" className="text-lg font-normal hover:text-[var(--semantic-text-interaction-default)] transition-colors">
```

**Nouveau:**
```
<Link href="/" className="text-lg font-normal hover:text-semantic-text-interaction-default transition-colors">
```

---

## Ligne 186

**Contexte:** bg

**Ancien:**
```
className="size-1.5 rounded-full bg-[var(--semantic-surface-interaction-strong)]"
```

**Nouveau:**
```
className="size-1.5 rounded-full bg-semantic-surface-interaction-strong"
```

---

## Ligne 139

**Contexte:** text

**Ancien:**
```
className="text-[var(--semantic-icon-subdued)] hover:text-[var(--semantic-icon-interaction-default)] cursor-pointer"
```

**Nouveau:**
```
className="text-semantic-icon-subdued hover:text-[var(--semantic-icon-interaction-default)] cursor-pointer"
```

---

## Ligne 139

**Contexte:** text

**Ancien:**
```
className="text-semantic-icon-subdued hover:text-[var(--semantic-icon-interaction-default)] cursor-pointer"
```

**Nouveau:**
```
className="text-semantic-icon-subdued hover:text-semantic-icon-interaction-default cursor-pointer"
```

---

## Ligne 119

**Contexte:** text

**Ancien:**
```
className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--semantic-icon-subdued)] pointer-events-none z-10"
```

**Nouveau:**
```
className="absolute left-3 top-1/2 -translate-y-1/2 text-semantic-icon-subdued pointer-events-none z-10"
```

---

## Ligne 100

**Contexte:** bg

**Ancien:**
```
? "bg-[var(--semantic-surface-interaction-default)] text-[var(--semantic-text-interaction-default)] font-medium"
```

**Nouveau:**
```
? "bg-[var(--semantic-surface-interaction-default)] text-semantic-text-interaction-default font-medium"
```

---

## Ligne 63

**Contexte:** text

**Ancien:**
```
<Link href="/" className="text-lg font-normal hover:text-[var(--semantic-text-interaction-default)] transition-colors">
```

**Nouveau:**
```
<Link href="/" className="text-lg font-normal hover:text-semantic-text-interaction-default transition-colors">
```

---



# Diff pour app/page.tsx

**Total:** 22 remplacements

---



# Diff pour components/theme-toggle.tsx

**Total:** 2 remplacements

---

## Ligne 47

**Contexte:** text

**Ancien:**
```
<MaterialSymbol name="dark_mode" size={16} className="text-[var(--semantic-text-subdued)]" />
```

**Nouveau:**
```
<MaterialSymbol name="dark_mode" size={16} className="text-semantic-text-subdued" />
```

---

## Ligne 39

**Contexte:** text

**Ancien:**
```
<MaterialSymbol name="light_mode" size={16} className="text-[var(--semantic-text-subdued)]" />
```

**Nouveau:**
```
<MaterialSymbol name="light_mode" size={16} className="text-semantic-text-subdued" />
```

---



# Diff pour components/ui/avatar.tsx

**Total:** 2 remplacements

---

## Ligne 100

**Contexte:** bg

**Ancien:**
```
"bg-[var(--semantic-surface-subdued)] flex size-full items-center justify-center text-[var(--semantic-text-subdued)]",
```

**Nouveau:**
```
"bg-semantic-surface-subdued flex size-full items-center justify-center text-[var(--semantic-text-subdued)]",
```

---

## Ligne 100

**Contexte:** bg

**Ancien:**
```
"bg-semantic-surface-subdued flex size-full items-center justify-center text-[var(--semantic-text-subdued)]",
```

**Nouveau:**
```
"bg-semantic-surface-subdued flex size-full items-center justify-center text-semantic-text-subdued",
```

---



# Diff pour components/ui/button.tsx

**Total:** 20 remplacements

---

## Ligne 72

**Contexte:** text

**Ancien:**
```
isPrimaryIconOnly && '[&_.material-symbols-outlined]:!text-[var(--semantic-text-reversedpersistent)]',
```

**Nouveau:**
```
isPrimaryIconOnly && '[&_.material-symbols-outlined]:!text-semantic-text-reversedpersistent',
```

---

## Ligne 22

**Contexte:** text

**Ancien:**
```
tertiary: "text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

**Nouveau:**
```
tertiary: "text-semantic-text-subdued hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

## Ligne 22

**Contexte:** text

**Ancien:**
```
tertiary: "text-semantic-text-subdued hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

**Nouveau:**
```
tertiary: "text-semantic-text-subdued hover:bg-semantic-surface-overlays-level1 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

## Ligne 22

**Contexte:** text

**Ancien:**
```
tertiary: "text-semantic-text-subdued hover:bg-semantic-surface-overlays-level1 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

**Nouveau:**
```
tertiary: "text-semantic-text-subdued hover:bg-semantic-surface-overlays-level1 [&_.material-symbols-outlined]:!text-semantic-icon-subdued",
```

---

## Ligne 21

**Contexte:** text

**Ancien:**
```
link: "text-primary underline-offset-4 hover:underline hover:text-[var(--semantic-text-interaction-bright)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)] hover:[&_.material-symbols-outlined]:!text-[var(--semantic-icon-interaction-bright)]",
```

**Nouveau:**
```
link: "text-primary underline-offset-4 hover:underline hover:text-semantic-text-interaction-bright [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)] hover:[&_.material-symbols-outlined]:!text-[var(--semantic-icon-interaction-bright)]",
```

---

## Ligne 21

**Contexte:** text

**Ancien:**
```
link: "text-primary underline-offset-4 hover:underline hover:text-semantic-text-interaction-bright [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)] hover:[&_.material-symbols-outlined]:!text-[var(--semantic-icon-interaction-bright)]",
```

**Nouveau:**
```
link: "text-primary underline-offset-4 hover:underline hover:text-semantic-text-interaction-bright [&_.material-symbols-outlined]:!text-semantic-icon-subdued hover:[&_.material-symbols-outlined]:!text-[var(--semantic-icon-interaction-bright)]",
```

---

## Ligne 21

**Contexte:** text

**Ancien:**
```
link: "text-primary underline-offset-4 hover:underline hover:text-semantic-text-interaction-bright [&_.material-symbols-outlined]:!text-semantic-icon-subdued hover:[&_.material-symbols-outlined]:!text-[var(--semantic-icon-interaction-bright)]",
```

**Nouveau:**
```
link: "text-primary underline-offset-4 hover:underline hover:text-semantic-text-interaction-bright [&_.material-symbols-outlined]:!text-semantic-icon-subdued hover:[&_.material-symbols-outlined]:!text-semantic-icon-interaction-bright",
```

---

## Ligne 20

**Contexte:** text

**Ancien:**
```
"text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

**Nouveau:**
```
"text-semantic-text-subdued hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

## Ligne 20

**Contexte:** text

**Ancien:**
```
"text-semantic-text-subdued hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

**Nouveau:**
```
"text-semantic-text-subdued hover:bg-semantic-surface-overlays-level1 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

## Ligne 20

**Contexte:** text

**Ancien:**
```
"text-semantic-text-subdued hover:bg-semantic-surface-overlays-level1 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

**Nouveau:**
```
"text-semantic-text-subdued hover:bg-semantic-surface-overlays-level1 [&_.material-symbols-outlined]:!text-semantic-icon-subdued",
```

---

## Ligne 18

**Contexte:** bg

**Ancien:**
```
"bg-[var(--semantic-surface-secondary)] text-[var(--semantic-text-subdued)] hover:opacity-80 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

**Nouveau:**
```
"bg-semantic-surface-secondary text-[var(--semantic-text-subdued)] hover:opacity-80 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

## Ligne 18

**Contexte:** bg

**Ancien:**
```
"bg-semantic-surface-secondary text-[var(--semantic-text-subdued)] hover:opacity-80 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

**Nouveau:**
```
"bg-semantic-surface-secondary text-semantic-text-subdued hover:opacity-80 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

## Ligne 18

**Contexte:** bg

**Ancien:**
```
"bg-semantic-surface-secondary text-semantic-text-subdued hover:opacity-80 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

**Nouveau:**
```
"bg-semantic-surface-secondary text-semantic-text-subdued hover:opacity-80 [&_.material-symbols-outlined]:!text-semantic-icon-subdued",
```

---

## Ligne 16

**Contexte:** border

**Ancien:**
```
"border border-[var(--semantic-stroke-default)] text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

**Nouveau:**
```
"border border-semantic-stroke-default text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

## Ligne 16

**Contexte:** border

**Ancien:**
```
"border border-semantic-stroke-default text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

**Nouveau:**
```
"border border-semantic-stroke-default text-semantic-text-subdued hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

## Ligne 16

**Contexte:** border

**Ancien:**
```
"border border-semantic-stroke-default text-semantic-text-subdued hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

**Nouveau:**
```
"border border-semantic-stroke-default text-semantic-text-subdued hover:bg-semantic-surface-overlays-level1 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

## Ligne 16

**Contexte:** border

**Ancien:**
```
"border border-semantic-stroke-default text-semantic-text-subdued hover:bg-semantic-surface-overlays-level1 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

**Nouveau:**
```
"border border-semantic-stroke-default text-semantic-text-subdued hover:bg-semantic-surface-overlays-level1 [&_.material-symbols-outlined]:!text-semantic-icon-subdued",
```

---

## Ligne 12

**Contexte:** bg

**Ancien:**
```
default: "bg-[var(--semantic-surface-primary)] text-[var(--semantic-text-reversedpersistent)] hover:opacity-90 [&_.material-symbols-outlined]:text-[var(--semantic-icon-interaction-bright)]",
```

**Nouveau:**
```
default: "bg-semantic-surface-primary text-[var(--semantic-text-reversedpersistent)] hover:opacity-90 [&_.material-symbols-outlined]:text-[var(--semantic-icon-interaction-bright)]",
```

---

## Ligne 12

**Contexte:** bg

**Ancien:**
```
default: "bg-semantic-surface-primary text-[var(--semantic-text-reversedpersistent)] hover:opacity-90 [&_.material-symbols-outlined]:text-[var(--semantic-icon-interaction-bright)]",
```

**Nouveau:**
```
default: "bg-semantic-surface-primary text-semantic-text-reversedpersistent hover:opacity-90 [&_.material-symbols-outlined]:text-[var(--semantic-icon-interaction-bright)]",
```

---

## Ligne 12

**Contexte:** bg

**Ancien:**
```
default: "bg-semantic-surface-primary text-semantic-text-reversedpersistent hover:opacity-90 [&_.material-symbols-outlined]:text-[var(--semantic-icon-interaction-bright)]",
```

**Nouveau:**
```
default: "bg-semantic-surface-primary text-semantic-text-reversedpersistent hover:opacity-90 [&_.material-symbols-outlined]:text-semantic-icon-interaction-bright",
```

---



# Diff pour components/ui/checkbox.tsx

**Total:** 21 remplacements

---

## Ligne 85

**Contexte:** text

**Ancien:**
```
<span className="text-sm leading-5 text-[var(--semantic-text-subdued)]">
```

**Nouveau:**
```
<span className="text-sm leading-5 text-semantic-text-subdued">
```

---

## Ligne 78

**Contexte:** text

**Ancien:**
```
"text-[var(--semantic-text-default)]",
```

**Nouveau:**
```
"text-semantic-text-default",
```

---

## Ligne 63

**Contexte:** border

**Ancien:**
```
"border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

**Nouveau:**
```
"border-semantic-stroke-default data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

## Ligne 63

**Contexte:** border

**Ancien:**
```
"border-semantic-stroke-default data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

**Nouveau:**
```
"border-semantic-stroke-default data-[state=unchecked]:bg-transparent data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:text-white data-[state=checked]:border-semantic-surface-interaction-strong focus-visible:border-semantic-surface-interaction-strong focus-visible:ring-semantic-surface-interaction-strong/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

## Ligne 63

**Contexte:** border

**Ancien:**
```
"border-semantic-stroke-default data-[state=unchecked]:bg-transparent data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:text-white data-[state=checked]:border-semantic-surface-interaction-strong focus-visible:border-semantic-surface-interaction-strong focus-visible:ring-semantic-surface-interaction-strong/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

**Nouveau:**
```
"border-semantic-stroke-default data-[state=unchecked]:bg-transparent data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:text-white data-[state=checked]:border-semantic-surface-interaction-strong focus-visible:border-semantic-surface-interaction-strong focus-visible:ring-semantic-surface-interaction-strong/50 aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40 aria-invalid:border-semantic-surface-rag-danger-strong size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

## Ligne 54

**Contexte:** bg

**Ancien:**
```
"has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

**Nouveau:**
```
"has-[[data-state=checked]]:bg-semantic-surface-whisper has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

---

## Ligne 54

**Contexte:** bg

**Ancien:**
```
"has-[[data-state=checked]]:bg-semantic-surface-whisper has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

**Nouveau:**
```
"has-[[data-state=checked]]:bg-semantic-surface-whisper has-[[data-state=checked]]:border-semantic-stroke-default",
```

---

## Ligne 52

**Contexte:** border

**Ancien:**
```
"border-[var(--semantic-stroke-subdued)] bg-transparent",
```

**Nouveau:**
```
"border-semantic-stroke-subdued bg-transparent",
```

---

## Ligne 17

**Contexte:** border

**Ancien:**
```
"peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

**Nouveau:**
```
"peer border-semantic-stroke-default data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

## Ligne 17

**Contexte:** border

**Ancien:**
```
"peer border-semantic-stroke-default data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

**Nouveau:**
```
"peer border-semantic-stroke-default data-[state=unchecked]:bg-transparent data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:text-white data-[state=checked]:border-semantic-surface-interaction-strong focus-visible:border-semantic-surface-interaction-strong focus-visible:ring-semantic-surface-interaction-strong/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

## Ligne 17

**Contexte:** border

**Ancien:**
```
"peer border-semantic-stroke-default data-[state=unchecked]:bg-transparent data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:text-white data-[state=checked]:border-semantic-surface-interaction-strong focus-visible:border-semantic-surface-interaction-strong focus-visible:ring-semantic-surface-interaction-strong/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

**Nouveau:**
```
"peer border-semantic-stroke-default data-[state=unchecked]:bg-transparent data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:text-white data-[state=checked]:border-semantic-surface-interaction-strong focus-visible:border-semantic-surface-interaction-strong focus-visible:ring-semantic-surface-interaction-strong/50 aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40 aria-invalid:border-semantic-surface-rag-danger-strong size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---



# Diff pour components/ui/input.tsx

**Total:** 1 remplacements

---

## Ligne 13

**Contexte:** border

**Ancien:**
```
"aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
```

**Nouveau:**
```
"aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-semantic-stroke-rag-danger-default",
```

---



# Diff pour components/ui/progress.tsx

**Total:** 2 remplacements

---

## Ligne 24

**Contexte:** bg

**Ancien:**
```
className="bg-[var(--semantic-surface-interaction-strong)] h-full w-full flex-1 transition-all"
```

**Nouveau:**
```
className="bg-semantic-surface-interaction-strong h-full w-full flex-1 transition-all"
```

---

## Ligne 17

**Contexte:** bg

**Ancien:**
```
"bg-[var(--semantic-surface-interaction-strong)]/20 relative h-2 w-full overflow-hidden rounded-full",
```

**Nouveau:**
```
"bg-semantic-surface-interaction-strong/20 relative h-2 w-full overflow-hidden rounded-full",
```

---



# Diff pour components/ui/radio-group.tsx

**Total:** 11 remplacements

---

## Ligne 125

**Contexte:** text

**Ancien:**
```
<span className="text-sm leading-5 text-[var(--semantic-text-subdued)]">
```

**Nouveau:**
```
<span className="text-sm leading-5 text-semantic-text-subdued">
```

---

## Ligne 118

**Contexte:** text

**Ancien:**
```
"text-[var(--semantic-text-default)]",
```

**Nouveau:**
```
"text-semantic-text-default",
```

---

## Ligne 100

**Contexte:** border

**Ancien:**
```
"aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
```

**Nouveau:**
```
"aria-invalid:border-semantic-surface-rag-danger-strong",
```

---

## Ligne 96

**Contexte:** bg

**Ancien:**
```
"data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
```

**Nouveau:**
```
"data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:rounded-full data-[state=checked]:border-0",
```

---

## Ligne 93

**Contexte:** border

**Ancien:**
```
"border border-[var(--semantic-stroke-default)] rounded-3xl",
```

**Nouveau:**
```
"border border-semantic-stroke-default rounded-3xl",
```

---

## Ligne 80

**Contexte:** bg

**Ancien:**
```
"has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

**Nouveau:**
```
"has-[[data-state=checked]]:bg-semantic-surface-whisper has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

---

## Ligne 80

**Contexte:** bg

**Ancien:**
```
"has-[[data-state=checked]]:bg-semantic-surface-whisper has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

**Nouveau:**
```
"has-[[data-state=checked]]:bg-semantic-surface-whisper has-[[data-state=checked]]:border-semantic-stroke-default",
```

---

## Ligne 78

**Contexte:** border

**Ancien:**
```
"border-[var(--semantic-stroke-subdued)] bg-transparent",
```

**Nouveau:**
```
"border-semantic-stroke-subdued bg-transparent",
```

---

## Ligne 40

**Contexte:** border

**Ancien:**
```
"aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
```

**Nouveau:**
```
"aria-invalid:border-semantic-surface-rag-danger-strong",
```

---

## Ligne 36

**Contexte:** bg

**Ancien:**
```
"data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
```

**Nouveau:**
```
"data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:rounded-full data-[state=checked]:border-0",
```

---

## Ligne 33

**Contexte:** border

**Ancien:**
```
"border border-[var(--semantic-stroke-default)] rounded-3xl",
```

**Nouveau:**
```
"border border-semantic-stroke-default rounded-3xl",
```

---



# Diff pour components/ui/select.tsx

**Total:** 3 remplacements

---

## Ligne 195

**Contexte:** text

**Ancien:**
```
className="text-[var(--semantic-icon-subdued)]"
```

**Nouveau:**
```
className="text-semantic-icon-subdued"
```

---

## Ligne 66

**Contexte:** text

**Ancien:**
```
className="text-[var(--semantic-icon-subdued)] shrink-0 pointer-events-none"
```

**Nouveau:**
```
className="text-semantic-icon-subdued shrink-0 pointer-events-none"
```

---

## Ligne 55

**Contexte:** border

**Ancien:**
```
"aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
```

**Nouveau:**
```
"aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-semantic-stroke-rag-danger-default",
```

---



# Diff pour components/ui/slider.tsx

**Total:** 2 remplacements

---

## Ligne 56

**Contexte:** border

**Ancien:**
```
className="border-[var(--semantic-surface-interaction-strong)] ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
```

**Nouveau:**
```
className="border-semantic-surface-interaction-strong ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
```

---

## Ligne 48

**Contexte:** bg

**Ancien:**
```
"bg-[var(--semantic-surface-interaction-strong)] absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
```

**Nouveau:**
```
"bg-semantic-surface-interaction-strong absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
```

---



# Diff pour components/ui/switch.tsx

**Total:** 11 remplacements

---

## Ligne 93

**Contexte:** bg

**Ancien:**
```
"data-[state=unchecked]:bg-[var(--semantic-surface-secondary)] data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
```

**Nouveau:**
```
"data-[state=unchecked]:bg-semantic-surface-secondary data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
```

---

## Ligne 93

**Contexte:** bg

**Ancien:**
```
"data-[state=unchecked]:bg-semantic-surface-secondary data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
```

**Nouveau:**
```
"data-[state=unchecked]:bg-semantic-surface-secondary data-[state=unchecked]:border data-[state=unchecked]:border-semantic-stroke-default data-[state=unchecked]:rounded-3xl",
```

---

## Ligne 91

**Contexte:** bg

**Ancien:**
```
"data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
```

**Nouveau:**
```
"data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:rounded-full data-[state=checked]:border-0",
```

---

## Ligne 78

**Contexte:** text

**Ancien:**
```
<span className="text-sm leading-5 text-[var(--semantic-text-subdued)]">
```

**Nouveau:**
```
<span className="text-sm leading-5 text-semantic-text-subdued">
```

---

## Ligne 71

**Contexte:** text

**Ancien:**
```
"text-[var(--semantic-text-default)]",
```

**Nouveau:**
```
"text-semantic-text-default",
```

---

## Ligne 63

**Contexte:** bg

**Ancien:**
```
"has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

**Nouveau:**
```
"has-[[data-state=checked]]:bg-semantic-surface-whisper has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

---

## Ligne 63

**Contexte:** bg

**Ancien:**
```
"has-[[data-state=checked]]:bg-semantic-surface-whisper has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

**Nouveau:**
```
"has-[[data-state=checked]]:bg-semantic-surface-whisper has-[[data-state=checked]]:border-semantic-stroke-default",
```

---

## Ligne 61

**Contexte:** border

**Ancien:**
```
"border-[var(--semantic-stroke-subdued)] bg-transparent",
```

**Nouveau:**
```
"border-semantic-stroke-subdued bg-transparent",
```

---

## Ligne 20

**Contexte:** bg

**Ancien:**
```
"data-[state=unchecked]:bg-[var(--semantic-surface-secondary)] data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
```

**Nouveau:**
```
"data-[state=unchecked]:bg-semantic-surface-secondary data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
```

---

## Ligne 20

**Contexte:** bg

**Ancien:**
```
"data-[state=unchecked]:bg-semantic-surface-secondary data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
```

**Nouveau:**
```
"data-[state=unchecked]:bg-semantic-surface-secondary data-[state=unchecked]:border data-[state=unchecked]:border-semantic-stroke-default data-[state=unchecked]:rounded-3xl",
```

---

## Ligne 18

**Contexte:** bg

**Ancien:**
```
"data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
```

**Nouveau:**
```
"data-[state=checked]:bg-semantic-surface-interaction-strong data-[state=checked]:rounded-full data-[state=checked]:border-0",
```

---



