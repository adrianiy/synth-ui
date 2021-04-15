import { applyPolyfills, defineCustomElements } from 'glyph-components/dist/loader';

export const setup = () => {
    applyPolyfills().then(() => {
        defineCustomElements();
    });
};
