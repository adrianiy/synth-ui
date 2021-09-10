import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
const baseProps = {
  appTitle: 'TEST',
  appSubtitle: '',
  interface: 'classic',
};
export default {
  title: 'Components/Share menu/Examples',
  argTypes: {
    interface: { control: { type: 'radio' }, options: ['classic', 'modern'] },
  },
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ appTitle, appSubtitle, interface: interfaceValue }, ctx) => WithGlobalDecorator({
  template: html ` <glyph-share-menu
            .appTitle=${appTitle}
            .appSubtitle=${appSubtitle}
            .interface=${interfaceValue}
        />`,
  ctx,
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
export const WithSubtitle = Template.bind({});
WithSubtitle.args = Object.assign(Object.assign({}, baseProps), { appTitle: '', appSubtitle: 'DEMO' });
export const WithTitleAndSubtitle = Template.bind({});
WithTitleAndSubtitle.args = Object.assign(Object.assign({}, baseProps), { appSubtitle: 'DEMO' });
