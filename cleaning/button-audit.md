# 🔍 AUDIT COMPLET : components/ui/button.tsx

**Date :** 2025-11-21  
**Phase :** 1 - Audit (avant migration)

---

## 📋 Vue d'ensemble

**Fichiers analysés :**
- `components/ui/button.tsx` (94 lignes)
- `components/ui/button.styles.ts` (144 lignes) - fichier de styles actuel

**Structure actuelle :**
- Le composant utilise `button.styles.ts` qui contient des constantes de styles
- Les styles sont organisés mais n'utilisent PAS encore la Foundation Layer `/styles`
- Le composant a une logique conditionnelle pour les boutons icon-only

---

## 🎨 STYLES IDENTIFIÉS

### 1. BASE STYLES (`buttonBase`)

**Localisation :** `button.styles.ts` lignes 4-12

**Classes utilisées :**
```
- Layout: inline-flex items-center justify-center whitespace-nowrap
- Typography: font-normal
- Animation: transition-all
- Disabled: disabled:pointer-events-none disabled:opacity-50
- SVG: [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0
- Focus: outline-none
- Focus ring: focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]
- Invalid: aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40
- Invalid border: aria-invalid:border-semantic-surface-rag-danger-strong
```

**Mapping Foundation Layer :**
- ✅ `states.disabled` → `disabled:pointer-events-none disabled:opacity-50`
- ✅ `states.focusRing` → `focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]`
- ✅ `states.invalidRing` → `aria-invalid:ring-semantic-surface-rag-danger-strong/20 dark:aria-invalid:ring-semantic-surface-rag-danger-strong/40`
- ✅ `states.invalidBorder` → `aria-invalid:border-semantic-surface-rag-danger-strong`
- ✅ `animation.transitionAll` → `transition-all`
- ⚠️ Layout classes → À garder inline (pas dans Foundation Layer)
- ⚠️ SVG classes → À garder inline (spécifique au composant)

---

### 2. SURFACE COLORS (`buttonSurfaces`)

**Localisation :** `button.styles.ts` lignes 15-21

**Classes identifiées :**
```typescript
primary: "bg-semantic-surface-primary"
secondary: "bg-semantic-surface-secondary"
overlays: "bg-semantic-surface-overlays-level1"
destructive: "bg-destructive"  // ⚠️ Legacy shadcn
destructiveDark: "dark:bg-destructive/60"  // ⚠️ Legacy shadcn
```

**Mapping Foundation Layer :**
- ✅ `surface.primary` → `bg-semantic-surface-primary`
- ✅ `surface.secondary` → `bg-semantic-surface-secondary`
- ✅ `surface.overlay1` → `bg-semantic-surface-overlays-level1`
- ⚠️ `surface.destructiveLegacy` → `bg-destructive` (existe dans Foundation Layer)
- ⚠️ `surface.destructiveLegacyDark` → `dark:bg-destructive/60` (existe dans Foundation Layer)

---

### 3. TEXT COLORS (`buttonText`)

**Localisation :** `button.styles.ts` lignes 24-30

**Classes identifiées :**
```typescript
reversedPersistent: "text-semantic-text-reversedpersistent"
subdued: "text-semantic-text-subdued"
interactionBright: "text-semantic-text-interaction-bright"
primary: "text-primary"  // ⚠️ Legacy shadcn
destructive: "text-[var(--destructive-foreground)]"  // ⚠️ Legacy shadcn
```

**Mapping Foundation Layer :**
- ✅ `text.reversedPersistent` → `text-semantic-text-reversedpersistent`
- ✅ `text.subdued` → `text-semantic-text-subdued`
- ✅ `text.interactionBright` → `text-semantic-text-interaction-bright`
- ⚠️ `text.primary` → `text-primary` (existe dans Foundation Layer)
- ⚠️ `text.destructiveLegacy` → `text-[var(--destructive-foreground)]` (existe dans Foundation Layer)

---

### 4. ICON COLORS (`buttonIcons`)

**Localisation :** `button.styles.ts` lignes 33-39

**Classes identifiées :**
```typescript
interactionBright: "text-semantic-icon-interaction-bright"
subdued: "text-semantic-icon-subdued"
interactionBrightHover: "hover:text-semantic-icon-interaction-bright"
reversedPersistent: "text-semantic-text-reversedpersistent"  // ⚠️ Utilise text au lieu de icon
destructive: "text-[var(--destructive-foreground)]"  // ⚠️ Legacy shadcn
```

**Mapping Foundation Layer :**
- ✅ `icon.interactionBright` → `[&_.material-symbols-outlined]:text-semantic-icon-interaction-bright`
- ✅ `icon.subdued` → `[&_.material-symbols-outlined]:text-semantic-icon-subdued`
- ✅ `icon.interactionBrightHover` → `[&_.material-symbols-outlined]:hover:text-semantic-icon-interaction-bright`
- ⚠️ `icon.reversedPersistent` → `[&_.material-symbols-outlined]:text-semantic-text-reversedpersistent` (existe dans Foundation Layer)
- ⚠️ `icon.destructiveLegacy` → `[&_.material-symbols-outlined]:!text-[var(--destructive-foreground)]` (existe dans Foundation Layer)

**Note :** Le composant utilise aussi directement dans `button.tsx` ligne 83 :
```
'[&_.material-symbols-outlined]:!text-semantic-text-reversedpersistent'
```
→ Peut utiliser `icon.reversedPersistent` de la Foundation Layer

---

### 5. STATE MODIFIERS (`buttonStates`)

**Localisation :** `button.styles.ts` lignes 42-49

**Classes identifiées :**
```typescript
hoverOpacity90: "hover:opacity-90"
hoverOpacity80: "hover:opacity-80"
hoverUnderline: "hover:underline"
hoverBgOverlays: "hover:bg-semantic-surface-overlays-level1"
hoverBgDestructive: "hover:bg-destructive/90"  // ⚠️ Legacy shadcn
focusRingDestructive: "focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40"  // ⚠️ Legacy shadcn
```

**Mapping Foundation Layer :**
- ✅ `states.hoverOpacity90` → `hover:opacity-90` (existe dans Foundation Layer)
- ✅ `states.hoverOpacity80` → `hover:opacity-80` (existe dans Foundation Layer)
- ✅ `states.hoverUnderline` → `hover:underline` (existe dans Foundation Layer)
- ✅ `states.hoverOverlay1` → `hover:bg-semantic-surface-overlays-level1` (existe dans Foundation Layer)
- ⚠️ `states.hoverDestructive` → `hover:bg-destructive/90` (existe dans Foundation Layer)
- ⚠️ `states.focusRingDestructive` → `focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40` (existe dans Foundation Layer)

---

### 6. STROKE/BORDER (`outlineStyles`)

**Localisation :** `button.styles.ts` ligne 69

**Classes identifiées :**
```
"border border-semantic-stroke-default"
```

**Mapping Foundation Layer :**
- ✅ `stroke.default` → `border-semantic-stroke-default`
- ⚠️ `border` → classe Tailwind standard (à garder)

---

### 7. SIZE PRESETS

**Localisation :** `button.styles.ts` lignes 104-142

**Classes identifiées :**
- `defaultSize`: h-9 px-3 gap-2 rounded-md text-sm leading-5 + icon sizes
- `smSize`: h-7 px-2 gap-2 rounded-md text-sm leading-5 + icon sizes
- `lgSize`: h-11 px-4 gap-2 rounded-md text-base leading-6 + icon sizes
- `xsSize`: h-5 px-1 gap-1 rounded-[4px] text-xs leading-4 + icon sizes
- `iconSize`: size-9 rounded-md + icon sizes
- `iconSmSize`: size-7 rounded-md + icon sizes
- `iconLgSize`: size-11 rounded-md + icon sizes
- `iconXsSize`: size-5 rounded-[4px] + icon sizes

**Mapping Foundation Layer :**
- ✅ `size.md` → Correspond à `defaultSize` (h-9 px-3 gap-2 text-sm)
- ✅ `size.sm` → Correspond à `smSize` (h-7 px-2 gap-2 text-sm)
- ✅ `size.lg` → Correspond à `lgSize` (h-11 px-4 gap-2 text-base)
- ✅ `size.xs` → Correspond à `xsSize` (h-5 px-1 gap-1 text-xs)
- ✅ `size.iconMd` → Correspond à `iconSize` (size-9)
- ✅ `size.iconSm` → Correspond à `iconSmSize` (size-7)
- ✅ `size.iconLg` → Correspond à `iconLgSize` (size-11)
- ✅ `size.iconXs` → Correspond à `iconXsSize` (size-5)
- ✅ `radius.md` → `rounded-md`
- ✅ `radius.sm` → `rounded-[4px]`

**Note :** Les tailles de la Foundation Layer incluent déjà les icon sizes, donc mapping direct possible.

---

### 8. VARIANT STYLES

#### Variant: `default`
**Classes :**
- `surface.primary`
- `text.reversedPersistent`
- `states.hoverOpacity90`
- `icon.interactionBright`

#### Variant: `destructive`
**Classes :**
- `surface.destructiveLegacy`
- `text.destructiveLegacy`
- `states.hoverDestructive`
- `states.focusRingDestructive`
- `surface.destructiveLegacyDark`
- `icon.destructiveLegacy`

#### Variant: `outline`
**Classes :**
- `border` + `stroke.default`
- `text.subdued`
- `states.hoverOverlay1`
- `icon.subdued`

#### Variant: `secondary`
**Classes :**
- `surface.secondary`
- `text.subdued`
- `states.hoverOpacity80`
- `icon.subdued`

#### Variant: `ghost`
**Classes :**
- `text.subdued`
- `states.hoverOverlay1`
- `icon.subdued`

#### Variant: `link`
**Classes :**
- `text.primary`
- `underline-offset-4`
- `states.hoverUnderline`
- `text.interactionBright` (hover)
- `icon.subdued`
- `icon.interactionBrightHover`

#### Variant: `tertiary`
**Classes :**
- `text.subdued`
- `states.hoverOverlay1`
- `icon.subdued`

---

## 🔍 CLASSES NON MAPPÉES / SPÉCIFIQUES

### Classes à garder inline (spécifiques au composant) :
1. **Layout classes :** `inline-flex items-center justify-center whitespace-nowrap`
2. **SVG pointer events :** `[&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0`
3. **Focus outline :** `outline-none`
4. **Underline offset :** `underline-offset-4` (pour link variant)

### Classes Legacy shadcn (à migrer progressivement) :
1. `bg-destructive` → Devrait utiliser `surface.destructive` (mais n'existe pas en sémantique)
2. `text-primary` → Devrait utiliser `text.default` ou un token sémantique
3. `text-[var(--destructive-foreground)]` → Devrait utiliser un token sémantique

---

## 📊 RÉSUMÉ DU MAPPING

### ✅ Classes mappables vers Foundation Layer :
- **Surfaces :** 3/5 (primary, secondary, overlay1) - 2 legacy
- **Text :** 3/5 (reversedPersistent, subdued, interactionBright) - 2 legacy
- **Icon :** 4/5 (interactionBright, subdued, interactionBrightHover, reversedPersistent) - 1 legacy
- **States :** 6/6 (tous mappables)
- **Stroke :** 1/1 (default)
- **Size :** 8/8 (tous mappables)
- **Radius :** 2/2 (md, sm)

### ⚠️ Classes Legacy (shadcn) :
- `bg-destructive` / `dark:bg-destructive/60`
- `text-primary`
- `text-[var(--destructive-foreground)]`
- `hover:bg-destructive/90`
- `focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40`

### 📝 Classes spécifiques à garder inline :
- Layout classes (flex, items-center, etc.)
- SVG pointer events
- Focus outline
- Underline offset

---

## 🎯 PLAN DE MIGRATION

### Étape 1 : Imports Foundation Layer
```typescript
import { surface, text, icon, states, stroke, size, radius, animation } from "@/styles"
```

### Étape 2 : Remplacer `button.styles.ts`
- Supprimer `button.styles.ts`
- Créer les variants directement dans `button.tsx` en utilisant la Foundation Layer

### Étape 3 : Mapping des variants
- `default` → `surface.primary + text.reversedPersistent + states.hoverOpacity90 + icon.interactionBright`
- `destructive` → Utiliser les classes legacy (pas de token sémantique disponible)
- `outline` → `border + stroke.default + text.subdued + states.hoverOverlay1 + icon.subdued`
- `secondary` → `surface.secondary + text.subdued + states.hoverOpacity80 + icon.subdued`
- `ghost` → `text.subdued + states.hoverOverlay1 + icon.subdued`
- `link` → `text.primary + underline-offset-4 + states.hoverUnderline + text.interactionBright + icon.subdued + icon.interactionBrightHover`
- `tertiary` → `text.subdued + states.hoverOverlay1 + icon.subdued`

### Étape 4 : Mapping des sizes
- `default` → `size.md`
- `sm` → `size.sm`
- `lg` → `size.lg`
- `xs` → `size.xs`
- `icon` → `size.iconMd`
- `icon-sm` → `size.iconSm`
- `icon-lg` → `size.iconLg`
- `icon-xs` → `size.iconXs`

### Étape 5 : Base styles
- Utiliser `states.disabled`, `states.focusRing`, `states.invalidRing`, `states.invalidBorder`
- Garder les classes layout inline

---

## ⚠️ POINTS D'ATTENTION

1. **Classes Legacy :** Le variant `destructive` utilise des classes shadcn legacy. À documenter comme TODO pour migration future.

2. **Icon reversedPersistent :** Le composant utilise `text-semantic-text-reversedpersistent` pour les icônes dans certains cas. La Foundation Layer a `icon.reversedPersistent` qui fait la même chose.

3. **Underline offset :** La classe `underline-offset-4` n'est pas dans la Foundation Layer. À garder inline ou à ajouter à la Foundation Layer si nécessaire.

4. **Logique conditionnelle :** Le composant a une logique pour `isPrimaryIconOnly` qui override l'icône. À préserver.

---

## ✅ CONCLUSION

**Statut :** ✅ Prêt pour migration

**Classes mappables :** ~85% des classes peuvent utiliser la Foundation Layer

**Classes legacy :** ~15% nécessitent des classes shadcn (variant destructive

**Complexité :** Moyenne (logique conditionnelle à préserver)

---

**� PROCHAINE ÉTAPE :** Attendre confirmation "OK, migrate" pour procéder à la migration.

