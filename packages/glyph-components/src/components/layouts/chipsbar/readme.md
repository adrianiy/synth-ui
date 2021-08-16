# glyph-chipsbar



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description                                                      | Type                         | Default               |
| --------------- | ----------------- | ---------------------------------------------------------------- | ---------------------------- | --------------------- |
| `basePath`      | `base-path`       | Base path to get assets                                          | `string`                     | `undefined`           |
| `filtersConfig` | --                | Filters configuration object                                     | `FiltersConfig`              | `undefined`           |
| `hideZaraSouth` | `hide-zara-south` | Hide zara south filters active                                   | `boolean`                    | `true`                |
| `i18n`          | --                | Extra i18n translation object                                    | `{ [key: string]: string; }` | `{}`                  |
| `interface`     | `interface`       | Interface type                                                   | `string`                     | `UIInterface.classic` |
| `locale`        | `locale`          | **optional** force locale change if html lang is not interpreted | `string`                     | `undefined`           |


## Events

| Event          | Description              | Type                             |
| -------------- | ------------------------ | -------------------------------- |
| `clearAll`     | Clear all filters event  | `CustomEvent<any>`               |
| `filterClear`  | Filter clear event       | `CustomEvent<string>`            |
| `filterSelect` | Filter select event      | `CustomEvent<FilterSelectEvent>` |
| `updateFilter` | Filter multiselect event | `CustomEvent<FilterUpdateEvent>` |


## Dependencies

### Depends on

- [glyph-date-filter](../../date-filter)
- [glyph-filter](../../filter)
- [glyph-button](../../button)
- [glyph-modal](../../modal)
- [glyph-config-modal](components)

### Graph
```mermaid
graph TD;
  glyph-chipsbar --> glyph-date-filter
  glyph-chipsbar --> glyph-filter
  glyph-chipsbar --> glyph-button
  glyph-chipsbar --> glyph-modal
  glyph-chipsbar --> glyph-config-modal
  glyph-date-filter --> glyph-scroll
  glyph-date-filter --> glyph-calendar
  glyph-date-filter --> glyph-selector
  glyph-date-filter --> glyph-input
  glyph-date-filter --> glyph-button
  glyph-selector --> glyph-selector-options
  glyph-selector-options --> glyph-input
  glyph-selector-options --> glyph-scroll
  glyph-input --> glyph-icon
  glyph-filter --> glyph-filter-options
  glyph-filter-options --> glyph-input
  glyph-filter-options --> glyph-toggler
  glyph-filter-options --> glyph-filter-options-list
  glyph-filter-options --> glyph-scroll
  glyph-filter-options-list --> glyph-filter-drilldown-options
  glyph-filter-drilldown-options --> glyph-filter-options-list
  glyph-filter-drilldown-options --> glyph-icon
  glyph-modal --> glyph-title
  glyph-modal --> glyph-button
  glyph-config-modal --> glyph-sortable
  glyph-config-modal --> glyph-toggler
  glyph-sortable --> glyph-sortable-element
  glyph-sortable-element --> glyph-sortable
  style glyph-chipsbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


