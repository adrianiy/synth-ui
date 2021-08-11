import { Component, Prop, Element, h, State, Event, EventEmitter, Method, Watch } from '@stencil/core';
import { RankingData, Article } from 'glyph-core-poc';
import { cls, getLocaleComponentStrings } from '../../utils/utils';

@Component({
    tag: 'glyph-ranking',
    styleUrl: 'ranking.scss',
    shadow: true,
})
export class RankingComponent {
    /** Base path to get assets */
    @Prop() basePath: string;
    /** Loading flag */
    @Prop() loading: boolean = false;
    /** Aspect ratio used to calculate loader height */
    @Prop() aspectRatio: number = 340 / 512;
    /** Ranking data */
    @Prop() rankingData: RankingData[];
    /** (optional) ranking header. Applicable on single section ranking */
    @Prop() rankingHeader: string;
    /** Distance between columns */
    @Prop() columnGap: string = '15%';
    /** Distance between rows */
    @Prop() rowGap: string = 'var(--gui-padding--xxl)';
    /** Distance applied to both axes */
    @Prop() gap: string;
    /** Distance between elements inside a column */
    @Prop() innerGap: string;
    /** Columns to render if ranking have more than 1 section, number of columns will apply per section */
    @Prop() columns: number = 3;
    /** Inner columns, sets how many columns should be rendered per column */
    @Prop() innerColumns: number = 1;
    /** Row to render */
    @Prop() rows: number = 1;
    /** Image type to render image | plain_image */
    @Prop() imageType: string = 'image';
    /** **optional** Compose image url callback */
    @Prop() parseImageUrl: (image: string) => string;
    /** Decorate with backdrop filter, solves some performance issues (in storybook) */
    @Prop() useBackdropDecoration: boolean = true;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** **optional** force locale change if html lang is not interpreted */
    @Prop() locale: string;
    /** Element reference */
    @Element() element: HTMLGlyphRankingElement;
    /** Scrolled state change event */
    @Event() scrollChange: EventEmitter<{ scrolled: boolean; scrollTop: number }>;

    /** article height */
    @State() elementHeight: number;
    /** last visible element */
    @State() lastVisibleIndex: number = 0;
    /** is scrolling flag */
    @State() isScrolling: boolean = false;
    /** loading articles state */
    @State() loadingArticles: boolean = true;

    private _i18n: any;
    private _rankingContainer: HTMLElement;
    private _articleRef: HTMLGlyphArticleElement[] = [];

    @Watch('loading')
    handleLoadChange() {
        this._articleRef = [];
        this._rankingContainer.scrollTop = 0;
    }

    async componentWillLoad() {
        const componentI18n = await getLocaleComponentStrings([ 'ranking' ], this.element, this.basePath, this.locale);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    async componentDidRender() {
        if (!this.loading && this._articleRef.length) {
            await this._setElementHeight();
            this.loadingArticles = false;
            this._articleRef.forEach(async article => await article.setArticleSize());
        }
    }

    /* eslint-disable @stencil/decorators-style, @stencil/async-methods  */
    /** This method will change ranking container scroll */
    @Method()
    async changeScroll(scroll: number = 0, listeneable: boolean = true) {
        this._rankingContainer.scrollTop = scroll;
        this.isScrolling = true;

        if (scroll === 0 && listeneable) {
            this.scrollChange.emit({ scrolled: false, scrollTop: 0 });
        }
    }

    private _handleScroll = (ev: any) => {
        if (this.isScrolling) {
            this.isScrolling = false;
        } else if (!this.loading) {
            const { scrollTop } = ev.target;
            const scrolled = scrollTop > 0;

            this.scrollChange.emit({ scrolled, scrollTop });

            if (this._articleRef.length) {
                this._articleRef.forEach(async article => await article.hideTooltip());
            }
        }
    };

    private _setElementHeight = async () => {
        const { height } = await this._articleRef[0].getImageSize();

        if (height) {
            this.elementHeight = height;
        }
    };

    private _setElementRef = (element: HTMLGlyphArticleElement) => {
        this._articleRef.push(element);
    };

    private _setRankingRef = (element: HTMLElement) => {
        this._rankingContainer = element;
    };

    private _getHeight = () => {
        const innerSize = `${this.elementHeight}px * ${this.rows}`;
        const extraGap = this.rows > 1 ? this.innerGap || this.rowGap : '0px';

        return `calc(calc(${innerSize}) + calc(${extraGap} * ${this.rows - 1}))`;
    };

    private _getSectionName = (section: number) => {
        switch (section) {
            case 1:
                return this._i18n['woman'];
            case 2:
                return this._i18n['man'];
            case 3:
                return this._i18n['kid'];
            default:
                return '';
        }
    };

    private _handleArticleVisibility = (index: number) => () => {
        this.lastVisibleIndex = index;
    };

    private _getColumns = () => {
        const isSingleSection = this.rankingData.length === 1;
        const columns = isSingleSection ? this.columns : this.innerColumns;

        return columns;
    };

    private _renderArticles = (children: Article[]) => {
        const columns = this._getColumns();
        const articlesPerView = columns * this.rows;
        const articlesThreshold = articlesPerView * 2;
        const min = this.lastVisibleIndex - articlesThreshold;
        const max = this.lastVisibleIndex + articlesThreshold;

        return children.slice(0, this.loadingArticles ? columns : -1).map((article, index) => (
            <div class="article__container" style={{ height: `${this.elementHeight}px` }}>
                <glyph-article
                    ref={this._setElementRef}
                    isVisible={index > min && index < max}
                    article={article}
                    isClickable
                    quantity-field="units"
                    imageType={this.imageType}
                    parseImageUrl={this.parseImageUrl}
                    useBackdropDecoration={this.useBackdropDecoration}
                    i18n={this._i18n}
                    onArticleVisible={this._handleArticleVisibility(index)}
                />
            </div>
        ));
    };

    private _renderRankingColumn = (children: Article[]) => {
        return <div class="ranking__column">{this._renderArticles(children)}</div>;
    };

    private _renderLoader = (children: Article[]) => {
        return children.map((child: Article) => (
            <div class="article__container">
                <glyph-article loading={this.loading} aspectRatio={this.aspectRatio} isVisible={true} article={child} />
            </div>
        ));
    };

    private _renderLoaders = () => {
        const columns = Array(this.columns).fill(0);
        const rows = Array(this.rows * this.innerColumns).fill({});

        return columns.map(() => <div class="ranking__column">{this._renderLoader(rows)}</div>);
    };

    render() {
        const sections = this.rankingData.filter(({ children }) => children.length);
        const isSingle = sections.length === 1;

        if (this.gap) {
            this.rowGap = this.gap;
            this.columnGap = this.gap;
        }

        return (
            <div
                class={cls('ranking__container', { 'ranking__container--single-section': isSingle })}
                style={{
                    '--columnGap': this.columnGap,
                    '--rowGap': this.rowGap,
                    '--innerGap': this.innerColumns === 1 ? this.rowGap : this.innerGap,
                    '--columns': `${this.columns}`,
                    '--innerColumns': `${this.innerColumns}`,
                    '--elementHeight': this._getHeight(),
                }}
            >
                <div class="ranking__header">
                    {isSingle && this.rankingHeader ? (
                        <h5>{this.rankingHeader}</h5>
                    ) : (
                        this.rankingData.map(({ cod_section }) => <h5>{this._getSectionName(cod_section)}</h5>)
                    )}
                </div>
                <div
                    onScroll={this._handleScroll}
                    ref={this._setRankingRef}
                    class={cls('ranking__columns', { 'ranking__columns--single': isSingle })}
                >
                    {this.loading && this._renderLoaders()}
                    {!this.loading &&
                        this.rankingData
                            .filter(({ children }) => children.length)
                            .map(({ children }) =>
                                isSingle ? this._renderArticles(children) : this._renderRankingColumn(children),
                            )}
                </div>
            </div>
        );
    }
}
