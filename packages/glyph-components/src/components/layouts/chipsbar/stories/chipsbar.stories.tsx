import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../../stories/helpers/decorators';
import { filtersConfig } from './helpers/config';

const baseProps = {
    filtersConfig: filtersConfig,
    hideZaraSouth: true,
    interface: 'classic',
};

export default {
    title: 'Layout/Chipsbar/Examples',
    argTypes: {
        interface: { control: { type: 'radio' }, options: [ 'classic', 'modern', 'redesign' ] },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ filtersConfig, hideZaraSouth, interface: interfaceValue }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-chipsbar
            .filtersConfig=${filtersConfig}
            .hideZaraSouth=${hideZaraSouth}
            .interface=${interfaceValue}
            @filterSelect=${() => console.log(filtersConfig)}
        />`,
        ctx,
        style: 'height: 400px',
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};

export const Classic = Template.bind({});
Classic.args = {
    ...baseProps,
};

export const Modern = Template.bind({});
Modern.args = {
    ...baseProps,
    interface: 'modern',
};

export const Redesign = Template.bind({});
Redesign.args = {
    ...baseProps,
    interface: 'redesign',
};
