# glyph-sortable



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute | Description                                                                     | Type                    | Default     |
| ------------- | --------- | ------------------------------------------------------------------------------- | ----------------------- | ----------- |
| `config`      | --        | [SortableJS](https://github.com/SortableJS/Sortable#options) list configuration | `SortableOptions`       | `{}`        |
| `list`        | --        | List to sort                                                                    | `SortableOption[]`      | `undefined` |
| `valueGetter` | --        | Value renderer, if not set list will render `name` property                     | `(item: any) => string` | `undefined` |


## Events

| Event        | Description                                               | Type                            |
| ------------ | --------------------------------------------------------- | ------------------------------- |
| `sortChange` | Event emitted on drag end emitting new list configuration | `CustomEvent<SortableOption[]>` |


----------------------------------------------


