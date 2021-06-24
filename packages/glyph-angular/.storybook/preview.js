import { defineCustomElements } from './../../glyph-components/dist/esm/loader';

import '!style-loader!css-loader!sass-loader!./../../glyph-components/dist/glyph-components/glyph-components.css';

defineCustomElements();

import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: {
            order: [ 'Introduction', 'Components', 'Services' ],
        },
    },
};
export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'edit',
            title: 'Theme',
            right: 'Theme',
            // Array of plain string values or MenuItem shape (see below)
            items: [ 'light', 'dark' ],
        },
    },
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        defaultValue: 'en',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'en', right: '🇺🇸', title: 'English' },
                { value: 'es', right: '🇪🇸', title: 'Español' },
            ],
        },
    },
    fontSize: {
        name: 'Font size',
        description: 'Font size base',
        defaultValue: 'var(--gui-font--base)',
        toolbar: {
            icon: 'expand',
            items: [
                { value: '10px', right: '10px', title: 'Small' },
                { value: 'base', right: '12px', title: 'Base' },
                { value: '15px', right: '15px', title: 'Big' },
            ],
        },
    },
};
