import { applyPolyfills, defineCustomElements } from 'glyph-components/dist/loader';
import 'glyph-components/dist/glyph-components/glyph-components.css';

applyPolyfills().then(() => {
    defineCustomElements();
});
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
            order: ['Introduction', 'Components'],
        },
    },
};
