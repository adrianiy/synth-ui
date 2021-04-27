import { FunctionalComponent, h } from '@stencil/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { cls } from './utils';

interface ScrollProps {
    hideScrollBar?: boolean;
    tiny?: boolean;
    horizontal?: boolean;
    vertical?: boolean;
    height?: number;
    width?: number;
    className?: string;
    initCallback?: (ps: PerfectScrollbar) => void;
}

export const Scroll: FunctionalComponent<ScrollProps> = (props, children) => {
    const { hideScrollBar, tiny, horizontal, vertical = true, className, width, height, initCallback } = props;

    const config = {
        wheelSpeed: 2,
        supressScrollX: !horizontal,
        supressScrollY: !vertical,
    } as PerfectScrollbar.Options;

    const _initializeScroll = (el: any) => {
        const ps = new PerfectScrollbar(el, config);

        if (initCallback) {
            initCallback(ps);
        }
    };

    return (
        <div
            style={{ '--scrollbar-height': height && `${height}px`, '--scrollbar-width': width && `${width}px` }}
            class="scrollbar__container"
        >
            <div
                class={cls(
                    className,
                    !horizontal && 'scrollbar--hide--x',
                    !vertical && 'scrollbar--hide--y',
                    hideScrollBar && 'scrollbar--hide',
                    tiny && 'scrollbar--tiny',
                )}
                ref={el => _initializeScroll(el)}
            >
                {children}
            </div>
        </div>
    );
};
