import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
import dayjs from 'dayjs';

const aux = 1;
const minDate = dayjs().startOf('year').toDate();
const maxDate = dayjs().add(aux, 'day').endOf('day').toDate();
const minDateAux = dayjs().startOf('year').subtract(aux, 'year').toDate();
const maxDateAux = dayjs().add(aux, 'day').endOf('day').toDate();
const startDate = dayjs().toDate();
const endDate = dayjs().toDate();
const startDateAux = dayjs().subtract(aux, 'day').toDate();
const endDateAux = dayjs().subtract(aux, 'day').toDate();

const baseProps = {
    minDate,
    maxDate,
    minDateAux: undefined,
    maxDateAux: undefined,
    startDate,
    endDate,
    startDateAux: undefined,
    endDateAux: undefined,
    months: 2,
    secondary: false,
    singleSelect: false,
    auxActive: false,
};

export default {
    title: 'Components/Calendar/Examples',
    argTypes: {
        minDate: { control: 'date' },
        maxDate: { control: 'date' },
        startDate: { control: 'date' },
        endDate: { control: 'date' },
        minDateAux: { control: 'date' },
        maxDateAux: { control: 'date' },
        startDateAux: { control: 'date', type: { required: false }, defaultValue: undefined },
        endDateAux: { control: 'date' },
        secondary: { description: 'Requires auxActive to be truthy' },
    },
    parameters: {
        viewMode: 'docs',
    },
};

const Template = (
    {
        minDate,
        maxDate,
        startDate,
        endDate,
        singleSelect,
        months,
        auxActive,
        secondary,
        startDateAux,
        endDateAux,
        minDateAux,
        maxDateAux,
    },
    ctx: any,
) =>
    WithGlobalDecorator({
        template: html` <glyph-calendar
            .startDate=${startDate}
            .endDate=${endDate}
            .minDate=${minDate}
            .maxDate=${maxDate}
            .singleSelect=${singleSelect}
            .months=${months}
            .auxActive=${auxActive}
            .secondary=${secondary}
            .startDateAux=${startDateAux}
            .endDateAux=${endDateAux}
            .minDateAux=${minDateAux}
            .maxDateAux=${maxDateAux}
        ></glyph-calendar>`,
        ctx,
    });

export const Playground = Template.bind({});
Playground.args = baseProps;

export const WithSingleSelection = Template.bind({});
WithSingleSelection.args = {
    ...baseProps,
    singleSelect: true,
};

export const WithMultipleRanges = Template.bind({});
WithMultipleRanges.args = {
    ...baseProps,
    startDateAux,
    endDateAux,
    minDateAux,
    maxDateAux,
    auxActive: true,
};
export const WithSecondarySelection = Template.bind({});
WithSecondarySelection.args = {
    ...baseProps,
    startDateAux,
    endDateAux,
    minDateAux,
    maxDateAux,
    auxActive: true,
    secondary: true,
};
