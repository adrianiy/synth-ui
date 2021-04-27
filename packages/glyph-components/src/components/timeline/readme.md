# glyph-timeline



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute   | Description                                                  | Type                                        | Default               |
| ----------------- | ----------- | ------------------------------------------------------------ | ------------------------------------------- | --------------------- |
| `calendarEvents`  | --          | Calendar events                                              | `TimelineEvent[]`                           | `undefined`           |
| `events`          | --          | Events                                                       | `TimelineEvent[]`                           | `undefined`           |
| `i18n`            | --          | Extra i18n translation object                                | `{ [key: string]: string; }`                | `{}`                  |
| `interface`       | `interface` | Interface type ['MODERN', 'CLASSIC']                         | `UIInterface.classic \| UIInterface.modern` | `UIInterface.classic` |
| `outsideCallback` | --          | Event triggered when user clicks outside component container | `() => void`                                | `undefined`           |


## Dependencies

### Used by

 - [glyph-header](../header)

### Depends on

- [glyph-title](../title)
- [glyph-selector](../selector)
- [glyph-tabs](../tabs)

### Graph
```mermaid
graph TD;
  glyph-timeline --> glyph-title
  glyph-timeline --> glyph-selector
  glyph-timeline --> glyph-tabs
  glyph-selector --> glyph-selector-options
  glyph-selector-options --> glyph-input
  glyph-header --> glyph-timeline
  style glyph-timeline fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


