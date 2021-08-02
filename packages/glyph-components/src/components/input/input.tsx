import { Component, Prop, State, h, Event, EventEmitter, Watch } from '@stencil/core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-input',
    styleUrl: 'input.scss',
    shadow: true,
})
export class InputComponent {
    /** Placeholder */
    @Prop() placeholder: string;
    /** Input value */
    @Prop() value: any;
    /** Minimum available for inputs (dates or ranges) */
    @Prop() min: any;
    /** Maximum availabla for inputs (dates or ranges) */
    @Prop() max: any;
    /** Input type */
    @Prop() inputType: string = 'text';
    /** Input should auto focus */
    @Prop() autoFocus: boolean;
    /** Style input as an error */
    @Prop() error: boolean;
    /** Flag to disable input */
    @Prop() disabled: boolean;
    /** Renders input in a box */
    @Prop() box: boolean;
    /** Search flag, renders a search icon if `box` is false */
    @Prop() search: boolean;
    /** Text change event */
    @Event() inputChange: EventEmitter<string>;
    /** Enter key event */
    @Event() enterKey: EventEmitter<any>;

    /** Input reference */
    @State() ref: HTMLInputElement;

    /** Password visibility */
    @State() passVisible: boolean = false;

    /** Range value */
    @State() rangeValue: number = 0;

    /** In transition */
    @State() inTransition: boolean = false;

    private _knobSize = 9;

    @Watch('value')
    onValueChange() {
        this.inTransition = true;
        this.rangeValue = this.value;
        setTimeout(() => (this.inTransition = false), 700);
    }

    componentWillRender() {
        if (this.ref && this.autoFocus) {
            this.ref.focus();
        }
    }

    private _getThumbPosition = () => {
        if (this.ref) {
            const min = this._knobSize;
            const max = this.ref?.getBoundingClientRect().width - this._knobSize * 2;
            const value = (max - min) * ((this.rangeValue - 0) / (100 - 0)) + min;

            return `${value}px`;
        } else {
            return `${this.rangeValue}%`;
        }
    };

    private _togglePassVisibility = () => {
        this.passVisible = !this.passVisible;
    };

    private _checkInputType = () => {
        const isPassword = this.inputType === 'password';
        if (isPassword) {
            return this.passVisible ? 'text' : 'password';
        }

        return this.inputType;
    };

    private _handleInputChange = ({ target: { value } }: any) => {
        if (this.inputType === 'range') {
            this.rangeValue = value;
        } else {
            this.inputChange.emit(value);
        }
    };

    private _handleInputOnChange = ({ target: { value } }: any) => {
        if (this.inputType === 'range') {
            this.inputChange.emit(value);
        }
    };

    private _handleKeyUp = (event: any) => {
        const isEnter = event.key === 'Enter';

        if (isEnter) {
            this.enterKey.emit();
        }
    };

    private _increaseValue = () => {
        if ((this.value || 0) < +(this.max || Infinity)) {
            this.value = (this.value || 0) + 1;
            this.inputChange.emit(this.value);
        }
    };

    private _decreaseValue = () => {
        if ((this.value || 0) > +(this.min || -Infinity)) {
            this.value = (this.value || 0) - 1;
            this.inputChange.emit(this.value);
        }
    };

    private _renderNumberControls = () => {
        return (
            <Flex class="number-control__container">
                <Icon
                    icon="add"
                    class={cls({ disabled: this.value === +(this.max || Infinity) })}
                    onClick={this._increaseValue}
                />
                <Icon
                    icon="remove"
                    class={cls({ disabled: this.value === +(this.min || -Infinity) })}
                    onClick={this._decreaseValue}
                />
            </Flex>
        );
    };

    private _renderRangeThumb = () => {
        return (
            <div
                class={cls('input--range__thumb', {
                    transitioning: this.inTransition,
                })}
                style={{ left: this._getThumbPosition() }}
            />
        );
    };

    render() {
        return (
            <Flex
                row
                spaced
                middle
                style={{ '--knob-size': `${this._knobSize}px` }}
                class={cls('input__container', {
                    search: this.search,
                    box: this.box,
                    error: this.error,
                    disabled: this.disabled,
                })}
            >
                <Flex row middle class="input__wrapper">
                    {this.search && <Icon icon="search" class="search" />}
                    {this.inputType === 'range' && this._renderRangeThumb()}
                    <input
                        ref={ref => (this.ref = ref)}
                        type={this._checkInputType()}
                        placeholder={this.placeholder}
                        value={this.value}
                        onKeyUp={this._handleKeyUp}
                        onInput={this._handleInputChange}
                        onChange={this._handleInputOnChange}
                        disabled={this.disabled}
                        min={this.min}
                        max={this.max}
                    />
                    {this.inputType === 'number' && this._renderNumberControls()}
                </Flex>
                {this.inputType === 'password' && (
                    <Icon
                        icon={`visibility${this.passVisible ? '_off' : ''}`}
                        class="eye"
                        onClick={this._togglePassVisibility}
                    />
                )}
            </Flex>
        );
    }
}
