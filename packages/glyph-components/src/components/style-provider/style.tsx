import { Component, Prop, h } from '@stencil/core';
import { UIInterface, UITheme } from 'glyph-core-poc';
import { Flex } from '../../utils/layout';
import { setBasePath, setInterface, setTheme } from '../../utils/store/context.store';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-style',
    styleUrl: 'style.scss',
    shadow: false,
})
export class StyleComponent {
    /** Base path */
    @Prop() basePath: string = '.';
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: string = UIInterface.classic;
    /** Theme type */
    @Prop() theme: string = UITheme.light;

    componentWillRender() {
        setBasePath(this.basePath);
        setTheme(this.theme);
        setInterface(this.interface);
    }

    render() {
        return (
            <Flex class={cls('flex__container', this.interface, this.theme)}>
                <slot />
            </Flex>
        );
    }
}
