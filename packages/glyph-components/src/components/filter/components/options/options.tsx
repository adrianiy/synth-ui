import { Component, Element, Prop, State, h } from '@stencil/core';
import { UIInterface, FilterOptionHeader } from 'glyph-core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Icon } from '../../../../utils/icons';
import { Flex } from '../../../../utils/layout';
import { cls, getLocaleComponentStrings } from '../../../../utils/utils';

@Component({
    tag: 'glyph-filter-options',
    styleUrl: 'options.scss',
    shadow: true,
})
export class FilterOptionsComponent {
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
        const componentI18n = await getLocaleComponentStrings([ 'filter' ], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _inSearch(option: FilterOptionHeader) {
        if (this.searchValue) {
            if (option.header) {
                return option.children.some(child => this._inSearch(child));
            }
            return option.description.toLowerCase().includes(this.searchValue.toLowerCase());
        }
        return true;
    }

    private _checkHide(option: FilterOptionHeader) {
        const { parents } = option;
        const hideKeys = Object.keys(parents || {})
            .map(key => `${key}Hide`)
            .concat('hide');

        return !hideKeys.some(key => option[key]);
    }

    private _handleInputChange = (event: any) => {
        this.searchValue = event.detail;
    };

    private _handleKeyUp = () => {
        const visibleOptions = this.options.filter(option => option.display && this._inSearch(option));

        if (visibleOptions.length === 1) {
            this._optionClick(visibleOptions[0])();
        }
    };

    private _renderSearch = () => {
        return (
            <glyph-input
                autoFocus
                box
                placeholder={this.searchPlaceholder}
                onEnterKey={this._handleKeyUp}
                onInputChange={this._handleInputChange}
            />
        );
    };

    private _renderMultiSelect = () => {
        return (
            <Flex row spaced middle class="operation">
                {this.interface === UIInterface.classic ? (
                    <span>{this._i18n['multiselect']}</span>
                ) : (
                    <Icon icon="done_all" />
                )}
                <glyph-toggler active={this.multiSelect} onClick={this._multiSelectClick} interface={this.interface} />
            </Flex>
        );
    };

    private _renderOptionDescription = (description: string) => {
        if (this.searchValue) {
            description = description
                .toLowerCase()
                .split(this.searchValue.toLowerCase())
                .join(`<b>${this.searchValue}</b>`);
        }

        return <span innerHTML={description} />;
    };

    private _renderOptionHeader = (option: FilterOptionHeader, filterQuantity: number) => {
        const childInSearch = option.children.some(child => this._inSearch(child));
        const anyActive = option.children.some(child => child.active);
        const expanded = option.expanded || (this.searchValue && childInSearch) || anyActive || filterQuantity === 1;

        return (
            childInSearch && (
                <Flex class="children__container">
                    <Flex row class={cls('children--header', { expanded })}>
                        <span>{expanded ? '- ' : '+ '}</span>
                        <span>{this._renderOptionDescription(option.description)}</span>
                    </Flex>
                    {expanded && this._renderOptionsList(option.children)}
                </Flex>
            )
        );
    };

    private _renderOptionsList = (options: FilterOptionHeader[]) => {
        const renderableOptions = options
            .filter(option => option.display && !option.hideFilter && this._inSearch(option) && this._checkHide(option))
            .sort((a, b) => a.position - b.position);
        return (
            <ul>
                {renderableOptions.map(option => (
                    <li>
                        <Flex
                            row
                            spaced
                            onClick={this._optionClick(option)}
                            class={cls('option', { active: option.active })}
                        >
                            {option.header
                                ? this._renderOptionHeader(option, renderableOptions.length)
                                : this._renderOptionDescription(option.description)}
                            {option.active && <Icon icon="checkmark" />}
                        </Flex>
                    </li>
                ))}
            </ul>
        );
    };

    render() {
        return (
            <Flex class={cls('filter-options__container', this.interface)}>
                {this.interface === UIInterface.modern ? (
                    <Flex row spaced>
                        <h3>{this.description}</h3>
                        {this.haveMultiSelect && this._renderMultiSelect()}
                    </Flex>
                ) : (
                    <h5>{this.description}</h5>
                )}
                {this.searchPlaceholder && this._renderSearch()}
                {this.haveMultiSelect && this.interface === UIInterface.classic && this._renderMultiSelect()}
                <glyph-scroll tiny initCallback={this._scrollbarInit} containerClass="scroll__container">
                    {this._renderOptionsList(this.options)}
                </glyph-scroll>
            </Flex>
        );
    }
}
