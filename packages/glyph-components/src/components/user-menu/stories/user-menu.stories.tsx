import { UIInterface } from 'glyph-core';
import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const themes = [
    { name: 'white', value: 'white', active: true },
    { name: 'dark', value: 'dark', active: false },
];
const languages = [
    { name: 'english', value: 'en', active: true },
    { name: 'spanish', value: 'es', active: false },
];

const baseProps = {
    name: 'Test user',
    customConfig: true,
    decimals: true,
    themes,
    languages,
    interface: UIInterface.classic,
};

export default {
    title: 'Components/User menu/Examples',
    argTypes: {
        interface: { control: { type: 'radio' }, options: [ 'classic', 'modern' ] },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ name, customConfig, decimals, themes, languages, interface: interfaceValue }, ctx: any) =>
    WithGlobalDecorator({
        template: html`<glyph-user-menu
            .interface=${interfaceValue}
            .name=${name}
            .customConfig=${customConfig}
            .themes=${themes}
            .decimals=${decimals}
            .languages=${languages}
        />`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};
