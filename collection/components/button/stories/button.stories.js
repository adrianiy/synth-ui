import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
const baseProps = {
  text: 'button1',
  icon: '',
  action: false,
  tiny: false,
  cancel: false,
  iconFirst: false,
  interface: "classic" /* classic */,
};
const clickEvent = () => {
  alert('button click!');
};
export default {
  title: 'Components/Button/Examples',
  argTypes: {
    interface: { control: { type: 'radio' }, options: ['classic', 'modern'] },
  },
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ text, icon, iconFirst, cancel, action, tiny, interface: interfaceValue }, ctx) => WithGlobalDecorator({
  template: html ` <glyph-button
            .text=${text}
            .iconFirst=${iconFirst}
            .icon=${icon}
            .cancel=${cancel}
            .action=${action}
            .tiny=${tiny}
            .interface=${interfaceValue}
            @click=${clickEvent}
        />`,
  ctx,
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
export const WithIcon = Template.bind({});
WithIcon.args = Object.assign(Object.assign({}, baseProps), { text: undefined, icon: 'close' });
export const Cancel = Template.bind({});
Cancel.args = Object.assign(Object.assign({}, baseProps), { cancel: true });
export const Action = Template.bind({});
Action.args = Object.assign(Object.assign({}, baseProps), { action: true });
export const Tiny = Template.bind({});
Action.args = Object.assign(Object.assign({}, baseProps), { tiny: true, action: true });
