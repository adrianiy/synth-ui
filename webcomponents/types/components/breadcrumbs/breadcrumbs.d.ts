import { Crumb } from 'glyph-core-poc';
export declare class BreadcrumbsComponent {
  /** Crumb property. Last one is displayed as active. Each crumb triggers a callback on click */
  crumbs: Crumb[];
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  private _handleClick;
  private _isLast;
  render(): any;
}
