export interface FieldConfig {
    title: () => string;
    value: () => string;
    format: () => string;
    decoration?: () => string;
    sign?: () => boolean;
    negativeSign?: () => boolean;
    showZero?: () => boolean;
}
