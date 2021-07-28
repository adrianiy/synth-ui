import { Component, Prop, h } from '@stencil/core';
import { UIInterface } from 'glyph-core';
import { Icon } from '../../utils/icons';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-button',
    styleUrl: 'button.scss',
    shadow: true,
})
export class ButtonComponent {
    /** Button text */
    @Prop() text: string;
    /** Material icons id */
    @Prop() icon: string;
    /** Cancel type button. Renders in red */
    @Prop() cancel: boolean;
    /** Action button. Displayed with text only */
    @Prop() action: boolean;
    /** Tiny action button displays a smaller and thinier text */
    @Prop() tiny: boolean;
    /** Renders icon first */
    @Prop() iconFirst: boolean;
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;

    render() {
        return (
            <button
                class={cls(
                    'button__wrapper',
                    {
                        text: this.text,
                        icon: this.icon,
                        cancel: this.cancel,
                        action: this.action,
                        tiny: this.tiny,
                    },
                    this.interface,
                )}
            >
                <slot />
                {this.icon && this.iconFirst && <Icon class="button__icon--left" icon={this.icon} />}
                {this.text && this.text}
                {this.icon && !this.iconFirst && <Icon class="button__icon--right" icon={this.icon} />}
            </button>
        );
    }
}
