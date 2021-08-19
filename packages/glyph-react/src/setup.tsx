import { applyPolyfills, defineCustomElements } from 'glyph-components-poc/dist/loader';
import { setBasePath } from 'glyph-components-poc/dist/stores/context.store';

export const setup = (path?: any) => {
    applyPolyfills().then(() => {
        if (path) {
            setBasePath(path);
        }
        defineCustomElements();
    });
};
