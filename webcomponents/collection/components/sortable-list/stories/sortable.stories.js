import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
const list = [
  { id: '1', name: 'test1' },
  { id: '2', name: 'test2' },
  { id: '3', name: 'test3' },
];
const listWithIcon = [
  { id: '1', name: 'test1' },
  { id: '2', name: 'test2', icon: 'always' },
  { id: '3', name: 'test3', icon: 'hover' },
];
const listWithFixed = [
  { id: '1', name: 'test1' },
  { id: '2', name: 'test2', notSortable: true },
  { id: '3', name: 'test3' },
];
const listWithAction = [
  { id: '1', name: 'test1', action: { icon: 'edit', action: () => alert('action') } },
  { id: '2', name: 'test2', action: { icon: 'edit', action: () => alert('action') } },
  { id: '3', name: 'test3', action: { icon: 'edit', action: () => alert('action') } },
];
const listWithChildren = [
  {
    id: '1',
    name: 'test1',
    children: [
      { id: '1', name: 'child1', style: { 'padding-left': '32px' } },
      { id: '2', name: 'child2', style: { 'padding-left': '32px' } },
      { id: '3', name: 'child3', style: { 'padding-left': '32px' } },
    ],
  },
  {
    id: '2',
    name: 'test1',
    children: [
      { id: '1', name: 'child1', style: { 'padding-left': '32px' } },
      { id: '2', name: 'child2', style: { 'padding-left': '32px' } },
      { id: '3', name: 'child3', style: { 'padding-left': '32px' } },
    ],
  },
  {
    id: '3',
    name: 'test1',
    children: [
      { id: '1', name: 'child1', style: { 'padding-left': '32px' } },
      { id: '2', name: 'child2', style: { 'padding-left': '32px' } },
      { id: '3', name: 'child3', style: { 'padding-left': '32px' } },
    ],
  },
];
const baseProps = {
  list,
};
export default {
  title: 'Components/Sortable list/Examples',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ list }, ctx) => WithGlobalDecorator({
  template: html ` <glyph-sortable .list=${list} />`,
  ctx,
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
export const WithIcon = Template.bind({});
WithIcon.args = Object.assign(Object.assign({}, baseProps), { list: listWithIcon });
export const WithFixedRows = Template.bind({});
WithFixedRows.args = Object.assign(Object.assign({}, baseProps), { list: listWithFixed });
export const WithAction = Template.bind({});
WithAction.args = Object.assign(Object.assign({}, baseProps), { list: listWithAction });
export const WithChildren = Template.bind({});
WithChildren.args = Object.assign(Object.assign({}, baseProps), { list: listWithChildren });
