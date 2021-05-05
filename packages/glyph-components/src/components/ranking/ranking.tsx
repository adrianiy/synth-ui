import { Component, Prop, Element, h, State } from '@stencil/core';
import { RankingData, Article } from 'glyph-core';
import { cls, getLocaleComponentStrings } from '../../utils/utils';

@Component({
    tag: 'glyph-ranking',
    styleUrl: 'ranking.scss',
    shadow: true,
})
export class RankingComponent {
    /** Ranking data */
    @Prop() rankingData: RankingData[];
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
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Element reference */
    @Element() element: HTMLGlyphRankingElement;

    /** article height */
    @State() elementHeight: number;

    private _i18n: any;
    private _articleRef: HTMLElement;

    async componentWillLoad() {
        const componentI18n = await getLocaleComponentStrings([ 'ranking' ], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    componentDidLoad() {
        this.elementHeight = this._articleRef.getBoundingClientRect().height;
    }

    private _setElementHeight = (element: HTMLElement) => {
        this._articleRef = element;
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

    private _renderArticles = (children: Article[]) => {
        return children.map(article => (
            <div class="article" style={{ height: `${this.elementHeight}px` }}>
                <img
                    ref={this._setElementHeight}
                    src={this.parseImageUrl ? this.parseImageUrl(article[this.imageType]) : article[this.imageType]}
                />
            </div>
        ));
    };

    private _renderRankingColumn = (children: Article[]) => {
        return <div class="ranking__column">{this._renderArticles(children)}</div>;
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
                class={cls('ranking__container', sections.length === 1 && 'ranking__container--single-section')}
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
                    {this.rankingData.map(({ cod_section }) => (
                        <h5>{this._getSectionName(cod_section)}</h5>
                    ))}
                </div>
                <div class={cls('ranking__columns', isSingle && 'ranking__columns--single')}>
                    {this.rankingData
                        .filter(({ children }) => children.length)
                        .map(({ children }) =>
                            isSingle ? this._renderArticles(children) : this._renderRankingColumn(children),
                        )}
                </div>
            </div>
        );
    }
}
