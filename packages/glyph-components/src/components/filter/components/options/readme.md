# synth-filter-options



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                 | Type                                   | Default     |
| ------------------- | -------------------- | ----------------------------------------------------------- | -------------------------------------- | ----------- |
| `closeEvent`        | --                   | Close callback                                              | `() => void`                           | `undefined` |
| `description`       | `description`        | Filter description                                          | `string`                               | `undefined` |
| `haveMultiSelect`   | `have-multi-select`  | Multiselect flag. True if filter allows multiselect toggler | `boolean`                              | `true`      |
| `i18n`              | --                   | Extra i18n translation object                               | `{ [key: string]: string; }`           | `{}`        |
| `multiSelect`       | `multi-select`       | This flag is true if multiselect is active                  | `boolean`                              | `false`     |
| `multiSelectEvent`  | --                   | Multiselect toggler callback                                | `() => void`                           | `undefined` |
| `optionClickEvent`  | --                   | Option click event                                          | `(option: FilterOptionHeader) => void` | `undefined` |
| `options`           | --                   | Filter options                                              | `FilterOptionHeader[]`                 | `undefined` |
| `searchPlaceholder` | `search-placeholder` | Search placeholder                                          | `string`                               | `undefined` |


## Dependencies

### Used by

 - [synth-filter](../..)

### Depends on

- [synth-toggler](../../../toggler)

### Graph
```mermaid
graph TD;
  synth-filter-options --> synth-toggler
  synth-filter --> synth-filter-options
  style synth-filter-options fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


