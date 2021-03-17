import { FunctionalComponent, h } from '@stencil/core';
import { cls } from './utils';

export const distributions = {
    SPACED: 'space-between',
    MIDDLE: 'middle',
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right',
    FULLSIZE: 'fl-1',
};

export const paddings = {
    BIG: 'padding--big',
    LARGE: 'padding--large',
    MEDIUM: 'padding--medium',
    SMALL: 'padding--small',
    TINY: 'padding--tiny',
};

interface LayoutProps {
    testId?: string;
    distribution?: string | string[];
    className?: string;
    id?: string;
    padding?: string;
    verticalPadding?: string;
    horizontalPadding?: string;
    onClick?: (event: MouseEvent) => any;
}

const composeClassNames = (
    flexType: string,
    distribution: string | string[],
    className: string,
    padding: string,
    verticalPadding: string,
    horizontalPadding: string,
) => {
    const vPadding = verticalPadding ? `${verticalPadding}--vertical` : '';
    const hPadding = horizontalPadding ? `${horizontalPadding}--horizontal` : '';

    return cls(flexType, distribution, className, padding, vPadding, hPadding);
};

export const RowLayout: FunctionalComponent<LayoutProps> = (
    { testId = '', distribution, className, id, padding, verticalPadding, horizontalPadding, onClick },
    children,
) => (
    <div
        data-testid={testId}
        class={composeClassNames('row', distribution, className, padding, verticalPadding, horizontalPadding)}
        onClick={onClick}
        id={id}
    >
        {children}
    </div>
);

export const ColumnLayout: FunctionalComponent<LayoutProps> = (
    { testId = '', distribution, className, id, padding, verticalPadding, horizontalPadding, onClick },
    children,
) => (
    <div
        data-testid={testId}
        class={composeClassNames('column', distribution, className, padding, verticalPadding, horizontalPadding)}
        onClick={onClick}
        id={id}
    >
        {children}
    </div>
);
