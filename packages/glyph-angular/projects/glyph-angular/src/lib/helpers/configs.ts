import dayjs from 'dayjs';
import { ComparableType, DateRange, FiltersConfig as IFiltersConfig, SelectorOption } from 'glyph-core';

const tomorrow = dayjs().add(1, 'day').toDate();
const yesterday = dayjs().subtract(1, 'day').toDate();
const year = dayjs().year();

export const dateRanges: DateRange[] = [
    { description: 'Day +1', startDate: tomorrow, endDate: tomorrow },
    { description: 'Real time', startDate: new Date(), endDate: new Date(), isDefault: true },
    { description: 'Yesterday', startDate: yesterday, endDate: yesterday },
    { description: 'Last 7 days', startDate: dayjs().subtract(7, 'day').toDate(), endDate: yesterday },
    { description: 'Last 14 days', startDate: dayjs().subtract(14, 'day').toDate(), endDate: yesterday },
    {
        description: 'Current fiscal year',
        startDate: new Date(year, 1, 1),
        endDate: tomorrow,
        comparableType: ComparableType.calendar,
    },
    {
        description: 'Last fiscal year',
        startDate: new Date(year - 1, 1, 1),
        endDate: new Date(year, 0, 31),
        comparableType: ComparableType.calendar,
    },
];

export const comparableOptions: SelectorOption[] = [
    { name: 'Commercial', value: ComparableType.commercial },
    { name: 'Calendar', value: ComparableType.calendar },
    { name: 'Custom', value: ComparableType.custom },
    { name: 'Ordinal', value: ComparableType.ordinal, disabled: true },
];

export const FiltersConfig: IFiltersConfig = {
    date: {
        description: 'Fecha',
        minDate: new Date(year - 1, 1, 1),
        maxDate: tomorrow,
        key: 'date',
        visible: true,
        dateRanges,
        comparableType: ComparableType.commercial,
        comparableOptions,
        selected: [ dateRanges[1] ],
        compDates: [],
    },
    product: {
        description: 'Producto',
        plural: 'Productos',
        key: 'cod_product',
        visible: true,
        selected: [],
        options: [],
    },
    product_line: {
        description: 'Línea de producto',
        plural: 'Líneas',
        key: 'cod_product_line',
        visible: true,
        selected: [],
        options: [],
    },
    family: {
        description: 'Familia',
        plural: 'Familias',
        key: 'cod_family',
        visible: false,
        extraFilter: 'cod_product',
        selected: [],
        options: [],
    },
    section: {
        description: 'Sección',
        plural: 'Secciones',
        key: 'cod_section',
        visible: true,
        selected: [],
        options: [],
    },
    market: {
        description: 'Mercado',
        plural: 'Mercados',
        key: 'cod_market',
        related: [ 'platform' ],
        searchPlaceholder: 'Busca Alovera, Corea ...',
        visible: true,
        selected: [],
        options: [],
    },
    platform: {
        description: 'País',
        plural: 'Paises',
        key: 'cod_platform',
        searchPlaceholder: 'Busca España, Francia ...',
        visible: true,
        selected: [],
        options: [],
    },
};
