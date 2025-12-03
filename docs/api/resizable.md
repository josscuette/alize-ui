# resizable

## Interfaces

### ResizableHandleProps

Defined in: [src/components/ui/resizable.tsx:25](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/resizable.tsx#L25)

ResizableHandle component props interface
Extends react-resizable-panels PanelResizeHandle props and adds withHandle prop

#### Extends

- `ComponentProps`\<*typeof* `ResizablePrimitive.PanelResizeHandle`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="withhandle"></a> `withHandle?` | `boolean` | [src/components/ui/resizable.tsx:26](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/resizable.tsx#L26) |

***

### ResizablePanelGroupProps

Defined in: [src/components/ui/resizable.tsx:13](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/resizable.tsx#L13)

ResizablePanelGroup component props interface
Extends react-resizable-panels PanelGroup props

#### Extends

- `ComponentProps`\<*typeof* `ResizablePrimitive.PanelGroup`\>

***

### ResizablePanelProps

Defined in: [src/components/ui/resizable.tsx:19](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/resizable.tsx#L19)

ResizablePanel component props interface
Extends react-resizable-panels Panel props

#### Extends

- `ComponentProps`\<*typeof* `ResizablePrimitive.Panel`\>

## Functions

### ResizableHandle()

```ts
function ResizableHandle(props): ReactElement;
```

Defined in: [src/components/ui/resizable.tsx:79](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/resizable.tsx#L79)

ResizableHandle component - A handle for resizing panels

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ResizableHandleProps`](#resizablehandleprops) | ResizableHandle props including withHandle |

#### Returns

`ReactElement`

A ResizableHandle component

***

### ResizablePanel()

```ts
function ResizablePanel(props): ReactElement;
```

Defined in: [src/components/ui/resizable.tsx:68](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/resizable.tsx#L68)

ResizablePanel component - An individual resizable panel

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ResizablePanelProps`](#resizablepanelprops) | ResizablePanel props including defaultSize, minSize, maxSize |

#### Returns

`ReactElement`

A ResizablePanel component

***

### ResizablePanelGroup()

```ts
function ResizablePanelGroup(props): ReactElement;
```

Defined in: [src/components/ui/resizable.tsx:47](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/resizable.tsx#L47)

ResizablePanelGroup component - A group of resizable panels

Provides a container for resizable panels that can be resized by dragging.
Built on react-resizable-panels.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ResizablePanelGroupProps`](#resizablepanelgroupprops) | ResizablePanelGroup props including direction and standard PanelGroup attributes |

#### Returns

`ReactElement`

A ResizablePanelGroup component

#### Example

```tsx
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>Panel 1</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>Panel 2</ResizablePanel>
</ResizablePanelGroup>
```
