import { h } from '@stencil/core';
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
export const Color = (props, children) => {
  const { value, decoration } = props;
  const isNegative = _isNegative(value);
  const isSuccess = _getSuccess(decoration, isNegative);
  const isAlert = _getAlert(decoration, isNegative);
  return (h("span", { style: { color: (isSuccess && 'var(--gui-color--success)') || (isAlert && 'var(--gui-color--alert)') } }, children));
};
