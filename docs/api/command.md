# command

## Interfaces

### CommandDialogProps

Defined in: [src/components/ui/command.tsx:26](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L26)

CommandDialog component props interface
Extends Dialog props and adds title, description, and showCloseButton props

#### Extends

- `ComponentProps`\<*typeof* [`Dialog`](dialog.md#dialog)\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="classname"></a> `className?` | `string` | [src/components/ui/command.tsx:29](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L29) |
| <a id="description"></a> `description?` | `string` | [src/components/ui/command.tsx:28](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L28) |
| <a id="showclosebutton"></a> `showCloseButton?` | `boolean` | [src/components/ui/command.tsx:30](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L30) |
| <a id="title"></a> `title?` | `string` | [src/components/ui/command.tsx:27](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L27) |

***

### CommandEmptyProps

Defined in: [src/components/ui/command.tsx:49](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L49)

CommandEmpty component props interface
Extends cmdk CommandEmpty primitive props

#### Extends

- `ComponentProps`\<*typeof* `CommandPrimitive.Empty`\>

***

### CommandGroupProps

Defined in: [src/components/ui/command.tsx:55](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L55)

CommandGroup component props interface
Extends cmdk CommandGroup primitive props

#### Extends

- `ComponentProps`\<*typeof* `CommandPrimitive.Group`\>

***

### CommandInputProps

Defined in: [src/components/ui/command.tsx:37](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L37)

CommandInput component props interface
Extends cmdk CommandInput primitive props

#### Extends

- `ComponentProps`\<*typeof* `CommandPrimitive.Input`\>

***

### CommandItemProps

Defined in: [src/components/ui/command.tsx:67](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L67)

CommandItem component props interface
Extends cmdk CommandItem primitive props

#### Extends

- `ComponentProps`\<*typeof* `CommandPrimitive.Item`\>

***

### CommandListProps

Defined in: [src/components/ui/command.tsx:43](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L43)

CommandList component props interface
Extends cmdk CommandList primitive props

#### Extends

- `ComponentProps`\<*typeof* `CommandPrimitive.List`\>

***

### CommandProps

Defined in: [src/components/ui/command.tsx:20](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L20)

Command component props interface
Extends cmdk Command primitive props

#### Extends

- `ComponentProps`\<*typeof* `CommandPrimitive`\>

***

### CommandSeparatorProps

Defined in: [src/components/ui/command.tsx:61](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L61)

CommandSeparator component props interface
Extends cmdk CommandSeparator primitive props

#### Extends

- `ComponentProps`\<*typeof* `CommandPrimitive.Separator`\>

***

### CommandShortcutProps

Defined in: [src/components/ui/command.tsx:73](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L73)

CommandShortcut component props interface
Extends native span element props

#### Extends

- `ComponentProps`\<`"span"`\>

## Functions

### Command()

```ts
function Command(props): ReactElement;
```

Defined in: [src/components/ui/command.tsx:96](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L96)

Command component - A command palette interface

Provides a command palette for searching and executing commands.
Built on cmdk for command handling.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CommandProps`](#commandprops) | Command props including standard cmdk Command attributes |

#### Returns

`ReactElement`

A Command component

#### Example

```tsx
<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandGroup heading="Suggestions">
      <CommandItem>Item 1</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

***

### CommandDialog()

```ts
function CommandDialog(props): ReactElement;
```

Defined in: [src/components/ui/command.tsx:117](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L117)

CommandDialog component - A dialog wrapper for Command

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CommandDialogProps`](#commanddialogprops) | CommandDialog props including title, description, and showCloseButton |

#### Returns

`ReactElement`

A CommandDialog component

***

### CommandEmpty()

```ts
function CommandEmpty(props): ReactElement;
```

Defined in: [src/components/ui/command.tsx:196](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L196)

CommandEmpty component - The empty state when no commands match

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CommandEmptyProps`](#commandemptyprops) | CommandEmpty props |

#### Returns

`ReactElement`

A CommandEmpty component

***

### CommandGroup()

```ts
function CommandGroup(props): ReactElement;
```

Defined in: [src/components/ui/command.tsx:213](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L213)

CommandGroup component - A group of related command items

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CommandGroupProps`](#commandgroupprops) | CommandGroup props |

#### Returns

`ReactElement`

A CommandGroup component

***

### CommandInput()

```ts
function CommandInput(props): ReactElement;
```

Defined in: [src/components/ui/command.tsx:148](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L148)

CommandInput component - The search input for the command palette

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CommandInputProps`](#commandinputprops) | CommandInput props |

#### Returns

`ReactElement`

A CommandInput component

***

### CommandItem()

```ts
function CommandItem(props): ReactElement;
```

Defined in: [src/components/ui/command.tsx:252](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L252)

CommandItem component - An individual selectable command item

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CommandItemProps`](#commanditemprops) | CommandItem props |

#### Returns

`ReactElement`

A CommandItem component

***

### CommandList()

```ts
function CommandList(props): ReactElement;
```

Defined in: [src/components/ui/command.tsx:175](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L175)

CommandList component - The scrollable list container for command items

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CommandListProps`](#commandlistprops) | CommandList props |

#### Returns

`ReactElement`

A CommandList component

***

### CommandSeparator()

```ts
function CommandSeparator(props): ReactElement;
```

Defined in: [src/components/ui/command.tsx:234](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L234)

CommandSeparator component - A visual separator between command groups

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CommandSeparatorProps`](#commandseparatorprops) | CommandSeparator props |

#### Returns

`ReactElement`

A CommandSeparator component

***

### CommandShortcut()

```ts
function CommandShortcut(props): ReactElement;
```

Defined in: [src/components/ui/command.tsx:273](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/command.tsx#L273)

CommandShortcut component - A keyboard shortcut indicator

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CommandShortcutProps`](#commandshortcutprops) | CommandShortcut props |

#### Returns

`ReactElement`

A CommandShortcut component
