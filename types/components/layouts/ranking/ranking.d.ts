import { RankingData, RankingViewOptions } from 'glyph-core-poc';
export declare class GlyphRankingLayout {
  /** Base path to get assets */
  basePath: string;
  /** Loading flag */
  loading: boolean;
  /** Loading comparable flag */
  loadingComparable: boolean;
  /** Aspect ratio used to calculate loader height */
  aspectRatio: number;
  /** Ranking data */
  rankingData: RankingData[];
  /** Ranking comparable data */
  compRankingData: RankingData[];
  /** Distance between columns */
  columnGap: string;
  /** Distance between rows */
  rowGap: string;
  /** Active view layout */
  activeView: RankingViewOptions;
  /** Decorate with backdrop filter, solves some performance issues (in storybook) */
  useBackdropDecoration: boolean;
  /** Extra i18n translates */
  i18n: {
    [key: string]: string;
  };
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  /** Application interface */
  interface: string;
  /** Element reference */
  element: HTMLGlyphRankingLayoutElement;
  /** Active slider value */
  activeViewValue: number;
  /** Image type */
  imageType: string;
  /** Comparable ranking flag */
  comparable: boolean;
  /** Scrolled state flag */
  scrolled: boolean;
  private _i18n;
  private _singleSectionOptions;
  private _multiSectionOptions;
  private _rankingRef;
  private _compRankingRef;
  componentWillLoad(): Promise<void>;
  componentDidLoad(): void;
  private _initializeVariables;
  private _setRankingRef;
  private _setCompRankingRef;
  private _isSingleRanking;
  private _handleScrollChange;
  private _handleCompScrollChange;
  private _handleSliderChange;
  private _handleImageTypeChange;
  private _handleCompChange;
  private _backToTop;
  private _renderHeaderOptions;
  private _renderComparable;
  render(): any;
}
