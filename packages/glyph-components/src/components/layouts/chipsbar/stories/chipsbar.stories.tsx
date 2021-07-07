import { html } from 'lit-html';
import { WithGlobalDecorator, isDev } from '../../../../stories/helpers/decorators';
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
        interface: { control: { type: 'radio' }, options: [ 'classic', 'modern' ] },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ filtersConfig, hideZaraSouth, interface: interfaceValue }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-chipsbar .basePath={ isDev ? '' : 'glyph-ui' }" .filtersConfig=${filtersConfig}
        .hideZaraSouth=${hideZaraSouth} .interface=${interfaceValue} @filterSelect=${optionClickEvent}
        @filterClear=${clearEvent} @updateFilter=${multiSelectEvent} @clearAll=${clearAllEvent} />`,
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
