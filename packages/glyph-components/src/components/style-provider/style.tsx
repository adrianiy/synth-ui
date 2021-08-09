import { Component, Prop, h } from '@stencil/core';
import { UIInterface, UITheme } from 'glyph-core';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-style',
    styleUrl: 'style.scss',
    shadow: false,
})
export class StyleComponent {
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Theme type */
    @Prop() theme: UITheme = UITheme.light;

    render() {
        return (
            <Flex class={cls('flex__container', this.interface, this.theme)}>
                <slot />
            </Flex>
        );
    }
}
