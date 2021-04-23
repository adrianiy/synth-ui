import { Component, Prop, h, State, Event, EventEmitter, Listen } from '@stencil/core';
import { ComplexSelectorOptions, SelectorOption, UIInterface } from 'glyph-core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-selector',
    styleUrl: 'selector.scss',
    shadow: true,
})
export class SelectorComponent {
    /** Selector label */
    @Prop() label: string;
    /** Selector options */
    @Prop() options: SelectorOption[];
    /** Complex selector options */
    @Prop() complexOptions: ComplexSelectorOptions;
    /** Multiselect flag */
    @Prop() multiSelect: boolean = false;
    /** Search placeholder text. If defined a search input will render */
    @Prop() searchPlaceholder: string;
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** on change callback */
    @Event() optionSelect: EventEmitter<SelectorOption>;

    /** Selected option */
    @State() selectedOptions: SelectorOption[];
    /** Options selector drilldown flag */
    @State() optionsDrilldown: boolean;
    /** Search text */
    @State() searchValue: string;

    @Listen('click', { target: 'window' })
    clickOutside(event: any) {
        if (!event.path.some((el: HTMLElement) => el.closest?.('.selector__container'))) {
            this._toggleContainer();
        }
    }

    componentWillRender() {
        if (this.options) {
            this.selectedOptions = this.options?.filter(option => option.active);
        }
        if (this.complexOptions) {
            this.selectedOptions = Object.keys(this.complexOptions).reduce((prev, curr) => {
                return prev.concat(this.complexOptions[curr].filter(option => option.active));
            }, []);
        }
    }

    private _toggleContainer = () => {
        this.optionsDrilldown = !this.optionsDrilldown;

        if (!this.optionsDrilldown) {
            this.searchValue = undefined;
        }
    };

    private _selectOption = (option: SelectorOption) => () => {
        this.optionSelect.emit(option);
        if (!this.multiSelect) {
            this.optionsDrilldown = false;
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
                onTextChange={this._handleInputChange}
            />
        );
    };

    private _renderCheckbox = (option: SelectorOption) => {
        return (
            <Flex middle center className={cls('checkbox', option.active && 'active')}>
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
            <Flex row>
                {Object.keys(this.complexOptions).map(key => (
                    <Flex>
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
                        <Flex className="option" row middle left onClick={this._selectOption(option)}>
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
            <Flex className={cls('selector__container', this.interface)}>
                <Flex row spaced className="selector__input" onClick={this._toggleContainer}>
                    <label class={cls(this.selectedOptions?.length && 'active')}>{this.label}</label>
                    <span>{this.selectedOptions?.map(option => option.name).join(', ') || ''}</span>
                    <Icon
                        icon={this.interface === UIInterface.classic ? 'arrow_drop_down' : 'expand_more'}
                        className={cls(this.optionsDrilldown && 'active')}
                    />
                </Flex>
                <Flex className="selector__options__container">
                    {this.optionsDrilldown && this.searchPlaceholder && this._renderSearch()}
                    {this.optionsDrilldown && this.options && this._renderSimpleOptions()}
                    {this.optionsDrilldown && this.complexOptions && this._renderComplexOptions()}
                </Flex>
            </Flex>
        );
    }
}
