import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR
import { Provider } from 'react-redux';

import App from './App/app';
import getConfiguredStore from './App/configureStore';

const store = getConfiguredStore();

function renderContainer() {
    ReactDOM.render(
        <AppContainer
            style={{
                width: '100%',
                height: '100%'
            }}
        >
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
        const nextReducer = require('./App/Reducer').default;       // eslint-disable-line
        store.replaceReducer(nextReducer);
        renderContainer();
    });
}
