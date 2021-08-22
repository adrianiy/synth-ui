import { applyPolyfills, defineCustomElements } from 'glyph-components-poc/dist/loader';
import { setBasePath } from 'glyph-components-poc/dist/stores/context.store';

export const setup = async (path?: string) => {
    await applyPolyfills();
    defineCustomElements();
    if (path) {
        setBasePath(path);
    }
};
