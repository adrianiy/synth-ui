# glyph-login



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute   | Description                               | Type                                                      | Default              |
| -------------- | ----------- | ----------------------------------------- | --------------------------------------------------------- | -------------------- |
| `i18n`         | --          | Extra i18n translates                     | `{ [key: string]: string; }`                              | `undefined`          |
| `interface`    | `interface` | Component interface *modern* \| *classic* | `UIInterface.classic \| UIInterface.modern`               | `UIInterface.modern` |
| `login`        | --          | Login callback                            | `(userData: { user: string; password: string; }) => void` | `undefined`          |
| `loginSuccess` | --          | On login success                          | `(result: any) => void`                                   | `undefined`          |
| `version`      | `version`   | Application version                       | `string`                                                  | `undefined`          |


## Dependencies

### Depends on

- [glyph-input](../../input)
- [glyph-button](../../button)

### Graph
```mermaid
graph TD;
  glyph-login --> glyph-input
  glyph-login --> glyph-button
  style glyph-login fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


