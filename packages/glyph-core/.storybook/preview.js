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
            order: [ 'Introduction' ],
        },
    },
};

import { globalTypes } from './../../../.storybook/globals';
export { globalTypes };

