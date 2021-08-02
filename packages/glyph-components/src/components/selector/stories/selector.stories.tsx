import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';

const options = [
    { name: 'option 1', active: false, value: 1 },
    { name: 'option 2', active: false, value: 2 },
];
const complexOptions = {
    group1: [
        { name: 'option 1', active: false, value: 1 },
        { name: 'option 2', active: false, value: 2 },
    ],
    group2: [
        { name: 'option 3', active: false, value: 3 },
        { name: 'option 4', active: false, value: 4 },
    ],
};
const baseProps = {
    label: 'selector',
    options,
    complexOptions: [],
    multiSelect: false,
    searchPlaceholder: '',
    interface: 'classic',
};

const changeEvent = (event: any) => {
    event.target.options = event.target.options.map((option: any) => {
        if (option.value === event.detail.value) {
            if (event.target.multiSelect) {
                option.active = !option.active;
            } else {
                option.active = true;
            }
        } else if (!event.target.multiSelect) {
            option.active = false;
        }
        return option;
    });
};
const changeEventComplex = (event: any) => {
    event.target.complexOptions = Object.keys(event.target.complexOptions).reduce((prev, curr) => {
        prev[curr] = event.target.complexOptions[curr].map((option: any) => {
            if (option.value === event.detail.value) {
                if (event.target.multiSelect) {
                    option.active = !option.active;
                } else {
                    option.active = true;
                }
            } else if (!event.target.multiSelect) {
                option.active = false;
            }
            return option;
        });
        return prev;
    }, {});
};

export default {
    title: 'Components/Selector/Examples',
    argTypes: {
        interface: { control: { type: 'radio' }, options: [ 'classic', 'modern' ] },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = (
    { interface: interfaceValue, label, options, complexOptions, searchPlaceholder, multiSelect },
    ctx: any,
) =>
    WithGlobalDecorator({
        template: html` <glyph-selector
            .label=${label}
            .options=${options}
            .complexOptions=${complexOptions}
            .multiSelect=${multiSelect}
            .searchPlaceholder=${searchPlaceholder}
            .interface=${interfaceValue}
            @optionSelect=${changeEvent}
        />`,
        ctx,
        style: 'height: 200px',
    });

const ComplexTemplate = ({ label, options, complexOptions, multiSelect }, ctx: any) =>
    WithGlobalDecorator({
        template: html` <glyph-selector
            .label=${label}
            .options=${options}
            .complexOptions=${complexOptions}
            .multiSelect=${multiSelect}
            @optionSelect=${changeEventComplex}
        />`,
        ctx,
        style: 'height: 200px',
    });

export const Playground = Template.bind({});
Playground.args = {
    ...baseProps,
};

export const WithMultiSelect = Template.bind({});
WithMultiSelect.args = {
    ...baseProps,
    multiSelect: true,
};

export const WithSearchInput = Template.bind({});
WithSearchInput.args = {
    ...baseProps,
    multiSelect: true,
    searchPlaceholder: 'Search option...',
};

export const WithComplexOptions = ComplexTemplate.bind({});
WithComplexOptions.args = {
    ...baseProps,
    options: [],
    multiSelect: true,
    complexOptions,
};
