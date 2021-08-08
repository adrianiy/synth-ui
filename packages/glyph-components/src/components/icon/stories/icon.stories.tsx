import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const baseProps = {
    icon: 'home-filled',
    material: false,
    class: 'test-class',
    outlined: false,
    button: true,
    onClickCbk: () => alert('click'),
};

export default {
    title: 'Components/Icon/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ icon, material, class: classValue, outlined, button, onClickCbk }, ctx: any) =>
    WithGlobalDecorator({
        template: html`<glyph-icon
            .icon=${icon}
            .material=${material}
            .class=${classValue}
            .outlined=${outlined}
            .button=${button}
            .onClick=${onClickCbk}
        /> `,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};

export const MaterialIcon = Template.bind({});
MaterialIcon.args = {
    ...baseProps,
    icon: 'home',
    material: true,
};
