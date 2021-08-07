# glyph-filter-drilldown-options



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                 | Type                                                                | Default               |
| ------------- | -------------- | ------------------------------------------- | ------------------------------------------------------------------- | --------------------- |
| `expanded`    | `expanded`     | Expanded flag                               | `boolean`                                                           | `false`               |
| `interface`   | `interface`    | Filter chip interface ['MODERN', 'CLASSIC'] | `UIInterface.classic \| UIInterface.modern \| UIInterface.redesign` | `UIInterface.classic` |
| `option`      | --             | Filter options                              | `FilterOptionHeader`                                                | `undefined`           |
| `optionClick` | --             | Option click event                          | `(option: FilterOptionHeader) => (event: any) => void`              | `undefined`           |
| `searchValue` | `search-value` | Search value                                | `string`                                                            | `undefined`           |


## Dependencies

### Used by

 - [glyph-filter-options-list](../options-list)

### Depends on

- [glyph-filter-options-list](../options-list)

### Graph
```mermaid
graph TD;
  glyph-filter-drilldown-options --> glyph-filter-options-list
  glyph-filter-options-list --> glyph-filter-drilldown-options
  style glyph-filter-drilldown-options fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


