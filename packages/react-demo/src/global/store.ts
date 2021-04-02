import { createStore } from 'redux';
import { rootReducer } from 'synth-react';

const store = createStore(
    rootReducer,
    /* istanbul ignore next */
    (window as any)['__REDUX_DEVTOOLS_EXTENSION__']?.(),
);

export default store;
