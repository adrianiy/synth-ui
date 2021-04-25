import React from 'react';
import { rootReducer } from 'glyph-core';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(
    rootReducer,
    /* istanbul ignore next */
    (window as any)['__REDUX_DEVTOOLS_EXTENSION__']?.(),
);

const FilterStateProvider = ({ children }: { children: any }) => <Provider store={store}>{children}</Provider>;

export default FilterStateProvider;
