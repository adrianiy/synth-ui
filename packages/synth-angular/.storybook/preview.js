import { defineCustomElements } from './../../synth-components/dist/esm/loader';

import '!style-loader!css-loader!sass-loader!./../../synth-components/dist/synth-components/synth-components.css';

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
