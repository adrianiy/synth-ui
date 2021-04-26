# glyph-filter



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                 | Type                                        | Default               |
| ------------------- | -------------------- | ----------------------------------------------------------- | ------------------------------------------- | --------------------- |
| `description`       | `description`        | Filter description                                          | `string`                                    | `undefined`           |
| `haveMultiSelect`   | `have-multi-select`  | Multiselect flag. True if filter allows multiselect toggler | `boolean`                                   | `true`                |
| `i18n`              | --                   | Extra i18n translation object                               | `{ [key: string]: string; }`                | `{}`                  |
| `interface`         | `interface`          | Filter chip interface ['MODERN', 'CLASSIC']                 | `UIInterface.classic \| UIInterface.modern` | `UIInterface.classic` |
| `multiSelect`       | `multi-select`       | This flag is true if multiselect is active                  | `boolean`                                   | `false`               |
| `options`           | --                   | Filter options                                              | `FilterOptionHeader[]`                      | `undefined`           |
| `plural`            | `plural`             | Filter plural                                               | `string`                                    | `undefined`           |
| `searchPlaceholder` | `search-placeholder` | Search placeholder                                          | `string`                                    | `undefined`           |
| `selected`          | --                   | Filter selected                                             | `SelectedFilter[]`                          | `undefined`           |


## Events

| Event              | Description                     | Type                             |
| ------------------ | ------------------------------- | -------------------------------- |
| `clearEvent`       | Clear selected filters callback | `CustomEvent<any>`               |
| `multiSelectEvent` | Multiselect toggler callback    | `CustomEvent<any>`               |
| `optionClickEvent` | Option click event              | `CustomEvent<FilterSelectEvent>` |


## Dependencies

### Used by

 - [glyph-chipsbar](../chipsbar)

### Depends on

- [glyph-filter-options](./components/options)

### Graph
```mermaid
graph TD;
  glyph-filter --> glyph-filter-options
  glyph-filter-options --> glyph-toggler
  glyph-filter-options --> glyph-scroll
  glyph-chipsbar --> glyph-filter
  style glyph-filter fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


