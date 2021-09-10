import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
const baseProps = {
  repetitions: 1,
  height: 30,
};
export default {
  title: 'Components/Skeleton Loader/Examples',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ repetitions, height }, ctx) => WithGlobalDecorator({
  template: html ` <glyph-sk-loader .repetitions=${repetitions} .height=${height} />`,
  ctx,
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
export const MultipleLines = Template.bind({});
MultipleLines.args = Object.assign(Object.assign({}, baseProps), { repetitions: 3 });
export const WithCustomHeight = Template.bind({});
WithCustomHeight.args = Object.assign(Object.assign({}, baseProps), { repetitions: 3, height: 10 });
