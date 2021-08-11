import { Component, h, Prop } from '@stencil/core';
import { UIInterface } from 'glyph-core-poc';

@Component({
    tag: 'glyph-title',
    styleUrl: 'title.scss',
    shadow: true,
})
export class TitleComponent {
    /** title text */
    @Prop() text: string;
    /** interface input */
    @Prop() interface: UIInterface = UIInterface.classic;

    render() {
        return this.interface === UIInterface.redesign ? (
            <h1 class="big">
                <slot />
                {this.text}
            </h1>
        ) : (
            <h2>
                <slot />
                {this.text}
            </h2>
        );
    }
}
