import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStorage';

import Reducer from './Reducer';

const getConfiguredStore = () => {
    const preloadedState = loadState();
    const actionLogger = ({dispatch, getState}) => next => (action) => {
        console.log(action);    // eslint-disable-line no-console
        return next(action);
    };
    const middlewares = [actionLogger];
    const store = createStore(
        Reducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(...middlewares),
            // other store enhancers if any
        )
    );

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }, 1000));

    return store;
};

export default getConfiguredStore;
