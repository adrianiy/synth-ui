import '!style-loader!css-loader!sass-loader!./re-style.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: {
            order: [
                'Glyph UI',
                'Introduction',
                'Getting Started',
                'Roadmap',
                'Changelog',
                'Style guide',
                [ 'Figma', 'Colors', 'Typography', 'Icons', 'Naming convention', 'Spacing' ],
                'Web Components',
                'Angular',
                'React',
            ],
        },
    },
};

import { globalTypes } from './globals';
export { globalTypes };
