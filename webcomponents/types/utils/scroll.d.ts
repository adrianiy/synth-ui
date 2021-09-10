import { FunctionalComponent } from '../stencil-public-runtime';
import PerfectScrollbar from 'perfect-scrollbar';
interface ScrollProps {
  hideScrollBar?: boolean;
  tiny?: boolean;
  horizontal?: boolean;
  vertical?: boolean;
  height?: number;
  width?: number;
  scrollSpeed?: number;
  class?: string;
  initCallback?: (ps: PerfectScrollbar) => void;
}
export declare const Scroll: FunctionalComponent<ScrollProps>;
export {};
