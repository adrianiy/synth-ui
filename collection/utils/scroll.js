import { h } from '@stencil/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { cls } from './utils';
export const Scroll = (props, children) => {
  const { hideScrollBar, tiny, scrollSpeed = 0.05, horizontal, vertical = true, class: className, width, height, initCallback, } = props;
  const config = {
    wheelSpeed: scrollSpeed,
    wheelPropagation: false,
    supressScrollX: !horizontal,
    supressScrollY: !vertical,
  };
  const _initializeScroll = (el) => {
    const ps = new PerfectScrollbar(el, config);
    if (initCallback) {
      initCallback(ps);
    }
  };
  return (h("div", { style: { '--scrollbar-height': height && `${height}px`, '--scrollbar-width': width && `${width}px` }, class: "scrollbar__container" },
    h("div", { class: cls(className, !horizontal && 'scrollbar--hide--x', !vertical && 'scrollbar--hide--y', hideScrollBar && 'scrollbar--hide', tiny && 'scrollbar--tiny'), ref: el => _initializeScroll(el) }, children)));
};
