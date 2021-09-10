import { createStore } from '@stencil/store';
let { state, set } = createStore({
  basePath: '.',
  interface: "classic" /* classic */,
  theme: "light" /* light */,
});
export const setBasePath = (basePath) => {
  set('basePath', basePath);
  state = Object.assign(Object.assign({}, state), { basePath });
};
export const setInterface = (interfaceValue) => {
  set('interface', interfaceValue);
  state = Object.assign(Object.assign({}, state), { interface: interfaceValue });
};
export const setTheme = (theme) => {
  set('theme', theme);
  state = Object.assign(Object.assign({}, state), { theme });
};
export default state;
