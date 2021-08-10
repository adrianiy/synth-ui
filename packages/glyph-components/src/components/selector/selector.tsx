import { Component, Prop, h, State, Event, EventEmitter, Element } from '@stencil/core';
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
    /** Max height configuration */
    @Prop() maxHeight: number = 300;
    /** Selector disabled state */
    @Prop() disabled: boolean;
    /** Selector options */
    @Prop({ mutable: true }) options: SelectorOption[];
    /** Complex selector options */
    @Prop({ mutable: true }) complexOptions: ComplexSelectorOptions;
    /** Multiselect flag */
    @Prop() multiSelect: boolean = false;
    /** Search placeholder text. If defined a search input will render */
    @Prop() searchPlaceholder: string;
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** on change callback */
    @Event() optionSelect: EventEmitter<SelectorOption>;

    /** Element reference */
    @Element() element: HTMLGlyphSelectorElement;

    /** Selected option */
    @State() selectedOptions: SelectorOption[];
    /** Options selector drilldown flag */
    @State() optionsDrilldown: boolean;

    componentWillRender() {
        this._getSelectedOptions();
    }

    private _getSelectedOptions = () => {
        if (this.options?.length) {
            this.selectedOptions = this.options?.filter(option => option.active);
        }
        if (Object.keys(this.complexOptions || {})?.length) {
            this.selectedOptions = Object.keys(this.complexOptions).reduce((prev, curr) => {
                return prev.concat(this.complexOptions[curr].filter(option => option.active));
            }, []);
        }
    };

    private _toggleContainer = (value?: boolean) => () => {
        if (!this.disabled) {
            this.optionsDrilldown = value ?? !this.optionsDrilldown;
        }
    };

    private _selectOption = (option: SelectorOption) => {
        this._getSelectedOptions();
        this.optionSelect.emit(option);

        if (!this.multiSelect) {
            this.optionsDrilldown = false;
        }
    };

    render() {
        return (
            <Flex class={cls('selector__container', this.disabled && 'disabled', this.interface)}>
                <Flex row spaced class="selector__input" onClick={this._toggleContainer()}>
                    <label class={cls({ active: this.selectedOptions?.length })}>{this.label}</label>
                    <span>{this.selectedOptions?.map(option => option.name).join(', ') || ''}</span>
                    <Icon
                        icon={this.interface === UIInterface.classic ? 'arrow_drop_down' : 'expand_more'}
                        class={cls({ active: this.optionsDrilldown })}
                    />
                </Flex>
                {this.optionsDrilldown && (
                    <glyph-selector-options
                        interface={this.interface}
                        options={this.options}
                        complexOptions={this.complexOptions}
                        maxHeight={this.maxHeight}
                        multiSelect={this.multiSelect}
                        searchPlaceholder={this.searchPlaceholder}
                        optionClickEvent={this._selectOption}
                        closeEvent={this._toggleContainer(false)}
                    />
                )}
            </Flex>
        );
    }
}
