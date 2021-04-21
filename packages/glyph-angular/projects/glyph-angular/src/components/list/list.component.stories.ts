import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UIInterface } from 'glyph-core';
import { ListComponent } from './list.component';

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
    ['España', 'Estados unidos', 'Canada', 'Francia', 'Irlanda', 'Croacia', 'Corea', 'Taiwan'].map(
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
    ['España', 'Estados unidos', 'Canada', 'Francia', 'Irlanda', 'Croacia', 'Corea', 'Taiwan'].map((name, i) => ({
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
    component: ListComponent,
    decorators: [
        moduleMetadata({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }),
    ],
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

const Template: Story<ListComponent> = args => ({
    props: args,
    template: `<glyph-ng-list [data]="data" [fieldsConfig]="fieldsConfig" [loading]="loading" [expandable]="expandable" [limit]="limit" [title]="title" [enableDownload]="enableDownload"></glyph-ng-list>`,
});

export const Basic: Story<ListComponent> = Template.bind({});
Basic.args = { ...defaultProps, data };
export const WithChildren: Story<ListComponent> = Template.bind({});
WithChildren.args = { ...defaultProps, expandable: true, data: childrenData };
WithChildren.parameters = {
    docs: {
        description: {
            story: `List's rows can be configured with a children array. It will be rendered as drilldown row`,
        },
    },
};
export const NoData: Story<ListComponent> = Template.bind({});
NoData.args = { ...defaultProps, data: [] };
NoData.parameters = {
    docs: {
        description: {
            story: `If component gets an empty array as data input an error warning will be rendered`,
        },
    },
};
