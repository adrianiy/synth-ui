import { Component, Prop, h } from '@stencil/core';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-flex',
    styleUrl: 'flex.scss',
    shadow: false,
})
export class FlexComponent {
    /** Flex-direction = vertical */
    @Prop() column: boolean = true;
    /** Flex-direction = horizontal */
    @Prop() row: boolean;
    /** Horizonal align = left */
    @Prop() left: boolean;
    /** Horizontal align = center */
    @Prop() center: boolean;
    /** Horizontal align = right */
    @Prop() right: boolean;
    /** Vertical align = top */
    @Prop() top: boolean;
    /** Vertical align = middle */
    @Prop() middle: boolean;
    /** Verical align = bottom */
    @Prop() bottom: boolean;
    /** Apply spaced distribution */
    @Prop() spaced: boolean;
    /** Apply spaced around distribution */
    @Prop() around: boolean;
    /** Class attribute to apply in flex div */
    @Prop() flexClass: string;
    /** Style atttribute to apply in flex div */
    @Prop() flexStyle: any;
    /** Id attribute to apply in flex div */
    @Prop() flexId: string;
    /** Set an id to attribute data-testid */
    @Prop() testId: string;

    render() {
        return (
            <Flex
                column={this.column}
                row={this.row}
                left={this.left}
                center={this.center}
                right={this.right}
                top={this.top}
                middle={this.middle}
                bottom={this.bottom}
                spaced={this.spaced}
                around={this.around}
                class={cls('flex__container', this.flexClass)}
                style={this.flexStyle}
                id={this.flexId}
            >
                <slot />
            </Flex>
        );
    }
}
