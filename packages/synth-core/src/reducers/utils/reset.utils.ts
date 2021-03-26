import cloneDeep from 'lodash-es/cloneDeep';

// Reset saved dates if the belong to a default range
export const resetDefaultDateValues = (savedDates, dateRanges) => {
    const { selected } = savedDates;
    const newSavedDates = cloneDeep(savedDates);
    const selectedDate = newSavedDates?.[0]?.selected[0];

    if (Object.keys(dateRanges || {}).includes(selectedDate?.description)) {
        const defaultDates = dateRanges[selectedDate.description];

        selectedDate.option.startDate = defaultDates[0].format('YYYY-MM-DD');
        selectedDate.option.endDate = defaultDates[1].format('YYYY-MM-DD');
    }

    return newSavedDates;
};

// reset search variables
export const resetSearch = (search, commonSearchs = undefined) => {
    const newSearch = cloneDeep(search);
    if (commonSearchs) {
        newSearch.commonSearchs = commonSearchs;
    }
    newSearch.suggestions = [];

    return newSearch;
};

// reset tag search variables
export const resetTagSearch = productFilters => {
    const newProductFilters = cloneDeep(productFilters);
    const tagFilter = newProductFilters?.find(filter => filter.key === 'cod_tag_search');

    if (tagFilter) {
        tagFilter.options = [];
        tagFilter.searchText = '';
    }

    return newProductFilters;
};
