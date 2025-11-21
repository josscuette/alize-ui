# 🔍 AUDIT COMPLET : components/ui/textarea.tsx

**Date :** 2025-11-21  
**Phase :** 1 - Audit avant migration  
**Statut :** ✅ Audit terminé

---

## 📊 Résumé Exécutif

### Composants analysés :
- ✅ `Textarea` (lignes 5-16) - Composant principal

### Statistiques :
- **Lignes totales :** 18
- **Classes Tailwind identifiées :** ~25-30 classes uniques
- **Classes sémantiques utilisées :** ~0 (toutes legacy shadcn)
- **Classes legacy/hardcodées :** ~15-20
- **Classes spécifiques au composant :** ~10-15

### Comparaison avec `input.tsx` :
Le composant `textarea.tsx` est très similaire à `input.tsx` et devrait suivre la même stratégie de migration.

---

## 🎯 Classes Identifiées par Catégorie

### 1. Layout & Structure

#### Classes utilisées :
- `flex` - Display flex
- `field-sizing-content` - CSS field-sizing pour auto-resize
- `min-h-16` - Hauteur minimale (64px)
- `w-full` - Largeur complète
- `px-3 py-2` - Padding horizontal et vertical

**Mapping Foundation Layer :**
- Ces classes de layout sont spécifiques au composant et doivent rester inline.

---

### 2. Background & Surface

#### Classes utilisées :
- `bg-transparent` - Background transparent
- `dark:bg-input/30` - Background dark mode (legacy shadcn)

**Mapping Foundation Layer :**
- `bg-transparent` → Peut rester inline (très commun)
- `dark:bg-input/30` → Legacy shadcn, pas de token sémantique équivalent

---

### 3. Border & Stroke

#### Classes utilisées :
- `border` - Border générique
- `border-input` - Border color legacy shadcn

**Mapping Foundation Layer :**
- `border` → Peut rester inline (classe Tailwind de base)
- `border-input` → Legacy shadcn, pas de token sémantique équivalent

---

### 4. Radius

#### Classes utilisées :
- `rounded-md` - Border radius medium

**Mapping Foundation Layer :**
- `rounded-md` → `radius.md` ✅

---

### 5. Typography

#### Classes utilisées :
- `text-base` - Taille de texte de base
- `md:text-sm` - Taille de texte responsive (medium breakpoint)

**Mapping Foundation Layer :**
- Ces classes typographiques peuvent rester inline car elles sont spécifiques au composant.

---

### 6. Text Colors (Legacy Shadcn)

#### Classes utilisées :
- `placeholder:text-muted-foreground` - Couleur du placeholder (legacy shadcn)

**Mapping Foundation Layer :**
- `placeholder:text-muted-foreground` → Legacy shadcn, pas de token sémantique équivalent

---

### 7. Visual Effects

#### Classes utilisées :
- `shadow-xs` - Ombre extra-small
- `outline-none` - Outline none

**Mapping Foundation Layer :**
- `shadow-xs` → `shadow.xs` ✅ (nouveau dans Foundation Layer)
- `outline-none` → `states.outlineNone` ✅

---

### 8. Animation & Transitions

#### Classes utilisées :
- `transition-[color,box-shadow]` - Transition spécifique

**Mapping Foundation Layer :**
- `transition-[color,box-shadow]` → `animation.transitionFormControl` ✅ (nouveau dans Foundation Layer)

---

### 9. Focus States

#### Classes utilisées :
- `focus-visible:border-ring` - Border color focus (legacy shadcn)
- `focus-visible:ring-ring/50` - Ring color focus (legacy shadcn)
- `focus-visible:ring-[3px]` - Ring size focus

**Mapping Foundation Layer :**
- Ces classes sont legacy shadcn et doivent rester inline (comme dans `input.tsx`).

---

### 10. Invalid/Error States

#### Classes utilisées :
- `aria-invalid:ring-destructive/20` - Ring invalid light mode (legacy shadcn)
- `dark:aria-invalid:ring-destructive/40` - Ring invalid dark mode (legacy shadcn)
- `aria-invalid:border-destructive` - Border invalid (legacy shadcn)

**Mapping Foundation Layer :**
- `aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40` → `states.invalidRing` ⚠️
  - Note: `states.invalidRing` utilise `ring-semantic-surface-rag-danger-strong/20` qui est différent de `ring-destructive/20`
  - Cependant, `input.tsx` utilise `states.invalidRing`, donc on devrait faire pareil pour la cohérence
- `aria-invalid:border-destructive` → Peut rester inline (legacy shadcn) OU utiliser `stroke.destructive` avec préfixe

---

### 11. Disabled States

#### Classes utilisées :
- `disabled:cursor-not-allowed` - Cursor disabled
- `disabled:opacity-50` - Opacity disabled

**Mapping Foundation Layer :**
- `disabled:cursor-not-allowed` → `states.disabledCursor` ✅
- `disabled:opacity-50` → `states.disabled` (partiel) ⚠️
  - Note: `states.disabled` inclut aussi `disabled:pointer-events-none`, mais le textarea n'utilise pas cette classe
  - Comme dans `input.tsx`, on devrait utiliser `states.disabled` ET `states.disabledCursor` séparément

---

## 📋 Mapping vers Foundation Layer

### ✅ Classes Migrables Directement

| Classe Actuelle | Foundation Layer | Composant |
|-----------------|------------------|------------|
| `rounded-md` | `radius.md` | Textarea |
| `shadow-xs` | `shadow.xs` | Textarea |
| `outline-none` | `states.outlineNone` | Textarea |
| `transition-[color,box-shadow]` | `animation.transitionFormControl` | Textarea |
| `disabled:cursor-not-allowed` | `states.disabledCursor` | Textarea |
| `disabled:opacity-50` | `states.disabled` (partiel) | Textarea |
| `aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40` | `states.invalidRing` | Textarea |

### ⚠️ Classes à Conserver Inline

#### Classes legacy shadcn :
- `border-input` - Legacy shadcn, pas de token sémantique équivalent
- `dark:bg-input/30` - Legacy shadcn, pas de token sémantique équivalent
- `placeholder:text-muted-foreground` - Legacy shadcn, pas de token sémantique équivalent
- `focus-visible:border-ring` - Legacy shadcn, pas de token sémantique équivalent
- `focus-visible:ring-ring/50` - Legacy shadcn, pas de token sémantique équivalent
- `focus-visible:ring-[3px]` - Legacy shadcn, pas de token sémantique équivalent
- `aria-invalid:border-destructive` - Legacy shadcn, pas de token sémantique équivalent

#### Classes spécifiques au composant :
- `flex` - Layout spécifique
- `field-sizing-content` - CSS spécifique pour auto-resize
- `min-h-16` - Hauteur minimale spécifique
- `w-full` - Largeur spécifique
- `px-3 py-2` - Padding spécifique (différent de `input.tsx` qui utilise `px-3 py-1`)
- `text-base md:text-sm` - Typography spécifique
- `bg-transparent` - Background spécifique

---

## ⚠️ Points d'Attention

### 1. **Cohérence avec `input.tsx`**
Le composant `textarea.tsx` est très similaire à `input.tsx`. Il devrait suivre la même stratégie de migration pour maintenir la cohérence :
- Utiliser `states.disabled` ET `states.disabledCursor` séparément
- Utiliser `states.invalidRing` même si les valeurs sont légèrement différentes (pour la cohérence)
- Conserver les classes legacy shadcn inline

### 2. **Padding Différent**
Le textarea utilise `px-3 py-2` alors que `input.tsx` utilise `px-3 py-1`. Cette différence est intentionnelle et doit être conservée.

### 3. **Hauteur Minimale**
Le textarea utilise `min-h-16` pour définir une hauteur minimale, ce qui est spécifique aux textareas multi-lignes.

### 4. **Field Sizing**
Le textarea utilise `field-sizing-content` pour l'auto-resize, ce qui est spécifique aux textareas.

### 5. **Invalid Border**
Le composant utilise `aria-invalid:border-destructive` (legacy shadcn). Pour la cohérence avec `input.tsx`, on pourrait utiliser `aria-invalid:border-semantic-stroke-rag-danger-default`, mais cela changerait le comportement visuel.

**Recommandation :** Conserver `aria-invalid:border-destructive` inline pour maintenir le comportement legacy shadcn.

---

## 📊 Estimation de Migration

### Classes totales identifiées : ~25-30
### Classes migrables vers Foundation Layer : ~7-8
### Taux de migration estimé : **~25-30%**

**Répartition :**
- ✅ Classes Foundation Layer migrables : ~7-8
- ⚠️ Classes legacy shadcn à conserver : ~10-12
- ⚠️ Classes spécifiques à conserver : ~8-10

---

## 🎯 Plan de Migration Recommandé

### Phase 1 : Imports Foundation Layer
```typescript
import { states, radius, shadow, animation } from "../../styles"
```

### Phase 2 : Migration Textarea Component
- Remplacer les classes sémantiques par les imports Foundation Layer
- Conserver les classes legacy shadcn inline (comme dans `input.tsx`)
- Conserver les classes spécifiques au composant inline

### Phase 3 : Organisation du Code
- Organiser les classes par catégories (comme dans `input.tsx`)
- Ajouter des commentaires pour clarifier les choix

---

## ✅ Conclusion

Le composant `textarea.tsx` est un bon candidat pour la migration vers la Foundation Layer. Environ **25-30%** des classes peuvent être migrées, principalement :
- Les classes de radius
- Les classes de shadow
- Les classes d'états (disabled, invalid)
- Les classes d'animation
- Les classes de visual effects

Les classes legacy shadcn et les classes spécifiques au composant doivent rester inline pour maintenir la cohérence avec `input.tsx`.

---

**✅ Audit terminé - Prêt pour migration**

