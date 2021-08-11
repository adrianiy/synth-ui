import { FunctionalComponent, h } from '@stencil/core';
import { DecorationType, IDecorationType } from 'glyph-core-poc';

interface ColorProps {
    value: string;
    decoration?: IDecorationType;
}

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

export const Color: FunctionalComponent<ColorProps> = (props, children) => {
    const { value, decoration } = props;
    const isNegative = _isNegative(value);
    const isSuccess = _getSuccess(decoration, isNegative);
    const isAlert = _getAlert(decoration, isNegative);

    return (
        <span style={{ color: (isSuccess && 'var(--gui-color--success)') || (isAlert && 'var(--gui-color--alert)') }}>
            {children}
        </span>
    );
};
