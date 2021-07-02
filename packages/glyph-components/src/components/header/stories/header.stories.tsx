import { Brands } from 'glyph-core';
import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const appsData = [
    { icon: 'home', name: 'home', active: true },
    { icon: 'info', name: 'info' },
    { icon: 'lightbulb', name: 'test' },
    { icon: 'dashboard', name: 'dashboard' },
];
const calendarEvents = {
    2021: [
        {
            date: '2021-01-01',
            events: [
                { localizedStartTime: '00:00', title: 'Demo1', description: 'Demo calendar event description' },
                { localizedStartTime: '00:00', title: 'Demo2', description: 'Demo calendar event description' },
            ],
        },
        {
            date: '2021-02-01',
            events: [
                { localizedStartTime: '00:00', title: 'Demo3', description: 'Demo calendar event description' },
                { localizedStartTime: '00:00', title: 'Demo4', description: 'Demo calendar event description' },
            ],
        },
    ],
    2020: [
        {
            date: '2020-01-01',
            events: [
                { localizedStartTime: '00:00', title: 'Demo1', description: 'Demo calendar event description' },
                { localizedStartTime: '00:00', title: 'Demo2', description: 'Demo calendar event description' },
            ],
        },
        {
            date: '2020-02-01',
            events: [
                { localizedStartTime: '00:00', title: 'Demo3', description: 'Demo calendar event description' },
                { localizedStartTime: '00:00', title: 'Demo4', description: 'Demo calendar event description' },
            ],
        },
    ],
};
const themes = [
    { name: 'white', value: 'white', active: true },
    { name: 'dark', value: 'dark', active: false },
];
const languages = [
    { name: 'english', value: 'en', active: true },
    { name: 'spanish', value: 'es', active: false },
];
const userMenuConfig = {
    themes: themes,
    languages: languages,
    decimals: true,
};

const baseProps = {
    activeBrand: Brands.zara,
    appTitle: 'DRIVE',
    appSubtitle: '',
    userMenuConfig: undefined,
    avatar: true,
    interface: 'classic',
    userData: { name: 'Test user demo' },
    timeline: false,
    search: false,
    share: false,
    calendarEvents: undefined,
    appData: undefined,
};

export default {
    title: 'Components/Header/Examples',
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
    appsData,
};
