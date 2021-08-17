import { applyPolyfills, defineCustomElements } from 'glyph-components-poc/dist/loader';
import { setAssetPath } from 'glyph-components-poc/dist/custom-elements';

export const setup = (path?: any) => {
    applyPolyfills().then(() => {
        if (path) {
            setAssetPath(path);
        }
        defineCustomElements();
    });
};
