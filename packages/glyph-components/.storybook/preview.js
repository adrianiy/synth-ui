import { defineCustomElements } from '../dist/esm/loader';

import '!style-loader!css-loader!sass-loader!../dist/glyph-components/glyph-components.css';

defineCustomElements();

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: {
            order: ['Introduction', 'Components'],
        },
    },
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['light', 'light-mode'] },
            { name: 'dark', class: ['dark', 'dark-mode'] },
        ],
    },
};
