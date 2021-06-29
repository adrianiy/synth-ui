import { Story } from '@storybook/angular';
import { WithGlobalDecorator } from './../helpers/decorators';
import page from './introduction.docs.mdx';

export default {
    title: 'Introduction',
    parameters: {
        viewMode: 'docs',
        docs: {
            inlineStories: true,
            page,
        },
    },
};

export const Introduction: Story = (props, ctx) =>
    WithGlobalDecorator({
        props,
        template: '',
        ctx,
    });
