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
    /** Renders input in a box */
    @Prop() box: boolean;
    /** Search flag, renders a search icon if `box` is false */
    @Prop() search: boolean;
    /** Placeholder */
    @Prop() placeholder: string;
    /** Input type */
    @Prop() inputType: string = 'text';
    /** Input should auto focus */
    @Prop() autoFocus: boolean;
    /** Text change event */
    @Event() textChange: EventEmitter<string>;
    /** Enter key event */
    @Event() enterKey: EventEmitter<any>;

    /** Filter search value */
    @State() searchValue: string;

    /** Filter input ref */
    @State() ref: HTMLInputElement;

    componentWillRender() {
        if (this.ref && this.autoFocus) {
            this.ref.focus();
        }
    }

    private _handleInputChange = (event: any) => {
        this.searchValue = event.target.value;
        this.textChange.emit(this.searchValue);
    };

    private _handleKeyUp = (event: any) => {
        const isEnter = event.key === 'Enter';

        if (isEnter) {
            this.enterKey.emit();
        }
    };

    render() {
        return (
            <Flex row middle className={cls('input__container', this.search && 'search', this.box && 'box')}>
                {this.search && <Icon icon="search" />}
                <input
                    ref={ref => (this.ref = ref)}
                    type="text"
                    placeholder={this.placeholder}
                    value={this.searchValue}
                    onKeyUp={this._handleKeyUp}
                    onInput={this._handleInputChange}
                />
            </Flex>
        );
    }
}
