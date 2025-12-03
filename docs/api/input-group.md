# input-group

## Interfaces

### InputGroupProps

Defined in: [src/components/ui/input-group.tsx:8](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input-group.tsx#L8)

InputGroup component props interface
Extends native div element props

#### Extends

- `HTMLAttributes`\<`HTMLDivElement`\>

## Functions

### InputGroup()

```ts
function InputGroup(props): ReactElement;
```

Defined in: [src/components/ui/input-group.tsx:26](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/input-group.tsx#L26)

InputGroup component - A container for grouping input elements

Provides a container for grouping input elements together.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`InputGroupProps`](#inputgroupprops) | InputGroup props including standard HTML div attributes |

#### Returns

`ReactElement`

An InputGroup component

#### Example

```tsx
<InputGroup>
  <Input placeholder="Search..." />
  <Button>Search</Button>
</InputGroup>
```
