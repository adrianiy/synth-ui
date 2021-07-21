import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const baseProps = {
    text: 'Test',
};

export default {
    title: 'Components/Title/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ text }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-title .text=${text} />`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};
