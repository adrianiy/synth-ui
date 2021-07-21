import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'glyph-progress-bar',
    styleUrl: 'progress-bar.scss',
    shadow: true,
})
export class ProgressBarComponent {
    /** title text */
    @Prop() titleText: string;

    /** right text */
    @Prop() rightText: string;

    /** bottom text */
    @Prop() bottomText: string;

    /** percentage */
    @Prop() percentage: number;

    render() {
        return <div class='wrapper'>
            <div class='row height-20'>
                <div class='double-column bold'>
                    {this.titleText}
                </div>
                <div class='column bold right'>
                    {this.rightText}
                </div>
            </div>
            <div class='row height-20'>
                <div class='triple-column'>
                    <div class="border">
                        <div class="black" style={{ height: '10px', width: `${this.percentage}%` }}></div>
                    </div>
                </div>
            </div>
            <div class='row height-20'>
                <div class='triple-column bottomtext'>
                    {this.bottomText}
                </div>
            </div>
        </div>;
    }
}
