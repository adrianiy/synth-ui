import { ValueAccessorConfig } from '@stencil/angular-output-target';
import { Cell } from 'glyph-core-poc';
export declare function format(first: string, middle: string, last: string): string;
export declare const getComponentClosestLanguage: (element: HTMLElement) => string;
export declare const getComponentLocale: (element: HTMLElement, languages: {
  [key: string]: any;
}) => any;
export declare function getLocaleComponentStrings(requiredI18n: string[], element: HTMLElement, basePath?: string, locale?: string): Promise<any>;
export declare const angularValueAccessorBindings: ValueAccessorConfig[];
export declare const numeralFormat: (value: number, format?: any, sign?: boolean, negativeSign?: boolean, showZero?: boolean) => any;
export declare const getFormatedValues: (cell: Cell) => any;
export declare const cls: (...classNames: any[]) => string;
