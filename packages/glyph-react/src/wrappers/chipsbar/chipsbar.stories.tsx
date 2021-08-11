import { Story, Meta } from '@storybook/react';
import { UIInterface } from 'glyph-core-poc';
import React from 'react';
import { WithFilters, WithCustomHeight, WithCustomGlobals, InitializeFilters } from '../../helpers/decorators';
import GlyphReactChipsbar, { GlyphReactChipsbarProps } from './chipsbar';

const basePath = process.env.NODE_ENV === 'development' ? '' : 'glyph-ui';

export default {
    title: 'Components/Chipsbar',
    component: GlyphReactChipsbar,
    decorators: [ WithCustomGlobals, WithCustomHeight(350), InitializeFilters, WithFilters ],
    parameters: {
        docs: {
            description: {
                component: `
Component to manage application filters, wrapper of [**glyph-chipsbar**](https://adrianiy.github.io/glyph-ui/?path=/docs/webcomponents_components-chipsbar-classic--basic).

Controls how web-components and application state interacts, uses \`filtersConfig\` state to render filters.

The events triggered in web-component will execute a state update.

You can check navigator console to see how component interacts with state.
                `,
            },
        },
    },
} as Meta;

const Template: Story<GlyphReactChipsbarProps> = (args: any) => <GlyphReactChipsbar {...args} />;

export const Chipsbar = Template.bind({});

Chipsbar.args = { uiInterface: UIInterface.classic, basePath };
