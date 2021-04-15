import { DecorationType } from './color.model';

const _isNegative = (num: string) => {
    const isNumber = num !== '--';

    return num?.startsWith('-') && isNumber;
};

const _getSuccess = (decorationType: string, isNegative: boolean) => {
    switch (decorationType) {
        case DecorationType.OnlyGreen:
            return !isNegative;
        case DecorationType.InvertedGreen:
            return isNegative;
        default:
            return false;
    }
};
const _getAlert = (decorationType: string, isNegative: boolean) => {
    switch (decorationType) {
        case DecorationType.OnlyRed:
            return isNegative;
        case DecorationType.InvertedRed:
            return !isNegative;
        default:
            return false;
    }
};

export const getGrowthColor = (num: string, decorationType: string) => {
    const isNegative = _isNegative(num);
    const isSuccess = _getSuccess(decorationType, isNegative);
    const isAlert = _getAlert(decorationType, isNegative);

    return `${isSuccess && 'color_success'} ${isAlert && 'color_alert'}`;
};
