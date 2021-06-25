import { h } from '@stencil/core';
import { FilterOptionHeader } from 'glyph-core';

export const renderOptionDescription = (description: string, searchValue?: string) => {
    if (searchValue) {
        description = description.toLowerCase().split(searchValue.toLowerCase()).join(`<b>${searchValue}</b>`);
    }

    return <span innerHTML={description} />;
};

export const inSearch = (option: FilterOptionHeader, searchValue?: string) => {
    if (searchValue) {
        if (option.header) {
            return option.children.some(child => inSearch(child));
        }
        return option.description.toLowerCase().includes(searchValue.toLowerCase());
    }
    return true;
};
