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
