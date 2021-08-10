import { html } from 'lit-html';
import { WithGlobalDecorator } from '../../../stories/helpers/decorators';
import dayjs from 'dayjs';

const aux = 1;
const year = dayjs().year();
const endOfYear = dayjs(new Date(year + 1, 0, 31));
const minDate = dayjs(new Date(year, 1, 1));
const maxDate = dayjs().add(aux, 'day');
const dateRanges = [
    { description: 'Day +1', startDate: maxDate.toDate(), endDate: maxDate.toDate() },
    { description: 'Real time', startDate: new Date(), endDate: new Date(), isDefault: true },
    {
        description: 'Yesterday',
        startDate: dayjs().subtract(aux, 'day').toDate(),
        endDate: dayjs().subtract(aux, 'day').toDate(),
    },
    {
        description: 'Last 7 days',
        startDate: dayjs()
            .subtract(aux + 6, 'day')
            .toDate(),
        endDate: dayjs().subtract(aux, 'day').toDate(),
    },
    {
        description: 'Last 14 days',
        startDate: dayjs()
            .subtract(aux + 13, 'day')
            .toDate(),
        endDate: dayjs().subtract(aux, 'day').toDate(),
    },
    { description: 'Current fiscal year', startDate: minDate.toDate(), endDate: endOfYear.toDate() },
    {
        description: 'Last fiscal year',
        startDate: minDate.subtract(aux, 'year').toDate(),
        endDate: endOfYear.subtract(aux, 'year').toDate(),
    },
];
const comparableOptions = [
    { name: 'Commercial', active: true, value: 'commercial' },
    { name: 'Calendar', active: false, value: 'calendar' },
    { name: 'Custom', active: false, value: 'custom' },
    { name: 'Ordinal', active: false, value: 'ordinal', disabled: true },
];

const baseProps = {
    minDate: minDate.toDate(),
    maxDate: maxDate.toDate(),
    minComparableDate: minDate.subtract(aux, 'year').toDate(),
    maxComparableDate: maxDate.toDate(),
    startDate: dateRanges[1].startDate,
    endDate: dateRanges[1].endDate,
    comparableStartDate: undefined,
    comparableEndDate: undefined,
    comparableType: 'commercial',
    dateRanges,
    description: 'Real time',
    active: false,
    comparableOptions,
    interface: 'classic',
};

export default {
    title: 'Components/Date filter/Examples',
    argTypes: {
        interface: { control: { type: 'radio' }, options: [ 'classic', 'modern' ] },
        minDate: { control: 'date' },
        maxDate: { control: 'date' },
        startDate: { control: 'date' },
        endDate: { control: 'date' },
        minComparableDate: { control: 'date' },
        maxComparableDate: { control: 'date' },
        comparableStartDate: { control: 'date' },
        comparableEndDate: { control: 'date' },
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
        minComparableDate,
        maxComparableDate,
        comparableStartDate,
        comparableEndDate,
        dateRanges,
        description,
        active,
        comparableOptions,
        interface: interfaceValue,
    },
    ctx: any,
) =>
    WithGlobalDecorator({
        template: html` <glyph-date-filter
            .startDate=${startDate}
            .endDate=${endDate}
            .minDate=${minDate}
            .maxDate=${maxDate}
            .minComparableDate=${minComparableDate}
            .maxComparableDate=${maxComparableDate}
            .comparableStartDate=${comparableStartDate}
            .comparableEndDate=${comparableEndDate}
            .dateRanges=${dateRanges}
            .description=${description}
            .active=${active}
            .comparableOptions=${comparableOptions}
            .interface=${interfaceValue}
        ></glyph-date-filter>`,
        ctx,
        style: 'width: 400px; height: 500px',
    });

export const Playground = Template.bind({});
Playground.args = baseProps;
