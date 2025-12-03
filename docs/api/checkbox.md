# checkbox

## Interfaces

### CheckboxCardProps

Defined in: [src/components/ui/checkbox.tsx:90](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/checkbox.tsx#L90)

CheckboxCard component props interface
Extends Radix UI Checkbox primitive props with label and description

#### Extends

- `ComponentProps`\<*typeof* `CheckboxPrimitive.Root`\>

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="description"></a> `description?` | `string` | Optional description text displayed below the label | [src/components/ui/checkbox.tsx:94](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/checkbox.tsx#L94) |
| <a id="label"></a> `label` | `string` | Label text displayed next to the checkbox | [src/components/ui/checkbox.tsx:92](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/checkbox.tsx#L92) |

***

### CheckboxProps

Defined in: [src/components/ui/checkbox.tsx:14](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/checkbox.tsx#L14)

Checkbox component props interface
Extends Radix UI Checkbox primitive props

#### Extends

- `ComponentProps`\<*typeof* `CheckboxPrimitive.Root`\>

## Functions

### Checkbox()

```ts
function Checkbox(props): ReactElement;
```

Defined in: [src/components/ui/checkbox.tsx:37](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/checkbox.tsx#L37)

Checkbox component - A styled checkbox with validation states

Supports checked/unchecked states, disabled state, and invalid state (via aria-invalid).
Built on Radix UI primitives for accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `CheckboxProps` & `RefAttributes`\<`HTMLButtonElement`\> | Checkbox props including standard Radix UI Checkbox attributes |

#### Returns

`ReactElement`

A checkbox element with appropriate styling

#### Example

```tsx
// Basic checkbox
<Checkbox />

// Checkbox with error state
<Checkbox aria-invalid={hasError} />

// Controlled checkbox
<Checkbox checked={isChecked} onCheckedChange={setIsChecked} />
```

***

### CheckboxCard()

```ts
function CheckboxCard(props): ReactElement;
```

Defined in: [src/components/ui/checkbox.tsx:114](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/checkbox.tsx#L114)

CheckboxCard component - A checkbox with integrated label and description

Provides a card-style layout for checkboxes with labels and optional descriptions.
Automatically handles focus states and accessibility.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CheckboxCardProps`](#checkboxcardprops) | CheckboxCard props including label, description, and standard Checkbox attributes |

#### Returns

`ReactElement`

A label element containing a checkbox with text content

#### Example

```tsx
<CheckboxCard 
  label="Accept terms and conditions"
  description="By checking this box, you agree to our terms"
/>
```
