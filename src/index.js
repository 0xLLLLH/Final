import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App/app';
import Reducer from './App/Reducer';

const store = createStore(Reducer);

function renderContainer() {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>,
        document.getElementById('container')
    );
}
renderContainer();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept([
        './App/app',
        './App/Reducer'
    ], () => {
        const nextReducer = require('./App/Reducer').default;
        store.replaceReducer(nextReducer);
        renderContainer();
    });
}