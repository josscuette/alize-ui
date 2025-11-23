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

