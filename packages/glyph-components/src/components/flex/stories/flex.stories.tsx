import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const baseProps = {
    row: false,
    column: true,
    spaced: false,
    around: false,
    left: false,
    center: false,
    right: false,
    top: false,
    middle: false,
    bottom: false,
    width: '300px',
    height: '400px',
};

export default {
    title: 'Components/Flex/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ row, column, spaced, around, left, center, right, top, middle, bottom, width, height }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-flex
            .row=${row}
            .column=${column}
            .spaced=${spaced}
            .around=${around}
            .left=${left}
            .center=${center}
            .right=${right}
            .top=${top}
            .middle=${middle}
            .bottom=${bottom}
            .width=${width}
            .height=${height}
        >
            <div style="padding: 8px; background: grey;">Block 1</div>
            <div style="padding: 8px; background: black; color: white;">Block 2</div>
        </glyph-flex>`,
        ctx,
        style: 'height: 100px',
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};

export const AsColumn = Template.bind({});
AsColumn.args = {
    ...baseProps,
    column: true,
};

export const AsSpacedColumn = Template.bind({});
AsSpacedColumn.args = {
    ...baseProps,
    column: true,
    spaced: true,
};

export const AsRow = Template.bind({});
AsRow.args = {
    ...baseProps,
    row: true,
};

export const AsSpacedRow = Template.bind({});
AsSpacedRow.args = {
    ...baseProps,
    row: true,
    spaced: true,
};
