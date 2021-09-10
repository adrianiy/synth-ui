import { FunctionalComponent } from '../stencil-public-runtime';
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
export declare const Flex: FunctionalComponent<LayoutProps>;
export declare const RowLayout: FunctionalComponent<LayoutProps>;
export declare const ColumnLayout: FunctionalComponent<LayoutProps>;
export {};
