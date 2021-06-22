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
    class?: string;
    style?: any;
    id?: string;
    onClick?: (event: MouseEvent) => any;
    onMouseEnter?: (event: MouseEvent) => any;
    onMouseLeave?: (event: MouseEvent) => any;
    ref?: any;
}

const getDistribution = (props: LayoutProps) => {
    const flexType = props.row ? 'row' : 'column';
    const flexDist = Object.keys(props)
        .filter(key => props[key])
        .filter(Boolean)
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
    const { testId = '', class: className, style, id, onClick, onMouseEnter, onMouseLeave, ref, ...rest } = props;

    return (
        <div
            data-testid={testId}
            class={cls('row', getDistribution(rest), className)}
            style={style}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            id={id}
            ref={ref}
        >
            {children}
        </div>
    );
};

export const ColumnLayout: FunctionalComponent<LayoutProps> = (props, children) => {
    const { testId = '', class: className, style, id, onClick, onMouseEnter, onMouseLeave, ref, ...rest } = props;

    return (
        <div
            data-testid={testId}
            class={cls('column', getDistribution(rest), className)}
            style={style}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            id={id}
            ref={ref}
        >
            {children}
        </div>
    );
};
