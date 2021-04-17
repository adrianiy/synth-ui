import { Component, Prop, h } from '@stencil/core';
import { UIInterface } from 'glyph-core';
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
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;

    render() {
        return (
            <button class={cls('button__wrapper', this.text && 'text', this.icon && 'icon', this.interface)}>
                {this.text && this.text}
                {this.icon && <em class="material-icons">{this.icon}</em>}
            </button>
        );
    }
}
