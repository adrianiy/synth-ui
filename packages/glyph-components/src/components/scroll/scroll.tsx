import { Component, h, Prop, State } from '@stencil/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Scroll } from '../../utils/scroll';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-scroll',
    styleUrl: 'scroll.scss',
    shadow: false,
})
export class ScrollComponent {
    /** hide scrollbar */
    @Prop() hideScrollBar: boolean;
    /** tinyh scrollbar */
    @Prop() tiny: boolean;
    /** show horizontal bar */
    @Prop() horizontal: boolean;
    /** show vertical bar */
    @Prop() vertical: boolean = true;
    /** height property */
    @Prop() height: number;
    /** width property */
    @Prop() width: number;
    /** class name to be used in scroll container */
    @Prop() containerClass: string;
    /** scrolling speed */
    @Prop() scrollSpeed: number = 0.05;
    /** scrollbar initialization callback */
    @Prop() initCallback: (ps: any) => void;

    /** Scrollbar element */
    @State() ps: any;

    componentWillRender() {
        this.ps?.update();
    }

    private _initScrollbar = (ps: PerfectScrollbar) => {
        if (!this.ps) {
            this.ps = ps;
            if (this.initCallback) {
                this.initCallback(this.ps);
            }
        }
    };

    render() {
        return (
            <Scroll
                hideScrollBar={this.hideScrollBar}
                tiny={this.tiny}
                horizontal={this.horizontal}
                vertical={this.vertical}
                height={this.height}
                width={this.width}
                scrollSpeed={this.scrollSpeed}
                class={cls('scrollbar__wrapper', this.containerClass)}
                initCallback={this._initScrollbar}
            >
                <slot></slot>
            </Scroll>
        );
    }
}
