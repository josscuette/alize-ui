# Plan de Migration - Phase 2

**Date:** 2025-11-20T21:43:57.030Z

## Résumé

- **Fichiers à migrer:** 12
- **Occurrences totales:** 121

## Fichier: `app/components/page.tsx`

### Ligne 63

**Classe arbitraire:** `[var(--semantic-text-interaction-default)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-interaction-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-interaction-default)]`
- **Nouveau:** `text-semantic-text-interaction-default`

**Ligne complète:**
```
<Link href="/" className="text-lg font-normal hover:text-[var(--semantic-text-interaction-default)] transition-colors">
```

---

### Ligne 100

**Classe arbitraire:** `[var(--semantic-surface-interaction-default)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-default

❌ **TOKEN MANQUANT:** Le token `--semantic-surface-interaction-default` n'existe pas dans `tokens-map.json`

**Ligne complète:**
```
? "bg-[var(--semantic-surface-interaction-default)] text-[var(--semantic-text-interaction-default)] font-medium"
```

---

### Ligne 100

**Classe arbitraire:** `[var(--semantic-text-interaction-default)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-text-interaction-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-interaction-default)]`
- **Nouveau:** `text-semantic-text-interaction-default`

**Ligne complète:**
```
? "bg-[var(--semantic-surface-interaction-default)] text-[var(--semantic-text-interaction-default)] font-medium"
```

---

### Ligne 119

**Classe arbitraire:** `[var(--semantic-icon-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-icon-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-subdued)]`
- **Nouveau:** `text-semantic-icon-subdued`

**Ligne complète:**
```
className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--semantic-icon-subdued)] pointer-events-none z-10"
```

---

### Ligne 139

**Classe arbitraire:** `[var(--semantic-icon-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-icon-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-subdued)]`
- **Nouveau:** `text-semantic-icon-subdued`

**Ligne complète:**
```
className="text-[var(--semantic-icon-subdued)] hover:text-[var(--semantic-icon-interaction-default)] cursor-pointer"
```

---

### Ligne 139

**Classe arbitraire:** `[var(--semantic-icon-interaction-default)]`

**Contexte détecté:** text

**Token extrait:** --semantic-icon-interaction-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-interaction-default)]`
- **Nouveau:** `text-semantic-icon-interaction-default`

**Ligne complète:**
```
className="text-[var(--semantic-icon-subdued)] hover:text-[var(--semantic-icon-interaction-default)] cursor-pointer"
```

---

### Ligne 186

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
className="size-1.5 rounded-full bg-[var(--semantic-surface-interaction-strong)]"
```

---

### Ligne 235

**Classe arbitraire:** `[var(--semantic-text-interaction-default)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-interaction-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-interaction-default)]`
- **Nouveau:** `text-semantic-text-interaction-default`

**Ligne complète:**
```
<Link href="/" className="text-lg font-normal hover:text-[var(--semantic-text-interaction-default)] transition-colors">
```

---

## Fichier: `app/page.tsx`

### Ligne 34

**Classe arbitraire:** `[var(--semantic-icon-interaction-default)]`

**Contexte détecté:** text

**Token extrait:** --semantic-icon-interaction-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-interaction-default)]`
- **Nouveau:** `text-semantic-icon-interaction-default`

**Ligne complète:**
```
<MaterialSymbol name="widgets" size={24} weight={300} className="text-[var(--semantic-icon-interaction-default)]" />
```

---

### Ligne 51

**Classe arbitraire:** `[var(--semantic-surface-subdued)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-subdued)]`
- **Nouveau:** `bg-semantic-surface-subdued`

**Ligne complète:**
```
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-[var(--semantic-surface-subdued)] text-sm text-[var(--semantic-text-subdued)]">
```

---

### Ligne 51

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-[var(--semantic-surface-subdued)] text-sm text-[var(--semantic-text-subdued)]">
```

---

### Ligne 58

**Classe arbitraire:** `[var(--semantic-text-interaction-default)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-interaction-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-interaction-default)]`
- **Nouveau:** `text-semantic-text-interaction-default`

**Ligne complète:**
```
<span className="text-[var(--semantic-text-interaction-default)]">Alize</span>
```

---

### Ligne 61

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
<p className="text-lg md:text-xl text-[var(--semantic-text-subdued)] max-w-2xl mx-auto leading-relaxed">
```

---

### Ligne 80

**Classe arbitraire:** `[var(--semantic-surface-subdued)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-subdued)]`
- **Nouveau:** `bg-semantic-surface-subdued`

**Ligne complète:**
```
<section className="container mx-auto px-4 md:px-8 py-16 md:py-24 bg-[var(--semantic-surface-subdued)] rounded-t-3xl">
```

---

### Ligne 84

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
<p className="text-lg text-[var(--semantic-text-subdued)]">
```

---

### Ligne 89

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** border

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
<Card className="border-[var(--semantic-stroke-default)] bg-background">
```

---

### Ligne 99

**Classe arbitraire:** `[var(--semantic-surface-subdued)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-subdued)]`
- **Nouveau:** `bg-semantic-surface-subdued`

**Ligne complète:**
```
<div className="p-4 rounded-md bg-[var(--semantic-surface-subdued)] border border-[var(--semantic-stroke-default)] font-mono text-sm overflow-x-auto">
```

---

### Ligne 99

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
<div className="p-4 rounded-md bg-[var(--semantic-surface-subdued)] border border-[var(--semantic-stroke-default)] font-mono text-sm overflow-x-auto">
```

---

### Ligne 100

**Classe arbitraire:** `[var(--semantic-text-default)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-default)]`
- **Nouveau:** `text-semantic-text-default`

**Ligne complète:**
```
<code className="text-[var(--semantic-text-default)]">
```

---

### Ligne 106

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** border

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
<div className="pt-4 border-t border-[var(--semantic-stroke-default)]">
```

---

### Ligne 107

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
<p className="text-sm text-[var(--semantic-text-subdued)] mb-4">
```

---

### Ligne 110

**Classe arbitraire:** `[var(--semantic-surface-subdued)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-subdued)]`
- **Nouveau:** `bg-semantic-surface-subdued`

**Ligne complète:**
```
<div className="p-4 rounded-md bg-[var(--semantic-surface-subdued)] border border-[var(--semantic-stroke-default)] font-mono text-sm overflow-x-auto">
```

---

### Ligne 110

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
<div className="p-4 rounded-md bg-[var(--semantic-surface-subdued)] border border-[var(--semantic-stroke-default)] font-mono text-sm overflow-x-auto">
```

---

### Ligne 111

**Classe arbitraire:** `[var(--semantic-text-default)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-default)]`
- **Nouveau:** `text-semantic-text-default`

**Ligne complète:**
```
<code className="text-[var(--semantic-text-default)]">
```

---

### Ligne 122

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** border

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
<footer className="container mx-auto px-4 md:px-8 py-12 border-t border-[var(--semantic-stroke-default)]">
```

---

### Ligne 126

**Classe arbitraire:** `[var(--semantic-icon-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-icon-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-subdued)]`
- **Nouveau:** `text-semantic-icon-subdued`

**Ligne complète:**
```
<MaterialSymbol name="widgets" size={20} weight={300} className="text-[var(--semantic-icon-subdued)]" />
```

---

### Ligne 127

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
<span className="text-sm text-[var(--semantic-text-subdued)]">
```

---

### Ligne 131

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
<div className="flex items-center gap-6 text-sm text-[var(--semantic-text-subdued)]">
```

---

### Ligne 134

**Classe arbitraire:** `[var(--semantic-text-interaction-default)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-interaction-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-interaction-default)]`
- **Nouveau:** `text-semantic-text-interaction-default`

**Ligne complète:**
```
className="hover:text-[var(--semantic-text-interaction-default)] transition-colors flex items-center gap-2"
```

---

### Ligne 139

**Classe arbitraire:** `[var(--semantic-text-interaction-default)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-interaction-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-interaction-default)]`
- **Nouveau:** `text-semantic-text-interaction-default`

**Ligne complète:**
```
<Link href="/components" className="hover:text-[var(--semantic-text-interaction-default)] transition-colors">
```

---

## Fichier: `components/theme-toggle.tsx`

### Ligne 39

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
<MaterialSymbol name="light_mode" size={16} className="text-[var(--semantic-text-subdued)]" />
```

---

### Ligne 47

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
<MaterialSymbol name="dark_mode" size={16} className="text-[var(--semantic-text-subdued)]" />
```

---

## Fichier: `components/ui/avatar.tsx`

### Ligne 100

**Classe arbitraire:** `[var(--semantic-surface-subdued)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-subdued)]`
- **Nouveau:** `bg-semantic-surface-subdued`

**Ligne complète:**
```
"bg-[var(--semantic-surface-subdued)] flex size-full items-center justify-center text-[var(--semantic-text-subdued)]",
```

---

### Ligne 100

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
"bg-[var(--semantic-surface-subdued)] flex size-full items-center justify-center text-[var(--semantic-text-subdued)]",
```

---

## Fichier: `components/ui/button.tsx`

### Ligne 8

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"inline-flex items-center justify-center whitespace-nowrap font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
```

---

### Ligne 8

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"inline-flex items-center justify-center whitespace-nowrap font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
```

---

### Ligne 8

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"inline-flex items-center justify-center whitespace-nowrap font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
```

---

### Ligne 8

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"inline-flex items-center justify-center whitespace-nowrap font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
```

---

### Ligne 12

**Classe arbitraire:** `[var(--semantic-surface-primary)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-primary

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-primary)]`
- **Nouveau:** `bg-semantic-surface-primary`

**Ligne complète:**
```
default: "bg-[var(--semantic-surface-primary)] text-[var(--semantic-text-reversedpersistent)] hover:opacity-90 [&_.material-symbols-outlined]:text-[var(--semantic-icon-interaction-bright)]",
```

---

### Ligne 12

**Classe arbitraire:** `[var(--semantic-text-reversedpersistent)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-text-reversedpersistent

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-reversedpersistent)]`
- **Nouveau:** `text-semantic-text-reversedpersistent`

**Ligne complète:**
```
default: "bg-[var(--semantic-surface-primary)] text-[var(--semantic-text-reversedpersistent)] hover:opacity-90 [&_.material-symbols-outlined]:text-[var(--semantic-icon-interaction-bright)]",
```

---

### Ligne 12

**Classe arbitraire:** `[var(--semantic-icon-interaction-bright)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-icon-interaction-bright

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-interaction-bright)]`
- **Nouveau:** `text-semantic-icon-interaction-bright`

**Ligne complète:**
```
default: "bg-[var(--semantic-surface-primary)] text-[var(--semantic-text-reversedpersistent)] hover:opacity-90 [&_.material-symbols-outlined]:text-[var(--semantic-icon-interaction-bright)]",
```

---

### Ligne 16

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** border

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
"border border-[var(--semantic-stroke-default)] text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

### Ligne 16

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
"border border-[var(--semantic-stroke-default)] text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

### Ligne 16

**Classe arbitraire:** `[var(--semantic-surface-overlays-level1)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-overlays-level1

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-overlays-level1)]`
- **Nouveau:** `bg-semantic-surface-overlays-level1`

**Ligne complète:**
```
"border border-[var(--semantic-stroke-default)] text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

### Ligne 16

**Classe arbitraire:** `[var(--semantic-icon-subdued)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-icon-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-subdued)]`
- **Nouveau:** `text-semantic-icon-subdued`

**Ligne complète:**
```
"border border-[var(--semantic-stroke-default)] text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

### Ligne 18

**Classe arbitraire:** `[var(--semantic-surface-secondary)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-secondary

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-secondary)]`
- **Nouveau:** `bg-semantic-surface-secondary`

**Ligne complète:**
```
"bg-[var(--semantic-surface-secondary)] text-[var(--semantic-text-subdued)] hover:opacity-80 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

### Ligne 18

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
"bg-[var(--semantic-surface-secondary)] text-[var(--semantic-text-subdued)] hover:opacity-80 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

### Ligne 18

**Classe arbitraire:** `[var(--semantic-icon-subdued)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-icon-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-subdued)]`
- **Nouveau:** `text-semantic-icon-subdued`

**Ligne complète:**
```
"bg-[var(--semantic-surface-secondary)] text-[var(--semantic-text-subdued)] hover:opacity-80 [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

### Ligne 20

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
"text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

### Ligne 20

**Classe arbitraire:** `[var(--semantic-surface-overlays-level1)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-overlays-level1

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-overlays-level1)]`
- **Nouveau:** `bg-semantic-surface-overlays-level1`

**Ligne complète:**
```
"text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

### Ligne 20

**Classe arbitraire:** `[var(--semantic-icon-subdued)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-icon-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-subdued)]`
- **Nouveau:** `text-semantic-icon-subdued`

**Ligne complète:**
```
"text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

### Ligne 21

**Classe arbitraire:** `[var(--semantic-text-interaction-bright)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-interaction-bright

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-interaction-bright)]`
- **Nouveau:** `text-semantic-text-interaction-bright`

**Ligne complète:**
```
link: "text-primary underline-offset-4 hover:underline hover:text-[var(--semantic-text-interaction-bright)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)] hover:[&_.material-symbols-outlined]:!text-[var(--semantic-icon-interaction-bright)]",
```

---

### Ligne 21

**Classe arbitraire:** `[var(--semantic-icon-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-icon-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-subdued)]`
- **Nouveau:** `text-semantic-icon-subdued`

**Ligne complète:**
```
link: "text-primary underline-offset-4 hover:underline hover:text-[var(--semantic-text-interaction-bright)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)] hover:[&_.material-symbols-outlined]:!text-[var(--semantic-icon-interaction-bright)]",
```

---

### Ligne 21

**Classe arbitraire:** `[var(--semantic-icon-interaction-bright)]`

**Contexte détecté:** text

**Token extrait:** --semantic-icon-interaction-bright

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-interaction-bright)]`
- **Nouveau:** `text-semantic-icon-interaction-bright`

**Ligne complète:**
```
link: "text-primary underline-offset-4 hover:underline hover:text-[var(--semantic-text-interaction-bright)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)] hover:[&_.material-symbols-outlined]:!text-[var(--semantic-icon-interaction-bright)]",
```

---

### Ligne 22

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
tertiary: "text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

### Ligne 22

**Classe arbitraire:** `[var(--semantic-surface-overlays-level1)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-overlays-level1

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-overlays-level1)]`
- **Nouveau:** `bg-semantic-surface-overlays-level1`

**Ligne complète:**
```
tertiary: "text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

### Ligne 22

**Classe arbitraire:** `[var(--semantic-icon-subdued)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-icon-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-subdued)]`
- **Nouveau:** `text-semantic-icon-subdued`

**Ligne complète:**
```
tertiary: "text-[var(--semantic-text-subdued)] hover:bg-[var(--semantic-surface-overlays-level1)] [&_.material-symbols-outlined]:!text-[var(--semantic-icon-subdued)]",
```

---

### Ligne 72

**Classe arbitraire:** `[var(--semantic-text-reversedpersistent)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-reversedpersistent

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-reversedpersistent)]`
- **Nouveau:** `text-semantic-text-reversedpersistent`

**Ligne complète:**
```
isPrimaryIconOnly && '[&_.material-symbols-outlined]:!text-[var(--semantic-text-reversedpersistent)]',
```

---

## Fichier: `components/ui/checkbox.tsx`

### Ligne 17

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** border

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
"peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 17

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 17

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 17

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 17

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 17

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 17

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 17

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"peer border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 52

**Classe arbitraire:** `[var(--semantic-stroke-subdued)]`

**Contexte détecté:** border

**Token extrait:** --semantic-stroke-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-subdued)]`
- **Nouveau:** `border-semantic-stroke-subdued`

**Ligne complète:**
```
"border-[var(--semantic-stroke-subdued)] bg-transparent",
```

---

### Ligne 54

**Classe arbitraire:** `[var(--semantic-surface-whisper)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-whisper

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-whisper)]`
- **Nouveau:** `bg-semantic-surface-whisper`

**Ligne complète:**
```
"has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

---

### Ligne 54

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
"has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

---

### Ligne 63

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** border

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
"border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 63

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 63

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 63

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 63

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 63

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 63

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 63

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"border-[var(--semantic-stroke-default)] data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:text-white data-[state=checked]:border-[var(--semantic-surface-interaction-strong)] focus-visible:border-[var(--semantic-surface-interaction-strong)] focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-surface-rag-danger-strong)] size-4 shrink-0 rounded-[4px] border transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
```

---

### Ligne 78

**Classe arbitraire:** `[var(--semantic-text-default)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-default)]`
- **Nouveau:** `text-semantic-text-default`

**Ligne complète:**
```
"text-[var(--semantic-text-default)]",
```

---

### Ligne 85

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
<span className="text-sm leading-5 text-[var(--semantic-text-subdued)]">
```

---

## Fichier: `components/ui/input.tsx`

### Ligne 13

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
```

---

### Ligne 13

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
```

---

### Ligne 13

**Classe arbitraire:** `[var(--semantic-stroke-rag-danger-default)]`

**Contexte détecté:** border

**Token extrait:** --semantic-stroke-rag-danger-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-rag-danger-default)]`
- **Nouveau:** `border-semantic-stroke-rag-danger-default`

**Ligne complète:**
```
"aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
```

---

## Fichier: `components/ui/progress.tsx`

### Ligne 17

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"bg-[var(--semantic-surface-interaction-strong)]/20 relative h-2 w-full overflow-hidden rounded-full",
```

---

### Ligne 24

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
className="bg-[var(--semantic-surface-interaction-strong)] h-full w-full flex-1 transition-all"
```

---

## Fichier: `components/ui/radio-group.tsx`

### Ligne 33

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** border

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
"border border-[var(--semantic-stroke-default)] rounded-3xl",
```

---

### Ligne 36

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
```

---

### Ligne 38

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px]",
```

---

### Ligne 40

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** border

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
```

---

### Ligne 41

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20",
```

---

### Ligne 42

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40",
```

---

### Ligne 78

**Classe arbitraire:** `[var(--semantic-stroke-subdued)]`

**Contexte détecté:** border

**Token extrait:** --semantic-stroke-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-subdued)]`
- **Nouveau:** `border-semantic-stroke-subdued`

**Ligne complète:**
```
"border-[var(--semantic-stroke-subdued)] bg-transparent",
```

---

### Ligne 80

**Classe arbitraire:** `[var(--semantic-surface-whisper)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-whisper

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-whisper)]`
- **Nouveau:** `bg-semantic-surface-whisper`

**Ligne complète:**
```
"has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

---

### Ligne 80

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
"has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

---

### Ligne 93

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** border

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
"border border-[var(--semantic-stroke-default)] rounded-3xl",
```

---

### Ligne 96

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
```

---

### Ligne 98

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px]",
```

---

### Ligne 100

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** border

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"aria-invalid:border-[var(--semantic-surface-rag-danger-strong)]",
```

---

### Ligne 101

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20",
```

---

### Ligne 102

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40",
```

---

### Ligne 118

**Classe arbitraire:** `[var(--semantic-text-default)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-default)]`
- **Nouveau:** `text-semantic-text-default`

**Ligne complète:**
```
"text-[var(--semantic-text-default)]",
```

---

### Ligne 125

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
<span className="text-sm leading-5 text-[var(--semantic-text-subdued)]">
```

---

## Fichier: `components/ui/select.tsx`

### Ligne 55

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
```

---

### Ligne 55

**Classe arbitraire:** `[var(--semantic-surface-rag-danger-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-rag-danger-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-rag-danger-strong)]`
- **Nouveau:** `bg-semantic-surface-rag-danger-strong`

**Ligne complète:**
```
"aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
```

---

### Ligne 55

**Classe arbitraire:** `[var(--semantic-stroke-rag-danger-default)]`

**Contexte détecté:** border

**Token extrait:** --semantic-stroke-rag-danger-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-rag-danger-default)]`
- **Nouveau:** `border-semantic-stroke-rag-danger-default`

**Ligne complète:**
```
"aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/20 dark:aria-invalid:ring-[var(--semantic-surface-rag-danger-strong)]/40 aria-invalid:border-[var(--semantic-stroke-rag-danger-default)]",
```

---

### Ligne 66

**Classe arbitraire:** `[var(--semantic-icon-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-icon-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-subdued)]`
- **Nouveau:** `text-semantic-icon-subdued`

**Ligne complète:**
```
className="text-[var(--semantic-icon-subdued)] shrink-0 pointer-events-none"
```

---

### Ligne 195

**Classe arbitraire:** `[var(--semantic-icon-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-icon-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-icon-subdued)]`
- **Nouveau:** `text-semantic-icon-subdued`

**Ligne complète:**
```
className="text-[var(--semantic-icon-subdued)]"
```

---

## Fichier: `components/ui/slider.tsx`

### Ligne 48

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"bg-[var(--semantic-surface-interaction-strong)] absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
```

---

### Ligne 56

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** border

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
className="border-[var(--semantic-surface-interaction-strong)] ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
```

---

## Fichier: `components/ui/switch.tsx`

### Ligne 18

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
```

---

### Ligne 20

**Classe arbitraire:** `[var(--semantic-surface-secondary)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-secondary

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-secondary)]`
- **Nouveau:** `bg-semantic-surface-secondary`

**Ligne complète:**
```
"data-[state=unchecked]:bg-[var(--semantic-surface-secondary)] data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
```

---

### Ligne 20

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
"data-[state=unchecked]:bg-[var(--semantic-surface-secondary)] data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
```

---

### Ligne 22

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px] focus-visible:outline-none",
```

---

### Ligne 61

**Classe arbitraire:** `[var(--semantic-stroke-subdued)]`

**Contexte détecté:** border

**Token extrait:** --semantic-stroke-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-subdued)]`
- **Nouveau:** `border-semantic-stroke-subdued`

**Ligne complète:**
```
"border-[var(--semantic-stroke-subdued)] bg-transparent",
```

---

### Ligne 63

**Classe arbitraire:** `[var(--semantic-surface-whisper)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-whisper

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-whisper)]`
- **Nouveau:** `bg-semantic-surface-whisper`

**Ligne complète:**
```
"has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

---

### Ligne 63

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
"has-[[data-state=checked]]:bg-[var(--semantic-surface-whisper)] has-[[data-state=checked]]:border-[var(--semantic-stroke-default)]",
```

---

### Ligne 71

**Classe arbitraire:** `[var(--semantic-text-default)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-default)]`
- **Nouveau:** `text-semantic-text-default`

**Ligne complète:**
```
"text-[var(--semantic-text-default)]",
```

---

### Ligne 78

**Classe arbitraire:** `[var(--semantic-text-subdued)]`

**Contexte détecté:** text

**Token extrait:** --semantic-text-subdued

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-text-subdued)]`
- **Nouveau:** `text-semantic-text-subdued`

**Ligne complète:**
```
<span className="text-sm leading-5 text-[var(--semantic-text-subdued)]">
```

---

### Ligne 91

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"data-[state=checked]:bg-[var(--semantic-surface-interaction-strong)] data-[state=checked]:rounded-full data-[state=checked]:border-0",
```

---

### Ligne 93

**Classe arbitraire:** `[var(--semantic-surface-secondary)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-surface-secondary

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-secondary)]`
- **Nouveau:** `bg-semantic-surface-secondary`

**Ligne complète:**
```
"data-[state=unchecked]:bg-[var(--semantic-surface-secondary)] data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
```

---

### Ligne 93

**Classe arbitraire:** `[var(--semantic-stroke-default)]`

**Contexte détecté:** bg

**Token extrait:** --semantic-stroke-default

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-stroke-default)]`
- **Nouveau:** `border-semantic-stroke-default`

**Ligne complète:**
```
"data-[state=unchecked]:bg-[var(--semantic-surface-secondary)] data-[state=unchecked]:border data-[state=unchecked]:border-[var(--semantic-stroke-default)] data-[state=unchecked]:rounded-3xl",
```

---

### Ligne 95

**Classe arbitraire:** `[var(--semantic-surface-interaction-strong)]`

**Contexte détecté:** ring

**Token extrait:** --semantic-surface-interaction-strong

✅ **REMPLACEMENT DIRECT:**
- **Ancien:** `[var(--semantic-surface-interaction-strong)]`
- **Nouveau:** `bg-semantic-surface-interaction-strong`

**Ligne complète:**
```
"focus-visible:ring-[var(--semantic-surface-interaction-strong)]/50 focus-visible:ring-[3px] focus-visible:outline-none",
```

---

## Problèmes identifiés

### Tokens manquants dans tokens-map.json

**Total:** 1 tokens manquants

- `--semantic-surface-interaction-default`
  
  **⚠️ RECOMMANDATION:** Ce token n'existe pas dans le mapping. Options disponibles dans `tokens-map.json`:
  - `--semantic-surface-interaction-strong` → `bg-semantic-surface-interaction-strong`
  - `--semantic-surface-interaction-bright` → `bg-semantic-surface-interaction-bright`
  - `--semantic-surface-interaction-subdued` → `bg-semantic-surface-interaction-subdued`
  
  **Action requise:** Déterminer quel token utiliser ou ajouter `interaction-default` au mapping.


### Statistiques

- ✅ **Remplacements directs:** 120
- ❌ **Tokens manquants:** 1
- ⚠️ **Ambiguïtés:** 0

