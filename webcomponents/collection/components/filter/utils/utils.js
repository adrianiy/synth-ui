import { h } from '@stencil/core';
export const renderOptionDescription = (description, searchValue) => {
  if (searchValue) {
    description = description.toLowerCase().split(searchValue.toLowerCase()).join(`<b>${searchValue}</b>`);
  }
  return h("span", { innerHTML: description });
};
export const inSearch = (option, searchValue, i18n) => {
  if (searchValue) {
    if (option.header) {
      return option.children.some(child => inSearch(child, searchValue, i18n));
    }
    return (i18n[option.description] || option.description).toLowerCase().includes(searchValue.toLowerCase());
  }
  return true;
};
