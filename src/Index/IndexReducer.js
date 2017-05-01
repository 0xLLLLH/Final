import {combineReducers} from 'react-redux';

import * as api from './api';

import { ActionTypes } from './IndexActions';

const account = (state, action) => {
    const {userName, password} = action.data;
    switch (action.type) {
    case ActionTypes.register:
        return api.register({
            userName,
            password
        });
    case ActionTypes.login:
        return api.login({
            userName,
            password
        });
    default:
        return {
            isLogedIn: false
        };
    }
};

const error = (state, action) => {
    const { msg } = action.data;
    switch (action.type) {
    case ActionTypes.showError:
        return {
            hasError: true,
            msg
        };
    default:
        return {
            hasError: false,
            msg: ''
        };
    }
};

export default combineReducers({
    account,
    error
});
