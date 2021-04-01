import { ValueAccessorConfig } from '@stencil/angular-output-target';
import { getAssetPath } from '@stencil/core';
import numeral from 'numeral';

export function format(first: string, middle: string, last: string): string {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const _getComponentClosestLanguage = (element: HTMLElement): string => {
    const closestElement = element.closest('[lang]') as HTMLElement;

    return closestElement != null ? closestElement.lang : 'es';
};

const _fetchLocaleStringsForComponent = async (componentName: string, locale: string) => {
    try {
        const path = getAssetPath('../assets/i18n');
        return (await fetch(`${path}/${componentName}.i18n.${locale}.json`)).json();
    } catch (e) {
        return {};
    }
};

export async function getLocaleComponentStrings(requiredI18n: string[], element: HTMLElement): Promise<any> {
    let componentLanguage = _getComponentClosestLanguage(element);

    try {
        const results = await Promise.all(
            requiredI18n.map(req => _fetchLocaleStringsForComponent(req, componentLanguage)),
        );
        return results.reduce((acc, curr) => ({ ...acc, ...curr }), {});
    } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('error loading i18n files');
    }
}

export const angularValueAccessorBindings: ValueAccessorConfig[] = [
    {
        elementSelectors: [ 'my-input[type=text]' ],
        event: 'myChange',
        targetAttr: 'value',
        type: 'text',
    },
    {
        elementSelectors: [ 'my-input[type=number]' ],
        event: 'myChange',
        targetAttr: 'value',
        type: 'number',
    },
    {
        elementSelectors: [ 'my-checkbox' ],
        event: 'myChange',
        targetAttr: 'checked',
        type: 'boolean',
    },
    {
        elementSelectors: [ 'my-radio' ],
        event: 'mySelect',
        targetAttr: 'checked',
        type: 'radio',
    },
    {
        elementSelectors: [ 'my-range', 'my-radio-group' ],
        event: 'myChange',
        targetAttr: 'value',
        type: 'select',
    },
];

if (numeral.locale['user-locale'] === undefined) {
    numeral.register('locale', 'es', {
        delimiters: {
            thousands: '.',
            decimal: '.',
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't',
        },
        ordinal: function () {
            return 'º';
        },
        currency: {
            symbol: '€',
        },
    });
    numeral.locale('es');
}

export const numeralFormat = (
    value: number,
    format?: any,
    sign = false,
    negativeSign = true,
    showZero = false,
): any => {
    let upper = false;
    let lower = false;
    if (isFinite(value) && !isNaN(value) && (value !== 0 || (value === 0 && showZero)) && value !== null) {
        const isPercentage = format.includes('%');
        const isAbbreviature = format.includes('a');
        const isSmallNumber = Math.abs(value) < 1000;
        if (isSmallNumber && isAbbreviature) {
            format = format.replace('.0', '');
        }
        if (isPercentage) {
            value = value > 0 ? Math.min(5, value) : Math.max(-5, value);
            upper = value === 5;
            lower = value === -5;
        }
        let formatted = numeral(value).format(format);
        if (sign || negativeSign || isPercentage) {
            formatted = `${upper ? '>' : lower ? '<' : value > 0 ? '+' : ''}${formatted}`;
        }
        if (!sign) {
            formatted = formatted.replace('+', '');
        }
        if (!negativeSign) {
            formatted = formatted.replace('-', '');
        }
        return formatted.toUpperCase().trim();
    } else {
        return '--';
    }
};

export const cls = (...classNames) =>
    classNames
        .filter(className => className)
        .map(className => [].concat(className).join(' '))
        .join(' ');
