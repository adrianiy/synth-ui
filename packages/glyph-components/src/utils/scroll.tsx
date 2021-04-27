import { FunctionalComponent, h } from '@stencil/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { cls } from './utils';

interface ScrollProps {
    hideScrollBar?: boolean;
    horizontal?: boolean;
    vertical?: boolean;
    height?: number;
    width?: number;
    className?: string;
    initCallback?: (ps: PerfectScrollbar) => void;
}

export const Scroll: FunctionalComponent<ScrollProps> = (props, children) => {
    const { hideScrollBar, horizontal, vertical = true, className, width, height, initCallback } = props;

    const config = {
        supressScrollX: !horizontal,
        supressScrollY: !vertical,
    };

    const _initializeScroll = (el: any) => {
        const ps = new PerfectScrollbar(el, config as any);

        if (initCallback) {
            initCallback(ps);
        }
    };

    return (
        <div
            style={{ '--scrollbar-height': `${height}px`, '--scrollbar-width': `${width}px` }}
            class="scrollbar__container"
        >
            <div class={cls(className, hideScrollBar && 'scrollbar--hide')} ref={el => _initializeScroll(el)}>
                {children}
            </div>
        </div>
    );
};
