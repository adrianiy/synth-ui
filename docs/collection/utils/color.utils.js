import { DecorationType } from './color.model';
const _isNegative = (num) => {
  const isNumber = num !== '--';
  return (num === null || num === void 0 ? void 0 : num.startsWith('-')) && isNumber;
};
const _getSuccess = (decorationType, isNegative) => {
  switch (decorationType) {
    case DecorationType.OnlyGreen:
      return !isNegative;
    case DecorationType.InvertedGreen:
      return isNegative;
    default:
      return false;
  }
};
const _getAlert = (decorationType, isNegative) => {
  switch (decorationType) {
    case DecorationType.OnlyRed:
      return isNegative;
    case DecorationType.InvertedRed:
      return !isNegative;
    default:
      return false;
  }
};
export const getGrowthColor = (num, decorationType) => {
  const isNegative = _isNegative(num);
  const isSuccess = _getSuccess(decorationType, isNegative);
  const isAlert = _getAlert(decorationType, isNegative);
  return `${isSuccess && 'color_success'} ${isAlert && 'color_alert'}`;
};
