import { Component, Prop, h } from '@stencil/core';
import { UIInterface, UITheme } from 'glyph-core-poc';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-style',
    styleUrl: 'style.scss',
    shadow: false,
})
export class StyleComponent {
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: string = UIInterface.classic;
    /** Theme type */
    @Prop() theme: string = UITheme.light;

    render() {
        return (
            <Flex class={cls('flex__container', this.interface, this.theme)}>
                <slot />
            </Flex>
        );
    }
}
