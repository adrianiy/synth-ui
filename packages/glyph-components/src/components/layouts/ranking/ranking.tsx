import { h, Component, Element, Prop, State } from '@stencil/core';
import { RankingData, RankingViewOptions } from 'glyph-core';
import { Flex } from '../../../utils/layout';
import { getLocaleComponentStrings } from '../../../utils/utils';

@Component({
    tag: 'glyph-ranking-layout',
    styleUrl: 'ranking.scss',
    shadow: true,
})
export class GlyphRankingLayout {
    /** Ranking data */
    @Prop() rankingData: RankingData[];
    /** Ranking comparable data */
    @Prop() compRankingData: RankingData[];
    /** Distance between columns */
    @Prop() columnGap: string = '15%';
    /** Distance between rows */
    @Prop() rowGap: string = 'var(--gui-padding--xxl)';
    /** Decorate with backdrop filter, solves some performance issues (in storybook) */
    @Prop() useBackdropDecoration: boolean = true;
    /** Extra i18n translates */
    @Prop() i18n: { [key: string]: string };
    /** Element reference */
    @Element() element: HTMLGlyphRankingLayoutElement;
    /** Active view layout */
    @State() activeView: RankingViewOptions;
    /** Active slider value */
    @State() activeViewValue: number = 0;
    /** Image type */
    @State() imageType = 'model';
    /** Comparable ranking flag */
    @State() comparable: boolean = false;
    /** Scrolled state flag */
    @State() scrolled: boolean = false;

    private _i18n: any;
    private _singleSectionOptions: RankingViewOptions[] = [
        { columns: 3, innerColumns: 1, rows: 1, gap: undefined },
        { columns: 6, innerColumns: 1, rows: 3, gap: 'var(--gui-padding--xs)' },
        { columns: 8, innerColumns: 1, rows: 3, gap: 'var(--gui-padding--xs)' },
    ];
    private _multiSectionOptions: RankingViewOptions[] = [
        { columns: 3, innerColumns: 1, rows: 1, gap: undefined },
        { columns: 3, innerColumns: 2, rows: 2, gap: undefined, innerGap: 'var(--gui-padding--xs)' },
    ];
    private _rankingRef: HTMLGlyphRankingElement;
    private _compRankingRef: HTMLGlyphRankingElement;

    async componentWillLoad() {
        await this._initializeVariables();
    }

    componentDidLoad() {
        const isSingleSection = this._isSingleRanking();
        this.activeView = isSingleSection ? this._singleSectionOptions[0] : this._multiSectionOptions[0];
    }

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings([ 'ranking-layout' ], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _setRankingRef = (element: HTMLGlyphRankingElement) => {
        this._rankingRef = element;
    };

    private _setCompRankingRef = (element: HTMLGlyphRankingElement) => {
        this._compRankingRef = element;
    };

    private _isSingleRanking = () => {
        return this.rankingData.length === 1;
    };

    private _handleScrollChange = (event: CustomEvent) => {
        const { scrolled, scrollTop } = event.detail;

        this.scrolled = scrolled;

        if (this.comparable) {
            this._compRankingRef.changeScroll(scrollTop, false);
        }
    };

    private _handleCompScrollChange = (event: CustomEvent) => {
        const { scrolled, scrollTop } = event.detail;

        this.scrolled = scrolled;

        this._rankingRef.changeScroll(scrollTop, false);
    };

    private _handleSliderChange = (event: CustomEvent) => {
        const { option, value } = event.detail;
        this.activeView = option;
        this.activeViewValue = value;
    };

    private _handleImageTypeChange = (imageType: string) => () => {
        this.imageType = imageType;
    };

    private _handleCompChange = (event: any) => {
        this.comparable = event.target.checked;
    };

    private _backToTop = () => {
        this._rankingRef.changeScroll(0);
    };

    private _renderHeaderOptions() {
        const isSingleSection = this._isSingleRanking();
        const sliderOptions = isSingleSection ? this._singleSectionOptions : this._multiSectionOptions;
        const hasComparable = isSingleSection && this.activeView.columns > 3;

        return (
            <Flex row middle className="ranking__header__options">
                {hasComparable && (
                    <Flex row middle className="ranking__header__options__comparable">
                        <span>{this._i18n['ranking-layout.comparable']}</span>
                        <input type="checkbox" checked={this.comparable} onInput={this._handleCompChange} />
                    </Flex>
                )}
                <Flex row middle className="ranking__header__options__slider">
                    <span>{this._i18n['ranking-layout.view']}</span>
                    <glyph-slider
                        options={sliderOptions}
                        currentValue={this.activeViewValue}
                        onOptionChange={this._handleSliderChange}
                    />
                </Flex>
                <Flex row middle className="ranking__header__options__image-type">
                    <span onClick={this._handleImageTypeChange('model')} class={{ active: this.imageType === 'model' }}>
                        {this._i18n['ranking-layout.model']}
                    </span>
                    <span onClick={this._handleImageTypeChange('plain')} class={{ active: this.imageType === 'plain' }}>
                        {this._i18n['ranking-layout.plain']}
                    </span>
                </Flex>
                {this.scrolled && (
                    <Flex row middle className="ranking__header__options__back">
                        <span onClick={this._backToTop}>{this._i18n['ranking-layout.backToTop']}</span>
                    </Flex>
                )}
            </Flex>
        );
    }

    private _renderComparable() {
        const { columns, innerColumns, rows, gap, innerGap } = this.activeView;

        return (
            <div class="ranking--comparable">
                <glyph-ranking
                    ref={this._setCompRankingRef}
                    rankingData={this.compRankingData}
                    rankingHeader={this._i18n['ranking-layout.comparableRanking']}
                    columns={columns}
                    innerColumns={innerColumns}
                    gap={gap}
                    columnGap={gap ? gap : this.columnGap}
                    innerGap={innerGap}
                    rows={this.comparable ? 1 : rows}
                    useBackdropDecoration={this.useBackdropDecoration}
                    i18n={this._i18n}
                    onScrollChange={this._handleCompScrollChange}
                />
            </div>
        );
    }

    render() {
        if (!this.activeView) {
            return null;
        }
        const { columns, innerColumns, rows, gap, innerGap } = this.activeView;

        return (
            <Flex>
                <Flex row spaced top className="ranking__header">
                    <glyph-title titleText="Ranking" />
                    {this._renderHeaderOptions()}
                </Flex>
                <glyph-ranking
                    ref={this._setRankingRef}
                    rankingData={this.rankingData}
                    columns={columns}
                    innerColumns={innerColumns}
                    gap={gap}
                    columnGap={gap ? gap : this.columnGap}
                    innerGap={innerGap}
                    rows={this.comparable ? 1 : rows}
                    i18n={this._i18n}
                    useBackdropDecoration={this.useBackdropDecoration}
                    onScrollChange={this._handleScrollChange}
                />
                {this.comparable && this._renderComparable()}
            </Flex>
        );
    }
}
