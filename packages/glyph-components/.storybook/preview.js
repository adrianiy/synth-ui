import { defineCustomElements } from '../dist/esm/loader';

import '!style-loader!css-loader!sass-loader!../dist/glyph-components/glyph-components.css';

defineCustomElements();

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: {
            order: [
                'Introduction',
                'Components',
                [
                    'Avatar',
                    'User menu',
                    'App menu',
                    'Share menu',
                    'Button',
                    'Button group',
                    'Input',
                    'Selector',
                    'Toggler',
                    'Tabs',
                    'Toaster',
                    'Filter',
                    'Chipsbar',
                    'Header',
                    'Title',
                    'No Data',
                    'Skeleton Loader',
                    'List',
                    'Modal',
                    'Timeline',
                ],
            ],
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
