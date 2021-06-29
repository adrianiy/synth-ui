import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const crumbs = [ { name: 'Crumb 1', callback: (name: string) => alert(name) }, { name: 'Crumb 2' }, { name: 'Crumb 3' } ];

export default {
    title: 'Components/Breadcrumbs/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ crumbs, i18n }, ctx: any) =>
    WithGlobalDecorator({
        template: html`<glyph-breadcrumbs .crumbs=${crumbs} .i18n=${i18n}></glyph-breadcrumbs>`,
        ctx,
    });

export const Playground = Template.bind({});

Playground.args = {
    crumbs,
};
