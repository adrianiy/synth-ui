import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const baseProps = {
    titleText: 'Test',
};

export default {
    title: 'Components/Title/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ titleText }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-title .titleText=${titleText} />`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};
