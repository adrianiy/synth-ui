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
    /** Input default value */
    @Prop() defaultValue: any;
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
    /** Renders input in a box */
    @Prop() box: boolean;
    /** Search flag, renders a search icon if `box` is false */
    @Prop() search: boolean;
    /** Text change event */
    @Event() textChange: EventEmitter<string>;
    /** Enter key event */
    @Event() enterKey: EventEmitter<any>;

    /** Input value */
    @State() inputValue: string;

    /** Input reference */
    @State() ref: HTMLInputElement;

    /** Password visibility */
    @State() passVisible: boolean = false;

    componentWillLoad() {
        this.inputValue = this.defaultValue;
    }

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

    private _handleInputChange = (event: any) => {
        this.inputValue = event.target.value;
        this.textChange.emit(this.inputValue);
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
                className={cls('input__container', { search: this.search, box: this.box, error: this.error })}
            >
                <Flex row middle className="input__wrapper">
                    {this.search && <Icon icon="search" className="search" />}
                    <input
                        ref={ref => (this.ref = ref)}
                        type={this._checkInputType()}
                        placeholder={this.placeholder}
                        value={this.inputValue}
                        onKeyUp={this._handleKeyUp}
                        onInput={this._handleInputChange}
                        min={this.min}
                        max={this.max}
                    />
                </Flex>
                {this.inputType === 'password' && (
                    <Icon
                        icon={`visibility${this.passVisible ? '_off' : ''}`}
                        className="eye"
                        onClick={this._togglePassVisibility}
                    />
                )}
            </Flex>
        );
    }
}
