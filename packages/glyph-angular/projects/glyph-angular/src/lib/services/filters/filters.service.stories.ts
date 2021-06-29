import { Story } from '@storybook/angular';
import { WithGlobalDecorator } from './../../helpers/decorators';
import page from './filters.service.docs.mdx';

export default {
    title: 'Services/Filters Service',
    parameters: {
        viewMode: 'docs',
        docs: {
            inlineStories: true,
            page,
        },
    },
};

export const FiltersService: Story = (props, ctx) =>
    WithGlobalDecorator({
        props,
        template: '',
        ctx,
    });
