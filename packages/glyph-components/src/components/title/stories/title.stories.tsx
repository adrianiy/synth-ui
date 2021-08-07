import { UIInterface } from 'glyph-core';
import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const baseProps = {
    text: 'Test',
    interface: UIInterface.classic,
};

export default {
    title: 'Components/Title/Examples',
    argTypes: {
        interface: { control: { type: 'radio' }, options: [ 'classic', 'modern', 'redesign' ] },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ text, interface: interfaceValue }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-title .interface=${interfaceValue} .text=${text} />`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};
