import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../../stories/helpers/decorators';
import { filtersConfig } from './helpers/config';
import { clearAllEvent, clearEvent, multiSelectEvent, optionClickEvent } from './helpers/events';

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
            @filterSelect=${optionClickEvent}
            @filterClear=${clearEvent}
            @updateFilter=${multiSelectEvent}
            @clearAll=${clearAllEvent}
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
