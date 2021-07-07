import { ButtonGroupStyle } from 'glyph-core';
import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const buttons = [
    {
        title: { value: 1000, format: '0,0' },
        subtitle: { value: 'text1' },
        active: true,
        action: (event: any) => clickEvent(event, 0),
    },
    {
        title: { value: 1000, format: '0,0', decoration: 'green' },
        subtitle: { value: 'text2' },
        active: false,
        action: (event: any) => clickEvent(event, 1),
    },
    {
        title: { value: -0.2, format: '0,0%', decoration: 'red' },
        subtitle: { value: 'text2' },
        active: false,
        action: (event: any) => clickEvent(event, 2),
    },
    { title: { value: 'title' }, active: false, action: (event: any) => clickEvent(event, 3) },
    { subtitle: { value: 'subtitle' }, active: false, action: (event: any) => clickEvent(event, 4) },
];
const baseProps = {
    buttons,
    size: ButtonGroupStyle.big,
};
const clickEvent = (event: any, index: number) => {
    event.target.buttons = event.target.buttons.map((button: any, idx: number) => ({
        ...button,
        active: idx === index,
    }));
};

export default {
    title: 'Components/Button group/Examples',
    argTypes: {
        size: { description: 'Button group size', control: { type: 'radio' }, options: [ 'big', 'small' ] },
        alignment: { description: 'Text alignment', control: { type: 'radio' }, options: [ 'center', 'left', 'right' ] },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ buttons, alignment, size }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-button-group
            .size=${size}
            .buttons=${buttons}
            .alignment=${alignment}
        ></glyph-button-group>`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
    alignment: 'center',
};

export const Center = Template.bind({});
Center.args = {
    ...baseProps,
    alignment: 'center',
};

export const Left = Template.bind({});
Left.args = {
    ...baseProps,
    alignment: 'left',
};

export const Right = Template.bind({});
Right.args = {
    ...baseProps,
    alignment: 'right',
};
