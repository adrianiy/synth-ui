export interface SelectorOption {
    name: string;
    active?: boolean;
    value?: any;
}

export interface ComplexSelectorOptions {
    [key: string]: SelectorOption[];
}
