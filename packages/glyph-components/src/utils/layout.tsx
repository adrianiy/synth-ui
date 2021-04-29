import { FunctionalComponent, h } from '@stencil/core';
import { cls } from './utils';

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
    className?: string;
    id?: string;
    onClick?: (event: MouseEvent) => any;
    ref?: any;
}

const getDistribution = (props: LayoutProps) => {
    const flexType = props.row ? 'row' : 'column';
    const flexDist = Object.keys(props)
        .filter(key => props[key])
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
    const { testId = '', className, id, onClick, ref, ...rest } = props;

    return (
        <div
            data-testid={testId}
            class={cls('row', getDistribution(rest), className)}
            onClick={onClick}
            id={id}
            ref={ref}
        >
            {children}
        </div>
    );
};

export const ColumnLayout: FunctionalComponent<LayoutProps> = (props, children) => {
    const { testId = '', className, id, onClick, ref, ...rest } = props;

    return (
        <div
            data-testid={testId}
            class={cls('column', getDistribution(rest), className)}
            onClick={onClick}
            id={id}
            ref={ref}
        >
            {children}
        </div>
    );
};
