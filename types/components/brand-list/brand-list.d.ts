import { EventEmitter } from '../../stencil-public-runtime';
import { Brand } from 'glyph-core-poc';
export declare class BrandListComponent {
  /** Base path to get assets */
  basePath: string;
  /** Brand list */
  brandList: Brand[];
  /** Event triggered when user clicks outside */
  outsideCallback: () => void;
  /** Event triggerd on brand click */
  brandChange: EventEmitter<Brand>;
  /** Element reference */
  element: HTMLGlyphBrandListElement;
  clickOutside(event: any): void;
  componentWillLoad(): void;
  private _handleBrandChange;
  render(): any;
}
