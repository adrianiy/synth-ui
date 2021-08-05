import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { CustomError } from './error.utils';
import { fetchBase } from './fetch.utils';

dayjs.extend(utc);

const COMPARABLES = { month: 'calendar', week: 'commercial' };

export const dateToTimeStamp = filters => {
    const startDate = filters.find(f => f.key === 'local_date' && f.op === 'gte');
    const endDate = filters.find(f => f.key === 'local_date' && f.op === 'lte');

    if (startDate) {
        startDate.value = `${startDate.value} 00:00:00`;
    }
    if (endDate) {
        const dayPlusOne = `${dayjs().add(1, 'day').format('YYYY-MM-DD')} 23:59:59`;

        endDate.value = `${endDate.value} 23:59:59`;

        if ([ `${dayjs().format('YYYY-MM-DD')} 23:59:59`, dayPlusOne ].includes(endDate.value)) {
            const excess = dayjs().minute() % 5;
            endDate.value = `${endDate.value.split(' ')[0]} ${dayjs()
                .subtract(excess, 'minute')
                .startOf('minute')
                .format('HH:mm:ss')}`;
        }
    }
    return filters;
};

export const getDateFilter = (filters, option) => {
    return filters.find(d => d.key === 'local_date' && d.op === option)?.value;
};

export const getFiltersFromParams = ({ query: params }, ignore: string[]) => {
    const filter = [];

    if (params.startDate && !ignore.includes('startDate')) {
        filter.push({ key: 'local_date', op: 'gte', value: params.startDate });
    }

    if (params.endDate && !ignore.includes('endDate')) {
        filter.push({ key: 'local_date', op: 'lte', value: params.endDate });
    }
    Object.keys(params)
        .filter(key => ![ 'startDate', 'endDate' ].includes(key) && !ignore.includes(key))
        .forEach(key =>
            filter.push({
                key: key.startsWith('$') ? key : `cod_${key.replace('!', '')}`,
                op: key.includes('!') ? 'nin' : 'in',
                value: [].concat(isNaN(+params[key]) ? params[key] : +params[key]),
            }),
        );

    return filter;
};

export const getFiltersFromQuery = (ctx: any, use: string[], rangeBefore: number, ignore: string[]) => {
    if (!Object.keys(ctx.query).length) {
        const errorMessage = 'No filters in querystring';
        throw new CustomError(errorMessage, 404);
    }
    let filters = ctx.query.filter ? JSON.parse(ctx.query.filter) : getFiltersFromParams(ctx, ignore || []);

    if (use || ignore) {
        filters = filters.filter(filter => use.includes(filter.key) && !ignore?.includes(filter.key));
    }

    if (rangeBefore) {
        filters
            .filter(filter => filter.key === 'local_date' && filter.op === 'gte')
            .forEach(filter => (filter.value = dayjs(filter.value).subtract(rangeBefore, 'day').format('YYYY-MM-DD')));
    }

    return dateToTimeStamp(filters);
};

const getComparableDates = async (ctx, dateFilter) => {
    if (ctx.state.timeAgg) {
        dateFilter
            .filter(df => df.op === 'gte')
            .forEach(df => (df.value = dayjs(df.value).startOf(ctx.state.timeAgg).format('YYYY-MM-DD HH:mm:ss')));
    }

    const { auth, baseUrl } = ctx.state;

    const result = await fetchBase(
        baseUrl,
        'v1/date/comparable',
        auth,
        { filter: dateFilter },
        {},
        ctx.state.lastStep,
        ctx.state.logger,
    );

    return result;
};

const getComparableDatesFromQuery = async ctx => {
    const dates = JSON.parse(ctx.query.compDates);
    const startDate = dates.find(filter => filter.op === 'gte').value;
    const endDate = dates.find(filter => filter.op === 'lte').value;

    return {
        data: [
            {
                comparable_custom: endDate,
            },
            {
                comparable_custom: startDate,
            },
        ],
    };
};

const parseComparables = (
    comparableDateFilter,
    dateFilter,
    originalFilter,
    comparableDate,
    realTime,
    forceFullDayComp,
    forceRealTimeComp = false,
) => {
    const endDate = dateFilter.find(d => d.op === 'lte');
    const originalEndDate = originalFilter.find(d => d.op === 'lte');
    const dayPlusOne = `${dayjs(realTime).add(1, 'day').format('YYYY-MM-DD')}`;
    if (!forceFullDayComp && originalEndDate && [ realTime, dayPlusOne ].includes(originalEndDate.value.split(' ')[0])) {
        comparableDateFilter.push({
            key: 'end_ts_utc',
            op: 'lte',
            value: dayjs
                .utc(
                    dayjs(`${comparableDate} ${originalEndDate.value.split(' ')[1]}`).subtract(
                        endDate.value.includes(dayPlusOne) ? 1 : 0,
                        'day',
                    ),
                )
                .format('YYYY-MM-DD HH:mm:ss'),
        });
    } else {
        comparableDateFilter.push({
            key: 'local_date',
            op: 'lte',
            value: `${comparableDate} 23:59:59`,
        });
    }
    if (forceRealTimeComp) {
        comparableDateFilter.push({
            key: 'end_ts_utc',
            op: 'lte',
            value: dayjs
                .utc(dayjs(`${realTime} ${originalEndDate.value.split(' ')[1]}`).subtract(1, 'y'))
                .format('YYYY-MM-DD HH:mm:ss'),
        });
    }

    return comparableDateFilter;
};

export const getComparableFilter = async (ctx, filter, originalFilter, comparableType) => {
    if (![ 'calendar', 'commercial', 'custom' ].includes(comparableType)) {
        throw new Error('Invalid comparable type');
    }

    const isCustom = comparableType === 'custom';
    const realTime = ctx.query?.realTime || dayjs().format('YYYY-MM-DD');
    const dateFilter = filter.filter(f => [ 'local_date', 'end_ts_utc' ].includes(f['key']));
    dateFilter.forEach(df => (df.key = 'local_date'));

    const copyFilter = { ...dateFilter };
    const comparableDate = await (isCustom ? getComparableDatesFromQuery(ctx) : getComparableDates(ctx, dateFilter));

    let startDate = comparableDate['data'][comparableDate['data'].length - 1][`comparable_${comparableType}`];

    if (ctx.state.timeAgg) {
        const filterDate = copyFilter.find(cf => cf.op === 'gte')?.value.split(' ')[0];
        startDate = comparableDate['data'].find(cf => cf['local_date'] === filterDate)[`comparable_${comparableType}`];
    }
    let comparableDateFilter = [
        {
            key: 'local_date',
            op: 'gte',
            value: `${startDate} 00:00:00`,
        },
    ];

    comparableDateFilter = parseComparables(
        comparableDateFilter,
        dateFilter,
        originalFilter,
        comparableDate['data'][0][`comparable_${comparableType}`],
        realTime,
        ctx.state?.forceFullDayComp || false,
        ctx.query?.forceRealTimeComp || false,
    );

    const comparableFilters = filter.filter(f => f['key'] !== 'local_date').concat(comparableDateFilter);

    return { comparableFilters, comparableDate };
};

export const getCustomComparable = async (ctx, filter, compType) => {
    const compRes = await getComparableFilter(ctx, filter, filter, compType);

    compRes.comparableFilters = compRes.comparableFilters
        .filter(f => f.key !== 'local_date')
        .concat(JSON.parse(ctx.query.compDates));

    compRes.comparableDate = [] as any;

    return compRes;
};

export const getComparable = (ctx: any, filter: any[], compType: string) => {
    switch (compType) {
        case 'ordinal':
            return filter;
        case 'custom':
            return getCustomComparable(ctx, filter, compType);
        default:
            return getComparableFilter(ctx, filter, filter, compType);
    }
};

const getComparableCampaignValue = camp => {
    /* istanbul ignore else */
    if (camp instanceof Array) {
        return camp.map(c => `${c[0]}${parseInt(c.slice(1), 10) - 1}`);
    } else {
        return `${camp[0]}${parseInt(camp.slice(1), 10) - 1}`;
    }
};

export const getComparableCampaign = compRes => {
    const getCompCampaign = dayjs(getDateFilter(compRes.comparableFilters, 'gte')).year() !== dayjs().year();
    /* istanbul ignore else */
    if (getCompCampaign) {
        compRes.comparableFilters
            .filter(f => f.key === 'cod_campaign')
            .forEach(f => (f.value = getComparableCampaignValue(f.value)));
    }

    return compRes;
};
