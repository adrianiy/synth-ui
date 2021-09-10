import { createStore } from '@stencil/store';
import { UIInterface, UITheme } from 'glyph-core-poc';

interface Store {
    basePath: string;
    interface: string;
    theme: string;
}

let { state, set } = createStore({
    basePath: '.',
    interface: UIInterface.classic,
    theme: UITheme.light,
} as Store);

export const setBasePath = (basePath: string) => {
    set('basePath', basePath);
    state = { ...state, basePath };
};

export const setInterface = (interfaceValue: string) => {
    set('interface', interfaceValue);
    state = { ...state, interface: interfaceValue };
};

export const setTheme = (theme: string) => {
    set('theme', theme);
    state = { ...state, theme };
};

export default state;
