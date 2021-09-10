import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
const options = [
  { name: 'option 1', active: false, value: 1 },
  { name: 'option 2', active: false, value: 2 },
  { name: 'option 3', active: false, value: 3 },
];
const longOptions = [
  { name: 'option 1', active: false, value: 1 },
  { name: 'option 2', active: false, value: 2 },
  { name: 'option 3', active: false, value: 3 },
  { name: 'option 4', active: false, value: 4 },
  { name: 'option 5', active: false, value: 5 },
  { name: 'option 6', active: false, value: 6 },
  { name: 'option 7', active: false, value: 7 },
  { name: 'option 8', active: false, value: 8 },
  { name: 'option 9', active: false, value: 9 },
  { name: 'option 10', active: false, value: 10 },
  { name: 'option 11', active: false, value: 11 },
  { name: 'option 12', active: false, value: 12 },
  { name: 'option 13', active: false, value: 13 },
  { name: 'option 14', active: false, value: 14 },
  { name: 'option 15', active: false, value: 15 },
];
const complexOptions = {
  group1: [
    { name: 'option 1', active: false, value: 1 },
    { name: 'option 2', active: false, value: 2 },
  ],
  group2: [
    { name: 'option 3', active: false, value: 3 },
    { name: 'option 4', active: false, value: 4 },
  ],
};
const baseProps = {
  label: 'selector',
  options,
  complexOptions: [],
  multiSelect: false,
  searchPlaceholder: '',
  interface: 'classic',
  maxHeight: 100,
  disabled: false,
};
export default {
  title: 'Components/Selector/Examples',
  argTypes: {
    interface: { control: { type: 'radio' }, options: ['classic', 'modern', 'redesign'] },
  },
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ interface: interfaceValue, disabled, label, options, complexOptions, searchPlaceholder, multiSelect, maxHeight }, ctx) => WithGlobalDecorator({
  template: html ` <glyph-selector
            .label=${label}
            .disabled=${disabled}
            .options=${options}
            .maxHeight=${maxHeight}
            .complexOptions=${complexOptions}
            .multiSelect=${multiSelect}
            .searchPlaceholder=${searchPlaceholder}
            .interface=${interfaceValue}
        />`,
  ctx,
  style: 'height: 200px',
});
const ComplexTemplate = ({ label, options, complexOptions, multiSelect }, ctx) => WithGlobalDecorator({
  template: html ` <glyph-selector
            .label=${label}
            .options=${options}
            .complexOptions=${complexOptions}
            .multiSelect=${multiSelect}
        />`,
  ctx,
  style: 'height: 300px; width: 300px;',
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
export const WithLongOptionList = Template.bind({});
WithLongOptionList.args = Object.assign(Object.assign({}, baseProps), { options: longOptions });
export const WithMultiSelect = Template.bind({});
WithMultiSelect.args = Object.assign(Object.assign({}, baseProps), { multiSelect: true });
export const WithSearchInput = Template.bind({});
WithSearchInput.args = Object.assign(Object.assign({}, baseProps), { multiSelect: true, searchPlaceholder: 'Search option...' });
export const WithComplexOptions = ComplexTemplate.bind({});
WithComplexOptions.args = Object.assign(Object.assign({}, baseProps), { options: [], multiSelect: true, complexOptions });
export const WithDisabledState = Template.bind({});
WithDisabledState.args = Object.assign(Object.assign({}, baseProps), { disabled: true });
