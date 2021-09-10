import { EventEmitter } from '../../stencil-public-runtime';
import { Tab, TabStyle } from 'glyph-core-poc';
export declare class TabsComponent {
  /** Component tabs */
  tabs: Tab[];
  /** Tab rendering style big | small */
  tabStyle: TabStyle;
  /** Tab selection event */
  tabSelect: EventEmitter<Tab>;
  private _selectTab;
  render(): any;
}
