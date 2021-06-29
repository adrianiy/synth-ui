import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const baseProps = {
    repetitions: 1,
    height: 30,
};

export default {
    title: 'Components/Skeleton Loader/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ repetitions, height }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-sk-loader .repetitions=${repetitions} .height=${height} />`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};

export const MultipleLines = Template.bind({});
MultipleLines.args = {
    ...baseProps,
    repetitions: 3,
};

export const WithCustomHeight = Template.bind({});
WithCustomHeight.args = {
    ...baseProps,
    repetitions: 3,
    height: 10,
};
