import { applyPolyfills, defineCustomElements } from 'synth-components/dist/loader';

export const setup = () => {
    applyPolyfills().then(() => {
        defineCustomElements();
    });
};
