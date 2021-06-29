import '!style-loader!css-loader!sass-loader!./re-style.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: {
            order: [
                'glyph-UI',
                [ 'Introduction', 'Getting Started', 'Roadmap', 'Changelog' ],
                'Web Components',
                'Angular',
                'React',
            ],
        },
    },
};
