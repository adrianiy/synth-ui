export declare class ButtonComponent {
  /** Button text */
  text: string;
  /** Material icons id */
  icon: string;
  /** Cancel type button. Renders in red */
  cancel: boolean;
  /** Action button. Displayed with text only */
  action: boolean;
  /** Tiny action button displays a smaller and thinier text */
  tiny: boolean;
  /** Custom classNames to apply */
  class: string;
  /** Renders icon first */
  iconFirst: boolean;
  /** Interface type ['MODERN', 'CLASSIC'] */
  interface: string;
  componentWillLoad(): void;
  render(): any;
}
