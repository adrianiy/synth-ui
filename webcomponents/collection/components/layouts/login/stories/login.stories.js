import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../../stories/helpers/decorators';
const baseProps = {
  version: '0.0.1',
  interface: 'classic',
};
export default {
  title: 'Layout/Login/Examples',
  argTypes: {
    interface: { control: { type: 'radio' }, options: ['classic', 'modern'] },
  },
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ version, interface: interfaceValue }, ctx) => WithGlobalDecorator({
  template: html ` <glyph-login .version=${version} .interface=${interfaceValue} />`,
  ctx,
  style: 'height: 100%; width: 100%; overflow: hidden',
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
export const Classic = Template.bind({});
Classic.args = Object.assign({}, baseProps);
export const Modern = Template.bind({});
Modern.args = Object.assign(Object.assign({}, baseProps), { interface: 'modern' });
