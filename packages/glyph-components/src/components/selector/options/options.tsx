import { Component, Prop, State, h, Listen, Element } from '@stencil/core';
import { ComplexSelectorOptions, SelectorOption, UIInterface } from 'glyph-core-poc';
import PerfectScrollbar from 'perfect-scrollbar';
import { Icon } from '../../../utils/icons';
import { Flex } from '../../../utils/layout';
import { cls } from '../../../utils/utils';

@Component({
    tag: 'glyph-selector-options',
    styleUrl: './options.scss',
    shadow: true,
})
export class SelectorOptionsComponent {
    /** Selector options */
    @Prop() options: SelectorOption[];
    /** Complex selector options */
    @Prop() complexOptions: ComplexSelectorOptions;
    /** Multiselect flag */
    @Prop() multiSelect: boolean = false;
    /** Max height configuration */
    @Prop() maxHeight: number = 300;
    /** Search placeholder text. If defined a search input will render */
    @Prop() searchPlaceholder: string;
    /** Option click event */
    @Prop() optionClickEvent: (option: SelectorOption) => void;
    /** Close event */
    @Prop() closeEvent: () => void;
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Scrollbar element */
    @State() ps: PerfectScrollbar;

    /** Element reference */
    @Element() element: HTMLGlyphSelectorOptionsElement;

    /** Search text */
    @State() searchValue: string;

    @Listen('click', { target: 'window' })
    clickOutside(event: any) {
        if (!event.composedPath().includes(this.element)) {
            this.closeEvent();
        }
    }

    private _scrollbarInit = (ps: PerfectScrollbar) => {
        if (!this.ps) {
            this.ps = ps;
        }
    };

    private _selectOption = (option: SelectorOption) => (event?: any) => {
        if (!option.disabled) {
            if (!this.multiSelect) {
                this.options.forEach(option => (option.active = false));
                Object.keys(this.complexOptions || {}).forEach(key => {
                    this.complexOptions[key].forEach(option => (option.active = false));
                });
            }
            option.active = !option.active;
            this.optionClickEvent(option);
            event?.stopPropagation();
            event?.preventDefault();
        }
    };

    private _handleInputChange = (event: any) => {
        this.searchValue = event.detail;
    };

    private _handleEnter = () => {
        let visibleOptions = [];
        if (this.complexOptions) {
            visibleOptions = Object.keys(this.complexOptions).reduce(
                (acc, key) => acc.concat(this.complexOptions[key].filter(this._inSearch)),
                [],
            );
        }
        if (this.options) {
            visibleOptions = this.options.filter(this._inSearch);
        }
        if (visibleOptions.length === 1) {
            this._selectOption(visibleOptions[0])();
        }
    };

    private _renderSearch = () => {
        return (
            <glyph-input
                autoFocus
                box
                placeholder={this.searchPlaceholder}
                onEnterKey={this._handleEnter}
                onInputChange={this._handleInputChange}
            />
        );
    };

    private _renderCheckbox = (option: SelectorOption) => {
        return (
            <Flex middle center class={cls('checkbox', { active: option.active })}>
                {option.active && <Icon icon="checkmark" />}
            </Flex>
        );
    };

    private _inSearch = (option: SelectorOption) => {
        if (this.searchValue) {
            return option.name.toLowerCase().includes(this.searchValue.toLowerCase());
        }

        return true;
    };

    private _renderComplexOptions = () => {
        return (
            <Flex row class="options__container">
                {Object.keys(this.complexOptions).map(key => (
                    <Flex class="options__container__column">
                        <label>{key}</label>
                        {this._renderOptions(this.complexOptions[key])}
                    </Flex>
                ))}
            </Flex>
        );
    };

    private _renderSimpleOptions = () => {
        return <Flex>{this._renderOptions(this.options)}</Flex>;
    };

    private _renderOptions = (options: SelectorOption[] = this.options) => {
        return (
            <Flex>
                {options
                    .filter(option => this._inSearch(option))
                    .map((option: SelectorOption) => (
                        <Flex
                            class={cls('option', { disabled: option.disabled })}
                            row
                            middle
                            left
                            onClick={this._selectOption(option)}
                        >
                            {this.multiSelect && this._renderCheckbox(option)}
                            {this._renderOptionName(option)}
                        </Flex>
                    ))}
            </Flex>
        );
    };

    private _renderOptionName = ({ name }: SelectorOption) => {
        if (this.searchValue) {
            name = name.split(this.searchValue).join(`<b>${this.searchValue}</b>`);
        }

        return <span innerHTML={name} />;
    };

    render() {
        return (
            <Flex
                class={cls('selector__options__container', this.interface, { search: this.searchPlaceholder })}
                style={{ '--max-height': `${this.maxHeight}px` }}
            >
                {this.searchPlaceholder && this._renderSearch()}
                <glyph-scroll
                    tiny
                    scrollSpeed={0.09}
                    initCallback={this._scrollbarInit}
                    containerClass="scroll__container"
                >
                    {this.options && this._renderSimpleOptions()}
                    {this.complexOptions && this._renderComplexOptions()}
                </glyph-scroll>
            </Flex>
        );
    }
}
