import { Story } from '@storybook/angular';
import { WithGlobalDecorator } from './../helpers/decorators';
import page from './changelog.docs.mdx';

export default {
    title: 'Changelog',
    parameters: {
        viewMode: 'docs',
        docs: {
            inlineStories: true,
            page,
        },
    },
};

export const Changelog: Story = (props, ctx) =>
    WithGlobalDecorator({
        props,
        template: '',
        ctx,
    });
