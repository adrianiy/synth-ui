import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
const baseProps = {
  placeholder: 'Basic input',
  inputType: 'text',
  box: false,
  error: false,
  search: false,
  defaultValue: '',
  min: '',
  max: '',
};
export default {
  title: 'Components/Input/Examples',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ placeholder, inputType, box, search, error, defaultValue, min, max }, ctx) => WithGlobalDecorator({
  template: html ` <glyph-input
            .placeholder=${placeholder}
            .inputType=${inputType}
            .error=${error}
            .box=${box}
            .search=${search}
            .defaultValue=${defaultValue}
            .min=${min}
            .max=${max}
        />`,
  ctx,
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
export const AsNumber = Template.bind({});
AsNumber.args = Object.assign(Object.assign({}, baseProps), { inputType: 'number', max: 10 });
export const AsRange = Template.bind({});
AsRange.args = Object.assign(Object.assign({}, baseProps), { inputType: 'range', min: 0, max: 100, placeholder: null });
export const AsBox = Template.bind({});
AsBox.args = Object.assign(Object.assign({}, baseProps), { box: true, placeholder: 'Box input' });
export const AsSearchBox = Template.bind({});
AsSearchBox.args = Object.assign(Object.assign({}, baseProps), { search: true, placeholder: 'Search input' });
export const AsPassword = Template.bind({});
AsPassword.args = Object.assign(Object.assign({}, baseProps), { inputType: 'password', placeholder: 'Password iput' });
export const AsError = Template.bind({});
AsError.args = Object.assign(Object.assign({}, baseProps), { error: true, placeholder: 'Error input' });
export const AsDate = Template.bind({});
AsDate.args = Object.assign(Object.assign({}, baseProps), { inputType: 'date', defaultValue: '2021-02-01', min: '2021-01-01', max: '2021-12-31' });
