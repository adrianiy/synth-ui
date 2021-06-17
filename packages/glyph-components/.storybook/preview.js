import { defineCustomElements } from '../dist/esm/loader';

import '!style-loader!css-loader!sass-loader!../dist/glyph-components/glyph-components.css';

defineCustomElements();

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: {
            order: [
                'Introduction',
                'Layout',
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
                    'Slider',
                    'Toggler',
                    'Tabs',
                    'Toaster',
                    'Flex',
                    'Scroll',
                    'Filter',
                    'Chipsbar',
                    'Header',
                    'Title',
                    'No Data',
                    'Skeleton Loader',
                    'List',
                    'Sortable list',
                    'Article',
                    'Ranking',
                    'Modal',
                    'Timeline',
                ],
            ],
        },
    },
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: [ 'light', 'light-mode' ] },
            { name: 'dark', class: [ 'dark', 'dark-mode' ] },
        ],
    },
};
