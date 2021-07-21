import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const baseProps = {
    titleText: 'Test',
    rightText: 'right',
    bottomText: 'bottom',
    percentage: 33,
};

export default {
    title: 'Components/ProgressBar/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ titleText, rightText, bottomText, percentage }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-progress-bar .titleText=${titleText} .rightText=${rightText} .bottomText=${bottomText} .percentage=${percentage} />`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};
