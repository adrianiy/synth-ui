'use strict';

const index = require('./index-556e1ddd.js');
const utils = require('./utils-69695228.js');

const _isNegative = (num) => {
  const isNumber = num !== '--';
  return (num === null || num === void 0 ? void 0 : num.startsWith('-')) && isNumber;
};
const _getSuccess = (decorationType, isNegative) => {
  switch (decorationType) {
    case "green" /* OnlyGreen */:
      return !isNegative;
    case "inverted-green" /* InvertedGreen */:
      return isNegative;
    default:
      return false;
  }
};
const _getAlert = (decorationType, isNegative) => {
  switch (decorationType) {
    case "red" /* OnlyRed */:
      return isNegative;
    case "inverted-red" /* InvertedRed */:
      return !isNegative;
    default:
      return false;
  }
};
const Color = (props, children) => {
  const { value, decoration } = props;
  const isNegative = _isNegative(value);
  const isSuccess = _getSuccess(decoration, isNegative);
  const isAlert = _getAlert(decoration, isNegative);
  return (index.h("span", { style: { color: (isSuccess && 'var(--gui-color--success)') || (isAlert && 'var(--gui-color--alert)') } }, children));
};

const Format = props => {
  const { config, decorate } = props;
  const { decoration } = config;
  const value = utils.getFormatedValues(config);
  return decorate ? (index.h(Color, { value: value, decoration: decoration }, value)) : (index.h("span", null,
    " ",
    value,
    " "));
};

exports.Format = Format;
