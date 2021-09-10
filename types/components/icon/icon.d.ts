export declare class IconComponent {
  /** icon name */
  icon: string;
  /** render material icon */
  material: boolean;
  /** class to use in icon */
  class: string;
  /** render outlined icon (for material icons) */
  outlined: boolean;
  /** render icon with button role */
  button: boolean;
  /** click callback */
  clickCbk: (event: MouseEvent) => any;
  render(): any;
}
