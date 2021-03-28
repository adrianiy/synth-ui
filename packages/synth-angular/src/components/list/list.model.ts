export interface FieldConfig {
    title: () => string;
    value: () => number;
    format: () => string;
    decoration?: () => string;
    sign?: () => boolean;
    negativeSign?: () => boolean;
    showZero?: () => boolean;
}
