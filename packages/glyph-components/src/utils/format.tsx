import { FunctionalComponent, h } from '@stencil/core';
import { Cell } from 'glyph-core-poc';
import { Color } from './color';
import { getFormatedValues } from './utils';

interface FormatProps {
    config: Cell;
    decorate?: boolean;
}

export const Format: FunctionalComponent<FormatProps> = props => {
    const { config, decorate } = props;
    const { decoration } = config;
    const value = getFormatedValues(config);

    return decorate ? (
        <Color value={value} decoration={decoration}>
            {value}
        </Color>
    ) : (
        <span> {value} </span>
    );
};
