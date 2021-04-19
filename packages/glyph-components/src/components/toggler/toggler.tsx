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
    @Prop({ mutable: true }) active: boolean = false;
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;

    private _handleToggle = () => {
        this.active = !this.active;
    };

    render() {
        return (
            <Flex
                row
                middle
                className={cls('toggler__wrapper', this.active && 'active', this.interface)}
                onClick={this._handleToggle}
            >
                <div class="toggler" />
            </Flex>
        );
    }
}
