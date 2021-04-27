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

    /** Scrollbar element */
    @State() ps: PerfectScrollbar;

    componentWillRender() {
        this.ps?.update();
    }

    private _initScrollbar = (ps: PerfectScrollbar) => {
        if (!this.ps) {
            this.ps = ps;
        }
    };

    render() {
        return (
            <Scroll
                hideScrollBar={this.hideScrollBar}
                horizontal={this.horizontal}
                vertical={this.vertical}
                height={this.height}
                width={this.width}
                className={cls('scrollbar__wrapper', this.containerClass)}
                initCallback={this._initScrollbar}
            >
                <span>
                    <slot></slot>
                </span>
            </Scroll>
        );
    }
}
