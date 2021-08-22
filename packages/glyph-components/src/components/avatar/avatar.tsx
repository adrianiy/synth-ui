import { Component, Prop, h } from '@stencil/core';
import { UserData } from 'glyph-core-poc';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-avatar',
    styleUrl: 'avatar.scss',
    shadow: true,
})
export class AvatarComponent {
    /** User avatar image */
    @Prop() image: UserData['image'];
    /** User name, used as image fallback */
    @Prop() name: UserData['name'];
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: string;

    componentWillLoad() {
        this.interface = this.interface || state.interface;
    }

    render() {
        return (
            <Flex row middle center class={cls('avatar', this.interface)}>
                {this.image && <img src={this.image} alt={this.name} />}
                {!this.image && (
                    <h2>
                        {this.name
                            .split(' ')
                            .slice(0, 2)
                            .map((chunk: string) => chunk[0])}
                    </h2>
                )}
            </Flex>
        );
    }
}
