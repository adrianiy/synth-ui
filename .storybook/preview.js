import { defineCustomElements } from '../packages/synth-components/dist/esm/loader';

import '!style-loader!css-loader!sass-loader!./global.scss';

defineCustomElements();

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: {
            order: [
                'Synth-UI',
                [ 'Introduction', 'Getting Started', 'Roadmap', 'Changelog' ],
                'WebComponents',
                [ 'Introduction', 'Components' ],
            ],
        },
    },
};
