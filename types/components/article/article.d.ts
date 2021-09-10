import { EventEmitter } from '../../stencil-public-runtime';
import { Article } from 'glyph-core-poc';
export declare class ArticleComponent {
  /** Base path to get assets */
  basePath: string;
  /** Loading flag */
  loading: boolean;
  /** Aspect ratio used to calculate loader height */
  aspectRatio: number;
  /** Force visibility flag */
  isVisible: Boolean;
  /** Article data */
  article: Article;
  /** Flag to activate click callback */
  isClickable: boolean;
  /** Field to render quantity tag */
  quantityField: string;
  /** Image type to render image | plain_image */
  imageType: string;
  /** **optional** Compose image url callback */
  parseImageUrl: (image: string) => string;
  /** Decorate with backdrop filter, solves some performance issues (in storybook) */
  useBackdropDecoration: boolean;
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  /** Element reference */
  element: HTMLGlyphArticleElement;
  /** Click event callback */
  articleClick: EventEmitter<Article>;
  /** Article gets visible event */
  articleVisible: EventEmitter<any>;
  /** Show tooltip flag */
  tooltip: string;
  /** Article size calculated after render to print small letters if necessary */
  articleSize: string;
  private _i18n;
  private _observer;
  private _article;
  private _id;
  componentWillLoad(): void;
  componentDidRender(): void;
  /** This method will return image height */
  getImageSize(): Promise<DOMRect>;
  /** This method will hide tooltip */
  hideTooltip(): Promise<void>;
  /** This method will hide tooltip */
  setArticleSize(): Promise<void>;
  private _getArticleSize;
  private _handleClick;
  private _setArticleRef;
  private _onIntersection;
  private _handleCopy;
  private _renderQuantity;
  private _showTooltip;
  private _hideTooltip;
  private _renderTagsTooltip;
  private _renderTags;
  private _renderHeader;
  private _renderFooter;
  private _renderLoader;
  render(): any;
}
