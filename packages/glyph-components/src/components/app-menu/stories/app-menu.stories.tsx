import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const apps = [
    { icon: 'home', name: 'home', active: true },
    { icon: 'info', name: 'info' },
    { icon: 'lightbulb', name: 'test' },
    { icon: 'dashboard', name: 'dashboard' },
];
const baseProps = {
    apps,
    hasSearch: true,
};

export default {
    title: 'Components/App menu/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ apps, hasSearch }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-app-menu .apps=${apps} .hasSearch=${hasSearch}></glyph-app-menu>`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
    alignment: 'center',
};

export const WithSearch = Template.bind({});
WithSearch.args = {
    ...baseProps,
};

export const WithoutSearch = Template.bind({});
WithoutSearch.args = {
    ...baseProps,
    hasSearch: false,
};
