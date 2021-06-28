import { dateFilter, filter, filterWithChildren, hiddenFilter } from './config';

export const optionClickEvent = event => {
    const filterCode = event.detail.filterCode;
    if (filterCode === 'date') {
        return dateSelect(event);
    }
    const code = event.detail.option.code;
    const header = event.detail.option.header;
    const filtersConfig = event.target.filtersConfig;
    const filter = filtersConfig[filterCode];
    let index = filter.options.findIndex(option => option.code === code);
    let subindex = -1;
    if (index === -1) {
        index = filter.options.findIndex(option => option.children?.some(child => child.code === code));
        subindex = filter.options[index].children.findIndex(child => child.code === code);
    }
    let option = { ...filter.options[index] };
    if (header) {
        filter.options = [
            ...filter.options.slice(0, index),
            {
                ...option,
                expanded: !option.expanded,
            },
            ...filter.options.slice(index + 1),
        ];
        event.target.filtersConfig = { ...filtersConfig, [filterCode]: filter };
        return null;
    }
    const multiSelect = filter.multiSelect;
    if (!multiSelect) {
        filter.options.forEach(opt => {
            opt.active = false;
            opt.children?.forEach(child => (child.active = false));
        });
    }
    if (subindex === -1) {
        filter.options = [
            ...filter.options.slice(0, index),
            {
                ...option,
                active: !option.active,
            },
            ...filter.options.slice(index + 1),
        ];
        filter.selected = filter.options
            .filter(opt => opt.active)
            .map(opt => ({
                default: false,
                description: option.description,
                option: opt,
            }));
        event.target.filtersConfig = { ...filtersConfig, [filterCode]: filter };
    } else {
        const child = option.children[subindex];
        const children = [
            ...option.children.slice(0, subindex),
            {
                ...child,
                active: !child.active,
            },
            ...option.children.slice(subindex + 1),
        ];
        filter.options = [
            ...filter.options.slice(0, index),
            {
                ...option,
                children,
            },
            ...filter.options.slice(index + 1),
        ];
        filter.selected = filter.options
            .filter(opt => opt.children.some(child => child.active))
            .reduce(
                (acc, curr) =>
                    acc.concat(
                        curr.children
                            .filter(child => child.active)
                            .map(child => ({ default: false, description: child.description, option: child })),
                    ),
                [],
            );
        event.target.filtersConfig = { ...filtersConfig, [filterCode]: filter };
        return null;
    }
};

export const dateSelect = event => {
    const {
        startDate,
        endDate,
        description,
        comparableType,
        comparableStartDate,
        comparableEndDate,
        isDefault,
    } = event.detail;
    const selected = [ { startDate, endDate, description, isDefault } ];
    const compDates = [ { startDate: comparableStartDate, endDate: comparableEndDate } ];
    const filtersConfig = event.target.filtersConfig;
    const date = filtersConfig.date;
    event.target.filtersConfig = {
        ...filtersConfig,
        date: { ...date, selected, comparableType, compDates, description },
    };
    return null;
};

export const clearEvent = event => {
    const filterCode = event.detail;
    const filter = event.target.filtersConfig[filterCode];
    if (filterCode === 'date') {
        filter.selected = [ filter.dateRanges[1] ];
        filter.compDates = [];
        filter.description = filter.dateRanges[1].description;
        filter.comparableType = 'commercial';
        event.target.filtersConfig = {
            ...event.target.filtersConfig,
            date: filter,
        };
        return null;
    }
    filter.selected = [];
    if (filter.haveMultiSelect) {
        filter.options = [
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
    } else {
        filter.options = [
            { description: 'option', active: false, display: true },
            { description: 'option 2', active: false, display: true },
            { description: 'option 3', active: false, display: true },
        ];
    }
    event.target.filtersConfig = { ...event.target.filtersConfig, [filterCode]: filter };
};

export const clearAllEvent = event => {
    event.target.filtersConfig = {
        date: dateFilter,
        filter1: { ...filter(1) },
        filter2: { ...filter(2) },
        filter3: { ...filter(3) },
        filter4: { ...filter(4) },
        filter5: { ...filter(5) },
        filter6: { ...filterWithChildren },
        filter7: { ...hiddenFilter },
    };
};

export const multiSelectEvent = event => {
    const { filterCode, filter, checkMultiSelect } = event.detail;
    const filtersConfig = event.target.filtersConfig;
    if (!filter.multiSelect && checkMultiSelect) {
        filter.options.forEach(opt => {
            opt.active = false;
            opt.children.forEach(child => (child.active = false));
        });
        filter.selected = filter.options
            .filter(opt => opt.active)
            .map(opt => ({
                default: false,
                description: opt.description,
                option: opt,
            }));
    }
    event.target.filtersConfig = { ...filtersConfig, [filterCode]: filter };
};
