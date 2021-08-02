import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const baseProps = {
    active: false,
    interface: 'classic',
};

export default {
    title: 'Components/Toggler/Examples',
    argTypes: {
        interface: { control: { type: 'radio' }, options: [ 'classic', 'modern' ] },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ active, interface: interfaceValue }, ctx: any) =>
    WithGlobalDecorator({
        template: html`<glyph-toggler .active=${active} .interface=${interfaceValue} />`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};
