import { FunctionalComponent, h } from '@stencil/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { cls } from './utils';

interface ScrollProps {
    hideScrollBar?: boolean;
    horizontal?: boolean;
    vertical?: boolean;
    height?: string;
    width?: string;
    className?: string;
}

export const Scroll: FunctionalComponent<ScrollProps> = (props, children) => {
    const { hideScrollBar, horizontal, vertical = true, className, width, height } = props;

    const config = {
        supressScrollX: !horizontal,
        supressScrollY: !vertical,
    };

    return (
        <div
            style={{ width, height }}
            class={cls('scrollbar__container', className, hideScrollBar && 'scrollbar--hide')}
            ref={el => new PerfectScrollbar(el, config as any)}
        >
            {children}
        </div>
    );
};
