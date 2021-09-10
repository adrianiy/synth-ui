export declare class FlexComponent {
  /** Flex-direction = vertical */
  column: boolean;
  /** Flex-direction = horizontal */
  row: boolean;
  /** Horizonal align = left */
  left: boolean;
  /** Horizontal align = center */
  center: boolean;
  /** Horizontal align = right */
  right: boolean;
  /** Vertical align = top */
  top: boolean;
  /** Vertical align = middle */
  middle: boolean;
  /** Verical align = bottom */
  bottom: boolean;
  /** Apply spaced distribution */
  spaced: boolean;
  /** Apply spaced around distribution */
  around: boolean;
  /** Class attribute to apply in flex div */
  flexClass: string;
  /** Style atttribute to apply in flex div */
  flexStyle: any;
  /** Id attribute to apply in flex div */
  flexId: string;
  /** Set an id to attribute data-testid */
  testId: string;
  /** Interface type ['MODERN', 'CLASSIC'] */
  interface: string;
  /** Theme type */
  theme: string;
  componentWillLoad(): void;
  render(): any;
}
