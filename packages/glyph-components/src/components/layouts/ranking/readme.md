# glyph-ranking-layout



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute    | Description              | Type                         | Default                     |
| ------------- | ------------ | ------------------------ | ---------------------------- | --------------------------- |
| `columnGap`   | `column-gap` | Distance between columns | `string`                     | `'15%'`                     |
| `i18n`        | --           | Extra i18n translates    | `{ [key: string]: string; }` | `undefined`                 |
| `rankingData` | --           | Ranking data             | `RankingData[]`              | `undefined`                 |
| `rowGap`      | `row-gap`    | Distance between rows    | `string`                     | `'var(--gui-padding--xxl)'` |


## Dependencies

### Depends on

- [glyph-slider](../../slider)
- [glyph-title](../../title)
- [glyph-ranking](../../ranking)

### Graph
```mermaid
graph TD;
  glyph-ranking-layout --> glyph-slider
  glyph-ranking-layout --> glyph-title
  glyph-ranking-layout --> glyph-ranking
  glyph-ranking --> glyph-article
  glyph-article --> glyph-toaster
  style glyph-ranking-layout fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


