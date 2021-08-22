import { Component, Prop, h } from '@stencil/core';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';

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
    @Prop() interface: string;

    componentWillLoad() {
        this.interface = this.interface || state.interface;
    }

    private _handleToggle = () => {
        this.active = !this.active;
    };

    render() {
        return (
            <Flex
                row
                middle
                class={cls('toggler__wrapper', { active: this.active }, this.interface)}
                onClick={this._handleToggle}
            >
                <div class="toggler" />
            </Flex>
        );
    }
}
