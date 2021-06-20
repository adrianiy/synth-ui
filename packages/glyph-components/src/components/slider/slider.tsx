import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { Flex } from '../../utils/layout';

@Component({
    tag: 'glyph-slider',
    styleUrl: 'slider.scss',
    shadow: true,
})
export class SliderComponent {
    /** Slider options */
    @Prop() options: any[];
    /** Current slider value between 0 and 100 */
    @Prop({ mutable: true }) currentValue: number = 0;
    /** Option change event */
    @Event() optionChange: EventEmitter<{ option: any; value: number }>;

    private _handleInputChange = (event: any) => {
        const value = +event.target.value;
        this.currentValue = value;

        setTimeout(() => {
            const step = 1 / (this.options.length - 1);
            const steps = this.options.map((_, idx) => idx * step * 100);
            const nearest = [ ...steps ].sort((a, b) => Math.abs(value - a) - Math.abs(value - b))[0];
            const index = steps.findIndex(a => a === nearest);

            this.currentValue = nearest;
            this.optionChange.emit({ option: this.options[index], value: this.currentValue });
        });
    };

    render() {
        return (
            <Flex middle class="slider__container">
                <input
                    type="range"
                    class="slider"
                    value={this.currentValue}
                    min="0"
                    max="100"
                    onChange={this._handleInputChange}
                />
            </Flex>
        );
    }
}
