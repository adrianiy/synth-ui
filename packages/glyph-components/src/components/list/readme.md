# glyph-list



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                     | Type                         | Default     |
| ------------------ | -------------------- | ------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| `data`             | --                   | Component data. Fields preffixed with `_` will not render                       | `Row[]`                      | `undefined` |
| `decimals`         | `decimals`           | Show decimals flag                                                              | `boolean`                    | `undefined` |
| `defaultSortField` | `default-sort-field` | Default sorting field, it could be a private or public field                    | `string`                     | `undefined` |
| `enableDownload`   | `enable-download`    | Enable download xlsx file                                                       | `boolean`                    | `false`     |
| `expandable`       | `expandable`         | Expandable flag                                                                 | `boolean`                    | `false`     |
| `filterFields`     | --                   | Rows that has no data on these fields will not render                           | `string[]`                   | `undefined` |
| `i18n`             | --                   | Extra i18n translation object                                                   | `{ [key: string]: string; }` | `{}`        |
| `limit`            | `limit`              | Rows limit. If not set will take `16` as default value or `10` in small screens | `number`                     | `undefined` |
| `loading`          | `loading`            | Loading state. If true will render skeleton loader                              | `boolean`                    | `undefined` |
| `pageGroups`       | `page-groups`        | Number of pages to be grouped if list is larger than limit                      | `number`                     | `3`         |
| `paginationLimit`  | `pagination-limit`   | Pagination limit                                                                | `number`                     | `5`         |
| `update`           | `update`             | Force component update if flag is true                                          | `boolean`                    | `false`     |


## Events

| Event       | Description      | Type               |
| ----------- | ---------------- | ------------------ |
| `expandRow` | Expand row event | `CustomEvent<Row>` |


## Dependencies

### Depends on

- [glyph-list-row](./components/row)
- [glyph-sk-loader](../skeleton-loader)
- [glyph-no-data](../no-data)
- [glyph-pagination](../pagination)

### Graph
```mermaid
graph TD;
  glyph-list --> glyph-list-row
  glyph-list --> glyph-sk-loader
  glyph-list --> glyph-no-data
  glyph-list --> glyph-pagination
  glyph-list-row --> glyph-sk-loader
  style glyph-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


