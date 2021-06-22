import { Component, Prop, State, h, Event, EventEmitter } from '@stencil/core';
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
    @Prop() min: string;
    /** Maximum availabla for inputs (dates or ranges) */
    @Prop() max: string;
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

    componentWillRender() {
        if (this.ref && this.autoFocus) {
            this.ref.focus();
        }
    }

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
        this.inputChange.emit(value);
    };

    private _handleKeyUp = (event: any) => {
        const isEnter = event.key === 'Enter';

        if (isEnter) {
            this.enterKey.emit();
        }
    };

    render() {
        return (
            <Flex
                row
                spaced
                middle
                class={cls('input__container', {
                    search: this.search,
                    box: this.box,
                    error: this.error,
                    disabled: this.disabled,
                })}
            >
                <Flex row middle class="input__wrapper">
                    {this.search && <Icon icon="search" class="search" />}
                    <input
                        ref={ref => (this.ref = ref)}
                        type={this._checkInputType()}
                        placeholder={this.placeholder}
                        value={this.value}
                        onKeyUp={this._handleKeyUp}
                        onInput={this._handleInputChange}
                        disabled={this.disabled}
                        min={this.min}
                        max={this.max}
                    />
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
