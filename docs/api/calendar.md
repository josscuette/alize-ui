# calendar

## Interfaces

### CalendarProps

Defined in: [src/components/ui/calendar.tsx:18](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/calendar.tsx#L18)

Calendar component props interface
Extends react-day-picker DayPicker props and adds buttonVariant prop

#### Extends

- `Omit`\<`React.ComponentProps`\<*typeof* `DayPicker`\>, 
  \| `"mode"`
  \| `"selected"`
  \| `"onSelect"`
  \| `"defaultMonth"`
  \| `"captionLayout"`
  \| `"showOutsideDays"`
  \| `"showWeekNumber"`
  \| `"disabled"`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="buttonvariant"></a> `buttonVariant?` | \| `"link"` \| `"default"` \| `"destructive"` \| `"secondary"` \| `"outline"` \| `"ghost"` \| `"tertiary"` \| `null` | [src/components/ui/calendar.tsx:19](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/calendar.tsx#L19) |
| <a id="captionlayout"></a> `captionLayout?` | `"label"` \| `"dropdown"` \| `"dropdown-months"` \| `"dropdown-years"` \| `"buttons"` | [src/components/ui/calendar.tsx:24](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/calendar.tsx#L24) |
| <a id="children"></a> `children?` | `ReactNode` | [src/components/ui/calendar.tsx:28](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/calendar.tsx#L28) |
| <a id="defaultmonth"></a> `defaultMonth?` | `Date` | [src/components/ui/calendar.tsx:23](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/calendar.tsx#L23) |
| <a id="disabled"></a> `disabled?` | (`date`) => `boolean` | [src/components/ui/calendar.tsx:27](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/calendar.tsx#L27) |
| <a id="mode"></a> `mode?` | `"single"` \| `"multiple"` \| `"range"` | [src/components/ui/calendar.tsx:20](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/calendar.tsx#L20) |
| <a id="onselect"></a> `onSelect?` | (`date`) => `void` | [src/components/ui/calendar.tsx:22](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/calendar.tsx#L22) |
| <a id="selected"></a> `selected?` | \| `Date` \| `Date`[] \| \{ `from?`: `Date`; `to?`: `Date`; \} | [src/components/ui/calendar.tsx:21](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/calendar.tsx#L21) |
| <a id="showoutsidedays"></a> `showOutsideDays?` | `boolean` | [src/components/ui/calendar.tsx:25](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/calendar.tsx#L25) |
| <a id="showweeknumber"></a> `showWeekNumber?` | `boolean` | [src/components/ui/calendar.tsx:26](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/calendar.tsx#L26) |

## Variables

### Calendar

```ts
const Calendar: NamedExoticComponent<CalendarProps>;
```

Defined in: [src/components/ui/calendar.tsx:89](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/calendar.tsx#L89)

Calendar component - A date picker calendar

Displays a calendar for selecting dates.
Built on react-day-picker for date handling.

#### Param

Calendar props including selected, onSelect, and standard DayPicker attributes

#### Returns

A Calendar component

#### Example

```tsx
<Calendar selected={date} onSelect={setDate} />
<Calendar mode="range" selected={range} onSelect={setRange} />
```

## Functions

### CalendarDayButton()

```ts
function CalendarDayButton(props): ReactElement;
```

Defined in: [src/components/ui/calendar.tsx:36](https://github.com/Josselin-Cuette_JLLT/alize-ui/blob/2e66e334f6c744c6ef68f063731a660c64776605/src/components/ui/calendar.tsx#L36)

CalendarDayButton component - A button for calendar day selection

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | \{ \} & `ButtonHTMLAttributes`\<`HTMLButtonElement`\> | CalendarDayButton props |

#### Returns

`ReactElement`

A CalendarDayButton component
