import { Component, Listen, Prop, h } from '@stencil/core';
import { Flex } from '../../utils/layout';

@Component({
    tag: 'glyph-notifications',
    styleUrl: 'notifications.scss',
    shadow: true,
})
export class NotificationsComponent {
    /** Event triggered when user clicks outside component container */
    @Prop() outsideCallback: () => void;

    @Listen('click', { target: 'window' })
    clickOutside(event: any) {
        if (!event.path.some((el: HTMLElement) => el.closest?.('.notifications__container'))) {
            this.outsideCallback();
        }
    }

    render() {
        return (
            <Flex class="notifications__container">
                <slot />
            </Flex>
        );
    }
}
