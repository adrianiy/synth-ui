import { defineCustomElements } from './../../glyph-components/dist/esm/loader';

import '!style-loader!css-loader!sass-loader!./../../glyph-components/dist/glyph-components/glyph-components.css';
import '!style-loader!css-loader!sass-loader!./../../../.storybook/re-style.scss';

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
import { globalTypes } from './../../../.storybook/globals';
export { globalTypes };
