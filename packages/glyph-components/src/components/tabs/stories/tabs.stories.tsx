import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const tabs = [
    { description: 'tab1', active: true },
    { description: 'tab2', active: false },
];

const baseProps = {
    tabs,
    tabStyle: 'small',
};

export default {
    title: 'Components/Tabs/Examples',
    argTypes: {
        tabStyle: { control: { type: 'radio' }, options: [ 'small', 'big' ] },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ tabs, tabStyle }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-tabs .tabs=${tabs} .tabStyle=${tabStyle} />`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};

export const SmallTabs = Template.bind({});
SmallTabs.args = {
    ...baseProps,
};

export const BigTabs = Template.bind({});
BigTabs.args = {
    ...baseProps,
    tabStyle: 'big',
};
