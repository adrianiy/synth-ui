import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { Flex } from '../../utils/layout';

@Component({
    tag: 'glyph-slider',
    styleUrl: 'slider.scss',
    shadow: true,
})
export class SliderComponent {
    /** Slider options */
    @Prop() options: any[];
    /** Option change event */
    @Event() optionChange: EventEmitter<any>;

    @State() currentStep: number = 0;

    private _handleInputChange = (event: any) => {
        const value = +event.target.value;
        this.currentStep = value;

        setTimeout(() => {
            const step = 1 / (this.options.length - 1);
            const steps = this.options.map((_, idx) => idx * step * 100);
            const nearest = [ ...steps ].sort((a, b) => Math.abs(value - a) - Math.abs(value - b))[0];
            const index = steps.findIndex(a => a === nearest);

            this.optionChange.emit(this.options[index]);
            this.currentStep = nearest;
        });
    };

    render() {
        return (
            <Flex middle className="slider__container">
                <input
                    type="range"
                    class="slider"
                    value={this.currentStep}
                    min="0"
                    max="100"
                    onChange={this._handleInputChange}
                />
            </Flex>
        );
    }
}
