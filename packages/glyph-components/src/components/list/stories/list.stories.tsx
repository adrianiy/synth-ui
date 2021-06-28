import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
import { actionData, childrenData, data } from './helpers/data';

const baseProps = {
    data: data,
    limit: 3,
    loading: false,
    enableDownload: true,
    expandable: false,
};

export default {
    title: 'Components/List/Examples',
    parameters: {
        viewMode: 'docs',
    },
};

const Template = ({ data, limit, loading, enableDownload, expandable }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-list
            .data=${data}
            .limit=${limit}
            .loading=${loading}
            .enableDownload=${enableDownload}
            .expandable=${expandable}
        />`,
        ctx,
        style: 'width: 300px',
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};

export const WithExpandableRows = Template.bind({});
WithExpandableRows.args = {
    ...baseProps,
    expandable: true,
    data: childrenData,
};

export const WithActions = Template.bind({});
WithActions.args = {
    ...baseProps,
    data: actionData,
};

export const LoadingList = Template.bind({});
LoadingList.args = {
    ...baseProps,
    loading: true,
};

export const NoDataList = Template.bind({});
NoDataList.args = {
    ...baseProps,
    data: [],
};
