import { FilterOptionHeader } from 'glyph-core-poc';
export declare class FilterDrilldownOptionsComponent {
  /** Filter options */
  option: FilterOptionHeader;
  /** Filter chip interface ['MODERN', 'CLASSIC'] */
  interface: string;
  /** Search value */
  searchValue: string;
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** Option click event */
  optionClick: (option: FilterOptionHeader) => (event: any) => void;
  /** Expanded flag */
  expanded: boolean;
  /** Expanded state */
  expandedState: boolean;
  componentWillLoad(): void;
  private _handleClick;
  private _renderOptionsList;
  render(): any;
}
