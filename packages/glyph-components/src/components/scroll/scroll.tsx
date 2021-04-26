import { Component, State, h, Prop } from '@stencil/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
    tag: 'glyph-scroll',
    styleUrl: 'scroll.scss',
    shadow: true
})
export class ScrollComponent {
    /** class name to be used in scroll container */
    @Prop() containerClass: string;
    @State() ps: any;

    componentDidLoad() {
        this.ps = new PerfectScrollbar('#scrollbar__container');
    }

    render() {
        return (
            <div id="scrollbar__container" class={this.containerClass}>
                <slot />
            </div>
        );
    }
}
