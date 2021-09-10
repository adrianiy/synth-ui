import { EventEmitter } from '../../stencil-public-runtime';
import { RankingData } from 'glyph-core-poc';
export declare class RankingComponent {
  /** Base path to get assets */
  basePath: string;
  /** Loading flag */
  loading: boolean;
  /** Aspect ratio used to calculate loader height */
  aspectRatio: number;
  /** Ranking data */
  rankingData: RankingData[];
  /** (optional) ranking header. Applicable on single section ranking */
  rankingHeader: string;
  /** Distance between columns */
  columnGap: string;
  /** Distance between rows */
  rowGap: string;
  /** Distance applied to both axes */
  gap: string;
  /** Distance between elements inside a column */
  innerGap: string;
  /** Columns to render if ranking have more than 1 section, number of columns will apply per section */
  columns: number;
  /** Inner columns, sets how many columns should be rendered per column */
  innerColumns: number;
  /** Row to render */
  rows: number;
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
  element: HTMLGlyphRankingElement;
  /** Scrolled state change event */
  scrollChange: EventEmitter<{
    scrolled: boolean;
    scrollTop: number;
  }>;
  /** article height */
  elementHeight: number;
  /** last visible element */
  lastVisibleIndex: number;
  /** is scrolling flag */
  isScrolling: boolean;
  /** loading articles state */
  loadingArticles: boolean;
  private _i18n;
  private _rankingContainer;
  private _articleRef;
  handleLoadChange(): void;
  componentWillLoad(): void;
  componentDidRender(): Promise<void>;
  /** This method will change ranking container scroll */
  changeScroll(scroll?: number, listeneable?: boolean): Promise<void>;
  private _handleScroll;
  private _setElementHeight;
  private _setElementRef;
  private _setRankingRef;
  private _getHeight;
  private _getSectionName;
  private _handleArticleVisibility;
  private _getColumns;
  private _renderArticles;
  private _renderRankingColumn;
  private _renderLoader;
  private _renderLoaders;
  render(): any;
}
