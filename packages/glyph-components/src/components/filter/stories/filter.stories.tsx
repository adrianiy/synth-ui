import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const baseProps = {
    description: 'Test filter',
    plural: 'filters',
    haveMultiSelect: false,
    multiSelect: false,
    selected: [],
    searchPlaceholder: '',
    interface: 'classic',
    options: Array(10)
        .fill(0)
        .map((_, i) => ({ description: `option ${i}`, active: false, display: true, code: i })),
};

const withChildren = [
    {
        description: 'header',
        display: true,
        header: true,
        code: 88,
        children: [
            { description: 'option', active: false, display: true, code: 1 },
            { description: 'option 2', active: false, display: true, code: 2 },
            { description: 'option 3', active: false, display: true, code: 3 },
        ],
    },
    {
        description: 'header2',
        display: true,
        header: true,
        code: 99,
        children: [
            { description: 'option', active: false, display: true, code: 4 },
            { description: 'option 2', active: false, display: true, code: 5 },
            { description: 'option 3', active: false, display: true, code: 6 },
        ],
    },
];

export default {
    title: 'Components/Filter/Examples',
    argTypes: {
        interface: { control: { type: 'radio' }, options: [ 'classic', 'modern', 'redesign' ] },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = (
    {
        description,
        plural,
        haveMultiSelect,
        multiSelect,
        searchPlaceholder,
        selected,
        options,
        interface: interfaceValue,
    },
    ctx: any,
) =>
    WithGlobalDecorator({
        template: html` <glyph-filter
            .description=${description}
            .plural=${plural}
            .haveMultiSelect=${haveMultiSelect}
            .multiSelect=${multiSelect}
            .selected=${selected}
            .options=${options}
            .searchPlaceholder=${searchPlaceholder}
            .interface=${interfaceValue}
        />`,
        ctx,
        style: 'width: 300px; height: 350px',
    });

export const Playground = Template.bind({});
Playground.args = baseProps;

export const WithMultiselect = Template.bind({});
WithMultiselect.args = {
    ...baseProps,
    haveMultiSelect: true,
};

export const WithSearch = Template.bind({});
WithSearch.args = {
    ...baseProps,
    searchPlaceholder: 'Search filters...',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    ...baseProps,
    options: withChildren,
};
