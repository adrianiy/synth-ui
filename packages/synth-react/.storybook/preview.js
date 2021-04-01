import { applyPolyfills, defineCustomElements } from 'synth-components/dist/loader';
import 'synth-components/dist/synth-components/synth-components.css';

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
};
