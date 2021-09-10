import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../../stories/helpers/decorators';
import { filtersConfig } from './helpers/config';
const baseProps = {
  filtersConfig: filtersConfig,
  hideZaraSouth: true,
  interface: 'classic',
};
export default {
  title: 'Layout/Chipsbar/Examples',
  argTypes: {
    interface: { control: { type: 'radio' }, options: ['classic', 'modern', 'redesign'] },
  },
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ filtersConfig, hideZaraSouth, interface: interfaceValue }, ctx) => WithGlobalDecorator({
  template: html ` <glyph-chipsbar
            .filtersConfig=${filtersConfig}
            .hideZaraSouth=${hideZaraSouth}
            .interface=${interfaceValue}
        />`,
  ctx,
  style: 'height: 400px',
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
export const Classic = Template.bind({});
Classic.args = Object.assign({}, baseProps);
export const Modern = Template.bind({});
Modern.args = Object.assign(Object.assign({}, baseProps), { interface: 'modern' });
export const Redesign = Template.bind({});
Redesign.args = Object.assign(Object.assign({}, baseProps), { interface: 'redesign' });
