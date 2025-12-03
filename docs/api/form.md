# form

## Interfaces

### FormControlProps

Defined in: [src/components/ui/form.tsx:51](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L51)

FormControl component props interface
Extends Radix UI Slot primitive props

#### Extends

- `ComponentProps`\<*typeof* `Slot`\>

***

### FormDescriptionProps

Defined in: [src/components/ui/form.tsx:57](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L57)

FormDescription component props interface
Extends native p element props

#### Extends

- `ComponentProps`\<`"p"`\>

***

### FormItemProps

Defined in: [src/components/ui/form.tsx:39](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L39)

FormItem component props interface
Extends native div element props

#### Extends

- `ComponentProps`\<`"div"`\>

***

### FormLabelProps

Defined in: [src/components/ui/form.tsx:45](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L45)

FormLabel component props interface
Extends Radix UI Label primitive props

#### Extends

- `ComponentProps`\<*typeof* `LabelPrimitive.Root`\>

***

### FormMessageProps

Defined in: [src/components/ui/form.tsx:63](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L63)

FormMessage component props interface
Extends native p element props

#### Extends

- `ComponentProps`\<`"p"`\>

## Type Aliases

### FormFieldProps

```ts
type FormFieldProps<TFieldValues, TName> = ControllerProps<TFieldValues, TName>;
```

Defined in: [src/components/ui/form.tsx:30](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L30)

FormField component props interface
Extends react-hook-form ControllerProps

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TFieldValues` *extends* `FieldValues` | `FieldValues` |
| `TName` *extends* `FieldPath`\<`TFieldValues`\> | `FieldPath`\<`TFieldValues`\> |

***

### FormProps

```ts
type FormProps<T> = React.ComponentProps<typeof FormProvider>;
```

Defined in: [src/components/ui/form.tsx:24](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L24)

Form component props interface
Extends react-hook-form FormProvider props

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `FieldValues` | `FieldValues` |

## Variables

### Form()

```ts
const Form: <TFieldValues, TContext, TTransformedValues>(props) => Element = FormProvider;
```

Defined in: [src/components/ui/form.tsx:18](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L18)

A provider component that propagates the `useForm` methods to all children components via [React Context](https://react.dev/reference/react/useContext) API. To be used with useFormContext.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TFieldValues` *extends* `FieldValues` | - |
| `TContext` | `any` |
| `TTransformedValues` | `TFieldValues` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `FormProviderProps`\<`TFieldValues`, `TContext`, `TTransformedValues`\> | all useForm methods |

#### Returns

`Element`

#### Remarks

[API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)

#### Example

```tsx
function App() {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

 function NestedInput() {
  const { register } = useFormContext(); // retrieve all hook methods
  return <input {...register("test")} />;
}
```

## Functions

### FormControl()

```ts
function FormControl(props): ReactElement;
```

Defined in: [src/components/ui/form.tsx:200](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L200)

FormControl component - A wrapper for form input components

Automatically connects the input to form validation and error states.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FormControlProps`](#formcontrolprops) | FormControl props including standard Radix UI Slot attributes |

#### Returns

`ReactElement`

A FormControl component

***

### FormDescription()

```ts
function FormDescription(props): ReactElement;
```

Defined in: [src/components/ui/form.tsx:226](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L226)

FormDescription component - A description text for a form field

Displays helpful text below the form field.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FormDescriptionProps`](#formdescriptionprops) | FormDescription props including standard HTML p attributes |

#### Returns

`ReactElement`

A FormDescription component

***

### FormField()

```ts
function FormField<TFieldValues, TName>(__namedParameters): Element;
```

Defined in: [src/components/ui/form.tsx:76](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L76)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TFieldValues` *extends* `FieldValues` | `FieldValues` |
| `TName` *extends* `string` | `FieldPath`\<`TFieldValues`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `ControllerProps`\<`TFieldValues`, `TName`\> |

#### Returns

`Element`

***

### FormItem()

```ts
function FormItem(props): ReactElement;
```

Defined in: [src/components/ui/form.tsx:153](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L153)

FormItem component - A container for form field elements

Provides context for form field components (FormLabel, FormControl, FormDescription, FormMessage).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FormItemProps`](#formitemprops) | FormItem props including standard HTML div attributes |

#### Returns

`ReactElement`

A FormItem component

#### Example

```tsx
<FormItem>
  <FormLabel>Email</FormLabel>
  <FormControl>
    <Input type="email" />
  </FormControl>
  <FormDescription>Enter your email address</FormDescription>
  <FormMessage />
</FormItem>
```

***

### FormLabel()

```ts
function FormLabel(props): ReactElement;
```

Defined in: [src/components/ui/form.tsx:175](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L175)

FormLabel component - A label for a form field

Automatically associates with the form field and displays error state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FormLabelProps`](#formlabelprops) | FormLabel props including standard Radix UI Label attributes |

#### Returns

`ReactElement`

A FormLabel component

***

### FormMessage()

```ts
function FormMessage(props): 
  | ReactElement<unknown, string | JSXElementConstructor<any>>
  | null;
```

Defined in: [src/components/ui/form.tsx:247](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L247)

FormMessage component - An error message for a form field

Automatically displays validation errors from react-hook-form.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`FormMessageProps`](#formmessageprops) | FormMessage props including standard HTML p attributes |

#### Returns

  \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\>
  \| `null`

A FormMessage component or null if no error

***

### useFormField()

```ts
function useFormField(): {
  formDescriptionId: string;
  formItemId: string;
  formMessageId: string;
  id: string;
  name: string;
};
```

Defined in: [src/components/ui/form.tsx:102](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L102)

#### Returns

```ts
{
  formDescriptionId: string;
  formItemId: string;
  formMessageId: string;
  id: string;
  name: string;
}
```

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `formDescriptionId` | `string` | - | [src/components/ui/form.tsx:119](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L119) |
| `formItemId` | `string` | - | [src/components/ui/form.tsx:118](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L118) |
| `formMessageId` | `string` | - | [src/components/ui/form.tsx:120](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L120) |
| `id` | `string` | - | [src/components/ui/form.tsx:116](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L116) |
| `name` | `string` | `fieldContext.name` | [src/components/ui/form.tsx:117](https://github.com/josscuette/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/form.tsx#L117) |
