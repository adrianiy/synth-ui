import { Brands } from 'glyph-core';
import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../../stories/helpers/decorators';
import { languages, appData, themes, calendarEvents } from './helpers/config';

const userMenuConfig = {
    themes,
    languages,
    decimals: true,
};

const baseProps = {
    activeBrand: Brands.zara,
    appTitle: 'DRIVE',
    appSubtitle: '',
    appData,
    userMenuConfig: undefined,
    avatar: true,
    interface: 'classic',
    userData: { name: 'Test user demo' },
    timeline: false,
    search: false,
    share: false,
    menu: true,
    calendarEvents: undefined,
};

export default {
    title: 'Layout/Header/Examples',
    argTypes: {
        interface: { control: { type: 'radio' }, options: [ 'classic', 'modern' ] },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = (
    {
        interface: interfaceValue,
        appData,
        menu,
        search,
        share,
        timeline,
        calendarEvents,
        activeBrand,
        appTitle,
        appSubtitle,
        userMenuConfig,
        avatar,
        userData,
    },
    ctx: any,
) =>
    WithGlobalDecorator({
        template: html` <glyph-header
            .activeBrand=${activeBrand}
            .appTitle=${appTitle}
            .appSubtitle=${appSubtitle}
            .userMenuConfig=${userMenuConfig}
            .avatar=${avatar}
            .userData=${userData}
            .interface=${interfaceValue}
            .search=${search}
            .share=${share}
            .menu=${menu}
            .timeline=${timeline}
            .calendarEvents=${calendarEvents}
            .appData=${appData}
        />`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
    ...baseProps,
    appSubtitle: 'test app',
};

export const WithActions = Template.bind({});
WithActions.args = {
    ...baseProps,
    userMenuConfig,
    timeline: true,
    calendarEvents,
    search: true,
    menu: true,
    share: true,
    appData,
};
