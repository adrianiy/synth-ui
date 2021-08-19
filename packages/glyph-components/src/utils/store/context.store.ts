import { createStore } from '@stencil/store';

const { state } = createStore({
    basePath: '.',
});

export const setBasePath = (basePath: string) => {
    state.basePath = basePath;
};

export default state;
