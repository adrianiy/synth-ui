# glyph-chipsbar



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute   | Description                            | Type                                        | Default               |
| --------------- | ----------- | -------------------------------------- | ------------------------------------------- | --------------------- |
| `filtersConfig` | --          | Filters configuration object           | `FiltersConfig`                             | `undefined`           |
| `i18n`          | --          | Extra i18n translation object          | `{ [key: string]: string; }`                | `{}`                  |
| `interface`     | `interface` | Interface type [ 'MODERN', 'CLASSIC' ] | `UIInterface.classic \| UIInterface.modern` | `UIInterface.classic` |


## Events

| Event                     | Description                  | Type                                                                                                                   |
| ------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `clearAll`                | Clear all filters event      | `CustomEvent<any>`                                                                                                     |
| `comparableChange`        | Comparable type change event | `CustomEvent<ComparableType.calendar \| ComparableType.commercial \| ComparableType.custom \| ComparableType.ordinal>` |
| `comparableDateSelection` | Date selection event         | `CustomEvent<DateSelectionEvent>`                                                                                      |
| `dateSelection`           | Date selection event         | `CustomEvent<DateSelectionEvent>`                                                                                      |
| `filterClear`             | Filter clear event           | `CustomEvent<string>`                                                                                                  |
| `filterSelect`            | Filter select event          | `CustomEvent<FilterSelectEvent>`                                                                                       |
| `updateFilter`            | Filter multiselect event     | `CustomEvent<FilterUpdateEvent>`                                                                                       |


## Dependencies

### Depends on

- [glyph-date-filter](../../date-filter)
- [glyph-filter](../../filter)
- [glyph-button](../../button)

### Graph
```mermaid
graph TD;
  glyph-chipsbar --> glyph-date-filter
  glyph-chipsbar --> glyph-filter
  glyph-chipsbar --> glyph-button
  glyph-date-filter --> glyph-scroll
  glyph-date-filter --> glyph-calendar
  glyph-date-filter --> glyph-selector
  glyph-date-filter --> glyph-input
  glyph-date-filter --> glyph-button
  glyph-selector --> glyph-selector-options
  glyph-selector-options --> glyph-input
  glyph-filter --> glyph-filter-options
  glyph-filter-options --> glyph-input
  glyph-filter-options --> glyph-toggler
  glyph-filter-options --> glyph-scroll
  style glyph-chipsbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


