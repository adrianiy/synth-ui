import { Meta, Story } from '@storybook/react';
import GlyphReactList, { GlyphReactListProps } from './list';

const fieldsConfig = [
    {
        title: () => 'amount',
        value: () => 'amount',
        format: () => '0,0',
        sign: () => false,
    },
    {
        title: () => 'crec.',
        value: () => 'growth_amount',
        format: () => '0,0.0 %',
        decoration: () => 'green',
        sign: () => false,
    },
];

const defaultProps = {
    loading: false,
    expandable: false,
    fieldsConfig,
    activeKpi: 'amount',
    title: 'List',
    limit: 3,
    enableDownload: true,
};

const data = [
    {
        _isTotal: true,
        name: 'total',
        amount: 999999,
        growth_amount: 0.23,
    },
].concat(
    [ 'España', 'Estados unidos', 'Canada', 'Francia', 'Irlanda', 'Croacia', 'Corea', 'Taiwan' ].map(
        country =>
            ({
                name: country,
                amount: Math.random() * 10000,
                growth_amount: Math.random(),
            } as any),
    ),
);
const childrenData = [
    {
        _isTotal: true,
        name: 'total',
        amount: 999999,
        growth_amount: 0.23,
    },
].concat(
    [ 'España', 'Estados unidos', 'Canada', 'Francia', 'Irlanda', 'Croacia', 'Corea', 'Taiwan' ].map((name, i) => ({
        _isTotal: false,
        name,
        amount: 12311,
        growth_amount: 0.98,
        children: [
            {
                name: 'child',
                amount: 999999,
                growth_amount: 0.23,
            },
        ],
    })),
);

export default {
    title: 'Components/List Component',
    component: GlyphReactList,
    parameters: {
        docs: {
            description: {
                component: `
Paginated list component.

It is a wrapper of [**glyph-list**](https://adrianiy.github.io/glyph-ui/?path=/docs/webcomponents_components-list--basic). Handles data transformation between apps and list component.
                `,
            },
        },
    },
} as Meta;

const Template: Story<GlyphReactListProps> = args => <GlyphReactList {...args} />;

export const Basic = Template.bind({});
Basic.args = { ...defaultProps, data };

export const WithChildren = Template.bind({});
WithChildren.args = { ...defaultProps, expandable: true, data: childrenData };
WithChildren.parameters = {
    docs: {
        description: {
            story: 'List\'s rows can be configured with a children array. It will be rendered as drilldown row',
        },
    },
};
export const NoData = Template.bind({});
NoData.args = { ...defaultProps, data: [] };
NoData.parameters = {
    docs: {
        description: {
            story: 'If component gets an empty array as data input an error warning will be rendered',
        },
    },
};
