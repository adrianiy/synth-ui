import '!style-loader!css-loader!sass-loader!../../glyph-components/dist/glyph-components/glyph-components.css';
import '!style-loader!css-loader!sass-loader!./../../../.storybook/re-style.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: [
                'Introduction',
                'Glyph pipes',
                [
                    'Introduction',
                    'Configure',
                    'Composer',
                    'Configuration',
                    [
                        'YAML',
                        'Name',
                        'Pipe',
                        'Log',
                        'Variables',
                        'Filters',
                        'Fetch',
                        'Parallel',
                        'Group',
                        'Join',
                        'Transform',
                        'Sort',
                        'Filter',
                        'Custom',
                    ],
                ],
                'Middlewares',
                [
                    'Introduction',
                    'SetVariables',
                    'Filters',
                    'Sort',
                    'Filter',
                    'Transform',
                    'GroupBy',
                    'Join',
                    'Parallel',
                ],
                'State',
                [ 'Introduction' ],
                'Interfaces',
                [ 'Introduction' ],
            ],
        },
    },
};

import { globalTypes } from './../../../.storybook/globals';
export { globalTypes };
