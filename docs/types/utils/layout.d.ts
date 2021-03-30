import { FunctionalComponent } from '../stencil-public-runtime';
export declare const distributions: {
  SPACED: string;
  MIDDLE: string;
  CENTER: string;
  LEFT: string;
  RIGHT: string;
  FULLSIZE: string;
};
export declare const paddings: {
  BIG: string;
  LARGE: string;
  MEDIUM: string;
  SMALL: string;
  TINY: string;
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
export declare const RowLayout: FunctionalComponent<LayoutProps>;
export declare const ColumnLayout: FunctionalComponent<LayoutProps>;
export {};
