import { Component, Prop, h } from '@stencil/core';
import { Button, ButtonGroupStyle, Alignment } from 'glyph-core';
import { Format } from '../../utils/format';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-button-group',
    styleUrl: 'button-group.scss',
    shadow: true,
})
export class ButtonGroupComponent {
    /** Buttons configuration */
    @Prop({ mutable: true }) buttons: Button[];
    /** Button group size ['big', 'small'] */
    @Prop() size: ButtonGroupStyle = ButtonGroupStyle.big;
    /** Button alignment ['left', 'center', 'right'] */
    @Prop() alignment: Alignment = Alignment.center;

    private _handleClick = (button: Button, idx: number) => () => {
        this.buttons = this.buttons.map((btn, index) => ({ ...btn, active: index === idx }));
        button.action();
    };

    private _renderTitle = (button: Button) => {
        return (
            <h3>
                <Format config={button.title} decorate />
            </h3>
        );
    };

    private _renderSubtitle = (button: Button) => {
        return (
            <span class="caption caption--small">
                <Format config={button.subtitle} decorate />
            </span>
        );
    };

    render() {
        return (
            <Flex row className={cls('button-group__container', this.size)}>
                {this.buttons.map((button, idx) => (
                    <div
                        class={cls('button', { active: button.active }, this.alignment)}
                        onClick={this._handleClick(button, idx)}
                    >
                        {button.title && this._renderTitle(button)}
                        {button.subtitle && this._renderSubtitle(button)}
                    </div>
                ))}
            </Flex>
        );
    }
}
