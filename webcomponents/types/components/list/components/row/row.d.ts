import { Row } from 'glyph-core-poc';
export declare class RowComponent {
  /** row data */
  row: Row;
  /**  total flag */
  isTotal: boolean;
  /** expandable flag */
  expandable: boolean;
  /** i18n object with translations */
  i18n: any;
  /** expand row callback */
  expandHandle: (row: Row) => () => any;
  /** Render fields */
  fields: string[];
  private _getRowClass;
  private _renderCell;
  private _renderMultiActions;
  private _renderActions;
  private _renderRow;
  private _renderChildren;
  render(): any;
}
