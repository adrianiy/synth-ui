import { UIInterface } from 'glyph-core';
import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const baseProps = {
    text: 'button1',
    icon: '',
    onlyText: false,
    cancel: false,
    interface: UIInterface.classic,
};

const clickEvent = () => {
    alert('button click!');
};

export default {
    title: 'Components/Button/Examples',
    argTypes: {
        interface: { control: { type: 'radio' }, options: [ 'classic', 'modern' ] },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ text, icon, cancel, onlyText, interface: interfaceValue }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-button
            .text=${text}
            .icon=${icon}
            .cancel=${cancel}
            .onlyText=${onlyText}
            .interface=${interfaceValue}
            @click=${clickEvent}
        />`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    ...baseProps,
    text: undefined,
    icon: 'close',
};

export const Cancel = Template.bind({});
Cancel.args = {
    ...baseProps,
    cancel: true,
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    ...baseProps,
    onlyText: true,
};
