import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
const calendarEvents = {
  2021: [
    {
      date: '2021-01-01',
      events: [
        { localizedStartTime: '00:00', title: 'Demo1', description: 'Demo calendar event description' },
        { localizedStartTime: '00:00', title: 'Demo2', description: 'Demo calendar event description' },
      ],
    },
    {
      date: '2021-02-01',
      events: [
        { localizedStartTime: '00:00', title: 'Demo3', description: 'Demo calendar event description' },
        { localizedStartTime: '00:00', title: 'Demo4', description: 'Demo calendar event description' },
      ],
    },
  ],
  2020: [
    {
      date: '2020-01-01',
      events: [
        { localizedStartTime: '00:00', title: 'Demo1', description: 'Demo calendar event description' },
        { localizedStartTime: '00:00', title: 'Demo2', description: 'Demo calendar event description' },
      ],
    },
    {
      date: '2020-02-01',
      events: [
        { localizedStartTime: '00:00', title: 'Demo3', description: 'Demo calendar event description' },
        { localizedStartTime: '00:00', title: 'Demo4', description: 'Demo calendar event description' },
      ],
    },
  ],
};
const baseProps = {
  calendarEvents,
  interface: 'classic',
};
export default {
  title: 'Components/Timeline/Examples',
  argTypes: {
    interface: { control: { type: 'radio' }, options: ['classic', 'modern'] },
  },
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ calendarEvents, interface: interfaceValue }, ctx) => WithGlobalDecorator({
  template: html ` <glyph-timeline .calendarEvents=${calendarEvents} .interface=${interfaceValue} />`,
  ctx,
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
