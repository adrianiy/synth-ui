import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'synth-sk-loader',
    styleUrl: 'sk-loader.scss',
    shadow: true,
})
export class SkeletonLoaderComponent {
    /** Number of loader lines that will be rendered */
    @Prop() repetitions: number = 1;
    /** Height of loader line */
    @Prop() height: number = 38;

    render() {
        return (
            <Host>
                {Array(this.repetitions)
                    .fill(0)
                    .map(() => (
                        <div class="skeleton-loader" style={{ height: `${this.height}px` }} />
                    ))}
            </Host>
        );
    }
}
