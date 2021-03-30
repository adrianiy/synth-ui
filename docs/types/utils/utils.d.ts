import { ValueAccessorConfig } from '@stencil/angular-output-target';
export declare function format(first: string, middle: string, last: string): string;
export declare function getLocaleComponentStrings(requiredI18n: string[], element: HTMLElement): Promise<any>;
export declare const angularValueAccessorBindings: ValueAccessorConfig[];
export declare const numeralFormat: (value: number, format?: any, sign?: boolean, negativeSign?: boolean, showZero?: boolean) => any;
export declare const cls: (...classNames: any[]) => string;
