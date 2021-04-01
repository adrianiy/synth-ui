import { Row } from '../../list.model';
export declare class RowComponent {
  /** row data */
  row: Row;
  /**  total flag */
  isTotal: boolean;
  /** expandable flag */
  expandable: boolean;
  /** i18n object with translations */
  i18n: any;
  private _expandRow;
  private _getRowClass;
  private _renderCell;
  private _renderRow;
  private _renderChildren;
  render(): any;
}
