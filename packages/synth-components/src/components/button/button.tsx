import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'synth-button',
    styleUrl: 'button.scss',
    shadow: true,
})
export class ButtonComponent {
    /** Button text */
    @Prop() text: string;
    /** Material icons id */
    @Prop() icon: string;

    render() {
        return (
            <div class={`button__wrapper ${this.text && 'text'} ${this.icon && 'icon'}`}>
                {this.text && this.text}
                {this.icon && <em class="material-icons">{this.icon}</em>}
            </div>
        );
    }
}
