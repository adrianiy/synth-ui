import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'glyph-title',
    styleUrl: 'title.scss',
    shadow: true,
})
export class TitleComponent {
    /** title text */
    @Prop() titleText: string;

    render() {
        return (
            <h2>
                <slot />
                {this.titleText}
            </h2>
        );
    }
}
