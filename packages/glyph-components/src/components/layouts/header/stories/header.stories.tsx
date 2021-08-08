import { Brands, UIInterface } from 'glyph-core';
import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../../stories/helpers/decorators';
import { languages, appData, themes, calendarEvents, brandList } from './helpers/config';

const userMenuConfig = {
    themes,
    languages,
    decimals: true,
    customConfig: true,
};

const baseProps = {
    activeBrand: Brands.zara,
    appTitle: 'DRIVE',
    appSubtitle: '',
    appData,
    userMenuConfig,
    avatar: true,
    brandList,
    interface: 'classic',
    userData: { name: 'Test user demo' },
    brand: true,
    timeline: true,
    search: true,
    share: true,
    menu: true,
    notifications: true,
    calendarEvents,
};

const brandChange = ({ detail }) => {
    alert(detail.id);
};

export default {
    title: 'Layout/Header/Examples',
    argTypes: {
        interface: { control: { type: 'radio' }, options: [ 'classic', 'modern', 'redesign' ] },
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
        brandList,
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
        style: 'height: 600px; overflow: hidden;',
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
            .brandList=${brandList}
            .notifications=${notifications}
            .timeline=${timeline}
            .calendarEvents=${calendarEvents}
            .appData=${appData}
            @brandChange=${brandChange}
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

export const Redesign = Template.bind({});
Redesign.args = {
    ...baseProps,
    interface: UIInterface.redesign,
};
