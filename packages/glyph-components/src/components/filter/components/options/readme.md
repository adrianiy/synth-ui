# synth-filter-options



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                 | Type                                        | Default               |
| ------------------- | -------------------- | ----------------------------------------------------------- | ------------------------------------------- | --------------------- |
| `closeEvent`        | --                   | Close callback                                              | `() => void`                                | `undefined`           |
| `description`       | `description`        | Filter description                                          | `string`                                    | `undefined`           |
| `haveMultiSelect`   | `have-multi-select`  | Multiselect flag. True if filter allows multiselect toggler | `boolean`                                   | `true`                |
| `i18n`              | --                   | Extra i18n translation object                               | `{ [key: string]: string; }`                | `{}`                  |
| `interface`         | `interface`          | Filter chip interface ['MODERN', 'CLASSIC']                 | `UIInterface.classic \| UIInterface.modern` | `UIInterface.classic` |
| `multiSelect`       | `multi-select`       | This flag is true if multiselect is active                  | `boolean`                                   | `false`               |
| `multiSelectEvent`  | --                   | Multiselect toggler callback                                | `() => void`                                | `undefined`           |
| `optionClickEvent`  | --                   | Option click event                                          | `(option: FilterOptionHeader) => void`      | `undefined`           |
| `options`           | --                   | Filter options                                              | `FilterOptionHeader[]`                      | `undefined`           |
| `searchPlaceholder` | `search-placeholder` | Search placeholder                                          | `string`                                    | `undefined`           |


## Dependencies

### Used by

 - [glyph-filter](../..)

### Depends on

- [glyph-toggler](../../../toggler)

### Graph
```mermaid
graph TD;
  glyph-filter-options --> glyph-toggler
  glyph-filter --> glyph-filter-options
  style glyph-filter-options fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


