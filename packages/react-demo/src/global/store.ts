import { createStore } from 'redux';
import { rootReducer } from 'glyph-react-poc';

const store = createStore(
    rootReducer,
    /* istanbul ignore next */
    (window as any)['__REDUX_DEVTOOLS_EXTENSION__']?.(),
);

export default store;
