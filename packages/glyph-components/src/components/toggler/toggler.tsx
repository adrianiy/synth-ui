import { Component, Prop, h } from '@stencil/core';
import { UIInterface } from 'glyph-core';
import { Flex } from '../../utils/layout';

import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-toggler',
    styleUrl: 'toggler.scss',
    shadow: true,
})
export class TogglerComponent {
    /** Toggler state */
    @Prop() active: boolean = false;
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;

    render() {
        return (
            <Flex row middle className={cls('toggler__wrapper', this.active && 'active', this.interface)}>
                <div class="toggler" />
            </Flex>
        );
    }
}
