import {combineReducers} from 'react-redux';

import {ActionTypes} from './IndexActions';

const account = (state, action) => {
    const {userName, password} = action.data;
    switch (action.type) {
    case ActionTypes.registerAccount:
        return {
            isLogedIn: true,
            userName,
            password
        };
    default:
        return {
            isLogedIn: false,
            userName: '',
            password: ''
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
