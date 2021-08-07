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
    brand: true,
    timeline: false,
    search: false,
    share: false,
    menu: true,
    notifications: false,
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
        brand,
        timeline,
        notifications,
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
        style: 'height: 300px',
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
            .brand=${brand}
            .notifications=${notifications}
            .timeline=${timeline}
            .calendarEvents=${calendarEvents}
            .appData=${appData}
        >
            <div style="display: grid; grid-gap: 12px;">
                <span style="padding: 8px; font-size: 12px; border: 1px solid #dedede; border-radius: 4px"
                    >Notification example</span
                >
                <span style="padding: 8px; font-size: 12px; border: 1px solid #dedede; border-radius: 4px"
                    >Notification example</span
                >
                <span style="padding: 8px; font-size: 12px; border: 1px solid #dedede; border-radius: 4px"
                    >Notification example</span
                >
            </div>
        </glyph-header>`,
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
