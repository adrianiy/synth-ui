import moment from 'moment';

export const defaultConfig = {
    maxCalDate: moment()
        .add(1, 'day')
        .format('YYYY-MM-DD'),
    minCalDate: moment()
        .subtract(moment().month() === 0 ? /* istanbul ignore next */ 2 : 1, 'year')
        .startOf('year')
        .add(1, 'month')
        .format('YYYY-MM-DD'),
    startDate: moment().format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
    inputMin: moment().format('YYYY-MM-DD'),
    inputMax: moment().format('YYYY-MM-DD'),
    startCompDate: moment()
        .subtract(364, 'day')
        .format('YYYY-MM-DD'),
    endCompDate: moment()
        .subtract(364, 'day')
        .format('YYYY-MM-DD'),
    inputMinComp: moment()
        .subtract(364, 'day')
        .format('YYYY-MM-DD'),
    inputMaxComp: moment()
        .subtract(364, 'day')
        .format('YYYY-MM-DD'),
    format: 'YYYY-MM-DD',
    dateRanges: { 'Tiempo real': [ moment(), moment() ] },
    selectedRange: 'Tiempo real',
    compType: 'commercial',
    activeInput: 'start-date',
    commonSearchs: []
};
