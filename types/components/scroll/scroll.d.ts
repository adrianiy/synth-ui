export declare class ScrollComponent {
  /** hide scrollbar */
  hideScrollBar: boolean;
  /** tinyh scrollbar */
  tiny: boolean;
  /** show horizontal bar */
  horizontal: boolean;
  /** show vertical bar */
  vertical: boolean;
  /** height property */
  height: number;
  /** width property */
  width: number;
  /** class name to be used in scroll container */
  containerClass: string;
  /** scrolling speed */
  scrollSpeed: number;
  /** scrollbar initialization callback */
  initCallback: (ps: any) => void;
  /** Scrollbar element */
  ps: any;
  componentWillRender(): void;
  private _initScrollbar;
  render(): any;
}
