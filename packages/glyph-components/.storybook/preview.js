import { defineCustomElements } from '../dist/esm/loader';

import '!style-loader!css-loader!sass-loader!../dist/glyph-components/glyph-components.css';
import '!style-loader!css-loader!sass-loader!./../../../.storybook/re-style.scss';

defineCustomElements();

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { hideNoControlsWarning: true },
    options: {
        storySort: {
            order: [
                'Introduction',
                'Layout',
                'Components',
                [
                    'Flex',
                    'No Data',
                    'Skeleton Loader',
                    'Avatar',
                    'User menu',
                    'App menu',
                    'Share menu',
                    'Breadcrumbs',
                    'Button',
                    'Button group',
                    'Input',
                    'Selector',
                    'Slider',
                    'Toggler',
                    'Tabs',
                    'Toaster',
                    'Scroll',
                    'Calendar',
                    'Filter',
                    'Date filter',
                    'Header',
                    'Title',
                    'Pagination',
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
};

import { globalTypes } from './../../../.storybook/globals';
export { globalTypes };
