import dayjs from 'dayjs';

export const filter = index => ({
    description: `Test filter ${index}`,
    plural: 'filters',
    haveMultiSelect: false,
    multiSelect: false,
    visible: true,
    selected: [],
    options: [
        { description: 'option', brand: [ 1, 16 ], active: false, display: true, code: 1 },
        { description: 'option 2', brand: [ 1 ], active: false, display: true, code: 2 },
        { description: 'option 3', active: false, display: false, code: 3 },
    ],
});
export const hiddenFilter = {
    description: 'Hidden filter',
    plural: 'filters',
    haveMultiSelect: false,
    multiSelect: false,
    visible: false,
    selected: [],
    options: [
        { description: 'option', active: false, display: false, code: 1 },
        { description: 'option 2', active: false, display: true, code: 2 },
        { description: 'option 3', active: false, display: true, code: 3 },
    ],
};

export const filterWithChildren = {
    description: 'Test filter',
    plural: 'filters',
    haveMultiSelect: true,
    multiSelect: false,
    selected: [],
    searchPlaceholder: 'Search filters...',
    visible: true,
    options: [
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
    ],
};

export const year = dayjs().year();
export const endOfYear = dayjs(new Date(year + 1, 0, 31));
export const minDate = dayjs(new Date(year, 1, 1));
export const maxDate = dayjs().add(1, 'day');
export const dateRanges = [
    { description: 'Day +1', startDate: maxDate.toDate(), endDate: maxDate.toDate() },
    { description: 'Real time', startDate: new Date(), endDate: new Date(), isDefault: true },
    {
        description: 'Yesterday',
        startDate: dayjs().subtract(1, 'day').toDate(),
        endDate: dayjs().subtract(1, 'day').toDate(),
    },
    {
        description: 'Last 7 days',
        startDate: dayjs().subtract(7, 'day').toDate(),
        endDate: dayjs().subtract(1, 'day').toDate(),
    },
    {
        description: 'Last 14 days',
        startDate: dayjs().subtract(14, 'day').toDate(),
        endDate: dayjs().subtract(1, 'day').toDate(),
    },
    { description: 'Current fiscal year', startDate: minDate.toDate(), endDate: endOfYear.toDate() },
    {
        description: 'Last fiscal year',
        startDate: minDate.subtract(1, 'year').toDate(),
        endDate: endOfYear.subtract(1, 'year').toDate(),
    },
];
export const dateFilter = {
    description: 'Date',
    minDate,
    maxDate,
    dateRanges,
    visible: true,
    comparableType: 'commercial',
    comparableOptions: [
        { name: 'Commercial', value: 'commercial' },
        { name: 'Calendar', value: 'calendar' },
        { name: 'Custom', value: 'custom' },
        { name: 'Ordinal', value: 'ordinal', disabled: true },
    ],
    selected: [ dateRanges[1] ],
};
export const filtersConfig = {
    date: dateFilter,
    filter1: { ...filter(1) },
    filter2: { ...filter(2) },
    filter3: { ...filter(3) },
    filter6: { ...filterWithChildren },
    filter7: { ...hiddenFilter },
};
