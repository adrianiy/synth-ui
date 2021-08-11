import { ButtonGroupStyle, DecorationType, UIInterface } from 'glyph-core-poc';
import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const buttons = [
    {
        title: { value: 1000, isNumber: true, format: '0,0', decoration: DecorationType.OnlyRed },
        subtitle: { value: 'text1' },
        active: true,
        action: (event: any) => clickEvent(event, 0),
    },
    {
        subtitle: { value: 1000, isNumber: true, format: '0,0%', decoration: DecorationType.OnlyRed },
        title: { value: 'text2' },
        active: false,
        action: (event: any) => clickEvent(event, 1),
    },
    {
        title: { value: -0.2, format: '0,0%', decoration: DecorationType.OnlyRed },
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
    interface: UIInterface.classic,
};
const clickEvent = (event: any, index: number) => {
    if (event) {
        event.target.buttons = event.target.buttons.map((button: any, idx: number) => ({
            ...button,
            active: idx === index,
        }));
    }
};

export default {
    title: 'Components/Button group/Examples',
    argTypes: {
        interface: { control: { type: 'radio' }, options: [ 'classic', 'modern', 'redesign' ] },
        size: { description: 'Button group size', control: { type: 'radio' }, options: [ 'big', 'small' ] },
        alignment: { description: 'Text alignment', control: { type: 'radio' }, options: [ 'center', 'left', 'right' ] },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ buttons, interface: interfaceValue, alignment, size }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-button-group
            .interface=${interfaceValue}
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
