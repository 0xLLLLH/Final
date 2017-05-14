import { combineReducers } from 'redux';

import TodoList from '../TodoList/TodoListReducer';
import Index from '../Index/IndexReducer';

import { ActionTypes } from './AppActions';

const account = (state, action) => {
    switch (action.type) {
    case ActionTypes.fetchUserData:
        return {
            ...action.data,
            isLogedIn: true,
        };
    default:
        return {
            isLogedIn: false
        };
    }
};

const message = (state, action) => {
    if (action.type === ActionTypes.showMsg) {
        const { type, msg } = action.data;
        return {
            type,
            msg
        };
    }
    return {
        type: null
    };
};


export default combineReducers({
    account,
    message,
    TodoList,
    Index
});
