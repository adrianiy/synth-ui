import { h } from '@stencil/core';
import { Color } from './color';
import { getFormatedValues } from './utils';
export const Format = props => {
  const { config, decorate } = props;
  const { decoration } = config;
  const value = getFormatedValues(config);
  return decorate ? (h(Color, { value: value, decoration: decoration }, value)) : (h("span", null,
    " ",
    value,
    " "));
};
