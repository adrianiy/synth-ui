import { applyPolyfills, defineCustomElements } from 'glyph-components-poc/dist/loader';

export const setup = () => {
    applyPolyfills().then(() => {
        defineCustomElements();
    });
};
