import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'synth-toggler',
    styleUrl: 'toggler.scss',
    shadow: true,
})
export class TogglerComponent {
    /** Toggler state */
    @Prop() active: boolean = false;
    /** Click callback */
    @Prop() callback: () => any;

    render() {
        return (
            <div class={`toggler__wrapper ${this.active && 'active'}`} onClick={this.callback}>
                <div class="toggler" />
            </div>
        );
    }
}
