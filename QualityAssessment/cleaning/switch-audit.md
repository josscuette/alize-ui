# 🔍 AUDIT COMPLET : components/ui/switch.tsx

**Date :** 2025-11-21  
**Phase :** 1 - Audit avant migration  
**Statut :** ✅ Audit terminé

---

## 📊 Résumé Exécutif

### Composants analysés :
- ✅ `Switch` (lignes 8-38) - Composant principal
- ✅ `SwitchCard` (lignes 41-113) - Variante avec label et description

### Statistiques :
- **Lignes totales :** 116
- **Classes Tailwind identifiées :** ~45-50 classes uniques
- **Classes sémantiques utilisées :** ~15
- **Classes legacy/hardcodées :** ~5
- **Classes spécifiques au composant :** ~25-30

---

## 🎯 Classes Identifiées par Catégorie

### 1. Layout & Structure

#### Switch Component :
- `peer` - Peer selector pour styling du thumb
- `relative` - Position relative pour le thumb absolu
- `inline-flex` - Display inline-flex
- `h-4 w-8` - Dimensions fixes (16px × 32px)
- `shrink-0` - Empêche le rétrécissement
- `items-center` - Alignement vertical centré

#### SwitchThumb :
- `pointer-events-none` - Désactive les événements pointer
- `absolute` - Position absolue
- `top-1/2 -translate-y-1/2` - Centrage vertical
- `size-3` - Taille 12px × 12px
- `right-[2px]` / `left-[2px]` - Positionnement horizontal

#### SwitchCard Label :
- `group` - Group selector pour styling conditionnel
- `relative` - Position relative
- `flex` - Display flex
- `gap-6` - Espacement entre éléments
- `items-start` - Alignement vertical en haut
- `px-4 py-3` - Padding
- `flex-1 min-w-0` - Flex grow avec min-width 0
- `flex-col gap-1` - Layout vertical avec gap

---

### 2. Background & Surface

#### Classes sémantiques utilisées :
- ✅ `bg-semantic-surface-interaction-strong` - État checked (ligne 18, 91)
- ✅ `bg-semantic-surface-secondary` - État unchecked (ligne 20, 93)
- ✅ `bg-semantic-surface-whisper` - État actif du card (ligne 63)
- ✅ `bg-transparent` - Background transparent (ligne 61)

#### Classes hardcodées :
- ⚠️ `bg-white` - Thumb checked (ligne 32, 104)
- ⚠️ `bg-[var(--color-solstice-glacier-400)]` - Thumb unchecked (ligne 34, 106)

**Mapping Foundation Layer :**
- `bg-semantic-surface-interaction-strong` → `surface.interactionStrong` ✅
- `bg-semantic-surface-secondary` → `surface.secondary` ✅
- `bg-semantic-surface-whisper` → `surface.whisper` ✅
- `bg-transparent` → Peut rester inline (très commun)

---

### 3. Border & Stroke

#### Classes sémantiques utilisées :
- ✅ `border-semantic-stroke-default` - Border unchecked (ligne 20, 93)
- ✅ `border-semantic-stroke-subdued` - Border card inactive (ligne 61)
- ✅ `border` - Border générique (ligne 20, 59, 93)

**Mapping Foundation Layer :**
- `border-semantic-stroke-default` → `stroke.default` ✅
- `border-semantic-stroke-subdued` → `stroke.subdued` ✅
- `border` → Peut rester inline (classe Tailwind de base)

---

### 4. Radius

#### Classes utilisées :
- `rounded-full` - État checked (ligne 18, 91)
- `rounded-3xl` - État unchecked (ligne 20, 93)
- `rounded-[8px]` - Card border radius (ligne 59)

**Mapping Foundation Layer :**
- `rounded-full` → `radius.full` ✅ (si disponible)
- `rounded-3xl` → `radius["3xl"]` ✅ (si disponible)
- `rounded-[8px]` → Peut rester inline (spécifique au card)

---

### 5. Text Colors

#### Classes sémantiques utilisées :
- ✅ `text-semantic-text-default` - Label principal (ligne 71)
- ✅ `text-semantic-text-subdued` - Description (ligne 78)

**Mapping Foundation Layer :**
- `text-semantic-text-default` → `text.default` ✅
- `text-semantic-text-subdued` → `text.subdued` ✅

---

### 6. States & Interactions

#### Disabled states :
- `disabled:cursor-not-allowed` - Cursor disabled (ligne 16, 89)
- `disabled:opacity-50` - Opacity disabled (ligne 16, 89)

**Mapping Foundation Layer :**
- `disabled:cursor-not-allowed` → `states.disabledCursor` ✅
- `disabled:opacity-50` → `states.disabled` (partiel) ⚠️
- Note: `states.disabled` inclut aussi `disabled:pointer-events-none`, mais le switch n'utilise pas cette classe

#### Focus states :
- `focus-visible:ring-semantic-surface-interaction-strong/50` - Ring color (ligne 22, 95)
- `focus-visible:ring-[3px]` - Ring size (ligne 22, 95)
- `focus-visible:outline-none` - Outline none (ligne 22, 95)

**Mapping Foundation Layer :**
- `focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]` → `states.focusRing` ⚠️
  - Note: `states.focusRing` utilise `ring-semantic-surface-interaction-strong/50` qui est identique ✅
- `focus-visible:outline-none` → `states.outlineNone` ✅ (nouveau dans Foundation Layer)

#### Data state classes :
- `data-[state=checked]:bg-semantic-surface-interaction-strong` - Background checked
- `data-[state=checked]:rounded-full` - Radius checked
- `data-[state=checked]:border-0` - Border checked
- `data-[state=checked]:bg-white` - Thumb checked
- `data-[state=checked]:right-[2px]` - Position thumb checked
- `data-[state=unchecked]:bg-semantic-surface-secondary` - Background unchecked
- `data-[state=unchecked]:border` - Border unchecked
- `data-[state=unchecked]:border-semantic-stroke-default` - Border color unchecked
- `data-[state=unchecked]:rounded-3xl` - Radius unchecked
- `data-[state=unchecked]:bg-[var(--color-solstice-glacier-400)]` - Thumb unchecked
- `data-[state=unchecked]:left-[2px]` - Position thumb unchecked
- `has-[[data-state=checked]]:bg-semantic-surface-whisper` - Card active
- `has-[[data-state=checked]]:border-semantic-stroke-default` - Card border active
- `group-has-[[data-state=checked]]:font-normal` - Font weight card active

**Mapping Foundation Layer :**
- Ces classes avec préfixes `data-[state=...]` et `has-[[...]]` doivent rester inline car elles sont spécifiques au comportement du composant Radix UI Switch.

---

### 7. Animation & Transitions

#### Classes utilisées :
- `transition-all` - Transition générale (ligne 16, 59, 89)
- `transition-transform` - Transition du thumb (ligne 30, 102)

**Mapping Foundation Layer :**
- `transition-all` → `animation.transitionAll` ✅
- `transition-transform` → `animation.transitionTransform` ✅

---

### 8. Visual Effects

#### Classes utilisées :
- `outline-none` - Outline none (ligne 16, 89)
- `ring-0` - Ring 0 pour le thumb (ligne 30, 102)

**Mapping Foundation Layer :**
- `outline-none` → `states.outlineNone` ✅ (nouveau dans Foundation Layer)
- `ring-0` → Peut rester inline (spécifique au thumb)

---

### 9. Typography

#### Classes utilisées :
- `text-sm leading-5` - Taille et line-height (ligne 70, 78)
- `font-normal` - Font weight (ligne 72)

**Mapping Foundation Layer :**
- Ces classes typographiques peuvent rester inline car elles sont spécifiques au composant.

---

### 10. Cursor & Pointer Events

#### Classes utilisées :
- `cursor-pointer` - Cursor pointer (ligne 59, 88)
- `pointer-events-none` - Pointer events none (ligne 30, 102)

**Mapping Foundation Layer :**
- Ces classes peuvent rester inline car elles sont spécifiques au comportement du composant.

---

## 📋 Mapping vers Foundation Layer

### ✅ Classes Migrables Directement

| Classe Actuelle | Foundation Layer | Composant |
|-----------------|------------------|------------|
| `bg-semantic-surface-interaction-strong` | `surface.interactionStrong` | Switch (checked) |
| `bg-semantic-surface-secondary` | `surface.secondary` | Switch (unchecked) |
| `bg-semantic-surface-whisper` | `surface.whisper` | SwitchCard (active) |
| `border-semantic-stroke-default` | `stroke.default` | Switch (unchecked), SwitchCard (active) |
| `border-semantic-stroke-subdued` | `stroke.subdued` | SwitchCard (inactive) |
| `text-semantic-text-default` | `text.default` | SwitchCard label |
| `text-semantic-text-subdued` | `text.subdued` | SwitchCard description |
| `disabled:cursor-not-allowed` | `states.disabledCursor` | Switch |
| `disabled:opacity-50` | `states.disabled` (partiel) | Switch |
| `focus-visible:outline-none` | `states.outlineNone` | Switch |
| `focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]` | `states.focusRing` | Switch |
| `transition-all` | `animation.transitionAll` | Switch, SwitchCard |
| `transition-transform` | `animation.transitionTransform` | SwitchThumb |
| `outline-none` | `states.outlineNone` | Switch |
| `rounded-full` | `radius.full` | Switch (checked) |
| `rounded-3xl` | `radius["3xl"]` | Switch (unchecked) |

### ⚠️ Classes à Conserver Inline

#### Classes spécifiques au comportement Radix UI :
- Toutes les classes avec préfixes `data-[state=checked]` et `data-[state=unchecked]`
- Toutes les classes avec préfixes `has-[[data-state=checked]]`
- Classes de positionnement spécifiques : `right-[2px]`, `left-[2px]`

#### Classes hardcodées (tokens non sémantiques) :
- `bg-white` - Thumb checked (pourrait être un token sémantique à l'avenir)
- `bg-[var(--color-solstice-glacier-400)]` - Thumb unchecked (token Solstice direct)

#### Classes spécifiques au composant :
- `rounded-[8px]` - Border radius spécifique au card
- `cursor-pointer` - Cursor spécifique
- `pointer-events-none` - Pointer events spécifique
- Classes de layout : `peer`, `relative`, `inline-flex`, `absolute`, etc.

---

## ⚠️ Points d'Attention

### 1. **Disabled State Incomplet**
Le composant utilise `disabled:cursor-not-allowed disabled:opacity-50` mais pas `disabled:pointer-events-none`. La Foundation Layer `states.disabled` inclut `disabled:pointer-events-none`, ce qui pourrait changer le comportement.

**Recommandation :** Utiliser `states.disabledCursor` séparément et garder `disabled:opacity-50` inline, OU créer une variante `states.disabledWithoutPointerEvents`.

### 2. **Focus Ring**
Le composant utilise `focus-visible:ring-semantic-surface-interaction-strong/50 focus-visible:ring-[3px]` qui correspond exactement à `states.focusRing`. ✅

### 3. **Radius pour Switch**
Le switch utilise `rounded-full` (checked) et `rounded-3xl` (unchecked). Il faut vérifier si `radius.full` et `radius["3xl"]` existent dans la Foundation Layer.

### 4. **Thumb Colors Hardcodées**
Les couleurs du thumb (`bg-white` et `bg-[var(--color-solstice-glacier-400)]`) sont hardcodées. Pour une migration complète, il faudrait créer des tokens sémantiques, mais ce n'est pas critique pour cette phase.

### 5. **Duplication de Code**
Le composant `SwitchCard` répète toutes les classes du composant `Switch` pour le `SwitchPrimitive.Root` interne (lignes 87-96). Cette duplication pourrait être réduite en extrayant les styles communs.

---

## 📊 Estimation de Migration

### Classes totales identifiées : ~45-50
### Classes migrables vers Foundation Layer : ~15-18
### Taux de migration estimé : **~30-35%**

**Répartition :**
- ✅ Classes sémantiques migrables : ~15
- ⚠️ Classes spécifiques à conserver : ~25-30
- ⚠️ Classes hardcodées à conserver : ~5

---

## 🎯 Plan de Migration Recommandé

### Phase 1 : Imports Foundation Layer
```typescript
import { surface, stroke, text, states, radius, animation } from "../../styles"
```

### Phase 2 : Migration Switch Component
- Remplacer les classes sémantiques par les imports Foundation Layer
- Conserver les classes `data-[state=...]` inline
- Conserver les classes de positionnement inline

### Phase 3 : Migration SwitchCard Component
- Remplacer les classes sémantiques par les imports Foundation Layer
- Conserver les classes `has-[[data-state=checked]]` inline
- Conserver les classes de layout spécifiques inline

### Phase 4 : Optimisation (optionnel)
- Extraire les styles communs entre `Switch` et `SwitchCard` pour réduire la duplication

---

## ✅ Conclusion

Le composant `switch.tsx` est un bon candidat pour la migration vers la Foundation Layer. Environ **30-35%** des classes peuvent être migrées, principalement :
- Les classes de surface sémantiques
- Les classes de stroke sémantiques
- Les classes de texte sémantiques
- Les classes d'états (disabled, focus)
- Les classes d'animation
- Les classes de radius

Les classes spécifiques au comportement Radix UI et les classes de layout doivent rester inline.

---

**✅ Audit terminé - Prêt pour migration**

