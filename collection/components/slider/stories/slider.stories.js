import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
const options = [{ value: 1 }, { value: 2 }, { value: 3 }];
const baseProps = {
  options,
};
let value = 0;
const onOptionChange = (event) => {
  event.target.nextElementSibling.innerHTML = `value: ${event.detail.value}`;
};
export default {
  title: 'Components/Slider/Examples',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ options }, ctx) => WithGlobalDecorator({
  template: html `<div>
            <glyph-slider .options=${options} @optionChange=${onOptionChange}></glyph-slider>
            <span style="display: block; margin-top: 24px">value: ${value} </span>
        </div>`,
  ctx,
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
