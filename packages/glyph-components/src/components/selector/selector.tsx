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
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** on change callback */
    @Event() optionSelect: EventEmitter<SelectorOption>;

    /** Selected option */
    @State() selectedOptions: SelectorOption[];
    /** Options selector drilldown flag */
    @State() optionsDrilldown: boolean;

    @Listen('click', { target: 'window' })
    clickOutside(event: any) {
        if (!event.path.some((el: HTMLElement) => el.closest?.('.selector__container'))) {
            this.optionsDrilldown = false;
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

    private _selectOption = (option: SelectorOption) => () => {
        this.optionSelect.emit(option);
        if (!this.multiSelect) {
            this.optionsDrilldown = false;
        }
    };

    private _renderCheckbox = (option: SelectorOption) => {
        return (
            <Flex middle center className={cls('checkbox', option.active && 'active')}>
                {option.active && <Icon icon="checkmark" />}
            </Flex>
        );
    };

    private _renderComplexOptions = () => {
        return (
            <Flex row className="selector__options__container">
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
        return <Flex className="selector__options__container">{this._renderOptions(this.options)}</Flex>;
    };

    private _renderOptions = (options: SelectorOption[] = this.options) => {
        return (
            <Flex>
                {options.map((option: SelectorOption) => (
                    <Flex className="option" row middle left onClick={this._selectOption(option)}>
                        {this.multiSelect && this._renderCheckbox(option)}
                        <span>{this.i18n[option.name] || option.name}</span>
                    </Flex>
                ))}
            </Flex>
        );
    };

    render() {
        return (
            <Flex className={cls('selector__container', this.interface)}>
                <Flex
                    row
                    spaced
                    className="selector__input"
                    onClick={() => (this.optionsDrilldown = !this.optionsDrilldown)}
                >
                    <label class={cls(this.selectedOptions?.length && 'active')}>{this.label}</label>
                    <span>{this.selectedOptions?.map(option => option.name).join(', ') || ''}</span>
                    <Icon
                        icon={this.interface === UIInterface.classic ? 'arrow_drop_down' : 'expand_more'}
                        className={cls(this.optionsDrilldown && 'active')}
                    />
                </Flex>
                {this.optionsDrilldown && this.options && this._renderSimpleOptions()}
                {this.optionsDrilldown && this.complexOptions && this._renderComplexOptions()}
            </Flex>
        );
    }
}
