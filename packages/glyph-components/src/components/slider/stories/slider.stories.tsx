import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const options = [ { value: 1 }, { value: 2 }, { value: 3 } ];

const baseProps = {
    options,
};

const onOptionChange = (event: any) => alert(event.detail.value);

export default {
    title: 'Components/Slider/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ options }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-slider .options=${options} @optionChange=${onOptionChange} />`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};
