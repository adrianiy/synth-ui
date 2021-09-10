import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
const baseProps = {
  visible: false,
  modalTitle: 'Modal 1',
  closeButton: false,
  applyButton: undefined,
  cancelButton: undefined,
  interface: 'classic',
};
const clickEvent = (event) => {
  event.target.nextSibling.nextSibling.visible = true;
};
const closeEvent = (event) => {
  event.target.visible = false;
};
const applyEvent = () => {
  alert('apply');
};
const cancelEvent = (event) => {
  event.target.visible = false;
};
export default {
  title: 'Components/Modal/Examples',
  argTypes: {
    interface: { control: { type: 'radio' }, options: ['classic', 'modern'] },
  },
  parameters: {
    viewMode: 'docs',
  },
};
const Template = ({ visible, modalTitle, closeButton, applyButton, cancelButton, interface: interfaceValue }, ctx) => WithGlobalDecorator({
  template: html `
            <div>
                <glyph-button .interface=${interfaceValue} text="show modal" @click=${clickEvent}></glyph-button>
                <glyph-modal
                    .visible=${visible}
                    .modalTitle=${modalTitle}
                    .closeButton=${closeButton}
                    .applyButton=${applyButton}
                    .cancelButton=${cancelButton}
                    .interface=${interfaceValue}
                    @close=${closeEvent}
                    @apply=${applyEvent}
                    @cancel=${cancelEvent}
                >
                    <h3>Modal content</h3>
                    <p>Lorem ipsum text</p>
                </glyph-modal>
            </div>
        `,
  ctx,
});
export const Playground = Template.bind({});
Playground.args = Object.assign({}, baseProps);
export const WithCloseButton = Template.bind({});
WithCloseButton.args = Object.assign(Object.assign({}, baseProps), { closeButton: true });
export const WithButtonBar = Template.bind({});
WithButtonBar.args = Object.assign(Object.assign({}, baseProps), { applyButton: 'Apply', cancelButton: 'Cancel' });
