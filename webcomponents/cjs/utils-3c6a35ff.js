'use strict';

const index = require('./index-556e1ddd.js');

const renderOptionDescription = (description, searchValue) => {
  if (searchValue) {
    description = description.toLowerCase().split(searchValue.toLowerCase()).join(`<b>${searchValue}</b>`);
  }
  return index.h("span", { innerHTML: description });
};
const inSearch = (option, searchValue, i18n) => {
  if (searchValue) {
    if (option.header) {
      return option.children.some(child => inSearch(child, searchValue, i18n));
    }
    return (i18n[option.description] || option.description).toLowerCase().includes(searchValue.toLowerCase());
  }
  return true;
};

exports.inSearch = inSearch;
exports.renderOptionDescription = renderOptionDescription;
