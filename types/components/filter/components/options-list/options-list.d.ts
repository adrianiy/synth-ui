import { FilterOptionHeader } from 'glyph-core-poc';
export declare class OptionsListComponent {
  /** Filter options */
  options: FilterOptionHeader[];
  /** Filter chip interface ['MODERN', 'CLASSIC'] */
  interface: string;
  /** Style applied in list */
  listStyle: {
    [key: string]: string;
  };
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** Search value */
  searchValue: string;
  /** Option click event */
  optionClick: (option: FilterOptionHeader) => (event: any) => void;
  componentWillLoad(): void;
  private _checkHide;
  private _renderOptionHeader;
  private _renderOption;
  render(): any;
}
