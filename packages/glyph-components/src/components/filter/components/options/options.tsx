import { Component, Element, Prop, State, h } from '@stencil/core';
import { UIInterface, FilterOptionHeader } from 'glyph-core-poc';
import PerfectScrollbar from 'perfect-scrollbar';
import { Icon } from '../../../../utils/icons';
import { Flex } from '../../../../utils/layout';
import { cls, getLocaleComponentStrings } from '../../../../utils/utils';
import { inSearch } from '../../utils/utils';

@Component({
    tag: 'glyph-filter-options',
    styleUrl: 'options.scss',
    shadow: true,
})
export class FilterOptionsComponent {
    /** Base path to get assets */
    @Prop() basePath: string = '';
    /** Filter description */
    @Prop() description: string;
    /** Filter options */
    @Prop() options: FilterOptionHeader[];
    /** Multiselect flag. True if filter allows multiselect toggler */
    @Prop() haveMultiSelect: boolean = true;
    /** This flag is true if multiselect is active */
    @Prop() multiSelect: boolean = false;
    /** Search placeholder */
    @Prop() searchPlaceholder: string;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** **optional** force locale change if html lang is not interpreted */
    @Prop() locale: string;
    /** Filter chip interface ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Option click event */
    @Prop() optionClickEvent: (option: FilterOptionHeader) => void;
    /** Multiselect toggler callback */
    @Prop() multiSelectEvent: () => void;
    /** Close callback */
    @Prop() closeEvent: () => void;
    /** Element reference */
    @Element() element: HTMLGlyphFilterOptionsElement;
    /** Filter search value */
    @State() searchValue: string;
    /** Scrollbar element */
    @State() ps: PerfectScrollbar;

    private _i18n: any;

    componentDidRender() {
        setTimeout(() => this.ps?.update(), 300);
    }

    async componentWillLoad() {
        await this._initializeVariables();
    }

    private _scrollbarInit = (ps: PerfectScrollbar) => {
        if (!this.ps) {
            this.ps = ps;
        }
    };

    private _optionClick = (option: FilterOptionHeader) => (event?: any) => {
        this.optionClickEvent(option);
        event?.stopPropagation();
        event?.preventDefault();
    };

    private _multiSelectClick = () => {
        this.multiSelectEvent();
    };

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings([ 'filter' ], this.element, this.basePath, this.locale);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _handleInputChange = (event: any) => {
        this.searchValue = event.detail;
    };

    private _handleKeyUp = () => {
        const visibleOptions = this.options.filter(
            option => option.display && inSearch(option, this.searchValue, this._i18n),
        );

        if (visibleOptions.length === 1) {
            if (visibleOptions[0].header) {
                const visibleChilds = visibleOptions[0].children.filter(
                    child => child.display && inSearch(child, this.searchValue, this._i18n),
                );

                if (visibleChilds.length === 1) {
                    this._optionClick(visibleChilds[0])();
                }
            } else {
                this._optionClick(visibleOptions[0])();
            }
        }
    };

    private _renderSearch = () => {
        return (
            <glyph-input
                autoFocus
                box
                placeholder={this._i18n[this.searchPlaceholder] || this.searchPlaceholder}
                onEnterKey={this._handleKeyUp}
                onInputChange={this._handleInputChange}
            />
        );
    };

    private _renderMultiSelect = () => {
        return (
            <Flex row spaced middle class="operation">
                {this.interface !== UIInterface.modern ? (
                    <span>{this._i18n['multiselect']}</span>
                ) : (
                    <Icon icon="done_all" />
                )}
                <glyph-toggler active={this.multiSelect} onClick={this._multiSelectClick} interface={this.interface} />
            </Flex>
        );
    };

    private _renderOptionsList = (options: FilterOptionHeader[]) => {
        return (
            <glyph-filter-options-list
                options={options}
                interface={this.interface}
                searchValue={this.searchValue}
                i18n={this._i18n}
                optionClick={this._optionClick}
            />
        );
    };

    render() {
        return (
            <Flex class={cls('filter-options__container', this.interface)}>
                {this.interface === UIInterface.modern ? (
                    <Flex row spaced>
                        <h3>{this._i18n[this.description] || this.description}</h3>
                        {this.haveMultiSelect && this._renderMultiSelect()}
                    </Flex>
                ) : (
                    <h5>{this._i18n[this.description] || this.description}</h5>
                )}
                {this.searchPlaceholder && this._renderSearch()}
                {this.haveMultiSelect && this.interface !== UIInterface.modern && this._renderMultiSelect()}
                <glyph-scroll
                    tiny
                    scrollSpeed={0.09}
                    initCallback={this._scrollbarInit}
                    containerClass="scroll__container"
                >
                    {this._renderOptionsList(this.options)}
                </glyph-scroll>
            </Flex>
        );
    }
}
