import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';

import { loadState, saveState } from './localStorage';

import Reducer from './Reducer';

const getConfiguredStore = () => {
    const preloadedState = loadState();
    const middlewares = [promise, createLogger()];
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
