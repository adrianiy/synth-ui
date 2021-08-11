import { UIInterface } from 'glyph-core-poc';
import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const baseProps = {
    text: 'button1',
    icon: '',
    action: false,
    tiny: false,
    cancel: false,
    iconFirst: false,
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

const Template = ({ text, icon, iconFirst, cancel, action, tiny, interface: interfaceValue }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-button
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

export const Action = Template.bind({});
Action.args = {
    ...baseProps,
    action: true,
};

export const Tiny = Template.bind({});
Action.args = {
    ...baseProps,
    tiny: true,
    action: true,
};
