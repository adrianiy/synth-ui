import { FunctionalComponent, h } from '@stencil/core';
import { cls } from './utils';

export const distributions = {
    SPACED: 'space-between',
    AROUND: 'space-around',
    MIDDLE: 'middle',
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right',
    TOP: 'top',
    BOTTOM: 'bottom',
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
    row?: boolean;
    column?: boolean;
    spaced?: boolean;
    around?: boolean;
    middle?: boolean;
    center?: boolean;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    testId?: string;
    distribution?: string | string[];
    className?: string;
    id?: string;
    padding?: string;
    verticalPadding?: string;
    horizontalPadding?: string;
    onClick?: (event: MouseEvent) => any;
    ref?: any;
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

const getDistribution = props => {
    const flexType = props.row ? 'row' : 'column';
    const flexDist = Object.keys(props)
        .filter(key => props[key])
        .map(key => distributions[key.toUpperCase()])
        .filter(dist => dist)
        .join(' ');

    return `${flexType} ${flexDist}`.trim();
};

export const Flex: FunctionalComponent<LayoutProps> = (props, children) => {
    if (props.row) {
        return <RowLayout {...props}>{children}</RowLayout>;
    } else {
        return <ColumnLayout {...props}>{children}</ColumnLayout>;
    }
};

export const RowLayout: FunctionalComponent<LayoutProps> = (props, children) => {
    const { testId = '', className, id, padding, verticalPadding, horizontalPadding, onClick, ref } = props;

    return (
        <div
            data-testid={testId}
            class={composeClassNames(
                'row',
                getDistribution(props),
                className,
                padding,
                verticalPadding,
                horizontalPadding,
            )}
            onClick={onClick}
            id={id}
            ref={ref}
        >
            {children}
        </div>
    );
};

export const ColumnLayout: FunctionalComponent<LayoutProps> = (props, children) => {
    const { testId = '', className, id, padding, verticalPadding, horizontalPadding, onClick, ref } = props;

    return (
        <div
            data-testid={testId}
            class={composeClassNames(
                'column',
                getDistribution(props),
                className,
                padding,
                verticalPadding,
                horizontalPadding,
            )}
            onClick={onClick}
            id={id}
            ref={ref}
        >
            {children}
        </div>
    );
};
