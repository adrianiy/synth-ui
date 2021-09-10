import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
const baseProps = {
  mode: 'simple',
  text: '',
  bottomText: '',
};
export default {
  title: 'Components/No Data/Examples',
  argTypes: {
    mode: { control: { type: 'radio' }, options: ['simple', 'complex'] },
  },
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ mode, text, bottomText }, ctx) => WithGlobalDecorator({
  template: html ` <glyph-no-data .mode=${mode} .text=${text} .bottomText=${bottomText} />`,
  ctx,
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
export const ComplexError = Template.bind({});
ComplexError.args = {
  mode: 'complex',
  text: 'Advanced error',
  bottomText: 'This is an advanced error example',
};
