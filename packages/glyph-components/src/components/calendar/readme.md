# glyph-calendar



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                | Type      | Default                            |
| -------------- | --------------- | ------------------------------------------ | --------- | ---------------------------------- |
| `endDate`      | --              | Selected end date                          | `Date`    | `new Date()`                       |
| `maxDate`      | --              | Maximum allowed date                       | `Date`    | `new Date()`                       |
| `minDate`      | --              | Minimum allowed date                       | `Date`    | `dayjs().startOf('year').toDate()` |
| `months`       | `months`        | Number of months to be shown. 2 by default | `number`  | `2`                                |
| `singleSelect` | `single-select` | Allow single day selection                 | `boolean` | `undefined`                        |
| `startDate`    | --              | Selected start date                        | `Date`    | `new Date()`                       |


## Events

| Event        | Description                       | Type                                               |
| ------------ | --------------------------------- | -------------------------------------------------- |
| `dateSelect` | Event triggered on date selection | `CustomEvent<{ startDate: Date; endDate: Date; }>` |


## Dependencies

### Used by

 - [glyph-date-filter](../date-filter)

### Graph
```mermaid
graph TD;
  glyph-date-filter --> glyph-calendar
  style glyph-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


